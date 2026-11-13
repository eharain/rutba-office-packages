# Slovenian glossary for Rutba Office

The words the Slovenian pack (`lang-sl`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Slovenian (sl-SI) where those
exist, LibreOffice where Office has none, and plain everyday Slovenian
otherwise.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the imperative
  singular, as Slovenian Office does: Shrani (Save), Odpri (Open), Zapri
  (Close), Vstavi (Insert), Natisni (Print), Prilepi (Paste). Commands that are
  nouns in Office stay nouns: Skupna raba (Share), Posebno lepljenje (Paste
  Special).
- **The reader is addressed formally** (vikanje), as current Office does, in
  every sentence, instruction and question, with the second person plural and
  lower-case pronouns: Izberite datoteko. Ali želite shraniti spremembe?
  Vaš račun je dodan. Never mix "ti" forms into sentences; the singular
  imperative is only for short command labels.
- **Tab and group names** are nouns, as in Office: Osnovno, Vstavljanje,
  Risanje, Načrt, Postavitev, Pregled, Pogled; groups Odložišče, Pisava,
  Odstavek, Slogi, Urejanje. A tab is a noun even where the English tab looks
  like a verb (Insert tab = Vstavljanje, Insert command = Vstavi; Record tab =
  Snemanje, Record command = Snemaj).
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated, wherever Slovenian word order puts them:
  Preimenuj {name}, Tabela: {name}, {start} do {end} v pasu {zone}.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2. Key names in
  running text follow Windows: tipka Enter, tipka Esc. Nov dogodek (Ctrl+N).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`. Excel function
  names stay in English (SUM, VLOOKUP), as written in the formula.
- **Brand and product names** stay in Latin letters, undeclined where
  possible: Rutba Office, Microsoft, Word, Excel, PowerPoint, Outlook, Windows,
  Google, iCloud, YouTube, WhatsApp. Put a common noun before a brand so the
  noun carries the case: v storitvi YouTube Studio, v aplikaciji Rutba Office,
  s strežnika iCloud.
- **App names** are the Slovenian words in the table below and are capitalised
  as names. In a sentence, keep the name in the nominative after a common
  noun, so the name itself never takes a case ending: v aplikaciji Pošta, iz
  aplikacije Stiki (not v Pošti, iz Stikov).
- **Punctuation**: Slovenian quotation marks „ and “ („prosto 12. marca?“),
  with ‚ and ‘ inside. The ellipsis … stays at the end of a command that opens
  a dialog, with no space: Prebrskaj…, Več barv…. Where the English has an em
  dash, write a colon, a comma, parentheses or a new sentence: "Accounts (long dash) a
  CalDAV server" becomes "Računi: strežnik CalDAV ali CardDAV". Do not use a
  spaced en dash as a dash either; an en dash in a range (1 to 10) is fine. A
  comma always comes before ki, ko, da, če, ker, kot (in a clause).
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only, also
  between a number and its unit or the percent sign (25 %, 15 min, 176 × 250 mm).
  Where the English writes `{percent}%`, the pack writes `{percent} %`.
- **Counts** use all four Slovenian plural forms, `one`, `two`, `few`,
  `other`, each written out in full with `{count}`. On one example:
  - one (1, 101, 201): {count} diapozitiv
  - two (2, 102, 202): {count} diapozitiva
  - few (3, 4, 103, 104, and decimals): {count} diapozitivi
  - other (0, 5 to 100, 105 ...): {count} diapozitivov

  The verb and any adjective agree with the form too: Zapisan je {count}
  dogodek / Zapisana sta {count} dogodka / Zapisani so {count} dogodki /
  Zapisanih je {count} dogodkov. A feminine noun: {count} oseba / {count}
  osebi / {count} osebe / {count} oseb. When the English one form is the same
  as other, still write all four Slovenian forms.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, 12. 3. 2026, 15.30); labels never spell out a format or write a date
  by hand. Ordinal day numbers take a full stop: Dan {n} od {count}.
- **Cases with placeholders**: Slovenian has six cases and a placeholder cannot
  decline, so put a declinable noun in front of it and let the noun take the
  case: ni mogoče odpreti datoteke {name}, v koledarju {calendar}, za prostor
  {room}, od osebe {name}. Or use a colon: Povabilo: {summary}. Never attach a
  case ending to a placeholder ({name}a).
- **Gender of `{name}`**: a person's name may be male or female, and past
  participles agree with it (sprejel / sprejela). Avoid this by putting oseba
  (feminine) or a noun in front, or by turning the sentence round: "{name}
  accepted." becomes "Oseba {name} je sprejela povabilo." or "Sprejeto: {name}".
  For things, use the noun's own gender: Datoteka {name} je shranjena.
- **Past participles for states**: a label describing a state uses the neuter
  participle where there is no noun: Shranjeno, Dodano, Spremenjeno, Poslano.
- **Capitalisation**: only the first word of a label is capitalised, as in
  Slovenian Office (Poravnaj levo, Prazen dokument, Nedavne barve), except names.

## The apps

| English | Slovenian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenti |
| Worksheets | Delovni listi |
| Presentations | Predstavitve |
| Mail | Pošta |
| Calendar | Koledar |
| Contacts | Stiki |
| Pictures | Fotografije |
| Image (the editor) | Slika |
| Video | Video |
| Home (the launcher) | Domov |

## Tabs and frame

| English | Slovenian |
| :-- | :-- |
| File | Datoteka |
| Home | Osnovno |
| Insert | Vstavljanje |
| Draw | Risanje |
| Design | Načrt |
| Layout | Postavitev |
| Page Layout | Postavitev strani |
| References | Sklici |
| Mailings | Pošiljanje |
| Review | Pregled |
| View | Pogled |
| Help | Pomoč |
| Formulas | Formule |
| Data | Podatki |
| Automate | Avtomatiziraj |
| Transitions | Prehodi |
| Animations | Animacije |
| Slide Show | Diaprojekcija |
| Record | Snemanje |
| Table Design | Načrt tabele |
| Table Layout | Postavitev tabele |
| Shape Format | Oblika oblike |
| Picture Format | Oblika slike |
| Ribbon | Trak |
| Pane | Podokno |
| Status bar | Vrstica stanja |
| Dialog | Pogovorno okno |
| Settings | Nastavitve |
| Language | Jezik |
| Theme | Tema |

## Commands

| English | Slovenian |
| :-- | :-- |
| New | Novo |
| Open | Odpri |
| Save | Shrani |
| Save As | Shrani kot |
| Save as Template | Shrani kot predlogo |
| Close | Zapri |
| Print | Natisni |
| Export | Izvozi |
| Import | Uvozi |
| Share | Skupna raba |
| Undo | Razveljavi |
| Redo | Uveljavi |
| Cut | Izreži |
| Copy | Kopiraj |
| Paste | Prilepi |
| Paste Special | Posebno lepljenje |
| Delete | Izbriši |
| Remove | Odstrani |
| Rename | Preimenuj |
| Select All | Izberi vse |
| Find | Najdi |
| Replace | Zamenjaj |
| Go To | Pojdi na |
| Insert | Vstavi |
| Apply | Uporabi |
| Apply to All | Uporabi za vse |
| OK | V redu |
| Cancel | Prekliči |
| Yes / No | Da / Ne |
| Done | Končano |
| Next / Previous | Naprej / Nazaj (buttons); naslednji / prejšnji (as adjectives, agreeing: naslednja stran, prejšnji diapozitiv) |
| Back | Nazaj |
| Refresh | Osveži |
| Update | Posodobi |
| Accept / Reject | Sprejmi / Zavrni |
| Sort | Razvrsti |
| Filter | Filter (the button and noun); Filtriraj (the verb) |
| Group / Ungroup | Združi / Razdruži |
| Merge / Split | Spoji / Razdeli |
| Zoom In / Zoom Out | Povečaj / Pomanjšaj |
| Full screen | Celozaslonski način |
| Minimise / Maximise / Restore | Minimiraj / Maksimiraj / Obnovi |
| Expand / Collapse | Razširi / Strni |
| Browse | Prebrskaj |
| Add | Dodaj |
| Edit | Uredi |
| Reset | Ponastavi |
| Clear | Počisti |
| Show / Hide | Pokaži / Skrij |
| More | Več |
| None | Brez |
| Automatic | Samodejno |

## Text and documents

| English | Slovenian |
| :-- | :-- |
| Document | Dokument |
| Page | Stran |
| Paragraph | Odstavek |
| Line | Vrstica |
| Word (a word) | Beseda |
| Character | Znak |
| Font | Pisava |
| Font size | Velikost pisave |
| Bold / Italic / Underline | Krepko / Ležeče / Podčrtano |
| Strikethrough | Prečrtano |
| Subscript / Superscript | Podpisano / Nadpisano |
| Text highlight colour | Barva označevanja besedila |
| Font colour | Barva pisave |
| Colour | Barva |
| Style / Styles | Slog / Slogi |
| Heading | Naslov (as in the style Naslov 1) |
| Title | Naslov (the style); naslov dokumenta where both appear together |
| Bullets / Numbering | Oznake / Oštevilčevanje |
| Multilevel List | Seznam z več ravnmi |
| List | Seznam |
| Indent | Zamik |
| Alignment / Align Left / Centre / Align Right / Justify | Poravnava / Poravnaj levo / Na sredino / Poravnaj desno / Obojestranska poravnava |
| Line spacing | Razmik med vrsticami |
| Margins | Robovi |
| Orientation / Portrait / Landscape | Usmerjenost / Pokončno / Ležeče |
| Size (paper) | Velikost |
| Columns | Stolpci |
| Breaks | Prelomi |
| Header / Footer | Glava / Noga |
| Footnote / Endnote | Sprotna opomba / Končna opomba |
| Table of Contents | Kazalo vsebine |
| Caption | Napis |
| Bookmark | Zaznamek |
| Cross-reference | Navzkrižni sklic |
| Citation / Bibliography | Navedek / Bibliografija |
| Index | Stvarno kazalo |
| Comment / Comments | Komentar / Komentarji |
| Track Changes | Sledi spremembam |
| Spelling | Črkovanje |
| Thesaurus | Slovar sopomenk |
| Word Count | Število besed |
| Watermark | Vodni žig |
| Page Colour | Barva strani |
| Text Box | Polje z besedilom |
| WordArt | WordArt |
| Equation | Enačba |
| Symbol | Simbol |
| Hyperlink / Link | Hiperpovezava / Povezava |
| Mail Merge | Spajanje dokumentov |
| Envelopes / Labels | Ovojnice / Nalepke |
| Template | Predloga |
| Untitled | Neimenovano |

## Workbooks

| English | Slovenian |
| :-- | :-- |
| Workbook | Delovni zvezek |
| Sheet / Worksheet | List / Delovni list |
| Cell / Cells | Celica / Celice |
| Row / Rows | Vrstica / Vrstice |
| Column / Columns | Stolpec / Stolpci |
| Range | Obseg |
| Formula | Formula |
| Function | Funkcija |
| Number format | Oblika zapisa števila |
| Currency / Percentage / Date / Time | Valuta / Odstotek / Datum / Čas |
| Freeze Panes | Zamrzni podokna |
| Conditional Formatting | Pogojno oblikovanje |
| Format as Table | Oblikuj kot tabelo |
| PivotTable | Vrtilna tabela |
| Chart | Grafikon |
| Sparklines | Grafikoni v celici |
| Slicer | Razčlenjevalnik |
| Data Validation | Preverjanje veljavnosti podatkov |
| Remove Duplicates | Odstrani dvojnike |
| Text to Columns | Besedilo v stolpce |
| Power Query | Power Query |
| Name box | Polje z imenom |
| Formula bar | Vnosna vrstica |
| AutoSum | Samodejna vsota |
| Sum / Average / Count / Min / Max | Vsota / Povprečje / Število / Najmanjše / Največje |

## Presentations

| English | Slovenian |
| :-- | :-- |
| Presentation | Predstavitev |
| Slide / Slides | Diapozitiv / Diapozitivi |
| New Slide | Nov diapozitiv |
| Layout | Postavitev |
| Section | Odsek |
| Master | Matrica (Matrica diapozitivov) |
| Notes | Opombe |
| Handout | Izroček |
| Shape / Shapes | Oblika / Oblike |
| Picture / Pictures | Slika / Slike |
| Fill / Outline | Polnilo / Oris |
| Shadow / Glow / Reflection | Senca / Žarenje / Odsev |
| Transition | Prehod |
| Animation | Animacija |
| From Beginning / From Current Slide | Od začetka / Od trenutnega diapozitiva |
| Presenter View | Pogled predstavitelja |
| Rehearse Timings | Vadi časovne uskladitve |
| Video / Audio | Video / Zvok |

## Mail, calendar, contacts, pictures

| English | Slovenian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Prejeto / Poslano / Osnutki / Odpošiljanje / Neželena e-pošta / Arhiv / Koš |
| Message | Sporočilo |
| New message | Novo sporočilo |
| Reply / Reply All / Forward | Odgovori / Odgovori vsem / Posreduj |
| Send | Pošlji |
| Attachment | Priloga |
| Account | Račun |
| Folder | Mapa |
| Search | Iskanje (the box, the noun); Išči (the command) |
| Unread / Flagged | Neprebrano / Označeno z zastavico |
| Rules | Pravila |
| Signature | Podpis |
| Event | Dogodek |
| Meeting | Sestanek |
| Today / Day / Week / Month / Agenda | Danes / Dan / Teden / Mesec / Dnevni red |
| Repeat | Ponavljanje (the setting); Ponovi (the command) |
| Reminder | Opomnik |
| Contact | Stik |
| Address book | Imenik |
| Phone / Email / Address | Telefon / E-pošta / Naslov |
| Rotate / Crop / Flip | Zasukaj / Obreži / Prezrcali |
| Rating / Tags | Ocena / Oznake |
| Slideshow | Diaprojekcija |
| Brightness / Contrast | Svetlost / Kontrast |
| Trim / Split | Obreži / Razdeli |
| Export video | Izvozi videoposnetek |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain formal Slovenian, not word for word. Keep a sentence's facts (a number,
a name in `{braces}`, a key) exactly. Prefer "Te datoteke ni bilo mogoče
odpreti." over a literal rendering, and "Ni poslano: {reason}" for a short
status line.

## More recurring terms

| English | Slovenian |
| :-- | :-- |
| Database | Zbirka podatkov |
| Table | Tabela |
| Record / Records | Zapis / Zapisi |
| Field | Polje |
| Source | Vir |
| Read only | Samo za branje |
| Network share | Mapa v skupni rabi v omrežju |
| Web address | Spletni naslov |
| Server | Strežnik |
| Password | Geslo |
| Key | Ključ |
| Sign-in | Prijava |
| This computer | Ta računalnik |
| Copy (a copy) | Kopija |
| Link / Unlink | Poveži / Prekini povezavo |
| Pin / Unpin | Pripni / Odpni |
| Invitation | Povabilo |
| Cancellation | Preklic |
| Organizer | Organizator |
| Accepted / Tentative / Declined | Sprejeto / Pogojno / Zavrnjeno |
| Busy / Free | Zasedeno / Prosto |
| Room / Rooms | Prostor / Prostori |
| Mailbox | Poštni predal |
| All day | Ves dan |
| Occurrence / Every occurrence | Pojavitev / Vse pojavitve |
| Time zone | Časovni pas |
| Availability | Razpoložljivost |
| Stream key | Ključ pretoka |
| Live stream / Go live | Pretakanje v živo / Začni v živo |
| Background | Ozadje |
| Accent | Poudarek |
| Borders | Obrobe |
| Banded Rows / Banded Columns | Pasovne vrstice / Pasovni stolpci |
| Bring Forward / Bring to Front | Premakni naprej / Postavi v ospredje |
| Alt Text | Nadomestno besedilo |
| Accessibility / Check Accessibility | Dostopnost / Preveri dostopnost |
| Clipboard | Odložišče |
| Clear formatting | Počisti oblikovanje |
| Change case | Spremeni velike/male črke |
| Recent colours / Standard colours / More colours… | Nedavne barve / Standardne barve / Več barv… |
| language pack | jezikovni paket |
| Voices and languages (the page) | Glasovi in jeziki |
| add-on | dodatek |
| speech engine | govorni pogon |
| speech model | govorni model |
| voice | glas |
| Add from a file (command) | Dodajanje iz datoteke |

## Intents and versions

### Voice

Command labels take the imperative singular: Shrani, Snemaj, Zapri okno; the
commands Office names with a noun stay nouns (Skupna raba). Every sentence
uses vikanje, with the plural imperative and lower-case vi, vaš: Izberite
datoteko. A state with no noun takes the neuter participle (Shranjeno).

### By intent

| Intent | How this language phrases it | English | Slovenian |
| :-- | :-- | :-- | :-- |
| action (button) | Imperative singular, verb first, object after it | Record | Snemaj |
| action (menu) | Imperative singular with its object, sentence case | Close Window | Zapri okno |
| name | Noun phrase in the nominative, no verb, no full stop | Uppercase | Velike črke |
| heading | Noun phrase, sentence case, no full stop; dialog titles too | Folder settings | Nastavitve mape |
| state (working) | Verbal noun, then … | Finding suggestions… | Iskanje predlogov… |
| state (done) | Noun + je + participle agreeing with a known noun; the neuter participle alone; with `{name}`, the colon form | Link copied. Paste it anywhere. | Povezava je kopirana. Prilepite jo kamor koli. |
| question | Želite + infinitive in short and medium; complete opens with Ali želite; a noun before `{name}` | Remove {name}? | Želite odstraniti stik {name}? |
| advice | Plural imperative; a purpose after a comma with da | Click elsewhere to break the word there. | Kliknite drugam, da tam prelomite besedo. |
| explain | Statement in the present tense, or a noun phrase with a full stop | Bullet character. | Znak oznake. |
| warning | Plain statement of the result; ni mogoče razveljaviti for "cannot be undone" | Cannot be undone. | Tega ni mogoče razveljaviti. |
| error: cannot | Ni mogoče + infinitive when it is not possible; Ni bilo mogoče + infinitive when an attempt did not work; the object in the genitive | Could not set up | Ni bilo mogoče nastaviti |
| error: failed | The noun + ni uspel/a/o, agreeing with the noun | Recognition failed. | Prepoznavanje ni uspelo. |
| error: not-found | The noun + manjka; with a placeholder, Ni najdeno: {name} | Picture file is missing | Datoteka slike manjka |
| error: not-enough | Ni dovolj + genitive; prevelik / predolg agreeing with the noun | Not enough disk space to record. | Na disku ni dovolj prostora za snemanje. |
| error: unavailable | The noun + ni na voljo, which needs no agreement | Speech is not available. | Govor ni na voljo. |
| error: not-allowed | The noun + ni dovoljen/a/o; Dostop do + genitive + ni bil dovoljen | Camera not allowed. | Kamera ni dovoljena. |
| error: invalid | „{x}“ ni veljaven/a/o + noun; Neveljaven + noun | "{text}" is not a range | „{text}“ ni veljaven obseg |
| error: other | What to do, as a plural imperative, or what is wrong, as a statement | Keep at least one worksheet visible. | Pustite viden vsaj en delovni list. |
| sample | Write it as a Slovenian user would type it; keep its case and length | free 12 March? | prosto 12. marca? |

The sample row is the glossary's own quotation example: the suite has
no sample label.

### Short, medium and complete

- **Short** keeps, in this order: the verb of an action, its object noun, and
  the key words of an error (Ni mogoče, ni uspelo, manjka, ni). It drops, in
  this order: possessives (vaš, svoj), demonstratives (ta, to), place and
  purpose phrases (v tem dokumentu, da ...), adjectives, a second sentence.
- Short never drops a placeholder, a shortcut in brackets (Ctrl+S), the
  ellipsis of a command that opens a dialog, or a č, š or ž.
- **Abbreviations** only in short, only when the words still do not fit, and
  only these standard ones: št. (številka), str. (stran), npr., oz., maks.,
  min. (minimum). Word abbreviations take a full stop; units and codes stay as
  symbols with none (MB, px, s, min for minutes). Never abbreviate a verb, an
  app name or a button's word.
- **A counted label** keeps `{count}` and all four forms (one, two, few,
  other) in every version. To shorten it, drop the verb or use the colon form,
  which needs no agreement and is the same text in each form: medium
  `Izbrisanih je {count} zapisov` (other) becomes short `Izbrisano: {count}`
  in all four forms.
- **Complete** adds what the English complete adds: the object (Najdi
  prejemnika na seznamu), the place, the reason, the next step. A message in
  complete is whole sentences, each with its full stop, and a question opens
  with Ali želite. Tooltips and screen readers read complete, so it must make
  sense with nothing around it.
- Short is never wider than medium, nor medium than complete. The three may
  be the same text.

Worked examples (English short | medium | complete, then Slovenian):

1. Find | Find Recipient | Find a recipient in the list
   Najdi | Najdi prejemnika | Najdi prejemnika na seznamu
2. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Želite odstraniti stik {name}? | Želite odstraniti stik {name} s seznama stikov? | Ali želite odstraniti stik {name} s seznama stikov?
3. Camera not allowed. | The camera was not allowed. | The camera was not allowed. Allow it in your system's privacy settings.
   Kamera ni dovoljena. | Dostop do kamere ni bil dovoljen. | Dostop do kamere ni bil dovoljen. Dovolite ga v nastavitvah zasebnosti sistema.

### Punctuation and marks

- **Ellipsis**: the single character …, with no space before it, at the end of
  a command that opens a dialog or asks for more (Prebrskaj…, Več barv…) and
  of a working state (Shranjevanje…). Not on a command that acts at once. A
  version keeps the ellipsis if the medium has it.
- **Colon, question mark, exclamation mark, semicolon**: no space before, one
  ordinary space after. Never a no-break space anywhere in pack text.
- **Quotation marks**: „…“ (U+201E opening, U+201C closing), ‚…‘ inside a
  quotation. The English straight quotes round a placeholder become „{name}“.
  Do not use the »…« marks that Slovenian print also allows.
- **Capitals**: sentence case on buttons, menu items, tabs, groups, headings
  and dialog titles: the first word and names only. After a colon, lower case
  unless a name follows.
- **Full stops**: an error, warning or message that is a sentence ends with a
  full stop, and so does every sentence in complete. A button, menu item, name,
  heading, tab or a status fragment without a verb takes none, as the English
  version does. Questions end with ?. Do not use exclamation marks. A comma
  comes before ki, ko, da, če, ker in every version.
- **Percent**: with an ordinary space, as the glossary sets it: 25 %.

### Access keys

- Put `&` before one letter of the Slovenian word, one `&` per label: &Edit is
  &Uredi, Close Window is &Zapri okno. Latin script needs no (&X) form.
- Prefer the first letter of the first word, then a clear consonant in that
  word, then a letter of the next word.
- Never č, š or ž (nor ć, đ in a borrowed name): on the Slovenian keyboard
  they sit where other layouts have punctuation, so Alt with them does not
  carry over.
- Avoid i and l (hard to see underlined) and letters with descenders (g j p q
  y) when another letter is free. Each letter is unique within one menu or
  dialog, and a command keeps the same letter in every app where it can.
