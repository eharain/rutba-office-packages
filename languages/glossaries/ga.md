# Irish glossary for Rutba Office

The words the Irish pack (`lang-ga`) uses for the suite's recurring terms, so
the same thing is called the same everywhere. It follows Microsoft Office and
Windows in Irish where they have a word, in the standard written language (An
Caighdeán Oifigiúil), and plain everyday Irish where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the second person singular imperative, as Office and
  Windows do in Irish: Sábháil (Save), Oscail (Open), Dún (Close), Ionsáigh
  (Insert), Cuir leis (Add). A longer command keeps the imperative first:
  Sábháil mar theimpléad (Save as Template).
- **The reader** is addressed as `tú`, the singular, as current Office does.
  Irish has no separate polite form; never use `sibh` for one reader:
  Tá do chomhad sábháilte. (Your file is saved.)
- **Tab and group names** are the words Office uses, which are sometimes a
  noun and sometimes an imperative: Baile, Ionsáigh, Dearadh, Leagan Amach,
  Athbhreithniú, Amharc. A group name is a noun: Gearrthaisce (Clipboard),
  Cló (Font), Alt (Paragraph).
- **Capitals** follow the English: a Title Case label capitalises its main
  words, a sentence-case label stays sentence case. After a mutation the
  capital stays on the word's own first letter, and the prefix is lower case:
  i bhFeidhm, ar an bhFoclóir, na hÍomhá, an tSleamhnáin, seacht nImeacht.
- **Placeholders** such as `{name}`, `{count}` and `{table}` stay exactly as
  written, in braces, untranslated, wherever Irish word order puts them:
  Athainmnigh {name}; {count} imeacht in {name}.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2:
  Imeacht nua (Ctrl+N).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, `=SUM(ABOVE)`: Imeachtaí ó chomhad .ics.
- **Brand and product names** stay in Latin letters, unchanged, and are never
  mutated: Rutba Office, Word, Excel, PowerPoint, Windows, Google, Microsoft,
  iCloud, YouTube, Facebook: Oscail YouTube Studio; i bhfillteán Google Drive.
- **The app names** are translated as in the first table below and treated as
  names: they are not mutated, and where a preposition would mutate one, put
  `an aip` (the app) in front: san aip Féilire, ón aip Ríomhphost.
- **Punctuation** is the English set: comma, full stop, colon, question mark.
  Quotation marks are “ ” (and ‘ ’ inside them): mar shampla, “saor ar 12
  Márta?”. The ellipsis … stays at the end of a command that opens a dialog:
  Brabhsáil…, Tuilleadh dathanna….
- **No em dash.** Where the English has (long dash) , write a colon, a comma, brackets
  or a new sentence. Never an en dash with spaces round it. An en dash in a
  range (1 to 10) is fine: Cuntais: freastalaí CalDAV nó CardDAV (iCloud,
  Fastmail, Nextcloud agus a leithéid).
- **No no-break spaces.** Ordinary spaces only, also inside sizes such as
  176 × 250 mm.
- **Counts** use Irish's five plural forms, in this order: `one` (1), `two`
  (2), `few` (3 to 6), `many` (7 to 10) and `other` (0, 11 and up). After a
  number Irish uses the singular noun: lenited after 1 to 6, eclipsed after 7
  to 10, plain otherwise. Every form is written out with `{count}` in it. On
  one example, "{count} file":
  - one: `{count} chomhad`
  - two: `{count} chomhad`
  - few: `{count} chomhad`
  - many: `{count} gcomhad`
  - other: `{count} comhad`

  A noun starting with a vowel takes n- after 7 to 10 (`{count} n-imeacht`)
  and is unchanged after 1 to 6. A noun starting with s, l, n, r or a vowel is
  not lenited, and s is never eclipsed (`{count} sleamhnán` in every form
  except after 1 to 6, where it is `{count} shleamhnán`). People are counted
  with `duine`: `{count} duine`, `{count} nduine` (many). Known limit: `other`
  covers 11 to 19 too, where the spoken number would also mutate; write the
  plain form there and leave it to the reviewer. Where a count stands alone
  and the noun is awkward, a colon is fine: Athruithe: {count}.
