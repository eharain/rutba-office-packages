# Hungarian glossary for Rutba Office

The words the Hungarian pack (`lang-hu`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Hungarian where those exist,
LibreOffice where Office has none, and plain everyday Hungarian otherwise.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (ribbon buttons, menu items, dialog buttons) take the verbal
  noun in -ás/-és, as Hungarian Office does, never the infinitive or the
  imperative: Mentés (Save), Megnyitás (Open), Bezárás (Close), Beszúrás
  (Insert). A command with an object puts the object first and adds the
  possessive ending to the verbal noun: "Add a room" is "Terem hozzáadása",
  "Close the pane" is "A panel bezárása", "Delete all" is "Az összes törlése".
  The fixed dialog buttons are OK, Mégse, Igen, Nem.
- **Capitals**: sentence case, as Hungarian Office writes it, even where the
  English has title case: "Mentés másként", "Az összes kijelölése",
  "Feltételes formázás". App names and brand names keep their capital.
- **The reader** is addressed formally (magázás), as current Microsoft
  Hungarian does, with the verb alone and no "Ön" pronoun: "Adja meg a
  jelszavát.", "Zárja be először azt a programot." Descriptions and status
  lines are impersonal where they can be: "Mentve, de nincs elküldve: {reason}".
- **Tab and group names** are nouns or verbal nouns, as in Office: Kezdőlap,
  Beszúrás, Korrektúra, Nézet; groups Vágólap, Betűtípus, Bekezdés.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated. Hungarian adds case endings to words, and
  the ending's vowel depends on the word, which the placeholder hides, so a
  placeholder never takes an ending. Put the ending on a noun beside it, or
  use a colon:
  - "There is a table called {name} already." becomes "Már van {name} nevű
    tábla."
  - "{count} events in {name}." becomes "{count} esemény ebben: {name}."
  - "Unpin {name}" becomes "{name} rögzítésének feloldása" (the ending sits on
    the following noun).
  - Before a placeholder the article is written "a(z)", as Microsoft does:
    "a(z) {name} fájl".
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Ctrl+N.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, HTTPS, `dd/mm/yyyy`, SUM, VLOOKUP. An abbreviation joined to a noun
  takes a hyphen: PDF-fájl, CSV-fájl, RTMP-kiszolgáló; an extension stands
  apart: "a .ics fájl". An ending on an abbreviation follows a hyphen: PDF-be,
  JSON-t.
- **Brand and product names** stay in Latin letters as written: Rutba Office,
  Microsoft, Word, Excel, PowerPoint, Outlook, Google, Gmail, Windows,
  YouTube, iCloud. Prefer wording that leaves them without an ending ("a
  Google-fiókban", "a YouTube Studio alkalmazásban"); where an ending is
  needed, a silent final letter takes a hyphen (Office-ban, YouTube-on),
  otherwise it joins directly (Windowsban, Outlookban). Article: "a Word",
  "az Excel", "az Outlook".
- **App names** are the Hungarian names in the first table, capitalised, and
  take endings like any noun: "a Naptárban", "a Névjegyekből", "a Postában".
- **Punctuation**: Hungarian quotation marks „…”, with »…« inside them. The
  ellipsis … stays at the end of a command that opens a dialog: "Tallózás…".
  **No em dash**: where the English has one, write a colon, a comma,
  parentheses or a new sentence (Hungarian print uses a spaced en dash for
  this, which the pack does not): "A group has no fill or outline of its own
 (long dash) format a shape inside it." becomes "A csoportnak nincs saját kitöltése
  vagy körvonala: egy benne lévő alakzatot formázzon." A range keeps its en
  dash: 1 to 10.
- **No no-break spaces**: ordinary spaces only, also between a number and its
  unit ("15 perc", "176 × 250 mm").
- **Counts** use the two forms `one` and `other`, and Hungarian keeps the
  counted noun (and its verb) singular after any number, so both forms are
  usually the same sentence, each written out in full:
  `one: '{count} dia'`, `other: '{count} dia'`;
  `one: '{count} esemény kiírva.'`, `other: '{count} esemény kiírva.'`.
  "person / people" after a number is "személy" (or "meghívott" for people
  invited): "{count} meghívott személy". Do not let an ending land on
  `{count}` either (no "{count}-szor"); say "{count} alkalommal".
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, space as thousands separator, year-month-day order, 24-hour clock),
  so a label never spells out a format. Where the English writes a date in a
  sample sentence, write it the Hungarian way: "free on 12 March?" becomes
  „szabad március 12-én?”.
- **Special to Hungarian**:
  - No grammatical gender: `{name}` needs no agreement, and "he/she" is "ő".
  - Compounds are written as one word (betűszín, szövegdoboz, táblázattervezés);
    a compound of three or more parts longer than six syllables takes a hyphen
    (the 6:3 rule): "élőfej-beállítások".
  - Possessive endings replace "your" where Hungarian would: "Your password
    there" is "Az ottani jelszava"; "your calendar" is "a naptára".
  - Keep ribbon labels short; prefer the Office word even when a longer
    phrase would be clearer.

## The apps

| English | Hungarian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumentumok |
| Worksheets | Munkalapok |
| Presentations | Bemutatók |
| Mail | Posta |
| Calendar | Naptár |
| Contacts | Névjegyek |
| Pictures | Képek |
| Image (the editor) | Képszerkesztő |
| Video | Videó |
| Home (the launcher) | Kezdőlap |
| Talk | Beszélgetés |
| Locker | Széf |
| Colour | Szín |
| Base | Adatfájlok |
| Broadcast | Közvetítés |
| Recorder | Rögzítő |

The last six are proposals for the suite's other app names; a reviewer
confirms them. Base shows in its labels as "Data Files", hence Adatfájlok.

## Tabs and frame

| English | Hungarian |
| :-- | :-- |
| File | Fájl |
| Home | Kezdőlap |
| Insert | Beszúrás |
| Draw | Rajz |
| Design | Tervezés |
| Layout | Elrendezés |
| Page Layout | Lapelrendezés |
| References | Hivatkozások |
| Mailings | Levelezés |
| Review | Korrektúra |
| View | Nézet |
| Help | Súgó |
| Formulas | Képletek |
| Data | Adatok |
| Automate | Automatizálás |
| Transitions | Áttűnések |
| Animations | Animációk |
| Slide Show | Diavetítés |
| Record | Felvétel |
| Table Design | Táblázattervezés |
| Table Layout | Táblázatelrendezés |
| Shape Format | Alakzat formátuma |
| Picture Format | Kép formátuma |
| Ribbon | Menüszalag |
| Pane | Panel |
| Status bar | Állapotsor |
| Dialog | Párbeszédpanel |
| Settings | Beállítások |
| Language | Nyelv |
| Theme | Téma |

## Commands

| English | Hungarian |
| :-- | :-- |
| New | Új |
| Open | Megnyitás |
| Save | Mentés |
| Save As | Mentés másként |
| Save as Template | Mentés sablonként |
| Close | Bezárás |
| Print | Nyomtatás |
| Export | Exportálás |
| Import | Importálás |
| Share | Megosztás |
| Undo | Visszavonás |
| Redo | Mégis |
| Cut | Kivágás |
| Copy | Másolás |
| Paste | Beillesztés |
| Paste Special | Irányított beillesztés |
| Delete | Törlés |
| Remove | Eltávolítás |
| Rename | Átnevezés |
| Select All | Az összes kijelölése |
| Find | Keresés |
| Replace | Csere |
| Go To | Ugrás |
| Insert | Beszúrás |
| Apply | Alkalmaz |
| Apply to All | Alkalmazás mindegyikre |
| OK | OK |
| Cancel | Mégse |
| Yes / No | Igen / Nem |
| Done | Kész |
| Next / Previous | Következő / Előző |
| Back | Vissza |
| Refresh | Frissítés |
| Update | Frissítés (Aktualizálás where Refresh sits beside it) |
| Accept / Reject | Elfogadás / Elutasítás |
| Sort | Rendezés |
| Filter | Szűrő |
| Group / Ungroup | Csoportosítás / Csoportbontás |
| Merge / Split | Egyesítés / Felosztás |
| Zoom In / Zoom Out | Nagyítás / Kicsinyítés |
| Full screen | Teljes képernyő |
| Minimise / Maximise / Restore | Kis méret / Teljes méret / Előző méret |
| Expand / Collapse | Kibontás / Összecsukás |
| Browse | Tallózás |
| Add | Hozzáadás |
| Edit | Szerkesztés |
| Reset | Alaphelyzet |
| Clear | Törlés (as Office; "Clear all" is "Az összes törlése") |
| Show / Hide | Megjelenítés / Elrejtés |
| More | Továbbiak |
| None | Nincs |
| Automatic | Automatikus |

## Text and documents

| English | Hungarian |
| :-- | :-- |
| Document | Dokumentum |
| Page | Oldal |
| Paragraph | Bekezdés |
| Line | Sor |
| Word (a word) | Szó |
| Character | Karakter |
| Font | Betűtípus |
| Font size | Betűméret |
| Bold / Italic / Underline | Félkövér / Dőlt / Aláhúzott |
| Strikethrough | Áthúzott |
| Subscript / Superscript | Alsó index / Felső index |
| Text highlight colour | Szövegkiemelő szín |
| Font colour | Betűszín |
| Colour | Szín |
| Style / Styles | Stílus / Stílusok |
| Heading | Címsor |
| Title | Cím |
| Bullets / Numbering | Felsorolás / Számozás |
| Multilevel List | Többszintű lista |
| List | Lista |
| Indent | Behúzás |
| Alignment / Align Left / Centre / Align Right / Justify | Igazítás / Balra igazítás / Középre igazítás / Jobbra igazítás / Sorkizárás |
| Line spacing | Sorköz |
| Margins | Margók |
| Orientation / Portrait / Landscape | Tájolás / Álló / Fekvő |
| Size (paper) | Méret |
| Columns | Hasábok |
| Breaks | Törések |
| Header / Footer | Élőfej / Élőláb |
| Footnote / Endnote | Lábjegyzet / Végjegyzet |
| Table of Contents | Tartalomjegyzék |
| Caption | Képaláírás |
| Bookmark | Könyvjelző |
| Cross-reference | Kereszthivatkozás |
| Citation / Bibliography | Forráshivatkozás / Irodalomjegyzék |
| Index | Tárgymutató |
| Comment / Comments | Megjegyzés / Megjegyzések |
| Track Changes | Változások követése |
| Spelling | Helyesírás |
| Thesaurus | Szinonimaszótár |
| Word Count | Szavak száma |
| Watermark | Vízjel |
| Page Colour | Oldalszín |
| Text Box | Szövegdoboz |
| WordArt | WordArt |
| Equation | Egyenlet |
| Symbol | Szimbólum |
| Hyperlink / Link | Hiperhivatkozás / Hivatkozás |
| Mail Merge | Körlevél |
| Envelopes / Labels | Borítékok / Címkék |
| Template | Sablon |
| Untitled | Névtelen |

## Workbooks

| English | Hungarian |
| :-- | :-- |
| Workbook | Munkafüzet |
| Sheet / Worksheet | Lap / Munkalap |
| Cell / Cells | Cella / Cellák |
| Row / Rows | Sor / Sorok |
| Column / Columns | Oszlop / Oszlopok |
| Range | Tartomány |
| Formula | Képlet |
| Function | Függvény |
| Number format | Számformátum |
| Currency / Percentage / Date / Time | Pénznem / Százalék / Dátum / Idő |
| Freeze Panes | Ablaktábla rögzítése |
| Conditional Formatting | Feltételes formázás |
| Format as Table | Formázás táblázatként |
| PivotTable | Kimutatás |
| Chart | Diagram |
| Sparklines | Értékgörbék |
| Slicer | Szeletelő |
| Data Validation | Érvényesítés |
| Remove Duplicates | Ismétlődések eltávolítása |
| Text to Columns | Szövegből oszlopok |
| Power Query | Power Query |
| Name box | Névmező |
| Formula bar | Szerkesztőléc |
| AutoSum | AutoSzum |
| Sum / Average / Count / Min / Max | Összeg / Átlag / Darab / Minimum / Maximum |

Function names inside formulas stay in English as TRANSLATING.md says (SUM,
VLOOKUP), although Hungarian Excel shows its own (SZUM, FKERES).

## Presentations

| English | Hungarian |
| :-- | :-- |
| Presentation | Bemutató |
| Slide / Slides | Dia / Diák |
| New Slide | Új dia |
| Layout | Elrendezés |
| Section | Szakasz |
| Master | Minta (Diaminta for the slide master) |
| Notes | Jegyzetek |
| Handout | Nyomtatott anyag |
| Shape / Shapes | Alakzat / Alakzatok |
| Picture / Pictures | Kép / Képek |
| Fill / Outline | Kitöltés / Körvonal |
| Shadow / Glow / Reflection | Árnyék / Ragyogás / Tükröződés |
| Transition | Áttűnés |
| Animation | Animáció |
| From Beginning / From Current Slide | Az elejétől / Az aktuális diától |
| Presenter View | Előadói nézet |
| Rehearse Timings | Próbavetítés |
| Video / Audio | Videó / Hang |

## Mail, calendar, contacts, pictures

| English | Hungarian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Beérkezett üzenetek / Elküldött elemek / Piszkozatok / Postázandó üzenetek / Levélszemét / Archívum / Törölt elemek |
| Message | Üzenet |
| New message | Új üzenet |
| Reply / Reply All / Forward | Válasz / Válasz mindenkinek / Továbbítás |
| Send | Küldés |
| Attachment | Melléklet |
| Account | Fiók |
| Folder | Mappa |
| Search | Keresés |
| Unread / Flagged | Olvasatlan / Megjelölt |
| Rules | Szabályok |
| Signature | Aláírás |
| Event | Esemény |
| Meeting | Értekezlet |
| Today / Day / Week / Month / Agenda | Ma / Nap / Hét / Hónap / Napirend |
| Repeat | Ismétlődés |
| Reminder | Emlékeztető |
| Contact | Névjegy |
| Address book | Címjegyzék |
| Phone / Email / Address | Telefon / E-mail / Cím |
| Rotate / Crop / Flip | Elforgatás / Körülvágás / Tükrözés |
| Rating / Tags | Értékelés / Címkék |
| Slideshow | Diavetítés |
| Brightness / Contrast | Fényerő / Kontraszt |
| Trim / Split | Vágás / Felosztás |
| Export video | Videó exportálása |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain formal Hungarian, not word for word. Keep a sentence's facts (a number,
a name in `{braces}`, a key) exactly. Prefer "Ez a fájl nem nyitható meg." or
"A fájlt nem sikerült megnyitni." over a literal rendering. A status that
starts with a word and a colon keeps that shape: "Nincs elküldve: {reason}".

