import test from 'node:test';
import assert from 'node:assert/strict';
import { cardinal, ordinal, year, decimal, money, time, speakNumbers } from '../engine/text/en-numbers.mjs';

test('cardinals, US and British', () => {
  assert.equal(cardinal(0), 'zero');
  assert.equal(cardinal(21), 'twenty-one');
  assert.equal(cardinal(105), 'one hundred five');
  assert.equal(cardinal(105, { gb: true }), 'one hundred and five');
  assert.equal(cardinal(1005, { gb: true }), 'one thousand and five');
  assert.equal(cardinal('1,234,567'), 'one million two hundred thirty-four thousand five hundred sixty-seven');
  assert.equal(cardinal(-3), 'minus three');
});

test('ordinals', () => {
  assert.equal(ordinal(1), 'first');
  assert.equal(ordinal(22), 'twenty-second');
  assert.equal(ordinal(30), 'thirtieth');
  assert.equal(ordinal(112), 'one hundred twelfth');
});

test('years, decimals, money, times', () => {
  assert.equal(year(1984), 'nineteen eighty-four');
  assert.equal(year(2005), 'two thousand five');
  assert.equal(year(2026), 'twenty twenty-six');
  assert.equal(year(1900), 'nineteen hundred');
  assert.equal(year(1905), 'nineteen oh five');
  assert.equal(decimal('3.14'), 'three point one four');
  assert.equal(money('$', '5.20'), 'five dollars and twenty cents');
  assert.equal(money('£', '1'), 'one pound');
  assert.equal(money('£', '0.50'), 'fifty pence');
  assert.equal(time(9, '05'), 'nine oh five');
  assert.equal(time(12, '00'), "twelve o'clock");
});

test('numbers in running text', () => {
  const said = speakNumbers('It costs $5.20 at 10:30 on the 3rd.');
  assert.match(said, /five dollars and twenty cents at ten thirty on the third/);
  assert.match(speakNumbers('Up 12% in 2026'), /twelve percent in twenty twenty-six/);
});