- **Numbers and dates** are formatted by the window from the region (ga-IE:
  1,234.5 and 12/03/2026), so a label never spells out a format. Month and
  day names are lower case inside a sentence and capitalised in a heading:
  12 Márta, Dé Luain.
- **Mutations and placeholders.** A placeholder cannot be mutated, so never
  put it straight after a word that would lenite or eclipse it, and never
  make an adjective or pronoun agree with it. Put a plain noun in front, or
  use a colon:
  - "in {calendar}" becomes san fhéilire {calendar};
  - "Change {name}" becomes Athraigh {name} (no mutation after an
    imperative);
  - "About {name} online" becomes Faoi {name} ar líne (faoi does not
    mutate a name).
- **Gender of `{name}`** is not known (a person, a file, a room, a table), so
  write the sentence so no word agrees with it: {name}: glacadh leis
  (accepted), not a pronoun "sé" or "sí".
- **Genitive.** A noun that qualifies another takes the genitive, with the
  article's mutation: Dath an Chló (Font colour), Dath an Leathanaigh (Page
  Colour), Leagan Amach an Leathanaigh (Page Layout). Short ribbon labels may
  drop the article when Office does: Formáid Pictiúir.
- **Undo and Cancel** are both Cealaigh in Windows and Office in Irish.
  Where both appear together, write Cealaigh an gníomh deireanach in the
  tooltip for Undo.

## The apps

| English | Irish |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Doiciméid |
| Worksheets | Bileoga Oibre |
| Presentations | Láithreoireachtaí |
| Mail | Ríomhphost |
| Calendar | Féilire |
| Contacts | Teagmhálaithe |
| Pictures | Pictiúir |
| Image (the editor) | Íomhá |
| Video | Físeán |
| Home (the launcher) | Baile |
| Data Files (the database's file app) | Comhaid sonraí (proposed by the languages session under the PM's rule of 13 Nov) |
| Talk | Caint |
| Locker | Taisceadán |
| Colour | Dath |
| Base | Bunachar |
| Broadcast | Craoladh |
| Recorder | Taifeadán |

## Tabs and frame

| English | Irish |
| :-- | :-- |
| File | Comhad |
| Home | Baile |
| Insert | Ionsáigh |
| Draw | Tarraing |
| Design | Dearadh |
| Layout | Leagan Amach |
| Page Layout | Leagan Amach an Leathanaigh |
| References | Tagairtí |
| Mailings | Postálacha |
| Review | Athbhreithniú |
| View | Amharc |
| Help | Cabhair |
| Formulas | Foirmlí |
| Data | Sonraí |
| Automate | Uathoibrigh |
| Transitions | Trasdulta |
| Animations | Beochana |
| Slide Show | Taispeántas Sleamhnán |
| Record | Taifead |
| Table Design | Dearadh Tábla |
| Table Layout | Leagan Amach Tábla |
| Shape Format | Formáid Crutha |
| Picture Format | Formáid Pictiúir |
| Ribbon | Ribín |
| Pane | Pána |
| Status bar | Barra stádais |
| Dialog | Bosca dialóige |
| Settings | Socruithe |
| Language | Teanga |
| Theme | Téama |

## Commands

