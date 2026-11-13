// Carries the repository from one Rutba Office release to the next in one
// command: packages vW to vX (private/office-pack-compatibility-design.md 4.2).
//
//   node tools/carry.mjs --to <X> --commit <X's final commit> [--dry-run] [--no-remote] [--no-build]
//   node tools/carry.mjs --to <X> --commit <X's gated commit> --before-tag   before X is tagged
//   node tools/carry.mjs --set-tag                                            once Office's vX exists
//
// Before X is tagged (design 3.4), --before-tag pins X's gated commit with an
// empty tag and builds from that commit, which must be reachable in Office's
// public repository. The release is published only after --set-tag has found
// that vX names the same commit; if it names another, carry again from vX.
//
// What it does, in order:
//   1. checks X is above the pinned release and, unless --no-remote, that the
//      tag vX in Office's repository points at the commit given: packages for
//      X are built only from X's final commit;
//   2. moves the pin (office.json) to vX;
//   3. clears the `revision` of speech sources (a revision counts changes at
//      one version, so at X it starts again from 1). Language manifests are
//      left to the languages build, which stamps X at revision 1;
//   4. unless --no-build, clones vX into .cache/office/vX (checked against
//      the commit), runs the languages' `npm test` against that clone (it
//      regenerates the packs made from Office, gives X's new labels their ids
//      and reports translations made from older English as stale; carry
//      fails if it fails), then builds the speech packs and engine for X;
//   5. gathers each kind's release folder (<kind>/dist/vX/<id>/) into one,
//      dist/vX/, and checks every manifest there against the core and every
//      `requires` against the others. English is the one exception: Office
//      keeps a byte-for-byte copy of the released lang-en at
//      resources/languages/lang-en/ (owner, D-2026-11-13-11; core row C15),
//      built from the frozen candidate and signed before Office's record
//      run. When Office's tag has that copy, vX publishes exactly it,
//      envelope and all, in place of a rebuild, and it is never signed again.
//
// It never signs and needs no key. What it prints last is the release PC's
// part: sign the data packs with the packages key, the engine with Office's
// release key (through Office's release tooling), then make the feed with the
// last published feed as --previous, so unchanged files keep their earlier
// URLs (tools/feed.mjs).
//
// --dry-run says what would change and changes nothing.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { OFFICE_FILE, officePin, compareVersions, checkManifest, checkRequires } from './pack-core.mjs';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
/** The folders whose dist/v<version>/ holds that kind's packs for release. */
export const KIND_ROOTS = ['languages', 'speech'];
const VERSION = /^\d+\.\d+\.\d+$/;
const SHA = /^[0-9a-f]{40}$/;

/**
 * The new pin, or the reasons it cannot be. Before X is tagged (design 3.4)
 * the pin holds X's gated commit and an empty tag, and --set-tag fills the
 * tag once Office's vX names that same commit.
 */
export function nextPin(from, { to, commit, beforeTag = false }) {
  const faults = [];
  if (!VERSION.test(String(to))) faults.push(`--to ${to} is not a Rutba Office version`);
  else if (compareVersions({ version: to }, { version: from.version }) <= 0) faults.push(`${to} is not above the pinned ${from.version}`);
  if (!SHA.test(String(commit))) faults.push('--commit is the full 40-digit commit of the release tag');
  return { pin: { repo: from.repo, tag: beforeTag ? '' : `v${to}`, commit, version: to }, faults };
}

/** The pin with its tag filled, once the tag names the pinned commit; or why not. */
export function tagPin(pin, tagCommit) {
  if (pin.tag) return { pin, faults: [`the pin already has its tag ${pin.tag}`] };
  const tag = `v${pin.version}`;
  if (tagCommit !== pin.commit) return { pin, faults: [`${tag} is ${tagCommit || 'not there yet'}, not the pinned ${pin.commit}: the packages were built from another commit, so carry again from ${tag}`] };
  return { pin: { ...pin, tag }, faults: [] };
}

/** The commit a tag points at in a remote repository, peeled, or null. */
export function remoteTagCommit(repo, tag, git = (args) => execFileSync('git', args, { encoding: 'utf8' })) {
  const out = git(['ls-remote', repo, `refs/tags/${tag}`, `refs/tags/${tag}^{}`]);
  const rows = out.trim().split('\n').filter(Boolean).map((l) => l.split(/\s+/));
  const peeled = rows.find((r) => r[1].endsWith('^{}'));
  return (peeled || rows[0] || [null])[0];
}

/**
 * The committed speech sources that carry a revision, which starts again at
 * the new version. Returns [{ file, before, after }] and, unless dry, writes
 * them. Language manifests are the languages build's to stamp.
 */
export function carryCommitted(root, { dry = false } = {}) {
  const changes = [];
  const speech = path.join(root, 'speech', 'packs');
  if (fs.existsSync(speech)) {
    for (const id of fs.readdirSync(speech).sort()) {
      const file = path.join(speech, id, 'source.json');
      if (!fs.existsSync(file)) continue;
      const text = fs.readFileSync(file, 'utf8');
      const s = JSON.parse(text);
      if (s.revision === undefined) continue;
      delete s.revision;
      changes.push({ file, before: text, after: `${JSON.stringify(s, null, 2)}\n` });
    }
  }
  if (!dry) for (const c of changes) fs.writeFileSync(c.file, c.after);
  return changes;
}

