// Text into the pieces the reader speaks one after another.
//
// Sentences come from Intl.Segmenter (no dictionary needed, every language
// Office reads). The first sentence of a reading is cut at its first comma,
// so the first word is heard sooner. A sentence whose phonemes would pass the
// model's limit is cut at a clause, else at a space, never inside a word.

/**
 * @param {string} text
 * @param {string} lang  BCP 47
 * @returns {string[]}
 */
export function sentences(text, lang = 'en') {
  const seg = new Intl.Segmenter(lang, { granularity: 'sentence' });
  return [...seg.segment(text)].map((s) => s.segment.trim()).filter(Boolean);
}

/**
 * The first sentence split at its first comma or semicolon, when both halves
 * have a few words, so speech starts sooner.
 * @param {string[]} list
 */
export function quickStart(list) {
  if (!list.length) return list;
  const [first, ...rest] = list;
  const m = /^(.{12,}?[,;])\s+(.{12,})$/su.exec(first);
  return m ? [m[1], m[2], ...rest] : list;
}

/**
 * Phonemes cut into pieces of at most `max` symbols: at the last clause mark
 * (comma, semicolon, colon, long dash, ellipsis) before the limit, else the last space, else hard.
 * @param {string} phonemes
 * @param {number} max
 */
/** Where a long piece may be cut: comma, semicolon, colon, long dash (U+2014), ellipsis (U+2026). */
const CLAUSE_MARKS = [',', ';', ':', String.fromCharCode(0x2014), String.fromCharCode(0x2026)];

export function fitPhonemes(phonemes, max) {
  const out = [];
  let rest = phonemes;
  while ([...rest].length > max) {
    const chars = [...rest];
    const head = chars.slice(0, max).join('');
    let cut = Math.max(...CLAUSE_MARKS.map((c) => head.lastIndexOf(c)));
    if (cut > 0) cut += 1;
    else cut = head.lastIndexOf(' ');
    if (cut <= 0) cut = head.length;
    out.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) out.push(rest);
  return out;
}
