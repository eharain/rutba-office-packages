// English text to the phonemes Kokoro's English voices read, US or British.
//
// Our own code, written for Rutba Office. The pronunciations come from the
// CMU Pronouncing Dictionary (BSD 2-clause), in the pronunciation pack
// `speech-en-kokoro`, plus an Office word list. CMUdict writes US English in
// ARPAbet; this file turns ARPAbet into the symbols Kokoro's voices learned,
// with US rules (the flapped t of "water", r kept) or British rules (r dropped
// after a vowel, long vowels, the vowels of "lot" and "bath"). No eSpeak, no
// phonemizer, nothing from misaki's dictionaries.
//
// What it does not yet do, said so the checks can count it: words read two
// ways by grammar (read, live, lead) take the more common reading; a word in
// no dictionary that is not built from one is spelt out letter by letter.

import { speakNumbers } from './en-numbers.mjs';

// ARPAbet to Kokoro. Consonants are the same in both accents.
const CONSONANT = {
  B: 'b', CH: 'ʧ', D: 'd', DH: 'ð', F: 'f', G: 'ɡ', HH: 'h', JH: 'ʤ', K: 'k', L: 'l', M: 'm', N: 'n', NG: 'ŋ',
  P: 'p', R: 'ɹ', S: 's', SH: 'ʃ', T: 't', TH: 'θ', V: 'v', W: 'w', Y: 'j', Z: 'z', ZH: 'ʒ',
};
const US_VOWEL = {
  AA: 'ɑ', AE: 'æ', AH: 'ʌ', AO: 'ɔ', AW: 'W', AY: 'I', EH: 'ɛ', ER: 'ɜɹ', EY: 'A', IH: 'ɪ', IY: 'i', OW: 'O', OY: 'Y', UH: 'ʊ', UW: 'u',
};
const GB_VOWEL = {
  AA: 'ɑː', AE: 'a', AH: 'ʌ', AO: 'ɔː', AW: 'W', AY: 'I', EH: 'ɛ', ER: 'ɜː', EY: 'A', IH: 'ɪ', IY: 'iː', OW: 'Q', OY: 'Y', UH: 'ʊ', UW: 'uː',
};
/** Before an r that is not followed by a vowel, British English says these instead (and drops the r). */
const GB_BEFORE_R = { EH: 'ɛə', IH: 'ɪə', UH: 'ʊə', AA: 'ɑː', AO: 'ɔː', AE: 'ɑː', AY: 'Iə', AW: 'Wə', EY: 'ɛə', IY: 'ɪə', UW: 'ʊə', OW: 'ɔː' };

/** Words with the long "bath" vowel in southern British English, and the words built on them. */
const BATH = new Set(('after advance advantage answer ask aunt banana basket bath blast branch brass calf can\'t cast castle chance '
  + 'chant class command craft dance demand disaster draft example fast fasten flask france glance glass graft grant grass half '
  + 'last laugh laughter mask master nasty pass past pastor path plant raft rather sample shaft staff task vast').split(' '));
const BATH_ENDINGS = ['', 's', 'es', 'ed', 'ing', 'er', 'ers', 'ly'];

/** Unstressed short words, said reduced in running speech. */
const WEAK = {
  a: 'ə', an: 'ən', the: 'ðə', and: 'ənd', of: 'əv', to: 'tə', for: { us: 'fəɹ', gb: 'fə' }, from: 'fɹəm',
  or: { us: 'ɔɹ', gb: 'ɔː' }, are: { us: 'ɑɹ', gb: 'ɑː' }, was: 'wəz', at: 'ət', as: 'əz', but: 'bət', can: 'kən',
  than: 'ðən', that: 'ðət', some: 'səm', them: 'ðəm', us: 'əs', your: { us: 'jəɹ', gb: 'jə' }, her: { us: 'həɹ', gb: 'hə' },
};
/** Every other short word that carries no stress of its own in a sentence. */
const UNSTRESSED = new Set('in on is it be by he she we me my his its i with you they has have had do does been were will would should could not if so no up'.split(' '));

