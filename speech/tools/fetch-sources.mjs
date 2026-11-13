// Fetches every file the speech packs are built from, by the URL and SHA-256
// pinned in each pack's source.json, into a cache git does not track.
//
//   node tools/fetch-sources.mjs [pack-id ...]     all packs when none named
//   SPEECH_CACHE=<dir>                              default: speech/.cache, ignored by git
//
// A file already in the cache with the right hash is kept. A download is
// written to <name>.part, hashed as it streams, and renamed only when its
// hash matches; a wrong hash deletes it and fails. Nothing fetched is
// committed: the model and CMUdict are other people's files, pinned here.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const SPEECH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PACKS = path.join(SPEECH, 'packs');
export const CACHE = process.env.SPEECH_CACHE || path.join(SPEECH, '.cache');

export function sources(ids = []) {
  return fs.readdirSync(PACKS)
    .filter((id) => !ids.length || ids.includes(id))
    .filter((id) => fs.existsSync(path.join(PACKS, id, 'source.json')))
    .map((id) => JSON.parse(fs.readFileSync(path.join(PACKS, id, 'source.json'), 'utf8')));
}

export function cachedPath(pack, file) {
  return path.join(CACHE, pack.id, file.name);
}

function sha256Of(file) {
  const h = crypto.createHash('sha256');
  const fd = fs.openSync(file, 'r');
  try {
    const buf = Buffer.alloc(1 << 20);
    let n;
    while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n));
  } finally {
    fs.closeSync(fd);
  }
  return h.digest('hex');
}

export async function fetchFile(pack, file) {
  const dest = cachedPath(pack, file);
  if (fs.existsSync(dest) && sha256Of(dest) === file.sha256) return { dest, fetched: false };
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const part = `${dest}.part`;
  const res = await fetch(file.url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${pack.id}/${file.name}: HTTP ${res.status} from ${file.url}`);
  const h = crypto.createHash('sha256');
  let size = 0;
  const body = Readable.fromWeb(res.body);
  body.on('data', (c) => { h.update(c); size += c.length; });
  await pipeline(body, fs.createWriteStream(part));
  const got = h.digest('hex');
  if (got !== file.sha256 || (file.size && size !== file.size)) {
    fs.rmSync(part, { force: true });
    throw new Error(`${pack.id}/${file.name}: expected sha256 ${file.sha256} (${file.size} bytes), got ${got} (${size} bytes)`);
  }
  fs.renameSync(part, dest);
  return { dest, fetched: true };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let failed = 0;
  for (const pack of sources(process.argv.slice(2))) {
    for (const file of pack.files || []) {
      try {
        const { dest, fetched } = await fetchFile(pack, file);
        console.log(`${fetched ? 'fetched' : 'cached '} ${pack.id}/${file.name} -> ${dest}`);
      } catch (e) {
        failed++;
        console.error(String(e.message || e));
      }
    }
  }
  process.exit(failed ? 1 : 0);
}