## More recurring terms

| English | Hungarian |
| :-- | :-- |
| Database | Adatbázis |
| Table (in a database) | Tábla |
| Record / Records | Rekord / Rekordok |
| Field | Mező |
| Source | Forrás |
| Key | Kulcs |
| Password | Jelszó |
| Web address | Webcím |
| Network share | Hálózati megosztás |
| Server | Kiszolgáló |
| Read only | Csak olvasható |
| This computer | Ez a számítógép |
| Sign-in | Bejelentkezés |
| Allow | Engedélyezés |
| Invitation | Meghívó |
| Invite | Meghívás |
| Accepted / Declined / Tentative | Elfogadva / Elutasítva / Feltételes |
| Organizer | Szervező |
| Room / Rooms | Terem / Termek |
| Mailbox | Postafiók |
| Busy / Free | Elfoglalt / Szabad |
| All day | Egész napos |
| Occurrence | Előfordulás |
| Time zone | Időzóna |
| Start time / End time | Kezdés időpontja / Befejezés időpontja |
| Live stream | Élő közvetítés |
| Stream key | Streamkulcs |
| Clipboard | Vágólap |
| Background | Háttér |
| Accent | Kiemelőszín |
| Borders | Szegélyek |
| Banded Rows / Banded Columns | Sávos sorok / Sávos oszlopok |
| Bring Forward / Bring to Front | Előbbre hozás / Előrehozás |
| Alt Text | Helyettesítő szöveg |
| Accessibility / Check Accessibility | Akadálymentesség / Akadálymentesség ellenőrzése |
| Clear formatting | Formázás törlése |
| Change case | Kis- és nagybetűk |
| More colours… / Recent colours / Standard colours | További színek… / Legutóbbi színek / Standard színek |
| Cc / Bcc | Másolat / Titkos másolat |
| Blank document / Blank presentation / Blank worksheet | Üres dokumentum / Üres bemutató / Üres munkalap |
| language pack | nyelvi csomag |
| Voices and languages (the page) | Hangok és nyelvek |
| add-on | bővítmény |
| speech engine | beszédmotor |
| speech model | beszédmodell |
| voice | hang |
| Add from a file (command) | Hozzáadás fájlból |

