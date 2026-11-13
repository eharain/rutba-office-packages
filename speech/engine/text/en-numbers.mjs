// Numbers, money, times and the like, written out as English words.
//
// Our own code: misaki's English path uses num2words, which is LGPL, so none
// of it is ported. British and US English differ in one place here: "and"
// after hundreds (one hundred and five), which British English says.

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const SCALES = ['', 'thousand', 'million', 'billion', 'trillion'];
const ORDINAL_WORD = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };

function under1000(n, gb) {
  const out = [];
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (h) out.push(ONES[h], 'hundred');
  if (h && r && gb) out.push('and');
  if (r) {
    if (r < 20) out.push(ONES[r]);
    else out.push(TENS[Math.floor(r / 10)] + (r % 10 ? `-${ONES[r % 10]}` : ''));
  }
  return out;
}

/**
 * A whole number as words: 1205 is "one thousand two hundred five" (US) or
 * "one thousand two hundred and five" (GB).
 * @param {number|bigint|string} value
 * @param {{ gb?: boolean }} [o]
 */
export function cardinal(value, { gb = false } = {}) {
  let n = BigInt(String(value).replace(/,/g, ''));
  if (n < 0n) return `minus ${cardinal(-n, { gb })}`;
  if (n === 0n) return 'zero';
  if (n >= 10n ** 15n) return String(n).split('').map((d) => ONES[+d]).join(' ');
  const groups = [];
  while (n > 0n) { groups.push(Number(n % 1000n)); n /= 1000n; }
  const out = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (!groups[i]) continue;
    // British "and" also joins a last group under 100 to the thousands: one thousand and five.
    if (gb && i === 0 && groups[i] < 100 && groups.length > 1) out.push('and');
    out.push(...under1000(groups[i], gb));
    if (SCALES[i]) out.push(SCALES[i]);
  }
  return out.join(' ');
}

/** 1st, 2nd, 21st as words. */
export function ordinal(value, o) {
  const words = cardinal(value, o).split(' ');
  const last = words.pop();
  const parts = last.split('-');
  const tail = parts.pop();
  let ord;
  if (ORDINAL_WORD[tail]) ord = ORDINAL_WORD[tail];
  else if (tail.endsWith('y')) ord = `${tail.slice(0, -1)}ieth`;
  else ord = `${tail}th`;
  return [...words, [...parts, ord].join('-')].join(' ');
}

/** A four-digit year as said: 1984 nineteen eighty-four, 2005 two thousand five, 2026 twenty twenty-six. */
export function year(value, o = {}) {
  const n = Number(value);
  if (n >= 2000 && n <= 2009) return cardinal(n, o);
  if (n % 100 === 0 && n % 1000 !== 0) return `${cardinal(n / 100)} hundred`;
  const hi = Math.floor(n / 100);
  const lo = n % 100;
  if (lo === 0) return cardinal(n, o);
  return `${cardinal(hi)} ${lo < 10 ? `oh ${ONES[lo]}` : cardinal(lo)}`;
}

/** Digits after a decimal point, one at a time: 3.14 is three point one four. */
export function decimal(text, o) {
  const [whole, frac = ''] = String(text).replace(/,/g, '').split('.');
  const head = cardinal(whole || '0', o);
  return frac ? `${head} point ${frac.split('').map((d) => ONES[+d]).join(' ')}` : head;
}

const CURRENCY = {
  '$': ['dollar', 'dollars', 'cent', 'cents'],
  '£': ['pound', 'pounds', 'penny', 'pence'],
  '€': ['euro', 'euros', 'cent', 'cents'],
  '¥': ['yen', 'yen', '', ''],
  '₹': ['rupee', 'rupees', 'paisa', 'paise'],
  'Rs': ['rupee', 'rupees', 'paisa', 'paise'],
};

/** $5.20 as five dollars and twenty cents. */
export function money(symbol, amount, o) {
  const [one, many, subOne, subMany] = CURRENCY[symbol] || CURRENCY.$;
  const [whole, frac] = String(amount).replace(/,/g, '').split('.');
  const w = BigInt(whole || '0');
  const parts = [];
  if (w > 0n || !frac) parts.push(`${cardinal(w, o)} ${w === 1n ? one : many}`);
  if (frac && subMany) {
    const c = Number(frac.padEnd(2, '0').slice(0, 2));
    if (c) parts.push(`${cardinal(c, o)} ${c === 1 ? subOne : subMany}`);
  }
  return parts.join(' and ') || `zero ${many}`;
}

/** 10:30 as ten thirty, 9:05 as nine oh five, 12:00 as twelve o'clock. */
export function time(h, m, o) {
  const hh = cardinal(Number(h), o);
  const mm = Number(m);
  if (mm === 0) return `${hh} o'clock`;
  return `${hh} ${mm < 10 ? `oh ${ONES[mm]}` : cardinal(mm, o)}`;
}

/**
 * Every number-like thing in a sentence written out. Runs before words are
 * looked up, so the dictionary only ever sees words.
 * @param {string} text
 * @param {{ gb?: boolean }} [o]
 */
export function speakNumbers(text, o = {}) {
  return text
    // Money: $5, $5.20, £1,200, €3.5m is left to the general rule.
    .replace(/(Rs\.?\s?|[$£€¥₹])\s?(\d[\d,]*(?:\.\d+)?)/g, (_, s, a) => ` ${money(s.trim().replace(/\.$/, ''), a, o)} `)
    // Times: 10:30, 9:05 (not 10:30:15, which reads as numbers).
    .replace(/\b(\d{1,2}):(\d{2})\b(?!:)/g, (_, h, m) => ` ${time(h, m, o)} `)
    // Percent.
    .replace(/(\d[\d,]*(?:\.\d+)?)\s?%/g, (_, n) => ` ${decimal(n, o)} percent `)
    // Ordinals: 1st, 22nd, 3rd, 4th.
    .replace(/\b(\d+)(st|nd|rd|th)\b/gi, (_, n) => ` ${ordinal(n, o)} `)
    // Years in a likely place: four digits from 1100 to 2099 standing alone.
    .replace(/\b(1[1-9]\d\d|20\d\d)\b(?![.,]\d)/g, (_, n) => ` ${year(n, o)} `)
    // Decimals and grouped numbers.
    .replace(/\b\d[\d,]*\.\d+\b/g, (n) => ` ${decimal(n, o)} `)
    .replace(/\b\d{1,3}(?:,\d{3})+\b|\b\d+\b/g, (n) => ` ${cardinal(n, o)} `)
    .replace(/\s{2,}/g, ' ');
}
