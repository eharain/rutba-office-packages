// The packs built here, checked against what the pinned Office release reads
// (private/office-pack-compatibility-design.md 3.3, step 2).
//
//   node --test tools/contract.test.mjs
//
// It reads, from a clone of the pinned release (never the Office working
// checkout, never the network):
//   packages/office-shell/src/addons-contract.json          the contract (C10)
//   packages/office-shell/src/electron/addons-compat.js     Office's own rule
// and checks every pack in the gathered release folder (dist/v<version>/),
// or each kind's dist/v<version>/ when nothing is gathered yet:
//   - against pack-core's checkContract (kind, format, the engine's APIs);
//   - then signed with a key made here and thrown away, through Office's
//     usable() with that key, which must agree with pack-core.
// The clone is the one tools/carry.mjs makes (.cache/office/<tag>) or the
// languages build's (languages/work/office-src), whichever is at the pinned
// commit. A pinned release with no contract (before C10) is skipped, saying so.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { officePin, checkContract, trustFor } from './pack-core.mjs';
import { signPack } from './sign.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pin = officePin();
const CONTRACT = 'packages/office-shell/src/addons-contract.json';
const COMPAT = 'packages/office-shell/src/electron/addons-compat.js';

function pinnedClone() {
  for (const dir of [path.join(ROOT, '.cache', 'office', pin.tag), path.join(ROOT, 'languages', 'work', 'office-src')]) {
    if (!fs.existsSync(path.join(dir, '.git'))) continue;
    try { if (execFileSync('git', ['-C', dir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim() === pin.commit) return dir; } catch { /* not a clone */ }
  }
  return null;
}

/** Every built pack folder for the pinned version: gathered, or each kind's own. */
function builtPacks() {
  const gathered = path.join(ROOT, 'dist', `v${pin.version}`);
  const roots = fs.existsSync(gathered) ? [gathered] : ['languages', 'speech'].map((k) => path.join(ROOT, k, 'dist', `v${pin.version}`)).filter((d) => fs.existsSync(d));
  return roots.flatMap((r) => fs.readdirSync(r).map((id) => path.join(r, id)).filter((d) => fs.existsSync(path.join(d, 'manifest.json'))));
}

const clone = pinnedClone();
const contractFile = clone && path.join(clone, CONTRACT);
const contract = contractFile && fs.existsSync(contractFile) ? JSON.parse(fs.readFileSync(contractFile, 'utf8')) : null;
const why = !clone ? `no clone of ${pin.tag} at ${pin.commit}: run tools/carry.mjs or the languages build first`
  : !contract ? `Office ${pin.version} has no ${CONTRACT} (it comes with core change C10)` : null;
const packs = builtPacks();

test('the pinned contract is for the pinned Office', { skip: why }, () => {
  assert.equal(contract.office, pin.version);
});

test('every built pack is one the pinned Office reads', { skip: why || (!packs.length && 'nothing is built for this version') }, () => {
  const faults = [];
  for (const dir of packs) {
    const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
    faults.push(...checkContract(m, contract).map((f) => `${m.id}: ${f}`));
  }
  assert.deepEqual(faults, []);
});

const compatFile = clone && path.join(clone, COMPAT);
const compat = compatFile && fs.existsSync(compatFile) ? createRequire(compatFile)(compatFile) : null;

test('Office\'s own usable() agrees, for each pack signed with a key made here and thrown away', { skip: why || (!compat && `Office ${pin.version} has no ${COMPAT}`) || (!packs.length && 'nothing is built for this version') }, () => {
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'rutba-contract-'));
  try {
    const packages = crypto.generateKeyPairSync('ed25519');
    const release = crypto.generateKeyPairSync('ed25519');
    const keys = { packages: [packages.publicKey], release: [release.publicKey] };
    const disagree = [];
    for (const dir of packs) {
      const copy = path.join(work, path.basename(dir));
      fs.cpSync(dir, copy, { recursive: true });
      const m = JSON.parse(fs.readFileSync(path.join(copy, 'manifest.json'), 'utf8'));
      const code = trustFor(m, contract) === 'release';
      const { envelope } = signPack(copy, code ? release.privateKey : packages.privateKey, { codeKey: code });
      const ours = checkContract(m, contract).length === 0;
      const theirs = compat.usable(envelope, { contract, office: pin.version, keys });
      if ((theirs === true || theirs?.usable === true) !== ours) disagree.push(`${m.id}: pack-core says ${ours ? 'usable' : 'not'}, Office says ${JSON.stringify(theirs)}`);
    }
    assert.deepEqual(disagree, []);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
});
