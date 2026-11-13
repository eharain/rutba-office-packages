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
// rises with every feed ever published (one counter for the repository);
// Office keeps the highest it has seen for each Office version a feed names,
// and refuses one not above it.
//
// A packages release may go out before, with or after its Office release
// (private/office-pack-compatibility-design.md 2.4 and 4): `state` says
// whether the release is still being filled (`partial`) or holds every pack
// that will exist for that version (`complete`), and `retired` lists packs
// that will never be published for it, each with a reason and, where there
// is one, the pack that replaces it. In a complete feed, a pack not listed
// counts as retired too. Office's update gate reads these to decide whether
// to offer an update.
//
// Frozen (readiness 1): office, sequence, state, retired, and in each pack
// id, kind, version, revision, withdrawn, requires, provides. A later feed
// format may add fields but never change or drop these, because an older
// Office reads a newer one's feed to decide whether to offer it.
//
//   node tools/feed.mjs <dist/v<version>> [--office <version>] [--previous <feed.json>]
//       [--complete] [--withdraw <id> ...] [--retire <id>=<reason>[=><replacedBy>] ...]
//     writes feed.json and assets.json (which local file goes up under which
//     asset name) into the dist folder. --office defaults to office.json's
//     version; give it to publish a withdrawal into the feed of the version
//     before. Signing is a separate step:
//   node tools/feed.mjs --sign <dist/v<version>/feed.json> --key <private.pem>

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { canonical, compareVersions, checkManifest, checkRequires, officePin, ID } from './pack-core.mjs';
import { verifyEnvelope, keyIdOf, sha512Of } from './sign.mjs';

export const FEED_FORMAT = 1;
/** The readiness fields' version: what an older Office reads in a newer feed. */
export const FEED_READINESS = 1;
export const FEED_STATES = ['partial', 'complete'];
export const FEED_WORDS = 'Rutba Office packages feed\n';
export const REPO = 'eharain/rutba-office-packages';
export const releaseUrl = (version) => `https://github.com/${REPO}/releases/download/v${version}/`;

/** A release asset's name for one file of a pack: assets in a release are flat. */
export const assetName = (id, file) => `${id}--${file.replace(/\//g, '--')}`;

/**
 * The feed for a built release folder.
 * @param {string} dist  holds <id>/ folders and <id>.pack.json envelopes
 * @param {{ version: string, previous?: object, withdraw?: string[], state?: 'partial'|'complete',
 *   retired?: { id: string, reason: string, replacedBy?: string }[], date?: string, publicKeys?: crypto.KeyObject[] }} o
 *   `previous` is the last feed published, for any Office version: its
 *   sequence is the repository's counter, and its files' URLs are reused.
 *   `state` is partial unless the release is declared complete.
 */
export function buildFeed(dist, { version, previous = null, withdraw = [], state = 'partial', retired = [], date = new Date().toISOString(), publicKeys = null }) {
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
  if (!FEED_STATES.includes(state)) faults.push(`state ${state} is not partial or complete`);
  const names = new Set(packs.flatMap((p) => [p.id, ...(p.provides || [])]));
  const retiredOut = [];
  for (const r of retired) {
    if (!r?.id || !ID.test(r.id)) { faults.push(`retired: ${r?.id} is not a pack id`); continue; }
    if (typeof r.reason !== 'string' || !r.reason.trim()) faults.push(`retired ${r.id}: give the reason`);
    if (packs.some((p) => p.id === r.id)) faults.push(`retired ${r.id}: the release also lists it; withdraw it instead`);
    if (r.replacedBy && !names.has(r.replacedBy)) faults.push(`retired ${r.id}: its replacement ${r.replacedBy} is not in this release`);
    retiredOut.push({ id: r.id, reason: String(r.reason || '').trim(), ...(r.replacedBy ? { replacedBy: r.replacedBy } : {}) });
  }
  if (new Set(retiredOut.map((r) => r.id)).size !== retiredOut.length) faults.push('retired: an id is listed twice');
  const feed = { format: FEED_FORMAT, readiness: FEED_READINESS, office: version, sequence: (previous?.sequence || 0) + 1, state, retired: retiredOut, date, packs };
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
 * What Office does with a feed it has fetched and verified: take it, or
 * refuse it. `office` is the version Office is reading the feed for (the one
 * running, or an update's target); `seen` holds the highest sequence seen for
 * each Office version, so a newer version's feed read for the update gate
 * never makes a later withdrawal in the running version's feed look old.
 * @param {object} feed
 * @param {{ office: string, seen?: Record<string, number> }} o
 */
export function acceptFeed(feed, { office, seen = {} }) {
  if (feed.format !== FEED_FORMAT) return { ok: false, why: `feed format ${feed.format} is not one this Office reads` };
  if (feed.office !== office) return { ok: false, why: `the feed is for Office ${feed.office}, not ${office}` };
  if (!FEED_STATES.includes(feed.state) || !Array.isArray(feed.retired)) return { ok: false, why: 'the feed does not say whether it is complete, or what is retired' };
  const highest = seen[office] || 0;
  if (!(feed.sequence > highest)) return { ok: false, why: `the feed's sequence ${feed.sequence} is not above ${highest} for Office ${office}: an old feed served again` };
  return { ok: true, seen: { ...seen, [office]: feed.sequence } };
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
    const version = opt('--office') || officePin().version;
    const previous = opt('--previous') ? JSON.parse(fs.readFileSync(opt('--previous'), 'utf8')) : null;
    const many = (name) => args.flatMap((a, i) => (args[i - 1] === name ? [a] : []));
    const withdraw = many('--withdraw');
    const retired = many('--retire').map((s) => {
      const [id, rest = ''] = s.split(/=(.*)/s);
      const [reason, replacedBy] = rest.split('=>');
      return { id, reason, ...(replacedBy ? { replacedBy } : {}) };
    });
    const state = args.includes('--complete') ? 'complete' : 'partial';
    const { feed, assets, faults } = buildFeed(dist, { version, previous, withdraw, state, retired });
    if (faults.length) { for (const f of faults) console.error(f); process.exit(1); }
    fs.writeFileSync(path.join(dist, 'feed.json'), `${JSON.stringify(feed, null, 2)}\n`);
    fs.writeFileSync(path.join(dist, 'assets.json'), `${JSON.stringify(assets, null, 2)}\n`);
    console.log(`feed for Office ${version}, sequence ${feed.sequence}, ${feed.state}: ${feed.packs.length} packs, ${feed.retired.length} retired, ${assets.length} files to publish`);
  } else {
    console.error('node tools/feed.mjs <dist folder> [--office version] [--previous feed.json] [--complete] [--withdraw id ...] [--retire id=reason[=>replacedBy] ...]\nnode tools/feed.mjs --sign <feed.json> --key <private.pem>');
    process.exit(2);
  }
}
