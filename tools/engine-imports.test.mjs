// The speech engine's build refuses an engine whose bare imports do not all
// resolve inside its own folder (speech/tools/build-engine.mjs,
// bareImportFaults): Office holds an engine's imports to its folder at run
// time, so one that would climb out is found before release.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { bareImportFaults } from '../speech/tools/build-engine.mjs';

test('an engine imports only built-ins and what it carries, never electron or a package above it', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-engine-imports-'));
  try {
    const pkg = (at, name) => {
      fs.mkdirSync(path.join(at, 'node_modules', name), { recursive: true });
      fs.writeFileSync(path.join(at, 'node_modules', name, 'package.json'), JSON.stringify({ name }));
    };
    pkg(tmp, 'only-above');
    const dir = path.join(tmp, 'speech-engine');
    pkg(dir, 'its-own');
    pkg(dir, '@scope/carried');
    fs.writeFileSync(path.join(dir, 'main.mjs'), [
      "import fs from 'node:fs';",
      "import path from 'path';",
      "import { a } from 'its-own/sub.js';",
      "export { b } from '@scope/carried';",
      "import { createRequire } from 'node:module';",
      "const ort = createRequire(path.join(dir, 'package.json'))('its-own');",
      "const e = await import('electron');",
      "try { require('supports-color'); } catch {}",
      "import x from 'only-above';",
      "import y from './beside.mjs';",
    ].join('\n'));
    // A package's own file may import what that package carries below it.
    pkg(path.join(dir, 'node_modules', 'its-own'), 'nested');
    fs.writeFileSync(path.join(dir, 'node_modules', 'its-own', 'index.js'), "require('nested'); require('its-own');");
    assert.deepEqual(bareImportFaults(dir).sort(), [
      'main.mjs imports electron, which the engine does not carry',
      'main.mjs imports only-above, which the engine does not carry',
      'main.mjs imports supports-color, which the engine does not carry',
    ]);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
