// The check after a packages release is published (design
// private/office-pack-compatibility-design.md 3.3, step 4). It holds no key
// and signs nothing, so it may run in GitHub Actions.
//
//   node tools/verify-release.mjs [--version <X>] [--base <release URL>] [--keys <public keys .json>]
//       [--office <clone of Office's vX tag>] [--no-remote] [--no-files]
//
// It fetches the release's feed.json and feed.json.sig and every envelope,
// and checks:
//   - the feed's signature, under the public packages keys;
//   - its readiness fields: format, readiness, office is X, state, retired;
//   - each envelope: the size and SHA-512 the feed lists, its signature under
//     the key its kind is trusted with (the release key for the engine, the
//     packages keys for data), and the same id, kind, version and revision
//     as the feed says;
//   - each file the feed lists: the size and SHA-512 the envelope lists, and,
//     unless --no-files, that its URL answers with exactly those bytes;
//   - unless --no-remote, that office.json's commit is the one Office's vX
//     tag names (packages for X come only from X's final commit, 3.4);
//   - with --office, that lang-en is byte for byte the copy Office's tag
//     carries (C15), and Office's own usable() takes every pack.
//
// The public keys come from the contract in the Office clone (its `keys`: {
// packages: [PEM], release: [PEM]}, the one place Office keeps them). --keys
// is a local override only, a JSON file of the same shape.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { officePin, CODE_KINDS } from './pack-core.mjs';
import { verifyEnvelope } from './sign.mjs';
import { verifyFeed, releaseUrl, FEED_FORMAT, FEED_READINESS, FEED_STATES } from './feed.mjs';
import { remoteTagCommit, OFFICE_ENGLISH } from './carry.mjs';

const sha512 = (bytes) => crypto.createHash('sha512').update(bytes).digest('base64');

