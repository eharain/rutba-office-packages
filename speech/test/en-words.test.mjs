// Words the English text step once read letter by letter, and "live" read one
// way only (found in film takes of Office 2.26.1, November 2026): capitals
// that are words, words built on known ones, names in camel case, names no
// list has, and "live" chosen by the words beside it.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parseDictionary, lookup, englishToPhonemes } from '../engine/text/en.mjs';
import { soundOut, sayable, guessWord } from '../engine/text/en-sound.mjs';

const vocab = JSON.parse(fs.readFileSync(new URL('../engine/vocab.json', import.meta.url), 'utf8')).vocab;

const DICT = parseDictionary([
  'union Y UW1 N Y AH0 N', 'null N AH1 L', 'not N AA1 T', 'key K IY1', 'all AO1 L', 'select S AH0 L EH1 K T', 'where W EH1 R',
  'pin P IH1 N', 'it IH1 T', 'us AH1 S', 'is IH1 Z', 'old OW1 L D', 'only OW1 N L IY0', 'post P OW1 S T',
  'transaction T R AE0 N Z AE1 K SH AH0 N', 'size S AY1 Z', 'sized S AY1 Z D', 'total T OW1 T AH0 L', 'tot T AA1 T', 'res R EY1 Z',
  'configure K AH0 N F IH1 G Y ER0', 'update AH1 P D EY2 T', 'flavor F L EY1 V ER0', 'recon R IY1 K AO0 N', 'box B AA1 K S',
  'my M AY1', 'admin AE1 D M IH0 N', 'office AO1 F AH0 S', 'mac M AE1 K', 'ally AE1 L AY0', 're R EY1', 'in IH0 N', "in's IH0 N Z", 'ara AE1 R AH0',
  'live L AY1 V', 'live(2) L IH1 V', 'broadcast B R AO1 D K AE2 S T', 'going G OW1 IH0 NG', 'running R AH1 N IH0 NG', 'they DH EY1', 'we W IY1',
  'are AA1 R', 'now N AW1', 'people P IY1 P AH0 L', 'who HH UW1', 'abroad AH0 B R AO1 D', 'want W AA1 N T', 'here HH IY1 R', 'long L AO1 NG',
  'king K IH1 NG', 'switch S W IH1 CH', 'start S T AA1 R T', 'stream S T R IY1 M', 'customers K AH1 S T AH0 M ER0 Z', 'far F AA1 R', 'away AH0 W EY1',
  'lahore L AA0 HH AO1 R', 'word W ER1 D', 'plan P L AE1 N', 'welcome W EH1 L K AH0 M', 'show SH OW1', 'up AH1 P',
  'by B AY1', 'with W IH1 DH', 'moves M UW1 V Z', 'to T UW1', 'each IY1 CH', 'and AH0 N D', 'on AA1 N', 'the DH AH0', 'a AH0',
  'does D AH1 Z', 'open OW1 P AH0 N', 'go G OW1', 'want W AA1 N T',
].join('\n'));
const WORDS = new Map([
  ['paritas', 'P AE0 R IY1 T AH0 Z'], ['postgres', 'P OW1 S T G R EH2 S'], ['postgresql', 'P OW1 S T G R EH2 S K Y UW2 EH1 L'],
  ['regex', 'R EH1 JH EH0 K S'], ['regexp', 'R EH1 JH EH2 K S P'], ['json', 'JH EY1 S AH0 N'], ['num', 'N AH1 M'],
]);
const say = (text, accent = 'us') => englishToPhonemes(text, { dict: DICT, words: WORDS, accent });
const one = (word, accent = 'us') => say(word, accent).phonemes;

