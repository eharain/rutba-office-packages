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
// A word in no list is first taken apart (a known word with an ending or a
// beginning, two known words run together, a name written in camel case),
// then sounded out from its letters (en-sound.mjs), and only then spelt out
// letter by letter. What was sounded out is answered as `guessed` and what
// was spelt as `spelt`, so the checks can count both and the Office word list
// can be given the words that matter.
//
// What it does not yet do: words read two ways by grammar (read, lead) take
// the more common reading. "live" alone is chosen by the words beside it.

import { speakNumbers } from './en-numbers.mjs';
import { guessWord } from './en-sound.mjs';

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
const PREFER = { read: 'R IY1 D', lead: 'L IY1 D', wind: 'W IH1 N D', close: 'K L OW1 Z', use: 'Y UW1 Z', tear: 'T EH1 R', wound: 'W UW1 N D', minute: 'M IH1 N AH0 T', present: 'P R EH1 Z AH0 N T', record: 'R EH1 K ER0 D', object: 'AA1 B JH EH0 K T', content: 'K AA1 N T EH0 N T' };

const LETTERS = {
  a: 'EY1', b: 'B IY1', c: 'S IY1', d: 'D IY1', e: 'IY1', f: 'EH1 F', g: 'JH IY1', h: 'EY1 CH', i: 'AY1', j: 'JH EY1',
  k: 'K EY1', l: 'EH1 L', m: 'EH1 M', n: 'EH1 N', o: 'OW1', p: 'P IY1', q: 'K Y UW1', r: 'AA1 R', s: 'EH1 S', t: 'T IY1',
  u: 'Y UW1', v: 'V IY1', w: 'D AH1 B AH0 L Y UW0', x: 'EH1 K S', y: 'W AY1', z: { us: 'Z IY1', gb: 'Z EH1 D' },
};

const ABBREVIATIONS = {
  'mr.': 'mister', 'mrs.': 'missus', 'ms.': 'miz', 'dr.': 'doctor', 'st.': 'saint', 'prof.': 'professor', 'jr.': 'junior', 'sr.': 'senior',
  'etc.': 'et cetera', 'e.g.': 'for example', 'i.e.': 'that is', 'vs.': 'versus', 'approx.': 'approximately', 'no.': 'number', 'dept.': 'department',
};

/**
 * Short words written in capitals that are words, not initials: the short
 * words of SQL and of plain speech (NOT, SET, KEY, OLD) and the few initials
 * said as a word (PIN, RAM). Every other two or three capitals are read as
 * letters, and so are US, IT and UN.
 */
const CAPITAL_WORDS = new Set(('no ok is in on by if do go up my we he me so be '
  + 'not set all add end key max min sum row new yes any top now day out off use get put run you has had how why one two ten '
  + 'old our his its him she may did let say see way too own big bad few nor yet ago due tax pay buy fee job law box cut fix try win '
  + 'low hot red six got lot far pin sim ram rom lan wan zip jar bin mac nat').split(' '));

/**
 * Whether capitals are initials, read letter by letter (PDF, USB, SMTP). Up to
 * three, they are unless listed above. Four or five are a word when the
 * dictionary has it (UNION, NULL, NASA) and initials when it does not.
 */
function initials(part, dict) {
  if (!/^[A-Z]{2,5}s?$/.test(part)) return false;
  const bare = part.replace(/s$/, '').toLowerCase();
  return bare.length <= 3 ? !CAPITAL_WORDS.has(bare) : !dict.has(bare);
}

// "live": the verb (they live in Lahore) or the word for what is on air now (going live, a live broadcast).
const LIVE_VERB = 'L IH1 V';
const LIVE_NOW = 'L AY1 V';
const set = (s) => new Set(s.split(' '));
/** Words looked past on the way to the word that decides. */
const LIVE_SKIP = set('not now still also already just really always never currently only even then');
/** After these it is the verb, unless what follows is something that is live. */
const LIVE_AFTER_SUBJECT = set("i we you they who people will would can could should may might must shall do does did don't doesn't didn't won't can't cannot "
  + "couldn't wouldn't shouldn't long let lets let's i'll we'll you'll they'll he'll she'll i'd we'd they'd");
