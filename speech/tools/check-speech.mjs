// Checks the speech packs' sources, with no network and nothing fetched:
//   - every pack folder has a source.json with the fields its kind needs;
//   - every remote file is pinned by an https URL, a SHA-256 and, for files
//     we did not write, a size;
//   - `requires` names a pack id or a `provides` name some pack gives;
//   - the Office word list parses, and every word in it turns into symbols the
//     voices know, in US and British English;
//   - the engine's vocabulary has Kokoro's 115 symbols;
//   - no eSpeak, phonemizer or misaki dictionary is named anywhere in speech/.
//
//   node tools/check-speech.mjs        exits 1 on any fault

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { arpabetToKokoro } from '../engine/text/en.mjs';

const SPEECH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PACKS = path.join(SPEECH, 'packs');
const KINDS = { engine: [], model: ['provides', 'requires'], pronunciation: ['tags', 'requires'], voice: ['requires', 'voice'] };
const ID = /^(speech-engine|speech-kokoro-82m-(fp16|fp32|q8)|speech-[a-z]{2,3}(-[a-z0-9]+)*-kokoro|voice-kokoro-[a-z]{2}-[a-z0-9]+)$/;

let faults = 0;
const fault = (where, msg) => { faults++; console.error(`${where}: ${msg}`); };

const vocab = JSON.parse(fs.readFileSync(path.join(SPEECH, 'engine', 'vocab.json'), 'utf8')).vocab;
if (Object.keys(vocab).length !== 115) fault('engine/vocab.json', `expected 115 symbols, found ${Object.keys(vocab).length}`);

const packs = [];
for (const id of fs.readdirSync(PACKS)) {
  const dir = path.join(PACKS, id);
  if (!fs.statSync(dir).isDirectory()) continue;
  if (!ID.test(id)) fault(id, 'not a speech pack id');
  const file = path.join(dir, 'source.json');
  if (!fs.existsSync(file)) { if (id !== 'speech-engine') fault(id, 'no source.json'); continue; }
  const src = JSON.parse(fs.readFileSync(file, 'utf8'));
  packs.push(src);
  if (src.id !== id) fault(id, `source.json says id ${src.id}`);
  if (!KINDS[src.kind]) { fault(id, `unknown kind ${src.kind}`); continue; }
  for (const f of KINDS[src.kind]) if (src[f] === undefined) fault(id, `no ${f}`);
  if (!src.licence?.spdx) fault(id, 'no licence.spdx');
  for (const f of src.files || []) {
    if (!/^https:\/\//.test(f.url || '')) fault(id, `${f.name}: not an https URL`);
    if (!/^[0-9a-f]{64}$/.test(f.sha256 || '')) fault(id, `${f.name}: no SHA-256`);
    if (!(f.size > 0)) fault(id, `${f.name}: no size`);
  }
  for (const f of src.local || []) if (!fs.existsSync(path.join(dir, f))) fault(id, `${f} is listed but missing`);
}

const names = new Set(packs.flatMap((p) => [p.id, ...(p.provides || [])]).concat('speech-engine'));
for (const p of packs) for (const r of p.requires || []) if (!names.has(r)) fault(p.id, `requires ${r}, which no pack is or provides`);

// The Office word list.
const words = path.join(PACKS, 'speech-en-kokoro', 'office-words.txt');
if (fs.existsSync(words)) {
  const seen = new Set();
  for (const [n, line] of fs.readFileSync(words, 'utf8').split('\n').entries()) {
    if (!line.trim() || line.startsWith(';;;')) continue;
    const m = /^([a-z][a-z'-]*) ((?:[A-Z]{1,2}[012]? ?)+)$/.exec(line.trimEnd());
    if (!m) { fault(`office-words.txt:${n + 1}`, `not "word ARPABET": ${line}`); continue; }
    if (seen.has(m[1])) fault(`office-words.txt:${n + 1}`, `${m[1]} twice`);
    seen.add(m[1]);
    for (const accent of ['us', 'gb']) {
      const ph = arpabetToKokoro(m[2], { accent, word: m[1] });
      for (const ch of ph) if (vocab[ch] === undefined) fault(`office-words.txt:${n + 1}`, `${m[1]} (${accent}) gives ${JSON.stringify(ch)}, which the voices do not know`);
    }
  }
}

// Nothing GPL, and no dictionary of unstated origin, named as a source.
const BANNED = /espeak|phonemizer|us_gold|us_silver|gb_gold|gb_silver/i;
for (const p of packs) for (const f of p.files || []) if (BANNED.test(f.url) || BANNED.test(f.name)) fault(p.id, `${f.name} comes from a source speech packs may not use`);

if (faults) { console.error(`${faults} fault(s)`); process.exit(1); }
console.log(`speech packs: ${packs.length} sources checked, no faults`);
