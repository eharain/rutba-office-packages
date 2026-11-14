// Takes the words out of a Rutba Office checkout and writes them as language
// packs: English (the source pack) and every translation the checkout holds,
// each label under a stable id.
//
//   node tools/extract-from-office.mjs <office copy>
//
// Usually run by tools/build.mjs. It only reads the copy. It writes ids.json
// (the registry: every label's id, its English, where the code uses it, and a
// hash of the English), ids.lock.json (every id given, with the hash of its
// English and no English) and packs/lang-en/ (manifest.json, messages.json).
// It writes no other pack: lang-ur, lang-ar and lang-hi are kept here as
// committed, whatever the copy holds, as every other language's pack is.
//
// Ids are given once and kept. A label already in ids.json, or whose English
// hash is in ids.lock.json, keeps its id on every later run; only labels new
// to the registry get a new one. So an id never changes because code moved or
// another label was added, and a fresh clone (no ids.json) gets the same ids.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { ownLicence, writeLicence } from './licence.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (!process.argv[2]) { console.error('usage: node tools/extract-from-office.mjs <office copy> (tools/build.mjs gives it)'); process.exit(2); }
const office = path.resolve(process.argv[2]);
const PACK_FORMAT = 1;

const read = (rel) => fs.readFileSync(path.join(office, rel), 'utf8');
const load = async (rel) => import(pathToFileURL(path.join(office, rel)).href);
const officeVersion = JSON.parse(read('package.json')).version;

/** The suite's apps: a label used only inside one of them is named after it. */
const APPS = ['word', 'sheets', 'slides', 'video', 'mail', 'base', 'pdf', 'image', 'pictures', 'calendar', 'contacts',
  'talk', 'broadcast', 'colour', 'home', 'locker', 'recorder'];

/** The area a file's labels belong to: [app or module, part within it or null]. */
function areaOf(file) {
  const f = file.replace(/\\/g, '/');
  let m;
  if ((m = /^apps\/desktop\/renderer\/apps\/([^/]+)\/([^/]+)\.js$/.exec(f))) return [m[1], m[2]];
  if ((m = /^apps\/desktop\/renderer\/apps\/([^/]+)\.js$/.exec(f))) {
    const base = m[1];
    if (APPS.includes(base)) return [base, null];
    const app = APPS.find((a) => base.startsWith(a + '-'));
    if (app) return [app, base.slice(app.length + 1)];
    return [base, null];
  }
  if ((m = /^apps\/desktop\/renderer\/studio\/([^/]+)\.js$/.exec(f))) return ['studio', m[1]];
  if (f === 'apps/desktop/renderer/engine-words.js') return ['engine', null];
  if (f === 'apps/desktop/renderer/shared-words.js') return ['common', null];
  if (f === 'apps/desktop/renderer/registry-words.js') return ['registry', null];
  if ((m = /^apps\/desktop\/renderer\/([^/]+)\/([^/]+)\.js$/.exec(f))) return [m[1], m[2]];
  if ((m = /^apps\/desktop\/renderer\/([^/]+)\.js$/.exec(f))) return [m[1], null];
  if ((m = /^packages\/office-ui\/src\/([^/]+)\.js$/.exec(f))) return ['ui', m[1] === 'index' ? null : m[1]];
  if ((m = /^packages\/office-shell\/src\/electron\/([^/]+)\.js$/.exec(f))) return ['shell', m[1]];
  return ['common', null];
}

/** The prefix of a label's id, from every file that uses it. */
function prefixOf(where) {
  const areas = where.map(areaOf);
  const tops = new Set(areas.map((a) => a[0]));
  if (tops.size > 1) return 'common';
  const [top] = tops;
  // A folder's index.js is the area itself, not a part of it.
  const parts = new Set(areas.map((a) => (a[1] === 'index' ? null : a[1])));
  if (parts.size === 1 && [...parts][0]) return `${top}.${[...parts][0]}`;
  return top;
}

/** A short, readable slug from the English: its first words, lower case. */
function slugOf(english) {
  const words = english
    .replace(/\{(\w+)\}/g, ' $1 ')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ').replace(/['’]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 6).join('-') || 'label';
}

const hashOf = (entry) => crypto.createHash('sha256')
  .update(entry.plural ? JSON.stringify({ one: entry.english, other: entry.plural }) : entry.english)
  .digest('hex').slice(0, 12);

/** Placeholders a text uses, as a sorted list. */
const placeholders = (s) => [...new Set([...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]))].sort().join(',');

// ── what the checkout holds ───────────────────────────────────────────────

