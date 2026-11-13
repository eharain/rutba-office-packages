import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { nextPin, remoteTagCommit, carryCommitted, gather } from './carry.mjs';

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

test('committed packs move to the new version at revision 1, and a dry run changes nothing', () => {
  const root = tmp();
  write(path.join(root, 'languages/packs/lang-de/manifest.json'), manifest('lang-de', { kind: 'language', version: '2.25.0', revision: 3 }));
  write(path.join(root, 'languages/packs/lang-fr/manifest.json'), manifest('lang-fr', { kind: 'language', version: '2.24.0' }));
  write(path.join(root, 'speech/packs/voice-kokoro-bf-emma/source.json'), { id: 'voice-kokoro-bf-emma', revision: 2 });
  write(path.join(root, 'speech/packs/voice-kokoro-af-heart/source.json'), { id: 'voice-kokoro-af-heart' });
  const dry = carryCommitted(root, '2.25.0', '2.26.0', { dry: true });
  assert.deepEqual(dry.map((c) => path.basename(path.dirname(c.file))), ['lang-de', 'voice-kokoro-bf-emma']);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'languages/packs/lang-de/manifest.json'), 'utf8')).version, '2.25.0', 'dry run wrote nothing');
  carryCommitted(root, '2.25.0', '2.26.0');
  const de = JSON.parse(fs.readFileSync(path.join(root, 'languages/packs/lang-de/manifest.json'), 'utf8'));
  assert.deepEqual([de.version, de.revision], ['2.26.0', 1]);
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, 'languages/packs/lang-fr/manifest.json'), 'utf8')).version, '2.24.0', 'a pack not at W is left alone');
  assert.ok(!('revision' in JSON.parse(fs.readFileSync(path.join(root, 'speech/packs/voice-kokoro-bf-emma/source.json'), 'utf8'))));
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
