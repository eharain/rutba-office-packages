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
import { fileURLToPath } from 'node:url';

/**
 * The Rutba Office release every pack in this repository is for, one pin for
 * all kinds: { repo, tag, commit, version }, from office.json at the root.
 * Moving it to a new release is one edit for the whole repository.
 */
export const OFFICE_FILE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'office.json');
export const officePin = () => JSON.parse(fs.readFileSync(OFFICE_FILE, 'utf8'));

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
 * The licence of what is made here: Tech Style's, all rights reserved (the
 * repository's LICENSE). A pack holding anything of ours names PROPRIETARY in
 * its spdx and carries the LICENSE, byte for byte, as LICENCE_FILE; with
 * parts by others it joins their licences with AND and lists their files
 * too. A pack whose contents are wholly others' names only their licences
 * and needs no LICENCE_FILE.
 */
export const PROPRIETARY = 'LicenseRef-TechStyle-Proprietary';
export const LICENCE_FILE = 'LICENSE.txt';
export const REPO_LICENSE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'LICENSE');

/** The ids an spdx expression names, without its operators and brackets. */
const spdxIds = (spdx) => String(spdx || '').replace(/[()]/g, ' ').split(/\s+/).filter((w) => w && !['AND', 'OR', 'WITH'].includes(w));

/** The licence field for a pack wholly made here; `others` adds third-party ids and files. */
export function ownLicence(others = {}) {
  const ids = [PROPRIETARY, ...(others.spdx ? [others.spdx] : [])];
  return { spdx: ids.join(' AND '), files: [LICENCE_FILE, ...(others.files || [])] };
}

/** Put the repository's LICENSE into a pack folder as LICENCE_FILE. */
export function writeLicence(dir) {
  fs.copyFileSync(REPO_LICENSE, path.join(dir, LICENCE_FILE));
}

/**
 * Faults in a pack's licence: NOASSERTION anywhere; and, when its spdx names
 * PROPRIETARY, LICENCE_FILE listed in its files, present, and the same bytes
 * as the repository's LICENSE.
 */
export function checkLicence(dir, manifest) {
  const faults = [];
  const ids = spdxIds(manifest.licence?.spdx);
  if (!ids.length) faults.push('licence has no spdx');
  if (ids.includes('NOASSERTION')) faults.push('licence says NOASSERTION');
  if (ids.includes(PROPRIETARY)) {
    const file = path.join(dir, LICENCE_FILE);
    if (!(manifest.licence?.files || []).includes(LICENCE_FILE)) faults.push(`licence files do not list ${LICENCE_FILE}`);
    if (!fs.existsSync(file)) faults.push(`${LICENCE_FILE} is not in the pack`);
    else if (!fs.readFileSync(file).equals(fs.readFileSync(REPO_LICENSE))) faults.push(`${LICENCE_FILE} is not the same as the repository's LICENSE`);
  }
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

/** The versions of Office's add-ons contract (addons-contract.json, C10) these tools read. */
export const CONTRACT_VERSIONS = [1];

/**
 * A manifest checked against the compatibility contract of the Office
 * release it is for: the contract file Office keeps at
 * packages/office-shell/src/addons-contract.json, read from the pinned clone
 * (private/office-pack-compatibility-design.md 2). Returns the faults, in
 * words. Who signed the pack is not seen here: trustFor() says which key
 * the contract wants for its kind.
 *
 *   - its kind is one that Office reads, at a format it reads;
 *   - a kind the contract marks exactVersion (the engine) is exactly Office's version;
 *   - the engine serves the contract's speech API (speechApi, and in ipc and
 *     events the namespace's calls and events), needs the engine host API
 *     Office offers (host, platform), and reads the format Office's packages
 *     are written in for each speech data kind.
 */
export function checkContract(manifest, contract) {
  if (!contract || !CONTRACT_VERSIONS.includes(contract.contract)) return [`contract ${contract?.contract} is not one these tools read`];
  const faults = [];
  const kind = contract.kinds?.[manifest.kind];
  if (!kind) return [`Office ${contract.office} reads no ${manifest.kind} pack`];
  if (!(kind.formats || []).includes(manifest.format)) faults.push(`format ${manifest.format} is not one Office ${contract.office} reads for a ${manifest.kind} (${(kind.formats || []).join(', ')})`);
  if (kind.exactVersion && manifest.version !== contract.office) faults.push(`a ${manifest.kind} is exactly its Office version: ${manifest.version} is not ${contract.office}`);
  if (manifest.kind === 'engine') {
    const sp = contract.speech || {};
    const host = contract.engineHost || {};
    if (manifest.speechApi !== sp.api) faults.push(`speechApi ${manifest.speechApi} is not Office's speech API ${sp.api}`);
    const same = (a, b) => JSON.stringify([...(a || [])].sort()) === JSON.stringify([...(b || [])].sort());
    if (!same(manifest.ipc?.[sp.namespace], sp.calls)) faults.push(`ipc.${sp.namespace} is not the contract's calls (${(sp.calls || []).join(', ')})`);
    if (!same(manifest.events, sp.events)) faults.push(`events are not the contract's (${(sp.events || []).join(', ') || 'none'})`);
    if (manifest.host !== host.api) faults.push(`host ${manifest.host} is not Office's engine host API ${host.api}`);
    if (!(host.platforms || []).includes(manifest.platform)) faults.push(`platform ${manifest.platform} is not one Office ${contract.office} hosts an engine on`);
    for (const [k, formats] of Object.entries(manifest.reads || {})) {
      const theirs = contract.kinds?.[k];
      if (!theirs || !DATA_KINDS.includes(k)) { faults.push(`reads ${k}, which is not a data kind Office reads`); continue; }
      const current = Math.max(...theirs.formats);
      if (!formats.includes(current)) faults.push(`reads ${k} format ${formats.join(', ')}, not ${current}, the format Office ${contract.office}'s packs are written in`);
    }
    for (const k of ['model', 'pronunciation', 'voice']) if (contract.kinds?.[k] && !manifest.reads?.[k]) faults.push(`reads says nothing of ${k}`);
  }
  return faults;
}

/** The key the contract wants for a kind: 'packages' or 'release', or null for a kind it does not list. */
export const trustFor = (manifest, contract) => contract?.kinds?.[manifest.kind]?.trust || null;
