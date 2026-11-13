// The speech engine pack's main module: what Rutba Office's main process loads
// for the `speech-engine` pack, as it loads any pack's main (register()).
//
// It serves the `speech` namespace (core change C6) and runs the model in an
// Electron utility process (worker.mjs) at below normal priority with two
// threads, started on the first request and stopped after ten minutes idle.
// The core never sees a phoneme: the reader (C7) hands over sentences and
// plays the samples it is answered.
//
// What it needs from the core (C2), in the context register() is handed:
//   context.addons.list()   the verified add-ons: [{ id, kind, dir, manifest }]
//   context.addons.find(name)  the verified add-on with that id or provides name
// Each manifest is the signed one; its files' SHA-512 are passed on so the
// utility process checks every file as it reads it.

import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const IDLE_MS = 10 * 60 * 1000;
const THREADS = 2;
/** When more than one model is added, the one used (the person's choice comes first, C5). */
const MODEL_ORDER = ['speech-kokoro-82m-fp16', 'speech-kokoro-82m-fp32', 'speech-kokoro-82m-q8'];
/** The languages this engine has a text step for, as voice packs name them. */
const SPOKEN = new Set(['en-US', 'en-GB']);

/**
 * @param {object} context  from the core
 * @param {{ fork?: Function, setPriority?: Function, idleMs?: number }} [deps]  stand-ins for tests
 */
export function createSpeechService(context, deps = {}) {
  const addons = context.addons;
  if (!addons?.list || !addons?.find) throw new Error('this Rutba Office has no add-ons folder; speech needs a newer Office');
  const fork = deps.fork || ((...a) => context.electron.utilityProcess.fork(...a));
  const setPriority = deps.setPriority || ((pid) => os.setPriority(pid, os.constants.priority.PRIORITY_BELOW_NORMAL));
  const idleMs = deps.idleMs ?? IDLE_MS;

  let child = null;
  let loaded = null;   // { model, pronunciation: Set, voices: Set }
  let starting = null;
  let next = 1;
  const waiting = new Map();
  let idle = null;

  const touch = () => { clearTimeout(idle); idle = setTimeout(stop, idleMs); idle.unref?.(); };

  function ask(op, body = {}) {
    const id = next++;
    return new Promise((resolve, reject) => {
      waiting.set(id, { resolve, reject });
      child.postMessage({ id, op, ...body });
    });
  }

  function stop() {
    clearTimeout(idle);
    if (child) { try { child.kill(); } catch { /* already gone */ } }
    child = null;
    loaded = null;
    starting = null;
    for (const w of waiting.values()) w.reject(new Error('speech stopped'));
    waiting.clear();
  }

  const shaOf = (manifest, file) => manifest.files?.[file]?.sha512;

  function pickModel() {
    const models = addons.list().filter((a) => a.kind === 'model' && (a.manifest.provides || []).includes('speech-kokoro-82m'));
    models.sort((a, b) => MODEL_ORDER.indexOf(a.id) - MODEL_ORDER.indexOf(b.id));
    return models[0] || null;
  }

  async function start() {
    const model = pickModel();
    if (!model) throw new Error('no speech model is added: add a voice in Voices and languages');
    const engine = addons.find('speech-engine');
    child = fork(path.join(HERE, 'worker.mjs'), [], { serviceName: 'Rutba Office speech', stdio: 'ignore' });
    try { setPriority(child.pid); } catch { /* the process runs at normal priority */ }
    child.on('message', (msg) => {
      const w = waiting.get(msg?.id);
      if (!w) return;
      waiting.delete(msg.id);
      if (msg.ok) w.resolve(msg.result); else w.reject(new Error(msg.error));
    });
    child.on('exit', () => { if (child) stop(); });
    await ask('load', {
      ortDir: engine?.dir || HERE,
      model: { path: path.join(model.dir, 'model.onnx'), sha512: shaOf(model.manifest, 'model.onnx') },
      threads: THREADS,
    });
    loaded = { model: model.id, pronunciation: new Set(), voices: new Set() };
  }

  async function ready() {
    if (!loaded) { starting ||= start().finally(() => { starting = null; }); await starting; }
    touch();
  }

  async function ensureVoice(voiceId) {
    const v = addons.find(voiceId);
    if (!v || v.kind !== 'voice') throw new Error(`the voice ${voiceId} is not added`);
    const pronId = v.manifest.requires.find((r) => r.startsWith('speech-'));
    const pron = addons.find(pronId);
    if (!pron) throw new Error(`${v.manifest.name} needs ${pronId}, which is not added`);
    if (!loaded.pronunciation.has(pron.id)) {
      const files = Object.fromEntries(Object.entries(pron.manifest.files || {}).filter(([n]) => /\.(dict|txt)$/.test(n) && !/^LICENSE|^NOTICE/.test(n)).map(([n, f]) => [n, f.sha512]));
      await ask('pronunciation', { pack: pron.id, dir: pron.dir, files });
      loaded.pronunciation.add(pron.id);
    }
    if (!loaded.voices.has(v.id)) {
      await ask('voice', { voice: v.id, dir: v.dir, sha512: shaOf(v.manifest, 'voice.bin'), language: v.manifest.voice.language, pronunciation: pron.id });
      loaded.voices.add(v.id);
    }
  }

  return {
    /** The voices added and speakable, for the reader's voice list. */
    async voices() {
      return addons.list()
        .filter((a) => a.kind === 'voice' && SPOKEN.has(a.manifest.voice?.language))
        .filter((a) => a.manifest.requires.every((r) => addons.find(r)))
        .map((a) => ({ id: a.id, name: a.manifest.name, language: a.manifest.voice.language, also: a.manifest.voice.alsoReads || [], gender: a.manifest.voice.gender, grade: a.manifest.voice.grade, note: a.manifest.voice.note }));
    },
    /** One sentence as samples ({ samples: Float32Array, rate }). */
    async say({ text, voice, speed = 1 } = {}) {
      if (typeof text !== 'string' || !text.trim()) return { samples: new Float32Array(0), rate: 24000 };
      await ready();
      await ensureVoice(voice);
      const out = await ask('say', { text, voice, speed });
      touch();
      return out;
    },
    async cancel() { if (child && loaded) await ask('cancel'); return {}; },
    async status() { return { running: !!child, loaded: !!loaded, preparing: !!starting, model: loaded?.model || pickModel()?.id || null }; },
    /** For the core when it quits, or when free memory runs short. */
    stop,
  };
}

/** What the core calls (docs/APP-PACKS.md 5.1.2): the namespaces this pack serves. */
export function register(context) {
  return { speech: createSpeechService(context) };
}
