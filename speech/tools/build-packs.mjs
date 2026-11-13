// Builds the speech data packs (models, pronunciation, voices) for the Office
// release in office.json, into speech/dist/v<version>/, ready for
// tools/sign.mjs and tools/feed.mjs at the repository root.
//
//   node tools/fetch-sources.mjs          first: the pinned files into the cache
//   node tools/build-packs.mjs [id ...]   all buildable packs when none named
//
// Each pack folder gets its files from the cache (checked against the pinned
// SHA-256 again here), its licence and credit files, and a manifest.json with
// the shared core (tools/pack-core.mjs): version is Office's, revision comes
// from source.json (1 when absent), status is draft until a native listener
// passes the language. A voice whose language has no pronunciation pack yet
// is not built: it waits, and is counted.
//
// The engine pack is not built here: it is code, built against the pinned
// Office tag and signed by Office's release tooling.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { checkManifest, checkFiles, checkRequires, officePin } from '../../tools/pack-core.mjs';
import { sources, cachedPath } from './fetch-sources.mjs';

const SPEECH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LICENCES = path.join(SPEECH, 'licences');

/** The files each kind may hold, besides its licence files. */
export const ALLOWED = {
  model: (f) => f === 'model.onnx' || f === 'manifest.json',
  pronunciation: (f) => /^[a-z0-9-]+\.(dict|txt)$/.test(f) || f === 'manifest.json',
  voice: (f) => f === 'voice.bin' || f === 'manifest.json',
};

const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

function manifestFor(src, version, licenceFiles) {
  const m = {
    id: src.id,
    kind: src.kind,
    format: 1,
    version,
    revision: src.revision || 1,
    name: src.name,
    status: src.status || 'draft',
    tags: src.tags || [],
    requires: src.requires || [],
    licence: { spdx: src.licence.spdx, files: licenceFiles },
  };
  if (src.provides) m.provides = src.provides;
  if (src.voice) m.voice = src.voice;
  return m;
}

/**
 * Builds one pack folder. Returns its manifest.
 * @param {object} src  source.json
 * @param {string} out  dist/v<version>
 * @param {string} version
 */
export function buildPack(src, out, version) {
  const dir = path.join(out, src.id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const licenceFiles = [];
  for (const f of src.files || []) {
    const from = cachedPath(src, f);
    if (!fs.existsSync(from)) throw new Error(`${src.id}/${f.name}: not in the cache; run tools/fetch-sources.mjs first`);
    if (sha256(from) !== f.sha256) throw new Error(`${src.id}/${f.name}: the cached file is not the pinned one`);
    // A licence fetched with the data keeps its own name, as a .txt.
    const name = /^LICENSE/.test(f.name) ? `${f.name.replace(/\./g, '-')}.txt` : f.name;
    fs.copyFileSync(from, path.join(dir, name));
    if (name !== f.name) licenceFiles.push(name);
  }
  for (const f of src.local || []) fs.copyFileSync(path.join(SPEECH, 'packs', src.id, f), path.join(dir, f));
  if (src.licence.spdx === 'Apache-2.0') {
    fs.copyFileSync(path.join(LICENCES, 'Apache-2.0.txt'), path.join(dir, 'LICENSE.txt'));
    licenceFiles.push('LICENSE.txt');
  }
  if (src.licence.credit) {
    fs.writeFileSync(path.join(dir, 'NOTICE.txt'), `${src.name}\n\n${src.licence.credit}\n`);
    licenceFiles.push('NOTICE.txt');
  }
  const manifest = manifestFor(src, version, licenceFiles.sort());
  fs.writeFileSync(path.join(dir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const faults = [...checkManifest(manifest, { office: version }), ...checkFiles(dir, manifest, ALLOWED[src.kind] || (() => false))];
  if (faults.length) throw new Error(`${src.id}: ${faults.join('; ')}`);
  return manifest;
}

/** Which sources can be built now, and which wait for a language's pronunciation pack. */
export function plan(all, named = []) {
  const ids = new Set(all.map((s) => s.id));
  const ready = [];
  const waiting = [];
  for (const s of all) {
    // A source with `hold` is kept for its record but not built (the reason is
    // in it), unless asked for by name, as a check of the held pack does.
    if (s.hold && !named.includes(s.id)) continue;
    const missing = (s.requires || []).filter((r) => /^speech-[a-z-]+-kokoro$/.test(r) && !ids.has(r));
    (missing.length ? waiting : ready).push(s);
  }
  return { ready, waiting };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { version } = officePin();
  const out = path.join(SPEECH, 'dist', `v${version}`);
  const { ready, waiting } = plan(sources(process.argv.slice(2)), process.argv.slice(2));
  const built = [];
  let failed = 0;
  for (const src of ready) {
    try { built.push(buildPack(src, out, version)); } catch (e) { failed++; console.error(String(e.message || e)); }
  }
  const engine = { id: 'speech-engine', provides: ['speech-engine'], requires: [] };
  for (const [id, f] of checkRequires([...built, engine])) { failed++; console.error(`${id}: ${f.join('; ')}`); }
  console.log(`speech packs for Office ${version}: ${built.length} built into ${out}; ${waiting.length} voices wait for their language's pronunciation pack`);
  process.exit(failed ? 1 : 0);
}