/** The reading taken for words read two ways, until a part-of-speech guess is chosen. */
const PREFER = { read: 'R IY1 D', live: 'L IH1 V', lead: 'L IY1 D', wind: 'W IH1 N D', close: 'K L OW1 Z', use: 'Y UW1 Z', tear: 'T EH1 R', wound: 'W UW1 N D', minute: 'M IH1 N AH0 T', present: 'P R EH1 Z AH0 N T', record: 'R EH1 K ER0 D', object: 'AA1 B JH EH0 K T', content: 'K AA1 N T EH0 N T' };

const LETTERS = {
  a: 'EY1', b: 'B IY1', c: 'S IY1', d: 'D IY1', e: 'IY1', f: 'EH1 F', g: 'JH IY1', h: 'EY1 CH', i: 'AY1', j: 'JH EY1',
  k: 'K EY1', l: 'EH1 L', m: 'EH1 M', n: 'EH1 N', o: 'OW1', p: 'P IY1', q: 'K Y UW1', r: 'AA1 R', s: 'EH1 S', t: 'T IY1',
  u: 'Y UW1', v: 'V IY1', w: 'D AH1 B AH0 L Y UW0', x: 'EH1 K S', y: 'W AY1', z: { us: 'Z IY1', gb: 'Z EH1 D' },
};

const ABBREVIATIONS = {
  'mr.': 'mister', 'mrs.': 'missus', 'ms.': 'miz', 'dr.': 'doctor', 'st.': 'saint', 'prof.': 'professor', 'jr.': 'junior', 'sr.': 'senior',
  'etc.': 'et cetera', 'e.g.': 'for example', 'i.e.': 'that is', 'vs.': 'versus', 'approx.': 'approximately', 'no.': 'number', 'dept.': 'department',
};

const VOWELS = new Set(Object.keys(US_VOWEL));
const isVowel = (p) => VOWELS.has(p.replace(/\d$/, ''));
const stressOf = (p) => (/\d$/.test(p) ? Number(p.slice(-1)) : -1);

/**
 * Parse the pronunciation pack's dictionary: one word per line, the word, two
 * spaces, ARPAbet. "word(2)" lines are other readings; the first is kept as the
 * default and the rest are offered to PREFER.
 * @param {string} text
 * @returns {Map<string, string[]>}
 */
