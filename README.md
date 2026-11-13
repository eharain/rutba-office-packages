# Rutba Office packages

Packages for [Rutba Office](https://github.com/eharain/Rutba-Office), the
free office suite, released on their own and apart from the suite itself.

| Folder | What it holds |
| :-- | :-- |
| [`languages/`](languages/) | The language packs: every label the suite shows, one pack per language, with each label's short, medium and complete versions. |
| [`speech/`](speech/) | The speech packs: a speech model and voices for Read Aloud and narration. None is published yet. |

People add the packs they want from Settings in Rutba Office. Nothing is
downloaded until they choose it, and every pack is signed and checked before
it is used.

**The language packs other than English are drafts**: made by machine
translation and not yet reviewed by native speakers. Each pack's manifest says
so. See [`languages/TRANSLATING.md`](languages/TRANSLATING.md) to help
translate or review one.

## Building and checking

Needs Node.js 22 and git.

```
cd languages
npm test
```

That clones the Rutba Office release the packs are checked against, makes
the files that come from its code, and checks every pack.

`tools/` at the top holds what every kind of pack shares: `pack-core.mjs`
checks the manifest fields, the version rule, `requires` and `provides`, and
the files a pack may hold, and gives the canonical form a manifest is signed
in. Its tests:

```
node --test tools/pack-core.test.mjs
```

Every pack carries the version number of the Rutba Office release it is
for, plus a revision from 1 for changes released between two Office
releases (the speech engine, being code, has no revision). A pack names
the packs it needs in `requires`, by id or by a name another pack lists in
`provides`.