| English | Irish |
| :-- | :-- |
| New | Nua |
| Open | Oscail |
| Save | Sábháil |
| Save As | Sábháil Mar |
| Save as Template | Sábháil mar Theimpléad |
| Close | Dún |
| Print | Priontáil |
| Export | Easpórtáil |
| Import | Iompórtáil |
| Share | Comhroinn |
| Undo | Cealaigh |
| Redo | Athdhéan |
| Cut | Gearr |
| Copy | Cóipeáil |
| Paste | Greamaigh |
| Paste Special | Greamaigh Speisialta |
| Delete | Scrios |
| Remove | Bain |
| Rename | Athainmnigh |
| Select All | Roghnaigh Uile |
| Find | Aimsigh |
| Replace | Ionadaigh |
| Go To | Téigh Go |
| Insert | Ionsáigh |
| Apply | Cuir i bhFeidhm |
| Apply to All | Cuir i bhFeidhm ar Gach Ceann |
| OK | OK |
| Cancel | Cealaigh |
| Yes / No | Tá / Níl |
| Done | Déanta |
| Next / Previous | Ar Aghaidh / Roimhe Seo |
| Back | Siar |
| Refresh | Athnuaigh |
| Update | Nuashonraigh |
| Accept / Reject | Glac Leis / Diúltaigh |
| Sort | Sórtáil |
| Filter | Scag |
| Group / Ungroup | Grúpáil / Díghrúpáil |
| Merge / Split | Cumaisc / Scoilt |
| Zoom In / Zoom Out | Zúmáil Isteach / Zúmáil Amach |
| Full screen | Lánscáileán |
| Minimise / Maximise / Restore | Íoslaghdaigh / Uasmhéadaigh / Athchóirigh |
| Expand / Collapse | Leathnaigh / Laghdaigh |
| Browse | Brabhsáil |
| Add | Cuir Leis |
| Edit | Cuir in Eagar |
| Reset | Athshocraigh |
| Clear | Glan |
| Show / Hide | Taispeáin / Folaigh |
| More | Tuilleadh |
| None | Dada |
| Automatic | Uathoibríoch |

## Text and documents

| English | Irish |
| :-- | :-- |
| Document | Doiciméad |
| Page | Leathanach |
| Paragraph | Alt |
| Line | Líne |
| Word (a word) | Focal |
| Character | Carachtar |
| Font | Cló |
| Font size | Clómhéid |
| Bold / Italic / Underline | Trom / Iodálach / Folínigh |
| Strikethrough | Líne Tríd |
| Subscript / Superscript | Foscript / Forscript |
| Text highlight colour | Dath aibhsithe téacs |
| Font colour | Dath an chló |
| Colour | Dath |
| Style / Styles | Stíl / Stíleanna |
| Heading | Ceannteideal |
| Title | Teideal |
| Bullets / Numbering | Urchair / Uimhriú |
| Multilevel List | Liosta Ilchéime |
| List | Liosta |
| Indent | Eangú |
| Alignment / Align Left / Centre / Align Right / Justify | Ailíniú / Ailínigh ar Chlé / Láraigh / Ailínigh ar Dheis / Comhfhadaigh |
| Line spacing | Spásáil línte |
| Margins | Imill |
| Orientation / Portrait / Landscape | Treoshuíomh / Portráid / Tírdhreach |
| Size (paper) | Méid |
| Columns | Colúin |
| Breaks | Bristeacha |
| Header / Footer | Ceanntásc / Buntásc |
| Footnote / Endnote | Fonóta / Iarnóta |
| Table of Contents | Clár Ábhair |
| Caption | Fotheideal |
| Bookmark | Leabharmharc |
| Cross-reference | Crostagairt |
| Citation / Bibliography | Lua / Leabharliosta |
| Index | Innéacs |
| Comment / Comments | Nóta tráchta / Nótaí tráchta |
| Track Changes | Rianaigh Athruithe |
| Spelling | Litriú |
| Thesaurus | Teasáras |
| Word Count | Líon Focal |
| Watermark | Comhartha Uisce |
| Page Colour | Dath an Leathanaigh |
| Text Box | Bosca Téacs |
| WordArt | WordArt |
| Equation | Cothromóid |
| Symbol | Siombail |
| Hyperlink / Link | Hipearnasc / Nasc |
| Mail Merge | Cumasc Poist |
| Envelopes / Labels | Clúdaigh Litreach / Lipéid |
| Template | Teimpléad |
| Untitled | Gan teideal |

Note: Margins (of a page) is Imill and Borders (of a cell, a table or a
paragraph) is Imlínte, so the two never share a word.

## Workbooks

