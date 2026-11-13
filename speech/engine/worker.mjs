// The engine's utility process: holds the model and answers the main
// process's requests, one message at a time. Started by main.mjs with
// Electron's utilityProcess.fork at below normal priority; a crash here ends
// only speech.
//
// Requests ({ id, op, ... }) and answers ({ id, ok, result | error }):
//   load          { ortDir, model: { path, sha512 }, threads }   reads the model, checks the bytes it read, starts a session
//   pronunciation { pack, dir, files: { name: sha512 } }        parses a language's data, checking each file it reads
//   voice         { voice, dir, sha512, language, pronunciation }
//   unvoice       { voice }
//   say           { text, voice, speed }                        answers samples as a Float32Array
//   cancel        {}
//
// Every file is hashed as it is read and refused if it is not the one the
// signed manifest lists, so a file changed after the core checked it is never
// used. The text read is never logged.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createSpeaker, englishData } from './speaker.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));

function readChecked(file, sha512) {
  const bytes = fs.readFileSync(file);
  const got = crypto.createHash('sha512').update(bytes).digest('base64');
  if (got !== sha512) throw new Error(`${path.basename(file)} is not the file its pack lists`);
  return bytes;
}

/**
 * The request handler, apart from the port so the tests can drive it.
 * @param {{ loadOrt?: (dir: string) => object }} [o]
 */
export function createHandler({ loadOrt = (dir) => createRequire(path.join(dir, 'package.json'))('onnxruntime-node') } = {}) {
  let speaker = null;
  const vocab = JSON.parse(fs.readFileSync(path.join(HERE, 'vocab.json'), 'utf8')).vocab;
  const ops = {
    async load({ ortDir, model, threads = 2 }) {
      const ort = loadOrt(ortDir);
      const bytes = readChecked(model.path, model.sha512);
      // No CPU memory arena and no memory pattern: over a 72-sentence read on
      // paritas-lab (13 Nov 2026) they kept the peak, 1.76 GB, held after the
      // read; without them the peak was 1.26 GB and 0.89 GB after, at the same
      // speed (0.85x against 0.87x).
      const session = await ort.InferenceSession.create(bytes, {
        executionProviders: ['cpu'], intraOpNumThreads: threads, interOpNumThreads: 1, graphOptimizationLevel: 'all',
        enableCpuMemArena: false, enableMemPattern: false,
      });
      speaker = createSpeaker({ ort, session, vocab });
      return { inputs: session.inputNames, outputs: session.outputNames };
    },
    pronunciation({ pack, dir, files }) {
      need();
      const text = {};
      for (const [name, sha512] of Object.entries(files)) text[name] = readChecked(path.join(dir, name), sha512).toString('utf8');
      if (!text['cmudict.dict']) throw new Error(`${pack}: no text step reads this pronunciation pack yet`);
      speaker.addPronunciation(pack, englishData(text));
      return {};
    },
    voice({ voice, dir, sha512, language, pronunciation }) {
      need();
      speaker.addVoice(voice, { language, pronunciation, bytes: readChecked(path.join(dir, 'voice.bin'), sha512) });
      return {};
    },
    unvoice({ voice }) { need(); speaker.removeVoice(voice); return {}; },
    async say(req) { need(); return speaker.say(req); },
    cancel() { speaker?.cancel(); return {}; },
  };
  function need() { if (!speaker) throw new Error('the speech model is not loaded'); }
  return async function handle(msg) {
    const op = ops[msg?.op];
    if (!op) return { id: msg?.id, ok: false, error: `unknown request ${msg?.op}` };
    try {
      return { id: msg.id, ok: true, result: await op(msg) };
    } catch (err) {
      return { id: msg.id, ok: false, error: String(err?.message || err) };
    }
  };
}

// In Electron's utility process, answer the main process.
if (process.parentPort) {
  const handle = createHandler();
  process.parentPort.on('message', async (e) => {
    const answer = await handle(e.data);
    process.parentPort.postMessage(answer);
  });
}
