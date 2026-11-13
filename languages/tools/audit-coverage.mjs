// Counts words a Rutba Office copy shows that are not in the registry
// (ids.json): sentences written straight into the code, outside t(), tn()
// and msg(). It cannot be exact (a literal may be a key, not words), so it
// reports by place, with examples, for a person to judge.
//
//   node tools/audit-coverage.mjs <office copy>   writes coverage.json

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const office = path.resolve(process.argv[2] || path.join(ROOT, 'work/office-src'));
const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'ids.json'), 'utf8'));
const known = new Set(registry.labels.flatMap((l) => [l.english, l.plural].filter(Boolean)));

function files(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!/^(node_modules|vendor|test|tests|fixtures|catalogues|dist)$/.test(e.name)) files(p, out); } else if (/\.(js|mjs|cjs)$/.test(e.name) && !/\.test\./.test(e.name)) out.push(p);
  }
  return out;
}

// Literals that read as words for a person: a capital, then letters and a
// space, given to a property or call that shows text.
const SHOWN = /(?:\b(?:message|detail|title|label|text|body|tooltip|placeholder|heading|caption|description|subject|buttons|error|status|hint|notice|toast|alert|confirm|notify|showErrorBox|setToolTip)\b\s*[:=(]\s*\[?\s*|throw\s+new\s+\w*Error\(\s*|>\s*)(['"`])((?:[A-Z][a-z’]*|[0-9]+)(?:[ ,.:;!?()-]+[\w’-]+){1,}[.!?…]?)\1/g;
const PLACES = {
  'main process': 'apps/desktop/main',
  'windows (renderer)': 'apps/desktop/renderer',
  'shared packages': 'packages',
};
const report = { office: path.relative(ROOT, office).split(path.sep).join('/'), places: {}, outside: {} };
for (const [place, dir] of Object.entries(PLACES)) {
  const found = new Map();
  for (const abs of files(path.join(office, dir))) {
    const file = path.relative(office, abs).split(path.sep).join('/');
    if (/-words\.js$|-translations\.js$/.test(file)) continue;
    const text = fs.readFileSync(abs, 'utf8');
    for (const m of text.matchAll(SHOWN)) {
      const words = m[2];
      if (known.has(words) || /\$\{/.test(words) && known.has(words.replace(/\$\{([^}]*)\}/g, (s, e) => `{${e.trim().split(/\W/).pop()}}`))) continue;
      if (/^[A-Z][A-Za-z]+$/.test(words) || /^[A-Z_]+$/.test(words)) continue;
      const line = text.slice(0, m.index).split('\n').length;
      if (!found.has(words)) found.set(words, `${file}:${line}`);
    }
  }
  report.places[place] = { count: found.size, examples: [...found].slice(0, 12).map(([w, at]) => `${at}  ${w.slice(0, 90)}`) };
}
const notes = fs.existsSync(path.join(office, 'docs/releases')) ? fs.readdirSync(path.join(office, 'docs/releases')).filter((f) => f.endsWith('.md')) : [];
report.outside['release notes (docs/releases, shown in What\'s new)'] = { files: notes.length, words: notes.reduce((n, f) => n + fs.readFileSync(path.join(office, 'docs/releases', f), 'utf8').split(/\s+/).length, 0) };
const nsh = path.join(office, 'apps/desktop/resources/installer-words.nsh');
report.outside['installer'] = fs.existsSync(nsh) ? 'made from the catalogues by tools/make-installer-words.mjs, so its words are in the registry' : 'not found';
fs.writeFileSync(path.join(ROOT, 'coverage.json'), JSON.stringify(report, null, 2) + '\n');
for (const [p, v] of Object.entries(report.places)) { console.log(`${p}: ${v.count} sentences outside the catalogue`); for (const e of v.examples.slice(0, 6)) console.log(`   ${e}`); }
console.log(JSON.stringify(report.outside, null, 1));
