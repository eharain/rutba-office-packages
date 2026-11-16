import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { signPack } from './sign.mjs';
import { buildFeed, signFeed, releaseUrl } from './feed.mjs';
import { verifyRelease } from './verify-release.mjs';
import { readZip, writeZip } from './zip.mjs';

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
function release({ more = null } = {}) {
  const dist = tmp();
  const packages = crypto.generateKeyPairSync('ed25519');
  const releaseKey = crypto.generateKeyPairSync('ed25519');
  signPack(pack(dist, 'lang-en', { kind: 'language' }), packages.privateKey);
  if (more) more(dist, packages.privateKey);
  signPack(pack(dist, 'voice-kokoro-bf-emma'), packages.privateKey);
  signPack(pack(dist, 'speech-engine', { kind: 'engine', revision: undefined }, { 'main.mjs': 'export {}' }), releaseKey.privateKey, { codeKey: true });
  const { feed, assets, faults } = buildFeed(dist, { version: V, state: 'complete', retired: [{ id: 'voice-kokoro-bf-old', reason: 'licence' }], zips: true });
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
  const copy = path.join(office, 'apps/desktop/resources/languages/lang-en');
  fs.cpSync(path.join(r.dist, 'lang-en'), copy, { recursive: true });
  fs.copyFileSync(path.join(r.dist, 'lang-en.pack.json'), path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'));
  const ok = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.deepEqual(ok.faults, []);
  fs.writeFileSync(path.join(copy, 'data.txt'), 'a different English');
  const bad = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.match(bad.faults.join(), /lang-en\/data\.txt: not the copy Office 2\.26\.0 carries/);

  // An earlier fallback copy in the tag: reported as lagging, not a fault.
  const env = JSON.parse(fs.readFileSync(path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'), 'utf8'));
  fs.writeFileSync(path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'), JSON.stringify({ ...env, manifest: { ...env.manifest, version: '2.25.0', revision: 3 } }));
  const lag = await verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, office });
  assert.deepEqual(lag.faults, []);
  assert.match(lag.notes.join(), /carries 2\.25\.0 revision 3, the earlier fallback; its copy lags/);
});

test('each pack is published whole, and a zip that is not the release\'s envelope and files is caught (L5)', async () => {
  const r = release();
  const base = releaseUrl(V);
  for (const p of r.feed.packs) assert.equal(p.zip.url, `${base}${p.id}-${p.version}-r${p.revision ?? 0}.zip`);
  const zipUrl = `${base}voice-kokoro-bf-emma-${V}-r1.zip`;
  const good = r.served.get(zipUrl);
  assert.deepEqual(readZip(good).map((e) => e.name), ['voice-kokoro-bf-emma.pack.json', 'voice-kokoro-bf-emma/data.txt', 'voice-kokoro-bf-emma/manifest.json']);
  const run = (bytes, feed = r.feed) => {
    const served = new Map(r.served);
    served.set(zipUrl, bytes);
    const f = { ...feed, packs: feed.packs.map((p) => (p.id === 'voice-kokoro-bf-emma' ? { ...p, zip: { url: zipUrl, size: bytes.length, sha512: crypto.createHash('sha512').update(bytes).digest('base64') } } : p)) };
    served.set(`${base}feed.json`, Buffer.from(JSON.stringify(f)));
    served.set(`${base}feed.json.sig`, Buffer.from(JSON.stringify(signFeed(f, r.packages.privateKey))));
    return verifyRelease({ version: V, base, keys: r.keys, fetchBytes: async (u) => { if (!served.has(u)) throw new Error('HTTP 404'); return served.get(u); } }).then((o) => o.faults.join(' | '));
  };
  assert.equal(await run(good), '');
  const entries = readZip(good);
  assert.match(await run(writeZip([...entries, { name: 'elsewhere.txt', data: Buffer.from('x') }])), /does not hold exactly the envelope and its files/);
  assert.match(await run(writeZip(entries.map((e) => (e.name.endsWith('data.txt') ? { ...e, data: Buffer.from('other') } : e)))), /the zip's data\.txt is not the one/);
  // The zip's bytes are not the ones the feed lists.
  const served = new Map(r.served);
  served.set(zipUrl, Buffer.from('other'));
  const out = await verifyRelease({ version: V, base, keys: r.keys, fetchBytes: async (u) => served.get(u) ?? Promise.reject(new Error('HTTP 404')) });
  assert.match(out.faults.join(), /answers other bytes/);
});

test('a draft language needs its review line, a language that left the core its pack, and Office\'s list is this release\'s (L10)', async () => {
  const review = 'machine translation, offered as a draft until its wording is settled';
  const bare = release({ more: (dist, key) => signPack(pack(dist, 'lang-de', { kind: 'language', tag: 'de' }), key) });
  const run = (r, more = {}) => verifyRelease({ version: V, base: releaseUrl(V), keys: r.keys, fetchBytes: r.fetchBytes, ...more });
  assert.match((await run(bare)).faults.join(), /lang-de: a draft with no review line/);
  const r = release({ more: (dist, key) => signPack(pack(dist, 'lang-de', { kind: 'language', tag: 'de', review }), key) });
  assert.deepEqual((await run(r)).faults, []);

  // The contract of Office's tag says German and Urdu left the core: only German's pack is in the release.
  const office = tmp();
  const contract = { languages: { builtIn: ['ar'], leftCore: ['de', 'ur'] } };
  const left = (await run(r, { office, contract })).faults.join(' | ');
  assert.match(left, /lang-ur: Office 2\.26\.0 no longer carries ur, and the release does not list its pack/);
  assert.doesNotMatch(left, /lang-de/);
  // The feed must say which left, for the gate of a version that still carries them.
  assert.match(left, /feed: its leftCore \(none\) is not Office 2\.26\.0's \(de,ur\)/);

  // Office's list against this release's, through the tag's own take-languages.
  const languagesFile = path.join(tmp(), 'languages.json');
  const rows = [{ tag: 'de', pack: 'lang-de', name: 'German', nativeName: 'Deutsch', direction: 'ltr', status: 'draft' }];
  fs.writeFileSync(languagesFile, JSON.stringify({ languages: rows }));
  fs.mkdirSync(path.join(office, 'tools'), { recursive: true });
  fs.writeFileSync(path.join(office, 'tools', 'take-languages.mjs'), 'export const languageRows = (l) => l.languages;\nexport const render = (rows) => `${JSON.stringify({ languages: rows }, null, 2)}\\n`;\n');
  const officeList = path.join(office, 'packages', 'office-shell', 'src', 'languages.json');
  fs.mkdirSync(path.dirname(officeList), { recursive: true });
  fs.writeFileSync(officeList, `${JSON.stringify({ languages: rows }, null, 2)}\r\n`.replace(/\n/g, '\r\n').replace(/\r\r/g, '\r'));
  const same = await run(r, { office, contract: { languages: { leftCore: [] } }, languagesFile });
  assert.deepEqual(same.faults, [], 'the same list, whatever its line ends');
  fs.writeFileSync(officeList, `${JSON.stringify({ languages: [{ ...rows[0], status: 'reviewed' }] }, null, 2)}\n`);
  const other = await run(r, { office, contract: { languages: { leftCore: [] } }, languagesFile });
  assert.match(other.faults.join(), /languages\.json: Office 2\.26\.0 carries another list than this release's/);
});
