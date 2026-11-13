import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { signPack, verifyEnvelope, keyIdOf, makeKey } from './sign.mjs';
import { buildFeed, signFeed, verifyFeed, acceptFeed, releaseUrl, assetName } from './feed.mjs';
import { canonical } from './pack-core.mjs';

const made = [];
const tmp = () => { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-packs-')); made.push(d); return d; };
test.after(() => { for (const d of made) fs.rmSync(d, { recursive: true, force: true }); });
const keys = () => crypto.generateKeyPairSync('ed25519');

function pack(dist, id, extra = {}, files = { 'data.txt': 'hello' }) {
  const dir = path.join(dist, id);
  fs.mkdirSync(dir, { recursive: true });
  for (const [n, t] of Object.entries(files)) fs.writeFileSync(path.join(dir, n), t);
  const manifest = { id, kind: 'voice', format: 1, version: '2.25.1', revision: 1, name: id, status: 'draft', tags: ['en'], requires: [], licence: { spdx: 'Apache-2.0', files: [] }, ...extra };
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest));
  return dir;
}

test('an envelope as Office reads it: format, key id, signature over canonical(manifest)', () => {
  const dist = tmp();
  const { publicKey, privateKey } = keys();
  const { envelope } = signPack(pack(dist, 'voice-kokoro-bf-emma'), privateKey);
  assert.equal(envelope.format, 'rutba-office-pack');
  assert.equal(envelope.keyId, keyIdOf(publicKey));
  assert.equal(envelope.manifest.files['data.txt'].size, 5);
  assert.equal(envelope.manifest.files['data.txt'].sha512, crypto.createHash('sha512').update('hello').digest('base64'));
  assert.ok(crypto.verify(null, Buffer.from(canonical(envelope.manifest)), publicKey, Buffer.from(envelope.signature, 'base64')));
  assert.ok(verifyEnvelope(envelope, [publicKey]));
  assert.ok(!verifyEnvelope({ ...envelope, manifest: { ...envelope.manifest, kind: 'engine' } }, [publicKey]));
  assert.ok(!verifyEnvelope(envelope, [keys().publicKey]));
});

test('a data key never signs the engine, and the release key never signs data', () => {
  const dist = tmp();
  const { privateKey } = keys();
  assert.throws(() => signPack(pack(dist, 'speech-engine', { kind: 'engine', revision: undefined }), privateKey), /release key/);
  assert.throws(() => signPack(pack(dist, 'voice-kokoro-af-heart'), privateKey, { codeKey: true }), /packages key/);
});

test('the feed: URLs in this release, unchanged files kept at their earlier URL, sequence rising', () => {
  const { publicKey, privateKey } = keys();
  const d1 = tmp();
  signPack(pack(d1, 'voice-kokoro-bf-emma', { version: '2.25.0' }), privateKey);
  const one = buildFeed(d1, { version: '2.25.0', publicKeys: [publicKey] });
  assert.deepEqual(one.faults, []);
  assert.equal(one.feed.sequence, 1);
  assert.equal(one.feed.packs[0].files['data.txt'].url, releaseUrl('2.25.0') + assetName('voice-kokoro-bf-emma', 'data.txt'));

  const d2 = tmp();
  signPack(pack(d2, 'voice-kokoro-bf-emma'), privateKey);
  const two = buildFeed(d2, { version: '2.25.1', previous: one.feed, publicKeys: [publicKey] });
  assert.deepEqual(two.faults, []);
  assert.equal(two.feed.sequence, 2);
  assert.equal(two.feed.packs[0].files['data.txt'].url, one.feed.packs[0].files['data.txt'].url, 'the unchanged file is not published again');
  assert.ok(!two.assets.some((a) => a.asset.endsWith('data.txt')));
  assert.ok(two.assets.some((a) => a.asset === 'voice-kokoro-bf-emma.pack.json'));
});

test('a language entry carries what Office shows before it is added: tag, direction, review and coverage', () => {
  const { publicKey, privateKey } = keys();
  const d = tmp();
  const lang = { kind: 'language', format: 2, version: '2.25.0', tag: 'ur', script: 'Arab', direction: 'rtl', review: 'machine draft', coverage: { labels: 10, short: 9, medium: 10, complete: 8 }, nativeName: 'اردو' };
  signPack(pack(d, 'lang-ur', lang), privateKey);
  signPack(pack(d, 'voice-kokoro-bf-emma', { version: '2.25.0', direction: 'rtl' }), privateKey);
  const { feed, faults } = buildFeed(d, { version: '2.25.0', publicKeys: [publicKey] });
  assert.deepEqual(faults, []);
  const ur = feed.packs.find((p) => p.id === 'lang-ur');
  assert.equal(ur.tag, 'ur');
  assert.equal(ur.direction, 'rtl');
  assert.equal(ur.review, 'machine draft');
  assert.deepEqual(ur.coverage, lang.coverage);
  assert.ok(!('variantOf' in ur), 'only the fields the manifest has');
  assert.ok(!('direction' in feed.packs.find((p) => p.id === 'voice-kokoro-bf-emma')), 'other kinds carry none');
});

