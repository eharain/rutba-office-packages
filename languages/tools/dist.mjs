// Writes the language packs to be released into dist/v<version>/<id>/,
// where the repository's release step (tools/carry.mjs at the root) gathers
// them. Run by tools/build.mjs after every check has passed.
//
//   node tools/dist.mjs
//
// Every pack that passes the checks is released: English (status "source"),
// which Rutba Office also keeps a copy of, packs whose wording is settled
// (status "reviewed"), and machine translations offered as drafts (status
// "draft"), so people can use them and suggest better wording (owner,
// D-2026-11-13-23). The status and the review line travel in the manifest and
// the feed, so Office marks a draft wherever a language is chosen.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { officePin } from '../../tools/pack-core.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const version = officePin().version;
const out = path.join(ROOT, 'dist', `v${version}`);
fs.rmSync(path.join(ROOT, 'dist'), { recursive: true, force: true });

// How much of this version's English a pack covers, per version of a label:
// the labels whose entry was made from the same English (the same source
// hash as lang-en's). A regional pack is counted over its base, which it
// requires. Written into the released manifest as `coverage`, so the feed
// can show it before anyone downloads the pack.
const read = (dir, file) => (fs.existsSync(path.join(dir, file)) ? JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')) : {});
const english = read(path.join(ROOT, 'packs', 'lang-en'), 'messages.json');
function coverageOf(dir, manifest) {
  const base = manifest.variantOf ? path.join(ROOT, 'packs', manifest.variantOf) : null;
  const messages = { ...(base ? read(base, 'messages.json') : {}), ...read(dir, 'messages.json') };
  const versions = { ...(base ? read(base, 'versions.json') : {}), ...read(dir, 'versions.json') };
  const c = { labels: Object.keys(english).length, short: 0, medium: 0, complete: 0 };
  for (const [id, e] of Object.entries(english)) {
    if (messages[id]?.source === e.source) c.medium += 1;
    if (versions[id]?.source === e.source) { if (versions[id].short !== undefined) c.short += 1; if (versions[id].complete !== undefined) c.complete += 1; }
  }
  return c;
}

const released = [], held = [];
for (const id of fs.readdirSync(path.join(ROOT, 'packs')).sort()) {
  const dir = path.join(ROOT, 'packs', id);
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  if (!['source', 'reviewed', 'draft'].includes(manifest.status)) { held.push(`${id} (${manifest.status})`); continue; }
  if (manifest.version !== version) throw new Error(`${id} is at ${manifest.version}, not ${version}: run the build`);
  fs.mkdirSync(path.join(out, id), { recursive: true });
  for (const f of fs.readdirSync(dir)) fs.copyFileSync(path.join(dir, f), path.join(out, id, f));
  fs.writeFileSync(path.join(out, id, 'manifest.json'), JSON.stringify({ ...manifest, coverage: coverageOf(dir, manifest) }, null, 2) + '\n');
  released.push(manifest.status === 'draft' ? `${id} (draft)` : id);
}
console.log(`dist/v${version}: ${released.length ? released.join(', ') : 'no pack is ready for release'}; held: ${held.join(', ') || 'none'}`);