// An Office from 2.26.0 with stage 5 of the meaning keys (D-2026-11-14-16) carries no words of its
// own for any language, and no messages.json: every label is defined in catalogues/labels.json, and
// Office's own extractor (tools/extract-messages.mjs) gives the list messages.json was, byte for
// byte, and each part's labels with the files that use them. Urdu, Arabic and Hindi are then packs
// kept here like every other (packs/lang-ur, lang-ar and lang-hi, committed), and only English is
// made from Office. An Office before stage 5 is read for its list as before: its messages.json,
// and its parts' translations for the labels each part keeps. Its Urdu, Arabic and Hindi words
// and its GLOSSARY files are not read: the three packs stay as committed, glossaries included,
// so a later change to them here is never written over by an older Office's words.
const ownWords = fs.existsSync(path.join(office, 'packages/office-ui/src/catalogues/messages.json'));

/** An Office with stage 5: its own extractor, or a plain stop naming what the copy lacks. */
async function officeExtractor() {
  const rel = 'tools/extract-messages.mjs';
  const stop = (what) => {
    console.error(`${office} has no packages/office-ui/src/catalogues/messages.json, so its list is read through its own ${rel}, but ${what}. Give a copy of a Rutba Office release, at the pinned commit.`);
    process.exit(2);
  };
  if (!fs.existsSync(path.join(office, rel))) stop(`the copy has no ${rel}`);
  let mod;
  try {
    mod = await load(rel);
  } catch (err) {
    stop(`its ${rel} could not be loaded (${err?.message || err})`);
  }
  for (const name of ['extract', 'extractParts']) if (typeof mod[name] !== 'function') stop(`its ${rel} has no ${name}()`);
  return mod;
}
const officeExtract = ownWords ? null : await officeExtractor();

const shared = ownWords ? JSON.parse(read('packages/office-ui/src/catalogues/messages.json')).messages : officeExtract.extract(office);
// The languages an Office before stage 5 had words of its own for: only to find which labels each
// part keeps (its translations' English). Never written: those packs are kept here.
const tags = ownWords ? ['ur', 'ar', 'hi'] : [];

// The apps' own words, kept out of the shared list so a build without the app carries none of them.
const PARTS = [
  { part: 'locker', file: 'apps/desktop/renderer/apps/locker-translations.js', name: 'LOCKER_WORDS', words: 'locker-words.js' },
  { part: 'talk', file: 'apps/desktop/renderer/apps/talk-translations.js', name: 'TALK_WORDS', words: 'talk-words.js' },
  { part: 'colour', file: 'apps/desktop/renderer/apps/colour-translations.js', name: 'COLOUR_WORDS', words: 'colour-words.js' },
  { part: 'sheets-find', file: 'apps/desktop/renderer/apps/sheets-translations.js', name: 'SHEETS_WORDS', words: 'sheets-words.js' },
];
const partWords = {};
if (ownWords) for (const p of PARTS) partWords[p.part] = (await load(p.file))[p.name];
// Each part's labels, as Office's extractor lists them: { message, plural?, where }, by part.
const partLists = ownWords ? null : officeExtract.extractParts(office);

// Where each app's own words are used, and the English plural of each counted
// one: read from the t() and tn() calls in the files that import that app's
// words module, the same way tools/extract-messages.mjs reads the shared ones.
const STR = String.raw`'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"`;
const unescape = (s) => s.replace(/\\(n|.)/g, (m, c) => (c === 'n' ? '\n' : c));
function filesUnder(dir, out = []) {
  for (const e of fs.readdirSync(path.join(office, dir), { withFileTypes: true })) {
    const rel = `${dir}/${e.name}`;
    if (e.isDirectory()) filesUnder(rel, out);
    else if (e.name.endsWith('.js')) out.push(rel);
  }
  return out;
}
const rendererApps = filesUnder('apps/desktop/renderer/apps');
// Office from 2.26.0 names a label by its meaning key (D-2026-11-14-16): t('talk.invite-email'),
// tn(count, 'talk.count-invited', values). Its definitions (catalogues/labels.json) give each key's
// English and plural, so a call by key counts as a use of that English. An Office without the file
// names its labels by their English, read as before.
const labelsFile = path.join(office, 'packages/office-ui/src/catalogues/labels.json');
const KEYS = fs.existsSync(labelsFile) ? JSON.parse(fs.readFileSync(labelsFile, 'utf8')).labels : {};
const keyed = (s) => (Object.prototype.hasOwnProperty.call(KEYS, s) ? KEYS[s] : null);
const partUse = {};
for (const p of PARTS) {
  const use = { where: new Map(), plural: new Map() };
  const importRe = new RegExp(String.raw`from\s*['"](?:\./|\.\./)${p.words.replace('.', '\\.')}['"]`);
  for (const rel of rendererApps) {
    const text = read(rel);
    if (!importRe.test(text)) continue;
    const note = (e) => { if (!use.where.has(e)) use.where.set(e, new Set()); use.where.get(e).add(rel); };
    for (const m of text.matchAll(new RegExp(String.raw`(?<![\w.$])t\(\s*(?:${STR})`, 'g'))) {
      const s = unescape(m[1] ?? m[2]);
      note(keyed(s)?.english ?? s);
    }
    // A counted label named by its key: tn(count, key, values), its plural from the key's definition.
    for (const m of text.matchAll(new RegExp(String.raw`(?<![\w.$])tn\([^'"]*?,\s*(?:${STR})`, 'g'))) {
      const def = keyed(unescape(m[1] ?? m[2]));
      if (!def) continue;
      note(def.english);
      if (def.plural) use.plural.set(def.english, def.plural);
    }
    for (const m of text.matchAll(new RegExp(String.raw`(?<![\w.$])tn\([^'"]*?,\s*(?:${STR})\s*,\s*(?:${STR})`, 'g'))) {
      const one = unescape(m[1] ?? m[2]);
      note(one);
      use.plural.set(one, unescape(m[3] ?? m[4]));
    }
  }
  partUse[p.part] = use;
}