| English | Irish |
| :-- | :-- |
| Workbook | Leabhar Oibre |
| Sheet / Worksheet | Bileog / Bileog Oibre |
| Cell / Cells | Cill / Cealla |
| Row / Rows | Ró / Rónna |
| Column / Columns | Colún / Colúin |
| Range | Raon |
| Formula | Foirmle |
| Function | Feidhm |
| Number format | Formáid uimhreach |
| Currency / Percentage / Date / Time | Airgeadra / Céatadán / Dáta / Am |
| Freeze Panes | Reoigh Pánaí |
| Conditional Formatting | Formáidiú Coinníollach |
| Format as Table | Formáidigh mar Thábla |
| PivotTable | PivotTable |
| Chart | Cairt |
| Sparklines | Spréachlínte |
| Slicer | Slisneoir |
| Data Validation | Bailíochtú Sonraí |
| Remove Duplicates | Bain Dúblaigh |
| Text to Columns | Téacs go Colúin |
| Power Query | Power Query |
| Name box | Bosca ainm |
| Formula bar | Barra foirmlí |
| AutoSum | UathShuim |
| Sum / Average / Count / Min / Max | Suim / Meán / Comhaireamh / Íos / Uas |

## Presentations

| English | Irish |
| :-- | :-- |
| Presentation | Láithreoireacht |
| Slide / Slides | Sleamhnán / Sleamhnáin |
| New Slide | Sleamhnán Nua |
| Layout | Leagan Amach |
| Section | Rannán |
| Master | Máistir |
| Notes | Nótaí |
| Handout | Bileog Láimhe |
| Shape / Shapes | Cruth / Cruthanna |
| Picture / Pictures | Pictiúr / Pictiúir |
| Fill / Outline | Líonadh / Imlíne |
| Shadow / Glow / Reflection | Scáth / Lonrú / Frithchaitheamh |
| Transition | Trasdul |
| Animation | Beochan |
| From Beginning / From Current Slide | Ón Tús / Ón Sleamhnán Reatha |
| Presenter View | Amharc Láithreora |
| Rehearse Timings | Cleacht Uainiú |
| Video / Audio | Físeán / Fuaim |

## Mail, calendar, contacts, pictures

| English | Irish |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Bosca Isteach / Seolta / Dréachtaí / Bosca Amach / Dramhphost / Cartlann / Bruscar |
| Message | Teachtaireacht |
| New message | Teachtaireacht nua |
| Reply / Reply All / Forward | Freagair / Freagair Cách / Seol ar Aghaidh |
| Send | Seol |
| Attachment | Ceangaltán |
| Account | Cuntas |
| Folder | Fillteán |
| Search | Cuardaigh |
| Unread / Flagged | Gan léamh / Brataithe |
| Rules | Rialacha |
| Signature | Síniú |
| Event | Imeacht |
| Meeting | Cruinniú |
| Today / Day / Week / Month / Agenda | Inniu / Lá / Seachtain / Mí / Clár Oibre |
| Repeat | Atarlú |
| Reminder | Meabhrúchán |
| Contact | Teagmhálaí |
| Address book | Leabhar seoltaí |
| Phone / Email / Address | Fón / Ríomhphost / Seoladh |
| Rotate / Crop / Flip | Rothlaigh / Bearr / Iompaigh |
| Rating / Tags | Rátáil / Clibeanna |
| Slideshow | Taispeántas sleamhnán |
| Brightness / Contrast | Gile / Codarsnacht |
| Trim / Split | Bearr / Scoilt |
| Export video | Easpórtáil físeán |

Notes: Repeat on an event is the noun Atarlú (recurrence), so it does not
clash with Redo (Athdhéan); "Does not repeat" is Ní athdhéantar é, "Every
week" is Gach seachtain. Trim on a video clip and Crop on a picture are both
Bearr, as they never share a screen.

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Irish, not word for word. Keep a sentence's facts (a number, a name in
`{braces}`, a key) exactly. Prefer "Níorbh fhéidir an comhad seo a oscailt."
over a literal rendering of "This file could not be opened". "Not sent:
{reason}" becomes Níor seoladh é: {reason}.

## More recurring terms

