// Builds the speech engine pack, `speech-engine`, for the Office release in
// office.json, into speech/dist/v<version>/speech-engine/.
//
// It is code, so it is never signed here: Office's release tooling signs it
// with the release key (tools/sign.mjs --release-key), as it signs app packs.
//
// What goes in:
//   - our code: engine/main.mjs (what Office loads), worker.mjs, speaker.mjs,
//     runner.mjs, text/ and vocab.json;
//   - ONNX Runtime 1.21.0 (MIT) for Windows x64 only: its JavaScript, the
//     native binding and onnxruntime.dll, from the npm packages pinned below
//     by their integrity, with ONNX Runtime's LICENSE and ThirdPartyNotices
//     (which names Eigen, MPL-2.0) from the matching tag. DirectML.dll is left
//     out: the first round is CPU only (owner's Q4, decided by this session).
//     The spike checks onnxruntime.dll loads without it.
//   - no install scripts: onnxruntime-node's postinstall and its tar and
//     global-agent dependencies are not taken.
//
//   node tools/build-engine.mjs

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { builtinModules } from 'node:module';
import { fileURLToPath } from 'node:url';
import { checkManifest, checkFiles, officePin, ownLicence, writeLicence, checkLicence } from '../../tools/pack-core.mjs';
import { fetchFile, CACHE } from './fetch-sources.mjs';

const SPEECH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ENGINE = path.join(SPEECH, 'engine');

/** The pinned third-party parts. */
export const ORT = {
  id: 'onnxruntime',
  files: [
    { name: 'onnxruntime-node-1.21.0.tgz', url: 'https://registry.npmjs.org/onnxruntime-node/-/onnxruntime-node-1.21.0.tgz', integrity: 'sha512-NeaCX6WW2L8cRCSqy3bInlo5ojjQqu2fD3D+9W5qb5irwxhEyWKXeH2vZ8W9r6VxaMPUan+4/7NDwZMtouZxEw==' },
    { name: 'onnxruntime-common-1.21.0.tgz', url: 'https://registry.npmjs.org/onnxruntime-common/-/onnxruntime-common-1.21.0.tgz', integrity: 'sha512-Q632iLLrtCAVOTO65dh2+mNbQir/QNTVBG3h/QdZBpns7mZ0RYbLRBgGABPbpU9351AgYy7SJf1WaeVwMrBFPQ==' },
    { name: 'ThirdPartyNotices.txt', url: 'https://raw.githubusercontent.com/microsoft/onnxruntime/v1.21.0/ThirdPartyNotices.txt', sha256: '8c06e8cff286a4a117b3b246a4c7da68428a144af757823db50e3d6520941ec6', size: 316114 },
    { name: 'LICENSE', url: 'https://raw.githubusercontent.com/microsoft/onnxruntime/v1.21.0/LICENSE', sha256: '2f07c72751aed99790b8a4869cf2311df85a860b22ded05fa22803587a48922c', size: 1073 },
  ],
};

/** The namespace and methods the engine serves, as the core's contract will list them (C6). */
export const IPC = { speech: ['voices', 'say', 'cancel', 'status'] };

/**
 * What the engine says of itself for the compatibility contract
 * (addons-contract.json in Office, C10): the speech API it serves (the
 * contract's speech.api), the engine host API it needs (engineHost.api:
 * context.addons.list and find, context.electron.utilityProcess, win32-x64,
 * N-API 3 for the binding copied below), and the data formats it reads.
 * The engine is usable in Office X only when these equal X's.
 */
export const SPEECH_API = 1;
export const HOST_API = 1;
export const READS = { model: [1], pronunciation: [1], voice: [1] };

const OUR_FILES = ['main.mjs', 'worker.mjs', 'speaker.mjs', 'runner.mjs', 'vocab.json', 'text/en.mjs', 'text/en-numbers.mjs', 'text/segment.mjs'];