// ── the registry ──────────────────────────────────────────────────────────

const registryFile = path.join(ROOT, 'ids.json');
const before = fs.existsSync(registryFile) ? JSON.parse(fs.readFileSync(registryFile, 'utf8')).labels : [];
const lockFile = path.join(ROOT, 'ids.lock.json');
const lock = fs.existsSync(lockFile) ? JSON.parse(fs.readFileSync(lockFile, 'utf8')) : { labels: [], retired: [] };
const idByEnglish = new Map(before.map((l) => [l.english, l.id]));
const idByHash = new Map([...lock.labels, ...(lock.retired || [])].map(([id, hash]) => [hash, id]));
const taken = new Set([...before.map((l) => l.id), ...idByHash.values()]);

const labels = new Map();
for (const m of shared) labels.set(m.message, { english: m.message, ...(m.plural ? { plural: m.plural } : {}), parts: ['shared'], where: m.where });
for (const p of PARTS) {
  if (partLists) {
    // Stage 5: the part's labels and where they are used, from Office's extractor.
    for (const m of partLists[p.part] || []) {
      const known = labels.get(m.message);
      if (known) { if (!known.parts.includes(p.part)) known.parts.push(p.part); continue; }
      labels.set(m.message, { english: m.message, ...(m.plural ? { plural: m.plural } : {}), parts: [p.part], where: m.where });
    }
    continue;
  }
  const english = new Set();
  for (const tag of tags) for (const k of Object.keys(partWords[p.part][tag] || {})) english.add(k);
  for (const e of [...english].sort()) {
    const known = labels.get(e);
    if (known) { if (!known.parts.includes(p.part)) known.parts.push(p.part); continue; }
    // A counted word of an app's own: its English plural comes from its tn() call.
    const sample = tags.map((t) => partWords[p.part][t]?.[e]).find((v) => v !== undefined);
    const plural = partUse[p.part].plural.get(e);
    if (sample && typeof sample === 'object' && !plural) throw new Error(`${p.part}: "${e}" is counted in its translations, but no tn() call gives its English plural`);
    const where = [...(partUse[p.part].where.get(e) || [])].sort();
    if (!where.length) console.warn(`${p.part}: "${e}" is translated but no t() or tn() call in the app uses it`);
    labels.set(e, { english: e, ...(plural ? { plural } : {}), parts: [p.part], where: where.length ? where : [`apps/desktop/renderer/apps/${p.words}`] });
  }
}

const ordered = [...labels.values()].sort((a, b) => (a.english < b.english ? -1 : a.english > b.english ? 1 : 0));
let added = 0;
for (const l of ordered) {
  let id = idByEnglish.get(l.english) ?? idByHash.get(hashOf(l));
  if (!id) {
    const base = `${prefixOf(l.where)}.${slugOf(l.english)}`;
    id = base;
    for (let n = 2; taken.has(id); n++) id = `${base}-${n}`;
    taken.add(id);
    added += 1;
  }
  l.id = id;
  l.hash = hashOf(l);
}
const kept = before.filter((b) => !labels.has(b.english));
const live = new Set(ordered.map((l) => l.id));
const retiredIds = new Map([...(lock.retired || []), ...lock.labels.filter(([id]) => !live.has(id)), ...kept.map((k) => [k.id, k.hash])].map(([id, hash]) => [id, hash]));

fs.writeFileSync(registryFile, JSON.stringify({
  about: 'Every label Rutba Office shows: its id, its English, the part of the suite that carries it, where the code uses it, and a hash of the English that each translation records. Ids are given once and kept. Made by tools/extract-from-office.mjs.',
  office: officeVersion,
  count: ordered.length,
  labels: ordered.map(({ id, english, plural, parts, where, hash }) => ({ id, english, ...(plural ? { plural } : {}), parts, where, hash })),
  ...(kept.length ? { retired: kept } : {}),
}, null, 2) + '\n');

