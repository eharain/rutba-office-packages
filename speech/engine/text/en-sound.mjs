// A word no dictionary has, sounded out from its letters.
//
// Our own code, written for Rutba Office. Before this a word in no list was
// read letter by letter, so a name such as Supabase came out as eight letters.
// These are the plain rules of English spelling (the digraphs, the silent e,
// the vowel before an r, a few endings) and one rule for where the stress
// falls. The result is a guess: close for most names and made words, wrong for
// some, and always better heard than a word spelt out. A word that matters is
// given its own line in the Office word list, which is asked first.
//
// What is not sounded out: a word under four letters (more often initials
// than a word), one with no vowel, and one whose letters English cannot say
// (four consonants in a row, or a start such as "pg"). For the last, the
// letters at the front are read as letters while what follows is a word or
// can be said: pgrecon is P, G, recon; mkdir is M, K, dir.

const VOWEL_LETTERS = 'aeiou';
const isV = (c) => c !== undefined && VOWEL_LETTERS.includes(c);

/** How an English word may begin. */
const ONSETS = new Set(('b bl br c ch chr cl cr d dj dr dw f fl fr g gh gl gn gr h j k kh kl kn kr l m n p ph phr pl pr ps qu r rh '
  + 's sc sch scr sh shr sk sl sm sn sp sph spl spr squ st str sv sw t th thr tr ts tw v vl w wh wr x y z zh zw').split(' '));

const VOICELESS = new Set(['P', 'T', 'K', 'F', 'TH', 'S', 'SH', 'CH']);
const SIBILANT = new Set(['S', 'Z', 'SH', 'ZH', 'CH', 'JH']);

/** Two or more letters said as one vowel. `long` vowels draw the stress in a short word. */
const VOWEL_GROUPS = [
  ['eigh', 'EY'], ['augh', 'AO'], ['ough', 'OW'], ['igh', 'AY'], ['eau', 'OW'],
  ['ee', 'IY'], ['ea', 'IY'], ['oo', 'UW'], ['oa', 'OW'], ['ai', 'EY'], ['ay', 'EY'], ['ei', 'EY'], ['au', 'AO'], ['aw', 'AO'],
  ['oi', 'OY'], ['oy', 'OY'], ['ou', 'AW'], ['aa', 'AA'], ['ii', 'IY'], ['uu', 'UW'],
];
const LONG = { a: 'EY', e: 'IY', i: 'AY', o: 'OW', u: 'UW', y: 'AY' };
const SHORT = { a: 'AE', e: 'EH', i: 'IH', o: 'AA', u: 'AH', y: 'IH' };
/** A vowel before an r that no vowel follows. */
const BEFORE_R = { a: 'AA R', e: 'ER', i: 'ER', u: 'ER', o: 'AO R', y: 'ER' };
const PLAIN = { b: 'B', d: 'D', f: 'F', k: 'K', l: 'L', m: 'M', n: 'N', p: 'P', r: 'R', t: 'T', v: 'V', z: 'Z', j: 'JH', q: 'K' };

/** Whether English can say these letters as a word. */
export function sayable(word, { min = 4 } = {}) {
  if (!/^[a-z]+$/.test(word) || word.length < min) return false;
  if (!/[aeiou]/.test(word) && !/[^y]y/.test(word)) return false;
  // A y after a consonant is the vowel (Pydantic, Symfony).
  const start = /^y?[^aeiouy]*/.exec(word)[0];
  if (start && !ONSETS.has(start)) return false;
  // Letters said as one sound count once.
  const sounds = word.replace(/tch|sch|ch|sh|th|ph|ck|ng|gh|qu/g, 'q').replace(/([a-z])\1/g, '$1');
  return !/[^aeiouy]{4,}/.test(sounds);
}

/**
 * ARPAbet for a word sounded out from its letters, the stress marked.
 * @param {string} word lower case, letters only
 * @returns {string}
 */
