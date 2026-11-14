// lang-ur, lang-ar and lang-hi are kept here as committed, whatever the Rutba
// Office copy the languages build reads: an Office before stage 5 of the
// meaning keys (with its own Urdu, Arabic and Hindi words and GLOSSARY files)
// and one with it (no words but English) leave those three packs byte for
// byte as they are, glossaries included. And a copy with no messages.json and
// no extractor of its own stops with a plain message naming what it lacks.
//
// Each run is in a scratch copy of the languages folder, never this one. The
// Office copies are the ones at hand: the pinned clone (.cache/office or
// languages/work/office-src) and languages/work/office-<sha>/, or one named
// by RUTBA_OFFICE_COPY; with none, the build test is skipped, saying so.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KEPT = ['ur', 'ar', 'hi'];
const MESSAGES = 'packages/office-ui/src/catalogues/messages.json';

/** A scratch copy of what the extractor reads and writes: the languages folder's own files, the shared tools, the licence. */
function scratch() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'languages-kept-'));
  for (const rel of ['tools', 'LICENSE', 'office.json', 'languages/tools', 'languages/packs', 'languages/versions', 'languages/glossaries', 'languages/ids.lock.json', 'languages/ids.json', 'languages/languages.json']) {
    const from = path.join(ROOT, rel);
    if (fs.existsSync(from)) fs.cpSync(from, path.join(dir, rel), { recursive: true });
  }
  return dir;
}

const extract = (dir, office) => spawnSync(process.execPath, [path.join(dir, 'languages/tools/extract-from-office.mjs'), office], { cwd: path.join(dir, 'languages'), encoding: 'utf8', maxBuffer: 1 << 26 });

/** Every file of a pack, by name, as bytes. */
const packFiles = (packs, tag) => {
  const dir = path.join(packs, `lang-${tag}`);
  return Object.fromEntries(fs.readdirSync(dir).sort().map((f) => [f, fs.readFileSync(path.join(dir, f))]));
};

/** The Office copies at hand, each a git clone: { dir, commit, stage5 }. */
function officeCopies() {
  const found = new Map();
  const add = (dir) => {
    if (!dir || !fs.existsSync(path.join(dir, 'package.json'))) return;
    let commit = '';
    try { commit = execFileSync('git', ['-C', dir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); } catch { return; }
    if (!found.has(commit)) found.set(commit, { dir, commit, stage5: !fs.existsSync(path.join(dir, MESSAGES)) });
  };
  add(process.env.RUTBA_OFFICE_COPY);
  const cache = path.join(ROOT, '.cache', 'office');
  if (fs.existsSync(cache)) for (const d of fs.readdirSync(cache)) add(path.join(cache, d));
  const work = path.join(ROOT, 'languages', 'work');
  if (fs.existsSync(work)) for (const d of fs.readdirSync(work)) if (/^office-/.test(d)) add(path.join(work, d));
  return [...found.values()];
}

const copies = officeCopies();
for (const kind of [false, true]) {
  const copy = copies.find((c) => c.stage5 === kind);
  const name = kind ? 'with stage 5' : 'before stage 5';
  test(`a build against an Office ${name} leaves lang-ur, lang-ar and lang-hi as committed, glossaries included`, { skip: copy ? false : `no Office copy ${name} at hand (RUTBA_OFFICE_COPY, .cache/office or languages/work/office-<sha>)` }, () => {
    const dir = scratch();
    try {
      const run = extract(dir, copy.dir);
      assert.equal(run.status, 0, run.stderr);
      const said = JSON.parse(run.stdout);
      assert.deepEqual(said.packs.map((p) => [p.tag, p.kept]), KEPT.map((tag) => [tag, true]));
      for (const tag of KEPT) {
        const after = packFiles(path.join(dir, 'languages/packs'), tag);
        const before = packFiles(path.join(ROOT, 'languages/packs'), tag);
        assert.deepEqual(Object.keys(after), Object.keys(before), `lang-${tag}: the same files`);
        for (const f of Object.keys(before)) assert.ok(after[f].equals(before[f]), `lang-${tag}/${f} at ${copy.commit.slice(0, 8)} is the committed file`);
        // The glossary is this repository's whole glossary for the language, once.
        assert.ok(before['glossary.md'].equals(fs.readFileSync(path.join(ROOT, 'languages/glossaries', `${tag}.md`))), `lang-${tag}/glossary.md is glossaries/${tag}.md`);
      }
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
}

test('an Office copy with no messages.json and no extractor of its own stops with a plain message naming what it lacks', () => {
  const dir = scratch();
  const office = fs.mkdtempSync(path.join(os.tmpdir(), 'languages-kept-office-'));
  try {
    fs.writeFileSync(path.join(office, 'package.json'), JSON.stringify({ version: '2.26.0' }));
    let run = extract(dir, office);
    assert.equal(run.status, 2);
    assert.match(run.stderr, /has no packages\/office-ui\/src\/catalogues\/messages\.json, so its list is read through its own tools\/extract-messages\.mjs, but the copy has no tools\/extract-messages\.mjs/);
    assert.doesNotMatch(run.stderr, /at .*\(|ERR_|Error:/, 'no raw Node error');
    fs.mkdirSync(path.join(office, 'tools'));
    fs.writeFileSync(path.join(office, 'tools/extract-messages.mjs'), 'export const extract = () => [];\n');
    run = extract(dir, office);
    assert.equal(run.status, 2);
    assert.match(run.stderr, /its tools\/extract-messages\.mjs has no extractParts\(\)/);
    fs.writeFileSync(path.join(office, 'tools/extract-messages.mjs'), "import './missing.mjs';\n");
    run = extract(dir, office);
    assert.equal(run.status, 2);
    assert.match(run.stderr, /its tools\/extract-messages\.mjs could not be loaded/);
    for (const tag of KEPT) assert.ok(fs.readFileSync(path.join(dir, 'languages/packs', `lang-${tag}`, 'messages.json')).equals(fs.readFileSync(path.join(ROOT, 'languages/packs', `lang-${tag}`, 'messages.json'))));
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.rmSync(office, { recursive: true, force: true });
  }
});
