// A small zip writer and reader for the packs' release files.
//
// Each released pack is also published as one .zip beside the feed, for a
// computer with no network: Rutba Office's Voices and languages adds it with
// Add from a file (L5), checking it exactly as it checks a fetched pack. The
// zip holds the signed envelope and the pack's folder, nothing else, and is
// the same bytes every time it is made from the same files: every entry is
// dated 1980-01-01, in name order, deflated only where that makes it smaller.
import zlib from 'node:zlib';

const LOCAL = 0x04034b50;
const CENTRAL = 0x02014b50;
const END = 0x06054b50;
const DOS_DATE = (0 << 9) | (1 << 5) | 1; // 1980-01-01
const DOS_TIME = 0;
const LIMIT = 0xffffffff;

/**
 * @param {{ name: string, data: Buffer }[]} entries
 * @returns {Buffer}
 */
export function writeZip(entries) {
  const sorted = [...entries].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const { name, data } of sorted) {
    if (!name || name.startsWith('/') || name.includes('\\') || name.split('/').some((p) => !p || p === '.' || p === '..')) throw new Error(`not a name a pack's zip may hold: ${name}`);
    const raw = Buffer.isBuffer(data) ? data : Buffer.from(data);
    if (raw.length >= LIMIT) throw new Error(`${name} is too large for a zip without zip64`);
    const deflated = zlib.deflateRawSync(raw, { level: 9 });
    const stored = deflated.length >= raw.length;
    const body = stored ? raw : deflated;
    const crc = zlib.crc32(raw) >>> 0;
    const nameBuf = Buffer.from(name, 'utf8');
    const head = Buffer.alloc(30);
    head.writeUInt32LE(LOCAL, 0);
    head.writeUInt16LE(20, 4);
    head.writeUInt16LE(0x0800, 6); // names in UTF-8
    head.writeUInt16LE(stored ? 0 : 8, 8);
    head.writeUInt16LE(DOS_TIME, 10);
    head.writeUInt16LE(DOS_DATE, 12);
    head.writeUInt32LE(crc, 14);
    head.writeUInt32LE(body.length, 18);
    head.writeUInt32LE(raw.length, 22);
    head.writeUInt16LE(nameBuf.length, 26);
    head.writeUInt16LE(0, 28);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(CENTRAL, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(stored ? 0 : 8, 10);
    central.writeUInt16LE(DOS_TIME, 12);
    central.writeUInt16LE(DOS_DATE, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt32LE(offset, 42);
    locals.push(head, nameBuf, body);
    centrals.push(central, nameBuf);
    offset += head.length + nameBuf.length + body.length;
    if (offset >= LIMIT) throw new Error('the pack is too large for a zip without zip64');
  }
  const dir = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(END, 0);
  end.writeUInt16LE(sorted.length, 8);
  end.writeUInt16LE(sorted.length, 10);
  end.writeUInt32LE(dir.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, dir, end]);
}

/**
 * The entries of a zip this writer made (or any plain one): for the checks.
 * @returns {{ name: string, data: Buffer }[]}
 */
export function readZip(buf) {
  let end = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) if (buf.readUInt32LE(i) === END) { end = i; break; }
  if (end < 0) throw new Error('not a zip');
  const count = buf.readUInt16LE(end + 10);
  let at = buf.readUInt32LE(end + 16);
  const out = [];
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(at) !== CENTRAL) throw new Error('a broken zip directory');
    const method = buf.readUInt16LE(at + 10);
    const crc = buf.readUInt32LE(at + 16);
    const size = buf.readUInt32LE(at + 20);
    const nameLen = buf.readUInt16LE(at + 28);
    const extra = buf.readUInt16LE(at + 30);
    const comment = buf.readUInt16LE(at + 32);
    const local = buf.readUInt32LE(at + 42);
    const name = buf.toString('utf8', at + 46, at + 46 + nameLen);
    const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
    const body = buf.subarray(start, start + size);
    const data = method === 0 ? Buffer.from(body) : zlib.inflateRawSync(body);
    if ((zlib.crc32(data) >>> 0) !== crc) throw new Error(`${name}: its check does not hold`);
    out.push({ name, data });
    at += 46 + nameLen + extra + comment;
  }
  return out;
}