export function soundOut(word) {
  // A plural or a past tense of a word ending in a silent e keeps that word's vowel (bases, dockerized).
  const onE = /^(.*[aeiouy][^aeiouxwy]e)([sd])$/.exec(word);
  if (onE && sayable(onE[1], { min: 3 })) {
    const stem = soundOut(onE[1]);
    const end = stem.split(' ').pop();
    if (onE[2] === 's') return `${stem} ${SIBILANT.has(end) ? 'IH0 Z' : VOICELESS.has(end) ? 'S' : 'Z'}`;
    return `${stem} ${end === 'T' || end === 'D' ? 'IH0 D' : VOICELESS.has(end) ? 'T' : 'D'}`;
  }
  const w = word;
  const n = w.length;
  /** @type {{ p: string, vowel?: boolean, long?: boolean, weak?: boolean, heavy?: boolean, open?: boolean, glide?: boolean }[]} */
  const out = [];
  const lastPhone = () => out[out.length - 1]?.p.split(' ').pop();
  const hadVowel = () => out.some((x) => x.vowel);
  const put = (p, o = {}) => out.push({ p, ...o });
  let i = 0;
  while (i < n) {
    const c = w[i];
    const rest = w.slice(i);
    const next = w[i + 1];
    const prev = w[i - 1];
    const ends = (s) => rest === s;

    // Endings.
    if (hadVowel()) {
      if (/^(tion|cian|ssion)/.test(rest)) { put('SH'); put('AH', { vowel: true, weak: true }); put('N'); i += rest.startsWith('ssion') ? 5 : 4; continue; }
      if (rest.startsWith('sion')) { put(isV(prev) ? 'ZH' : 'SH'); put('AH', { vowel: true, weak: true }); put('N'); i += 4; continue; }
      if (ends('al') && prev && !isV(prev)) { put('AH', { vowel: true, weak: true }); put('L'); break; }
      if (ends('ign')) { put('AY', { vowel: true, long: true }); put('N'); break; }
      if (ends('er') && prev && !isV(prev)) { put('ER', { vowel: true, weak: true }); break; }
      if (ends('cial') || ends('tial')) { put('SH'); put('AH', { vowel: true, weak: true }); put('L'); break; }
      if (ends('cious') || ends('tious')) { put('SH'); put('AH', { vowel: true, weak: true }); put('S'); break; }
      if (ends('ture')) { put('CH'); put('ER', { vowel: true, weak: true }); break; }
      if (ends('ous')) { put('AH', { vowel: true, weak: true }); put('S'); break; }
      if (ends('ing')) { put('IH', { vowel: true, weak: true }); put('NG'); break; }
      if (ends('le') && prev && !isV(prev)) { put('AH', { vowel: true, weak: true }); put('L'); break; }
      if (ends('fy')) { put('F'); put('AY', { vowel: true, long: true }); break; }
      if (ends('es') && SIBILANT.has(lastPhone())) { put('IH', { vowel: true, weak: true }); put('Z'); break; }
      if (ends('ed') && !isV(prev)) {
        if (lastPhone() === 'T' || lastPhone() === 'D') { put('IH', { vowel: true, weak: true }); put('D'); } else put(VOICELESS.has(lastPhone()) ? 'T' : 'D');
        break;
      }
      // The s of a plural, and the s that ends a name after a short vowel (Redis, Atlas).
      if (ends('s') && prev !== 's') { put(VOICELESS.has(lastPhone()) || 'aiou'.includes(prev) ? 'S' : 'Z'); break; }
      if (ends('e') && !isV(prev)) break; // the silent e
    }

    // Vowels.
    if (isV(c) || (c === 'y' && i > 0 && !isV(next))) {
      // Said with the r after it: air, ear, and one vowel before an r no vowel follows.
      const r3 = /^(air|ear|eer|ier|oar|oor|our)(?![aeiou])/.exec(rest);
      if (r3) {
        put({ air: 'EH R', ear: 'IH R', eer: 'IH R', ier: 'IH R', oar: 'AO R', oor: 'AO R', our: 'AW R' }[r3[1]], { vowel: true, long: true });
        i += 3;
        continue;
      }
      const group = VOWEL_GROUPS.find(([g]) => rest.startsWith(g));
      if (group) {
        put(group[1], { vowel: true, long: true });
        i += group[0].length;
        continue;
      }
      if (rest.startsWith('ow')) { put(i + 2 === n ? 'OW' : 'AW', { vowel: true, long: true }); i += 2; continue; }
      if (rest.startsWith('ew') || rest.startsWith('eu')) { put(/[rljs]|ch/.test(prev || '') || !prev ? 'UW' : 'Y UW', { vowel: true, long: true }); i += 2; continue; }
      if (rest.startsWith('ey')) { put(i + 2 === n ? 'IY' : 'EY', { vowel: true, long: i + 2 !== n }); i += 2; continue; }
      if (rest.startsWith('ie') && (i + 2 === n || rest === 'ies')) { put('IY', { vowel: true }); i += 2; continue; }
      if ((rest.startsWith('ue') || rest.startsWith('oe')) && i + 2 === n) { put(c === 'u' ? 'UW' : 'OW', { vowel: true, long: true }); i += 2; continue; }
      if (next === 'r' && !isV(w[i + 2]) && w[i + 2] !== 'r') {
        put(BEFORE_R[c], { vowel: true, heavy: true });
        i += 2;
        continue;
      }
      // One vowel straight before another (Vimeo, Nokia).
      if (isV(next) && i + 2 <= n) { put({ a: 'EY', e: 'IY', i: 'IY', o: 'OW', u: 'UW', y: 'IY' }[c], { vowel: true, glide: true }); i += 1; continue; }
      // The last letter.
      if (i + 1 === n) {
        if (c === 'a') put('AH', { vowel: true, weak: hadVowel() });
        else if (c === 'y') put(hadVowel() ? 'IY' : 'AY', { vowel: true });
        else if (c === 'e') put('IY', { vowel: true });
        else put({ i: 'IY', o: 'OW', u: 'UW' }[c], { vowel: true });
        i += 1;
        continue;
      }
      // Made long by a silent e: one consonant, then the e that ends the word (or -le).
      const after = w.slice(i + 1);
      if (/^[^aeiouxwy](e|le)$/.test(after) || /^(th|ch|st)e$/.test(after)) { put(LONG[c], { vowel: true, long: true }); i += 1; continue; }
      // An open syllable: one consonant, then a vowel.
      const open = !isV(next) && (isV(w[i + 2]) || w[i + 2] === 'y') && next !== 'x';
      if (open && (c === 'o' || c === 'u')) { put(LONG[c], { vowel: true, open: true }); i += 1; continue; }
      if (open && c === 'y') { put('AY', { vowel: true, open: true }); i += 1; continue; }
      // Closed by two consonants, it holds the stress in a long word.
      const closed = !isV(next) && w[i + 2] !== undefined && !isV(w[i + 2]) && w[i + 2] !== 'y' && !/^(ch|sh|th|ph|ck|ng)/.test(after) && next !== w[i + 2];
      put(SHORT[c], { vowel: true, heavy: closed });
      i += 1;
      continue;
    }

    // Consonants.
    const take = (len, p) => { if (p) put(p); i += len; };
    if (i === 0 && /^(kn|gn|pn)/.test(rest)) { take(2, 'N'); continue; }
    if (i === 0 && rest.startsWith('wr')) { take(2, 'R'); continue; }
    if (i === 0 && rest.startsWith('ps')) { take(2, 'S'); continue; }
    if (i === 0 && rest.startsWith('rh')) { take(2, 'R'); continue; }
    if (i === 0 && c === 'x') { take(1, 'Z'); continue; }
    if (rest.startsWith('tch')) { take(3, 'CH'); continue; }
    if (rest.startsWith('sch')) { take(3, 'S K'); continue; }
    if (rest.startsWith('sh')) { take(2, 'SH'); continue; }
    if (rest.startsWith('ch')) { take(2, /^ch[rl]/.test(rest) ? 'K' : 'CH'); continue; }
    if (rest.startsWith('ph')) { take(2, 'F'); continue; }
    if (rest.startsWith('th')) { take(2, 'TH'); continue; }
    if (rest.startsWith('wh')) { take(2, 'W'); continue; }
    if (rest.startsWith('ck')) { take(2, 'K'); continue; }
    if (rest.startsWith('gh')) { take(2, i === 0 ? 'G' : ''); continue; }
    if (rest.startsWith('kh')) { take(2, 'K'); continue; }
    if (rest.startsWith('qu')) { take(2, 'K W'); continue; }
    if (rest.startsWith('dg') && /[eiy]/.test(w[i + 2] || '')) { take(2, 'JH'); continue; }
    if (rest.startsWith('ng')) { take(2, isV(w[i + 2]) && w[i + 2] !== 'e' ? 'NG G' : (w[i + 2] === 'e' ? 'N JH' : 'NG')); continue; }
    if (rest.startsWith('nk')) { take(2, 'NG K'); continue; }
    if (rest.startsWith('mb') && i + 2 === n) { take(2, 'M'); continue; }
    if (rest.startsWith('cc') && /[eiy]/.test(w[i + 2] || '')) { take(2, 'K S'); continue; }
    if (c === 'c') { take(next === 'c' ? 2 : 1, /[eiy]/.test(next || '') ? 'S' : 'K'); continue; }
    // Soft before e and y, and before an i inside a word (paginate, digit); hard where a word begins with gi (git, gift).
    if (c === 'g') { take(next === 'g' ? 2 : 1, next !== 'g' && (/[ey]/.test(next || '') || (next === 'i' && i > 0)) ? 'JH' : 'G'); continue; }
    if (c === 's') { take(next === 's' ? 2 : 1, 'S'); continue; }
    if (c === 'x') { take(1, 'K S'); continue; }
    if (c === 'y') { take(1, 'Y'); continue; }
    if (c === 'w') { take(1, isV(next) || next === 'y' ? 'W' : ''); continue; }
    if (c === 'h') { take(1, isV(next) || next === 'y' ? 'HH' : ''); continue; }
    take(next === c ? 2 : 1, PLAIN[c] || '');
  }

  // Where the stress falls. One vowel: on it. Two: on the first, or on the last when only the last is long
  // (Careem, Arain). Three or more: a word ending in a vowel, or whose syllable before the last is heavy,
  // is stressed there (Toyota, Ubuntu); otherwise one further back (Laravel, Hostinger).
  const vowels = out.filter((x) => x.vowel);
  const strong = vowels.filter((x) => !x.weak);
  let main = strong[0] || vowels[0];
  if (vowels.length === 2 && strong.length === 2 && strong[1].long && !strong[0].long && !strong[0].open) main = strong[1];
  else if (vowels.length >= 3 && strong.length >= 2) {
    const last = vowels[vowels.length - 1];
    const penult = vowels[vowels.length - 2];
    const before = vowels[vowels.length - 3];
    const endsOnVowel = /[aiou]$/.test(w);
    if (!penult.weak && !penult.glide && (endsOnVowel || penult.heavy || penult.long)) main = penult;
    else main = before.weak ? (strong.find((x) => x !== last) || strong[0]) : before;
    void last;
  }
  return out.map((x) => {
    if (!x.vowel) return x.p;
    // The vowel may carry an r after it or a y glide before it.
    const parts = x.p.split(' ');
    const at = parts.findIndex((p) => /^(AA|AE|AH|AO|AW|AY|EH|ER|EY|IH|IY|OW|OY|UH|UW)$/.test(p));
    let mark = '0';
    if (x === main) mark = '1';
    else if (x.long && !x.weak && vowels.length >= 3) mark = '2';
    // An unstressed short a is the weak vowel (Supabase, Laravel).
    if (mark === '0' && parts[at] === 'AE') parts[at] = 'AH';
    parts[at] += mark;
    return parts.join(' ');
  }).filter(Boolean).join(' ');
}

/**
 * A word in no list, as ARPAbet pieces: sounded out whole, or its first
 * letters read as letters and the rest a word (`known` finds it) or sounded
 * out. Null when it can only be spelt.
 * @param {string} word lower case
 * @param {{ known: (w: string) => string|null, letters: (w: string) => string }} o
 * @returns {string|null}
 */
export function guessWord(word, { known, letters }) {
  if (!/^[a-z]+$/.test(word)) return null;
  if (sayable(word)) return soundOut(word);
  if (!/[aeiouy]/.test(word)) return null;
  for (const pass of ['known', 'sayable']) {
    for (let k = 1; k <= 3 && word.length - k >= 3; k++) {
      const head = word.slice(0, k);
      const rest = word.slice(k);
      if (/[aeiou]/.test(head)) break;
      const said = pass === 'known' ? known(rest) : (sayable(rest, { min: 3 }) ? soundOut(rest) : null);
      if (said) return `${letters(head)} ${said}`;
    }
  }
  return null;
}
