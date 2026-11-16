import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { nextPin, tagPin, remoteTagCommit, carryCommitted, gather } from './carry.mjs';

const made = [];
const tmp = () => { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-carry-')); made.push(d); return d; };
test.after(() => { for (const d of made) fs.rmSync(d, { recursive: true, force: true }); });
const W = { repo: 'https://example.invalid/office.git', tag: 'v2.25.0', commit: 'a'.repeat(40), version: '2.25.0' };
const write = (file, value) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value, null, 2)); };
const manifest = (id, extra = {}) => ({ id, kind: 'voice', format: 1, version: '2.26.0', revision: 1, name: id, status: 'draft', tags: [], requires: [], licence: { spdx: 'Apache-2.0', files: [] }, ...extra });

test('the next pin: a higher version and the full commit, tagged v<version>', () => {
  assert.deepEqual(nextPin(W, { to: '2.26.0', commit: 'b'.repeat(40) }), { pin: { repo: W.repo, tag: 'v2.26.0', commit: 'b'.repeat(40), version: '2.26.0' }, faults: [] });
  assert.ok(nextPin(W, { to: '2.25.0', commit: 'b'.repeat(40) }).faults.some((f) => /not above/.test(f)));
  assert.ok(nextPin(W, { to: '2.24.9', commit: 'b'.repeat(40) }).faults.some((f) => /not above/.test(f)));
  assert.ok(nextPin(W, { to: 'next', commit: 'b'.repeat(40) }).faults.some((f) => /not a Rutba Office version/.test(f)));
  assert.ok(nextPin(W, { to: '2.26.0', commit: 'abc123' }).faults.some((f) => /40-digit/.test(f)));
});

test('the tag is read peeled: an annotated tag gives its commit, not the tag object', () => {
  const git = () => `${'1'.repeat(40)}\trefs/tags/v2.26.0\n${'2'.repeat(40)}\trefs/tags/v2.26.0^{}\n`;
  assert.equal(remoteTagCommit('r', 'v2.26.0', git), '2'.repeat(40));
  assert.equal(remoteTagCommit('r', 'v2.26.0', () => `${'3'.repeat(40)}\trefs/tags/v2.26.0\n`), '3'.repeat(40));
  assert.equal(remoteTagCommit('r', 'v2.26.0', () => ''), null);
});

test('speech sources start their revision again; language manifests are left to the languages build; a dry run changes nothing', () => {
  const root = tmp();
  const de = manifest('lang-de', { kind: 'language', version: '2.25.0', revision: 3 });
  write(path.join(root, 'languages/packs/lang-de/manifest.json'), de);
  write(path.join(root, 'speech/packs/voice-kokoro-bf-emma/source.json'), { id: 'voice-kokoro-bf-emma', revision: 2 });
  write(path.join(root, 'speech/packs/voice-kokoro-af-heart/source.json'), { id: 'voice-kokoro-af-heart' });
  const dry = carryCommitted(root, { dry: true });
  assert.deepEqual(dry.map((c) => path.basename(path.dirname(c.file))), ['voice-kokoro-bf-emma']);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'speech/packs/voice-kokoro-bf-emma/source.json'), 'utf8')).revision, 2, 'dry run wrote nothing');
  carryCommitted(root);
  assert.ok(!('revision' in JSON.parse(fs.readFileSync(path.join(root, 'speech/packs/voice-kokoro-bf-emma/source.json'), 'utf8'))));
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, 'languages/packs/lang-de/manifest.json'), 'utf8')), de, 'the language manifest is untouched');
});

test('gathering: every kind\'s release folder into one, checked; a kind with none is named', () => {
  const root = tmp();
  write(path.join(root, 'speech/dist/v2.26.0/speech-en-kokoro/manifest.json'), manifest('speech-en-kokoro', { kind: 'pronunciation' }));
  write(path.join(root, 'speech/dist/v2.26.0/speech-en-kokoro/cmudict.dict'), 'x');
  write(path.join(root, 'speech/dist/v2.26.0/voice-kokoro-bf-emma/manifest.json'), manifest('voice-kokoro-bf-emma', { requires: ['speech-en-kokoro'] }));
  const g = gather(root, '2.26.0');
  assert.deepEqual(g.faults, []);
  assert.deepEqual(g.ids, ['speech-en-kokoro', 'voice-kokoro-bf-emma']);
  assert.deepEqual(g.empty, ['languages']);
  assert.ok(fs.existsSync(path.join(root, 'dist/v2.26.0/speech-en-kokoro/cmudict.dict')));

  write(path.join(root, 'languages/dist/v2.26.0/voice-kokoro-bf-emma/manifest.json'), manifest('voice-kokoro-bf-emma'));
  write(path.join(root, 'speech/dist/v2.26.0/voice-kokoro-af-heart/manifest.json'), manifest('voice-kokoro-af-heart', { version: '2.25.0', requires: ['speech-xx-kokoro'] }));
  const bad = gather(root, '2.26.0');
  assert.ok(bad.faults.some((f) => /more than one kind/.test(f)));
  assert.ok(bad.faults.some((f) => /af-heart: version 2\.25\.0 is not the Office release 2\.26\.0/.test(f)));
  assert.ok(bad.faults.some((f) => /af-heart: requires speech-xx-kokoro/.test(f)));
});

