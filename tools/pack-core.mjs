// The core every pack in this repository shares, whatever its kind: the
// manifest fields, the version rule, how one pack names another it needs, the
// files a pack may hold, and the canonical form a pack's manifest is signed in.
// Each kind's own tools (languages/tools, speech/tools) add their own checks
// on top of these.
//
// The rules, in short:
//   - id: lower case letters, digits and hyphens, at most 32, starting with a
//     letter (as Rutba Office's pack loader reads them).
//   - version: the Rutba Office release the pack is for, such as 2.25.1. A
//     data pack adds a revision from 1, raised for each change released at
//     that version. Code (the speech engine) has no revision.
//   - requires: each entry is a pack id or a name some pack provides.
//   - a pack folder holds only the files its kind allows, plus its licences,
//     and no links.

import fs from 'node:fs';
import path from 'node:path';

/** Pack ids, as Rutba Office's pack loader accepts them. */
export const ID = /^[a-z][a-z0-9-]{0,31}$/;
const VERSION = /^\d+\.\d+\.\d+$/;

/** Kinds that hold only data: never imported, never run. */
export const DATA_KINDS = ['language', 'dictionary', 'font', 'model', 'pronunciation', 'voice'];
/** Kinds that hold code, signed with Rutba Office's release key. */
export const CODE_KINDS = ['engine'];

/** Fields every manifest has. Each kind adds its own. */
export const CORE_FIELDS = ['id', 'kind', 'format', 'version', 'name', 'status', 'tags', 'requires', 'licence'];
/** Fields the version now says, which no manifest may carry. */
const DROPPED = ['minOffice', 'checkedAgainst'];

/**
 * The canonical text a manifest is signed over: keys sorted, no spaces,
 * undefined left out. The same as Rutba Office's packs.js canonical(), so a
 * signature made here verifies there.
 */
export function canonical(value) {
  if (Array.isArray(value)) return `[${value.map((v) => (v === undefined ? 'null' : canonical(v))).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value)
      .filter((k) => value[k] !== undefined)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${canonical(value[k])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

/** Order two packs of one id by version, then revision: below 0, equal 0, above 0. */
export function compareVersions(a, b) {
  const pa = String(a.version).split('.').map(Number), pb = String(b.version).split('.').map(Number);
  for (let i = 0; i < 3; i += 1) if (pa[i] !== pb[i]) return pa[i] - pb[i];
  return (a.revision || 0) - (b.revision || 0);
}

/**
 * The core checks of one manifest. Returns the faults, in words.
 *   office: the Rutba Office version every pack here must carry.
 */
export function checkManifest(manifest, { office }) {
  const faults = [];
  for (const f of CORE_FIELDS) if (manifest[f] === undefined) faults.push(`manifest has no ${f}`);
  for (const f of DROPPED) if (f in manifest) faults.push(`${f} is not a field: the version says it`);
  if (!ID.test(String(manifest.id))) faults.push(`id ${manifest.id} is not lower case letters, digits and hyphens, at most 32`);
  const code = CODE_KINDS.includes(manifest.kind);
  if (!code && !DATA_KINDS.includes(manifest.kind)) faults.push(`kind ${manifest.kind} is not one this repository makes`);
  if (!Number.isInteger(manifest.format) || manifest.format < 1) faults.push('format is a whole number from 1');
  if (!VERSION.test(String(manifest.version))) faults.push(`version ${manifest.version} is not a Rutba Office version`);
  else if (office && manifest.version !== office) faults.push(`version ${manifest.version} is not the Office release ${office}`);
  if (code && manifest.revision !== undefined) faults.push('code takes no revision: it is exactly its Office version');
  if (!code && (!Number.isInteger(manifest.revision) || manifest.revision < 1)) faults.push('revision is a whole number from 1');
  if (!['source', 'draft', 'reviewed'].includes(manifest.status)) faults.push(`status ${manifest.status} is not source, draft or reviewed`);
  if (!Array.isArray(manifest.tags) || manifest.tags.some((t) => typeof t !== 'string' || !t)) faults.push('tags is a list of BCP 47 tags');
  if (!Array.isArray(manifest.requires) || manifest.requires.some((r) => typeof r !== 'string')) faults.push('requires is a list of pack ids or provided names');
  if (manifest.provides !== undefined && (!Array.isArray(manifest.provides) || manifest.provides.some((p) => !ID.test(String(p))))) faults.push('provides is a list of names shaped like ids');
  if (typeof manifest.licence?.spdx !== 'string' || !Array.isArray(manifest.licence?.files)) faults.push('licence needs spdx and files');
  return faults;
}

/**
 * The files of one pack folder: only those its kind allows and its licence
 * files, nothing missing that the licence names, and no link or junction.
 *   allowed: a function (file name) => true for the files this kind may hold.
 */
export function checkFiles(dir, manifest, allowed) {
  const faults = [];
  const licences = new Set(manifest.licence?.files || []);
  for (const f of licences) if (!fs.existsSync(path.join(dir, f))) faults.push(`licence file ${f} is not in the pack`);
  const walk = (rel) => {
    for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
      const name = rel ? `${rel}/${e.name}` : e.name;
      if (e.isSymbolicLink() || fs.lstatSync(path.join(dir, name)).isSymbolicLink()) { faults.push(`${name} is a link`); continue; }
      if (e.isDirectory()) { walk(name); continue; }
      if (!licences.has(name) && !allowed(name)) faults.push(`${name} is not a file a ${manifest.kind} pack may hold`);
    }
  };
  walk('');
  return faults;
}

/**
 * Every requires entry met by some pack: by its id, or by a name it provides.
 *   manifests: every manifest that could meet one (the packs here, and any
 *   pack a kind's tools know of elsewhere in this repository).
 * Returns faults, keyed by the id of the pack that has them.
 */
export function checkRequires(manifests) {
  const met = new Set();
  for (const m of manifests) { met.add(m.id); for (const p of m.provides || []) met.add(p); }
  const faults = new Map();
  for (const m of manifests) {
    const missing = (m.requires || []).filter((r) => !met.has(r));
    if (missing.length) faults.set(m.id, [`requires ${missing.join(', ')}, which no pack here is or provides`]);
  }
  return faults;
}
