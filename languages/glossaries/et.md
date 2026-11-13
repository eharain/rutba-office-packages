# Estonian glossary for Rutba Office

The words the Estonian pack (`lang-et`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Estonian where those exist,
and plain everyday Estonian (or LibreOffice's word) where they do not.

**This translation was drafted by machine and needs a native speaker's
review** before it is called finished. A reviewer changes a word here first,
then in the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the second person
  singular imperative, as Office does: Salvesta (Save), Ava (Open), Sule
  (Close), Prindi (Print), Kustuta (Delete), Vali kõik (Select All). A command
  that opens a dialog keeps the ellipsis: Salvesta nimega…, Sirvi…
- **The reader** is addressed formally in full sentences, as current Office
  and Windows do: the plural "te/teie", always lower case, and the plural
  imperative in instructions. "Kas soovite muudatused salvestada?",
  "Sulgege see programm kõigepealt." Prefer neutral wording where it reads
  as well: "Faili ei saanud avada."
- **Capitals**: sentence case everywhere, as in Estonian Office: only the
  first word and names take a capital. "Lehekülje paigutus", "Tingimusvorming",
  "Vorminda tabelina". Month and weekday names are lower case.
- **Tab and group names** are nouns, as in Office: Avaleht, Lisa,
  Joonistamine, Kujundus, Paigutus, Viited, Postitus, Läbivaatus, Vaade,
  Spikker. A group name is a noun too: Lõikelaud, Font, Lõik, Laadid.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated, wherever Estonian word order wants them.
- **Cases with placeholders**: Estonian has fourteen cases and a placeholder
  cannot take a case ending. Write so that `{name}` stays in the nominative:
  put a noun in front of it to carry the case ("tabelis {name}", "faili
  {name}", "kasutajale {name}"), or use a colon ("Ei saanud avada: {name}",
  "Saadetud: {name}"). Never write `{name}'i` or `{name}-s`.
- **Gender**: Estonian has no grammatical gender, so `{name}` needs no
  agreement; "tema" covers he and she.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2,
  "Uus sündmus (Ctrl+N)".
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, `=SUM(ABOVE)`. Function names stay in English: SUM,
  VLOOKUP.
- **Brand and product names** stay as written: Rutba Office, Microsoft, Word,
  Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube, WhatsApp. When
  Estonian grammar inflects them, the ending follows the usual rule: an
  apostrophe after a name whose last letter is not pronounced as written
  (Office'i, Rutba Office'i, Google'i, YouTube'i), a plain ending otherwise
  (Wordi, Exceli, Windowsi, Outlooki).
- **The suite's app names** are translated as in the table below: Dokumendid,
  Töölehed, Esitlused, Meil, Kalender, Kontaktid, Pildid, Kujutis, Video,
  Avaleht. They take a capital as names: "Avage see Meilis."
- **Punctuation**: Estonian quotation marks „…“ (low-9 opening, high closing):
  „vaba 12. märtsil?“. A comma always stands before a subordinate clause
  (et, kui, mis, kus, sest): "Sulgege programm, kui te pole kindel." The
  ellipsis … stays at the end of a command that opens a dialog.
- **No em dash.** Where the English has one, write a colon, a comma,
  parentheses or a new sentence. "Rühmal pole oma täidet ega kontuuri.
  Vormindage selle sees olevat kujundit." Never a spaced en dash as a dash;
  an en dash in a range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only.
- **Counts** use Estonian's two plural forms, `one` and `other`. After every
  number but 1 the noun is in the partitive singular, not a plural:
  `{ one: '{count} slaid', other: '{count} slaidi' }` (1 slaid, 0 slaidi,
  5 slaidi, 21 slaidi). Likewise `{count} inimene / {count} inimest`,
  `{count} sündmus / {count} sündmust`, `{count} muudatus / {count} muudatust`.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, space between thousands, dates as 12.03.2026), so a label never
  spells out a format. Write "kell {time}" for a clock time where a word is
  needed; "{percent}%" stays as written.

## The apps

| English | Estonian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumendid |
| Worksheets | Töölehed |
| Presentations | Esitlused |
| Mail | Meil |
| Calendar | Kalender |
| Contacts | Kontaktid |
| Pictures | Pildid |
| Image (the editor) | Kujutis |
| Video | Video |
| Home (the launcher) | Avaleht |

The other apps, for reference: Talk = Kõned, Locker = Seif, Colour = Värv,
Base = Andmebaas, Broadcast = Ülekanne, Recorder = Salvesti.

## Tabs and frame

| English | Estonian |
| :-- | :-- |
| File | Fail |
| Home | Avaleht |
| Insert | Lisa |
| Draw | Joonistamine |
| Design | Kujundus |
| Layout | Paigutus |
| Page Layout | Lehekülje paigutus |
| References | Viited |
| Mailings | Postitus |
| Review | Läbivaatus |
| View | Vaade |
| Help | Spikker |
| Formulas | Valemid |
| Data | Andmed |
| Automate | Automatiseerimine |
| Transitions | Üleminekud |
| Animations | Animatsioonid |
| Slide Show | Slaidiseanss |
| Record | Salvestamine |
| Table Design | Tabeli kujundus |
| Table Layout | Tabeli paigutus |
| Shape Format | Kujundi vorming |
| Picture Format | Pildi vorming |
| Ribbon | Menüülint |
| Pane | Paan |
| Status bar | Olekuriba |
| Dialog | Dialoogiboks |
| Settings | Sätted |
| Language | Keel |
| Theme | Teema (the app's look); a document theme is kujundus |

## Commands

| English | Estonian |
| :-- | :-- |
| New | Uus |
| Open | Ava |
| Save | Salvesta |
| Save As | Salvesta nimega |
| Save as Template | Salvesta mallina |
| Close | Sule |
| Print | Prindi |
| Export | Ekspordi |
| Import | Impordi |
| Share | Ühiskasuta (the command); Ühiskasutus (the button's name) |
| Undo | Võta tagasi |
| Redo | Tee uuesti |
| Cut | Lõika |
| Copy | Kopeeri |
| Paste | Kleebi |
| Paste Special | Kleebi teisiti |
| Delete | Kustuta |
| Remove | Eemalda |
| Rename | Nimeta ümber |
| Select All | Vali kõik |
| Find | Otsi |
| Replace | Asenda |
| Go To | Mine |
| Insert | Lisa |
| Apply | Rakenda |
| Apply to All | Rakenda kõigile |
| OK | OK |
| Cancel | Loobu |
| Yes / No | Jah / Ei |
| Done | Valmis |
| Next / Previous | Järgmine / Eelmine |
| Back | Tagasi |
| Refresh | Värskenda |
| Update | Uuenda |
| Accept / Reject | Nõustu / Hülga |
| Sort | Sordi |
| Filter | Filtreeri |
| Group / Ungroup | Rühmita / Tühista rühmitus |
| Merge / Split | Ühenda / Tükelda |
| Zoom In / Zoom Out | Suurenda / Vähenda |
| Full screen | Täisekraan |
| Minimise / Maximise / Restore | Minimeeri / Maksimeeri / Taasta |
| Expand / Collapse | Laienda / Ahenda |
| Browse | Sirvi |
| Add | Lisa |
| Edit | Redigeeri |
| Reset | Lähtesta |
| Clear | Tühjenda |
| Show / Hide | Kuva / Peida |
| More | Veel |
| None | Puudub |
| Automatic | Automaatne |

## Text and documents

| English | Estonian |
| :-- | :-- |
| Document | Dokument |
| Page | Lehekülg |
| Paragraph | Lõik |
| Line | Rida |
| Word (a word) | Sõna |
| Character | Märk |
| Font | Font |
| Font size | Fondi suurus |
| Bold / Italic / Underline | Paks / Kursiiv / Allakriipsutus |
| Strikethrough | Läbikriipsutus |
| Subscript / Superscript | Allindeks / Ülaindeks |
| Text highlight colour | Teksti esiletõstuvärv |
| Font colour | Fondi värv |
| Colour | Värv |
| Style / Styles | Laad / Laadid |
| Heading | Pealkiri |
| Title | Tiitel |
| Bullets / Numbering | Täpploend / Nummerdus |
| Multilevel List | Mitmetasemeline loend |
| List | Loend |
| Indent | Taane |
| Alignment / Align Left / Centre / Align Right / Justify | Joondus / Joonda vasakule / Keskjoonda / Joonda paremale / Rööpjoonda |
| Line spacing | Reavahe |
| Margins | Veerised |
| Orientation / Portrait / Landscape | Suund / Püstpaigutus / Rõhtpaigutus |
| Size (paper) | Suurus |
| Columns | Veerud |
| Breaks | Piirid |
| Header / Footer | Päis / Jalus |
| Footnote / Endnote | Allmärkus / Lõpumärkus |
| Table of Contents | Sisukord |
| Caption | Pealdis |
| Bookmark | Järjehoidja |
| Cross-reference | Ristviide |
| Citation / Bibliography | Tsitaat / Bibliograafia |
| Index | Register |
| Comment / Comments | Kommentaar / Kommentaarid |
| Track Changes | Muudatuste jälitus |
| Spelling | Õigekiri |
| Thesaurus | Tesaurus |
| Word Count | Sõnade arv |
| Watermark | Vesimärk |
| Page Colour | Lehekülje värv |
| Text Box | Tekstiväli |
| WordArt | WordArt |
| Equation | Võrrand |
| Symbol | Sümbol |
| Hyperlink / Link | Hüperlink / Link |
| Mail Merge | Kirjakooste |
| Envelopes / Labels | Ümbrikud / Sildid |
| Template | Mall |
| Untitled | Nimetu |

## Workbooks

| English | Estonian |
| :-- | :-- |
| Workbook | Töövihik |
| Sheet / Worksheet | Leht / Tööleht |
| Cell / Cells | Lahter / Lahtrid |
| Row / Rows | Rida / Read |
| Column / Columns | Veerg / Veerud |
| Range | Vahemik |
| Formula | Valem |
| Function | Funktsioon |
| Number format | Arvuvorming |
| Currency / Percentage / Date / Time | Valuuta / Protsent / Kuupäev / Kellaaeg |
| Freeze Panes | Paanide külmutamine |
| Conditional Formatting | Tingimusvorming |
| Format as Table | Vorminda tabelina |
| PivotTable | PivotTable-liigendtabel |
| Chart | Diagramm |
| Sparklines | Sädejooned |
| Slicer | Tükeldi |
| Data Validation | Andmete valideerimine |
| Remove Duplicates | Eemalda duplikaadid |
| Text to Columns | Tekst veergudesse |
| Power Query | Power Query |
| Name box | Nimeväli |
| Formula bar | Valemiriba |
| AutoSum | Automaatsumma |
| Sum / Average / Count / Min / Max | Summa / Keskmine / Loendus / Miinimum / Maksimum |

## Presentations

| English | Estonian |
| :-- | :-- |
| Presentation | Esitlus |
| Slide / Slides | Slaid / Slaidid |
| New Slide | Uus slaid |
| Layout | Paigutus |
| Section | Jaotis |
| Master | Põhi (Slide Master: Slaidi põhi) |
| Notes | Märkmed |
| Handout | Jaotusmaterjal |
| Shape / Shapes | Kujund / Kujundid |
| Picture / Pictures | Pilt / Pildid |
| Fill / Outline | Täide / Kontuur |
| Shadow / Glow / Reflection | Vari / Helendus / Peegeldus |
| Transition | Üleminek |
| Animation | Animatsioon |
| From Beginning / From Current Slide | Algusest / Praegusest slaidist |
| Presenter View | Esitajavaade |
| Rehearse Timings | Aegade proovimine |
| Video / Audio | Video / Heli |

## Mail, calendar, contacts, pictures

| English | Estonian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Sisendkaust / Saadetud / Mustandid / Väljundkaust / Rämpspost / Arhiiv / Prügikast |
| Message | Sõnum |
| New message | Uus sõnum |
| Reply / Reply All / Forward | Vasta / Vasta kõigile / Edasta |
| Send | Saada |
| Attachment | Manus |
| Account | Konto |
| Folder | Kaust |
| Search | Otsing (the box or pane); Otsi (the command) |
| Unread / Flagged | Lugemata / Lipuga tähistatud |
| Rules | Reeglid |
| Signature | Allkiri |
| Event | Sündmus |
| Meeting | Koosolek |
| Today / Day / Week / Month / Agenda | Täna / Päev / Nädal / Kuu / Päevakava |
| Repeat | Kordus (the setting); Korda (the command) |
| Reminder | Meeldetuletus |
| Contact | Kontakt |
| Address book | Aadressiraamat |
| Phone / Email / Address | Telefon / Meiliaadress / Aadress |
| Rotate / Crop / Flip | Pööra / Kärbi / Peegelda |
| Rating / Tags | Hinnang / Märgendid |
| Slideshow | Slaidiseanss |
| Brightness / Contrast | Heledus / Kontrastsus |
| Trim / Split | Kärbi / Tükelda |
| Export video | Ekspordi video |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Estonian, not word for word, addressing the reader formally where the
reader is addressed at all. Keep a sentence's facts (a number, a name in
`{braces}`, a key) exactly. Prefer "Seda faili ei saanud avada." over a
literal rendering, and "Pole veel ühtegi ruumi." over "Ruume veel ei ole
olemas."

## More recurring terms

| English | Estonian |
| :-- | :-- |
| Database | Andmebaas |
| Table | Tabel |
| Record | Kirje |
| Field | Väli |
| Data Files (the database app's copy) | Andmefailid |
| Read only | Kirjutuskaitstud |
| Network share | Võrgu ühiskasutus |
| Web address | Veebiaadress |
| Password | Parool |
| Key (access key) | Võti |
| Sign-in | Sisselogimisandmed |
| Server address | Serveri aadress |
| Stream key | Voo võti |
| Go live | Alusta otseülekannet |
| Live stream | Otseülekanne |
| Invitation | Kutse |
| Invite | Kutsu |
| Organizer | Korraldaja |
| Accepted / Declined / Tentative | Nõustunud / Keeldunud / Esialgne |
| Cancellation | Tühistamisteade |
| All day | Terve päev |
| Room / Rooms | Ruum / Ruumid |
| Mailbox | Postkast |
| Busy / Free | Hõivatud / Vaba |
| Availability | Saadaval olek |
| Time zone | Ajavöönd |
| Cc / Bcc | Koopia / Pimekoopia |
| Clipboard | Lõikelaud |
| Borders | Äärised |
| Background | Taust |
| Accent | Rõhk (Accent 1: Rõhk 1) |
| Alt Text | Alternatiivtekst |
| Accessibility / Check Accessibility | Hõlbustus / Kontrolli hõlbustust |
| Bring Forward / Bring to Front | Too ettepoole / Too kõige ette |
| Banded Rows / Banded Columns | Vöödiga read / Vöödiga veerud |
| Standard colours / Recent colours / More colours… | Standardvärvid / Viimatised värvid / Veel värve… |
| Clear formatting | Kustuta vorming |
| Change case | Muuda tähesuurust |
| Blank document / Blank worksheet / Blank presentation | Tühi dokument / Tühi tööleht / Tühi esitlus |
| Add to Dictionary | Lisa sõnastikku |
| Actual Size | Tegelik suurus |
| language pack | keelepakett |
| Voices and languages (the page) | Hääled ja keeled |
| add-on | lisandmoodul |
| speech engine | kõnemootor |
| speech model | kõnemudel |
| voice | hääl |
| Add from a file (command) | Lisa failist |

## Intents and versions

### Voice

Commands (buttons, menu items, ribbon, and their tooltips) take the second
person singular imperative: "Otsi adressaati", "Sule aken". Sentences that
address the reader use the formal plural, "te" in lower case, and the plural
imperative: "Logige sisse.", "Kas soovite ...?". Status lines and errors are
impersonal where they can be: "Otsitakse…", "Kopeeritud.", "Ei saanud avada".

### By intent

| Intent | How this language phrases it | English | Estonian |
| :-- | :-- | :-- | :-- |
| action, button | Singular imperative first, object after it (partitive for an open action) | Find Recipient | Otsi adressaati |
| action, menu | The same imperative; a whole object in the nominative after it | Close Window | Sule aken |
| name | Noun phrase, adjective before the noun | Horizontal text | Rõhtne tekst |
| heading | Noun phrase, the qualifying noun first in the genitive | Folder settings | Kausta sätted |
| state, working | Impersonal present (-takse, -dakse) with the ellipsis | Finding suggestions… | Otsitakse soovitusi… |
| state, done | Past participle (-tud, -dud); "on" added in the complete | Link copied. Paste it anywhere. | Link kopeeritud. Kleepige see kuhu tahes. |
| question | "Kas" with the da-infinitive; complete "Kas soovite ...?" | Remove {name}? | Kas eemaldada {name}? |
| advice | Plural imperative, the purpose first in -miseks | Sign in to Talk to accept. | Nõustumiseks logige Kõnedesse sisse. |
| explain | Plain statement or noun phrase | Bullet character. | Täpimärk. |
| warning | Impersonal statement with "ei saa" | Cannot be undone. | Seda ei saa tagasi võtta. |
| error: cannot | "Ei saa ..." for cannot; "... ei saanud ..." for could not | Could not set up | Ei saanud häälestada |
| error: failed | "... nurjus" | Recognition failed. | Tuvastamine nurjus. |
| error: not-found | "... ei leitud", the noun in the partitive | Picture file is missing | Pildifaili ei leitud |
| error: not-enough | "liiga suur", "liiga pikk", "Pole piisavalt ..." | File too large for a message. | Fail on sõnumi jaoks liiga suur. |
| error: unavailable | "... pole saadaval" | Speech is not available. | Ettelugemine pole saadaval. |
| error: not-allowed | "... pole lubatud" | Camera not allowed. | Kaamera kasutamine pole lubatud. |
| error: invalid | "... on sobimatu", or „{x}“ pole ... | "{text}" is not a range | „{text}“ pole vahemik |
| error: other | Plain statement; plural imperative where the English gives an order | Keep at least one worksheet visible. | Jätke vähemalt üks tööleht nähtavaks. |
| sample | Written as an Estonian writes it, dates with the ordinal full stop | free on 12 March? | vaba 12. märtsil? |

The suite has no sample label; the sample row uses the
sample sentence this glossary already gives.

### Short, medium and complete

- **Short** keeps the imperative or the head noun and drops the object:
  "Otsi adressaati" becomes "Otsi", "Sule aken" becomes "Sule".
- Drop in this order: the object, then adverbs and places ("loendist",
  "kõigepealt"), then a second clause. Never drop a placeholder, a negation
  (ei, pole) or a key. "Kas" stays on a question.
- A message's short version may be a participle fragment: "Link
  kopeeritud.", "Saadetud: {name}".
- Allowed abbreviations are the standard ones, written as the Estonian
  Language Institute (EKI) writes them, without a full stop: "nt", "jne",
  "lk", "tk". Units, dates and times come from `Intl`. Not allowed: cuts of
  your own with a full stop ("Seadist."), English abbreviations.
- **Counted labels** keep both forms (nominative after 1, partitive singular
  otherwise). Short drops the words round the noun, never the noun; if still
  too wide, put the noun first with a colon, in the partitive plural:
  "Sõnu: {count}".
- **Complete** adds the object and the place: "Otsi loendist adressaati".
  A command's complete version stays in the singular imperative, since it is
  still the command; a message is a full formal sentence with a full stop,
  and a question becomes "Kas soovite ...?" with a noun carrying the case.

| Version | Short | Medium | Complete |
| :-- | :-- | :-- | :-- |
| English | Find | Find Recipient | Find a recipient in the list |
| Estonian | Otsi | Otsi adressaati | Otsi loendist adressaati |
| English | Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? |
| Estonian | Kas eemaldada {name}? | Kas eemaldada {name} kontaktidest? | Kas soovite oma kontaktide hulgast eemaldada kontakti {name}? |
| English | Folder settings | Folder settings | Settings for this folder |
| Estonian | Kausta sätted | Kausta sätted | Selle kausta sätted |

### Punctuation and marks

- **Ellipsis**: … straight after the last word, no space, on a command that
  opens a dialog ("Salvesta nimega…", "Sirvi…") and on a working state.
- **Colon, question and exclamation marks**: no space before, one ordinary
  space after: "Ei saanud avada: {name}". Avoid the exclamation mark. After
  a colon the next word is lower case unless it is a name.
- **Quotation marks**: „…“ round a name or a value: „{text}“ pole vahemik.
  Avoid a quotation inside a quotation; rephrase instead.
- **Commas**: always before a subordinate clause (et, kui, mis, kus, sest),
  in every version.
- **Capitals**: sentence case on buttons, menu items, tabs, titles and
  headings. App and brand names keep theirs.
- **Full stops**: a full sentence ends with one, in every version; a button,
  title, name or noun-phrase status takes none. Where the English version is
  a fragment with a full stop ("Bullet character."), keep the full stop.

### Access keys

- `&` goes before a letter of the Estonian word: "&Redigeeri", "Sule &aken".
  One `&` per label.
- Choose a letter not used by another item in the same menu or dialog:
  the first letter first, then a clear consonant of the word.
- Prefer a plain letter. Õ, ä, ö and ü have their own keys on the Estonian
  keyboard and are allowed when no plain letter is free; š and ž need AltGr
  and are never marked.
- Avoid letters with a descender (g, j, p, q, y) where another is free.
- Never put `&` before a placeholder, a space or a brand name. Keep the same
  letter for the same command in every app.