export function parseDictionary(text) {
  const map = new Map();
  for (const line of text.split('\n')) {
    if (!line || line.startsWith(';;;')) continue;
    const at = line.indexOf(' ');
    if (at < 1) continue;
    const word = line.slice(0, at).replace(/\(\d+\)$/, '').toLowerCase();
    const phones = line.slice(at + 1).replace(/#.*$/, '').trim();
    if (!phones) continue;
    const list = map.get(word);
    if (list) list.push(phones); else map.set(word, [phones]);
  }
  return map;
}

/**
 * ARPAbet for one word to Kokoro's symbols.
 * @param {string} arpabet  e.g. "W AO1 T ER0"
 * @param {{ accent: 'us'|'gb', word?: string, stress?: boolean }} o
 */
export function arpabetToKokoro(arpabet, { accent, word = '', stress = true }) {
  const gb = accent === 'gb';
  const ph = arpabet.trim().split(/\s+/);
  // A final -y marked with secondary stress after a stressed syllable is weak (ability, city).
  const last = ph.length - 1;
  if (/^IY2$/.test(ph[last]) && ph.slice(0, last).some((x) => /1$/.test(x))) ph[last] = 'IY0';
  const out = [];
  const spelt = word.toLowerCase();
  const bathWord = gb && [...BATH].some((b) => BATH_ENDINGS.some((e) => spelt === b + e));
  for (let i = 0; i < ph.length; i++) {
    const p = ph[i];
    const prev = ph[i - 1];
    const next = ph[i + 1];
    const after = ph[i + 2];
    if (isVowel(p)) {
      const base = p.replace(/\d$/, '');
      const s = stressOf(p);
      let sym;
      const nextVowel = next !== undefined && isVowel(next);
      if (base === 'ER') sym = s === 0 ? (gb && !nextVowel ? 'ə' : 'əɹ') : (gb ? (nextVowel ? 'ɜːɹ' : 'ɜː') : 'ɜɹ');
      else if (base === 'AH' && s === 0) {
        // A weak vowel before a final l after a consonant is the small schwa (able, little),
        // and before a final n after t or d (button), or after any consonant in British English (nation).
        const final = after === undefined && prev && !isVowel(prev);
        sym = final && (next === 'L' || (next === 'N' && (gb || prev === 'T' || prev === 'D'))) ? 'ᵊ' : 'ə';
      } else if (!gb && base === 'IH' && s === 0 && ((after === undefined && (next === 'D' || next === 'Z')) || (next === 'S' && after === 'T' && ph[i + 3] === undefined))) {
        sym = 'ᵻ'; // the weak vowel of -ed, -es and -est in US English (wanted, boxes, fastest)
      } else if (gb && base === 'IY' && s === 0 && next !== undefined) {
        sym = 'ɪ'; // British weak i inside a word (abbreviate)
      } else if (gb && next === 'R' && (after === undefined || !isVowel(after)) && GB_BEFORE_R[base]) {
        sym = GB_BEFORE_R[base];
        if (base === 'AE' && !bathWord) sym = 'ɑː';
        i++; // the r is dropped
      } else if (gb && base === 'AE' && bathWord) sym = 'ɑː';
      else if (gb && (base === 'AA' || base === 'AO') && /o/.test(spelt) && !/(ough|augh|aw|au|oar|our|ore|oor)|^al|[^o]al[lkt]/.test(spelt)) sym = 'ɒ';
      else if (s === 0 && base === 'IY') sym = 'i';
      else if (s === 0 && base === 'UW') sym = 'u';
      else sym = (gb ? GB_VOWEL : US_VOWEL)[base];
      if (stress && s === 1) out.push('ˈ');
      else if (stress && s === 2) out.push('ˌ');
      out.push(sym);
      continue;
    }
    if (p === 'R' && gb && (next === undefined || !isVowel(next))) continue; // British: no r before a consonant or at the end
    if (p === 'T' && !gb && i > 0 && (isVowel(prev) || prev === 'R') && next && isVowel(next) && stressOf(next) === 0) {
      // US flap: water, city, party, computer. Not before the small schwa of "button".
      if (next.startsWith('AH') && (ph[i + 2] === 'N') && ph[i + 3] === undefined) { out.push('ʔ'); i++; continue; }
      out.push('ɾ');
      continue;
    }
    out.push(CONSONANT[p] ?? '');
  }
  return out.join('');
}

/** A spaced en dash, or any em dash, read as a pause. Built from code points so the source holds no dash characters. */
const EN = String.fromCharCode(0x2013);
const EM = String.fromCharCode(0x2014);
const LONG_DASH = new RegExp(`\\s[${EN}${EM}]\\s|${EM}`, 'g');

const pick = (v, accent) => (typeof v === 'object' ? v[accent] : v);

/**
 * A word's pronunciation, or null if neither the dictionary nor a rule knows it.
 * @param {string} word  lower case
 * @param {Map<string, string[]>} dict
 * @param {'us'|'gb'} accent
 */
export function lookup(word, dict, accent) {
  if (Object.prototype.hasOwnProperty.call(PREFER, word) && PREFER[word] && dict.has(word)) return PREFER[word];
  const hit = dict.get(word);
  if (hit) return hit[0];
  // Possessives and plurals, past tenses and the like, built on a known word.
  const rules = [
    [/'s$/, '', (b) => sibilantEnd(b) ? 'AH0 Z' : voicelessEnd(b) ? 'S' : 'Z'],
    [/s'$/, '', () => ''],
    [/ies$/, 'y', () => 'Z'],
    [/es$/, '', (b) => sibilantEnd(b) ? 'AH0 Z' : null],
    [/s$/, '', (b) => voicelessEnd(b) ? 'S' : 'Z'],
    [/ied$/, 'y', () => 'D'],
    [/ed$/, '', (b) => /[TD]$/.test(b) ? 'AH0 D' : voicelessEnd(b) ? 'T' : 'D'],
    [/ed$/, 'e', (b) => /[TD]$/.test(b) ? 'AH0 D' : voicelessEnd(b) ? 'T' : 'D'],
    [/d$/, '', (b) => (/[TD]$/.test(b) ? null : voicelessEnd(b) ? 'T' : 'D')],
    [/([bdfgklmnprtvz])\1ed$/, '$1', (b) => /[TD]$/.test(b) ? 'AH0 D' : voicelessEnd(b) ? 'T' : 'D'],
    [/ing$/, '', () => 'IH0 NG'],
    [/ing$/, 'e', () => 'IH0 NG'],
    [/([bdfgklmnprtvz])\1ing$/, '$1', () => 'IH0 NG'],
    [/([bdfgklmnprtvz])\1er$/, '$1', () => 'ER0'],
    [/ly$/, '', () => 'L IY0'],
    [/ness$/, '', () => 'N AH0 S'],
    [/ment$/, '', () => 'M AH0 N T'],
    [/less$/, '', () => 'L AH0 S'],
    [/ful$/, '', () => 'F AH0 L'],
    [/er$/, '', () => 'ER0'],
    [/ers$/, '', () => 'ER0 Z'],
  ];
  for (const [end, put, suffix] of rules) {
    if (!end.test(word)) continue;
    const stem = word.replace(end, put);
    const base = stem.length > 1 && dict.get(stem)?.[0];
    if (!base) continue;
    const add = suffix(base);
    if (add === null) continue;
    return add ? `${base} ${add}` : base;
  }
  // Two known words run together (spreadsheet, workbook).
  for (let i = 3; i <= word.length - 3; i++) {
    const a = dict.get(word.slice(0, i))?.[0];
    const b = a && dict.get(word.slice(i))?.[0];
    if (a && b) return `${a} ${b.replace(/1/g, '2')}`;
  }
  return null;
}

const voicelessEnd = (arpa) => /\b(P|T|K|F|TH)$/.test(arpa);
const sibilantEnd = (arpa) => /\b(S|Z|SH|ZH|CH|JH)$/.test(arpa);

/** A word spelt out: "PDF" as pee dee eff. */
export function spell(word, accent) {
  return word.toLowerCase().split('').filter((c) => LETTERS[c]).map((c) => pick(LETTERS[c], accent)).join(' ');
}

/**
 * English text to phonemes, with what had to be guessed.
 * @param {string} text
 * @param {{ dict: Map<string, string[]>, accent?: 'us'|'gb', words?: Map<string, string> }} o
 *   `words` is the Office word list (word -> ARPAbet), checked before the dictionary.
 * @returns {{ phonemes: string, spelt: string[] }}
 */
export function englishToPhonemes(text, { dict, accent = 'us', words = new Map() }) {
  const gb = accent === 'gb';
  let t = ` ${text} `
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(LONG_DASH, ', ')
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/@/g, ' at ');
  t = t.replace(/(^|\s)((?:[a-z]\.){2,}|[a-z]+\.)(?=\s)/gi, (m, sp, ab) => (ABBREVIATIONS[ab.toLowerCase()] ? `${sp}${ABBREVIATIONS[ab.toLowerCase()]} ` : m));
  t = speakNumbers(t, { gb });

  const spelt = [];
  const out = [];
  // Words (with an inner apostrophe or hyphen) and the punctuation the voices know.
  const tokens = t.match(/[A-Za-z]+(?:['-][A-Za-z]+)*'?|[,.!?;:…"()]/g) || [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (/^[,.!?;:…"()]$/.test(tok)) { out.push(tok); continue; }
    for (const part of tok.split('-')) {
      const lower = part.toLowerCase();
      const nextWord = tokens.slice(i + 1).find((x) => /^[A-Za-z]/.test(x)) || '';
      if (lower === 'the' && /^[aeiou]/i.test(nextWord)) { out.push(' ðɪ'); continue; }
      if (WEAK[lower] !== undefined) { out.push(` ${pick(WEAK[lower], accent)}`); continue; }
      const listed = words.get(lower);
      // Capitals of up to five letters that no list knows are read as letters (PDF, USB).
      const acronym = /^[A-Z]{2,5}s?$/.test(part) && !listed;
      let arpa = listed || (acronym ? null : lookup(lower, dict, accent));
      if (!arpa) {
        arpa = spell(part.replace(/s$/, (s) => (acronym ? '' : s)), accent) + (acronym && /s$/.test(part) ? ' Z' : '');
        if (!acronym) spelt.push(part);
      }
      out.push(` ${arpabetToKokoro(arpa, { accent, word: lower, stress: !UNSTRESSED.has(lower) })}`);
    }
  }
  const phonemes = out.join('').replace(/ ([,.!?;:…)])/g, '$1').replace(/\( /g, '(').replace(/\s+/g, ' ').trim();
  return { phonemes, spelt };
}
