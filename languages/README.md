# Rutba Office language packs

The words Rutba Office shows, one pack per language, released on their own and
apart from Rutba Office itself.

**Every pack except English is a draft**: made by machine translation from the
English and not yet reviewed by a native speaker. Each says so in its manifest
(`"status": "draft"`). `TRANSLATING.md` is the guide for translators and
reviewers.

Every label the suite shows has an id here. English is a pack like any other:
it is the source, and the id of each label is given when the English pack is
built. Every other pack uses the same ids.

## What is here

- `ids.json` is the registry. For every label: its `id`, its `english`
  (and `plural` for a counted label), the `parts` of the suite that carry it
  (`shared`, or an app that keeps its own words: `locker`, `talk`, `colour`,
  `sheets-find`), `where` the code uses it, and a `hash` of the English.
- `packs/lang-<tag>/` is one pack:
  - `manifest.json`: what the pack is (see below);
  - `messages.json`: id to text;
  - `glossary.md`: the words the pack uses for the suite's recurring terms,
    and how it phrases each intent and makes each version.
- `glossaries/<tag>.md` is each language's glossary, the source of the packs'
  `glossary.md`, kept here for languages whose pack is not made yet too.
- `versions/<tag>.json` holds the short and complete versions of a pack
  the build makes (English, Urdu, Arabic, Hindi), written here; the medium is
  the pack's text from the code. The build puts them in the pack, which is
  then in format 2 (see `MODEL.md`). Packs made here keep their versions in
  their own folder, as `versions.json`.
- `ids.lock.json` keeps every id given, with the hash of its English (and no
  English), so the registry gets the same ids on every build, a fresh clone
  included.
- `tools/extract-from-office.mjs` reads a Rutba Office copy (it only reads)
  and writes the registry, the lock and the packs Rutba Office carries.
- `tools/check-packs.mjs` checks every pack against the registry, with no
  Rutba Office needed.
- `labels.json` says, for every id, where and how it is shown: its role
  (button, tooltip, error, ...), its intent (action, advice, error kind, ...),
  a weight from 1 to 5, the space each version may take, and a link to every
  file and line that shows it. Made by `tools/usage-from-office.mjs` from a
  Rutba Office copy. `MODEL.md` explains each field and the research behind it.
- `coverage.json` counts sentences the suite shows that are not yet in the
  registry, made by `tools/audit-coverage.mjs`.

## Building

```
node tools/build.mjs
```

That one command makes every file that comes from the Rutba Office code and
then checks them all. It reads the code from `work/office-src` (not committed), a clone of the
release pinned in the repository's [`office.json`](../office.json) (now `v2.25.0`, commit `18a8407a`), and makes that clone first if
it is missing. It never reads a working checkout of Rutba Office. It fails
when an id goes missing or repeats, when a generated file's ids differ from
the registry's, or when `tools/check-packs.mjs` finds a fault.

**Made by the build, not committed** (see `.gitignore`):

- `ids.json` and `labels.json`;
- `packs/lang-en`, `packs/lang-ar`, `packs/lang-hi` and `packs/lang-ur`, the
  English source and the three translations Rutba Office already carries;
- `dist/v<version>/`: the packs that may be released, written by
  `tools/dist.mjs` once every check passes: English, which is released like
  every language (Rutba Office keeps a copy of the released `lang-en`), and
  each pack whose status is `reviewed`. Drafts never go there. The
  repository's release step gathers each kind's `dist/v<version>/`.

They carry the suite's English as it is, and 628 of its labels still have em
dashes, which this repository does not take. Once the English loses them at
source, they are committed again. Everything else is committed: the tools,
`ids.lock.json`, `coverage.json`, `MODEL.md` and the other packs, which are
made here and checked against the registry by the build.

## Ids

An id is the area of the suite that uses the label, then a slug of its first
English words: `common.save`, `sheets.find.find-all`,
`shell.save-changes-to-name`, `talk.invite-email.send-the-invitation`.

