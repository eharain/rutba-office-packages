# The label model

What every label in the packs carries, and why. Built from how established
systems do it (sources at the end), not from scratch.

## What others do

| Source | What it does | What we take |
| :-- | :-- | :-- |
| Apple `.stringsdict` width rules | A string has variants keyed by width; the system shows the variant with the largest key that fits, or the smallest when none fits. Since Xcode 15 Apple points to Dynamic Type instead, so width variants need a runtime that measures. | Three versions per label, chosen at run time by the space the control really has. |
| CLDR (Unicode locale data) | Names come in widths: wide, abbreviated, narrow (months, days); long, short, narrow (units, lists, relative time); full, long, medium, short (dates). | Three widths is the settled pattern: **short**, **medium**, **complete**. |
| XLIFF 1.2 (OASIS) | Each string says what it is (`restype`: button, menuitem, tooltip, caption, statusbar, ...), its size limits (`maxwidth`, `minwidth`, `size-unit` char or pixel), notes with a `priority` 1 to 10, and its context (`sourcefile`, `linenumber`). | The same fields, so a pack exports to XLIFF for any translation tool or a community web tool. |
| Microsoft language style guides | Each language has standard phrases for each kind of message (French: "Cannot/Could not ..." is "Impossible de ...", "Cannot find ..." is "... introuvable"), rules for errors (French: always end with a full stop, avoid parentheses), and rules for shortening when space runs out (abbreviate by three or more letters, with a full stop). | An **intent** on every label, and in every glossary a table of how that language phrases each intent, and its shortening rules. |
| Fluent (Mozilla), MessageFormat 2 (Unicode, stable since CLDR 47, in ICU 77) | Messages select between variants on a value; a translation may vary where English does not (case, gender). | The format leaves room for language-only variants later. JavaScript has no `Intl.MessageFormat` yet. |
| n8n | One `en.json` (926 KB) with dot keys by UI area; a locale is a copy with the same keys, untranslated keys removed so English shows; plurals as `"one | other"`; shared text linked by `@:_reusableBaseText.key`; per-node files; no regional variants; backend messages untranslated. Only `en.json` is in their repository today. | Our ids work the same way. We go further: regions, CLDR plural forms, the metadata here, and the main process translated too. |
| W3C and IBM text-size tables | English source up to 10 characters grows 200 to 300% in translation, 11 to 20 by 180 to 200%, 21 to 30 by 160 to 180%, 31 to 50 by 140 to 160%, 51 to 70 by 151 to 170%, over 70 by 130%. Chinese and Korean characters are about twice as wide as Latin ones. | The space limits below. |
| Node and Electron `Intl` (ICU) | See "What the platform already does". | Packs never translate what `Intl` formats. |

## Per label, in the registry (the same for every language)

Made by `tools/usage-from-office.mjs` from the code, so it stays true when the
code changes:

- **`role`**: the control it sits in, from XLIFF's list: `tab`, `group`,
  `button`, `menuitem`, `checkbox`, `option`, `label`, `heading`, `caption`
  (a dialog or window title), `tooltip`, `hint` (placeholder in a field),
  `status`, `message` (dialog or notice text), `error`, `link`, `column`,
  `a11y` (read by screen readers only), `sample` (example content), `text`.
- **`intent`**: what the words do: `action` (a command), `name` (names a
  thing or setting), `heading`, `state` (what is happening or done),
  `question`, `advice` (how to do something), `explain`, `warning`, `error`
  (with its kind: `cannot`, `failed`, `not-found`, `not-enough`,
  `unavailable`, `not-allowed`, `invalid`), `sample`.
- **`weight`**: 1 to 5, how much it matters, from the role's prominence and
  how many places use it. Reviewers do 5 first.
