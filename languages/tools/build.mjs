// Makes every file that comes from the Rutba Office code, then checks them
// all. From a fresh clone this one command rebuilds and proves the lot:
//
//   node tools/build.mjs [office copy]
//
// With no copy given it uses work/office-src, cloning the pinned release
// there first when it is missing. The copy must be at the pinned commit. It
// never builds from a working checkout of Rutba Office: read the code from a
// clone or worktree of the release, outside that checkout.
//
// Made here, and not committed (see .gitignore): ids.json and labels.json.
// Made here and committed: packs/lang-en, ids.lock.json, which keeps every id
// the same from build to build, and coverage.json. packs/lang-ar, lang-hi and
// lang-ur were made here from Office's own words until Office 2.26.0, which
// keeps none; they are committed like every other pack.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { officePin } from '../../tools/pack-core.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// The Rutba Office release the packs are made and checked against: the one
// pin for every pack kind, office.json at the repository's root. Every pack
// carries its version; moving the pin is how the packs move to a new release.
const PIN = officePin();

const given = process.argv[2];
const office = path.resolve(given || path.join(ROOT, 'work/office-src'));
const same = (a, b) => path.relative(a, b) === '';
// The Rutba Office working checkout sits beside this repository (or beside
// its languages folder): never build from it.
if ([path.join(ROOT, '..', 'office'), path.join(ROOT, '..', '..', 'office')].some((p) => same(office, p))) {
  console.error(`${office} is the Rutba Office working checkout. Build from a clone of ${PIN.tag} instead (leave the argument out to have one made).`);
  process.exit(2);
}
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
if (!fs.existsSync(office)) {
  if (given) { console.error(`no office copy at ${office}`); process.exit(2); }
  fs.mkdirSync(path.dirname(office), { recursive: true });
  if (PIN.tag) {
    console.log(`cloning ${PIN.repo} at ${PIN.tag} into work/office-src`);
    git('clone', '--quiet', '--depth', '1', '--branch', PIN.tag, PIN.repo, office);
  } else {
    // Before the release is tagged, the pin names its gated commit, which a
    // branch in the public repository must reach.
    console.log(`cloning ${PIN.repo} at commit ${PIN.commit} (not yet tagged) into work/office-src`);
    git('init', '--quiet', office);
    git('-C', office, 'fetch', '--quiet', '--depth', '1', PIN.repo, PIN.commit);
    git('-C', office, 'checkout', '--quiet', '--detach', 'FETCH_HEAD');
  }
}
const head = git('-C', office, 'rev-parse', 'HEAD');
if (head !== PIN.commit) {
  console.error(`the office copy is at ${head}, not the pinned ${PIN.tag} (${PIN.commit}). Check out the pin, or move the pin in the repository's office.json on a new release.`);
  process.exit(1);
}

const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
const lockBefore = fs.existsSync(path.join(ROOT, 'ids.lock.json')) ? readJson('ids.lock.json') : { labels: [], retired: [] };
const run = (script, ...args) => {
  console.log(`\n> node ${script} ${args.map((a) => path.relative(ROOT, a) || a).join(' ')}`.trimEnd());
  const out = execFileSync(process.execPath, [path.join(ROOT, script), ...args], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
  return out;
};

const extract = JSON.parse(run('tools/extract-from-office.mjs', office));
console.log(`  ${extract.labels} labels, ${extract.newIds} new ids, ${extract.retired} retired; packs ${extract.packs.map((p) => `${p.tag} ${p.labels}`).join(', ')}`);
console.log(run('tools/usage-from-office.mjs', office, PIN.commit).trim().split('\n').slice(-3).map((l) => `  ${l}`).join('\n'));
console.log(run('tools/audit-coverage.mjs', office).trim().split('\n').filter((l) => /outside the catalogue/.test(l)).map((l) => `  ${l}`).join('\n'));

// The ids: none given before may go missing, none may repeat, and every
// generated file carries exactly the registry's ids.
const faults = [];
const registry = readJson('ids.json');
const ids = registry.labels.map((l) => l.id);
const live = new Set(ids);
if (live.size !== ids.length) faults.push(`${ids.length - live.size} ids repeat in ids.json`);
const lockAfter = readJson('ids.lock.json');
const retired = new Set(lockAfter.retired.map(([id]) => id));
for (const [id] of [...lockBefore.labels, ...lockBefore.retired]) if (!live.has(id) && !retired.has(id)) faults.push(`id ${id} was in ids.lock.json and is now neither live nor retired`);
const sameIds = (name, keys) => {
  const k = new Set(keys);
  const missing = ids.filter((id) => !k.has(id)), extra = [...k].filter((id) => !live.has(id));
  if (missing.length || extra.length) faults.push(`${name}: ${missing.length} ids missing, ${extra.length} not in the registry`);
};
sameIds('labels.json', Object.keys(readJson('labels.json').labels));
sameIds('ids.lock.json', lockAfter.labels.map(([id]) => id));
sameIds('packs/lang-en', Object.keys(readJson('packs/lang-en/messages.json')));
const before = new Set(lockBefore.labels.map(([id]) => id));
const fresh = ids.filter((id) => !before.has(id));
console.log(`\nids: ${ids.length} live, ${retired.size} retired, ${lockBefore.labels.length ? fresh.length : 'all'} new since the last build`);

// Every pack, generated and committed, against the registry.
let checked;
try { checked = run('tools/check-packs.mjs'); } catch (e) { checked = e.stdout || ''; faults.push('check-packs found faults'); }
console.log(checked.trim().split('\n').map((l) => `  ${l}`).join('\n'));

if (faults.length) { console.log(`\nbuild failed:\n${faults.map((f) => `  ${f}`).join('\n')}`); process.exit(1); }
// Only once everything passes: the packs that may be released, for the
// repository's release step to gather.
console.log(`\n${run('tools/dist.mjs').trim()}`);
console.log('\nbuild passed');