## Intents and versions

### Voice

Commands (buttons, menu items, ribbon) are verbal nouns in -ás/-és, the
object first and the possessive ending on the verbal noun: "Címzett keresése".
Sentences address the reader formally (magázás) with the verb alone, never
"Ön": "Jelentkezzen be.", "Szeretné menteni?". Status lines and errors are
impersonal where they can be: "Mentve.", "Nem sikerült beállítani".

### By intent

| Intent | How this language phrases it | English | Hungarian |
| :-- | :-- | :-- | :-- |
| action, button | Verbal noun, object first, possessive ending on the verbal noun; never infinitive or imperative | Find Recipient | Címzett keresése |
| action, menu | The same verbal noun; the article goes in the short and medium | Close Window | Ablak bezárása |
| name | Noun phrase, adjective before the noun, no full stop | Horizontal text | Vízszintes szöveg |
| heading | Noun phrase; a compound in one word where Office writes one | Folder settings | Mappabeállítások |
| state, working | Verbal noun with the ellipsis | Finding suggestions… | Javaslatok keresése… |
| state, done | Participle in -va/-ve without "van"; a full sentence after it | Link copied. Paste it anywhere. | Hivatkozás másolva. Bárhová beillesztheti. |
| question | Formal verb as a yes or no question; "Szeretné ...?" for "Do you want to"; placeholder after a colon | Remove {name}? | Eltávolítja: {name}? |
| advice | Formal imperative, the purpose first in -hoz/-hez/-höz | Sign in to Talk to accept. | Az elfogadáshoz jelentkezzen be a Beszélgetésbe. |
| explain | Plain statement or noun phrase | Bullet character. | Felsorolásjel. |
| warning | Impersonal statement with a -ható/-hető form | Cannot be undone. | Nem vonható vissza. |
| error: cannot | "Nem sikerült ..." for could not; "Nem lehet ..." or a -ható/-hető form for cannot | Could not set up | Nem sikerült beállítani |
| error: failed | "... sikertelen", or "Nem sikerült a(z) ..." | Recognition failed. | A felismerés sikertelen. |
| error: not-found | "... nem található", or "Nem található: {name}" | Picture file is missing | A képfájl nem található |
| error: not-enough | "túl nagy", "túl hosszú", "Nincs elég ..." | File too large for a message. | A fájl túl nagy egy üzenethez. |
| error: unavailable | "... nem érhető el" | Speech is not available. | A felolvasás nem érhető el. |
| error: not-allowed | "... nincs engedélyezve", "Nincs engedélye ..." | Camera not allowed. | A kamera nincs engedélyezve. |
| error: invalid | "... érvénytelen", or „{x}” nem ... | "{text}" is not a range | „{text}” nem tartomány |
| error: other | Plain statement; formal imperative where the English gives an order | Keep at least one worksheet visible. | Legalább egy munkalapnak láthatónak kell maradnia. |
| sample | Written as a Hungarian writes it, dates in Hungarian order | free on 12 March? | szabad március 12-én? |

