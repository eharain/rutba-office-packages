# Latvian glossary for Rutba Office

The words the Latvian pack (`lv`) uses for the suite's recurring terms, so the
same thing is called the same everywhere. It follows the words people already
know from Microsoft Office and Windows in Latvian where those have a word, and
plain everyday Latvian where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the infinitive, as
  Latvian Office does: Saglabāt (Save), Atvērt (Open), Aizvērt (Close),
  Ievietot (Insert), Pievienot kontu (Add account), Dzēst visu (Delete all).
- **The reader is addressed formally**, with the plural "jūs", written in
  lower case inside a sentence, as current Latvian Office and Windows do.
  Instructions in full sentences use the second person plural imperative:
  Vispirms aizveriet šo programmu (Close that program first). Pievienojiet
  kontu lietotnē Pasts (Add one in Mail).
- **Capitals**: sentence case everywhere. English Title Case becomes one
  capital letter at the start: Lappuses izkārtojums (Page Layout), Īpašā
  ielīmēšana (Paste Special), Līdzināt pa kreisi (Align Left).
- **Tab and group names** take a noun where Office has one (Sākums,
  Noformējums, Izkārtojums, Pārskatīšana, Skats, Starpliktuve) and the
  infinitive where Office uses a verb for the tab (Ievietot, Zīmēt, Ierakstīt).
- **Placeholders** such as `{name}`, `{count}`, `{host}` stay exactly as
  written, in braces, untranslated, wherever Latvian word order puts them.
- **Cases with placeholders**: a placeholder cannot take a case ending, so put
  a plain noun in front of it to carry the case, and leave the placeholder in
  the nominative: Atvienot tabulu {name} (Unlink {name}), Atvērt lietotnē
  {app}, Serverī {server}. Where no noun fits, use a colon: Tabula: {name}.
