import test from 'node:test';
import assert from 'node:assert/strict';
import { toIds, styleFor, readVoice, createRunner, toWav, STYLE_DIM, STYLE_ROWS, MAX_PHONEMES } from '../engine/runner.mjs';
import { sentences, quickStart, fitPhonemes } from '../engine/text/segment.mjs';

const vocab = { a: 1, b: 2, ' ': 3, ',': 4 };
const voice = new Float32Array(STYLE_ROWS * STYLE_DIM).map((_, i) => Math.floor(i / STYLE_DIM));

test('ids, with unknown symbols counted', () => {
  assert.deepEqual(toIds('ab x', vocab), { ids: [1, 2, 3], unknown: ['x'] });
});

test('the style row follows the phoneme count, capped', () => {
  assert.equal(styleFor(voice, 7)[0], 7);
  assert.equal(styleFor(voice, 9999)[0], STYLE_ROWS - 1);
  assert.throws(() => styleFor(new Float32Array(3), 1));
  assert.equal(readVoice(Buffer.from(voice.buffer)).length, voice.length);
  assert.throws(() => readVoice(Buffer.alloc(10)));
});

test('the runner pads with zero, sends speed, keeps order', async () => {
  const seen = [];
  const ort = { Tensor: class { constructor(type, data, dims) { Object.assign(this, { type, data, dims }); } } };
  const session = { run: async (feeds) => { seen.push(feeds); return { waveform: { data: new Float32Array(feeds.input_ids.dims[1]) } }; } };
  const r = createRunner(ort, session, vocab);
  const [one, two] = await Promise.all([r.say('ab', voice, { speed: 1.5 }), r.say('a', voice)]);
  assert.deepEqual([...seen[0].input_ids.data], [0n, 1n, 2n, 0n]);
  assert.equal(seen[0].speed.data[0], 1.5);
  assert.equal(seen[0].style.data[0], 2);
  assert.equal(one.samples.length, 4);
  assert.equal(two.samples.length, 3);
  assert.throws(() => r.say('a'.repeat(MAX_PHONEMES + 1), voice));
  assert.throws(() => r.say('a', voice, { speed: 3 }));
});

test('WAV header', () => {
  const w = toWav(new Float32Array([0, 1, -1]));
  assert.equal(w.toString('ascii', 0, 4), 'RIFF');
  assert.equal(w.readUInt32LE(24), 24000);
  assert.equal(w.length, 44 + 6);
});

test('sentences, a quick first piece, and long phonemes cut at clauses', () => {
  assert.deepEqual(sentences('One two. Three four? Five.'), ['One two.', 'Three four?', 'Five.']);
  assert.deepEqual(quickStart(['When the report is ready, send it to the whole team.', 'Next.']), ['When the report is ready,', 'send it to the whole team.', 'Next.']);
  assert.deepEqual(fitPhonemes('aaaa bbbb, cccc dddd', 12), ['aaaa bbbb,', 'cccc dddd']);
  for (const p of fitPhonemes('x'.repeat(30), 10)) assert.ok(p.length <= 10);
});
