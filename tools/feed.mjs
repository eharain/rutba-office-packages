// The signed feed of one release: what Rutba Office lists on its "Voices and
// languages" page and where it fetches each file from.
//
// Each release of this repository is tagged v<Office version>, and Office
// <version> reads that tag's feed:
//   https://github.com/eharain/rutba-office-packages/releases/download/v<version>/feed.json
//   ...and feed.json.sig beside it.
//
// The feed lists every pack for that Office version: its envelope (the signed
// <id>.pack.json) and each of its files by URL, size and SHA-512. A file whose
// SHA-512 is the same as in the previous feed keeps the previous URL, which
// may be in an earlier release, so a new Office version does not publish (or
// make anyone download) a 156 MB model again for a new number.
//
// The feed's signature covers "Rutba Office packages feed" and a newline, then
// canonical(feed): words no pack manifest is signed over, so a feed signature
// can never pass for a pack's, nor the other way round. The sequence number
// rises with every feed ever published; Office refuses one lower than the
// highest it has seen.
//
//   node tools/feed.mjs <dist/v<version>> [--previous <feed.json>] [--withdraw <id> ...]
//     writes feed.json and assets.json (which local file goes up under which
//     asset name) into the dist folder; signing is a separate step:
//   node tools/feed.mjs --sign <dist/v<version>/feed.json> --key <private.pem>

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { canonical, compareVersions, checkManifest, checkRequires, officePin } from './pack-core.mjs';
import { verifyEnvelope, keyIdOf, sha512Of } from './sign.mjs';

export const FEED_FORMAT = 1;
export const FEED_WORDS = 'Rutba Office packages feed\n';
export const REPO = 'eharain/rutba-office-packages';
export const releaseUrl = (version) => `https://github.com/${REPO}/releases/download/v${version}/`;

/** A release asset's name for one file of a pack: assets in a release are flat. */
export const assetName = (id, file) => `${id}--${file.replace(/\//g, '--')}`;

/**
 * The feed for a built release folder.
 * @param {string} dist  holds <id>/ folders and <id>.pack.json envelopes
 * @param {{ version: string, previous?: object, withdraw?: string[], date?: string, publicKeys?: crypto.KeyObject[] }} o
 */
export function buildFeed(dist, { version, previous = null, withdraw = [], date = new Date().toISOString(), publicKeys = null }) {
  const base = releaseUrl(version);
  const before = new Map();
  for (const p of previous?.packs || []) for (const [name, f] of Object.entries(p.files || {})) before.set(`${p.id}/${name}`, f);
  const envelopes = fs.readdirSync(dist).filter((f) => f.endsWith('.pack.json')).sort();
  const packs = [];
  const assets = [];
  const faults = [];
  for (const file of envelopes) {
    const envelope = JSON.parse(fs.readFileSync(path.join(dist, file), 'utf8'));
    const m = envelope.manifest;
    if (publicKeys && !verifyEnvelope(envelope, publicKeys)) faults.push(`${m.id}: the envelope's signature does not hold`);
    faults.push(...checkManifest(m, { office: version }).map((f) => `${m.id}: ${f}`));
    const old = previous?.packs?.find((p) => p.id === m.id);
    if (old && old.version === m.version && compareVersions(m, old) < 0) faults.push(`${m.id}: revision ${m.revision} is lower than the last feed's ${old.revision}`);
    const files = {};
    let size = 0;
    for (const [name, f] of Object.entries(m.files || {})) {
      const local = path.join(dist, m.id, ...name.split('/'));
      if (!fs.existsSync(local) || fs.statSync(local).size !== f.size || sha512Of(local) !== f.sha512) { faults.push(`${m.id}/${name}: the built file is not the one the envelope lists`); continue; }
      const was = before.get(`${m.id}/${name}`);
      const url = was && was.sha512 === f.sha512 && was.size === f.size ? was.url : base + assetName(m.id, name);
      if (url.startsWith(base)) assets.push({ local, asset: assetName(m.id, name) });
      files[name] = { url, size: f.size, sha512: f.sha512 };
      size += f.size;
    }
    const envBytes = fs.readFileSync(path.join(dist, file));
    assets.push({ local: path.join(dist, file), asset: file });
    packs.push({
      id: m.id, kind: m.kind, version: m.version, revision: m.revision, name: m.name, nativeName: m.nativeName,
      status: m.status, tags: m.tags, requires: m.requires, provides: m.provides, licence: { spdx: m.licence.spdx },
      size, withdrawn: withdraw.includes(m.id),
      envelope: { url: base + file, size: envBytes.length, sha512: crypto.createHash('sha512').update(envBytes).digest('base64') },
      files,
    });
  }
  for (const id of withdraw) if (!packs.some((p) => p.id === id)) faults.push(`${id}: asked to withdraw a pack this release does not have`);
  for (const [id, f] of checkRequires(packs)) faults.push(...f.map((x) => `${id}: ${x}`));
  const feed = { format: FEED_FORMAT, office: version, sequence: (previous?.sequence || 0) + 1, date, packs };
  return { feed, assets, faults };
}