The suite has no sample label; the sample row uses the
sample sentence this glossary already gives.

### Short, medium and complete

- **Short** keeps the action and drops the object. When the object goes,
  the possessive ending goes with it: "Címzett keresése" becomes "Keresés",
  "Ablak bezárása" becomes "Bezárás".
- Drop in this order: the article, then adverbs and places, then a second
  clause. Never drop a placeholder, a negation (nem, nincs, sem) or a key.
- A message's short version may be a fragment with a participle:
  "Hivatkozás másolva.", "Nincs elküldve: {reason}".
- Allowed abbreviations are the standard ones only: "pl.", "kb.", "max.",
  "min.", "stb." with a full stop, "db" without. Units, dates and times come
  from `Intl`. Not allowed: cuts of your own ("beáll.", "kerés."), dropped
  accents, English abbreviations.
- **Counted labels** keep both forms, the noun singular in each. Short drops
  the words round the noun, never the noun; if it is still too wide, put the
  noun first with a colon: "Szavak: {count}". Never an ending on `{count}`.
- **Complete** adds the object with its article and the place: "Címzett
  keresése a listában". A message is a full formal sentence with a full
  stop; a question becomes "Szeretné ...?".

| Version | Short | Medium | Complete |
| :-- | :-- | :-- | :-- |
| English | Find | Find Recipient | Find a recipient in the list |
| Hungarian | Keresés | Címzett keresése | Címzett keresése a listában |
| English | Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? |
| Hungarian | Eltávolítja: {name}? | Eltávolítja a névjegyek közül: {name}? | Szeretné eltávolítani a névjegyei közül: {name}? |
| English | Folder settings | Folder settings | Settings for this folder |
| Hungarian | Mappabeállítások | Mappabeállítások | A mappa beállításai |

