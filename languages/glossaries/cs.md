# Czech glossary for Rutba Office

The words the Czech pack (`lang-cs`) uses for the suite's recurring terms, so
the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Czech (cs-CZ) where those
exist, then LibreOffice, and plain everyday Czech where neither has a word.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the infinitive, as Czech Office does: Uložit (Save),
  Otevřít (Open), Zavřít (Close), Vložit (Insert), Přidat účet (Add account).
  A command that opens a dialog keeps the ellipsis at the end: Procházet…,
  Další barvy…
- **The reader** is addressed formally (vykání), as current Czech Office and
  Windows do, with lower-case vy, váš: „Změny se uloží do vašeho souboru.“
  Prefer impersonal or reflexive wording where Czech does it naturally:
  „Soubor se nepodařilo otevřít.“ rather than „Nemohli jsme otevřít…“.
- **Capitals**: sentence case everywhere, as Czech Office does, even where the
  English uses title case: Vložit jinak (Paste Special), Ukotvit příčky
  (Freeze Panes), Nový snímek (New Slide). Only the first word and names take
  a capital.
- **Tab and group names** are nouns, as in Czech Office: Domů, Vložení,
  Kreslení, Návrh, Rozložení, Revize, Zobrazení. A group takes a noun too:
  Schránka, Písmo, Odstavec, Styly.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated. Czech word order moves them where Czech
  wants them: „Tabulka: {name}“, „Událost od {address}“.
- **Cases with placeholders**: a placeholder cannot be declined, so word the
  label so `{name}` stands in the nominative, after a colon or as an
  apposition after a declined noun: „Odepnout: {name}“ or „Odepnout položku
  {name}“, never „Odepnout {name}u“. `{count}` before a noun is fine, the
  noun takes the plural form (below).
