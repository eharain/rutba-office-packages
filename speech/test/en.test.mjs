import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parseDictionary, arpabetToKokoro, lookup, englishToPhonemes, spell } from '../engine/text/en.mjs';

const vocab = JSON.parse(fs.readFileSync(new URL('../engine/vocab.json', import.meta.url), 'utf8')).vocab;

const DICT = parseDictionary([
  'hello HH AH0 L OW1', 'water W AO1 T ER0', 'city S IH1 T IY0', 'button B AH1 T AH0 N', 'little L IH1 T AH0 L',
  'party P AA1 R T IY0', 'happy HH AE1 P IY0', 'bath B AE1 TH', 'lot L AA1 T', 'thought TH AO1 T', 'strong S T R AO1 NG',
  'nurse N ER1 S', 'father F AA1 DH ER0', 'care K EH1 R', 'read R EH1 D', 'read(2) R IY1 D', 'work W ER1 K', 'book B UH1 K',
  'cat K AE1 T', 'dog D AO1 G', 'stop S T AA1 P', 'want W AA1 N T', 'go G OW1', 'computer K AH0 M P Y UW1 T ER0',
  'costs K AA1 S T S', 'doctor D AA1 K T ER0',
].join('\n'));

test('US English', () => {
  const us = (w) => arpabetToKokoro(DICT.get(w)[0], { accent: 'us', word: w });
  assert.equal(us('hello'), 'həlˈO');
  assert.equal(us('water'), 'wˈɔɾəɹ');
  assert.equal(us('city'), 'sˈɪɾi');
  assert.equal(us('button'), 'bˈʌʔn');
  assert.equal(us('little'), 'lˈɪɾᵊl');
  assert.equal(us('party'), 'pˈɑɹɾi');
  assert.equal(us('nurse'), 'nˈɜɹs');
  assert.equal(us('father'), 'fˈɑðəɹ');
  assert.equal(us('computer'), 'kəmpjˈuɾəɹ');
});

test('British English', () => {
  const gb = (w) => arpabetToKokoro(DICT.get(w)[0], { accent: 'gb', word: w });
  assert.equal(gb('hello'), 'həlˈQ');
  assert.equal(gb('water'), 'wˈɔːtə');
  assert.equal(gb('happy'), 'hˈapi');
  assert.equal(gb('bath'), 'bˈɑːθ');
  assert.equal(gb('lot'), 'lˈɒt');
  assert.equal(gb('thought'), 'θˈɔːt');
  assert.equal(gb('strong'), 'stɹˈɒŋ');
  assert.equal(gb('nurse'), 'nˈɜːs');
  assert.equal(gb('father'), 'fˈɑːðə');
  assert.equal(gb('party'), 'pˈɑːti');
  assert.equal(gb('care'), 'kˈɛə');
  assert.equal(gb('little'), 'lˈɪtᵊl');
});

test('words built on known words', () => {
  assert.equal(lookup('cats', DICT, 'us'), 'K AE1 T S');
  assert.equal(lookup('dogs', DICT, 'us'), 'D AO1 G Z');
  assert.equal(lookup('stopped', DICT, 'us'), 'S T AA1 P T');
  assert.equal(lookup('wanted', DICT, 'us'), 'W AA1 N T AH0 D');
  assert.equal(lookup('working', DICT, 'us'), 'W ER1 K IH0 NG');
  assert.equal(lookup("cat's", DICT, 'us'), 'K AE1 T S');
  assert.equal(lookup('workbook', DICT, 'us'), 'W ER1 K B UH2 K');
  assert.equal(lookup('read', DICT, 'us'), 'R IY1 D');
  assert.equal(lookup('zzyzx', DICT, 'us'), null);
});

test('sentences, with every symbol one the voices know', () => {
  const words = new Map([['rutba', 'R UH1 T B AH0']]);
  for (const accent of ['us', 'gb']) {
    const { phonemes, spelt } = englishToPhonemes('Hello, Dr. Rutba: the city costs $5 and 3 PDFs!', { dict: DICT, accent, words });
    for (const ch of phonemes) assert.ok(vocab[ch] !== undefined, `${accent}: ${JSON.stringify(ch)} not in the vocabulary`);
    assert.match(phonemes, /^həlˈ[OQ], /);
    assert.match(phonemes, /ɹˈʊtbə/);
    assert.ok(!spelt.includes('Dr'));
  }
  assert.equal(spell('PDF', 'us'), 'P IY1 D IY1 EH1 F');
  assert.equal(spell('z', 'gb'), 'Z EH1 D');
});

test('"the" before a vowel', () => {
  const dict = new Map([...DICT, ['apple', ['AE1 P AH0 L']]]);
  const { phonemes } = englishToPhonemes('the city the apple', { dict, accent: 'us' });
  assert.equal(phonemes, 'ðə sˈɪɾi ðɪ ˈæpᵊl');
});