/** Bytes at a URL; file: URLs are read from disk (for the tests and local runs). */
export async function get(url) {
  if (url.startsWith('file:')) return fs.readFileSync(fileURLToPath(url));
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

/** Public keys from { packages: [PEM], release: [PEM] }. */
export function readKeys(json) {
  const k = (list) => (list || []).map((pem) => crypto.createPublicKey(pem));
  return { packages: k(json.packages), release: k(json.release) };
}

/**
 * @param {{ version: string, base: string, keys: { packages: crypto.KeyObject[], release: crypto.KeyObject[] },
 *   files?: boolean, office?: string|null, contract?: object|null, compat?: object|null, fetchBytes?: Function }} o
 * @returns {Promise<{ faults: string[], packs: number, files: number }>}
 */
export async function verifyRelease({ version, base, keys, files = true, office = null, contract = null, compat = null, fetchBytes = get }) {
  const faults = [];
  let feed;
  try {
    feed = JSON.parse((await fetchBytes(`${base}feed.json`)).toString('utf8'));
    const sig = JSON.parse((await fetchBytes(`${base}feed.json.sig`)).toString('utf8'));
    if (!verifyFeed(feed, sig, keys.packages)) faults.push('feed.json: its signature does not hold under the packages keys');
  } catch (e) {
    return { faults: [`feed: ${e.message}`], packs: 0, files: 0 };
  }
  if (feed.format !== FEED_FORMAT) faults.push(`feed format ${feed.format} is not ${FEED_FORMAT}`);
  if (feed.readiness !== FEED_READINESS) faults.push(`feed readiness ${feed.readiness} is not ${FEED_READINESS}`);
  if (feed.office !== version) faults.push(`the feed is for Office ${feed.office}, not ${version}`);
  if (!Number.isInteger(feed.sequence) || feed.sequence < 1) faults.push('the feed has no sequence');
  if (!FEED_STATES.includes(feed.state)) faults.push(`the feed's state ${feed.state} is not partial or complete`);
  if (!Array.isArray(feed.retired) || feed.retired.some((r) => !r?.id || !r?.reason)) faults.push('retired is a list of { id, reason }');

  let checkedFiles = 0;
  const notes = [];
  // Office's copy of lang-en (C15), compared only when it is at this version:
  // an earlier one is the fallback Office carried, which the release rightly
  // does not publish, and is reported as lagging.
  let english = office && path.join(office, ...OFFICE_ENGLISH, 'lang-en');
  const englishEnvelope = english && path.join(office, ...OFFICE_ENGLISH, 'lang-en.pack.json');
  if (english && fs.existsSync(englishEnvelope)) {
    const at = JSON.parse(fs.readFileSync(englishEnvelope, 'utf8')).manifest || {};
    if (at.version !== version) { notes.push(`lang-en: Office ${version} carries ${at.version} revision ${at.revision}, the earlier fallback; its copy lags this release`); english = null; }
  } else if (english && fs.existsSync(english)) faults.push(`lang-en: Office ${version} carries the folder but no lang-en.pack.json beside it`);
  for (const p of feed.packs || []) {
    let envBytes;
    try { envBytes = await fetchBytes(p.envelope.url); } catch (e) { faults.push(`${p.id}: envelope: ${e.message}`); continue; }
    if (envBytes.length !== p.envelope.size || sha512(envBytes) !== p.envelope.sha512) faults.push(`${p.id}: the envelope is not the one the feed lists`);
    const envelope = JSON.parse(envBytes.toString('utf8'));
    const m = envelope.manifest || {};
    const trusted = CODE_KINDS.includes(m.kind) ? keys.release : keys.packages;
    if (!verifyEnvelope(envelope, trusted)) faults.push(`${p.id}: its signature does not hold under the ${CODE_KINDS.includes(m.kind) ? 'release' : 'packages'} key`);
    for (const f of ['id', 'kind', 'version', 'revision']) if (m[f] !== p[f]) faults.push(`${p.id}: the feed says ${f} ${p[f]}, the envelope ${m[f]}`);
    if (m.version !== version) faults.push(`${p.id}: version ${m.version} in the release for ${version}`);
    if (compat && contract) {
      const r = compat.usable(envelope, { contract, office: version, keys, engine: null });
      if (!r?.usable && !(r?.code === 'requires')) faults.push(`${p.id}: Office's usable() refuses it: ${r?.code}`);
    }
    for (const [name, f] of Object.entries(p.files || {})) {
      const listed = m.files?.[name];
      if (!listed || listed.size !== f.size || listed.sha512 !== f.sha512) { faults.push(`${p.id}/${name}: the feed and the envelope differ`); continue; }
      if (!files) continue;
      try {
        const bytes = await fetchBytes(f.url);
        checkedFiles++;
        if (bytes.length !== f.size || sha512(bytes) !== f.sha512) faults.push(`${p.id}/${name}: ${f.url} answers other bytes`);
        if (p.id === 'lang-en' && english && fs.existsSync(path.join(english, ...name.split('/'))) && !fs.readFileSync(path.join(english, ...name.split('/'))).equals(bytes)) faults.push(`lang-en/${name}: not the copy Office ${version} carries`);
      } catch (e) { faults.push(`${p.id}/${name}: ${e.message}`); }
    }
    if (p.id === 'lang-en' && english && !fs.readFileSync(englishEnvelope).equals(envBytes)) faults.push(`lang-en: the envelope is not the one Office ${version} carries`);
  }
  if (english && !(feed.packs || []).some((p) => p.id === 'lang-en')) faults.push(`lang-en: Office ${version} carries it, the release does not list it`);
  for (const r of feed.retired || []) if ((feed.packs || []).some((p) => p.id === r.id)) faults.push(`${r.id}: both listed and retired`);
  return { faults, notes, packs: (feed.packs || []).length, files: checkedFiles };
}

async function main(args) {
  const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
  const pin = officePin();
  const version = opt('--version') || pin.version;
  const base = opt('--base') || releaseUrl(version);
  const keysFile = opt('--keys');
  const office = opt('--office') ? path.resolve(opt('--office')) : null;
  let contract = null;
  let compat = null;
  if (office) {
    const c = path.join(office, 'packages/office-shell/src/addons-contract.json');
    const m = path.join(office, 'packages/office-shell/src/electron/addons-compat.js');
    if (fs.existsSync(c)) contract = JSON.parse(fs.readFileSync(c, 'utf8'));
    if (fs.existsSync(m)) compat = createRequire(m)(m);
  }
  const keysJson = keysFile ? JSON.parse(fs.readFileSync(keysFile, 'utf8')) : contract?.keys;
  if (!keysJson) { console.error('no public keys: give --keys, or an --office clone whose contract lists them'); return 2; }
  const faults = [];
  if (!args.includes('--no-remote')) {
    const at = remoteTagCommit(pin.repo, `v${version}`);
    if (at !== pin.commit) faults.push(`office.json's commit ${pin.commit} is not the one v${version} names (${at || 'no such tag'})`);
  }
  const r = await verifyRelease({ version, base, keys: readKeys(keysJson), files: !args.includes('--no-files'), office, contract, compat });
  faults.push(...r.faults);
  for (const n of r.notes || []) console.log(n);
  for (const f of faults) console.error(f);
  console.log(`release for Office ${version}: ${r.packs} packs, ${r.files} files fetched, ${faults.length ? `${faults.length} faults` : 'all as published'}`);
  return faults.length ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exit(await main(process.argv.slice(2)));