| English | Irish |
| :-- | :-- |
| Database | Bunachar sonraí |
| Table | Tábla |
| Field | Réimse |
| Record (a database record) | Taifead |
| Design (of a database) | Dearadh |
| Read only | Inléite amháin |
| Password | Pasfhocal |
| Key (a secret key) | Eochair |
| Web address | Seoladh gréasáin |
| Network share | Comhroinnt líonra |
| This computer | An ríomhaire seo |
| Program | Ríomhchlár |
| Schedule | Sceideal |
| Encrypted | Criptithe |
| Unpin / Unlink | Díphionnáil / Dínasc |
| Stream / Stream key | Sruth / Eochair srutha |
| Server address | Seoladh an fhreastalaí |
| Go live / Live | Téigh beo / Beo |
| Platform | Ardán |
| Invitation / Invite | Cuireadh / Tabhair cuireadh |
| Accepted / Declined / Tentative | Glactha / Diúltaithe / Sealadach |
| Organizer | Eagraí |
| Room / Mailbox | Seomra / Bosca poist |
| Busy / Free | Gnóthach / Saor |
| All day | An lá ar fad |
| Time zone | Crios ama |
| Availability | Infhaighteacht |
| Start time / End time | Am tosaithe / Am críochnaithe |
| Background | Cúlra |
| Borders | Imlínte |
| Bring Forward / Bring to Front | Tabhair Aniar / Tabhair chun Tosaigh |
| Arrange / Align | Socraigh / Ailínigh |
| Clipboard | Gearrthaisce |
| Accessibility / Check Accessibility | Inrochtaineacht / Seiceáil Inrochtaineacht |
| Alt Text | Téacs Malartach |
| Banded Rows / Banded Columns | Rónna Stiallacha / Colúin Stiallacha |
| Blank document | Doiciméad bán |
| Clear formatting / Change case | Glan an formáidiú / Athraigh an cás |
| Recent colours / Standard colours / More colours… | Dathanna le déanaí / Dathanna caighdeánacha / Tuilleadh dathanna… |
| Add to Dictionary | Cuir leis an bhFoclóir |
| language pack | pacáiste teanga |
| Voices and languages (the page) | Guthanna agus teangacha |
| add-on | breiseán |
| speech engine | inneall urlabhra |
| speech model | múnla urlabhra |
| voice | guth |
| Add from a file (command) | Cuir leis ó chomhad |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

Commands (buttons, menu items, ribbon, and their tooltips) take the second
person singular imperative first: "Aimsigh Faighteoir", "Dún an Fhuinneog".
The reader is `tú`, with do and its lenition ("do theagmhálaithe"); a polite
question is "Ar mhaith leat ...?". Status lines use the autonomous form
("Cóipeáladh", "Níor seoladh é") or á with the verbal noun for work going on.

### By intent

| Intent | How this language phrases it | English | Irish |
| :-- | :-- | :-- | :-- |
| action, button | Imperative first, object after it, case as the English | Find Recipient | Aimsigh Faighteoir |
| action, menu | Imperative, then the article and the noun with its mutation | Close Window | Dún an Fhuinneog |
| name | Noun, then the adjective (lenited after a feminine noun) | Horizontal text | Téacs cothrománach |
| heading | Noun, then the qualifying noun in the genitive | Folder settings | Socruithe fillteáin |
| state, working | Object, then á with the verbal noun, and the ellipsis (á lenites for a masculine singular, eclipses for a plural) | Finding suggestions… | Moltaí á n-aimsiú… |
| state, done | Autonomous past, then a plain imperative | Link copied. Paste it anywhere. | Cóipeáladh an nasc. Greamaigh é áit ar bith. |
| question | Object, then a and the lenited verbal noun; complete "Ar mhaith leat ...?" | Remove {name}? | {name} a bhaint? |
| advice | Imperative, the purpose after it with chun | Sign in to Talk to accept. | Sínigh isteach san aip Caint chun glacadh leis. |
| explain | Plain statement or noun phrase | Bullet character. | Carachtar urchair. |
| warning | "Ní féidir ... a chealú" | Cannot be undone. | Ní féidir é seo a chealú. |
| error: cannot | "Ní féidir" for cannot, "Níorbh fhéidir" for could not, then a and the lenited verbal noun | Could not set up | Níorbh fhéidir é a shocrú |
| error: failed | "Theip ar ..." | Recognition failed. | Theip ar an aithint. |
| error: not-found | "Níor aimsíodh ..."; "... ar iarraidh" for a missing file | Picture file is missing | Tá comhad an phictiúir ar iarraidh |
| error: not-enough | ró with lenition (rómhór, rófhada), "Níl dóthain ..." | File too large for a message. | Tá an comhad rómhór do theachtaireacht. |
| error: unavailable | "Níl ... ar fáil" | Speech is not available. | Níl urlabhra ar fáil. |
| error: not-allowed | "Níl cead ...", "Níor ceadaíodh ..." | Camera not allowed. | Níor ceadaíodh an ceamara. |
| error: invalid | The copula "Ní ... é", or "neamhbhailí" | "{text}" is not a range | Ní raon é “{text}” |
| error: other | Plain statement; imperative where the English gives an order | Keep at least one worksheet visible. | Coinnigh bileog oibre amháin ar a laghad le feiceáil. |
| sample | Written as Irish writes it, the month after the number | free on 12 March? | saor ar 12 Márta? |

