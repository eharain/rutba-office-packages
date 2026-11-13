# Finnish glossary for Rutba Office

The words the Finnish pack (`lang-fi`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Finnish where those exist,
LibreOffice where Office has none, and plain everyday Finnish otherwise.

**This translation was drafted by machine and needs a native speaker's
review** before it is called finished. A reviewer changes a word here first,
then in the pack, so the two stay in step.

## How the pack is written

- **Commands** take the imperative singular, as Finnish Office does:
  Tallenna (Save), Avaa (Open), Sulje (Close), Lisää (Insert), Tulosta
  (Print). A longer command keeps the imperative first: Tallenna nimellä,
  Poista kaksoiskappaleet.
- **The reader** is addressed with the informal singular *sinä*, as current
  Microsoft Finnish does, but sparingly: Haluatko tallentaa muutokset?
  Messages about what happened prefer the passive, which needs no pronoun:
  Tiedostoa ei voitu avata. (The file could not be opened.)
- **Capitals**: sentence case everywhere, as Finnish Office writes it. Only
  the first word and proper names take a capital, even where the English
  capitalises every word: Liitä määräten (Paste Special), Kiinnitä ruudut
  (Freeze Panes), Ehdollinen muotoilu. Days and months are lower case.
- **Tab and group names** are the names Finnish Office shows: Aloitus,
  Lisää, Rakenne, Asettelu, Tarkista, Näytä; groups such as Leikepöytä,
  Fontti, Kappale. Some tab names are imperatives (Lisää, Tarkista, Näytä)
  because Office's are; keep them so.
- **Placeholders** such as `{name}`, `{count}` and `{table}` stay exactly as
  written, in braces, untranslated. Finnish case endings cannot be attached
  to a placeholder, so keep it in the nominative: put a head noun before it
  that takes the case, or use a colon.
  - `{count} events in {name}` → `{count} tapahtumaa kalenterissa {name}`
  - `Unlink {name}` → `Poista linkitys: {name}`
  - `Read into {tables}` → `Lue taulukoihin: {tables}`
  Never write `{name}:n`, `{name}ssa` or similar.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2. Write
  `Uusi tapahtuma (Ctrl+N)`.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, HTTPS, SQL, `dd/mm/yyyy`. A compound joins with a hyphen
  (PDF-tiedosto, .ics-tiedosto), and a case ending on a code or abbreviation
  takes a colon: PDF:ksi, CSV:nä, JSON:ia.
- **Brand and product names** stay as written: Rutba Office, Microsoft, Word,
  Excel, PowerPoint, Outlook, Windows, Google, YouTube, iCloud. When a
  Finnish word is joined to a name of more than one word, write a space and a
  hyphen: Rutba Office -sovellus, LinkedIn Live Studio -palvelussa.
- **App names** are translated as in the table below and joined to other
  words the same way: Sähköposti-sovellus, Yhteystiedot-kohdassa. A case
  ending on an app name is avoided where a head noun can carry it
  (sovelluksessa Kalenteri, or Kalenteri-sovelluksessa).
- **Punctuation**: Finnish quotation marks are the same mark at both ends,
  ”näin” (U+201D), and ’näin’ inside them. The ellipsis … stays at the end of
  a command that opens a dialog: Selaa…, Lisää värejä…. **No em dash**: where
  the English has one, use a colon, a comma, parentheses or a new sentence,
  never a spaced en dash. An en dash in a range (1 to 10, 9.00 to 17.00) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only.
- **Counts** use Finnish's two plural forms, `one` and `other`. After a number
  other than one, the noun is in the partitive singular; this also covers 0:
  - one: `{count} tiedosto` (1 tiedosto)
  - other: `{count} tiedostoa` (0 tiedostoa, 2 tiedostoa, 25 tiedostoa)
  A verb after the count agrees with the singular or uses the passive:
  `{count} tapahtuma lisättiin` / `{count} tapahtumaa lisättiin`.
- **Numbers and dates** are formatted by the window from the region (fi-FI:
  decimal comma, space between thousands, 12.3.2026), so labels never spell
  out a format or a separator. Write `{percent} %` with an ordinary space
  before the percent sign, as Finnish does, where the English has `%`
  straight after a placeholder.
- **Gender**: Finnish has no grammatical gender and *hän* covers everyone, so
  `{name}` needs no special handling for gender.
- **Long words**: Finnish compounds run long. Keep ribbon labels short, and
  prefer the shorter Office word (Kaavio, not Kaaviokuva).
- **Same word, two meanings**: as in Finnish Office, Lisää is both Insert and
  Add, Poista is both Delete and Remove, Päivitä is both Refresh and Update,
  and Taulukko is a sheet, a Word or Excel table and a database table. The
  id says which; no extra word is needed.

## The apps

| English | Finnish |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Asiakirjat |
| Worksheets | Laskentataulukot |
| Presentations | Esitykset |
| Mail | Sähköposti |
| Calendar | Kalenteri |
| Contacts | Yhteystiedot |
| Pictures | Kuvat |
| Image (the editor) | Kuvankäsittely |
| Video | Video |
| Home (the launcher) | Aloitus |

## Tabs and frame

| English | Finnish |
| :-- | :-- |
| File | Tiedosto |
| Home | Aloitus |
| Insert | Lisää |
| Draw | Piirrä |
| Design | Rakenne |
| Layout | Asettelu |
| Page Layout | Sivun asettelu |
| References | Viittaukset |
| Mailings | Postitukset |
| Review | Tarkista |
| View | Näytä |
| Help | Ohje |
| Formulas | Kaavat |
| Data | Tiedot |
| Automate | Automatisoi |
| Transitions | Siirtymät |
| Animations | Animaatiot |
| Slide Show | Diaesitys |
| Record | Tallennus |
| Table Design | Taulukon rakenne |
| Table Layout | Taulukon asettelu |
| Shape Format | Muodon muotoilu |
| Picture Format | Kuvan muotoilu |
| Ribbon | Valintanauha |
| Pane | Ruutu |
| Status bar | Tilarivi |
| Dialog | Valintaikkuna |
| Settings | Asetukset |
| Language | Kieli |
| Theme | Teema |

## Commands

| English | Finnish |
| :-- | :-- |
| New | Uusi |
| Open | Avaa |
| Save | Tallenna |
| Save As | Tallenna nimellä |
| Save as Template | Tallenna mallina |
| Close | Sulje |
| Print | Tulosta |
| Export | Vie |
| Import | Tuo |
| Share | Jaa |
| Undo | Kumoa |
| Redo | Tee uudelleen |
| Cut | Leikkaa |
| Copy | Kopioi |
| Paste | Liitä |
| Paste Special | Liitä määräten |
| Delete | Poista |
| Remove | Poista |
| Rename | Nimeä uudelleen |
| Select All | Valitse kaikki |
| Find | Etsi |
| Replace | Korvaa |
| Go To | Siirry |
| Insert | Lisää |
| Apply | Käytä |
| Apply to All | Käytä kaikkiin |
| OK | OK |
| Cancel | Peruuta |
| Yes / No | Kyllä / Ei |
| Done | Valmis |
| Next / Previous | Seuraava / Edellinen |
| Back | Takaisin |
| Refresh | Päivitä |
| Update | Päivitä |
| Accept / Reject | Hyväksy / Hylkää |
| Sort | Lajittele |
| Filter | Suodata |
| Group / Ungroup | Ryhmittele / Pura ryhmittely |
| Merge / Split | Yhdistä / Jaa |
| Zoom In / Zoom Out | Lähennä / Loitonna |
| Full screen | Koko näyttö |
| Minimise / Maximise / Restore | Pienennä / Suurenna / Palauta |
| Expand / Collapse | Laajenna / Kutista |
| Browse | Selaa |
| Add | Lisää |
| Edit | Muokkaa |
| Reset | Nollaa |
| Clear | Tyhjennä |
| Show / Hide | Näytä / Piilota |
| More | Muut (in a phrase: Lisää värejä…, Lisää vaihtoehtoja) |
| None | Ei mitään |
| Automatic | Automaattinen |

## Text and documents

| English | Finnish |
| :-- | :-- |
| Document | Asiakirja |
| Page | Sivu |
| Paragraph | Kappale |
| Line | Rivi |
| Word (a word) | Sana |
| Character | Merkki |
| Font | Fontti |
| Font size | Fonttikoko |
| Bold / Italic / Underline | Lihavointi / Kursivointi / Alleviivaus |
| Strikethrough | Yliviivaus |
| Subscript / Superscript | Alaindeksi / Yläindeksi |
| Text highlight colour | Tekstin korostusväri |
| Font colour | Fontin väri |
| Colour | Väri |
| Style / Styles | Tyyli / Tyylit |
| Heading | Otsikko |
| Title | Pääotsikko (a document's Title property: Otsikko) |
| Bullets / Numbering | Luettelomerkit / Numerointi |
| Multilevel List | Monitasoinen luettelo |
| List | Luettelo |
| Indent | Sisennys |
| Alignment / Align Left / Centre / Align Right / Justify | Tasaus / Tasaa vasemmalle / Keskitä / Tasaa oikealle / Tasaa molemmat reunat |
| Line spacing | Riviväli |
| Margins | Reunukset |
| Orientation / Portrait / Landscape | Suunta / Pysty / Vaaka |
| Size (paper) | Koko |
| Columns | Palstat (text columns in a document; table and sheet columns are Sarakkeet) |
| Breaks | Vaihdot |
| Header / Footer | Ylätunniste / Alatunniste |
| Footnote / Endnote | Alaviite / Loppuviite |
| Table of Contents | Sisällysluettelo |
| Caption | Kuvateksti |
| Bookmark | Kirjanmerkki |
| Cross-reference | Ristiviittaus |
| Citation / Bibliography | Lähdeviite / Lähdeluettelo |
| Index | Hakemisto |
| Comment / Comments | Kommentti / Kommentit |
| Track Changes | Jäljitä muutokset |
| Spelling | Oikeinkirjoitus |
| Thesaurus | Synonyymisanasto |
| Word Count | Sanamäärä |
| Watermark | Vesileima |
| Page Colour | Sivun väri |
| Text Box | Tekstiruutu |
| WordArt | WordArt |
| Equation | Yhtälö |
| Symbol | Symboli |
| Hyperlink / Link | Hyperlinkki / Linkki |
| Mail Merge | Joukkokirje |
| Envelopes / Labels | Kirjekuoret / Tarrat |
| Template | Malli |
| Untitled | Nimetön |

## Workbooks

| English | Finnish |
| :-- | :-- |
| Workbook | Työkirja |
| Sheet / Worksheet | Taulukko / Laskentataulukko |
| Cell / Cells | Solu / Solut |
| Row / Rows | Rivi / Rivit |
| Column / Columns | Sarake / Sarakkeet |
| Range | Alue |
| Formula | Kaava |
| Function | Funktio |
| Number format | Lukumuotoilu |
| Currency / Percentage / Date / Time | Valuutta / Prosentti / Päivämäärä / Aika |
| Freeze Panes | Kiinnitä ruudut |
| Conditional Formatting | Ehdollinen muotoilu |
| Format as Table | Muotoile taulukoksi |
| PivotTable | Pivot-taulukko |
| Chart | Kaavio |
| Sparklines | Minikaaviot |
| Slicer | Osittaja |
| Data Validation | Tietojen kelpoisuuden tarkistaminen |
| Remove Duplicates | Poista kaksoiskappaleet |
| Text to Columns | Teksti sarakkeisiin |
| Power Query | Power Query |
| Name box | Nimiruutu |
| Formula bar | Kaavarivi |
| AutoSum | Automaattinen summa |
| Sum / Average / Count / Min / Max | Summa / Keskiarvo / Määrä / Pienin / Suurin |

## Presentations

| English | Finnish |
| :-- | :-- |
| Presentation | Esitys |
| Slide / Slides | Dia / Diat |
| New Slide | Uusi dia |
| Layout | Asettelu |
| Section | Osa |
| Master | Perustyyli (Slide Master: Diojen perustyyli) |
| Notes | Muistiinpanot |
| Handout | Moniste |
| Shape / Shapes | Muoto / Muodot |
| Picture / Pictures | Kuva / Kuvat |
| Fill / Outline | Täyttö / Ääriviiva |
| Shadow / Glow / Reflection | Varjo / Hehku / Heijastus |
| Transition | Siirtymä |
| Animation | Animaatio |
| From Beginning / From Current Slide | Alusta / Nykyisestä diasta |
| Presenter View | Esittäjän näkymä |
| Rehearse Timings | Harjoittele ajoitukset |
| Video / Audio | Video / Ääni |

## Mail, calendar, contacts, pictures

| English | Finnish |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Saapuneet / Lähetetyt / Luonnokset / Lähtevät / Roskaposti / Arkisto / Roskakori |
| Message | Viesti |
| New message | Uusi viesti |
| Reply / Reply All / Forward | Vastaa / Vastaa kaikille / Välitä |
| Send | Lähetä |
| Attachment | Liite |
| Account | Tili |
| Folder | Kansio |
| Search | Hae |
| Unread / Flagged | Lukematon / Merkitty |
| Rules | Säännöt |
| Signature | Allekirjoitus |
| Event | Tapahtuma |
| Meeting | Kokous |
| Today / Day / Week / Month / Agenda | Tänään / Päivä / Viikko / Kuukausi / Asialista |
| Repeat | Toista |
| Reminder | Muistutus |
| Contact | Yhteystieto |
| Address book | Osoitekirja |
| Phone / Email / Address | Puhelin / Sähköposti / Osoite |
| Rotate / Crop / Flip | Kierrä / Rajaa / Käännä |
| Rating / Tags | Luokitus / Tunnisteet |
| Slideshow | Diaesitys |
| Brightness / Contrast | Kirkkaus / Kontrasti |
| Trim / Split | Trimmaa / Pilko |
| Export video | Vie video |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Finnish, not word for word. Keep a sentence's facts (a number, a name
in `{braces}`, a key) exactly. What went wrong is usually told in the
passive, and the reader is addressed as *sinä* only where an instruction
needs it.

| English | Finnish |
| :-- | :-- |
| Could not open the file. | Tiedostoa ei voitu avata. |
| Not sent: {reason} | Ei lähetetty: {reason} |
| Saved, but not sent: {reason} | Tallennettu, mutta ei lähetetty: {reason} |
| Nothing set up yet. | Mitään ei ole vielä määritetty. |
| There is a table called {name} already. | Taulukko {name} on jo olemassa. |
| Close that program first. | Sulje ensin se ohjelma. |

## More recurring terms

| English | Finnish |
| :-- | :-- |
| Database | Tietokanta |
| Table (database) | Taulukko |
| Record | Tietue |
| Field | Kenttä |
| Design (of a table) | Rakenne |
| Read only | Vain luku |
| Source | Lähde |
| Link / Unlink | Linkitä / Poista linkitys |
| Pin / Unpin | Kiinnitä / Irrota |
| Web address | Verkko-osoite |
| Network share | Verkkojako |
| Password | Salasana |
| Key | Avain |
| Server address | Palvelimen osoite |
| Stream key | Lähetysavain |
| Live stream / Go live | Suora lähetys / Aloita suora lähetys |
| Invitation | Kutsu |
| Cancellation | Peruutus |
| Accepted / Declined / Tentative | Hyväksytty / Hylätty / Alustava |
| Organizer | Järjestäjä |
| Room | Huone |
| Busy / Free | Varattu / Vapaa |
| All day | Koko päivä |
| Time zone | Aikavyöhyke |
| Start time / End time | Alkamisaika / Päättymisaika |
| Every day / week / month / year | Joka päivä / viikko / kuukausi / vuosi |
| Does not repeat | Ei toistu |
| Occurrence | Esiintymä |
| Standard colours / Recent colours | Vakiovärit / Viimeksi käytetyt värit |
| More colours… | Lisää värejä… |
| Accessibility | Helppokäyttöisyys |
| Alt Text | Vaihtoehtoinen teksti |
| Background / Accent | Tausta / Korostus |
| Borders | Reunat |
| Bring Forward / Bring to Front | Tuo eteenpäin / Tuo eteen |
| Clipboard | Leikepöytä |
| Clear formatting | Poista muotoilut |
| Change case | Muuta kirjainkokoa |
| Banded Rows / Banded Columns | Raidalliset rivit / Raidalliset sarakkeet |
| Blank document / presentation / worksheet | Tyhjä asiakirja / esitys / laskentataulukko |
| Talk / Locker / Colour / Base / Broadcast / Recorder (apps) | Puhelut / Lokero / Väri / Tietokanta / Lähetys / Tallennin |

## Intents and versions

### Voice
- Buttons, menu items and ribbon commands take the imperative singular, verb
  first: Tallenna, Etsi vastaanottaja, Sulje ikkuna.
- The reader is sinä, used sparingly; what happened is told in the passive
  with no pronoun: Tiedostoa ei voitu avata.
- Questions take -ko or -kö: the passive (Poistetaanko ...?) when short,
  Haluatko ...? when complete.

### By intent
| Intent | How Finnish phrases it | English | Finnish |
| :-- | :-- | :-- | :-- |
| action on a button | Imperative first, then the object in the case the verb takes | Find Recipient | Etsi vastaanottaja |
| action in a menu | The same imperative as a button | Close Window | Sulje ikkuna |
| name | Noun phrase or compound, sentence case | Horizontal text | Vaakasuuntainen teksti |
| heading | Noun phrase with the genitive first, no full stop | Folder settings | Kansion asetukset |
| state while working | Passive present, ending in … | Finding suggestions… | Haetaan ehdotuksia… |
| state when done | Passive past participle; a second sentence as an imperative | Link copied. Paste it anywhere. | Linkki kopioitu. Liitä se mihin tahansa. |
| question | Passive with -ko/-kö when short; "Haluatko ...?" when complete | Remove {name}? | Poistetaanko {name}? |
| advice | Imperative, then "niin" or a purpose clause | Sign in to Talk to accept. | Kirjaudu Puhelut-sovellukseen, niin voit hyväksyä. |
| explain | Plain statement or noun phrase, full stop as in the English | Bullet character. | Luettelomerkki. |
| warning | The consequence in the passive; "Tätä ei voi kumota." | Unsaved changes will be lost. | Tallentamattomat muutokset menetetään. |
| error: cannot | "... ei voitu ..." in the passive, object in the partitive | This account could not be set up | Tätä tiliä ei voitu määrittää |
| error: failed | Noun and "epäonnistui" | Text recognition failed. | Tekstintunnistus epäonnistui. |
| error: not-found | "... puuttuu" or "... ei löytynyt" | Picture file is missing | Kuvatiedosto puuttuu |
| error: not-enough | "liian suuri", "liian pitkä", "ei ole tarpeeksi ..." | File too large for a message. | Tiedosto on liian suuri viestiin. |
| error: unavailable | "... ei ole käytettävissä"; no answer: "... ei vastannut" | Speech is not available. | Puhe ei ole käytettävissä. |
| error: not-allowed | "... ei sallittu" in the passive, object in the partitive | Camera not allowed. | Kameraa ei sallittu. |
| error: invalid | "... ei ole ..." or "... on virheellinen" | "{text}" is not a range | ”{text}” ei ole alue |
| error: other | Plain sentence; a rule as an imperative | Keep at least one worksheet visible. | Jätä vähintään yksi laskentataulukko näkyviin. |
| sample | Example content written fresh in Finnish: Finnish names, places, dates and amounts, never a word-for-word copy | (the suite has no sample label) | (written fresh, for example ”Toimitus perheelle Virtanen, Tampere”) |

### Short, medium and complete
- Short keeps the imperative and drops the object and any qualifier; if room
  allows one noun, keep it after the verb. Never keep the object alone without
  its verb. A placeholder is never dropped, and stays in the nominative.
- Allowed abbreviations are the standard ones: esim., n., s. (sivu), nro,
  klo, kpl, ks. Unit symbols take no full stop: s, min, h, MB. Not allowed:
  made-up cuts (Aset., Asiak.), dropping a case ending to save room, and any
  abbreviation on a button or menu item.
- A counted label keeps `{count}` and its noun whole in both forms (partitive
  in `other`) and shortens by dropping the words around them. Only a noun with
  a standard abbreviation shortens, the same in `one` and `other`:
  `{count} s.`.
- Complete adds the object and the place, with a head noun to carry any case
  a placeholder would need, and becomes a full sentence where the English
  complete is one; a question takes "Haluatko ...?". Tooltips and screen
  readers read complete.

Worked examples (English short | medium | complete, then Finnish):
1. Find | Find Recipient | Find a recipient in the list
   Etsi | Etsi vastaanottaja | Etsi vastaanottaja luettelosta
2. Folder settings | Folder settings | Settings for this folder
   Kansion asetukset | Kansion asetukset | Tämän kansion asetukset
3. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Poistetaanko {name}? | Poistetaanko {name} yhteystiedoistasi? | Haluatko poistaa henkilön {name} yhteystiedoistasi?

### Punctuation and marks
- A command that opens a dialog ends in … (U+2026) with no space before it:
  Selaa…, Lisää värejä…. A command that acts at once has none. A state while
  working ends in … too.
- Colon, question mark and exclamation mark follow the word with no space
  before them; one ordinary space follows a colon. A case ending on a code
  takes a colon with no space (PDF:ksi). Never a no-break space; the space in
  `{percent} %` is an ordinary one.
- Quotation marks ”…” (U+201D at both ends), and ’…’ inside them.
- Sentence case for buttons, menu items, headings and titles: only the first
  word and names take a capital.
- A full sentence ends in a full stop, errors included. A fragment follows its
  English version: a full stop if the English has one, none if not. Buttons,
  menu items, headings and titles never end in a full stop, and errors never
  end in an exclamation mark.

### Access keys
- `&` goes before a letter of the Finnish word, never the English letter for
  its own sake: &Edit is &Muokkaa, &File is &Tiedosto.
- Prefer the first letter. If it is taken in the same menu or dialog, take a
  clear consonant later in the word, or the first letter of the second word:
  Tallenna &nimellä.
- Use ä, ö and å only when no plain letter is free, and avoid letters with
  descenders (g, j, p, q, y) while another is free. Each letter once per menu
  or dialog.
- Never put `&` before a space, a placeholder or a mark. If short drops the
  word that carries it, move it to a letter of the word that stays.
