// The speaker: text in a language, a voice, a speed in; samples out.
//
// Joins the text steps (text/) and the runner. Pure: given the runtime, the
// model session, the vocabulary, each language's pronunciation data and the
// voices' bytes, it needs no Electron and no file system, so the tests drive
// it with a stand-in runtime and the utility process (worker.mjs) with the
// real one.

import { createRunner, readVoice, MAX_PHONEMES, SAMPLE_RATE } from './runner.mjs';
import { englishToPhonemes, parseDictionary } from './text/en.mjs';
import { fitPhonemes } from './text/segment.mjs';

/**
 * The text steps by language, as voice packs name their language (BCP 47).
 * Each takes text and its pronunciation data and gives phonemes. A language
 * with no step here has no Kokoro voice yet; the reader uses a system voice.
 */
const STEPS = {
  'en-US': (text, data) => englishToPhonemes(text, { dict: data.dict, words: data.words, accent: 'us' }),
  'en-GB': (text, data) => englishToPhonemes(text, { dict: data.dict, words: data.words, accent: 'gb' }),
};

export const languages = () => Object.keys(STEPS);

/**
 * The English pronunciation pack's files, parsed: CMUdict and the Office word list.
 * @param {{ 'cmudict.dict': string, 'office-words.txt'?: string }} files
 */
export function englishData(files) {
  const dict = parseDictionary(files['cmudict.dict']);
  const words = new Map();
  for (const line of String(files['office-words.txt'] || '').split('\n')) {
    if (!line.trim() || line.startsWith(';;;')) continue;
    const at = line.indexOf(' ');
    words.set(line.slice(0, at), line.slice(at + 1).trim());
  }
  return { dict, words };
}

/**
 * @param {{ ort: object, session: object, vocab: Record<string, number> }} o
 */
export function createSpeaker({ ort, session, vocab }) {
  const runner = createRunner(ort, session, vocab);
  const data = new Map();   // pronunciation pack id -> parsed data
  const voices = new Map(); // voice id -> { language, floats, pronunciation }
  let generation = 0;

  return {
    /** A language's pronunciation data, parsed once. */
    addPronunciation(id, parsed) { data.set(id, parsed); },
    /** A voice's bytes and what it needs. */
    addVoice(id, { language, bytes, pronunciation }) {
      if (!STEPS[language]) throw new Error(`no text step for ${language} yet`);
      voices.set(id, { language, floats: readVoice(bytes), pronunciation });
    },
    removeVoice(id) { voices.delete(id); },
    voiceIds: () => [...voices.keys()],
    /** Everything asked before now and not yet spoken is dropped. */
    cancel() { generation++; },

    /**
     * One sentence (or clause) as samples. Long text is cut for the model at
     * clauses and joined again with a short pause.
     * @param {{ text: string, voice: string, speed?: number }} req
     * @returns {Promise<{ samples: Float32Array, rate: number, spelt: string[], guessed: string[], cancelled?: boolean }>}
     *   `spelt`: the words read letter by letter; `guessed`: the words sounded out from their letters.
     */
    async say({ text, voice, speed = 1 }) {
      const v = voices.get(voice);
      if (!v) throw new Error(`the voice ${voice} is not added`);
      const pron = data.get(v.pronunciation);
      if (!pron) throw new Error(`the pronunciation pack ${v.pronunciation} is not added`);
      const mine = generation;
      const { phonemes, spelt, guessed = [] } = STEPS[v.language](String(text), pron);
      const parts = [];
      for (const piece of fitPhonemes(phonemes, MAX_PHONEMES)) {
        if (mine !== generation) return { samples: new Float32Array(0), rate: SAMPLE_RATE, spelt, guessed, cancelled: true };
        const { samples } = await runner.say(piece, v.floats, { speed });
        parts.push(samples);
      }
      if (mine !== generation) return { samples: new Float32Array(0), rate: SAMPLE_RATE, spelt, guessed, cancelled: true };
      const gap = Math.round(SAMPLE_RATE * 0.12);
      const total = parts.reduce((n, p) => n + p.length, 0) + gap * Math.max(parts.length - 1, 0);
      const out = new Float32Array(total);
      let at = 0;
      for (const [i, p] of parts.entries()) { if (i) at += gap; out.set(p, at); at += p.length; }
      return { samples: out, rate: SAMPLE_RATE, spelt, guessed };
    },
  };
}