/** Specifiers named by import, export from, import(), require() and createRequire(...)() with a plain string. */
const SPECIFIERS = /(?:\bimport\s*(?:[\w*{}\s,$]+\s*from\s*)?|\bexport\s*[\w*{}\s,$]+\s*from\s*|\bimport\s*\(\s*|\brequire\s*\(\s*|\bcreateRequire\((?:[^()]|\([^()]*\))*\)\s*\(\s*)(['"])([^'"\n]+)\1/g;

const isBare = (s) => !/^(\.{1,2}\/|\/|[a-zA-Z]:[\\/]|node:|file:|data:)/.test(s);
const packageOf = (s) => (s.startsWith('@') ? s.split('/').slice(0, 2).join('/') : s.split('/')[0]);

/**
 * Every bare import in the engine resolves inside its own folder (Office's
 * review, finding C): a Node built-in, or a package in a node_modules at or
 * below the file's folder and no higher than the engine's. Office refuses
 * an import that leaves the folder at run time; this refuses the build,
 * so an optional require of a package the engine does not carry (one that
 * would climb to C:\node_modules) is found before release. `electron` is not
 * one: the engine is handed what it may have of Electron in its context.
 * @param {string} dir  the built engine's folder
 * @returns {string[]}  faults, each naming the file and the specifier
 */
export function bareImportFaults(dir) {
  const root = path.resolve(dir);
  const faults = [];
  const builtIn = new Set(builtinModules.flatMap((m) => [m, m.split('/')[0]]));
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      if (!/\.(m?js|cjs)$/.test(e.name)) continue;
      const text = fs.readFileSync(full, 'utf8');
      for (const m of text.matchAll(SPECIFIERS)) {
        const spec = m[2];
        if (!isBare(spec) || builtIn.has(spec) || builtIn.has(packageOf(spec))) continue;
        const name = packageOf(spec);
        let at = path.dirname(full);
        let found = false;
        for (;;) {
          if (fs.existsSync(path.join(at, 'node_modules', ...name.split('/'), 'package.json'))) { found = true; break; }
          if (at === root) break;
          const up = path.dirname(at);
          if (up === at || !up.startsWith(root)) break;
          at = up;
        }
        if (!found) faults.push(`${path.relative(root, full).replace(/\\/g, '/')} imports ${spec}, which the engine does not carry`);
      }
    }
  };
  walk(root);
  return faults;
}

/** An npm tarball checked by its integrity (sha512), fetched once into the cache. */
async function fetchTarball(file) {
  const dest = path.join(CACHE, ORT.id, file.name);
  const want = file.integrity.replace(/^sha512-/, '');
  const ok = () => fs.existsSync(dest) && crypto.createHash('sha512').update(fs.readFileSync(dest)).digest('base64') === want;
  if (ok()) return dest;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(file.url);
  if (!res.ok) throw new Error(`${file.name}: HTTP ${res.status}`);
  fs.writeFileSync(`${dest}.part`, Buffer.from(await res.arrayBuffer()));
  fs.renameSync(`${dest}.part`, dest);
  if (!ok()) { fs.rmSync(dest, { force: true }); throw new Error(`${file.name}: not the pinned package`); }
  return dest;
}

/** Unpacks a tarball (npm's "package/" folder) into a fresh folder. */
function unpack(tgz, into) {
  fs.rmSync(into, { recursive: true, force: true });
  fs.mkdirSync(into, { recursive: true });
  // A relative path: GNU tar (Git's, on Windows) reads "D:" in a path as a remote host.
  execFileSync('tar', ['-xzf', path.relative(into, tgz).split(path.sep).join('/')], { cwd: into, stdio: 'ignore' });
  return path.join(into, 'package');
}

function copy(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function copyTree(from, to, keep = () => true) {
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name);
    const b = path.join(to, e.name);
    if (e.isDirectory()) copyTree(a, b, keep);
    else if (keep(a)) copy(a, b);
  }
}

export async function buildEngine(out, version) {
  const dir = path.join(out, 'speech-engine');
  fs.rmSync(dir, { recursive: true, force: true });
  for (const f of OUR_FILES) copy(path.join(ENGINE, ...f.split('/')), path.join(dir, ...f.split('/')));
  fs.writeFileSync(path.join(dir, 'package.json'), `${JSON.stringify({ name: 'rutba-office-speech-engine', private: true, type: 'module' }, null, 2)}\n`);

  const work = path.join(CACHE, ORT.id, 'unpacked');
  const node = unpack(await fetchTarball(ORT.files[0]), path.join(work, 'node'));
  const common = unpack(await fetchTarball(ORT.files[1]), path.join(work, 'common'));
  const nm = path.join(dir, 'node_modules');
  // onnxruntime-node: its JavaScript and the Windows x64 binary, no DirectML, no scripts.
  const nodePkg = JSON.parse(fs.readFileSync(path.join(node, 'package.json'), 'utf8'));
  delete nodePkg.scripts; delete nodePkg.dependencies['tar']; delete nodePkg.dependencies['global-agent'];
  fs.mkdirSync(path.join(nm, 'onnxruntime-node'), { recursive: true });
  fs.writeFileSync(path.join(nm, 'onnxruntime-node', 'package.json'), `${JSON.stringify(nodePkg, null, 2)}\n`);
  copyTree(path.join(node, 'dist'), path.join(nm, 'onnxruntime-node', 'dist'), (f) => f.endsWith('.js'));
  for (const f of ['onnxruntime_binding.node', 'onnxruntime.dll']) copy(path.join(node, 'bin', 'napi-v3', 'win32', 'x64', f), path.join(nm, 'onnxruntime-node', 'bin', 'napi-v3', 'win32', 'x64', f));
  // onnxruntime-common: CommonJS only, which onnxruntime-node requires.
  const commonPkg = JSON.parse(fs.readFileSync(path.join(common, 'package.json'), 'utf8'));
  delete commonPkg.scripts;
  fs.mkdirSync(path.join(nm, 'onnxruntime-common'), { recursive: true });
  fs.writeFileSync(path.join(nm, 'onnxruntime-common', 'package.json'), `${JSON.stringify(commonPkg, null, 2)}\n`);
  copyTree(path.join(common, 'dist', 'cjs'), path.join(nm, 'onnxruntime-common', 'dist', 'cjs'), (f) => f.endsWith('.js') || f.endsWith('.json'));
  fs.rmSync(work, { recursive: true, force: true });

  for (const f of ORT.files.slice(2)) {
    const { dest } = await fetchFile(ORT, f);
    copy(dest, path.join(dir, f.name === 'LICENSE' ? 'LICENSE-onnxruntime.txt' : 'ThirdPartyNotices-onnxruntime.txt'));
  }
  // The engine's own code is Tech Style's (the repository's LICENSE); ONNX Runtime keeps its MIT licence and notices.
  writeLicence(dir);

  const manifest = {
    id: 'speech-engine',
    kind: 'engine',
    format: 1,
    version,
    name: 'Speech engine',
    status: 'draft',
    tags: [],
    requires: [],
    provides: ['speech-engine'],
    main: 'main.mjs',
    ipc: IPC,
    events: [],
    speechApi: SPEECH_API,
    host: HOST_API,
    reads: READS,
    platform: 'win32-x64',
    licence: ownLicence({ spdx: 'MIT', files: ['LICENSE-onnxruntime.txt', 'ThirdPartyNotices-onnxruntime.txt'] }),
  };
  fs.writeFileSync(path.join(dir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const allowed = (f) => /\.(mjs|js|json|node|dll|txt)$/.test(f) && !/DirectML/i.test(f);
  const faults = [...checkManifest(manifest, { office: version }), ...checkFiles(dir, manifest, allowed), ...checkLicence(dir, manifest), ...bareImportFaults(dir)];
  if (faults.length) throw new Error(`speech-engine: ${faults.join('; ')}`);
  return { dir, manifest };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { version } = officePin();
  const { dir } = await buildEngine(path.join(SPEECH, 'dist', `v${version}`), version);
  let bytes = 0;
  const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else bytes += fs.statSync(p).size; } };
  walk(dir);
  console.log(`speech-engine for Office ${version}: ${(bytes / 1048576).toFixed(1)} MB in ${dir}; sign it with Office's release key`);
}