### Punctuation and marks

- **Ellipsis**: … straight after the last word, no space, on a command that
  opens a dialog ("Tallózás…", "Mentés másként…") and on a working state.
  A command that acts at once takes none.
- **Colon, question and exclamation marks**: no space before, one ordinary
  space after: "Nincs elküldve: {reason}", "Eltávolítja: {name}?". Avoid the
  exclamation mark. After a colon the next word is lower case unless it is
  a name or a full sentence follows.
- **Quotation marks**: „…” round a name or a value, »…« inside them:
  „{address}” nem cím.
- **Capitals**: sentence case on buttons, menu items, tabs, titles and
  headings, whatever the English does. App and brand names keep theirs.
- **Full stops**: a full sentence ends with one, in every version; a button,
  title, name or noun-phrase status takes none. Where the English version is
  a fragment with a full stop ("Bullet character."), keep the full stop.

### Access keys

- `&` goes before a letter of the Hungarian word: "&Szerkesztés",
  "Ablak be&zárása". One `&` per label.
- Choose a letter not used by another item in the same menu or dialog:
  the first letter first, then a clear consonant of the word.
- Prefer a plain letter. Á, é, í, ó, ö, ő, ú, ü and ű have their own keys on
  the Hungarian keyboard and are allowed, but only when no plain letter is
  free.
- Avoid letters with a descender (g, j, p, q, y) where another is free, as
  Microsoft advises: the underline is hard to see under them.
- Never put `&` before a placeholder, a space or a brand name. Keep the same
  letter for the same command in every app.