test('English: the signed lang-en in Office\'s tag is published as it is, in place of the one built here', () => {
  const root = tmp();
  const office = tmp();
  const en = manifest('lang-en', { kind: 'language', status: 'source' });
  write(path.join(root, 'languages/dist/v2.26.0/lang-en/manifest.json'), { ...en, labels: 'rebuilt' });
  write(path.join(root, 'languages/dist/v2.26.0/lang-en/messages.json'), '{"rebuilt":true}');
  const copy = path.join(office, 'apps/desktop/resources/languages/lang-en');
  write(path.join(copy, 'manifest.json'), en);
  write(path.join(copy, 'messages.json'), '{"frozen":true}');
  const sha = (t) => crypto.createHash('sha512').update(t).digest('base64');
  const text = JSON.stringify(en, null, 2);
  const files = { 'manifest.json': { size: text.length, sha512: sha(text) }, 'messages.json': { size: 15, sha512: sha('{"frozen":true}') } };
  const envelope = { format: 'rutba-office-pack', keyId: '0123456789abcdef', manifest: { ...en, files }, signature: 'c2lnbmVk' };
  write(path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'), envelope);
  const g = gather(root, '2.26.0', { office });
  assert.deepEqual(g.faults, []);
  assert.deepEqual(g.presigned, ['lang-en']);
  assert.equal(fs.readFileSync(path.join(root, 'dist/v2.26.0/lang-en/messages.json'), 'utf8'), '{"frozen":true}', 'the copy in Office, not the rebuild');
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, 'dist/v2.26.0/lang-en.pack.json'), 'utf8')), envelope, 'its envelope, unchanged');

  write(path.join(copy, 'messages.json'), '{"changed":1}');
  assert.ok(gather(root, '2.26.0', { office }).faults.some((f) => /lang-en\/messages\.json: Office's copy is not the file/.test(f)));
  write(path.join(copy, 'messages.json'), '{"frozen":true}');
  write(path.join(copy, 'lang-en.pack.json'), envelope);
  assert.ok(gather(root, '2.26.0', { office }).faults.some((f) => /an envelope inside Office's lang-en\/ folder/.test(f)), 'its one place is beside the folder');
  fs.rmSync(path.join(copy, 'lang-en.pack.json'));
  fs.rmSync(path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'));
  assert.ok(gather(root, '2.26.0', { office }).faults.some((f) => /no lang-en\.pack\.json beside its folder/.test(f)));
  assert.deepEqual(gather(root, '2.26.0', { office: tmp() }).presigned, [], 'a tag with no copy: the one built here is used');
});

test('English: an earlier fallback copy in Office\'s tag is reported, never published as this version\'s', () => {
  const root = tmp();
  const office = tmp();
  write(path.join(root, 'languages/dist/v2.26.0/lang-en/manifest.json'), manifest('lang-en', { kind: 'language', status: 'source' }));
  write(path.join(root, 'languages/dist/v2.26.0/lang-en/messages.json'), '{"built":"for 2.26.0"}');
  const old = manifest('lang-en', { kind: 'language', status: 'source', version: '2.25.0', revision: 2 });
  write(path.join(office, 'apps/desktop/resources/languages/lang-en/manifest.json'), old);
  write(path.join(office, 'apps/desktop/resources/languages/lang-en.pack.json'), { format: 'rutba-office-pack', keyId: '0123456789abcdef', manifest: { ...old, files: {} }, signature: 'c2lnbmVk' });
  const g = gather(root, '2.26.0', { office });
  assert.deepEqual(g.faults, [], 'not a fault');
  assert.deepEqual(g.presigned, [], 'not published as it is');
  assert.ok(g.ids.includes('lang-en'));
  assert.equal(fs.readFileSync(path.join(root, 'dist/v2.26.0/lang-en/messages.json'), 'utf8'), '{"built":"for 2.26.0"}', 'the lang-en built for 2.26.0');
  assert.ok(!fs.existsSync(path.join(root, 'dist/v2.26.0/lang-en.pack.json')), 'it is signed on the release PC with the rest');
  assert.match(g.notes.join(), /carries 2\.25\.0 revision 2, the earlier fallback/);
});

test('before the tag: the gated commit with an empty tag, and the tag set only when it names that commit', () => {
  const { pin } = nextPin(W, { to: '2.26.0', commit: 'b'.repeat(40), beforeTag: true });
  assert.equal(pin.tag, '');
  assert.deepEqual(tagPin(pin, 'b'.repeat(40)), { pin: { ...pin, tag: 'v2.26.0' }, faults: [] });
  assert.match(tagPin(pin, 'c'.repeat(40)).faults.join(), /built from another commit, so carry again/);
  assert.match(tagPin(pin, null).faults.join(), /not there yet/);
  assert.match(tagPin(W, W.commit).faults.join(), /already has its tag/);
});