- **`space`**: the most display columns each version may take,
  `{ short, medium, complete }`. East Asian wide and full-width characters
  count 2 (Unicode UAX #11), and each `{placeholder}` counts 8, whatever its
  name. From the role and the English length, with the expansion table
  above. Short has half the room for words, plus the full 8 for each
  placeholder, since a short drops words but never a placeholder.
- **`used`**: the version today's code shows.
- **`uses`**: every file and line that shows it: a GitHub link to the commit
  the packs were checked against, and the path in a checkout.
- **`placeholders`**: for each `{name}`, what it stands for (from the code
  that fills it) and an example value.
- **`fragment`**: the label is part of a sentence the code joins together.
  Word order differs between languages, so these are code fixes.
- **`intl`**: the label repeats what `Intl` supplies, to move to `Intl`.

## Per label, in a pack (format 2)

Format 2 adds a file and changes none: `messages.json` stays as in format 1
and holds the **medium** version, so anything that reads format 1 keeps
working. `versions.json` beside it holds the other two:

```json
"common.save": { "short": "Save", "complete": "Save the document", "source": "1509f561f241" }
"common.count-word": { "short": { "one": "{count} wd", "other": "{count} wds" }, "complete": { ... }, "source": "..." }
```

- `source` is the registry hash of the English the versions were written
  from, so a label whose English changes shows them as stale.
- Every version keeps the medium's placeholders, and a counted label has
  the medium's forms. Versions may be the same text.
- Each version fits its `space`; short is never wider than medium, nor
  medium than complete. `tools/check-packs.mjs` fails a missing version, a
  lost placeholder or a dash, and counts widths and order for review.
- At run time the window shows the widest version that fits the measured
  space, as Apple's rule does; tooltips and screen readers take `complete`.
- The packs the build makes from the code (English, Urdu, Arabic, Hindi)
  keep their short and complete versions in `versions/<tag>.json`
  (committed); the build puts them in `packs/lang-<tag>/versions.json`.

## What the platform already does

Tested on Node 22.23.4 (ICU 78.3, CLDR 48.0) for all 35 pack locales:

- `Intl` gives numbers, percentages, currencies, compact numbers, units in
  three widths, dates in four styles, month and day names in three widths,
  relative time ("3 days ago", "yesterday") in three widths, lists ("A, B
  and C", "A or B") in three widths, language, region, script, currency and
  calendar names, plural rules (counting and ordinal), collation, and word
  and sentence segmentation (which Chinese needs for line breaking and
  word counts). `Intl.DurationFormat` and `Temporal` are not in Node 22;
  Electron 44.7.2, which the suite uses, has a newer engine, not yet
  confirmed there.
- `Intl` reads nothing back. Typed numbers and dates are read by our own
  readers, built from `formatToParts` (the locale's decimal, group and minus
  signs, digits, and date order).
- Its output uses no-break and narrow no-break spaces (French groups,
  units) and bidi marks (Arabic). The packs' no-no-break-space rule is for
  pack text only; tests must expect them in formatted values.
- **Where ICU's data is thin** and gives English, found by script: the "or"
  list in Maltese; the unit list in German, Greek, Swedish, Hebrew, Slovak
  and Estonian; the euro's name in German, Brazilian Portuguese, Dutch and
  Irish; the "AM/PM" field name in Italian, Brazilian Portuguese, Russian,
  Danish, Slovak, Croatian and Maltese; long kilobyte units in Spanish,
  Portuguese and Danish. Some of these are correct as English (the euro is
  "Euro" in German); a pack's `cldr` section fills the ones that are not.
- In the 2.25.0 labels, 42 repeat what `Intl` gives (month and day names,
  language names, "Today", "{n} MB", ordinals) and 19 write a number or date
  format into the sentence. Those are better taken from `Intl`, with
  placeholders for the values.

## Sources

- Apple, [Creating width and device variants of strings](https://developer.apple.com/documentation/xcode/creating-width-and-device-variants-of-strings)
- Unicode CLDR, [Date and time names](https://cldr.unicode.org/translation/date-time/date-time-names); [CLDR 47: MessageFormat 2.0 stable](https://blog.unicode.org/2025/03/unicode-cldr-47-release-messageformat-2.html)
- OASIS, [XLIFF 1.2 specification](https://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html)
- Microsoft, [French localization style guide](https://download.microsoft.com/download/c/7/9/c7921dbd-4531-4a4e-8490-e4656d739f3d/fra-fra-StyleGuide.pdf) (one of the per-language guides)
- Mozilla, [Fluent selectors](https://projectfluent.org/fluent/guide/selectors.html)
- n8n, [i18n docs](https://github.com/n8n-io/n8n/blob/master/packages/frontend/@n8n/i18n/docs/README.md) and [addendum](https://github.com/n8n-io/n8n/blob/master/packages/frontend/@n8n/i18n/docs/ADDENDUM.md)
- W3C, [Text size in translation](https://www.w3.org/International/articles/article-text-size/)
- Unicode, UAX #11 East Asian Width
