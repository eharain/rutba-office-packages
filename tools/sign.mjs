// Signing for every pack kind in this repository: the envelope Rutba Office
// reads beside a pack (`<id>.pack.json`), made exactly as Office's own
// tools/make-packs.mjs makes it, so Office's checkPack verifies it unchanged.
//
//   envelope = { format: 'rutba-office-pack', keyId, manifest, signature }
//   signature = Ed25519 over canonical(manifest), base64
//   keyId     = the first 16 hex digits of the SHA-256 of the public key (DER, SPKI)
//   each file in manifest.files: { size, sha512 (base64) }
//
// Which key signs which kind is the point of trust: data kinds (language,
// dictionary, font, model, pronunciation, voice) with the packages keys, the
// speech engine with Rutba Office's release key, by Office's release tooling.
// The kind is inside the signed manifest, so a data key's signature on a
// manifest that says `engine` is refused by Office.
//
// Keys never live in this repository and are never handed to GitHub Actions.
//
//   node tools/sign.mjs --key <private.pem> <pack-folder> ...
//   node tools/sign.mjs --make-key <folder outside the repository>

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { canonical, DATA_KINDS, CODE_KINDS } from './pack-core.mjs';

export const PACK_FORMAT = 'rutba-office-pack';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** A key's short name, as Office's packs.js keyIdOf() gives it. */
export function keyIdOf(key) {
  const pub = key.type === 'private' ? crypto.createPublicKey(key) : key;
  return crypto.createHash('sha256').update(pub.export({ format: 'der', type: 'spki' })).digest('hex').slice(0, 16);
}

/** SHA-512 of a file, base64, read in pieces so a model file is never held whole. */
export function sha512Of(file) {
  const h = crypto.createHash('sha512');
  const fd = fs.openSync(file, 'r');
  try {
    const buf = Buffer.alloc(1 << 20);
    let n;
    while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n));
  } finally {
    fs.closeSync(fd);
  }
  return h.digest('base64');
}

/** Every file in a pack folder, as the manifest lists them: forward slashes, sorted. */
export function listFiles(dir, rel = '') {
  const out = [];
  for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isSymbolicLink()) throw new Error(`${p} is a link; a pack holds plain files only`);
    if (e.isDirectory()) out.push(...listFiles(dir, p));
    else out.push(p);
  }
  return out.sort();
}

/** The files entry of a manifest for a pack folder: each file's size and SHA-512. */
export function filesOf(dir) {
  const files = {};
  for (const p of listFiles(dir)) {
    const full = path.join(dir, ...p.split('/'));
    files[p] = { size: fs.statSync(full).size, sha512: sha512Of(full) };
  }
  return files;
}

/** The envelope for a manifest. */
export function signManifest(manifest, privateKey) {
  return {
    format: PACK_FORMAT,
    keyId: keyIdOf(privateKey),
    manifest,
    signature: crypto.sign(null, Buffer.from(canonical(manifest), 'utf8'), privateKey).toString('base64'),
  };
}

/** True when the envelope's signature holds for one of the public keys given. */
export function verifyEnvelope(envelope, publicKeys) {
  if (envelope?.format !== PACK_FORMAT || typeof envelope.signature !== 'string') return false;
  const bytes = Buffer.from(canonical(envelope.manifest), 'utf8');
  const sig = Buffer.from(envelope.signature, 'base64');
  return publicKeys.some((k) => { try { return crypto.verify(null, bytes, k, sig); } catch { return false; } });
}

/**
 * Signs a built pack folder: reads its manifest.json, fills in `files` from
 * the folder, and writes `<id>.pack.json` beside the folder.
 * @param {string} dir      the pack folder, named by its id
 * @param {crypto.KeyObject} privateKey
 * @param {{ codeKey?: boolean }} o  true when the key is the release key (engine only)
 */
export function signPack(dir, privateKey, { codeKey = false } = {}) {
  const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
  if (manifest.id !== path.basename(dir)) throw new Error(`${dir}: the folder is not named by its id ${manifest.id}`);
  const isCode = CODE_KINDS.includes(manifest.kind);
  if (!isCode && !DATA_KINDS.includes(manifest.kind)) throw new Error(`${manifest.id}: kind ${manifest.kind} is not one this repository signs`);
  if (isCode !== codeKey) throw new Error(`${manifest.id}: a ${manifest.kind} pack is signed with ${isCode ? 'the release key' : 'a packages key'}, not this one`);
  manifest.files = filesOf(dir);
  const envelope = signManifest(manifest, privateKey);
  const out = path.join(path.dirname(dir), `${manifest.id}.pack.json`);
  fs.writeFileSync(out, `${JSON.stringify(envelope, null, 2)}\n`);
  return { out, envelope };
}

/** A new Ed25519 key pair, written outside this repository only. */
export function makeKey(folder) {
  const where = path.resolve(folder);
  if (where === ROOT || where.startsWith(ROOT + path.sep)) throw new Error('a key is never written inside this repository');
  fs.mkdirSync(where, { recursive: true });
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');
  const id = keyIdOf(publicKey);
  fs.writeFileSync(path.join(where, `packages-${id}.private.pem`), privateKey.export({ format: 'pem', type: 'pkcs8' }), { mode: 0o600, flag: 'wx' });
  fs.writeFileSync(path.join(where, `packages-${id}.public.pem`), publicKey.export({ format: 'pem', type: 'spki' }), { flag: 'wx' });
  return id;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args[0] === '--make-key') {
    console.log(`made key ${makeKey(args[1] || '.')}: keep the private half off this computer's shared folders and out of GitHub`);
  } else if (args[0] === '--key' && args[1]) {
    const key = crypto.createPrivateKey(fs.readFileSync(args[1]));
    const codeKey = args.includes('--release-key');
    for (const dir of args.slice(2).filter((a) => a !== '--release-key')) {
      const { out, envelope } = signPack(path.resolve(dir), key, { codeKey });
      console.log(`${envelope.manifest.id} ${envelope.manifest.version}${envelope.manifest.revision ? ` r${envelope.manifest.revision}` : ''}: ${Object.keys(envelope.manifest.files).length} files, key ${envelope.keyId} -> ${out}`);
    }
  } else {
    console.error('node tools/sign.mjs --key <private.pem> [--release-key] <pack-folder> ...\nnode tools/sign.mjs --make-key <folder outside the repository>');
    process.exit(2);
  }
}