/** A clean clone of the pinned Office release, checked against its commit. */
export function officeClone(root, pin) {
  const dir = path.join(root, '.cache', 'office', pin.tag || pin.commit);
  const git = (...a) => execFileSync('git', a, { encoding: 'utf8' }).trim();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(path.dirname(dir), { recursive: true });
    if (pin.tag) git('clone', '--quiet', '--depth', '1', '--branch', pin.tag, pin.repo, dir);
    else {
      // Not tagged yet: the gated commit, which must be reachable in the public repository.
      git('init', '--quiet', dir);
      git('-C', dir, 'fetch', '--quiet', '--depth', '1', pin.repo, pin.commit);
      git('-C', dir, 'checkout', '--quiet', 'FETCH_HEAD');
    }
  }
  const head = git('-C', dir, 'rev-parse', 'HEAD');
  if (head !== pin.commit) throw new Error(`${dir} is at ${head}, not ${pin.tag}'s ${pin.commit}`);
  return dir;
}

/** Where Office keeps its copy of the released English pack (C15). */
export const OFFICE_ENGLISH = ['resources', 'languages'];
const sha512 = (file) => crypto.createHash('sha512').update(fs.readFileSync(file)).digest('base64');

/**
 * The signed packs Office's tag carries (today only lang-en), checked: the
 * envelope beside the folder (resources/languages/lang-en.pack.json, its one
 * place, so a misplaced copy fails), and every file it lists present with
 * its size and SHA-512. The signature itself is checked by the feed step and
 * the post-release check, with the public keys.
 *
 * Only a copy at this version is published as it is. A copy at an earlier
 * version is the fallback Office carried because lang-en X was not ready
 * before its record run (design 1.4): it is reported, not published, and the
 * lang-en the languages build made for X is kept.
 * Returns { packs: [{ id, dir, envelope, envelopeFile }], faults, notes }.
 */
export function officeCopies(clone, version) {
  const packs = [];
  const faults = [];
  const notes = [];
  if (!clone) return { packs, faults, notes };
  const id = 'lang-en';
  const dir = path.join(clone, ...OFFICE_ENGLISH, id);
  const envelopeFile = path.join(clone, ...OFFICE_ENGLISH, `${id}.pack.json`);
  if (!fs.existsSync(dir) && !fs.existsSync(envelopeFile)) return { packs, faults, notes };
  if (!fs.existsSync(dir)) return { packs, faults: [`${id}: Office carries ${id}.pack.json but no ${id}/ folder beside it`], notes };
  if (!fs.existsSync(envelopeFile)) return { packs, faults: [`${id}: Office's copy has no ${id}.pack.json beside its folder`], notes };
  if (fs.existsSync(path.join(dir, `${id}.pack.json`))) faults.push(`${id}: an envelope inside Office's ${id}/ folder; its one place is beside it`);
  const envelope = JSON.parse(fs.readFileSync(envelopeFile, 'utf8'));
  const m = envelope.manifest || {};
  if (m.id !== id) return { packs, faults: [...faults, `${id}: Office's envelope is for ${m.id}`], notes };
  if (m.version !== version) {
    notes.push(`${id}: Office's tag carries ${m.version} revision ${m.revision}, the earlier fallback; the ${id} built here for ${version} is kept`);
    return { packs, faults, notes };
  }
  for (const [name, f] of Object.entries(m.files || {})) {
    const local = path.join(dir, ...name.split('/'));
    if (!fs.existsSync(local) || fs.statSync(local).size !== f.size || sha512(local) !== f.sha512) faults.push(`${id}/${name}: Office's copy is not the file its envelope lists`);
  }
  packs.push({ id, dir, envelope, envelopeFile });
  return { packs, faults, notes };
}

/**
 * Gathers every kind's release folder into dist/v<version>/ and checks it.
 *   office: a clone of Office's tag; a signed pack it carries (lang-en) is
 *   published exactly as it is, in place of the one built here.
 * Returns { out, ids, faults, empty, presigned }: `empty` lists the kinds
 * that gave none, `presigned` the packs already signed.
 */
