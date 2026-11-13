import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { signPack } from './sign.mjs';
import { buildFeed, signFeed, releaseUrl } from './feed.mjs';
import { verifyRelease } from './verify-release.mjs';

const made = [];
const tmp = () => { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-verify-')); made.push(d); return d; };
test.after(() => { for (const d of made) fs.rmSync(d, { recursive: true, force: true }); });
const V = '2.26.0';

function pack(dist, id, extra = {}, files = { 'data.txt': `data of ${id}` }) {
  const dir = path.join(dist, id);
  fs.mkdirSync(dir, { recursive: true });
  for (const [n, t] of Object.entries(files)) fs.writeFileSync(path.join(dir, n), t);
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({ id, kind: 'voice', format: 1, version: V, revision: 1, name: id, status: 'draft', tags: [], requires: [], licence: { spdx: 'Apache-2.0', files: [] }, ...extra }));
  return dir;
}

/** A release made, signed and "published": every asset served from a map. */
function release() {
  const dist = tmp();
  const packages = crypto.generateKeyPairSync('ed25519');
  const releaseKey = crypto.generateKeyPairSync('ed25519');
  signPack(pack(dist, 'lang-en', { kind: 'language' }), packages.privateKey);
  signPack(pack(dist, 'voice-kokoro-bf-emma'), packages.privateKey);
  signPack(pack(dist, 'speech-engine', { kind: 'engine', revision: undefined }, { 'main.mjs': 'export {}' }), releaseKey.privateKey, { codeKey: true });
  const { feed, assets, faults } = buildFeed(dist, { version: V, state: 'complete', retired: [{ id: 'voice-kokoro-bf-old', reason: 'licence' }] });
  assert.deepEqual(faults, []);
  const served = new Map(assets.map((a) => [releaseUrl(V) + a.asset, fs.readFileSync(a.local)]));
  served.set(`${releaseUrl(V)}feed.json`, Buffer.from(JSON.stringify(feed)));
  served.set(`${releaseUrl(V)}feed.json.sig`, Buffer.from(JSON.stringify(signFeed(feed, packages.privateKey))));
  const fetchBytes = async (url) => { if (!served.has(url)) throw new Error(`${url}: HTTP 404`); return served.get(url); };
  const keys = { packages: [packages.publicKey], release: [releaseKey.publicKey] };
  return { dist, feed, served, fetchBytes, keys, packages, releaseKey };
}

test('a release as published passes: feed, envelopes, every file, the readiness fields', async () => {
  const r = release();
  const out = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes });
  assert.deepEqual(out.faults, []);
  assert.equal(out.packs, 3);
  assert.equal(out.files, 6, 'data and manifest of each pack');
});

test('a bad publish is caught: a changed file, a missing asset, a feed under the wrong key, the engine under a packages key', async () => {
  const r = release();
  const base = releaseUrl(V);
  const run = (fetchBytes, keys = r.keys) => verifyRelease({ version: V, base, keys, fetchBytes }).then((o) => o.faults.join(' | '));
  const swap = (url, bytes) => async (u) => (u === url ? bytes : r.fetchBytes(u));
  assert.match(await run(swap(`${base}voice-kokoro-bf-emma--data.txt`, Buffer.from('other'))), /bf-emma\/data\.txt: .* answers other bytes/);
  assert.match(await run(async (u) => { if (u.endsWith('lang-en--data.txt')) throw new Error('HTTP 404'); return r.fetchBytes(u); }), /lang-en\/data\.txt: HTTP 404/);
  assert.match(await run(r.fetchBytes, { ...r.keys, packages: [crypto.generateKeyPairSync('ed25519').publicKey] }), /feed\.json: its signature does not hold/);
  assert.match(await run(r.fetchBytes, { packages: [r.packages.publicKey], release: [r.packages.publicKey] }), /speech-engine: its signature does not hold under the release key/);
  assert.match(await verifyRelease({ version: '2.26.1', base, keys: r.keys, fetchBytes: r.fetchBytes }).then((o) => o.faults.join()), /for Office 2\.26\.0, not 2\.26\.1/);
});

test('lang-en must be byte for byte the copy Office\'s tag carries', async () => {
  const r = release();
  const office = tmp();
  const copy = path.join(office, 'resources/languages/lang-en');
  fs.cpSync(path.join(r.dist, 'lang-en'), copy, { recursive: true });
  fs.copyFileSync(path.join(r.dist, 'lang-en.pack.json'), path.join(office, 'resources/languages/lang-en.pack.json'));
  const ok = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.deepEqual(ok.faults, []);
  fs.writeFileSync(path.join(copy, 'data.txt'), 'a different English');
  const bad = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.match(bad.faults.join(), /lang-en\/data\.txt: not the copy Office 2\.26\.0 carries/);

  // An earlier fallback copy in the tag: reported as lagging, not a fault.
  const env = JSON.parse(fs.readFileSync(path.join(office, 'resources/languages/lang-en.pack.json'), 'utf8'));
  fs.writeFileSync(path.join(office, 'resources/languages/lang-en.pack.json'), JSON.stringify({ ...env, manifest: { ...env.manifest, version: '2.25.0', revision: 3 } }));
  const lag = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.deepEqual(lag.faults, []);
  assert.match(lag.notes.join(), /carries 2\.25\.0 revision 3, the earlier fallback; its copy lags/);
});
