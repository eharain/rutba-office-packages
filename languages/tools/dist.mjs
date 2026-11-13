// Writes the language packs that may be released into dist/v<version>/<id>/,
// where the repository's release step (tools/carry.mjs at the root) gathers
// them. Run by tools/build.mjs after every check has passed.
//
//   node tools/dist.mjs
//
// What may be released: English (lang-en, status "source"), which is built,
// signed and released like every language, with a copy kept in Rutba Office;
// and a pack whose status is "reviewed", that is, read in full by a native
// speaker and then by a second reviewer. Drafts never are.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { officePin } from '../../tools/pack-core.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const version = officePin().version;
const out = path.join(ROOT, 'dist', `v${version}`);
fs.rmSync(path.join(ROOT, 'dist'), { recursive: true, force: true });

const released = [], held = [];
for (const id of fs.readdirSync(path.join(ROOT, 'packs')).sort()) {
  const dir = path.join(ROOT, 'packs', id);
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  const ok = manifest.status === 'reviewed' || manifest.status === 'source';
  if (!ok) { held.push(`${id} (${manifest.status})`); continue; }
  if (manifest.version !== version) throw new Error(`${id} is at ${manifest.version}, not ${version}: run the build`);
  fs.mkdirSync(path.join(out, id), { recursive: true });
  for (const f of fs.readdirSync(dir)) fs.copyFileSync(path.join(dir, f), path.join(out, id, f));
  released.push(id);
}
console.log(`dist/v${version}: ${released.length ? released.join(', ') : 'no pack is ready for release'}; held: ${held.join(', ') || 'none'}`);
