import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { EventEmitter } from 'node:events';
import { createSpeaker, englishData } from '../engine/speaker.mjs';
import { createHandler } from '../engine/worker.mjs';
import { createSpeechService } from '../engine/main.mjs';
import { STYLE_DIM, STYLE_ROWS } from '../engine/runner.mjs';

const vocab = JSON.parse(fs.readFileSync(new URL('../engine/vocab.json', import.meta.url), 'utf8')).vocab;
const made = [];
const tmp = () => { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-speech-')); made.push(d); return d; };
test.after(() => { for (const d of made) fs.rmSync(d, { recursive: true, force: true }); });

/** A stand-in ONNX Runtime: 100 samples per phoneme id, and it records each call. */
function fakeOrt() {
  const calls = [];
  class Tensor { constructor(type, data, dims) { Object.assign(this, { type, data, dims }); } }
  const session = { inputNames: ['input_ids', 'style', 'speed'], outputNames: ['waveform'], run: async (f) => { calls.push(f); return { waveform: { data: new Float32Array(f.input_ids.dims[1] * 100) } }; } };
  return { ort: { Tensor, InferenceSession: { create: async () => session } }, session, calls };
}
const voiceBytes = () => Buffer.from(new Float32Array(STYLE_ROWS * STYLE_DIM).buffer);
const sha = (b) => crypto.createHash('sha512').update(b).digest('base64');
const DICT = 'hello  HH AH0 L OW1\nworld  W ER1 L D\nrutba  R UH1 T B AH0\n';

test('the speaker reads English with an added voice, and refuses what is not added', async () => {
  const { ort, session, calls } = fakeOrt();
  const sp = createSpeaker({ ort, session, vocab });
  sp.addPronunciation('speech-en-kokoro', englishData({ 'cmudict.dict': DICT }));
  sp.addVoice('voice-kokoro-bf-emma', { language: 'en-GB', bytes: voiceBytes(), pronunciation: 'speech-en-kokoro' });
  const out = await sp.say({ text: 'Hello world.', voice: 'voice-kokoro-bf-emma' });
  assert.ok(out.samples.length > 0);
  assert.equal(out.rate, 24000);
  assert.equal(calls.length, 1);
  await assert.rejects(sp.say({ text: 'x', voice: 'voice-kokoro-af-heart' }), /not added/);
  assert.throws(() => sp.addVoice('voice-kokoro-ef-dora', { language: 'es', bytes: voiceBytes(), pronunciation: 'speech-es-kokoro' }), /no text step/);
});

test('a long sentence is cut for the model and joined with a short pause', async () => {
  const { ort, session, calls } = fakeOrt();
  const sp = createSpeaker({ ort, session, vocab });
  sp.addPronunciation('p', englishData({ 'cmudict.dict': DICT }));
  sp.addVoice('v', { language: 'en-US', bytes: voiceBytes(), pronunciation: 'p' });
  const text = Array.from({ length: 60 }, () => 'hello world,').join(' ');
  const out = await sp.say({ text, voice: 'v' });
  assert.ok(calls.length >= 2, 'more than one model call');
  for (const c of calls) assert.ok(c.input_ids.dims[1] <= 512);
  const spoken = calls.reduce((n, c) => n + c.input_ids.dims[1] * 100, 0);
  assert.equal(out.samples.length, spoken + Math.round(24000 * 0.12) * (calls.length - 1));
});

test('the utility process handler checks every file it reads against the signed hash', async () => {
  const dir = tmp();
  const model = Buffer.from('not really a model');
  fs.writeFileSync(path.join(dir, 'model.onnx'), model);
  fs.writeFileSync(path.join(dir, 'cmudict.dict'), DICT);
  fs.writeFileSync(path.join(dir, 'voice.bin'), voiceBytes());
  const { ort } = fakeOrt();
  const handle = createHandler({ loadOrt: () => ort });
  assert.equal((await handle({ id: 1, op: 'say', text: 'x', voice: 'v' })).ok, false, 'nothing before load');
  assert.match((await handle({ id: 2, op: 'load', ortDir: dir, model: { path: path.join(dir, 'model.onnx'), sha512: sha(Buffer.from('other')) } })).error, /not the file its pack lists/);
  assert.equal((await handle({ id: 3, op: 'load', ortDir: dir, model: { path: path.join(dir, 'model.onnx'), sha512: sha(model) } })).ok, true);
  assert.equal((await handle({ id: 4, op: 'pronunciation', pack: 'p', dir, files: { 'cmudict.dict': sha(Buffer.from(DICT)) } })).ok, true);
  assert.equal((await handle({ id: 5, op: 'voice', voice: 'v', dir, sha512: sha(voiceBytes()), language: 'en-GB', pronunciation: 'p' })).ok, true);
  const said = await handle({ id: 6, op: 'say', text: 'Hello Rutba.', voice: 'v' });
  assert.equal(said.ok, true);
  assert.ok(said.result.samples instanceof Float32Array && said.result.samples.length > 0);
  assert.equal((await handle({ id: 7, op: 'nope' })).ok, false);
});

test('the main module: starts the process on first use, below normal priority, loads model, pronunciation and voice once, stops when idle', async () => {
  const dir = tmp();
  const model = Buffer.from('model bytes');
  fs.writeFileSync(path.join(dir, 'model.onnx'), model);
  fs.writeFileSync(path.join(dir, 'cmudict.dict'), DICT);
  fs.writeFileSync(path.join(dir, 'voice.bin'), voiceBytes());
  const add = (id, kind, manifest) => ({ id, kind, dir, manifest: { id, kind, requires: [], ...manifest } });
  const list = [
    add('speech-engine', 'engine', { provides: ['speech-engine'] }),
    add('speech-kokoro-82m-q8', 'model', { provides: ['speech-kokoro-82m'], files: { 'model.onnx': { sha512: sha(Buffer.from('q8')) } } }),
    add('speech-kokoro-82m-fp16', 'model', { provides: ['speech-kokoro-82m'], files: { 'model.onnx': { sha512: sha(model) } } }),
    add('speech-en-kokoro', 'pronunciation', { requires: ['speech-kokoro-82m'], files: { 'cmudict.dict': { sha512: sha(Buffer.from(DICT)) }, 'LICENSE-cmudict.txt': { sha512: 'x' } } }),
    add('voice-kokoro-bf-emma', 'voice', { name: 'Emma (British English, female)', requires: ['speech-en-kokoro'], voice: { language: 'en-GB', gender: 'female', grade: 'B-' }, files: { 'voice.bin': { sha512: sha(voiceBytes()) } } }),
    add('voice-kokoro-ef-dora', 'voice', { name: 'Dora', requires: ['speech-es-kokoro'], voice: { language: 'es' }, files: {} }),
  ];
  const addons = { list: () => list, find: (n) => list.find((a) => a.id === n || (a.manifest.provides || []).includes(n)) || null };
  const { ort } = fakeOrt();
  const handle = createHandler({ loadOrt: () => ort });
  const forks = [];
  const seen = [];
  const fork = () => {
    const child = new EventEmitter();
    child.pid = 4242;
    child.postMessage = async (m) => { seen.push(m.op); child.emit('message', await handle(m)); };
    child.kill = () => { child.killed = true; child.emit('exit'); };
    forks.push(child);
    return child;
  };
  let priority = null;
  const svc = createSpeechService({ addons }, { fork, setPriority: (pid) => { priority = pid; }, idleMs: 30 });

  assert.deepEqual((await svc.voices()).map((v) => v.id), ['voice-kokoro-bf-emma'], 'only voices with a text step and what they need');
  assert.equal(forks.length, 0, 'nothing started to list voices');
  const one = await svc.say({ text: 'Hello world.', voice: 'voice-kokoro-bf-emma' });
  assert.ok(one.samples.length > 0);
  assert.equal(priority, 4242);
  assert.equal((await svc.status()).model, 'speech-kokoro-82m-fp16', 'fp16 is chosen before q8');
  await svc.say({ text: 'Hello again.', voice: 'voice-kokoro-bf-emma' });
  assert.deepEqual(seen, ['load', 'pronunciation', 'voice', 'say', 'say'], 'loaded once');
  assert.equal(forks.length, 1);
  await new Promise((r) => setTimeout(r, 60));
  assert.ok(forks[0].killed, 'stopped after the idle time');
  assert.equal((await svc.status()).running, false);
  await assert.rejects(svc.say({ text: 'x', voice: 'voice-kokoro-ef-dora' }), /not added/);
  svc.stop();
});

test('without the core add-ons folder, the engine says so plainly', () => {
  assert.throws(() => createSpeechService({}), /needs a newer Office/);
});
