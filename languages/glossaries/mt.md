# Maltese glossary for Rutba Office

The words the Maltese pack (`lang-mt`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Maltese where those have a
word, and plain everyday Maltese where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the singular imperative, as Maltese Office does:
  Iftaħ (Open), Issejvja (Save), Agħlaq (Close), Daħħal (Insert),
  Ħassar (Delete), Żid kont (Add account).
- **The reader** is addressed in the singular "int", as current Office and
  Windows do; Maltese software has no separate polite form. Possessives and
  verbs follow: "Il-kalendarju tiegħek", "Agħżel stampa", "Jekk m'intix
  ċert, żomm kopja tal-fajl."
- **Tab and group names** are nouns, the first word and the main words
  capitalised as Office shows them: Dar, Daħħal, Disinn, Tqassim tal-Paġna,
  Reviżjoni, Veduta. A tab that English names with a verb keeps the verb
  form Office uses (Daħħal, Pinġi, Irrekordja).
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated, wherever Maltese word order puts them.
  The definite article cannot assimilate to a placeholder, so put the article
  on a noun before it, or use a colon: "Il-folja {name}", "Tabella: {name}",
  "Ħoll ir-rabta ma' {name}". Never write "il-{name}".
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2,
  "Avveniment ġdid (Ctrl+N)".
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`.
- **Brand and product names** stay in their own spelling: Rutba Office,
  Rutba, Microsoft, Word, Excel, PowerPoint, Outlook, Windows, Google,
  YouTube, iCloud, WordArt, SmartArt, PivotTable, Power Query.
- **The app names** are translated as in the first table below. The suite's
  other named parts (Talk, Locker, Base, Broadcast, Recorder, Data Files)
  keep their English names, as product names: "Kopja ta' Data Files".
- **Punctuation**: ordinary Latin punctuation. Quotation marks are the
  curly double quotes “ ”, with ‘ ’ inside them: “liberu fit-12 ta' Marzu?”.
  The apostrophe of a cut word is part of the word (ta', Aqta', Erġa'), so a
  command such as Aqta' keeps it. The ellipsis … stays at the end of a
  command that opens a dialog: Issejvja Bħala…, Aktar kuluri….
- **No em dash.** Where the English has one, write a colon, a comma,
  parentheses or a new sentence: "Grupp m'għandux mili jew kontorn tiegħu:
  ifformattja forma li hemm fih." No en dash with spaces as a dash either; an
  en dash in a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, also before % and units
  ("Griż 25%", "176 × 250 mm").
- **Letters**: always the Maltese letters ċ, ġ, ħ, ż and Ċ, Ġ, Ħ, Ż, and the
  digraphs għ and ie; never c, g, h, z in their place.
- **Counts** use Maltese's five plural forms, `one`, `two`, `few`, `many`,
  `other`. `one` is 1; `two` is 2; `few` is 0 and 3 to 10 (also 103 to 110);
  `many` is 11 to 19 (also 111 to 119); `other` is 20 and above and the rest.
  After 2 to 10 a noun is plural; after 0 it is plural too; from 11 up it is
  singular again. A dual noun (jumejn, sagħtejn) already holds the number, so
  with `{count}` write the plain plural for `two`. On one example:
  - one: `{count} avveniment`
  - two: `{count} avvenimenti`
  - few: `{count} avvenimenti`
  - many: `{count} avveniment`
  - other: `{count} avveniment`

  With a dual word: one `{count} jum`, two `{count} ijiem`, few
  `{count} ijiem`, many `{count} jum`, other `{count} jum`. Digits never take
  the "-il" linking ending ("11-il") in a label; write `{count} jum`.
- **Numbers and dates** are formatted by the window from the region (mt-MT:
  a full stop for decimals, a comma for thousands). Labels never spell out a
  format; "{date}, il-ġurnata kollha" leaves `{date}` as it comes.
- **The article and prepositions**: il- assimilates before the sun letters
  ċ, d, n, r, s, t, x, ż, z (it-tabella, is-sors, ir-rekords, iż-żona), and
  takes l-i before two consonants (l-iskrin, l-istampa). Prepositions join
  the article: fil-, mill-, għall-, bil-, tal-, mal-, sal-.
- **Gender with `{name}`**: Maltese verbs and adjectives agree in gender and
  number, and a placeholder's gender is unknown. Prefer a noun subject or a
  colon so nothing has to agree: "Risposta ta' {name}: aċċettat" rather than
  "{name} aċċetta" or "{name} aċċettat", which fix a gender; "Stedina minn
  {name}." The same applies to `{room}`, `{user}` and `{summary}`.
- **Data and date**: Maltese "data" means a calendar date. The suite uses
  Data for a date and Dejta for data (the Data tab, Validazzjoni tad-Dejta),
  so the two never collide.

## The apps

| English | Maltese |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenti |
| Worksheets | Folji tax-Xogħol |
| Presentations | Preżentazzjonijiet |
| Mail | Posta |
| Calendar | Kalendarju |
| Contacts | Kuntatti |
| Pictures | Stampi |
| Image (the editor) | Immaġni |
| Video | Vidjo |
| Home (the launcher) | Dar |

## Tabs and frame

| English | Maltese |
| :-- | :-- |
| File | Fajl |
| Home | Dar |
| Insert | Daħħal |
| Draw | Pinġi |
| Design | Disinn |
| Layout | Tqassim |
| Page Layout | Tqassim tal-Paġna |
| References | Referenzi |
| Mailings | Korrispondenza |
| Review | Reviżjoni |
| View | Veduta |
| Help | Għajnuna |
| Formulas | Formuli |
| Data | Dejta |
| Automate | Awtomatizza |
| Transitions | Tranżizzjonijiet |
| Animations | Animazzjonijiet |
| Slide Show | Wiri tas-Slajds |
| Record | Irrekordja |
| Table Design | Disinn tat-Tabella |
| Table Layout | Tqassim tat-Tabella |
| Shape Format | Format tal-Forma |
| Picture Format | Format tal-Istampa |
| Ribbon | Żigarella |
| Pane | Pannell |
| Status bar | Bar tal-istatus |
| Dialog | Kaxxa tad-djalogu |
| Settings | Issettjar |
| Language | Lingwa |
| Theme | Tema |

## Commands

| English | Maltese |
| :-- | :-- |
| New | Ġdid |
| Open | Iftaħ |
| Save | Issejvja |
| Save As | Issejvja Bħala |
| Save as Template | Issejvja bħala Mudell |
| Close | Agħlaq |
| Print | Ipprintja |
| Export | Esporta |
| Import | Importa |
| Share | Aqsam |
| Undo | Erġa' Lura |
| Redo | Erġa' Agħmel |
| Cut | Aqta' |
| Copy | Ikkopja |
| Paste | Waħħal |
| Paste Special | Waħħal Speċjali |
| Delete | Ħassar |
| Remove | Neħħi |
| Rename | Ibdel l-Isem |
| Select All | Agħżel Kollox |
| Find | Sib |
| Replace | Ibdel |
| Go To | Mur Għal |
| Insert | Daħħal |
| Apply | Applika |
| Apply to All | Applika għal Kollox |
| OK | OK |
| Cancel | Ikkanċella |
| Yes / No | Iva / Le |
| Done | Lest |
| Next / Previous | Li Jmiss / Ta' Qabel |
| Back | Lura |
| Refresh | Irrifriska |
| Update | Aġġorna |
| Accept / Reject | Aċċetta / Irrifjuta |
| Sort | Issortja |
| Filter | Iffiltra (a tab or button: Filtru) |
| Group / Ungroup | Iggruppa / Neħħi l-Grupp |
| Merge / Split | Għaqqad / Aqsam |
| Zoom In / Zoom Out | Kabbar / Ċekken |
| Full screen | Skrin sħiħ |
| Minimise / Maximise / Restore | Imminimizza / Immassimizza / Irrestawra |
| Expand / Collapse | Espandi / Iġbor |
| Browse | Ibbrawżja… |
| Add | Żid |
| Edit | Editja |
| Reset | Irrisettja |
| Clear | Ikklerja |
| Show / Hide | Uri / Aħbi |
| More | Aktar |
| None | Xejn |
| Automatic | Awtomatiku |

## Text and documents

| English | Maltese |
| :-- | :-- |
| Document | Dokument |
| Page | Paġna |
| Paragraph | Paragrafu |
| Line | Linja |
| Word (a word) | Kelma |
| Character | Karattru |
| Font | Tipa |
| Font size | Daqs tat-tipa |
| Bold / Italic / Underline | Grassett / Korsiv / Sottolinja |
| Strikethrough | Linja min-nofs |
| Subscript / Superscript | Sottoskritt / Superskritt |
| Text highlight colour | Kulur tal-enfasi tat-test |
| Font colour | Kulur tat-tipa |
| Colour | Kulur |
| Style / Styles | Stil / Stili |
| Heading | Intestatura |
| Title | Titlu |
| Bullets / Numbering | Punti / Numerazzjoni |
| Multilevel List | Lista b'Diversi Livelli |
| List | Lista |
| Indent | Indentazzjoni |
| Alignment / Align Left / Centre / Align Right / Justify | Allinjament / Allinja lejn ix-Xellug / Ċentru / Allinja lejn il-Lemin / Ġustifika |
| Line spacing | Spazjar bejn il-linji |
| Margins | Marġini |
| Orientation / Portrait / Landscape | Orjentazzjoni / Vertikali / Orizzontali |
| Size (paper) | Daqs |
| Columns | Kolonni |
| Breaks | Qtugħ |
| Header / Footer | Testata / Qiegħ il-Paġna |
| Footnote / Endnote | Nota f'qiegħ il-paġna / Nota fl-aħħar |
| Table of Contents | Werrej |
| Caption | Kapsjoni |
| Bookmark | Sinjal |
| Cross-reference | Kontroreferenza |
| Citation / Bibliography | Ċitazzjoni / Bibljografija |
| Index | Indiċi |
| Comment / Comments | Kumment / Kummenti |
| Track Changes | Segwi l-Bidliet |
| Spelling | Ortografija |
| Thesaurus | Teżawru |
| Word Count | Għadd tal-Kliem |
| Watermark | Marka tal-ilma |
| Page Colour | Kulur tal-Paġna |
| Text Box | Kaxxa tat-Test |
| WordArt | WordArt |
| Equation | Ekwazzjoni |
| Symbol | Simbolu |
| Hyperlink / Link | Iperħolqa / Ħolqa |
| Mail Merge | Għaqda tal-Ittri |
| Envelopes / Labels | Envelops / Tikketti |
| Template | Mudell |
| Untitled | Mingħajr titlu |

## Workbooks

| English | Maltese |
| :-- | :-- |
| Workbook | Ktieb tax-xogħol |
| Sheet / Worksheet | Folja / Folja tax-xogħol |
| Cell / Cells | Ċellola / Ċelloli |
| Row / Rows | Ringiela / Ringieli |
| Column / Columns | Kolonna / Kolonni |
| Range | Medda |
| Formula | Formula |
| Function | Funzjoni |
| Number format | Format tan-numri |
| Currency / Percentage / Date / Time | Munita / Perċentwal / Data / Ħin |
| Freeze Panes | Iffriża l-Pannelli |
| Conditional Formatting | Formattjar Kundizzjonali |
| Format as Table | Ifformattja bħala Tabella |
| PivotTable | PivotTable |
| Chart | Graff |
| Sparklines | Graffs fiċ-ċellola |
| Slicer | Filtru viżiv |
| Data Validation | Validazzjoni tad-Dejta |
| Remove Duplicates | Neħħi d-Duplikati |
| Text to Columns | Test f'Kolonni |
| Power Query | Power Query |
| Name box | Kaxxa tal-isem |
| Formula bar | Bar tal-formuli |
| AutoSum | Somma Awtomatika |
| Sum / Average / Count / Min / Max | Somma / Medja / Għadd / Minimu / Massimu |

## Presentations

| English | Maltese |
| :-- | :-- |
| Presentation | Preżentazzjoni |
| Slide / Slides | Slajd / Slajds |
| New Slide | Slajd Ġdid |
| Layout | Tqassim |
| Section | Taqsima |
| Master | Prinċipali (Slide Master: Slajd Prinċipali) |
| Notes | Noti |
| Handout | Folja għall-udjenza |
| Shape / Shapes | Forma / Forom |
| Picture / Pictures | Stampa / Stampi |
| Fill / Outline | Mili / Kontorn |
| Shadow / Glow / Reflection | Dell / Dija / Riflessjoni |
| Transition | Tranżizzjoni |
| Animation | Animazzjoni |
| From Beginning / From Current Slide | Mill-Bidu / Mis-Slajd Kurrenti |
| Presenter View | Veduta tal-Preżentatur |
| Rehearse Timings | Ipprova l-Ħinijiet |
| Video / Audio | Vidjo / Awdjo |

## Mail, calendar, contacts, pictures

| English | Maltese |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Kaxxa tad-dħul / Mibgħuta / Abbozzi / Kaxxa tal-ħruġ / Posta mhux mixtieqa / Arkivju / Skart |
| Message | Messaġġ |
| New message | Messaġġ ġdid |
| Reply / Reply All / Forward | Wieġeb / Wieġeb lil Kulħadd / Għaddi |
| Send | Ibgħat |
| Attachment | Mehmuż |
| Account | Kont |
| Folder | Folder |
| Search | Fittex |
| Unread / Flagged | Mhux moqri / Immarkat |
| Rules | Regoli |
| Signature | Firma |
| Event | Avveniment |
| Meeting | Laqgħa |
| Today / Day / Week / Month / Agenda | Illum / Jum / Ġimgħa / Xahar / Aġenda |
| Repeat | Irrepeti |
| Reminder | Tfakkira |
| Contact | Kuntatt |
| Address book | Ktieb tal-indirizzi |
| Phone / Email / Address | Telefon / Imejl / Indirizz |
| Rotate / Crop / Flip | Dawwar / Ikkroppja / Aqleb |
| Rating / Tags | Valutazzjoni / Marki |
| Slideshow | Wirja tal-istampi |
| Brightness / Contrast | Luminożità / Kuntrast |
| Trim / Split | Qassar / Aqsam |
| Export video | Esporta l-vidjo |

## More recurring terms

| English | Maltese |
| :-- | :-- |
| Database | Bażi tad-dejta |
| Table | Tabella |
| Record / Records | Rekord / Rekords |
| Field | Qasam |
| Source | Sors |
| Read only | Għall-qari biss |
| Copy (a copy) | Kopja |
| Web address | Indirizz tal-web |
| Network share | Folder kondiviż fuq in-netwerk |
| Server / Server address | Server / Indirizz tas-server |
| Password | Password |
| Key | Ċavetta |
| Sign-in | Dħul |
| Allow | Ippermetti |
| Link / Unlink (a source) | Orbot / Ħoll ir-rabta |
| Pin / Unpin | Ippinja / Neħħi l-pin |
| On a schedule | Skont skeda |
| Stream / Stream key | Xandira / Ċavetta tax-xandira |
| Live (broadcast) | Dirett |
| Platform | Pjattaforma |
| Invitation | Stedina |
| Cancellation | Kanċellazzjoni |
| Accepted / Declined / Tentative | Aċċettat / Irrifjutat / Provviżorju |
| Organizer | Organizzatur |
| Room / Rooms | Kamra / Kmamar |
| Mailbox | Kaxxa postali |
| All day | Il-ġurnata kollha |
| Availability | Disponibbiltà |
| Busy / Free | Okkupat / Liberu |
| Occurrence | Okkorrenza |
| Time zone | Żona tal-ħin |
| Every day / week / month / year | Kuljum / Kull ġimgħa / Kull xahar / Kull sena |
| Recent colours / Standard colours / More colours… | Kuluri riċenti / Kuluri standard / Aktar kuluri… |
| Background | Sfond |
| Borders | Bordi |
| Bring to Front / Bring Forward | Ġib quddiem nett / Ġib 'il quddiem |
| Clipboard | Klibbord |
| Alt Text | Test alternattiv |
| Accessibility | Aċċessibbiltà |
| Blank document / Blank presentation / Blank worksheet | Dokument vojt / Preżentazzjoni vojta / Folja tax-xogħol vojta |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Maltese, not word for word. Keep a sentence's facts (a number, a name
in `{braces}`, a key) exactly. Prefer "Dan il-fajl ma setax jinfetaħ." over
a literal rendering, and "Ma ntbagħatx: {reason}" for a short status.

### Pack terms

| English | Maltese |
| :-- | :-- |
| language pack | pakkett tal-lingwa |
| Voices and languages (the page) | Vuċijiet u lingwi |
| add-on | żieda |
| speech engine | magna tad-diskors |
| speech model | mudell tad-diskors |
| voice | vuċi |
| Add from a file (command) | Żid minn fajl |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

Commands (buttons, menu items, ribbon, and their tooltips) take the singular
imperative first: "Sib Destinatarju", "Agħlaq it-Tieqa". The reader is
"int": second person singular verbs and "tiegħek" ("Trid tneħħi ...?").
Status lines and errors take a noun subject, and the verb or adjective
agrees with that noun, never with a placeholder.

### By intent

| Intent | How this language phrases it | English | Maltese |
| :-- | :-- | :-- | :-- |
| action, button | Imperative first, object after it, case as the English | Find Recipient | Sib Destinatarju |
| action, menu | Imperative, then the article, assimilated, and the noun | Close Window | Agħlaq it-Tieqa |
| name | Noun, then the adjective agreeing with it | Horizontal text | Test orizzontali |
| heading | Noun, then tal- and the qualifying noun | Folder settings | Issettjar tal-folder |
| state, working | qed with the imperfect, agreeing with the noun, and the ellipsis | Finding suggestions… | Qed jinstabu suġġerimenti… |
| state, done | ġie or ġiet with the participle, agreeing with the noun | Link copied. Paste it anywhere. | Il-ħolqa ġiet ikkupjata. Waħħalha fejn trid. |
| question | Second person imperfect; complete "Trid ...?" | Remove {name}? | Tneħħi {name}? |
| advice | Imperative, the purpose after it with biex | Sign in to Talk to accept. | Idħol f'Talk biex taċċetta. |
| explain | Plain statement or noun phrase | Bullet character. | Il-karattru tal-punt. |
| warning | "ma jistax jitreġġa' lura" | Cannot be undone. | Ma jistax jitreġġa' lura. |
| error: cannot | "Ma jistax" for cannot, "Ma setax" for could not, agreeing with the noun (masculine when there is none) | Could not set up | Ma setax jiġi ssettjat |
| error: failed | "... falla" (masculine), "... falliet" (feminine) | Recognition failed. | Ir-rikonoxximent falla. |
| error: not-found | "... ma nstabx" or "ma nstabitx"; "nieqes" for missing | Picture file is missing | Il-fajl tal-istampa ma nstabx |
| error: not-enough | "kbir wisq", "twil wisq", "M'hemmx biżżejjed ..." | File too large for a message. | Il-fajl kbir wisq għal messaġġ. |
| error: unavailable | "... mhux disponibbli" (disponibbli does not change) | Speech is not available. | Il-qari bil-vuċi mhux disponibbli. |
| error: not-allowed | "... mhux permess", with a masculine noun such as l-użu | Camera not allowed. | L-użu tal-kamera mhux permess. |
| error: invalid | "... mhux validu", or “{x}” mhux ... | "{text}" is not a range | “{text}” mhux medda |
| error: other | Plain statement; imperative where the English gives an order | Keep at least one worksheet visible. | Żomm mill-inqas folja tax-xogħol waħda viżibbli. |
| sample | Written as Maltese writes it, the day with fit- and ta' | free on 12 March? | liberu fit-12 ta' Marzu? |

The suite has no sample label; the sample row uses the
sample sentence this glossary already gives.

### Short, medium and complete

- **Short** keeps the imperative and drops the object: "Sib Destinatarju"
  becomes "Sib", "Agħlaq it-Tieqa" becomes "Agħlaq".
- Drop in this order: the object, then a joined preposition and its noun
  ("fil-lista", "tiegħek"), then a second clause. Never drop a placeholder,
  a negation (ma, mhux, m'hemmx) or a key.
- A message's short version may be a colon fragment: "Ma ntbagħatx:
  {reason}", "Avvenimenti: {count}".
- Allowed abbreviations are the standard ones only: "eż." (eżempju), "nru"
  (numru). Units, dates and times come from `Intl`. Not allowed: cuts of
  your own, a dropped apostrophe (ta', Aqta'), c, g, h or z in place of ċ,
  ġ, ħ or ż, or English abbreviations.
- **Counted labels** keep all five forms, each with its singular or plural.
  Short drops the words round the noun, never the noun; if still too wide,
  put the noun first with a colon, in the plural: "Avvenimenti: {count}".
- **Complete** adds the object with its article and "tiegħek" where the
  English has "your"; a message becomes a full sentence with a full stop,
  and a question becomes "Trid ...?".

| Version | Short | Medium | Complete |
| :-- | :-- | :-- | :-- |
| English | Find | Find Recipient | Find a recipient in the list |
| Maltese | Sib | Sib Destinatarju | Sib destinatarju fil-lista |
| English | Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? |
| Maltese | Tneħħi {name}? | Tneħħi {name} mill-kuntatti? | Trid tneħħi {name} mill-kuntatti tiegħek? |
| English | Folder settings | Folder settings | Settings for this folder |
| Maltese | Issettjar tal-folder | Issettjar tal-folder | Issettjar għal dan il-folder |

### Punctuation and marks

- **Ellipsis**: … straight after the last word, no space, on a command that
  opens a dialog ("Ibbrawżja…", "Issejvja Bħala…") and on a working state.
  After a word ending in an apostrophe the ellipsis follows it directly.
- **Colon, question and exclamation marks**: as in English, no space
  before, one ordinary space after: "Ma ntbagħatx: {reason}". Avoid the
  exclamation mark.
- **Quotation marks**: “ ” round a name or a value, ‘ ’ inside them:
  “{text}” mhux medda. The apostrophe of a cut word is the plain ' as this
  glossary writes it (ta', Erġa'), so it is never read as a closing ’.
- **Capitals**: follow the English version's case and the Office forms in
  this glossary. In Title Case the article and prepositions stay lower case
  and the capital goes on the noun after the hyphen: "Tqassim tal-Paġna",
  "Agħlaq it-Tieqa". The complete version is in sentence case where the
  English one is.
- **Full stops**: a full sentence ends with one, in every version; a button,
  title, name or noun-phrase status takes none. Where the English version is
  a fragment with a full stop ("Bullet character."), keep the full stop.

### Access keys

- `&` goes before a letter of the Maltese word: "&Editja", "&Sib",
  "Agħlaq it-&Tieqa". One `&` per label.
- Choose a letter not used by another item in the same menu or dialog:
  the first letter of the verb first, then a clear consonant.
- Mark a plain letter only. Ċ, ġ, ħ and ż have keys on the Maltese keyboard
  but not on the UK and US keyboards many Maltese users type on, so they are
  never marked; nor are the g or h of the digraph għ.
- Never mark a letter of the article (il-, it-, is-), since it changes with
  the noun, nor the apostrophe of a cut word.
- Avoid letters with a descender (g, j, p, q, y) where another is free.
- Never put `&` before a placeholder, a space or a brand name. Keep the same
  letter for the same command in every app.
