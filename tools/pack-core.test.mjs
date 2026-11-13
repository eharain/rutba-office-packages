// node --test tools/pack-core.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { canonical, compareVersions, checkManifest, checkRequires } from './pack-core.mjs';

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