test('the feed says which languages its Office no longer carries built in, for the update gate of an older Office', () => {
  const { publicKey, privateKey } = keys();
  const d = tmp();
  signPack(pack(d, 'lang-ur', { kind: 'language', format: 2, version: '2.25.0', tag: 'ur' }), privateKey);
  assert.deepEqual(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey] }).feed.leftCore, [], 'none, when none left');
  assert.deepEqual(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['ur', 'ar', 'ur'] }).feed.leftCore, ['ar', 'ur']);
  assert.ok(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['../x'] }).faults.some((f) => /leftCore: \.\.\/x is not a language tag/.test(f)));
  // Complete only when every language it names there has its pack in the release.
  assert.deepEqual(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['ur'], state: 'complete' }).faults, []);
  assert.ok(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['ur', 'ar'], state: 'complete' }).faults.some((f) => /leftCore: ar has no lang-ar in this release, so the feed cannot be complete/.test(f)));
  // Retired instead: Office would take it, but a language that leaves the core comes as its pack (verify-release).
  assert.ok(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['ur', 'ar'], state: 'complete', retired: [{ id: 'lang-ar', reason: 'Not made for this version.' }] }).faults.some((f) => /leftCore: ar has no lang-ar in this release \(retiring it is not enough/.test(f)));
  assert.deepEqual(buildFeed(d, { version: '2.25.0', publicKeys: [publicKey], leftCore: ['ur', 'ar'] }).faults, [], 'a partial feed may name one still to come');
});

test('the feed refuses a wrong version, a broken signature, a missing need, and a lower revision', () => {
  const { publicKey, privateKey } = keys();
  const d = tmp();
  signPack(pack(d, 'voice-kokoro-af-heart', { requires: ['speech-en-kokoro'] }), privateKey);
  const { faults } = buildFeed(d, { version: '2.25.2', publicKeys: [keys().publicKey] });
  assert.ok(faults.some((f) => /not the Office release 2\.25\.2/.test(f)));
  assert.ok(faults.some((f) => /signature does not hold/.test(f)));
  assert.ok(faults.some((f) => /requires speech-en-kokoro/.test(f)));
  const d2 = tmp();
  signPack(pack(d2, 'voice-kokoro-af-heart', { revision: 1 }), privateKey);
  const prev = { sequence: 4, packs: [{ id: 'voice-kokoro-af-heart', version: '2.25.1', revision: 2, files: {} }] };
  assert.ok(buildFeed(d2, { version: '2.25.1', previous: prev, publicKeys: [publicKey] }).faults.some((f) => /lower than the last feed/.test(f)));
});

test('the feed signature, and Office refusing an old feed served again', () => {
  const { publicKey, privateKey } = keys();
  const feed = { format: 1, readiness: 1, office: '2.25.1', sequence: 7, state: 'complete', retired: [], date: 'x', packs: [] };
  const sig = signFeed(feed, privateKey);
  assert.ok(verifyFeed(feed, sig, [publicKey]));
  assert.ok(!verifyFeed({ ...feed, sequence: 8 }, sig, [publicKey]));
  assert.ok(!verifyFeed({ ...feed, state: 'partial' }, sig, [publicKey]), 'state is signed');
  // A pack-style signature over the same object does not verify as a feed.
  const packStyle = { signature: crypto.sign(null, Buffer.from(canonical(feed)), privateKey).toString('base64') };
  assert.ok(!verifyFeed(feed, packStyle, [publicKey]));
  assert.deepEqual(acceptFeed(feed, { seen: { '2.25.1': 6 }, office: '2.25.1' }), { ok: true, seen: { '2.25.1': 7 } });
  assert.equal(acceptFeed(feed, { seen: { '2.25.1': 7 }, office: '2.25.1' }).ok, false);
  assert.equal(acceptFeed(feed, { office: '2.25.0' }).ok, false, 'read for the version it names, not another');
  assert.equal(acceptFeed({ ...feed, state: undefined }, { office: '2.25.1' }).ok, false);
});

