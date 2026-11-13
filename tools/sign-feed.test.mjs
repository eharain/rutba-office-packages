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
  const feed = { format: 1, office: '2.25.1', sequence: 7, date: 'x', packs: [] };
  const sig = signFeed(feed, privateKey);
  assert.ok(verifyFeed(feed, sig, [publicKey]));
  assert.ok(!verifyFeed({ ...feed, sequence: 8 }, sig, [publicKey]));
  // A pack-style signature over the same object does not verify as a feed.
  const packStyle = { signature: crypto.sign(null, Buffer.from(canonical(feed)), privateKey).toString('base64') };
  assert.ok(!verifyFeed(feed, packStyle, [publicKey]));
  assert.deepEqual(acceptFeed(feed, { highestSeen: 6, office: '2.25.1' }), { ok: true });
  assert.equal(acceptFeed(feed, { highestSeen: 7, office: '2.25.1' }).ok, false);
  assert.equal(acceptFeed(feed, { highestSeen: 0, office: '2.25.0' }).ok, false);
});

test('a key is never made inside the repository', () => {
  assert.throws(() => makeKey(path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), 'keys')), /never written inside/);
  const id = makeKey(tmp());
  assert.match(id, /^[0-9a-f]{16}$/);
});