/** After these it is on air: is live, going live, running live, streamed live. */
const LIVE_AFTER_STATE = set("is are was were be been being am it's that's go goes going went gone stream streams streamed streaming broadcast broadcasts broadcasting "
  + 'air airs aired airing play plays played playing perform performs performed performing record records recorded recording run runs ran running '
  + 'show shows showed shown showing watch watches watched watching see seen sing sings sang sung push pushed deploy deployed set put get gets got getting come comes came coming back');
/** "to live" after these is a move to what is live (switch to live), not the verb. */
const LIVE_MOVE = set('switch switches switched switching go goes going went back over return returns returned cut cuts move moves moved change changes changed changing from');
/** What is live: before these it is never the verb. */
const LIVE_THINGS = set('broadcast broadcasts broadcasting stream streams streaming streamed view preview video audio show shows event events music chat demo demos session sessions '
  + 'feed data update updates coverage performance tv television radio site server system environment mode link call calls meeting meetings class classes recording '
  + 'captions caption transcription score scores results support action webinar concert sport sports match game games news report reports blog tracking location '
  + 'photo photos tile tiles edit editing collaboration poll polls translation subtitles picture sound output');
/** Before these it is the verb: live in, live with, live there. */
const LIVE_BEFORE_PLACE = set('in at with here there near alone together abroad under among longer forever without through happily until up by like off within outside nearby elsewhere apart');
/** At the start of a sentence it is the verb only before these (Live long, Live well). */
const LIVE_OPENING_VERB = set('long well your life like free simply here there with');
/** Words ending in s that are not a plural going before the verb. */
const NOT_PLURAL = set('this its his as was is has does goes plus less across always perhaps sometimes us yes thus');

/**
 * The reading of "live" at `at` in the sentence's words and marks.
 * @param {{ word?: string, mark?: string }[]} parts
 * @param {number} at
 */