export function gather(root, version, { office = null } = {}) {
  const out = path.join(root, 'dist', `v${version}`);
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const manifests = [];
  const copies = officeCopies(office, version);
  const faults = [...copies.faults];
  const empty = [];
  const presigned = [];
  for (const c of copies.packs) {
    fs.cpSync(c.dir, path.join(out, c.id), { recursive: true });
    fs.copyFileSync(c.envelopeFile, path.join(out, `${c.id}.pack.json`));
    faults.push(...checkManifest(c.envelope.manifest, { office: version }).map((f) => `${c.id}: ${f}`));
    manifests.push(c.envelope.manifest);
    presigned.push(c.id);
  }
  for (const kind of KIND_ROOTS) {
    const from = path.join(root, kind, 'dist', `v${version}`);
    const ids = fs.existsSync(from) ? fs.readdirSync(from).filter((d) => fs.existsSync(path.join(from, d, 'manifest.json'))).sort() : [];
    if (!ids.length) { empty.push(kind); continue; }
    for (const id of ids) {
      if (presigned.includes(id)) continue;
      if (manifests.some((m) => m.id === id)) { faults.push(`${id}: made by more than one kind`); continue; }
      fs.cpSync(path.join(from, id), path.join(out, id), { recursive: true });
      const m = JSON.parse(fs.readFileSync(path.join(out, id, 'manifest.json'), 'utf8'));
      if (m.id !== id) faults.push(`${id}: its manifest says ${m.id}`);
      faults.push(...checkManifest(m, { office: version }).map((f) => `${id}: ${f}`));
      manifests.push(m);
    }
  }
  for (const [id, f] of checkRequires(manifests)) faults.push(...f.map((x) => `${id}: ${x}`));
  return { out, ids: manifests.map((m) => m.id), faults, empty, presigned, notes: copies.notes };
}

function main(args) {
  const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
  const dry = args.includes('--dry-run');
  const from = officePin();
  if (args.includes('--set-tag')) {
    const t = tagPin(from, remoteTagCommit(from.repo, `v${from.version}`));
    if (t.faults.length) { for (const f of t.faults) console.error(f); return 1; }
    if (!dry) fs.writeFileSync(OFFICE_FILE, `${JSON.stringify(t.pin, null, 2)}\n`);
    console.log(`${dry ? 'would set' : 'set'} the pin's tag to ${t.pin.tag}: ${t.pin.commit}, as built`);
    return 0;
  }
  const beforeTag = args.includes('--before-tag');
  const { pin, faults } = nextPin(from, { to: opt('--to'), commit: opt('--commit'), beforeTag });
  if (faults.length) { for (const f of faults) console.error(f); return 2; }
  if (beforeTag) console.log(`before the tag: building from ${pin.commit}; publish only after --set-tag finds v${pin.version} at that commit`);
  else if (args.includes('--no-remote')) console.log(`not checked: that ${pin.tag} is ${pin.commit} in ${pin.repo}`);
  else {
    const at = remoteTagCommit(pin.repo, pin.tag);
    if (at !== pin.commit) { console.error(`${pin.tag} in ${pin.repo} is ${at || 'not there'}, not ${pin.commit}: carry only from X's final commit`); return 1; }
  }
  const changes = carryCommitted(ROOT, { dry });
  console.log(`${dry ? 'would move' : 'moved'} the pin ${from.tag} to ${pin.tag}, and clear the revision of ${changes.length} speech sources:`);
  for (const c of changes) console.log(`  ${path.relative(ROOT, c.file)}`);
  if (dry) return 0;
  fs.writeFileSync(OFFICE_FILE, `${JSON.stringify(pin, null, 2)}\n`);
  if (args.includes('--no-build')) return 0;
  const node = (cwd, ...a) => execFileSync(process.execPath, a, { cwd, stdio: 'inherit' });
  const clone = officeClone(ROOT, pin);
  // The languages' own test script, so what it runs stays theirs to change.
  execSync(`npm test -- "${clone}"`, { cwd: path.join(ROOT, 'languages'), stdio: 'inherit' });
  node(path.join(ROOT, 'speech'), 'tools/fetch-sources.mjs');
  node(path.join(ROOT, 'speech'), 'tools/build-packs.mjs');
  node(path.join(ROOT, 'speech'), 'tools/build-engine.mjs');
  const g = gather(ROOT, pin.version, { office: clone });
  for (const n of g.notes) console.log(n);
  for (const k of g.empty) console.log(`${k}/dist/v${pin.version}/ holds no packs: nothing of that kind is in this release`);
  if (g.faults.length) { for (const f of g.faults) console.error(f); return 1; }
  const rel = path.relative(ROOT, g.out);
  console.log(`\n${g.ids.length} packs for Office ${pin.version} in ${rel}. On the release PC, with no key in this repository:`);
  const toSign = g.ids.filter((id) => id !== 'speech-engine' && !g.presigned.includes(id));
  if (g.presigned.length) console.log(`  ${g.presigned.join(', ')}: already signed, published as Office ${pin.tag} carries it; never signed again`);
  else console.log(`  Office ${pin.tag} carries no copy of lang-en (core row C15), so any lang-en here is the one built from the clone`);
  if (toSign.length) console.log(`  node tools/sign.mjs --key <packages key> ${toSign.map((id) => `${rel}/${id}`).join(' ')}`);
  console.log(`  sign ${rel}/speech-engine with Office's release key through Office's release tooling`);
  console.log(`  node tools/feed.mjs ${rel} --previous <the last feed published> [--complete]`);
  console.log(`  node tools/feed.mjs --sign ${rel}/feed.json --key <packages feed key>`);
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exit(main(process.argv.slice(2)));
