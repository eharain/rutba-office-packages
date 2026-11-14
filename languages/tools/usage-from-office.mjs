// Reads a copy of the Rutba Office code (never the working checkout while a
// release runs) and writes labels.json: for every id in ids.json, where the
// code shows it and what it is, by the model in MODEL.md.
//
//   node tools/usage-from-office.mjs <office copy> [<commit>]
//
// Everything here comes from the code and the English, by rule, so it can be
// run again whenever the code changes.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const office = path.resolve(process.argv[2] || path.join(ROOT, 'work/office-src'));
const commit = process.argv[3] || execFileSync('git', ['-C', office, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const REPO = 'https://github.com/eharain/Rutba-Office';
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'ids.json'), 'utf8'));

// ------------------------------------------------------------ the code's calls

const SOURCES = ['packages/office-ui/src', 'apps/desktop/renderer', 'packages/office-shell/src/electron'];
const SHARED_IMPORT = /import\s*\{[^}]*\b(?:t|tn|msg)\b[^}]*\}\s*from\s*['"](?:@rutba\/office-ui(?:\/messages)?|\.\/messages\.js|\.\.\/messages\.js|\.\/words\.js)['"]/;
const PARTS = { locker: 'locker-words.js', talk: 'talk-words.js', colour: 'colour-words.js', 'sheets-find': 'sheets-words.js' };
const STR = String.raw`'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"`;
const unescape = (s) => s.replace(/\\(n|.)/g, (m, c) => (c === 'n' ? '\n' : c));

// Office from 2.26.0 names a label by its meaning key (D-2026-11-14-16): t('common.close'),
// tn(count, 'common.count-file', values). Each file is read with its calls by key written back as
// the calls by English they were, line for line (Office's tests/label-english.js asEnglish), so
// every use, its role and its space come out as they did when the code wrote the English. The
// definitions are Office's catalogues/labels.json; an Office without it is read as it is.
const labelsFile = path.join(office, 'packages/office-ui/src/catalogues/labels.json');
const KEYS = fs.existsSync(labelsFile) ? JSON.parse(fs.readFileSync(labelsFile, 'utf8')).labels : {};
const isKey = (k) => Object.prototype.hasOwnProperty.call(KEYS, k);
const KEY_STR = String.raw`'((?:[^'\\\n]|\\.)*)'`;
const quoted = (w) => `'${w.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
const unkey = (k) => k.replace(/\\(n|.)/g, (m, c) => (c === 'n' ? '\n' : c));
function asEnglish(text) {
  if (!Object.keys(KEYS).length) return text;
  return text
    .replace(new RegExp(String.raw`(?<![\w.$])tn\(([^'"]*?),\s*${KEY_STR}`, 'g'), (whole, count, k) => {
      const key = unkey(k);
      if (!isKey(key) || !KEYS[key].plural) return whole;
      return `tn(${count}, ${quoted(KEYS[key].english)}, ${quoted(KEYS[key].plural)}`;
    })
    .replace(new RegExp(String.raw`(?<![\w.$])(t|msg)\((\s*)${KEY_STR}`, 'g'), (whole, fn, space, k) => {
      const key = unkey(k);
      return isKey(key) ? `${fn}(${space}${quoted(KEYS[key].english)}` : whole;
    });
}

const byKey = new Map();
for (const l of registry.labels) for (const p of l.parts) byKey.set(`${p}\u0000${l.english}`, l);

function files(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files(p, out); else if (e.name.endsWith('.js')) out.push(p);
  }
  return out;
}

/** The argument text after the literal, up to the call's closing bracket. */
function argsAfter(text, from) {
  let depth = 1;
  let i = from;
  let quote = null;
  for (; i < text.length && i < from + 600; i += 1) {
    const c = text[i];
    if (quote) { if (c === '\\') i += 1; else if (c === quote) quote = null; continue; }
    if (c === '\'' || c === '"' || c === '`') quote = c;
    else if (c === '(' || c === '{' || c === '[') depth += 1;
    else if (c === ')' || c === '}' || c === ']') { depth -= 1; if (depth === 0) break; }
  }
  return text.slice(from, i);
}

