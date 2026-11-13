# Rutba Office packages

Packages for [Rutba Office](https://github.com/eharain/Rutba-Office), the
free office suite, released on their own and apart from the suite itself.

| Folder | What it holds |
| :-- | :-- |
| [`languages/`](languages/) | The language packs: every label the suite shows, one pack per language, with each label's short, medium and complete versions. |

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