- The area is the app (`word`, `sheets`, `mail`, ...), then the module inside it
  when only one module uses the label. A label used in more than one area is
  `common`. The suite's shared parts have their own areas: `ui`, `shell`,
  `engine`, `studio`, `registry`, and the shared dialogs by name (`print`,
  `protect`, `redact`, ...).
- Two labels whose slugs would be the same get `-2`, `-3` in the order of their
  English.
- **An id is given once and kept.** A later run of the extractor keeps every id
  already in `ids.json`, and gives new ids only to labels new to it. Moving code
  or changing a label's English does not change its id.

## Pack format

`manifest.json`:

| Field | Meaning |
| :-- | :-- |
| `id` | `lang-<tag>`, the folder's name |
| `kind` | `language` |
| `format` | the shape of the pack's files: `1`, or `2` with `versions.json` |
| `version` | the Rutba Office release the pack belongs to, such as `2.25.0` |
| `revision` | `1` when first released at that version, then one higher for each change to its text |
| `tag` | BCP 47 language tag |
| `name`, `nativeName` | the language's name in English and in itself |
| `script`, `direction` | ISO 15924 script, `ltr` or `rtl` |
| `region` | the region its facts default to |
| `pluralForms` | the forms `Intl.PluralRules` gives the language |
| `labels` | how many labels it holds |
| `tags` | `[tag]`: the core every pack kind shares lists tags |
| `requires` | packs this one needs: a regional pack names its base |
| `licence` | `{ spdx, files }`: `NOASSERTION` until the licence is chosen |
| `status` | `source` (English), `draft` (not yet reviewed) or `reviewed` |
| `review` | how far it has been reviewed, in words |
| `versions` | format 2: `short`, `medium`, `complete` |
| `source` | `true` for English only |

### Version numbers

Every pack, of every kind, carries the version number of the Rutba Office
release it is for, so the packs and the suite stay in step. The version also
says which release the pack was checked against. `office.json` at the repository's root names that
release for every kind of pack: the build reads its code from it and the checker fails a pack with
any other version.

- Each Rutba Office release has a release of this repository tagged
  `v<version>`, published with it. Every pack is checked again and given the
  new version, its text changed or not; an unchanged pack's files are not
  uploaded again.
- A change between two Office releases keeps the version and raises
  `revision`: `2.25.1` revision 2 comes after revision 1 and before
  `2.26.0` revision 1. A new language arrives at the current version,
  revision 1.
- Fixes go to the current version. A copy of Rutba Office on an earlier
  version keeps that version's packs and their revisions.

A pack holds only `manifest.json`, `messages.json`, `versions.json`,
`glossary.md` and its licence files: data, never code. A release wraps it in
Rutba Office's signed pack envelope, as the suite's own app packs are.

`messages.json`, id to entry:

```json
{
  "common.save": { "text": "Save" },
  "common.count-word": { "forms": { "one": "{count} word", "other": "{count} words" } }
}
```

In a translation each entry also says which English it was made from, by the
registry's hash, so a label whose English has changed since shows up as stale:

```json
{
  "common.save": { "text": "محفوظ کریں", "source": "1509f561f241" }
}
```

Placeholders such as `{name}` and `{count}` stay exactly as written. A counted
label gives every form its language's rules can choose.

Format 2 adds `versions.json` beside `messages.json`, with each label's short
and complete versions; `messages.json` is unchanged and holds the medium. See
`MODEL.md`.

## Checks

`node tools/check-packs.mjs` holds every pack to the registry: the same ids as
English, every plural form, the same placeholders, a known format, a manifest
with every field, and no more than 40 labels of words left in English in a pack
written in another script. Translations made from older English are counted, to
be reviewed again.

## Where the packs came from

The English, Urdu, Arabic and Hindi packs were taken out of Rutba Office 2.25.0
(`packages/office-ui/src/catalogues` and the apps' own `*-translations.js`
files). Their content is unchanged. The Urdu, Arabic and Hindi translations are
machine drafts, not yet reviewed by native speakers, and their manifests say so.
The other translations were drafted here by machine translation from the
English, with a glossary per language, and are drafts in the same way.