const uses = new Map(); // id -> [{ file, line, before, args, after }]
for (const dir of SOURCES) {
  for (const abs of files(path.join(office, dir))) {
    const text = asEnglish(fs.readFileSync(abs, 'utf8'));
    const file = path.relative(office, abs).split(path.sep).join('/');
    const part = Object.entries(PARTS).find(([, w]) => new RegExp(String.raw`from\s*['"](?:\./|\.\./)${w.replace('.', '\\.')}['"]`).test(text))?.[0];
    if (!part && !SHARED_IMPORT.test(text)) continue;
    const lineStarts = [0];
    for (let i = 0; i < text.length; i += 1) if (text[i] === '\n') lineStarts.push(i + 1);
    const lineOf = (pos) => { let lo = 0, hi = lineStarts.length - 1; while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (lineStarts[mid] <= pos) lo = mid; else hi = mid - 1; } return lo + 1; };
    const note = (english, pos, end) => {
      const label = byKey.get(`${part || 'shared'}\u0000${english}`) || byKey.get(`shared\u0000${english}`);
      if (!label) return;
      const line = lineOf(pos);
      const before = text.slice(Math.max(0, lineStarts[Math.max(0, line - 3)]), pos);
      const lineEnd = text.indexOf('\n', end);
      const list = uses.get(label.id) || [];
      const use = { file, line, before, args: argsAfter(text, end), after: text.slice(end, lineEnd < 0 ? text.length : lineEnd) };
      // A list that only marks words for the catalogue: the words show
      // through t(variable) elsewhere. Its comment says where.
      if (/-words\.js$/.test(file) && /^\s*$/.test(text.slice(lineStarts[line - 1], pos))) {
        use.listed = true;
        for (let l = line - 1; l >= 1; l -= 1) {
          const s = text.slice(lineStarts[l - 1], lineStarts[l]).trim();
          if (s.startsWith('//')) { use.shownIn = s.replace(/^\/\/\s*/, ''); break; }
          if (/^(export|const|\]|\}|\[)/.test(s)) break;
        }
      }
      list.push(use);
      uses.set(label.id, list);
    };
    for (const m of text.matchAll(new RegExp(String.raw`(?<![\w.$])(?:t|msg)\(\s*(?:${STR})`, 'g'))) note(unescape(m[1] ?? m[2]), m.index, m.index + m[0].length);
    for (const m of text.matchAll(new RegExp(String.raw`(?<![\w.$])tn\([^'"]*?,\s*(?:${STR})\s*,\s*(?:${STR})`, 'g'))) note(unescape(m[1] ?? m[2]), m.index, m.index + m[0].length);
  }
}

// Listed words: find where the packages and the main process write them out,
// so each has the place it really comes from.
{
  const listed = new Map();
  for (const [id, list] of uses) if (list.length && list.every((u) => u.listed)) {
    const label = registry.labels.find((l) => l.id === id);
    listed.set(label.english, id);
  }
  const roots = ['packages', 'apps/desktop/main', 'apps/desktop/renderer'];
  for (const r of roots) for (const abs of files(path.join(office, r))) {
    const file = path.relative(office, abs).split(path.sep).join('/');
    if (/catalogues\/|-translations\.js$|-words\.js$|\/test|\.test\.js$/.test(file)) continue;
    const text = asEnglish(fs.readFileSync(abs, 'utf8'));
    let line = 1;
    let last = 0;
    for (const m of text.matchAll(new RegExp(STR, 'g'))) {
      const english = unescape(m[1] ?? m[2] ?? '');
      const id = listed.get(english);
      if (!id) continue;
      for (let i = last; i < m.index; i += 1) if (text.charCodeAt(i) === 10) line += 1;
      last = m.index;
      const lineStart = text.lastIndexOf('\n', m.index) + 1;
      const list = uses.get(id);
      if (list.filter((u) => u.fromTable).length >= 12) continue;
      list.push({ file, line, before: text.slice(Math.max(0, lineStart - 200), m.index), args: '', after: '', fromTable: true });
    }
  }
}

