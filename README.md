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

**The language packs other than English are drafts**: they start as machine
translation, and each pack's manifest says so. They improve through
suggestions from the people who use them, made on Rutba's own site once it
exists, not through pull requests. Drafts are offered for download all the
same, marked as drafts wherever a language is chosen in Rutba Office and in
each manifest, so people can use them and suggest better wording.
[`languages/TRANSLATING.md`](languages/TRANSLATING.md) is the guide the drafts
follow.

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
the files a pack may hold, the licence (a pack with anything of ours names
`LicenseRef-TechStyle-Proprietary` and carries the LICENSE as `LICENSE.txt`;
NOASSERTION is never allowed), and gives the canonical form a manifest is signed
in. Its tests:

```
node --test tools/pack-core.test.mjs
```

`tools/feed.mjs` makes a release's signed feed, and beside it each pack whole
as `<id>-<version>-r<revision>.zip`: the signed envelope and the pack's
folder, nothing else. A computer with no network adds one with Add from a file
in Voices and languages, which checks it as it checks a fetched pack. The
zips are what is handed out; the `dist` folder never is.

Every pack carries the version number of the Rutba Office release it is
for, the one release [`office.json`](office.json) names for the whole
repository, plus a revision from 1 for changes released between two Office
releases (the speech engine, being code, has no revision). A pack names
the packs it needs in `requires`, by id or by a name another pack lists in
`provides`.

[`RELEASING.md`](RELEASING.md) gives the steps of a release, from moving the
pin to checking what was published.

## Licence

Proprietary: Tech Style Ltd, all rights reserved. Anyone may download the
released packs and use them with Rutba Office, free of charge; see
[`LICENSE`](LICENSE). Parts made by others, such as a speech model or a
runtime, keep their own licences and credits, named in each pack's manifest
and carried in the pack. This repository does not accept outside
contributions.
