// End-to-end speech check against the real model: built packs in, spoken
// samples out, with speed, first-sound delay and memory recorded.
//
//   node tools/smoke.mjs --ort <dir holding node_modules/onnxruntime-node> [--threads 2] [--models fp16,fp32,q8] [--wav <dir>] [--doc-sentences 80]
//
// It drives the engine's own utility-process handler (engine/worker.mjs) in
// this process, so what it checks is the code the engine pack ships: every
// file hashed as it is read, the English text step, cutting long sentences,
// the runner. Run after tools/fetch-sources.mjs and tools/build-packs.mjs.
//
// What passes:
//   - every model loads, with Kokoro's three inputs and one output;
//   - every sentence gives samples, all finite, peak between 0.02 and 1.5;
//   - each sentence lasts between 0.03 and 0.2 seconds per phoneme symbol;
//   - every English voice built speaks a sentence;
//   - a long document is read through, sentence by sentence.
// Speed is seconds of speech per second of model time, as in the design note.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createHandler } from '../engine/worker.mjs';
import { toWav } from '../engine/runner.mjs';
import { sentences, quickStart } from '../engine/text/segment.mjs';
import { officePin } from '../../tools/pack-core.mjs';

const SPEECH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(SPEECH, '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const ortDir = path.resolve(opt('--ort', SPEECH));
const threads = Number(opt('--threads', 2));
const models = opt('--models', 'fp32,q8').split(',');
const wavDir = opt('--wav', null);
const dist = path.join(SPEECH, 'dist', `v${officePin().version}`);

const sha = (file) => crypto.createHash('sha512').update(fs.readFileSync(file)).digest('base64');
const mb = () => Math.round(process.memoryUsage().rss / 1048576);

/** How busy the rest of the computer was while a pass ran: share of all CPU time not spent idle and not ours. */
function busyMeter() {
  const total = () => os.cpus().reduce((a, c) => { const t = c.times; a.all += t.user + t.nice + t.sys + t.irq + t.idle; a.idle += t.idle; return a; }, { all: 0, idle: 0 });
  const t0 = total();
  const u0 = process.cpuUsage();
  return () => {
    const t1 = total();
    const u = process.cpuUsage(u0);
    const all = t1.all - t0.all;
    const ours = (u.user + u.system) / 1000;
    const busy = all - (t1.idle - t0.idle);
    return { pc_busy_pct: Math.round((100 * busy) / all), others_busy_pct: Math.max(0, Math.round((100 * (busy - ours)) / all)) };
  };
}

/** The ONNX Runtime and DirectML libraries this process has loaded, by path. */
const loadedLibraries = () => (process.report?.getReport()?.sharedObjects || []).filter((p) => /onnxruntime|directml/i.test(p));
let failures = 0;
const fail = (what) => { failures++; console.log(JSON.stringify({ fail: what })); };

const SENTENCES = [
  'Good morning.',
  'The quarterly report is attached, and the figures for October are better than we expected.',
  'Rutba Office reads your documents aloud on this computer, so no text ever leaves it, and it works with the network switched off.',
  'In the second half of the year, the team moved the accounts to the new system, trained every member of staff, and closed the old ledgers without losing a single record.',
];
const NUMBERS = [
  'On the 3rd of March 2026 the invoice for £1,234.50 was paid at 10:30.',
  'Sales rose 12% to $5.2 million, and 1,005 customers renewed in 2005.',
  'Call extension 4417 before 9:05, or read section 2.3 of the 21st report.',
];
const longText = ['README.md', 'speech/README.md', 'languages/README.md']
  .map((f) => path.join(ROOT, f)).filter((f) => fs.existsSync(f))
  .map((f) => fs.readFileSync(f, 'utf8')).join('\n\n')
  .replace(/```[\s\S]*?```/g, ' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[#*`|>_]/g, ' ').replace(/:--+/g, ' ').replace(/\s+/g, ' ');

function checkSamples(label, out, text) {
  const s = out.samples;
  if (!(s instanceof Float32Array) || !s.length) return fail(`${label}: no samples`);
  let peak = 0;
  for (const x of s) { if (!Number.isFinite(x)) return fail(`${label}: a sample is not a number`); peak = Math.max(peak, Math.abs(x)); }
  if (peak < 0.02 || peak > 1.5) fail(`${label}: peak ${peak.toFixed(3)} is out of range`);
  const secs = s.length / out.rate;
  const perChar = secs / Math.max(text.length, 1);
  if (perChar < 0.02 || perChar > 0.25) fail(`${label}: ${secs.toFixed(2)} s for ${text.length} characters`);
  return { secs, peak };
}

const voicesBuilt = fs.readdirSync(dist).filter((d) => /^voice-kokoro-[ab][fm]-/.test(d) && fs.statSync(path.join(dist, d)).isDirectory());
const pron = path.join(dist, 'speech-en-kokoro');
const pronFiles = Object.fromEntries(['cmudict.dict', 'office-words.txt'].map((f) => [f, sha(path.join(pron, f))]));
const loadOrt = (dir) => createRequire(path.join(dir, 'package.json'))('onnxruntime-node');

for (const variant of models) {
  const modelDir = path.join(dist, `speech-kokoro-82m-${variant}`);
  const modelFile = path.join(modelDir, 'model.onnx');
  const rss0 = mb();
  const meter = busyMeter();
  const handle = createHandler({ loadOrt });
  let n = 1;
  const ask = async (op, body) => { const a = await handle({ id: n++, op, ...body }); if (!a.ok) throw new Error(`${op}: ${a.error}`); return a.result; };
  const t0 = performance.now();
  const io = await ask('load', { ortDir, model: { path: modelFile, sha512: sha(modelFile) }, threads });
  const loadMs = performance.now() - t0;
  if (io.inputs.join() !== 'input_ids,style,speed' || io.outputs.join() !== 'waveform') fail(`${variant}: inputs ${io.inputs} outputs ${io.outputs}`);
  await ask('pronunciation', { pack: 'speech-en-kokoro', dir: pron, files: pronFiles });
  const addVoice = async (id) => {
    const dir = path.join(dist, id);
    const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
    await ask('voice', { voice: id, dir, sha512: sha(path.join(dir, 'voice.bin')), language: m.voice.language, pronunciation: 'speech-en-kokoro' });
  };
  await addVoice('voice-kokoro-bf-emma');
  await addVoice('voice-kokoro-af-heart');
  const rssLoaded = mb();
  let peakRss = rssLoaded;

  const speak = async (voice, text, label) => {
    const t = performance.now();
    let out;
    try { out = await ask('say', { text, voice }); } catch (e) { fail(`${label}: ${e.message}`); return { ms: 0, secs: 0, out: { samples: new Float32Array(0) }, spelt: [] }; }
    const ms = performance.now() - t;
    peakRss = Math.max(peakRss, mb());
    const c = checkSamples(label, out, text);
    return { ms, secs: c?.secs || 0, out, spelt: out.spelt };
  };

  // First sound after load: a short sentence, cold.
  const first = await speak('voice-kokoro-af-heart', 'Good morning.', `${variant} first`);
  // The four sentences of the Windows measurement, best of two, both accents.
  const rows = {};
  for (const voice of ['voice-kokoro-af-heart', 'voice-kokoro-bf-emma']) {
    let audio = 0, model = 0;
    for (const [i, s] of SENTENCES.entries()) {
      const a = await speak(voice, s, `${variant} ${voice} s${i}`);
      const b = await speak(voice, s, `${variant} ${voice} s${i}`);
      audio += a.secs; model += Math.min(a.ms, b.ms) / 1000;
      if (wavDir && i === 2) { fs.mkdirSync(wavDir, { recursive: true }); fs.writeFileSync(path.join(wavDir, `${variant}-${voice}.wav`), toWav(a.out.samples)); }
    }
    rows[voice] = +(audio / model).toFixed(2);
  }
  // Numbers.
  const spelt = new Set();
  for (const [i, s] of NUMBERS.entries()) {
    const r = await speak('voice-kokoro-bf-emma', s, `${variant} numbers ${i}`);
    for (const w of r.spelt) spelt.add(w);
    if (wavDir && variant === models[0]) fs.writeFileSync(path.join(wavDir, `numbers-${i}.wav`), toWav(r.out.samples));
  }
  // A long document, read the way the reader reads it.
  const parts = quickStart(sentences(longText, 'en')).slice(0, Number(opt('--doc-sentences', 80)));
  let docAudio = 0, docModel = 0;
  for (const [i, s] of parts.entries()) {
    const r = await speak('voice-kokoro-af-heart', s, `${variant} doc ${i}`);
    docAudio += r.secs; docModel += r.ms / 1000;
    for (const w of r.spelt) spelt.add(w);
  }
  // Every English voice built speaks once (on the first model only: the voices do not depend on it).
  let voicesOk = 0;
  if (variant === models[0]) {
    for (const id of voicesBuilt) {
      await addVoice(id);
      const r = await speak(id, 'This voice is ready to read.', `${variant} ${id}`);
      if (r.secs > 0) voicesOk++;
    }
  }
  console.log(JSON.stringify({
    variant, threads, cpus: os.cpus().length, cpu: os.cpus()[0]?.model?.trim(), platform: `${process.platform}-${process.arch}`,
    ...meter(), libraries: loadedLibraries(),
    size_mb: +(fs.statSync(modelFile).size / 1048576).toFixed(1), load_ms: Math.round(loadMs),
    rss_before_mb: rss0, rss_loaded_mb: rssLoaded, rss_peak_mb: peakRss,
    first_sound_ms: Math.round(first.ms), speed_four_sentences: rows,
    document: { sentences: parts.length, audio_s: Math.round(docAudio), model_s: Math.round(docModel), speed: +(docAudio / docModel).toFixed(2) },
    voices_spoken: variant === models[0] ? `${voicesOk}/${voicesBuilt.length}` : undefined,
    spelt_out: [...spelt].slice(0, 40), spelt_count: spelt.size,
  }));
}
console.log(JSON.stringify({ done: true, failures }));
process.exit(failures ? 1 : 0);