// One id per line, so a change shows as one line in a diff.
const row = (pair) => `  ${JSON.stringify(pair)}`;
fs.writeFileSync(lockFile, [
  '{',
  `"about": ${JSON.stringify('Every id given, with the hash of its English, so a build from a fresh clone gives the same ids. Made by tools/extract-from-office.mjs; commit it.')},`,
  `"office": ${JSON.stringify(officeVersion)},`,
  '"labels": [',
  ordered.map((l) => row([l.id, l.hash])).join(',\n'),
  '],',
  '"retired": [',
  [...retiredIds].sort().map(row).join(',\n'),
  ']',
  '}',
].join('\n') + '\n');

// ── the packs ─────────────────────────────────────────────────────────────

const NAMES = {
  en: { name: 'English', nativeName: 'English', script: 'Latn', direction: 'ltr', region: 'en-GB' },
  ur: { name: 'Urdu', nativeName: 'اردو', script: 'Arab', direction: 'rtl', region: 'ur-PK' },
  ar: { name: 'Arabic', nativeName: 'العربية', script: 'Arab', direction: 'rtl', region: 'ar-SA' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', script: 'Deva', direction: 'ltr', region: 'hi-IN' },
};

function writePack(tag, messages, extra) {
  const dir = path.join(ROOT, 'packs', `lang-${tag}`);
  fs.mkdirSync(dir, { recursive: true });
  const info = NAMES[tag];
  const pluralForms = new Intl.PluralRules(tag).resolvedOptions().pluralCategories;
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify({
    id: `lang-${tag}`,
    kind: 'language',
    format: PACK_FORMAT,
    version: officeVersion,
    revision: 1,
    tag,
    tags: [tag], requires: [], licence: ownLicence(),
    ...info,
    pluralForms,
    labels: Object.keys(messages).length,
    ...extra,
  }, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'messages.json'), JSON.stringify(messages, null, 2) + '\n');
  writeLicence(dir);
  return dir;
}

// English: the source pack. A counted label carries English's two forms.
// Each entry holds the hash of its English (source), as every pack does: Rutba
// Office names a label by its English and finds the id through this hash.
// English's own wording comes first where it has one (versions/en.medium.json:
// labels whose code key reads badly, such as one with a long dash); the code
// key's words otherwise. A wording made for an older key is not used, and
// check-packs reports it.
// The packs taken from the code may have the same: versions/<tag>.medium.json,
// a pack's own medium for labels whose words in the code read badly.
const mediumOf = (tag) => {
  const file = path.join(ROOT, 'versions', `${tag}.medium.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
};
const enMedium = mediumOf('en');
const en = {};
for (const l of ordered) {
  const own = enMedium[l.id]?.source === l.hash ? enMedium[l.id] : null;
  en[l.id] = l.plural
    ? { forms: own?.forms || { one: l.english, other: l.plural }, source: l.hash }
    : { text: own?.text ?? l.english, source: l.hash };
}
// A pack's short and complete versions are written here, not taken from the
// code: versions/<tag>.json, committed. With them the pack is in format 2
// (MODEL.md), and they go beside its messages as versions.json.
const versionsOf = (tag) => {
  const file = path.join(ROOT, 'versions', `${tag}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
};
const asFormat2 = (v) => (v ? { format: 2, versions: ['short', 'medium', 'complete'] } : {});
function writeVersions(dir, v) {
  const file = path.join(dir, 'versions.json');
  if (!v) { if (fs.existsSync(file)) fs.rmSync(file); return; }
  const rows = ordered.filter((l) => v[l.id]).map((l) => `  ${JSON.stringify(l.id)}: ${JSON.stringify(v[l.id])}`);
  fs.writeFileSync(file, `{\n${rows.join(',\n')}\n}\n`);
}
const enVersions = versionsOf('en');
writeVersions(writePack('en', en, { source: true, status: 'source', review: 'source text', ...asFormat2(enVersions) }), enVersions);

// Urdu, Arabic and Hindi are not written here (see above): the packs are taken as committed, as
// every other language's are, and check-packs holds them to the registry.
const report = ['ur', 'ar', 'hi'].map((tag) => ({ tag, labels: Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, 'packs', `lang-${tag}`, 'messages.json'), 'utf8'))).length, kept: true }));

const byPrefix = {};
for (const l of ordered) { const top = l.id.split('.')[0]; byPrefix[top] = (byPrefix[top] || 0) + 1; }
console.log(JSON.stringify({ office: officeVersion, labels: ordered.length, newIds: added, retired: kept.length, packs: report, byArea: byPrefix }, null, 2));