test('capitals that are words are read as words, and initials as letters', () => {
  // The short words of SQL and of plain speech, and four or five capitals the dictionary has.
  assert.equal(one('UNION ALL'), 'jˈunjən ˈɔl');
  assert.equal(one('NULL'), 'nˈʌl');
  assert.equal(one('NOT'), 'nɑt');
  assert.equal(one('KEY'), 'kˈi');
  assert.equal(one('ONLY'), 'ˈOnli');
  assert.equal(one('OLD'), 'ˈOld');
  assert.equal(one('PIN'), 'pˈɪn');
  // The Office word list, whatever the case.
  assert.equal(one('REGEXP'), one('regexp'));
  assert.equal(one('JSON'), 'ʤˈAsən');
  // Initials stay letters, with their stress: PDF, USB, and IT and US though "it" and "us" are words.
  assert.equal(one('PDF'), 'pˈidˈiˈɛf');
  assert.equal(one('SMTP'), 'ˈɛsˈɛmtˈipˈi');
  assert.equal(one('IT'), 'ˈItˈi');
  assert.equal(one('US'), 'jˈuˈɛs');
  assert.equal(one('PDFs'), 'pˈidˈiˈɛfz');
  // In small letters they are the words.
  assert.equal(one('it'), 'ɪt');
  assert.equal(one('us'), 'əs');
  for (const text of ['UNION ALL', 'IT', 'PDF']) assert.deepEqual(say(text).spelt, [], `${text} is not counted as spelt`);
});

test('the words the film takes found spelt out are said as words', () => {
  const r = say('Paritas moves to Postgres. PostgreSQL and each transactional num, by REGEXP.');
  assert.deepEqual(r.spelt, []);
  assert.match(r.phonemes, /^pæɹˈiɾəz /);
  assert.match(r.phonemes, /pˈOstɡɹˌɛs\./);
  assert.match(r.phonemes, /pˈOstɡɹˌɛskjˌuˈɛl /);
  assert.match(r.phonemes, /tɹænzˈækʃənᵊl nˈʌm/);
  // The British voices say Paritas as the earlier voice step did.
  assert.equal(one('Paritas', 'gb'), 'paɹˈiːtəz');
});

test('words built on known words: an ending, a beginning, one on another, and British spelling', () => {
  const look = (w) => lookup(w, DICT, 'us', WORDS);
  assert.equal(look('transactional'), 'T R AE0 N Z AE1 K SH AH0 N AH0 L');
  assert.equal(look('transactionally'), 'T R AE0 N Z AE1 K SH AH0 N AH0 L IY0', 'one l, and not "transaction ally"');
  assert.equal(look('resize'), 'R IY0 S AY1 Z', 're + size, not "res" with -ize');
  assert.equal(look('resized'), 'R IY0 S AY1 Z D');
  assert.equal(look('subtotal'), 'S AH1 B T OW2 T AH0 L', 'sub + total with the stress on sub, not "subtot" with -al');
  assert.equal(look('subtotals'), 'S AH1 B T OW2 T AH0 L Z');
  assert.equal(look('autosized'), 'AO1 T OW0 S AY2 Z D');
  assert.equal(look('configurable'), 'K AH0 N F IH1 G Y ER0 AH0 B AH0 L');
  assert.equal(look('unconfigurable'), 'AH0 N K AH0 N F IH1 G Y ER0 AH0 B AH0 L');
  assert.equal(look('updater'), 'AH1 P D EY2 T ER0');
  assert.equal(look('flavoured'), 'F L EY1 V ER0 D');
  // What a word is built on may be in the Office word list.
  assert.equal(look('regexes'), 'R EH1 JH EH0 K S AH0 Z');
  assert.equal(look("paritas's"), 'P AE0 R IY1 T AH0 Z AH0 Z');
  // A name's 's is not a word to run together with what stands before it.
  assert.equal(look("arain's"), null);
  assert.equal(look('zzyzx'), null);
});