function liveReading(parts, at) {
  const lowerAt = (i) => parts[i]?.word?.toLowerCase();
  // The words before, in this clause, nearest first.
  const before = [];
  for (let i = at - 1; i >= 0 && parts[i].word; i--) if (!LIVE_SKIP.has(lowerAt(i))) before.push(lowerAt(i));
  const prev = before[0] || '';
  let n = at + 1;
  while (parts[n]?.word && LIVE_SKIP.has(lowerAt(n))) n++;
  const next = lowerAt(n) || '';
  const opens = at === 0 || /^[.!?…:;("]$/.test(parts[at - 1].mark || '');
  if (LIVE_AFTER_STATE.has(prev)) return LIVE_NOW;
  if (LIVE_THINGS.has(next)) return LIVE_NOW;
  if (prev === 'to') return LIVE_MOVE.has(before[1] || '') ? LIVE_NOW : LIVE_VERB;
  if (LIVE_AFTER_SUBJECT.has(prev)) return LIVE_VERB;
  // Named in the middle of a sentence, it is the Live of the suite or of a screen.
  if (/^[A-Z]/.test(parts[at].word) && !opens) return LIVE_NOW;
  if (opens) return LIVE_OPENING_VERB.has(next) ? LIVE_VERB : LIVE_NOW;
  if (LIVE_BEFORE_PLACE.has(next)) return LIVE_VERB;
  // "Where the settings live": what has a place lives there.
  if (before.includes('where')) return LIVE_VERB;
  if (prev.length > 3 && /[^s']s$/.test(prev) && !NOT_PLURAL.has(prev)) return LIVE_VERB;
  return LIVE_NOW;
}

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

const NO_WORDS = new Map();

/**
 * A beginning put before a known word, and its sound. The ones that are words
 * themselves take the stress, as the first of two words run together does
 * (subtotal, autosave, hyperlink); the rest leave it to the word (resize,
 * unsaved, non-breaking).
 */
const BEGINNINGS = [
  ['inter', 'IH1 N T ER0', true], ['multi', 'M AH1 L T IY0', true], ['micro', 'M AY1 K R OW0', true], ['under', 'AH1 N D ER0', true], ['hyper', 'HH AY1 P ER0', true],
  ['over', 'OW1 V ER0', true], ['auto', 'AO1 T OW0', true], ['anti', 'AE1 N T IY0', true], ['semi', 'S EH1 M IY0', true], ['meta', 'M EH1 T AH0', true],
  ['sub', 'S AH1 B', true], ['non', 'N AA2 N'], ['pre', 'P R IY0'], ['mis', 'M IH0 S'], ['dis', 'D IH0 S'], ['un', 'AH0 N'], ['re', 'R IY0'], ['de', 'D IY0'],
];

/** British spellings the dictionary has only the American of: flavoured, organise, labelled. */
const AMERICAN = [[/our/, 'or'], [/is(e|ed|es|ing|er|ers|ation|ations)$/, 'iz$1'], [/ys(e|ed|es|ing)$/, 'yz$1'], [/ll(ed|ing|er|ers)$/, 'l$1'], [/tre(s?)$/, 'ter$1'], [/ogue(s?)$/, 'og$1']];

/**
 * A word's pronunciation, or null if neither the lists nor a rule knows it.
 * @param {string} word  lower case
 * @param {Map<string, string[]>} dict
 * @param {'us'|'gb'} accent
 * @param {Map<string, string>} [words] the Office word list, asked before the dictionary, for the word and for what it is built on
 */
export function lookup(word, dict, accent, words = NO_WORDS) {
  if (Object.prototype.hasOwnProperty.call(PREFER, word) && PREFER[word] && dict.has(word)) return PREFER[word];
  const known = (w) => words.get(w) || dict.get(w)?.[0] || null;
  const find = (w) => {
    const hit = known(w);
    if (hit) return hit;
    // Built straight on a known word (resized is re + sized, subtotal is sub + total) ...
    const direct = buildOn(w, known);
    if (direct) return direct;
    // ... or on a word itself built so (transactionally, unconfigurable).
    const deeper = buildOn(w, (stem) => known(stem) || (stem.length >= 4 ? buildOn(stem, known) : null));
    if (deeper) return deeper;
    // Two known words run together (spreadsheet, workbook). Not across an apostrophe: a name's 's is not a word.
    for (let i = 3; /^[a-z]+$/.test(w) && i <= w.length - 3; i++) {
      const a = known(w.slice(0, i));
      const b = a && known(w.slice(i));
      if (a && b) return `${a} ${b.replace(/1/g, '2')}`;
    }
    return null;
  };
  const found = find(word);
  if (found) return found;
  for (const [british, american] of AMERICAN) {
    const other = word.replace(british, american);
    const said = other !== word && find(other);
    if (said) return said;
  }
  return null;
}

/**
 * A word built on a known one: with an ending (plurals, past tenses, -al,
 * -able) or with a beginning (un-, re-, sub-). `stemOf` answers what it is
 * built on, or null. The endings that make a new word (-al, -able, -ify,
 * -ize) want four letters before them: "resize" is not "res" with -ize.
 */
function buildOn(word, stemOf) {
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
    [/ly$/, '', (b) => (/\bL$/.test(b) ? 'IY0' : 'L IY0')],
    [/ness$/, '', () => 'N AH0 S'],
    [/ment$/, '', () => 'M AH0 N T'],
    [/less$/, '', () => 'L AH0 S'],
    [/ful$/, '', () => 'F AH0 L'],
    [/er$/, '', () => 'ER0'],
    [/ers$/, '', () => 'ER0 Z'],
    [/r$/, '', (b) => (/e$/.test(word.slice(0, -1)) ? 'ER0' : null), 4],
    [/rs$/, '', (b) => (/e$/.test(word.slice(0, -2)) ? 'ER0 Z' : null), 4],
    [/ally$/, '', (b) => (/\bK$/.test(b) ? 'L IY0' : 'AH0 L IY0'), 4],
    [/al$/, '', () => 'AH0 L', 4],
    [/able$/, '', () => 'AH0 B AH0 L', 4],
    [/able$/, 'e', () => 'AH0 B AH0 L', 4],
    [/ify$/, '', () => 'IH0 F AY2', 4],
    [/ize$/, '', () => 'AY2 Z', 4],
    [/ive$/, 'e', () => 'IH0 V', 4],
  ];
  for (const [end, put, suffix, min = 2] of rules) {
    if (!end.test(word)) continue;
    const stem = word.replace(end, put);
    const base = stem.length >= min && stemOf(stem);
    if (!base) continue;
    const add = suffix(base);
    if (add === null) continue;
    return add ? `${base} ${add}` : base;
  }
  for (const [begin, sound, stressed] of BEGINNINGS) {
    if (!word.startsWith(begin) || word.length - begin.length < 3) continue;
    const base = stemOf(word.slice(begin.length));
    if (base) return `${sound} ${stressed ? base.replace(/1/g, '2') : base}`;
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
 * @returns {{ phonemes: string, spelt: string[], guessed: string[] }}
 *   `spelt`: the words read letter by letter for want of anything better; `guessed`: the words sounded out from their letters.
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
  const guessed = [];
  const out = [];
  // Words (with an inner apostrophe or hyphen) and the punctuation the voices know.
  const tokens = t.match(/[A-Za-z]+(?:['-][A-Za-z]+)*'?|[,.!?;:…"()]/g) || [];
  // Each word in its place among the marks, so one read two ways can look at the words beside it.
  /** @type {{ word?: string, mark?: string }[]} */
  const parts = [];
  for (const tok of tokens) {
    if (/^[,.!?;:…"()]$/.test(tok)) parts.push({ mark: tok });
    else for (const word of tok.split('-')) parts.push({ word });
  }

  /**
   * One written word as ARPAbet, a piece for each word it is said as.
   * @param {string} part as written
   * @param {number} at its place in `parts`, or -1 for a piece of a longer word
   * @returns {{ arpa: string, word: string, letters?: boolean }[]}
   */
  const read = (part, at) => {
    const lower = part.toLowerCase();
    const as = (arpa) => [{ arpa, word: lower }];
    const listed = words.get(lower);
    if (listed) return as(listed);
    if (lower === 'live' && at >= 0) return as(liveReading(parts, at));
    // Capitals that are initials are read as letters (PDF, USB), a plural's s after them.
    if (initials(part, dict)) return [{ arpa: `${spell(part.replace(/s$/, ''), accent)}${/s$/.test(part) ? ' Z' : ''}`, word: lower, letters: true }];
    const known = lookup(lower, dict, accent, words);
    if (known) return as(known);
    // A name's 's is said after the name, however the name comes to be read.
    const owned = /'s?$/.exec(part)?.[0] || '';
    if (owned && part.length > owned.length) {
      const name = read(part.slice(0, -owned.length), -1);
      const last = name[name.length - 1];
      if (owned === "'s") last.arpa = `${last.arpa} ${sibilantEnd(last.arpa) ? 'AH0 Z' : voicelessEnd(last.arpa) ? 'S' : 'Z'}`;
      return name;
    }
    // A name written in camel case is its pieces: MySQL, pgAdmin, macOS.
    const pieces = part.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+/g) || [];
    if (pieces.length > 1) return pieces.flatMap((p) => read(p, -1));
    const guess = guessWord(lower, { known: (w) => lookup(w, dict, accent, words), letters: (w) => spell(w, accent) });
    if (guess) {
      guessed.push(part);
      return as(guess);
    }
    spelt.push(part);
    return as(spell(part, accent));
  };

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].mark) { out.push(parts[i].mark); continue; }
    const part = parts[i].word;
    const lower = part.toLowerCase();
    const nextWord = parts.slice(i + 1).find((x) => x.word)?.word || '';
    if (lower === 'the' && /^[aeiou]/i.test(nextWord)) { out.push(' ðɪ'); continue; }
    // The country in capitals is not the weak word "us".
    if (WEAK[lower] !== undefined && part !== 'US') { out.push(` ${pick(WEAK[lower], accent)}`); continue; }
    for (const { arpa, word, letters } of read(part, i)) {
      // Initials keep their stress whatever word they spell (IT, IS as letters).
      if (arpa) out.push(` ${arpabetToKokoro(arpa, { accent, word, stress: letters || !UNSTRESSED.has(word) })}`);
    }
  }
  const phonemes = out.join('').replace(/ ([,.!?;:…)])/g, '$1').replace(/\( /g, '(').replace(/\s+/g, ' ').trim();
  return { phonemes, spelt, guessed };
}