- **Gender of `{name}`**: Latvian adjectives and participles agree in gender,
  and `{name}` has none we can know. Let the participle agree with a noun
  instead: Fails {name} ir saglabāts, not "{name} ir saglabāts/saglabāta".
  For a person, prefer wording with no participle: {name} pieņēma (accepted),
  {name} noraidīja (declined), using the past tense verb, which has one form
  for both genders.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Esc, Enter.
  Jauns notikums (Ctrl+N).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`. They are not
  declined; a noun carries the case: Notikumi no .ics faila.
- **Brand and product names** stay in Latin letters and are not declined:
  Rutba Office, Word, Excel, PowerPoint, Outlook, Windows, Google, Microsoft,
  iCloud, YouTube, Facebook. A noun in front carries the case: programmā Word,
  kontā Google, platformā YouTube Studio.
- **The suite's app names** are translated as in the table below and are
  capitalised as names. In a sentence they follow a generic noun and stay in
  the nominative: lietotnē Pasts, lietotnē Kontakti, no lietotnes Kalendārs.
- **Diacritics** are always written: ā č ē ģ ī ķ ļ ņ š ū ž. Never replace
  them with plain letters or with digraphs.
- **Punctuation**: Latvian quotation marks „ and ” (low opening, high
  closing): „brīvs 12. martā?”. A comma before subordinate clauses (kas, kur,
  ja, kad, lai) as Latvian grammar requires. The ellipsis … stays at the end
  of a command that opens a dialog: Saglabāt kā…, Pārlūkot…
- **No em dash.** Latvian writing uses the dash (domuzīme) a lot, but the pack
  does not. Where the English has (long dash) , write a colon, a comma, parentheses or a
  new sentence: "B5 (long dash) 176 × 250 mm" becomes "B5: 176 × 250 mm". No spaced en
  dash either. An en dash in a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, also between a number and its
  unit (15 minūtes, 50 %).
- **Counts** use Latvian's three plural forms, written in this order:
  `zero`, `one`, `other`.
  - `one`: numbers ending in 1 except 11 (1, 21, 31, 101): singular noun.
  - `zero`: 0, 10 to 20, and numbers ending in 0 or in 11 to 19 (30, 40,
    111): plural noun.
  - `other`: everything else (2 to 9, 22 to 29 ...): plural noun.
  - In practice `zero` and `other` are usually the same text; write both out.
    Participles agree with the noun:
    `zero: {count} faili ir atlasīti`, `one: {count} fails ir atlasīts`,
    `other: {count} faili ir atlasīti`.
  - A second example with a feminine noun: `zero: {count} izmaiņas`,
    `one: {count} izmaiņa`, `other: {count} izmaiņas`;
    `zero: {count} minūtes iepriekš`, `one: {count} minūti iepriekš`,
    `other: {count} minūtes iepriekš`.
- **Numbers and dates**: the window formats them from the region (decimal
  comma, space between thousands, dates as 12.03.2026.), so labels never spell
  out a format. A date written in prose takes the ordinal dot: 12. martā.
- **Short labels**: Latvian runs longer than English. Keep ribbon buttons,
  tabs and menu items short, drop "šo/to" where the meaning stays clear.

## The apps

| English | Latvian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenti |
| Worksheets | Darblapas |
| Presentations | Prezentācijas |
| Mail | Pasts |
| Calendar | Kalendārs |
| Contacts | Kontakti |
| Pictures | Attēli |
| Image (the editor) | Attēlu redaktors |
| Video | Video |
| Home (the launcher) | Sākums |

## Tabs and frame

| English | Latvian |
| :-- | :-- |
| File | Fails |
| Home | Sākums |
| Insert | Ievietot |
| Draw | Zīmēt |
| Design | Noformējums |
| Layout | Izkārtojums |
| Page Layout | Lappuses izkārtojums |
| References | Atsauces |
| Mailings | Dokumentu sūtnes |
| Review | Pārskatīšana |
| View | Skats |
| Help | Palīdzība |
| Formulas | Formulas |
| Data | Dati |
| Automate | Automatizēt |
| Transitions | Pārejas |
| Animations | Animācijas |
| Slide Show | Slaidrāde |
| Record | Ierakstīt |
| Table Design | Tabulas noformējums |
| Table Layout | Tabulas izkārtojums |
| Shape Format | Formas formāts |
| Picture Format | Attēla formāts |
| Ribbon | Lente |
| Pane | Rūts |
| Status bar | Statusa josla |
| Dialog | Dialoglodziņš |
| Settings | Iestatījumi |
| Language | Valoda |
| Theme | Dizains |

## Commands

| English | Latvian |
| :-- | :-- |
| New | Jauns |
| Open | Atvērt |
| Save | Saglabāt |
| Save As | Saglabāt kā |
| Save as Template | Saglabāt kā veidni |
| Close | Aizvērt |
| Print | Drukāt |
| Export | Eksportēt |
| Import | Importēt |
| Share | Koplietot |
| Undo | Atsaukt |
| Redo | Atcelt atsaukšanu |
| Cut | Izgriezt |
| Copy | Kopēt |
| Paste | Ielīmēt |
| Paste Special | Īpašā ielīmēšana |
| Delete | Dzēst |
| Remove | Noņemt |
| Rename | Pārdēvēt |
| Select All | Atlasīt visu |
| Find | Atrast |
| Replace | Aizstāt |
| Go To | Pāriet uz |
| Insert | Ievietot |
| Apply | Lietot |
| Apply to All | Lietot visiem |
| OK | Labi |
| Cancel | Atcelt |
| Yes / No | Jā / Nē |
| Done | Gatavs |
| Next / Previous | Nākamais / Iepriekšējais |
| Back | Atpakaļ |
| Refresh | Atsvaidzināt |
| Update | Atjaunināt |
| Accept / Reject | Pieņemt / Noraidīt |
| Sort | Kārtot |
| Filter | Filtrs (command: Filtrēt) |
| Group / Ungroup | Grupēt / Atgrupēt |
| Merge / Split | Sapludināt / Sadalīt |
| Zoom In / Zoom Out | Tuvināt / Tālināt |
| Full screen | Pilnekrāna režīms |
| Minimise / Maximise / Restore | Minimizēt / Maksimizēt / Atjaunot |
| Expand / Collapse | Izvērst / Sakļaut |
| Browse | Pārlūkot |
| Add | Pievienot |
| Edit | Rediģēt |
| Reset | Atiestatīt |
| Clear | Notīrīt |
| Show / Hide | Rādīt / Paslēpt |
| More | Vairāk |
| None | Nav |
| Automatic | Automātiski |

## Text and documents

| English | Latvian |
| :-- | :-- |
| Document | Dokuments |
| Page | Lappuse |
| Paragraph | Rindkopa |
| Line | Rindiņa |
| Word (a word) | Vārds |
| Character | Rakstzīme |
| Font | Fonts |
| Font size | Fonta lielums |
| Bold / Italic / Underline | Treknraksts / Slīpraksts / Pasvītrojums |
| Strikethrough | Pārsvītrojums |
| Subscript / Superscript | Apakšraksts / Augšraksts |
| Text highlight colour | Teksta iezīmēšanas krāsa |
| Font colour | Fonta krāsa |
| Colour | Krāsa |
| Style / Styles | Stils / Stili |
| Heading | Virsraksts |
| Title | Nosaukums |
| Bullets / Numbering | Aizzīmes / Numerācija |
| Multilevel List | Vairāklīmeņu saraksts |
| List | Saraksts |
| Indent | Atkāpe |
| Alignment / Align Left / Centre / Align Right / Justify | Līdzinājums / Līdzināt pa kreisi / Centrēt / Līdzināt pa labi / Taisnot |
| Line spacing | Rindstarpas |
| Margins | Piemales |
| Orientation / Portrait / Landscape | Orientācija / Portrets / Ainava |
| Size (paper) | Izmērs |
| Columns | Kolonnas |
| Breaks | Pārtraukumi |
| Header / Footer | Galvene / Kājene |
| Footnote / Endnote | Vēre / Beigu vēre |
| Table of Contents | Satura rādītājs |
| Caption | Paraksts |
| Bookmark | Grāmatzīme |
| Cross-reference | Savstarpēja atsauce |
| Citation / Bibliography | Citāts / Bibliogrāfija |
| Index | Alfabētiskais rādītājs |
| Comment / Comments | Komentārs / Komentāri |
| Track Changes | Izsekot izmaiņas |
| Spelling | Pareizrakstība |
| Thesaurus | Tēzaurs |
| Word Count | Vārdu skaits |
| Watermark | Ūdenszīme |
| Page Colour | Lappuses krāsa |
| Text Box | Teksta lodziņš |
| WordArt | WordArt |
| Equation | Vienādojums |
| Symbol | Simbols |
| Hyperlink / Link | Hipersaite / Saite |
| Mail Merge | Pasta sapludināšana |
| Envelopes / Labels | Aploksnes / Uzlīmes |
| Template | Veidne |
| Untitled | Bez nosaukuma |

## Workbooks

| English | Latvian |
| :-- | :-- |
| Workbook | Darbgrāmata |
| Sheet / Worksheet | Lapa / Darblapa |
| Cell / Cells | Šūna / Šūnas |
| Row / Rows | Rinda / Rindas |
| Column / Columns | Kolonna / Kolonnas |
| Range | Diapazons |
| Formula | Formula |
| Function | Funkcija |
| Number format | Skaitļu formāts |
| Currency / Percentage / Date / Time | Valūta / Procenti / Datums / Laiks |
| Freeze Panes | Fiksēt rūtis |
| Conditional Formatting | Nosacījumformatēšana |
| Format as Table | Formatēt kā tabulu |
| PivotTable | Rakurstabula |
| Chart | Diagramma |
| Sparklines | Mini diagrammas |
| Slicer | Datu griezums |
| Data Validation | Datu validācija |
| Remove Duplicates | Noņemt dublikātus |
| Text to Columns | Teksts par kolonnām |
| Power Query | Power Query |
| Name box | Nosaukumu lodziņš |
| Formula bar | Formulu josla |
| AutoSum | Autosumma |
| Sum / Average / Count / Min / Max | Summa / Vidējais / Skaits / Min / Maks |

## Presentations

| English | Latvian |
| :-- | :-- |
| Presentation | Prezentācija |
| Slide / Slides | Slaids / Slaidi |
| New Slide | Jauns slaids |
| Layout | Izkārtojums |
| Section | Sadaļa |
| Master | Šablons |
| Notes | Piezīmes |
| Handout | Izdales materiāls |
| Shape / Shapes | Forma / Formas |
| Picture / Pictures | Attēls / Attēli |
| Fill / Outline | Aizpildījums / Kontūra |
| Shadow / Glow / Reflection | Ēna / Spīdums / Atspulgs |
| Transition | Pāreja |
| Animation | Animācija |
| From Beginning / From Current Slide | No sākuma / No pašreizējā slaida |
| Presenter View | Prezentētāja skats |
| Rehearse Timings | Mēģināt laika iestatījumus |
| Video / Audio | Video / Audio |

## Mail, calendar, contacts, pictures

| English | Latvian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Iesūtne / Nosūtītie / Melnraksti / Izsūtne / Nevēlamie / Arhīvs / Atkritne |
| Message | Ziņojums |
| New message | Jauns ziņojums |
| Reply / Reply All / Forward | Atbildēt / Atbildēt visiem / Pārsūtīt |
| Send | Sūtīt |
| Attachment | Pielikums |
| Account | Konts |
| Folder | Mape |
| Search | Meklēt |
| Unread / Flagged | Nelasīts / Atzīmēts ar karodziņu |
| Rules | Kārtulas |
| Signature | Paraksts |
| Event | Notikums |
| Meeting | Sapulce |
| Today / Day / Week / Month / Agenda | Šodien / Diena / Nedēļa / Mēnesis / Dienas kārtība |
| Repeat | Atkārtot |
| Reminder | Atgādinājums |
| Contact | Kontaktpersona |
| Address book | Adrešu grāmata |
| Phone / Email / Address | Tālrunis / E-pasts / Adrese |
| Rotate / Crop / Flip | Pagriezt / Apgriezt / Apvērst |
| Rating / Tags | Vērtējums / Tagi |
| Slideshow | Slaidrāde |
| Brightness / Contrast | Spilgtums / Kontrasts |
| Trim / Split | Saīsināt / Sadalīt |
| Export video | Eksportēt video |

Crop (a picture) is Apgriezt; Trim (a clip) is Saīsināt, so the two never
share a word in the Video editor.

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain formal Latvian, not word for word. Keep a sentence's facts (a number, a
name in `{braces}`, a key) exactly. Prefer "Šo failu neizdevās atvērt" over a
literal rendering, and "Nav nosūtīts: {reason}" for "Not sent: {reason}".

## More recurring terms

| English | Latvian |
| :-- | :-- |
| Talk (the app) | Sarunas |
| Locker (the app) | Seifs |
| Colour (the app) | Krāsa |
| Base / Data Files (the database app) | Datu faili |
| Broadcast (the app) | Apraide |
| Recorder (the app) | Ierakstītājs |
| database | datu bāze |
| table | tabula |
| record | ieraksts |
| field | lauks |
| design (of a table or database) | struktūra |
| source | avots |
| read only | tikai lasāms |
| copy (a copy) | kopija |
| this computer | šis dators |
| protected store | aizsargātā krātuve |
| web address | tīmekļa adrese |
| network share | tīkla koplietojums |
| server / server address | serveris / servera adrese |
| key / password | atslēga / parole |
| sign-in (credentials) | pierakstīšanās dati |
| live stream / go live | tiešraide / sākt tiešraidi |
| stream key | straumes atslēga |
| invitation / invite (verb) | uzaicinājums / uzaicināt |
| cancellation | atcelšanas paziņojums |
| room / rooms and resources | telpa / telpas un resursi |
| booking | rezervācija |
| all day | visu dienu |
| accepted / declined / tentative | pieņemts / noraidīts / provizoriski |
| organizer | organizators |
| time zone | laika josla |
| free / busy | brīvs / aizņemts |
| Recent colours / Standard colours / More colours… | Nesen izmantotās krāsas / Standarta krāsas / Citas krāsas… |
| Accent / Background | Akcents / Fons |
| Alt Text | Alternatīvais teksts |
| Banded Rows / Banded Columns | Joslotas rindas / Joslotas kolonnas |
| Borders | Apmales |
| Bring Forward / Bring to Front | Pārvietot uz priekšu / Novietot priekšplānā |
| Clipboard / Clear formatting / Change case | Starpliktuve / Notīrīt formatējumu / Mainīt reģistru |
| Cc / Bcc | Kopija / Diskrētā kopija |
| language pack | valodas pakotne |
| Voices and languages (the page) | Balsis un valodas |
| add-on | papildinājums |
| speech engine | runas dzinējs |
| speech model | runas modelis |
| voice | balss |
| Add from a file (command) | Pievienot no faila |

## Intents and versions

### Voice

Buttons and menu items take the infinitive (Saglabāt, Atrast adresātu).
Instructions inside sentences take the polite plural imperative (Aizveriet,
pievienojiet). The reader is jūs, in lower case inside a sentence; a
participle agrees with a noun placed before `{name}`, never with `{name}`
itself, and a person takes the past tense verb.

### By intent

| Intent | How this language phrases it | English | Latvian |
| :-- | :-- | :-- | :-- |
| action on a button | Infinitive, object in the accusative after it | Mark Text | Atzīmēt tekstu |
| action in a menu | Infinitive as on a button; ellipsis when it opens a dialog | Close Window | Aizvērt logu |
| name | Noun phrase in the nominative, no full stop | Horizontal text | Horizontāls teksts |
| heading | Noun phrase, owner in the genitive before it, no full stop | Folder settings | Mapes iestatījumi |
| state while working | Notiek + verbal noun and the ellipsis | Finding suggestions… | Notiek ieteikumu meklēšana… |
| state when done | ir + participle agreeing with a named noun | Link copied. Paste it anywhere. | Saite ir nokopēta. Ielīmējiet to jebkur. |
| question | Infinitive question; `{name}` after a noun that carries the case | Remove {name}? | Noņemt kontaktpersonu {name}? |
| advice | Polite imperative; lai + conditional for the purpose | Sign in to Talk to accept. | Pierakstieties lietotnē Sarunas, lai pieņemtu. |
| explain | Noun phrase or plain sentence, full stop as in the English | Bullet character. | Aizzīmes rakstzīme. |
| warning | Plain statement with nevar + infinitive | Cannot be undone. | Šo darbību nevar atsaukt. |
| error: cannot | Neizdevās + infinitive | Could not send: {why}. | Neizdevās nosūtīt: {why}. |
| error: failed | Neizdevās + infinitive, as for cannot | Recognition failed. | Neizdevās atpazīt tekstu. |
| error: not-found | Trūkst + genitive (no agreement), or nav atrasts agreeing with its noun | Picture file is missing | Trūkst attēla faila |
| error: not-enough | Pārāk liels agreeing, or Nepietiek + genitive | File too large for a message. | Fails ir pārāk liels vienam ziņojumam. |
| error: unavailable | Nav pieejams agreeing with its noun | Speech is not available. | Runas sintēze nav pieejama. |
| error: not-allowed | Nav atļaujas + infinitive (no agreement) | Camera not allowed. | Nav atļaujas izmantot kameru. |
| error: invalid | „...” nav + nominative | "{text}" is not a range | „{text}” nav diapazons |
| error: other | Plain statement, or the polite imperative that states the rule | Keep at least one worksheet visible. | Atstājiet redzamu vismaz vienu darblapu. |
| sample | Natural Latvian content; dates and numbers as the region writes them | free on 12 March? | brīvs 12. martā? |

The suite has no sample label; the sample row uses the
calendar sample this glossary already quotes.

### Short, medium and complete

- Medium is the version the pack shows today. Write it first, then shorten
  and extend from it, keeping the same words for the same things.
- Short: the infinitive or the key noun goes first. Drop šo, to, jūsu and
  phrases of place or manner (sarakstā, diskā, tagad), but keep the noun
  before a placeholder. Keep every placeholder, key name and code.
- Abbreviate only with a standard Latvian abbreviation: a word abbreviation
  takes a full stop (lpp., piem., Nr.), a unit symbol takes none (min, s,
  mm). Min and Maks in the AutoSum list stay as the glossary writes them.
  Never invent one, never abbreviate a verb, an app or brand name, or any
  word in an error, question or warning.
- A counted label keeps all three forms (zero, one, other). Short drops the
  verb or participle beside the count and keeps `{count}` with the noun:
  `zero: {count} faili`, `one: {count} fails`, `other: {count} faili`. With a
  standard abbreviation the forms may be the same text: `{count} lpp.`
- Complete: add the object and where it goes, as the English complete does,
  and end a sentence with a full stop. Where the English complete asks "Do
  you want to ...?", use Vai vēlaties + infinitive: Vai vēlaties noņemt
  kontaktpersonu {name} no kontaktpersonām?
- Tooltips and screen readers read complete, so it must make sense alone.

| Example | Version | English | Latvian |
| :-- | :-- | :-- | :-- |
| 1 | short | Find | Atrast |
| 1 | medium | Find Recipient | Atrast adresātu |
| 1 | complete | Find a recipient in the list | Atrast adresātu sarakstā |
| 2 | short | Delete version of {name}? | Dzēst faila {name} versiju? |
| 2 | medium | Delete this version of {name}? | Dzēst šo faila {name} versiju? |
| 2 | complete | Delete this version of {name} from the Locker? | Dzēst šo faila {name} versiju no lietotnes Seifs? |
| 3 | short | Not enough disk space to record. | Nepietiek vietas ierakstīšanai. |
| 3 | medium | There is not enough space on the disk to record. | Diskā nepietiek vietas ierakstīšanai. |
| 3 | complete | There is not enough space on the disk to record. | Diskā nepietiek vietas ierakstīšanai. |

### Punctuation and marks

- Ellipsis: the single character … with no space before it, on a command
  that opens a dialog or asks for more (Saglabāt kā…, Pārlūkot…), and on a
  state while working (Notiek ieteikumu meklēšana…). Not on a command that
  acts at once.
- Colon, question mark and exclamation mark: no space before, one ordinary
  space after: Organizators: {name}. Never a no-break space anywhere, also
  not before % or a unit.
- Quotation marks: „ and ” (low opening, high closing). The English straight
  quotes become „”, also around a placeholder: „{text}”.
- Capitals: sentence case on buttons, menu items, tabs, headings and window
  titles; only the first word and names take a capital.
- Full stops: an error, warning or message that is a sentence ends with a
  full stop, as the English does; a label the English leaves without one
  (Picture file is missing) stays without one. Buttons, menu items, names
  and headings take none. The ordinal dot in a date (12. martā) is not a
  full stop. No exclamation marks in errors.
- No dash of any kind between words: a colon or a comma takes its place.

### Access keys

- `&` goes before a letter of the Latvian word: &Fails, &Rediģēt,
  Saglabāt &kā…
- Prefer the first letter, but never ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū or ž: the
  Latvian keyboard types them with AltGr or a dead key, so Alt with that
  letter cannot be pressed. Take the next plain letter instead. If another
  item in the same menu, ribbon tab or dialog has the letter, take a later
  consonant. Each access key is unique within one menu, tab or dialog.
- Never put `&` before a placeholder, a space or a digit. A label with no
  `&` in the English gets none.
