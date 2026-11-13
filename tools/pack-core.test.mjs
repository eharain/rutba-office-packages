// node --test tools/pack-core.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { canonical, compareVersions, checkManifest, checkRequires, checkContract, trustFor, PROPRIETARY, LICENCE_FILE, ownLicence, writeLicence, checkLicence } from './pack-core.mjs';

const voice = {
  id: 'voice-kokoro-bf-emma', kind: 'voice', format: 1, version: '2.25.1', revision: 1, name: 'Emma',
  status: 'draft', tags: ['en-GB'], requires: ['speech-en-gb-kokoro'], licence: { spdx: 'Apache-2.0', files: [] },
};

test('canonical sorts keys, drops undefined, keeps array order', () => {
  assert.equal(canonical({ b: 1, a: [2, undefined, 'x'], c: undefined }), '{"a":[2,null,"x"],"b":1}');
});

test('a data pack carries the Office version and a revision from 1', () => {
  assert.deepEqual(checkManifest(voice, { office: '2.25.1' }), []);
  assert.match(checkManifest(voice, { office: '2.25.0' }).join(), /not the Office release 2\.25\.0/);
  assert.match(checkManifest({ ...voice, revision: 0 }, { office: '2.25.1' }).join(), /revision/);
  assert.match(checkManifest({ ...voice, minOffice: null }, { office: '2.25.1' }).join(), /minOffice is not a field/);
});

test('code has no revision, and ids take no dots', () => {
  const engine = { ...voice, id: 'speech-engine', kind: 'engine', revision: undefined, provides: ['speech-engine'] };
  assert.deepEqual(checkManifest(engine, { office: '2.25.1' }), []);
  assert.match(checkManifest({ ...engine, revision: 1 }, { office: '2.25.1' }).join(), /no revision/);
  assert.match(checkManifest({ ...engine, id: 'speech-engine-2.25.1' }, { office: '2.25.1' }).join(), /is not lower case/);
});

test('requires is met by an id or by a provided name', () => {
  const faults = checkRequires([
    { id: 'speech-engine', provides: ['speech-engine'], requires: [] },
    { id: 'speech-kokoro-82m-fp16', provides: ['speech-kokoro-82m'], requires: ['speech-engine'] },
    { id: 'speech-en-gb-kokoro', requires: ['speech-kokoro-82m'] },
    { id: 'lang-fr-ca', requires: ['lang-fr'] },
  ]);
  assert.deepEqual([...faults.keys()], ['lang-fr-ca']);
});

test('order is version, then revision, by number', () => {
  assert.ok(compareVersions({ version: '2.25.1', revision: 2 }, { version: '2.26.0', revision: 1 }) < 0);
  assert.ok(compareVersions({ version: '2.25.10', revision: 1 }, { version: '2.25.9', revision: 3 }) > 0);
  assert.ok(compareVersions({ version: '2.25.1', revision: 3 }, { version: '2.25.1', revision: 2 }) > 0);
});

// The contract's first numbers, as private/office-pack-compatibility-design.md 2.2 gives them.
const contract = {
  contract: 1, office: '2.26.0', envelope: { formats: [1] }, feed: { formats: [1], readiness: 1 },
  kinds: {
    language: { formats: [1, 2], trust: 'packages' }, dictionary: { formats: [1], trust: 'packages' }, font: { formats: [1], trust: 'packages' },
    model: { formats: [1], trust: 'packages' }, pronunciation: { formats: [1], trust: 'packages' }, voice: { formats: [1], trust: 'packages' },
    engine: { formats: [1], trust: 'release', exactVersion: true },
  },
  speech: { api: 1, namespace: 'speech', calls: ['voices', 'say', 'cancel', 'status'], events: [] },
  engineHost: { api: 1, context: ['addons.list', 'addons.find', 'electron.utilityProcess'], platforms: ['win32-x64'], napi: 3 },
};
const engine = {
  id: 'speech-engine', kind: 'engine', format: 1, version: '2.26.0', name: 'Speech engine', status: 'draft', tags: [], requires: [], provides: ['speech-engine'],
  licence: { spdx: 'MIT', files: [] }, ipc: { speech: ['say', 'voices', 'status', 'cancel'] }, events: [],
  speechApi: 1, host: 1, reads: { model: [1], pronunciation: [1], voice: [1] }, platform: 'win32-x64',
};

test('the contract: a data pack of a kind and format Office reads, made for any version', () => {
  assert.deepEqual(checkContract(voice, contract), [], 'a voice made for 2.25.1 loads in 2.26.0');
  assert.match(checkContract({ ...voice, format: 2 }, contract).join(), /format 2 is not one Office 2\.26\.0 reads/);
  assert.match(checkContract({ ...voice, kind: 'theme' }, contract).join(), /reads no theme pack/);
  assert.match(checkContract(voice, { ...contract, contract: 2 }).join(), /contract 2 is not one/);
  assert.equal(trustFor(voice, contract), 'packages');
  assert.equal(trustFor(engine, contract), 'release');
});

test('the contract: the engine is exactly its Office version and speaks its APIs', () => {
  assert.deepEqual(checkContract(engine, contract), []);
  const f = (extra) => checkContract({ ...engine, ...extra }, contract).join(' | ');
  assert.match(f({ version: '2.25.1' }), /exactly its Office version/);
  assert.match(f({ speechApi: 2 }), /speechApi 2/);
  assert.match(f({ host: 2 }), /host 2/);
  assert.match(f({ platform: 'linux-x64' }), /platform linux-x64/);
  assert.match(f({ ipc: { speech: ['say'] } }), /ipc\.speech/);
  assert.match(f({ events: ['speech:status'] }), /events are not/);
  assert.match(f({ reads: { model: [1], voice: [1] } }), /nothing of pronunciation/);
  assert.match(f({ reads: { model: [1], pronunciation: [1], voice: [1], theme: [1] } }), /reads theme/);
  assert.match(checkContract(engine, { ...contract, kinds: { ...contract.kinds, voice: { formats: [1, 2], trust: 'packages' } } }).join(), /voice format 1, not 2/);
});

test('licence: ours carries the LICENSE, others need none, NOASSERTION never', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pack-licence-'));
  try {
    const own = { licence: ownLicence() };
    assert.deepEqual(own.licence, { spdx: PROPRIETARY, files: [LICENCE_FILE] });
    assert.match(checkLicence(dir, own).join(), /not in the pack/);
    writeLicence(dir);
    assert.deepEqual(checkLicence(dir, own), []);
    const engine = { licence: ownLicence({ spdx: 'MIT', files: ['LICENSE-onnxruntime.txt'] }) };
    assert.equal(engine.licence.spdx, PROPRIETARY + ' AND MIT');
    assert.deepEqual(checkLicence(dir, engine), []);
    fs.appendFileSync(path.join(dir, LICENCE_FILE), 'changed');
    assert.match(checkLicence(dir, own).join(), /not the same/);
    assert.deepEqual(checkLicence(dir, { licence: { spdx: 'Apache-2.0', files: ['Apache-2.0.txt'] } }), []);
    assert.match(checkLicence(dir, { licence: { spdx: 'NOASSERTION AND MIT', files: [] } }).join(), /NOASSERTION/);
    assert.match(checkLicence(dir, { licence: { spdx: PROPRIETARY, files: [] } }).join(), /do not list/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
