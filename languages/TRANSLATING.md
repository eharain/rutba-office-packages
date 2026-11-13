# Translating Rutba Office

Rutba Office is a free office suite: documents, worksheets, presentations,
mail, calendar, contacts, pictures, image and video editors, PDF, a database
and Talk calls. This folder holds every label it shows, one pack per
language. This page is the guide the packs are drafted by. They start as
machine translation and improve through suggestions from the people who use
them, made on Rutba's own site once it exists. The repository does not
accept pull requests or outside contributions.

## What a pack holds

- `messages.json`: every label's **medium** version, the one the suite
  shows today.
- `versions.json` (format 2 packs): the **short** and **complete** versions
  of every label.
- `glossary.md`: the words the language uses for the suite's recurring
  terms, and how it phrases each kind of label (see "Intents" below). The
  same thing is called the same everywhere.
- `manifest.json`: what the pack is, and its `status`: `draft` until its
  wording has been settled.

`labels.json` (made by `node tools/build.mjs`) tells you, for every label
id, where it is shown: its role (button, tooltip, error, ...), its intent,
how much room it has, and a link to every file and line that uses it. Look a
label up there before you change it.

## Three versions

Every label comes in three versions. At run time the window shows the
widest one that fits the space it has.

- **Short**: for narrow places, such as a collapsed ribbon or a phone-width
  window. The fewest words that still say it: keep the verb of a command
  and what went wrong in an error; drop articles and the second clause.
  Abbreviate only as your glossary allows.
- **Medium**: the main translation, shown in most places.
- **Complete**: for tooltips, screen readers and wide windows. The full
  sentence, with the command's object ("Save" becomes "Save the document").

Each version fits the space `labels.json` gives it. A letter, digit, space
or mark is 1 column, a Chinese, Japanese or Korean character 2, and each
`{placeholder}` counts 8. The short is never wider than the medium, nor the
medium than the complete. Versions may be the same text.

## Intents

Every label says what its words do: an **action** (a command), a **name**,
a **heading**, a **state** (working, or done), a **question**, **advice**,
an **explanation**, a **warning**, an **error** (with its kind: cannot,
failed, not found, not enough, unavailable, not allowed, invalid) or a
**sample**. Languages phrase these differently: German buttons take the
infinitive, French errors open with "Impossible de ...". Each glossary's
section "Intents and versions" says how its language does it. Follow it.

## Rules

- Use the words people already know from the major office suites and the
  operating system in your language.
- Translate the meaning, not word by word, in plain sentences.
- Keep exactly as written:
  - placeholders in braces, `{name}`, `{count}`: every placeholder of the
    English appears in every version, unchanged, wherever your grammar puts
    it;
  - line breaks where the English has them (the short may drop them);
  - keys and shortcuts (Ctrl+S, F7), file extensions, formats and codes
    (PDF, CSV, `dd/mm/yyyy`), web and email addresses, formulas and
    function names (SUM, VLOOKUP);
  - brand and product names.
- `&` marks the access-key letter of a menu: keep one, as your glossary
  says.
- A counted label gives every plural form your language's rules choose
  (`Intl.PluralRules`). Write `{count}` in every form when the English has
  it in any form, and never when it has none.
- The ellipsis `…` stays at the end of a command that opens a dialog.
- No em dash, and no en dash used as a dash: write a colon, a comma or a new
  sentence. No no-break spaces: ordinary spaces only, French included.
- A label marked as a fragment is joined to other words by the code: keep it
  joinable.

## Checking

```
node tools/build.mjs
```

builds the files made from the code and checks every pack: the same ids as
English, every plural form, the same placeholders in every version, no dash
or no-break space, and a manifest with every field. Widths over their space
are counted for a reviewer to judge.

## Review

Packs other than English are drafts: machine-translated from the English
with each language's glossary. They improve through suggestions from the
people who use them, made on Rutba's own site once it exists, where each
label is shown with its context and where it is used. The labels that
matter most come first (`labels.json` gives each a weight from 1 to 5). A
pack's `status` becomes `reviewed` once its wording has been settled, and
its `review` says how. Only reviewed packs are released.
