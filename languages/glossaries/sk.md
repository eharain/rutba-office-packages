# Slovak glossary for Rutba Office

The words the Slovak pack (`lang-sk`, region sk-SK) uses for the suite's
recurring terms, so the same thing is called the same everywhere. It follows
the words people already know from Microsoft Office and Windows in Slovak
where those have a word, and plain everyday Slovak (or LibreOffice's word)
where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the infinitive, as Slovak Office does: Uložiť (Save),
  Otvoriť (Open), Zavrieť (Close), Vložiť (Insert), Pridať účet (Add
  account), Odoslať pozvánku (Send invitation).
- **The reader is addressed formally** (vykanie), with lowercase vy, váš,
  vám, as current Microsoft Slovak does: „Vaša odpoveď sa uchová pre tento
  súbor v tomto počítači.“, „Najprv zavrite ten program.“ Where a sentence
  can do without a pronoun, leave it out.
- **Capitals**: sentence case everywhere, also on ribbon buttons, tabs and
  dialog titles, as Slovak Office does: Rozloženie strany, Uložiť ako
  šablónu, Vybrať všetko. Proper names and the suite's app names keep their
  capital: Pošta, Kalendár, Kontakty.
- **Tab and group names** are nouns or the noun Office uses: Súbor, Domov,
  Návrh, Rozloženie, Revízia, Schránka, Písmo, Odsek. Where Office names a
  tab with a verb, keep its verb: Vložiť, Kresliť, Zobraziť.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, untranslated, wherever Slovak word order puts them. Slovak cannot
  decline a placeholder, so put a noun in front of it in the needed case and
  leave the placeholder in the nominative: „Odpojiť tabuľku {name}“, „Zmeniť
  stream {name}“, „Hárok {name}“; or use a colon: „Tabuľka: {name}“,
  „Organizátor: {name}“.
- **Gender of `{name}`**: a person's or a file's gender is not known, so never
  make a past-tense verb or adjective agree with `{name}`. Write „{name}:
  prijaté“ or „Prijaté: {name}“, not „{name} prijal“; „{name}: odmietnuté“,
  not „{name} odmietla“. The same for `{count} added`: „Pridané do
  kalendára {calendar}: {count}“.
- **Keys and shortcuts** stay as they are: Ctrl+S, Ctrl+N, F7, Shift+F2,
  Enter, Esc: „Nová udalosť (Ctrl+N)“.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, glTF, `=SUM(ABOVE)`, `dd/mm/yyyy`:
  „Udalosti zo súboru .ics“.
- **Brand and product names** stay in Latin letters, unchanged: Rutba Office,
  Microsoft, Word, Excel, PowerPoint, Outlook, Windows, Google, iCloud,
  YouTube Studio, LinkedIn Live Studio, SmartArt, WordArt, Power Query. Do
  not put Slovak case endings on them; put a noun in front, as Office does:
  „v aplikácii Word“, „na platforme Twitch“, „zo služby Rumble“, „v kópii
  Office“.
- **The suite's app names** are translated as in the table below and are
  written with a capital. In running text, where the app is meant, use
  „v aplikácii Pošta“, „do aplikácie Kalendár“ so the name stays in the
  nominative; on a short label the bare name is enough: „Ľudia z Kontaktov“
  may become „Ľudia z aplikácie Kontakty“.
- **Punctuation**: Slovak quotation marks „…“ (low 9 opening, high 6
  closing): „voľno 12. marca?“. The ellipsis … stays at the end of a command
  that opens a dialog: Prehľadávať…, Ďalšie farby…. **No em dash**: where the
  English has one, write a colon, a comma, parentheses or a new sentence:
  „Skupina nemá vlastnú výplň ani obrys. Formátujte tvar v nej.“ and
  „B5 (176 × 250 mm)“. Do not use a spaced en dash as a dash either; an en
  dash in a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, also after one-letter
  prepositions (v, k, s, z, o, u, a, i) and before units and percent signs,
  where Slovak print would use one.
- **Counts** use Slovak's four forms, `one`, `few`, `many`, `other`, in that
  order. `few` is 2 to 4, `many` is for fractions (1,5), `other` is 0 and 5
  and up. Every form is written in full with `{count}`, and a verb or
  adjective agrees with the form:
  - one: „{count} súbor bol odstránený“
  - few: „{count} súbory boli odstránené“
  - many: „{count} súboru bolo odstránených“ (1,5 súboru)
  - other: „{count} súborov bolo odstránených“
  On short labels a colon spares the agreement: „Zapísané udalosti: {count}“.
- **Numbers and dates**: the window formats them from the region (decimal
  comma, space between thousands, 12. 3. 2026, 24-hour clock), so a label
  never spells out a format or a separator. Where the English shows a sample
  date in a sentence, write it the Slovak way: „12. marca“.
- **Words of the program**: Slovak Office calls an account konto, a folder
  priečinok, a page strana (not stránka, except a web page), a slide snímka,
  a meeting schôdza, a sheet hárok. Use these and nothing else.
- **Same word, two meanings**: Office itself uses Späť for both Undo and
  Back, and Obnoviť for both Refresh and Restore; keep that, the place makes
  it clear. Delete is Odstrániť, Remove is Odobrať, so a list can offer both.

## The apps

| English | Slovak |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenty |
| Worksheets | Hárky |
| Presentations | Prezentácie |
| Mail | Pošta |
| Calendar | Kalendár |
| Contacts | Kontakty |
| Pictures | Obrázky |
| Image (the editor) | Obraz |
| Video | Video |
| Home (the launcher) | Domov |
| Talk | Hovory |
| Locker | Trezor |
| Colour | Farba |
| Base | Databáza |
| Broadcast | Vysielanie |
| Recorder | Záznamník |

## Tabs and frame

| English | Slovak |
| :-- | :-- |
| File | Súbor |
| Home | Domov |
| Insert | Vložiť |
| Draw | Kresliť |
| Design | Návrh |
| Layout | Rozloženie |
| Page Layout | Rozloženie strany |
| References | Referencie |
| Mailings | Korešpondencia |
| Review | Revízia |
| View | Zobraziť |
| Help | Pomocník |
| Formulas | Vzorce |
| Data | Údaje |
| Automate | Automatizovať |
| Transitions | Prechody |
| Animations | Animácie |
| Slide Show | Prezentácia |
| Record | Nahrávanie |
| Table Design | Návrh tabuľky |
| Table Layout | Rozloženie tabuľky |
| Shape Format | Formát tvaru |
| Picture Format | Formát obrázka |
| Ribbon | Pás s nástrojmi |
| Pane | Tabla |
| Status bar | Stavový riadok |
| Dialog | Dialógové okno |
| Settings | Nastavenia |
| Language | Jazyk |
| Theme | Motív |

## Commands

| English | Slovak |
| :-- | :-- |
| New | Nový (Nová, Nové to agree with the noun) |
| Open | Otvoriť |
| Save | Uložiť |
| Save As | Uložiť ako |
| Save as Template | Uložiť ako šablónu |
| Close | Zavrieť |
| Print | Tlačiť |
| Export | Exportovať |
| Import | Importovať |
| Share | Zdieľať |
| Undo | Späť |
| Redo | Znova |
| Cut | Vystrihnúť |
| Copy | Kopírovať |
| Paste | Prilepiť |
| Paste Special | Prilepiť špeciálne |
| Delete | Odstrániť |
| Remove | Odobrať |
| Rename | Premenovať |
| Select All | Vybrať všetko |
| Find | Nájsť |
| Replace | Nahradiť |
| Go To | Prejsť na |
| Insert | Vložiť |
| Apply | Použiť |
| Apply to All | Použiť na všetky |
| OK | OK |
| Cancel | Zrušiť |
| Yes / No | Áno / Nie |
| Done | Hotovo |
| Next / Previous | Ďalej / Späť (buttons); Nasledujúci / Predchádzajúci (a slide, a page, a match) |
| Back | Späť |
| Refresh | Obnoviť |
| Update | Aktualizovať |
| Accept / Reject | Prijať / Odmietnuť |
| Sort | Zoradiť |
| Filter | Filter (the control); Filtrovať (the command) |
| Group / Ungroup | Zoskupiť / Zrušiť zoskupenie |
| Merge / Split | Zlúčiť / Rozdeliť |
| Zoom In / Zoom Out | Priblížiť / Oddialiť |
| Full screen | Celá obrazovka |
| Minimise / Maximise / Restore | Minimalizovať / Maximalizovať / Obnoviť |
| Expand / Collapse | Rozbaliť / Zbaliť |
| Browse | Prehľadávať |
| Add | Pridať |
| Edit | Upraviť |
| Reset | Obnoviť pôvodné |
| Clear | Vymazať |
| Show / Hide | Zobraziť / Skryť |
| More | Viac; Ďalšie (before a noun: Ďalšie farby…) |
| None | Žiadne |
| Automatic | Automaticky |

## Text and documents

| English | Slovak |
| :-- | :-- |
| Document | Dokument |
| Page | Strana |
| Paragraph | Odsek |
| Line | Riadok |
| Word (a word) | Slovo |
| Character | Znak |
| Font | Písmo |
| Font size | Veľkosť písma |
| Bold / Italic / Underline | Tučné / Kurzíva / Podčiarknuté |
| Strikethrough | Prečiarknuté |
| Subscript / Superscript | Dolný index / Horný index |
| Text highlight colour | Farba zvýraznenia textu |
| Font colour | Farba písma |
| Colour | Farba |
| Style / Styles | Štýl / Štýly |
| Heading | Nadpis |
| Title | Názov |
| Bullets / Numbering | Odrážky / Číslovanie |
| Multilevel List | Viacúrovňový zoznam |
| List | Zoznam |
| Indent | Zarážka |
| Alignment / Align Left / Centre / Align Right / Justify | Zarovnanie / Zarovnať doľava / Centrovať / Zarovnať doprava / Zarovnať podľa okrajov |
| Line spacing | Riadkovanie |
| Margins | Okraje |
| Orientation / Portrait / Landscape | Orientácia / Na výšku / Na šírku |
| Size (paper) | Veľkosť |
| Columns | Stĺpce |
| Breaks | Zlomy |
| Header / Footer | Hlavička / Päta |
| Footnote / Endnote | Poznámka pod čiarou / Vysvetlivka |
| Table of Contents | Obsah |
| Caption | Popis |
| Bookmark | Záložka |
| Cross-reference | Krížový odkaz |
| Citation / Bibliography | Citácia / Bibliografia |
| Index | Register |
| Comment / Comments | Komentár / Komentáre |
| Track Changes | Sledovať zmeny |
| Spelling | Pravopis |
| Thesaurus | Synonymický slovník |
| Word Count | Počet slov |
| Watermark | Vodoznak |
| Page Colour | Farba strany |
| Text Box | Textové pole |
| WordArt | WordArt |
| Equation | Rovnica |
| Symbol | Symbol |
| Hyperlink / Link | Hypertextové prepojenie / Prepojenie |
| Mail Merge | Hromadná korešpondencia |
| Envelopes / Labels | Obálky / Menovky |
| Template | Šablóna |
| Untitled | Bez názvu |

## Workbooks

| English | Slovak |
| :-- | :-- |
| Workbook | Zošit |
| Sheet / Worksheet | Hárok / Pracovný hárok |
| Cell / Cells | Bunka / Bunky |
| Row / Rows | Riadok / Riadky |
| Column / Columns | Stĺpec / Stĺpce |
| Range | Rozsah |
| Formula | Vzorec |
| Function | Funkcia |
| Number format | Formát čísla |
| Currency / Percentage / Date / Time | Mena / Percento / Dátum / Čas |
| Freeze Panes | Ukotviť priečky |
| Conditional Formatting | Podmienené formátovanie |
| Format as Table | Formátovať ako tabuľku |
| PivotTable | Kontingenčná tabuľka |
| Chart | Graf |
| Sparklines | Mini grafy |
| Slicer | Rýchly filter |
| Data Validation | Overenie údajov |
| Remove Duplicates | Odstrániť duplicity |
| Text to Columns | Text na stĺpce |
| Power Query | Power Query |
| Name box | Pole s názvom |
| Formula bar | Riadok vzorcov |
| AutoSum | Automatický súčet |
| Sum / Average / Count / Min / Max | Súčet / Priemer / Počet / Minimum / Maximum |

## Presentations

| English | Slovak |
| :-- | :-- |
| Presentation | Prezentácia |
| Slide / Slides | Snímka / Snímky |
| New Slide | Nová snímka |
| Layout | Rozloženie |
| Section | Sekcia |
| Master | Predloha |
| Notes | Poznámky |
| Handout | Podklady |
| Shape / Shapes | Tvar / Tvary |
| Picture / Pictures | Obrázok / Obrázky |
| Fill / Outline | Výplň / Obrys |
| Shadow / Glow / Reflection | Tieň / Žiara / Odraz |
| Transition | Prechod |
| Animation | Animácia |
| From Beginning / From Current Slide | Od začiatku / Od aktuálnej snímky |
| Presenter View | Zobrazenie prednášajúceho |
| Rehearse Timings | Nacvičiť časovanie |
| Video / Audio | Video / Zvuk |

## Mail, calendar, contacts, pictures

| English | Slovak |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Doručená pošta / Odoslaná pošta / Koncepty / Pošta na odoslanie / Nevyžiadaná pošta / Archív / Kôš |
| Message | Správa |
| New message | Nová správa |
| Reply / Reply All / Forward | Odpovedať / Odpovedať všetkým / Poslať ďalej |
| Send | Odoslať |
| Attachment | Príloha |
| Account | Konto |
| Folder | Priečinok |
| Search | Hľadať |
| Unread / Flagged | Neprečítané / Označené príznakom |
| Rules | Pravidlá |
| Signature | Podpis |
| Event | Udalosť |
| Meeting | Schôdza |
| Today / Day / Week / Month / Agenda | Dnes / Deň / Týždeň / Mesiac / Program |
| Repeat | Opakovať |
| Reminder | Pripomenutie |
| Contact | Kontakt |
| Address book | Adresár |
| Phone / Email / Address | Telefón / E-mail / Adresa |
| Rotate / Crop / Flip | Otočiť / Orezať / Preklopiť |
| Rating / Tags | Hodnotenie / Značky |
| Slideshow | Premietanie (the Pictures slideshow; the PowerPoint tab stays Prezentácia) |
| Brightness / Contrast | Jas / Kontrast |
| Trim / Split | Skrátiť / Rozdeliť |
| Export video | Exportovať video |

## Errors and plain sentences

Error messages, notes and tooltips are full sentences: translate the
meaning, in plain formal Slovak, not word for word. Keep a sentence's facts
(a number, a name in `{braces}`, a key) exactly. Prefer „Tento súbor sa
nepodarilo otvoriť.“ over a literal rendering, and a passive or reflexive
form (sa uchová, sa odošle) where the English hides who acts.

## More recurring terms

| English | Slovak |
| :-- | :-- |
| Table (database) | Tabuľka |
| Record / Records | Záznam / Záznamy |
| Field | Pole |
| Database | Databáza |
| Data Files (the app's own name in text) | Dátové súbory |
| Read only | Iba na čítanie |
| Source | Zdroj |
| Network share | Sieťový priečinok |
| Web address | Webová adresa |
| Server address | Adresa servera |
| Password | Heslo |
| Key (secret) / Stream key | Kľúč / Kľúč streamu |
| Protected store (of this computer) | Chránené úložisko |
| Sign-in | Prihlásenie |
| Go live / Live stream | Spustiť vysielanie naživo / Živé vysielanie |
| Invitation / Invite | Pozvánka / Pozvať |
| Organizer | Organizátor |
| Room / Rooms and resources | Miestnosť / Miestnosti a prostriedky |
| Mailbox | Poštová schránka |
| Time zone | Časové pásmo |
| All day | Celý deň |
| Accepted / Declined / Tentative | Prijaté / Odmietnuté / Predbežne |
| Busy / Free | Zaneprázdnený / Voľný |
| Availability | Dostupnosť |
| Occurrence / Every occurrence | Výskyt / Všetky výskyty |
| Does not repeat | Neopakuje sa |
| Cancellation | Zrušenie |
| Standard colours / Recent colours | Štandardné farby / Naposledy použité farby |
| Background / Accent | Pozadie / Zvýraznenie |
| Borders | Orámovanie |
| Bring Forward / Bring to Front | Preniesť dopredu / Preniesť do popredia |
| Banded Rows / Banded Columns | Pruhované riadky / Pruhované stĺpce |
| Alt Text | Alternatívny text |
| Accessibility / Check Accessibility | Prístupnosť / Skontrolovať prístupnosť |
| Clipboard | Schránka |
| Clear formatting | Vymazať formátovanie |
| Change case | Zmeniť veľkosť písmen |
| Blank document / Blank presentation / Blank worksheet | Prázdny dokument / Prázdna prezentácia / Prázdny hárok |
| Attach / Attachments | Priložiť / Prílohy |
| Cc / Bcc | Kópia / Skrytá kópia |

## Intents and versions

### Voice

Commands take the infinitive: Uložiť, Nahrať, Zavrieť okno. Sentences address
the reader formally (vykanie), with the plural imperative and lower-case vy,
váš: Skontrolujte pripojenie. Progress and results take the reflexive form
(Ukladá sa…, Súbor sa nepodarilo otvoriť), never a past tense agreeing with
`{name}`.

### By intent

| Intent | How this language phrases it | English | Slovak |
| :-- | :-- | :-- | :-- |
| action (button) | Infinitive, verb first, object after it | Record | Nahrať |
| action (menu) | Infinitive with its object, sentence case | Close Window | Zavrieť okno |
| name | Noun phrase in the nominative, no verb, no full stop | Uppercase | Veľké písmená |
| heading | Noun phrase, sentence case, no full stop; dialog titles too | Folder settings | Nastavenia priečinka |
| state (working) | Reflexive present (sa), then … | Finding suggestions… | Hľadajú sa návrhy… |
| state (done) | Noun + je + passive participle, agreeing with a known noun; with `{name}`, the colon form | Link copied. Paste it anywhere. | Prepojenie je skopírované. Vložte ho kamkoľvek. |
| question | Infinitive first; complete opens with Chcete; a noun before `{name}` | Remove {name}? | Odobrať kontakt {name}? |
| advice | Plural imperative; a purpose first with Ak chcete | Sign in to Talk to accept. | Ak chcete pozvánku prijať, prihláste sa do aplikácie Hovory. |
| explain | Statement in the present tense, or a noun phrase with a full stop | Bullet character. | Znak odrážky. |
| warning | Plain statement of the result; nie je možné vrátiť späť for "cannot be undone" | Cannot be undone. | Túto akciu nie je možné vrátiť späť. |
| error: cannot | Nie je možné + infinitive when it is not possible; Nepodarilo sa + infinitive when an attempt did not work | Could not set up | Nepodarilo sa nastaviť |
| error: failed | The noun + zlyhal/a/o, agreeing with the noun | Recognition failed. | Rozpoznávanie zlyhalo. |
| error: not-found | Chýba + the noun; with a placeholder, Nenašlo sa: {name} | Picture file is missing | Chýba súbor obrázka |
| error: not-enough | Nie je dosť + genitive; príliš veľký / dlhý agreeing with the noun | Not enough disk space to record. | Na disku nie je dosť miesta na nahrávanie. |
| error: unavailable | The noun + nie je k dispozícii, which needs no agreement | Speech is not available. | Reč nie je k dispozícii. |
| error: not-allowed | The noun + nie je povolený/á/é; Prístup k + dative + nebol povolený | Camera not allowed. | Kamera nie je povolená. |
| error: invalid | „{x}“ nie je platný/á/é + noun; Neplatný + noun | "{text}" is not a range | „{text}“ nie je platný rozsah |
| error: other | What to do, as a plural imperative, or what is wrong, as a statement | Keep at least one worksheet visible. | Ponechajte viditeľný aspoň jeden hárok. |
| sample | Write it as a Slovak user would type it; keep its case and length | free 12 March? | voľno 12. marca? |

The sample row is the glossary's own quotation example: the suite has
no sample label.

### Short, medium and complete

- **Short** keeps, in this order: the verb of an action, its object noun, and
  the key words of an error (Nie je možné, Nepodarilo sa, Chýba, nie je). It
  drops, in this order: possessives (váš, svoj), demonstratives (tento, ten),
  place and purpose phrases (v tomto dokumente, aby ...), adjectives, a second
  sentence.
- Short never drops a placeholder, a shortcut in brackets (Ctrl+S), the
  ellipsis of a command that opens a dialog, or a diacritic.
- **Abbreviations** only in short, only when the words still do not fit, and
  only these standard ones: č. (číslo), str. (strana), max., min. (minimum),
  napr., tzn. Word abbreviations take a full stop; units and codes stay as
  symbols with none (MB, px, s, min for minutes). Never abbreviate a verb, an
  app name or a button's word.
- **A counted label** keeps `{count}` and all four forms in every version. To
  shorten it, drop the verb or use the colon form, which needs no agreement
  and is the same text in each form: medium `{count} súborov bolo
  odstránených` (other) becomes short `Odstránené: {count}` in one, few, many,
  other.
- **Complete** adds what the English complete adds: the object (Nájsť
  príjemcu v zozname), the place, the reason, the next step. A message in
  complete is whole sentences, each with its full stop, and a question opens
  with Chcete. Tooltips and screen readers read complete, so it must make
  sense with nothing around it.
- Short is never wider than medium, nor medium than complete. The three may
  be the same text.

Worked examples (English short | medium | complete, then Slovak):

1. Find | Find Recipient | Find a recipient in the list
   Nájsť | Nájsť príjemcu | Nájsť príjemcu v zozname
2. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Odobrať kontakt {name}? | Odobrať kontakt {name} zo zoznamu kontaktov? | Chcete odobrať kontakt {name} zo zoznamu kontaktov?
3. Camera not allowed. | The camera was not allowed. | The camera was not allowed. Allow it in your system's privacy settings.
   Kamera nie je povolená. | Prístup ku kamere nebol povolený. | Prístup ku kamere nebol povolený. Povoľte ho v nastaveniach ochrany súkromia v systéme.

### Punctuation and marks

- **Ellipsis**: the single character …, with no space before it, at the end of
  a command that opens a dialog or asks for more (Prehľadávať…, Ďalšie
  farby…) and of a working state (Ukladá sa…). Not on a command that acts at
  once. A version keeps the ellipsis if the medium has it.
- **Colon, question mark, exclamation mark, semicolon**: no space before, one
  ordinary space after. Never a no-break space anywhere in pack text, also
  not after v, k, s, z, o, u, a, i.
- **Quotation marks**: „…“ (U+201E opening, U+201C closing), ‚…‘ inside a
  quotation. The English straight quotes round a placeholder become „{name}“.
- **Capitals**: sentence case on buttons, menu items, tabs, groups, headings
  and dialog titles: the first word and names only. After a colon, lower case
  unless a name follows.
- **Full stops**: an error, warning or message that is a sentence ends with a
  full stop, and so does every sentence in complete. A button, menu item, name,
  heading, tab or a status fragment without a verb takes none, as the English
  version does. Questions end with ?. Do not use exclamation marks. The stop
  after a day number (12. marca) is part of the date, not an end.
- **Percent**: Slovak print sets 25 % with a space; write it with an ordinary
  space where % stands for the noun, and joined where it is an adjective
  (25% zľava).

### Access keys

- Put `&` before one letter of the Slovak word, one `&` per label: &Edit is
  &Upraviť, Close Window is &Zavrieť okno. Latin script needs no (&X) form.
- Prefer the first letter of the first word, then a clear consonant in that
  word, then a letter of the next word.
- Never a letter with a diacritic (á ä č ď é í ĺ ľ ň ó ô ŕ š ť ú ý ž): on
  the Slovak keyboard most sit on the number row, so Alt with them reaches a
  digit on other layouts.
- Avoid i and l (hard to see underlined) and letters with descenders (g j p q
  y) when another letter is free. Each letter is unique within one menu or
  dialog, and a command keeps the same letter in every app where it can.