/** The signature file for a feed. */
export function signFeed(feed, privateKey) {
  const bytes = Buffer.from(FEED_WORDS + canonical(feed), 'utf8');
  return { keyId: keyIdOf(privateKey), signature: crypto.sign(null, bytes, privateKey).toString('base64') };
}

/** True when the feed's signature holds for one of the public keys given. */
export function verifyFeed(feed, sig, publicKeys) {
  const bytes = Buffer.from(FEED_WORDS + canonical(feed), 'utf8');
  const s = Buffer.from(String(sig?.signature || ''), 'base64');
  return publicKeys.some((k) => { try { return crypto.verify(null, bytes, k, s); } catch { return false; } });
}

/**
 * What Office does with a feed it has fetched and verified, given the highest
 * sequence it has seen: take it, or refuse it as old.
 */
export function acceptFeed(feed, { highestSeen = 0, office }) {
  if (feed.format !== FEED_FORMAT) return { ok: false, why: `feed format ${feed.format} is not one this Office reads` };
  if (feed.office !== office) return { ok: false, why: `the feed is for Office ${feed.office}, not ${office}` };
  if (!(feed.sequence > highestSeen)) return { ok: false, why: `the feed's sequence ${feed.sequence} is not above ${highestSeen}: an old feed served again` };
  return { ok: true };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
  if (args[0] === '--sign') {
    const feedFile = path.resolve(args[1]);
    const key = crypto.createPrivateKey(fs.readFileSync(opt('--key')));
    const feed = JSON.parse(fs.readFileSync(feedFile, 'utf8'));
    fs.writeFileSync(`${feedFile}.sig`, `${JSON.stringify(signFeed(feed, key), null, 2)}\n`);
    console.log(`signed ${feedFile} (sequence ${feed.sequence}) with key ${keyIdOf(key)}`);
  } else if (args[0]) {
    const dist = path.resolve(args[0]);
    const version = officePin().version;
    const previous = opt('--previous') ? JSON.parse(fs.readFileSync(opt('--previous'), 'utf8')) : null;
    const withdraw = args.flatMap((a, i) => (args[i - 1] === '--withdraw' ? [a] : []));
    const { feed, assets, faults } = buildFeed(dist, { version, previous, withdraw });
    if (faults.length) { for (const f of faults) console.error(f); process.exit(1); }
    fs.writeFileSync(path.join(dist, 'feed.json'), `${JSON.stringify(feed, null, 2)}\n`);
    fs.writeFileSync(path.join(dist, 'assets.json'), `${JSON.stringify(assets, null, 2)}\n`);
    console.log(`feed for Office ${version}, sequence ${feed.sequence}: ${feed.packs.length} packs, ${assets.length} files to publish`);
  } else {
    console.error('node tools/feed.mjs <dist folder> [--previous feed.json] [--withdraw id ...]\nnode tools/feed.mjs --sign <feed.json> --key <private.pem>');
    process.exit(2);
  }
}
