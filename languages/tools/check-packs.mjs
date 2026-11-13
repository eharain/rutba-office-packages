// Checks every language pack against the registry (ids.json), with no
// Rutba Office needed:
//   - the same ids as English (a regional version holds only what it changes),
//     and no id the registry does not know;
//   - every plural form the language's rules can choose, and no other;
//   - the same placeholders as the English, and its line breaks;
//   - no em dash, no spaced en dash used as a dash, no no-break space;
//   - no more than a few labels left in English;
//   - a manifest in the format, its counts and plural forms right;
//   - in format 2, a short and a complete version of every label in
//     versions.json, with the medium's forms and placeholders and no dash.
//
//   node tools/check-packs.mjs            exits 1 on any fault
//
// A translation whose `source` hash no longer matches the registry was made
// from older English: it is reported as stale, to be reviewed again.
// The Urdu, Arabic and Hindi packs carry Rutba Office 2.25.0's text unchanged
// (`madeFrom: "office 2.25.0"`): their em dashes are counted and reported, to
// fix at their review, rather than failed.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'ids.json'), 'utf8'));
const labels = new Map(registry.labels.map((l) => [l.id, l]));
const places = (s) => new Set([...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]));
const same = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));

/** The script each pack writes in, to tell a translation from English left in. */
const SCRIPTS = { Arab: /[؀-ۿ]/, Deva: /[ऀ-ॿ]/, Hans: /[一-鿿]/, Hant: /[一-鿿]/, Cyrl: /[Ѐ-ӿ]/, Grek: /[Ͱ-Ͽ]/, Hebr: /[֐-׿]/ };
const FIELDS = ['id', 'kind', 'format', 'version', 'revision', 'tag', 'tags', 'requires', 'licence', 'name', 'nativeName', 'script', 'direction', 'region', 'pluralForms', 'labels', 'status', 'review'];
const DASH = /[\u2014\u2015]| \u2013 |^\u2013 | \u2013$/;
const NBSP = /[\u00a0\u202f\u2007\u2060\ufeff]/;
/** Labels left word for word in English: at most this many in another script, this share in Latin. */
const LEFT_OTHER_SCRIPT = 40;
const LEFT_LATIN_SHARE = 0.04;
/** The Office release every pack is checked against, and whose version it carries. */
const OFFICE = JSON.parse(fs.readFileSync(path.join(ROOT, 'office.json'), 'utf8')).version;

let faults = 0;