// A listed word whose list names the source file: find its line there by the
// longest piece of its English that has no placeholder.
for (const [id, list] of uses) {
  if (!list.every((u) => u.listed || u.fromTable) || list.some((u) => u.fromTable)) continue;
  const label = registry.labels.find((l) => l.id === id);
  const piece = label.english.split(/\{\w+\}/).map((s) => s.trim()).sort((a, b) => b.length - a.length)[0];
  for (const u of list) {
    const src = /^((?:packages|apps)\/[\w./-]+\.js)/.exec(u.shownIn || '')?.[1];
    if (!src || !piece || piece.length < 4 || !fs.existsSync(path.join(office, src))) continue;
    const lines = fs.readFileSync(path.join(office, src), 'utf8').split('\n');
    const at = lines.findIndex((s) => s.includes(piece));
    if (at >= 0) list.push({ file: src, line: at + 1, before: lines[at].slice(0, lines[at].indexOf(piece)), args: '', after: '', fromTable: true });
  }
}

// ------------------------------------------------------------ role, intent

/** The property a call's result is given to: label=, title:, placeholder= ..., through ternaries and ||. */
const PROP_ROLE = {
  label: 'label', text: 'label', name: 'label', value: 'label', short: 'label', long: 'label',
  title: 'tooltip', tooltip: 'tooltip', tip: 'tooltip', screentip: 'tooltip', supertip: 'tooltip', 'data-tip': 'tooltip',
  placeholder: 'hint', 'aria-label': 'a11y', arialabel: 'a11y', 'aria-description': 'a11y', alt: 'a11y',
  heading: 'heading', header: 'heading', caption: 'caption', legend: 'heading', summary: 'heading',
  message: 'message', description: 'message', desc: 'message', help: 'message', hint: 'message', detail: 'message', body: 'message', note: 'message', lead: 'message', empty: 'message', sub: 'message', subtitle: 'message',
  error: 'error', status: 'status', confirm: 'message', question: 'message', prompt: 'message',
  group: 'group', tab: 'tab', column: 'column', header_: 'column',
};
function propOf(near) {
  const m = /([A-Za-z][\w-]*)\s*(?:=\{|:)\s*(?:[^;{}<>]|\{[^{}]*\})*$/.exec(near);
  return m ? m[1].toLowerCase() : null;
}
/** The HTML or component element whose text the call is. */
const ELEMENT_ROLE = { p: 'message', div: 'message', small: 'message', em: 'message', dd: 'message', span: 'label', strong: 'label', b: 'label', label: 'label', li: 'label', dt: 'label', th: 'column', td: 'text', button: 'button', option: 'option', legend: 'heading', summary: 'heading', h1: 'heading', h2: 'heading', h3: 'heading', h4: 'heading', h5: 'heading', h6: 'heading', a: 'link' };

/** The control a use sits in, from the code just before the call. */
function roleOf(u) {
  if (u.listed) return u.listedRole || 'text';
  const near = u.before.slice(-200);
  const tail = near.replace(/\s+$/, '');
  const comp = (/<([A-Z]\w*|[a-z]+)\b[^<>]*$/.exec(near) || [])[1] || '';
  const inside = (/<([a-z][\w]*|[A-Z]\w*)\b[^<>]*>\s*(?:[^<>{}]*\{[^{}]*\?)?\s*\{?\s*$/.exec(near) || [])[1] || '';
  if (/(throw\s+new\s+\w*Error\(|reject\(|\bfail\w*\(|setError\(|error\s*[:=]\s*|\bErr\w*\()$/.test(tail)) return 'error';
  if (/aria-?label["']?\s*[:=]\s*\{?$|ariaLabel\s*[:=]\s*\{?$/i.test(tail)) return 'a11y';
  if (/placeholder\s*[:=]\s*\{?$/i.test(tail)) return 'hint';
  if (/\b(title|tooltip|tip|screentip|supertip)\s*[:=]\s*\{?$/i.test(tail)) return /Dialog|Modal|Sheet|Pane|Window|Panel/.test(comp) ? 'caption' : 'tooltip';
  if (/\b(heading|header|caption)\s*[:=]\s*\{?$|<h[1-6][^>]*>\s*\{?$/i.test(tail)) return 'heading';
  if (/\b(set)?(status|toast|notify|announce|flash|banner|say)\w*\(\s*$|\bstatus\s*:\s*$/i.test(tail)) return 'status';
  if (/\b(confirm|ask)\w*\(\s*$/i.test(tail)) return 'message';
  if (/<Tab\b|\btab\w*\s*[:(=]/i.test(near) && /\blabel\s*[:=]\s*\{?$/.test(tail) && /ribbon/.test(u.file)) return 'tab';
  if (/^Group$/.test(comp)) return 'group';
  if (/^(Button|IconButton|SplitButton|ToolButton|Btn)$/i.test(comp)) return 'button';
  if (/^(Check|Checkbox|Toggle|Switch)/i.test(comp)) return 'checkbox';
  if (/^(option|Radio|Choice|Select)/i.test(comp)) return 'option';
  if (/^(p|div|span|small|Note|Hint|Help|Message|Empty)$/i.test(comp)) return 'message';
  if (/^(th|Column|Col)$/i.test(comp)) return 'column';
  if (/\blabel\s*[:=]\s*\{?$|\btext\s*:\s*$|\bname\s*:\s*$/.test(tail)) {
    if (/menu\.open|items\s*[:=]|\bmenu\b|contextMenu|submenu/i.test(u.before)) return 'menuitem';
    if (/ribbon/.test(u.file)) return 'button';
    return 'label';
  }
  if (/\b(description|desc|help|explain|detail|body|message|note|hint)\s*[:=]\s*\{?$/i.test(tail)) return 'message';
  const prop = propOf(near);
  if (prop && PROP_ROLE[prop]) {
    const r = PROP_ROLE[prop];
    if (r === 'label' && /menu\.open|items\s*[:=]|contextMenu|submenu/i.test(u.before)) return 'menuitem';
    if (r === 'label' && /ribbon/.test(u.file)) return 'button';
    if (r === 'tooltip' && /Dialog|Modal|Pane|Window|Panel/.test(comp)) return 'caption';
    return r;
  }
  if (inside) {
    if (/^(Button|IconButton|SplitButton)$/.test(inside)) return 'button';
    if (ELEMENT_ROLE[inside]) return ELEMENT_ROLE[inside];
    if (/^[A-Z]/.test(inside)) return /Chip|Badge|Tag/.test(inside) ? 'status' : 'label';
  }
  if (/\breturn\s*\(?\s*$|=>\s*\(?\s*$/.test(tail)) return 'text';
  return 'text';
}

const PROMINENCE = { tab: 3, group: 3, button: 3, menuitem: 3, caption: 3, heading: 3, error: 3, checkbox: 2, option: 2, label: 2, column: 2, hint: 2, status: 2, link: 2, message: 2, tooltip: 1, a11y: 1, sample: 1, text: 1 };
const COMPACT = new Set(['tab', 'group', 'button', 'menuitem', 'checkbox', 'option', 'label', 'column', 'hint', 'link']);
const VERBS = new Set('accept add align allow apply archive arrange attach back block bring browse cancel change check choose clear close collapse compare compress connect continue convert copy create crop cut decline delete deselect disconnect discard dismiss download draw duplicate edit email empty enable disable end enter erase exit expand export fill filter find finish fit flip forward freeze go group hide highlight import indent insert install invite join keep leave link lock log make manage mark merge minimise maximise move mute new next open paste pause pick pin play preview print protect publish read record redact redo refresh reject reload remove rename reorder repeat replace reply report reset resize restore resume retry rotate run save scan search select send set share show sign skip sort split start stop subscribe switch sync take test translate trim turn undo unfreeze ungroup unlink unlock unmute unpin update upload use verify view wrap zoom'.split(' '));

function intentOf(english, role) {
  const e = english.replace(/\{\w+\}/g, 'X').trim();
  const words = e.split(/\s+/);
  const first = words[0].toLowerCase().replace(/[^a-z]/g, '');
  if (role === 'sample') return { intent: 'sample' };
  if (/\?\s*$/.test(e)) return { intent: 'question' };
  const errorKind = (() => {
    if (/(not found|no such|cannot find|can't find|could not find|couldn't find|is missing|are missing)/i.test(e)) return 'not-found';
    if (/(not enough|too (big|large|long|many|small)|exceeds|over the limit|no room|is full|out of space)/i.test(e)) return 'not-enough';
    if (/(not available|unavailable|is offline|unreachable|no connection|can't reach|cannot reach|could not reach|couldn't reach|did not answer|timed out)/i.test(e)) return 'unavailable';
    if (/(not allowed|permission|denied|is blocked|read-only|password is wrong|not signed in)/i.test(e)) return 'not-allowed';
    if (/(invalid|not valid|isn't a valid|is not a valid|must be|is wrong|incorrect|not a (cell|range|number|date|name|file))/i.test(e)) return 'invalid';
    if (/(failed|went wrong|did not work|didn't work)/i.test(e)) return 'failed';
    if (/^(could not|couldn't|cannot|can't|unable to)\b/i.test(e)) return 'cannot';
    return null;
  })();
  if (role === 'error' || (errorKind && !COMPACT.has(role))) return { intent: 'error', kind: errorKind || 'other' };
  if (/^(warning|careful)\b|can'?t be undone|cannot be undone|will be (lost|deleted|removed|replaced|overwritten)|are (lost|deleted) for good/i.test(e)) return { intent: 'warning' };
  if (role === 'status' || /^\w+ing\b.*(…|\.\.\.)$/.test(e) || /^(saved|copied|done|sent|deleted|added|removed|ready|connected|disconnected|offline|online|updated|up to date|no \w+ yet|nothing to)\b/i.test(e)) return { intent: 'state' };
  if (role === 'tab' || role === 'group' || role === 'column') return { intent: 'name' };
  if (role === 'heading' || role === 'caption') return { intent: VERBS.has(first) ? 'action' : 'heading' };
  if (words.length > 4 && /[.!]$/.test(e) && /^(choose|select|pick|type|enter|click|press|drag|drop|use|give|put|try|open|go|tap|hold|paste|add|sign|turn|set|keep|make|you can|to)\b/i.test(e)) return { intent: 'advice' };
  if (VERBS.has(first) && !/[.!]$/.test(e) && words.length <= 8) return { intent: 'action' };
  if (words.length <= 5 && !/[.!:]$/.test(e)) return { intent: 'name' };
  return { intent: 'explain' };
}

// ------------------------------------------------------------ space

const WIDE = /[\u1100-\u115F\u2E80-\u303E\u3041-\u33FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]|[\u{20000}-\u{3FFFD}]/u;
/** Display columns: East Asian wide and full-width characters count 2 (UAX #11); a placeholder counts as 8. */
export const widthOf = (s) => { let w = 0; for (const ch of String(s).replace(/\{\w+\}/g, '\u0000'.repeat(8))) w += WIDE.test(ch) ? 2 : 1; return w; };
/** W3C / IBM expansion for English to other languages, by source length (the top of each band). */
const growth = (w) => (w <= 10 ? 3 : w <= 20 ? 2 : w <= 30 ? 1.8 : w <= 50 ? 1.6 : w <= 70 ? 1.7 : 1.3);
const CAP = { tab: 16, group: 24, button: 24, menuitem: 40, checkbox: 60, option: 40, label: 40, column: 24, hint: 48, link: 40, heading: 60, caption: 60, status: 80 };

function spaceOf(english, role) {
  const w = widthOf(english);
  const grown = Math.ceil(w * growth(w));
  const medium = CAP[role] ? Math.max(w, Math.min(grown, CAP[role])) : Math.max(w, grown);
  // A short drops words, never a placeholder: halve the room for the words
  // and keep the 8 columns each placeholder is given.
  const held = 8 * (String(english).match(/\{\w+\}/g) || []).length;
  const short = Math.max(3, Math.ceil((medium - held) / 2)) + held;
  const complete = COMPACT.has(role) ? Math.max(medium, Math.min(medium * 2, 120)) : Math.ceil(medium * 1.5);
  return { short, medium, complete };
}

// ------------------------------------------------------------ placeholders

const EXAMPLES = [
  [/^(count|n|total|number|num|pages?|rows?|cols?|columns?|items?|done|left|max|min|index|at|of|seconds|minutes|hours|days|s|m|h)$/i, 'number', '3'],
  [/(size|bytes)$/i, 'size', '2.5 MB'],
  [/(percent|pct|ratio)$/i, 'percent', '40%'],
  [/(date|day|when|since|until|on)$/i, 'date', '12 Nov 2026'],
  [/(time|start|end|at)$/i, 'time', '14:05'],
  [/(email|address|sender|recipient)$/i, 'email', 'sam@example.com'],
  [/(url|link|href|site|host|server|domain)$/i, 'web address', 'https://example.com'],
  [/(path|folder|dir)$/i, 'folder', 'C:\\Users\\Sam\\Documents'],
  [/(file|filename|doc|document|book|deck)$/i, 'file name', 'Budget 2026.xlsx'],
  [/(person|who|user|author|contact|organiser|organizer|attendee|caller)$/i, 'person', 'Sam Lee'],
  [/(app)$/i, 'app name', 'Documents'],
  [/(key|shortcut)$/i, 'key', 'Ctrl+S'],
  [/(version)$/i, 'version', '2.25.0'],
  [/(lang|language|locale)$/i, 'language', 'French'],
  [/(sheet)$/i, 'sheet name', 'Sheet1'],
  [/(cell|range|ref)$/i, 'cell reference', 'B4'],
  [/(name|title|label)$/i, 'name', 'Quarterly plan'],
];
// A pattern matches the last word of a placeholder's name, whole: pageCount
// is a number and fromDate a date, but reason, version and option are not
// dates for ending in "on".
const lastWord = (name) => name.split(/_|(?<=[a-z0-9])(?=[A-Z])/).filter(Boolean).pop() || name;
const whole = (re) => new RegExp(`^(?:${re.source.replace(/^\^/, '').replace(/\$$/, '')})$`, 'i');
function placeholdersOf(label, list) {
  const names = [...new Set([...(label.english + ' ' + (label.plural || '')).matchAll(/\{(\w+)\}/g)].map((m) => m[1]))];
  const out = {};
  const sheetsArea = /^(sheets|engine)\./.test(label.id);
  // {from} and {to} are addresses in Mail, and the ends of a range elsewhere.
  const mailArea = /^mail\./.test(label.id);
  for (const name of names) {
    const [, kind, example] = (sheetsArea && /^(address|ref|range|cell)$/i.test(name) ? [null, 'cell reference', 'B4:D20'] : null)
      || (/^(from|to)$/i.test(name) ? (mailArea ? [null, 'email', 'sam@example.com'] : [null, 'start or end of a range', name === 'from' ? '1' : '10']) : null)
      || EXAMPLES.find(([re]) => whole(re).test(lastWord(name))) || [null, 'text', '…'];
    const from = new Set();
    for (const u of list) {
      const m = new RegExp(String.raw`(?:^|[{,\s])${name}\s*:\s*([^,}\n]+)`).exec(u.args);
      if (m) from.add(m[1].trim().slice(0, 60));
      else if (new RegExp(String.raw`[{,\s]${name}\s*[,}]`).test(u.args)) from.add(name);
    }
    out[name] = { kind, example, ...(from.size ? { from: [...from].slice(0, 3) } : {}) };
  }
  return out;
}

// ------------------------------------------------------------ fragments, Intl

function isFragment(label, list) {
  const e = label.english;
  if (/^[,;:.)\]]/.test(e) || /[,(]$/.test(e.trim())) return true;
  if (/^(in|into|of|and|or|to|by|at|on|for|with|from|than|as)$/i.test(e.trim())) return true;
  if (/^[a-z]/.test(e) && !/^(e\.g\.|i\.e\.|iCloud|iPhone|iPad|macOS|http)/.test(e)) {
    return list.some((u) => /\+\s*$/.test(u.before) || /^\s*\)\s*\+/.test(u.after) || /\}\s*$/.test(u.before.trimEnd()) && /^\s*\)\s*\}\s*[^\s<]/.test(u.after));
  }
  return list.some((u) => /\+\s*$/.test(u.before.trimEnd()) || /^\s*\)\s*\+/.test(u.after));
}

const MONTHS = new Set(Array.from({ length: 12 }, (_, i) => ['long', 'short'].map((m) => new Intl.DateTimeFormat('en', { month: m, timeZone: 'UTC' }).format(new Date(Date.UTC(2026, i, 15))))).flat());
const DAYS = new Set(Array.from({ length: 7 }, (_, i) => ['long', 'short'].map((m) => new Intl.DateTimeFormat('en', { weekday: m, timeZone: 'UTC' }).format(new Date(Date.UTC(2026, 10, 9 + i))))).flat());
const LANGS = new Set(['en', 'fr', 'de', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ar', 'ur', 'hi', 'ru', 'he', 'pl', 'nl', 'sv', 'tr', 'el', 'cs', 'hu', 'ro'].map((c) => new Intl.DisplayNames('en', { type: 'language' }).of(c)));
function intlOf(e) {
  if (MONTHS.has(e) || DAYS.has(e)) return 'month or day name: Intl.DateTimeFormat';
  if (LANGS.has(e)) return 'language name: Intl.DisplayNames';
  if (/^(today|yesterday|tomorrow|just now)$/i.test(e)) return 'relative day: Intl.RelativeTimeFormat';
  if (/^\{\w+\} ?(KB|MB|GB|TB|bytes?|px|pt|cm|mm|%|ms|s|min|h)$/i.test(e)) return 'number with a unit: Intl.NumberFormat';
  if (/\{\w+\}(st|nd|rd|th)\b/.test(e)) return 'ordinal: Intl.PluralRules (ordinal)';
  if (/\b\d{1,3}(,\d{3})+\b|\b\d+\.\d+\b/.test(e)) return 'a number written into the text: a placeholder formatted by Intl.NumberFormat';
  return null;
}

// ------------------------------------------------------------ write

const order = ['error', 'caption', 'heading', 'tab', 'group', 'button', 'menuitem', 'checkbox', 'option', 'column', 'label', 'hint', 'status', 'link', 'message', 'tooltip', 'a11y', 'text'];
const out = {};
const stats = { labels: 0, withUses: 0, uses: 0, roles: {}, intents: {}, fragments: 0, intl: 0 };
for (const label of registry.labels) {
  const list = uses.get(label.id) || [];
  const roles = {};
  for (const u of list) { const r = roleOf(u); u.role = r; if (!u.listed) roles[r] = (roles[r] || 0) + 1; }
  const role = Object.keys(roles).sort((a, b) => roles[b] - roles[a] || order.indexOf(a) - order.indexOf(b))[0] || 'text';
  const { intent, kind } = intentOf(label.english, role);
  const weight = Math.min(5, Math.max(1, PROMINENCE[role] + (list.length >= 10 ? 2 : list.length >= 3 ? 1 : 0) + (intent === 'error' || intent === 'warning' || intent === 'question' ? 1 : 0) - (list.length ? 0 : 1)));
  const entry = {
    role, intent, ...(kind ? { errorKind: kind } : {}), weight,
    space: spaceOf(label.plural && label.plural.length > label.english.length ? label.plural : label.english, role),
    used: 'medium',
    uses: list.map((u) => ({
      file: u.file, line: u.line, role: u.listed ? 'listed' : u.role,
      ...(u.shownIn ? { shownIn: u.shownIn } : {}), ...(u.fromTable ? { from: 'table' } : {}),
      link: `${REPO}/blob/${commit}/${u.file}#L${u.line}`, local: `office/${u.file}:${u.line}`,
    })),
  };
  const ph = placeholdersOf(label, list);
  if (Object.keys(ph).length) entry.placeholders = ph;
  if (isFragment(label, list)) { entry.fragment = true; stats.fragments += 1; }
  const intl = intlOf(label.english);
  if (intl) { entry.intl = intl; stats.intl += 1; }
  out[label.id] = entry;
  stats.labels += 1;
  if (list.length) stats.withUses += 1;
  stats.uses += list.length;
  stats.roles[role] = (stats.roles[role] || 0) + 1;
  stats.intents[intent] = (stats.intents[intent] || 0) + 1;
}

const body = Object.entries(out).map(([id, v]) => `  ${JSON.stringify(id)}: ${JSON.stringify(v)}`).join(',\n');
fs.writeFileSync(path.join(ROOT, 'labels.json'), `{\n  "about": ${JSON.stringify({ made: 'tools/usage-from-office.mjs', office: commit, model: 'MODEL.md' })},\n  "labels": {\n${body.replace(/^ {2}/gm, '    ')}\n  }\n}\n`);
console.log(JSON.stringify(stats, null, 1));