- **Gender of `{name}`**: a person or thing in `{name}` has an unknown gender,
  so avoid past-tense verbs and adjectives that agree with it. Write „{name}:
  přijato.“ instead of „{name} přijal(a).“, and „Pozvánka od {name}“ instead
  of „{name} vás zve“ where the verb would have to agree.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Esc, Enter:
  „Tučné (Ctrl+B)“.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`; function names
  stay in English (SUM, VLOOKUP) as the formula engine reads them.
- **Brand and product names** stay as written: Rutba Office, Microsoft, Word,
  Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube, Facebook,
  Instagram, Twitch, TikTok, LinkedIn Live Studio, YouTube Studio.
- **The suite's app names** are translated as in the first table and take a
  capital: „Otevřít v aplikaci Dokumenty“, „lidé z Kontaktů“. When an app name
  would have to be declined awkwardly, put „aplikace“ before it and keep the
  name in the nominative: „v aplikaci Pošta“.
- **Punctuation and quotation marks**: Czech quotation marks „ “ (low, then
  high): „volno 12. března?“. Where the English has an em dash, write a colon,
  a comma, parentheses or a new sentence: „Skupina nemá vlastní výplň ani
  obrys. Naformátujte obrazec uvnitř ní.“ Never a dash with spaces round it,
  although Czech print uses one; an en dash in a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, also after one-letter
  prepositions (v, s, k, z, o, u) and between a number and its unit, where
  Czech print would normally use one.
- **Counts** use Czech's four plural forms, in this order: `one` (1), `few`
  (2 to 4), `many` (fractions, as in 1,5) and `other` (0, 5 and up). Every
  form is written out with `{count}` in it:
  `one: {count} snímek`, `few: {count} snímky`, `many: {count} snímku`,
  `other: {count} snímků`. An adjective or verb agrees as well:
  `one: Byl zapsán {count} záznam`, `few: Byly zapsány {count} záznamy`,
  `many: Bylo zapsáno {count} záznamu`, `other: Bylo zapsáno {count} záznamů`.
- **Numbers and dates**: the window formats them from the region (decimal
  comma, a space between thousands, 12. 3. 2026), so a label never spells out
  a number or date format of its own. A date written into a sentence follows
  Czech order: „12. března“.
- **Diacritics** are always written in full (č, ř, š, ž, ě, ů, á, í, é, ý, ú,
  ť, ď, ň); a label is never left without them for space.

## The apps

| English | Czech |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenty |
| Worksheets | Tabulky |
| Presentations | Prezentace |
| Mail | Pošta |
| Calendar | Kalendář |
| Contacts | Kontakty |
| Pictures | Obrázky |
| Image (the editor) | Grafika |
| Video | Video |
| Home (the launcher) | Domů |
| Talk | Hovory |
| Locker | Trezor |
| Colour | Barvy |
| Base | Databáze |
| Broadcast | Vysílání |
| Recorder | Nahrávání |

## Tabs and frame

| English | Czech |
| :-- | :-- |
| File | Soubor |
| Home | Domů |
| Insert | Vložení |
| Draw | Kreslení |
| Design | Návrh |
| Layout | Rozložení |
| Page Layout | Rozložení stránky |
| References | Reference |
| Mailings | Korespondence |
| Review | Revize |
| View | Zobrazení |
| Help | Nápověda |
| Formulas | Vzorce |
| Data | Data |
| Automate | Automatizace |
| Transitions | Přechody |
| Animations | Animace |
| Slide Show | Prezentace (the tab, as in PowerPoint; the app is also Prezentace, context tells them apart) |
| Record | Záznam |
| Table Design | Návrh tabulky |
| Table Layout | Rozložení tabulky |
| Shape Format | Formát obrazce |
| Picture Format | Formát obrázku |
| Ribbon | Pás karet |
| Pane | Podokno |
| Status bar | Stavový řádek |
| Dialog | Dialogové okno |
| Settings | Nastavení |
| Language | Jazyk |
| Theme | Motiv |

## Commands

| English | Czech |
| :-- | :-- |
| New | Nový (Nová, Nové to agree with the noun: Nová zpráva, Nové okno) |
| Open | Otevřít |
| Save | Uložit |
| Save As | Uložit jako |
| Save as Template | Uložit jako šablonu |
| Close | Zavřít |
| Print | Tisk (the page or group) / Vytisknout (the command) |
| Export | Exportovat |
| Import | Importovat |
| Share | Sdílet |
| Undo | Zpět |
| Redo | Znovu |
| Cut | Vyjmout |
| Copy | Kopírovat |
| Paste | Vložit |
| Paste Special | Vložit jinak |
| Delete | Odstranit |
| Remove | Odebrat |
| Rename | Přejmenovat |
| Select All | Vybrat vše |
| Find | Najít |
| Replace | Nahradit |
| Go To | Přejít na |
| Insert | Vložit |
| Apply | Použít |
| Apply to All | Použít u všech |
| OK | OK |
| Cancel | Zrušit |
| Yes / No | Ano / Ne |
| Done | Hotovo |
| Next / Previous | Další / Předchozí |
| Back | Zpět |
| Refresh | Aktualizovat |
| Update | Aktualizovat (a software update: Aktualizace) |
| Accept / Reject | Přijmout / Odmítnout |
| Sort | Seřadit |
| Filter | Filtr (the control) / Filtrovat (the command) |
| Group / Ungroup | Seskupit / Oddělit |
| Merge / Split | Sloučit / Rozdělit |
| Zoom In / Zoom Out | Přiblížit / Oddálit |
| Full screen | Celá obrazovka |
| Minimise / Maximise / Restore | Minimalizovat / Maximalizovat / Obnovit |
| Expand / Collapse | Rozbalit / Sbalit |
| Browse | Procházet |
| Add | Přidat |
| Edit | Upravit |
| Reset | Resetovat |
| Clear | Vymazat |
| Show / Hide | Zobrazit / Skrýt |
| More | Více |
| None | Žádné |
| Automatic | Automaticky |

## Text and documents

| English | Czech |
| :-- | :-- |
| Document | Dokument |
| Page | Stránka |
| Paragraph | Odstavec |
| Line | Řádek |
| Word (a word) | Slovo |
| Character | Znak |
| Font | Písmo |
| Font size | Velikost písma |
| Bold / Italic / Underline | Tučné / Kurzíva / Podtržení |
| Strikethrough | Přeškrtnutí |
| Subscript / Superscript | Dolní index / Horní index |
| Text highlight colour | Barva zvýraznění textu |
| Font colour | Barva písma |
| Colour | Barva |
| Style / Styles | Styl / Styly |
| Heading | Nadpis |
| Title | Název |
| Bullets / Numbering | Odrážky / Číslování |
| Multilevel List | Víceúrovňový seznam |
| List | Seznam |
| Indent | Odsazení |
| Alignment / Align Left / Centre / Align Right / Justify | Zarovnání / Zarovnat doleva / Zarovnat na střed / Zarovnat doprava / Zarovnat do bloku |
| Line spacing | Řádkování |
| Margins | Okraje |
| Orientation / Portrait / Landscape | Orientace / Na výšku / Na šířku |
| Size (paper) | Velikost |
| Columns | Sloupce |
| Breaks | Konce |
| Header / Footer | Záhlaví / Zápatí |
| Footnote / Endnote | Poznámka pod čarou / Vysvětlivka |
| Table of Contents | Obsah |
| Caption | Titulek |
| Bookmark | Záložka |
| Cross-reference | Křížový odkaz |
| Citation / Bibliography | Citace / Bibliografie |
| Index | Rejstřík |
| Comment / Comments | Komentář / Komentáře |
| Track Changes | Sledovat změny |
| Spelling | Pravopis |
| Thesaurus | Tezaurus |
| Word Count | Počet slov |
| Watermark | Vodoznak |
| Page Colour | Barva stránky |
| Text Box | Textové pole |
| WordArt | WordArt |
| Equation | Rovnice |
| Symbol | Symbol |
| Hyperlink / Link | Hypertextový odkaz / Odkaz |
| Mail Merge | Hromadná korespondence |
| Envelopes / Labels | Obálky / Štítky |
| Template | Šablona |
| Untitled | Bez názvu |

## Workbooks

| English | Czech |
| :-- | :-- |
| Workbook | Sešit |
| Sheet / Worksheet | List / List |
| Cell / Cells | Buňka / Buňky |
| Row / Rows | Řádek / Řádky |
| Column / Columns | Sloupec / Sloupce |
| Range | Oblast |
| Formula | Vzorec |
| Function | Funkce |
| Number format | Formát čísla |
| Currency / Percentage / Date / Time | Měna / Procenta / Datum / Čas |
| Freeze Panes | Ukotvit příčky |
| Conditional Formatting | Podmíněné formátování |
| Format as Table | Formátovat jako tabulku |
| PivotTable | Kontingenční tabulka |
| Chart | Graf |
| Sparklines | Mini grafy |
| Slicer | Průřez |
| Data Validation | Ověření dat |
| Remove Duplicates | Odebrat duplicity |
| Text to Columns | Text do sloupců |
| Power Query | Power Query |
| Name box | Pole názvů |
| Formula bar | Řádek vzorců |
| AutoSum | Automatické shrnutí |
| Sum / Average / Count / Min / Max | Součet / Průměr / Počet / Minimum / Maximum |

## Presentations

| English | Czech |
| :-- | :-- |
| Presentation | Prezentace |
| Slide / Slides | Snímek / Snímky |
| New Slide | Nový snímek |
| Layout | Rozložení |
| Section | Oddíl |
| Master | Předloha |
| Notes | Poznámky |
| Handout | Podklady |
| Shape / Shapes | Obrazec / Obrazce |
| Picture / Pictures | Obrázek / Obrázky |
| Fill / Outline | Výplň / Obrys |
| Shadow / Glow / Reflection | Stín / Záře / Odraz |
| Transition | Přechod |
| Animation | Animace |
| From Beginning / From Current Slide | Od začátku / Od aktuálního snímku |
| Presenter View | Zobrazení prezentujícího |
| Rehearse Timings | Vyzkoušet časování |
| Video / Audio | Video / Zvuk |

## Mail, calendar, contacts, pictures

| English | Czech |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Doručená pošta / Odeslaná pošta / Koncepty / Pošta k odeslání / Nevyžádaná pošta / Archiv / Koš |
| Message | Zpráva |
| New message | Nová zpráva |
| Reply / Reply All / Forward | Odpovědět / Odpovědět všem / Přeposlat |
| Send | Odeslat |
| Attachment | Příloha |
| Account | Účet |
| Folder | Složka |
| Search | Hledat |
| Unread / Flagged | Nepřečtené / S příznakem |
| Rules | Pravidla |
| Signature | Podpis |
| Event | Událost |
| Meeting | Schůzka |
| Today / Day / Week / Month / Agenda | Dnes / Den / Týden / Měsíc / Agenda |
| Repeat | Opakovat |
| Reminder | Připomenutí |
| Contact | Kontakt |
| Address book | Adresář |
| Phone / Email / Address | Telefon / E-mail / Adresa |
| Rotate / Crop / Flip | Otočit / Oříznout / Překlopit |
| Rating / Tags | Hodnocení / Značky |
| Slideshow | Prezentace |
| Brightness / Contrast | Jas / Kontrast |
| Trim / Split | Oříznout / Rozdělit |
| Export video | Exportovat video |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain formal Czech, not word for word. Keep a sentence's facts (a number, a
name in `{braces}`, a key) exactly. Prefer „Soubor se nepodařilo otevřít.“
over a literal rendering, and „Neodesláno: {reason}“ for a short status.

## More recurring terms

| English | Czech |
| :-- | :-- |
| Accounts | Účty |
| Address books | Adresáře |
| Attachments | Přílohy |
| Invitation | Pozvánka |
| Invite | Pozvat |
| Organizer | Organizátor |
| Accepted / Tentative / Declined | Přijato / Nezávazně / Odmítnuto |
| Busy / Free | Zaneprázdněn / Volno |
| All day | Celý den |
| Time zone | Časové pásmo |
| Every day / Every week / Every month / Every year | Každý den / Každý týden / Každý měsíc / Každý rok |
| Does not repeat | Neopakuje se |
| Room / Rooms | Místnost / Místnosti |
| Mailbox | Poštovní schránka |
| Cc / Bcc | Kopie / Skrytá kopie |
| Database | Databáze |
| Table | Tabulka |
| Record / Records (in a database) | Záznam / Záznamy |
| Field | Pole |
| Read only | Jen pro čtení |
| Data Files (the database app's copy) | Datové soubory |
| Web address | Webová adresa |
| Network share | Sdílená síťová složka |
| Password | Heslo |
| Key | Klíč |
| Stream key / Server address | Klíč streamu / Adresa serveru |
| Go live | Spustit živé vysílání |
| Unpin | Odepnout |
| Unique | Jedinečné |
| Totals | Souhrny |
| Blank document / Blank presentation / Blank worksheet | Prázdný dokument / Prázdná prezentace / Prázdný sešit |
| Standard colours / Recent colours / More colours… | Standardní barvy / Poslední barvy / Další barvy… |
| Accent | Zvýraznění |
| Background | Pozadí |
| Borders | Ohraničení |
| Banded Rows / Banded Columns | Pruhované řádky / Pruhované sloupce |
| Bring Forward / Bring to Front | Přenést dopředu / Přenést do popředí |
| Clipboard | Schránka |
| Clear formatting / Change case | Vymazat formátování / Velká a malá písmena |
| Alt Text / Accessibility | Alternativní text / Přístupnost |

## Intents and versions

### Voice

Commands take the infinitive: Uložit, Nahrát, Zavřít okno. Sentences address
the reader formally (vykání), with the plural imperative and lower-case vy,
váš: Zkontrolujte připojení. Prefer reflexive or impersonal wording (Soubor se
nepodařilo otevřít) and never a past tense that agrees with `{name}`.

### By intent

| Intent | How this language phrases it | English | Czech |
| :-- | :-- | :-- | :-- |
| action (button) | Infinitive, verb first, object after it | Record | Nahrát |
| action (menu) | Infinitive with its object, sentence case | Close Window | Zavřít okno |
| name | Noun phrase in the nominative, no verb, no full stop | Uppercase | Velká písmena |
| heading | Noun phrase, sentence case, no full stop; dialog titles too | Folder settings | Nastavení složky |
| state (working) | Verbal noun in -ní, then … | Finding suggestions… | Hledání návrhů… |
| state (done) | Noun + byl/a/o + passive participle, agreeing with a known noun; with `{name}`, the colon form | Link copied. Paste it anywhere. | Odkaz byl zkopírován. Můžete ho vložit kamkoli. |
| question | Infinitive first; complete opens with Chcete; a noun before `{name}` | Remove {name}? | Odebrat kontakt {name}? |
| advice | Plural imperative; a purpose first with Chcete-li | Sign in to Talk to accept. | Chcete-li pozvánku přijmout, přihlaste se do aplikace Hovory. |
| explain | Statement in the present tense, or a noun phrase with a full stop | Bullet character. | Znak odrážky. |
| warning | Plain statement of the result; nelze vrátit zpět for "cannot be undone" | Cannot be undone. | Tuto akci nelze vrátit zpět. |
| error: cannot | Nelze + infinitive when it is not possible; Nepodařilo se + infinitive when an attempt did not work | Could not set up | Nepodařilo se nastavit |
| error: failed | The noun + se nezdařil/a/o, agreeing with the noun | Recognition failed. | Rozpoznávání se nezdařilo. |
| error: not-found | The noun + chybí; with a placeholder, Nenalezeno: {name} | Picture file is missing | Soubor obrázku chybí |
| error: not-enough | Není dost + genitive; příliš velký / dlouhý agreeing with the noun | Not enough disk space to record. | Na disku není dost místa pro nahrávání. |
| error: unavailable | The noun + není k dispozici, which needs no agreement | Speech is not available. | Řeč není k dispozici. |
| error: not-allowed | The noun + není povolen/a/o; Přístup k + dative + nebyl povolen | Camera not allowed. | Kamera není povolena. |
| error: invalid | „{x}“ není platný/á/é + noun; Neplatný + noun | "{text}" is not a range | „{text}“ není platná oblast |
| error: other | What to do, as a plural imperative, or what is wrong, as a statement | Keep at least one worksheet visible. | Ponechte viditelný alespoň jeden list. |
| sample | Write it as a Czech user would type it; keep its case and length | free 12 March? | volno 12. března? |

The sample row is the glossary's own quotation example: the suite has
no sample label.

### Short, medium and complete

- **Short** keeps, in this order: the verb of an action, its object noun, and
  the key words of an error (Nelze, Nepodařilo se, chybí, není). It drops, in
  this order: possessives (váš, svůj), demonstratives (tento, ten), place and
  purpose phrases (v tomto dokumentu, aby ...), adjectives, a second sentence.
- Short never drops a placeholder, a shortcut in brackets (Ctrl+S), the
  ellipsis of a command that opens a dialog, or a diacritic.
- **Abbreviations** only in short, only when the words still do not fit, and
  only these standard ones: č. (číslo), str. (strana), max., min. (minimum),
  např., tj. Word abbreviations take a full stop; units and codes stay as
  symbols with none (MB, px, s, min for minutes). Never abbreviate a verb, an
  app name or a button's word.
- **A counted label** keeps `{count}` and all four forms in every version. To
  shorten it, drop the verb or use the colon form, which needs no agreement
  and is the same text in each form: medium `Bylo odstraněno {count} záznamů`
  (other) becomes short `Odstraněno: {count}` in one, few, many, other.
- **Complete** adds what the English complete adds: the object (Najít
  příjemce v seznamu), the place, the reason, the next step. A message in
  complete is whole sentences, each with its full stop, and a question opens
  with Chcete. Tooltips and screen readers read complete, so it must make
  sense with nothing around it.
- Short is never wider than medium, nor medium than complete. The three may
  be the same text.

Worked examples (English short | medium | complete, then Czech):

1. Find | Find Recipient | Find a recipient in the list
   Najít | Najít příjemce | Najít příjemce v seznamu
2. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Odebrat kontakt {name}? | Odebrat kontakt {name} ze seznamu kontaktů? | Chcete odebrat kontakt {name} ze seznamu kontaktů?
3. Camera not allowed. | The camera was not allowed. | The camera was not allowed. Allow it in your system's privacy settings.
   Kamera není povolena. | Přístup ke kameře nebyl povolen. | Přístup ke kameře nebyl povolen. Povolte ho v nastavení ochrany soukromí v systému.

### Punctuation and marks

- **Ellipsis**: the single character …, with no space before it, at the end of
  a command that opens a dialog or asks for more (Procházet…, Další barvy…)
  and of a working state (Ukládání…). Not on a command that acts at once. A
  version keeps the ellipsis if the medium has it.
- **Colon, question mark, exclamation mark, semicolon**: no space before, one
  ordinary space after. Never a no-break space anywhere in pack text, also
  not after v, s, k, z, o, u.
- **Quotation marks**: „…“ (U+201E opening, U+201C closing), ‚…‘ inside a
  quotation. The English straight quotes round a placeholder become „{name}“.
- **Capitals**: sentence case on buttons, menu items, tabs, groups, headings
  and dialog titles: the first word and names only. After a colon, lower case
  unless a name follows.
- **Full stops**: an error, warning or message that is a sentence ends with a
  full stop, and so does every sentence in complete. A button, menu item, name,
  heading, tab or a status fragment without a verb takes none, as the English
  version does. Questions end with ?. Do not use exclamation marks. The stop
  after a day number (12. března) is part of the date, not an end.
- **Percent**: Czech print sets 25 % with a space; write that ordinary space
  where % stands for the noun (25 %), and join it where it is an adjective
  (25% sleva).

### Access keys

- Put `&` before one letter of the Czech word, one `&` per label: &Edit is
  &Upravit, Close Window is &Zavřít okno. Latin script needs no (&X) form.
- Prefer the first letter of the first word, then a clear consonant in that
  word, then a letter of the next word.
- Never a letter with a diacritic (á č ď é ě í ň ó ř š ť ú ů ý ž): on the
  Czech keyboard most sit on the number row, so Alt with them reaches a digit
  on other layouts.
- Avoid i and l (hard to see underlined) and letters with descenders (g j p q
  y) when another letter is free. Each letter is unique within one menu or
  dialog, and a command keeps the same letter in every app where it can.