// Format 2 (MODEL.md): versions.json holds each label's short and complete
// versions; the medium is the text in messages.json. Widths against
// labels.json's space, and the order short <= medium <= complete, are
// counted, not failed: a reviewer judges near misses. labels.json is made by
// the build; without it the widths go unchecked.
const SPACE = fs.existsSync(path.join(ROOT, 'labels.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'labels.json'), 'utf8')).labels : null;
const WIDE = /[\u1100-\u115f\u2e80-\ua4cf\uac00-\ud7a3\uf900-\ufaff\ufe30-\ufe4f\uff00-\uff60\uffe0-\uffe6]/;
/** As tools/usage-from-office.mjs measures for space: wide characters 2, a placeholder 8. */
const widthOf = (s) => { let w = 0; for (const ch of String(s).replace(/\{\w+\}/g, '\u0000'.repeat(8))) w += WIDE.test(ch) ? 2 : 1; return w; };
function checkVersions(dir, manifest, messages) {
  const file = path.join(dir, 'versions.json');
  if (!fs.existsSync(file)) { fault('format 2, but no versions.json'); return; }
  const versions = JSON.parse(fs.readFileSync(file, 'utf8'));
  let missing = 0, over = 0, order = 0, stale = 0;
  for (const [id, msg] of Object.entries(messages)) {
    const label = labels.get(id);
    if (!label) continue;
    const v = versions[id];
    if (!v) { missing += 1; continue; }
    if (v.source !== label.hash) stale += 1;
    const medium = manifest.source ? (label.plural ? { one: label.english, other: label.plural } : label.english) : (label.plural ? msg.forms : msg.text);
    const counted = typeof medium === 'object';
    if (counted && (JSON.stringify(Object.keys(v.short || {}).sort()) !== JSON.stringify(Object.keys(medium).sort()) || JSON.stringify(Object.keys(v.complete || {}).sort()) !== JSON.stringify(Object.keys(medium).sort()))) { fault(`${id}: the versions' forms are not the medium's`); continue; }
    const space = SPACE?.[id]?.space;
    for (const k of counted ? Object.keys(medium) : [null]) {
      const m = k ? medium[k] : medium, s = k ? v.short[k] : v.short, c = k ? v.complete[k] : v.complete;
      const at = k ? `${id}.${k}` : id;
      if (typeof s !== 'string' || !s.trim() || typeof c !== 'string' || !c.trim()) { fault(`${at}: a version is empty`); continue; }
      for (const [name, t] of [['short', s], ['complete', c]]) {
        if (!same(places(t), places(m))) fault(`${at}: the ${name} version's placeholders differ from the medium`);
        if (DASH.test(t)) fault(`${at}: the ${name} version has a dash`);
        if (NBSP.test(t)) fault(`${at}: the ${name} version has a no-break space`);
      }
      if (space && (widthOf(s) > space.short || widthOf(c) > space.complete)) over += 1;
      if (widthOf(s) > widthOf(m) || widthOf(c) < widthOf(m)) order += 1;
    }
  }
  const unknown = Object.keys(versions).filter((id) => !(id in messages));
  if (missing) fault(`${missing} labels have no short and complete versions`);
  if (unknown.length) fault(`${unknown.length} versions for labels the pack does not hold, such as ${unknown[0]}`);
  console.log(`  versions: ${Object.keys(versions).length} labels; ${SPACE ? over : 'unmeasured (no labels.json)'} over their space, ${order} out of order, ${stale} from older English`);
}
const fault = (what) => { faults += 1; console.log(`  fault: ${what}`); };
const ids = new Set(labels.keys());
if (ids.size !== registry.labels.length) { console.log('ids.json: an id is used twice'); faults += 1; }

const rows = [];
for (const name of fs.readdirSync(path.join(ROOT, 'packs')).sort()) {
  const dir = path.join(ROOT, 'packs', name);
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  const messages = JSON.parse(fs.readFileSync(path.join(dir, 'messages.json'), 'utf8'));
  const count = Object.keys(messages).length;
  console.log(`${name}: ${count} labels${manifest.variantOf ? ` (changes to ${manifest.variantOf})` : ''}, ${manifest.status === 'draft' ? 'DRAFT: ' : ''}${manifest.review}`);
  const before = faults;
  for (const f of FIELDS) if (manifest[f] === undefined) fault(`manifest has no ${f}`);
  if (![1, 2].includes(manifest.format)) fault(`format ${manifest.format} is not one this checks`);
  if (manifest.id !== name) fault(`manifest id ${manifest.id} is not the folder's name`);
  // The core all pack kinds share (language, voice, speech-model, app).
  if (manifest.kind !== 'language') fault(`kind ${manifest.kind} is not language`);
  if (!Array.isArray(manifest.tags) || manifest.tags.length !== 1 || manifest.tags[0] !== manifest.tag) fault('tags must be exactly [tag]');
  if (!Array.isArray(manifest.requires) || manifest.requires.some((r) => !fs.existsSync(path.join(ROOT, 'packs', r)))) fault('requires names a pack that is not here');
  if (manifest.variantOf && !manifest.requires?.includes(manifest.variantOf)) fault('a regional pack requires its base');
  if (typeof manifest.licence?.spdx !== 'string' || !Array.isArray(manifest.licence?.files)) fault('licence needs spdx and files');
  for (const f of manifest.licence?.files || []) if (!fs.existsSync(path.join(dir, f))) fault(`licence file ${f} is not in the pack`);
  // Every pack carries the version of the Office release it is for, which is
  // the release it was checked against, and a revision from 1 for each text
  // change released at that version.
  if (manifest.version !== OFFICE) fault(`version ${manifest.version} is not the Office release ${OFFICE} (office.json)`);
  if (!Number.isInteger(manifest.revision) || manifest.revision < 1) fault('revision is a whole number from 1');
  for (const gone of ['minOffice', 'checkedAgainst']) if (gone in manifest) fault(`${gone} is not a field: the version says it`);
  // Data only: a language pack holds these files and nothing else.
  const allowed = new Set(['manifest.json', 'messages.json', 'versions.json', 'glossary.md', ...(manifest.licence?.files || [])]);
  for (const f of fs.readdirSync(dir)) if (!allowed.has(f)) fault(`${f} is not a file a language pack may hold`);
  if (!['source', 'draft', 'reviewed'].includes(manifest.status)) fault(`status ${manifest.status} is not source, draft or reviewed`);
  if ((manifest.status === 'source') !== Boolean(manifest.source)) fault('only the source pack has status source');
  if (manifest.labels !== count) fault(`manifest says ${manifest.labels} labels, messages.json holds ${count}`);
  if (!fs.existsSync(path.join(dir, 'glossary.md')) && !manifest.source) fault('no glossary.md');
  if (manifest.variantOf && !fs.existsSync(path.join(ROOT, 'packs', manifest.variantOf))) fault(`variant of ${manifest.variantOf}, which is not here`);
  const forms = new Intl.PluralRules(manifest.tag).resolvedOptions().pluralCategories;
  if (JSON.stringify([...forms].sort()) !== JSON.stringify([...(manifest.pluralForms || [])].sort())) fault(`plural forms ${manifest.pluralForms} are not Intl's ${forms}`);

  const missing = [...ids].filter((id) => !(id in messages));
  const unknown = Object.keys(messages).filter((id) => !ids.has(id));
  if (!manifest.variantOf && missing.length) fault(`${missing.length} labels missing, such as ${missing.slice(0, 3).join(', ')}`);
  if (unknown.length) fault(`${unknown.length} ids not in the registry, such as ${unknown.slice(0, 3).join(', ')}`);

  let stale = 0;
  let english = 0;
  let dashes = 0;
  let spaces = 0;
  const script = SCRIPTS[manifest.script];
  // Dashes the pack keeps from the suite's own text: the three 2.25.0 packs,
  // and American English, which changes only spelling and words.
  const carried = manifest.madeFrom === 'office 2.25.0' || manifest.tag.startsWith('en');
  const isEnglish = manifest.tag.startsWith('en');
  for (const [id, entry] of Object.entries(messages)) {
    const label = labels.get(id);
    if (!label) continue;
    const want = places(label.english + ' ' + (label.plural || ''));
    if (manifest.source) {
      const ok = label.plural ? entry.forms?.one === label.english && entry.forms?.other === label.plural : entry.text === label.english;
      if (!ok) fault(`${id}: the English pack does not hold the registry's English`);
      continue;
    }
    if (entry.source !== label.hash) stale += 1;
    const texts = [];
    if (label.plural) {
      if (!entry.forms) { fault(`${id}: counted, but has no forms`); continue; }
      for (const f of forms) if (typeof entry.forms[f] !== 'string' || !entry.forms[f].trim()) fault(`${id}: no "${f}" form`);
      for (const f of Object.keys(entry.forms)) if (!forms.includes(f)) fault(`${id}: a "${f}" form ${manifest.tag} does not use`);
      for (const [f, v] of Object.entries(entry.forms)) for (const p of places(v)) if (!want.has(p)) fault(`${id}.${f}: {${p}} is not in the English`);
      texts.push(...Object.values(entry.forms));
    } else {
      if (typeof entry.text !== 'string' || !entry.text.trim()) { fault(`${id}: empty`); continue; }
      if (!same(places(entry.text), places(label.english))) fault(`${id}: placeholders differ from the English`);
      if (/\n/.test(label.english) && !/\n/.test(entry.text)) fault(`${id}: the English breaks the line, this does not`);
      texts.push(entry.text);
      const words = /[A-Za-z]{3,}/.test(label.english.replace(/\{\w+\}/g, ''));
      if (!isEnglish && words && entry.text === label.english && !(script && script.test(entry.text))) english += 1;
    }
    if (texts.some((t) => DASH.test(t))) { dashes += 1; if (!carried && dashes <= 5) fault(`${id}: an em dash, or an en dash used as one`); }
    if (texts.some((t) => NBSP.test(t))) { spaces += 1; if (spaces <= 5) fault(`${id}: a no-break space`); }
  }
  if (!carried && dashes > 5) fault(`${dashes - 5} more labels with a dash`);
  if (spaces > 5) fault(`${spaces - 5} more labels with a no-break space`);
  if (carried && dashes) console.log(`  ${dashes} labels keep the suite's em dashes, to fix with the English`);
  if (stale) console.log(`  ${stale} translations made from older English, to review again`);
  if (manifest.format === 2) checkVersions(dir, manifest, messages);
  const limit = script ? LEFT_OTHER_SCRIPT : Math.round(LEFT_LATIN_SHARE * registry.labels.length);
  if (!manifest.source && !isEnglish && !manifest.variantOf) {
    console.log(`  ${english} labels the same as the English (limit ${limit})`);
    if (english > limit) fault(`${english} labels left in English`);
  }
  rows.push({ pack: name, labels: count, faults: faults - before, dashes, stale });
}

console.log(faults ? `${faults} faults` : `every pack is whole: ${rows.length} packs`);
process.exit(faults ? 1 : 0);
