// The packs built here, checked against what the pinned Office release reads
// (private/office-pack-compatibility-design.md 3.3, step 2).
//
//   node --test tools/contract.test.mjs
//
// It reads, from a clone of the pinned release (never the Office working
// checkout, never the network):
//   packages/office-shell/src/addons-contract.json          the contract (C10)
//   packages/office-shell/src/electron/addons-compat.js     Office's own rule
//   packages/office-shell/test-vectors/addons/               the shared cases (design 3.1)
// It runs every vector through Office's usable() and readiness(), and the
// load cases the contract alone decides (kind, format, version) through
// pack-core too; a vectors shape it does not know fails, never skips. Then
// it checks every pack in the gathered release folder (dist/v<version>/),
// or each kind's dist/v<version>/ when nothing is gathered yet:
//   - against pack-core's checkContract (kind, format, the engine's APIs);
//   - then signed with a key made here and thrown away, through Office's
//     usable() with that key ({ usable, ... } always), which must agree.
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
import { officePin, checkContract, trustFor, CONTRACT_VERSIONS as CONTRACT_VERSIONS_READ } from './pack-core.mjs';
import { signPack } from './sign.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pin = officePin();
const CONTRACT = 'packages/office-shell/src/addons-contract.json';
const COMPAT = 'packages/office-shell/src/electron/addons-compat.js';

function pinnedClone() {
  for (const dir of [path.join(ROOT, '.cache', 'office', pin.tag || pin.commit), path.join(ROOT, 'languages', 'work', 'office-src')]) {
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

test('the pinned contract is for the pinned Office', { skip: why || false }, () => {
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
const engineDir = packs.find((d) => path.basename(d) === 'speech-engine');
const engineManifest = engineDir ? JSON.parse(fs.readFileSync(path.join(engineDir, 'manifest.json'), 'utf8')) : null;

// The shared vectors (design 3.1): Office's own cases, run through Office's
// module and, where the contract alone decides, through pack-core too.
const VECTORS_DIR = clone && path.join(clone, 'packages/office-shell/test-vectors/addons');
const vectorsFile = VECTORS_DIR && path.join(VECTORS_DIR, 'vectors.json');
const vectors = vectorsFile && fs.existsSync(vectorsFile) ? JSON.parse(fs.readFileSync(vectorsFile, 'utf8')) : null;
/** The vectors shapes this runner reads. */
const VECTORS = [1];
/** The refusal codes the contract alone decides, which pack-core's checkContract must give too. */
const CONTRACT_CODES = ['kind', 'format', 'version'];
/** expect compared on the fields it names only. */
const named = (got, expect) => Object.fromEntries(Object.keys(expect).map((k) => [k, got?.[k]]));

test('the shared vectors: this runner knows their shape', { skip: why || (!vectors && `Office ${pin.version} has no test-vectors/addons/vectors.json`) }, () => {
  assert.ok(VECTORS.includes(vectors.vectors), `vectors ${vectors.vectors} is not a shape this runner reads: update the runner, never skip`);
  assert.ok(CONTRACT_VERSIONS_READ.includes(vectors.contract), `the vectors are for contract ${vectors.contract}`);
});

test('the shared vectors: Office\'s usable() and readiness() give what each case expects, and pack-core agrees', { skip: why || (!vectors && 'no vectors') || (!compat && `no ${COMPAT}`) }, () => {
  assert.ok(VECTORS.includes(vectors.vectors));
  const testKey = crypto.createPublicKey(fs.readFileSync(path.join(VECTORS_DIR, 'test-key.pub')));
  const inside = (rel) => {
    const p = path.resolve(VECTORS_DIR, rel);
    if (path.relative(VECTORS_DIR, p).startsWith('..')) throw new Error(`${rel} is outside test-vectors/addons/`);
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  };
  const wrong = [];
  for (const c of vectors.cases) {
    const caseContract = c.contract || contract;
    if (c.type === 'load') {
      const envelope = inside(c.pack);
      const keys = { packages: [], release: [], [c.signedAs]: [testKey] };
      const engine = c.engine ? inside(c.engine).manifest : null;
      const got = compat.usable(envelope, { contract: caseContract, office: c.office, keys, engine });
      if (JSON.stringify(named(got, c.expect)) !== JSON.stringify(c.expect)) wrong.push(`${c.name}: Office gives ${JSON.stringify(got)}`);
      // Where the contract alone decides, pack-core must say the same.
      const ours = checkContract(envelope.manifest || {}, caseContract);
      if (c.expect.usable === true && ours.length) wrong.push(`${c.name}: pack-core refuses it: ${ours.join('; ')}`);
      if (c.expect.usable === false && CONTRACT_CODES.includes(c.expect.code) && !ours.length) wrong.push(`${c.name}: pack-core takes what Office refuses for ${c.expect.code}`);
    } else if (c.type === 'ready') {
      const feed = c.feed ? inside(c.feed) : null;
      const got = compat.readiness({ installed: c.installed, feed, target: c.target, contract: caseContract });
      if (JSON.stringify(named(got, c.expect)) !== JSON.stringify(c.expect)) wrong.push(`${c.name}: Office gives ${JSON.stringify(got)}`);
    } else {
      wrong.push(`${c.name}: case type ${c.type} is not one vectors ${vectors.vectors} has`);
    }
  }
  assert.deepEqual(wrong, []);
});

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
      const theirs = compat.usable(envelope, { contract, office: pin.version, keys, engine: m.kind === 'engine' ? null : engineManifest });
      if (theirs?.usable !== ours) disagree.push(`${m.id}: pack-core says ${ours ? 'usable' : 'not'}, Office says ${JSON.stringify(theirs)}`);
    }
    assert.deepEqual(disagree, []);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
});