test('highest sequence per Office version: the target feed read for the gate never makes a later withdrawal at home look old', () => {
  const target = { format: 1, readiness: 1, office: '2.26.0', sequence: 12, state: 'partial', retired: [], packs: [] };
  const home = { format: 1, readiness: 1, office: '2.25.1', sequence: 11, state: 'complete', retired: [], packs: [] };
  let seen = { '2.25.1': 9 };
  const a = acceptFeed(target, { office: '2.26.0', seen });
  assert.equal(a.ok, true);
  seen = a.seen;
  const b = acceptFeed(home, { office: '2.25.1', seen });
  assert.equal(b.ok, true, 'numbered before the target feed, still above the highest seen for home');
  assert.deepEqual(b.seen, { '2.25.1': 11, '2.26.0': 12 });
});

test('the feed says partial or complete, and lists retired packs with their reasons', () => {
  const { publicKey, privateKey } = keys();
  const d = tmp();
  signPack(pack(d, 'voice-kokoro-bf-emma', { version: '2.25.0' }), privateKey);
  const partial = buildFeed(d, { version: '2.25.0', publicKeys: [publicKey] });
  assert.equal(partial.feed.state, 'partial', 'partial unless declared complete');
  assert.deepEqual(partial.feed.retired, []);
  assert.equal(partial.feed.readiness, 1);
  const done = buildFeed(d, { version: '2.25.0', state: 'complete', retired: [{ id: 'voice-kokoro-bf-old', reason: ' taken out for its licence ', replacedBy: 'voice-kokoro-bf-emma' }], publicKeys: [publicKey] });
  assert.deepEqual(done.faults, []);
  assert.deepEqual(done.feed.retired, [{ id: 'voice-kokoro-bf-old', reason: 'taken out for its licence', replacedBy: 'voice-kokoro-bf-emma' }]);
  const bad = buildFeed(d, { version: '2.25.0', state: 'done', retired: [{ id: 'voice-kokoro-bf-emma', reason: '' }, { id: 'x-y', reason: 'r', replacedBy: 'nothing-here' }], publicKeys: [publicKey] });
  assert.ok(bad.faults.some((f) => /state done/.test(f)));
  assert.ok(bad.faults.some((f) => /bf-emma: give the reason/.test(f)));
  assert.ok(bad.faults.some((f) => /also lists it; withdraw it instead/.test(f)));
  assert.ok(bad.faults.some((f) => /replacement nothing-here/.test(f)));
});

test('a key is never made inside the repository', () => {
  assert.throws(() => makeKey(path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), 'keys')), /never written inside/);
  const id = makeKey(tmp());
  assert.match(id, /^[0-9a-f]{16}$/);
});

test('the feed writes each pack whole beside it, the same bytes every time, and lists it (L5)', async () => {
  const { privateKey } = keys();
  const { readZip } = await import('./zip.mjs');
  const dist = tmp();
  fs.mkdirSync(path.join(dist, 'voice-kokoro-bf-emma', 'deep'), { recursive: true });
  signPack(pack(dist, 'voice-kokoro-bf-emma', {}, { 'data.txt': 'hello', 'deep/more.bin': Buffer.alloc(4000, 7) }), privateKey);
  const one = buildFeed(dist, { version: '2.25.1', zips: true });
  assert.deepEqual(one.faults, []);
  const p = one.feed.packs[0];
  const file = path.join(dist, 'voice-kokoro-bf-emma-2.25.1-r1.zip');
  assert.equal(p.zip.url, `${releaseUrl('2.25.1')}voice-kokoro-bf-emma-2.25.1-r1.zip`);
  assert.equal(p.zip.size, fs.statSync(file).size);
  assert.ok(one.assets.some((a) => a.asset === 'voice-kokoro-bf-emma-2.25.1-r1.zip' && a.local === file));
  const inside = readZip(fs.readFileSync(file));
  assert.deepEqual(inside.map((e) => e.name), ['voice-kokoro-bf-emma.pack.json', 'voice-kokoro-bf-emma/data.txt', 'voice-kokoro-bf-emma/deep/more.bin', 'voice-kokoro-bf-emma/manifest.json']);
  assert.ok(inside[0].data.equals(fs.readFileSync(path.join(dist, 'voice-kokoro-bf-emma.pack.json'))));
  assert.ok(inside[2].data.equals(Buffer.alloc(4000, 7)));
  const first = fs.readFileSync(file);
  buildFeed(dist, { version: '2.25.1', zips: true });
  assert.ok(fs.readFileSync(file).equals(first), 'made again, the same bytes');
  // Without zips (a check run), nothing is written and nothing listed.
  const plain = tmp();
  signPack(pack(plain, 'voice-kokoro-bf-emma'), privateKey);
  const two = buildFeed(plain, { version: '2.25.1' });
  assert.equal(two.feed.packs[0].zip, undefined);
  assert.ok(!fs.readdirSync(plain).some((f) => f.endsWith('.zip')));
});