test('a name in camel case is read as its pieces, and a name\'s \'s after the name', () => {
  assert.equal(one('MySQL'), 'mI ˈɛskjˈuˈɛl');
  assert.equal(one('pgAdmin'), 'pˈiʤˈi ˈædmɪn');
  assert.equal(one('macOS'), 'mˈæk ˈOˈɛs');
  assert.equal(one('PostgreSQL'), 'pˈOstɡɹˌɛskjˌuˈɛl', 'a listed word is not taken apart');
  const r = say("Arain's plan");
  assert.equal(r.phonemes, 'əɹˈAnz plˈæn');
  assert.deepEqual(r.guessed, ["Arain's"].map((w) => w.replace(/'s$/, '')));
});

test('a word no list has is sounded out, and said to be a guess', () => {
  const ARPA = {
    supabase: 'S UW1 P AH0 B EY2 S', laravel: 'L AE1 R AH0 V EH0 L', hostinger: 'HH AA1 S T IH0 N JH ER0', redis: 'R EH1 D IH0 S',
    arain: 'AH0 R EY1 N', careem: 'K AH0 R IY1 M', nokia: 'N OW1 K IY0 AH0', toyota: 'T OY2 OW1 T AH0', vimeo: 'V IH1 M IY0 OW0',
    figma: 'F IH1 G M AH0', varchar: 'V AA1 R CH AA0 R', netlify: 'N EH1 T L IH0 F AY2', mission: 'M IH1 SH AH0 N', table: 'T EY1 B AH0 L',
    supabases: 'S UW1 P AH0 B EY2 S IH0 Z', pydantic: 'P AY0 D AE1 N T IH0 K', paginate: 'P AE1 JH IH0 N EY2 T',
  };
  for (const [word, arpa] of Object.entries(ARPA)) assert.equal(soundOut(word), arpa, word);
  // What English cannot say is not sounded out: too short, no vowel, or letters that do not go together.
  for (const word of ['cli', 'npm', 'xkcd', 'sendgrid', 'pgrecon', 'mkdir']) assert.equal(sayable(word), false, word);
  for (const word of ['supabase', 'pydantic', 'figma']) assert.equal(sayable(word), true, word);
  // The letters at the front read as letters, the rest a known word or one that can be said.
  const known = (w) => lookup(w, DICT, 'us', WORDS);
  const letters = (w) => w.toUpperCase().split('').join('-');
  assert.equal(guessWord('pgrecon', { known, letters }), 'P-G R IY1 K AO0 N');
  assert.equal(guessWord('mbox', { known, letters }), 'M B AA1 K S');
  assert.equal(guessWord('mkdir', { known, letters }), 'M-K D ER1');
  assert.equal(guessWord('npm', { known, letters }), null);

  const r = say('Supabase on Hostinger with npm.');
  assert.deepEqual(r.guessed, ['Supabase', 'Hostinger']);
  assert.deepEqual(r.spelt, ['npm']);
  assert.match(r.phonemes, /^sˈupəbˌAs /);
  for (const accent of ['us', 'gb']) {
    for (const word of Object.keys(ARPA)) for (const ch of one(word, accent)) assert.ok(vocab[ch] !== undefined, `${accent} ${word}: ${JSON.stringify(ch)} not in the vocabulary`);
  }
});

test('"live" is on air or the verb, by the words beside it', () => {
  const NOW = 'lˈIv';
  const VERB = 'lˈɪv';
  const live = (text) => say(text).phonemes.split(/[ ,.?!]+/).filter((w) => w === NOW || w === VERB);
  // The owner's three, 19 Nov 2026.
  assert.deepEqual(live('Live Broadcast'), [NOW]);
  assert.deepEqual(live('We are going live.'), [NOW]);
  assert.deepEqual(live('It is running live now.'), [NOW]);
  // On air.
  assert.deepEqual(live('Switch to Live. Start a live stream. Is it live? It is not live. Open Live and go live.'), [NOW, NOW, NOW, NOW, NOW, NOW]);
  assert.deepEqual(live('We live stream the show.'), [NOW]);
  // The verb.
  assert.deepEqual(live('They live in Lahore.'), [VERB]);
  assert.deepEqual(live('People who live abroad want to live here.'), [VERB, VERB]);
  assert.deepEqual(live('Long live the king.'), [VERB]);
  assert.deepEqual(live('Customers live far away.'), [VERB]);
  assert.deepEqual(live('We now live in Lahore.'), [VERB]);
  assert.deepEqual(live('Does it live up to the plan?'), [VERB]);
  assert.deepEqual(live('That is where the word and the plan live.'), [VERB]);
  assert.deepEqual(live('That is where we go live.'), [NOW]);
  // In a hyphened word.
  assert.deepEqual(live('a live-stream'), [NOW]);
});