The suite has no sample label; the sample row uses the
sample sentence this glossary already gives.

### Short, medium and complete

- **Short** keeps the imperative and drops the object: "Aimsigh Faighteoir"
  becomes "Aimsigh", "Dún an Fhuinneog" becomes "Dún".
- Drop in this order: the object, then the place ("sa liosta"), then a
  second clause. A genitive may drop its article, as Office does ("Formáid
  Pictiúir"): the article's mutation goes with it, the genitive ending stays.
  Never drop a placeholder, a negation (ní, níl, níor) or a key.
- A message's short version may be a colon fragment: "Athruithe: {count}",
  "Níor seoladh é: {reason}".
- Allowed abbreviations are the standard ones only: "uimh." (uimhir), "lch"
  (leathanach), "m.sh." (mar shampla). Units, dates and times come from
  `Intl`. Not allowed: cuts of your own, a dropped fada, a dropped mutation
  prefix (h-, n-, t-) or English abbreviations.
- **Counted labels** keep all five forms with their mutations. Short drops
  the words round the noun, never the noun; if still too wide, put the noun
  first with a colon: "Focail: {count}".
- **Complete** adds the object with its article and the place, and a
  message becomes a full sentence with tú and a full stop; a question
  becomes "Ar mhaith leat ...?".

| Version | Short | Medium | Complete |
| :-- | :-- | :-- | :-- |
| English | Find | Find Recipient | Find a recipient in the list |
| Irish | Aimsigh | Aimsigh Faighteoir | Aimsigh faighteoir sa liosta |
| English | Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? |
| Irish | {name} a bhaint? | {name} a bhaint de do theagmhálaithe? | Ar mhaith leat {name} a bhaint de do theagmhálaithe? |
| English | Folder settings | Folder settings | Settings for this folder |
| Irish | Socruithe fillteáin | Socruithe fillteáin | Socruithe don fhillteán seo |

### Punctuation and marks

- **Ellipsis**: … straight after the last word, no space, on a command that
  opens a dialog ("Brabhsáil…") and on a working state ("Á shábháil…").
- **Colon, question and exclamation marks**: as in English, no space
  before, one ordinary space after: "Níor seoladh é: {reason}". Avoid the
  exclamation mark.
- **Quotation marks**: “ ” round a name or a value, ‘ ’ inside them:
  Ní raon é “{text}”.
- **Capitals**: follow the English version's case. A Title Case label
  capitalises its main words, not the article or a preposition ("Dún an
  Fhuinneog"); a mutated word keeps the capital on its own first letter
  ("i bhFillteán"). The complete version is in sentence case where the
  English one is.
- **Full stops**: a full sentence ends with one, in every version; a button,
  title, name or noun-phrase status takes none. Where the English version is
  a fragment with a full stop ("Bullet character."), keep the full stop.

### Access keys

- `&` goes before a letter of the Irish word: "&Aimsigh", "Cuir in &Eagar".
  One `&` per label.
- Choose a letter not used by another item in the same menu or dialog:
  the first letter of the verb first, then a clear consonant.
- Never mark a vowel with a fada (á, é, í, ó, ú): the Irish keyboard types
  them with AltGr. Mark the plain vowel elsewhere, or a consonant.
- Never mark a mutation letter (the h of lenition, the eclipsing letter, the
  h-, n- or t- prefix), since it changes with the grammar: "Dún an
  &Fhuinneog" marks the F, not the h.
- Avoid letters with a descender (g, j, p, q, y) where another is free.
- Never put `&` before a placeholder, a space or a brand name. Keep the same
  letter for the same command in every app.
