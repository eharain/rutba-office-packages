# Swedish glossary for Rutba Office

The words the Swedish pack (`lang-sv`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Swedish (Sweden, sv-SE)
where those have a word, LibreOffice where Office has none, and plain
everyday Swedish where neither does.

**This glossary was drafted by machine and needs a native speaker's review**
before the pack is called finished. A reviewer changes a word here first,
then in the pack, so the two stay in step.

## How the pack is written

- **Commands** take the imperative, as Swedish Office does (for most verbs it
  is also the bare stem): Spara, Öppna, Stäng, Infoga, Skriv ut, Lägg till,
  Ta bort. A command that opens a dialog keeps the ellipsis: Spara som…,
  Fler färger…, Bläddra…
- **Sentence case everywhere.** Swedish does not use English title case:
  every label, tab, group, button and menu item starts with one capital and
  the rest is lower case, except names. Save As becomes Spara som, Freeze
  Panes becomes Lås fönsterrutor, Bring to Front becomes Placera längst fram,
  Align Selected Objects becomes Justera markerade objekt. Weekdays and months
  are lower case (måndag, mars).
- **The reader is addressed as du**, as current Microsoft Office and Windows
  do, never ni, and du is written lower case mid-sentence: Om du inte är
  säker, behåll en kopia av filen. Prefer plain direct sentences: Lägg till
  det första stället du sänder till. Status messages often use the s-passive,
  as Office does: Filen kunde inte öppnas. Ändringarna har sparats.
- **Tab and group names** are the nouns or verbs Office shows: Arkiv, Start,
  Infoga, Rita, Design, Layout, Referenser, Utskick, Granska, Visa. A group
  name is a noun: Urklipp, Tecken, Stycke, Format, Redigering.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated, where Swedish word order wants them:
  Tabell: {name}; Det finns redan en tabell som heter {name}.
- **No endings on a placeholder.** Never add a genitive s or a definite
  ending to a placeholder (not `{name}s`, since a name ending in s, x or z
  takes none). Rephrase with a preposition or a colon: More for {name}
  becomes Mer för {name}; {table}'s source becomes Källan för {table}.
- **No agreement with a placeholder.** Swedish adjectives and participles
  agree with en and ett words, and the word in `{name}` is not known. Put the
  verb in a form that does not agree, usually the s-passive or a perfect with
  har: {name} har tagits bort (not {name} är borttagen or borttaget);
  {room} is booked for {when} becomes {room} har bokats för {when}.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Ctrl+N:
  Ny händelse (Ctrl+N).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, `=SUM(ABOVE)`. A compound with a code or
  extension takes a hyphen: PDF-fil, CSV-fil, en .ics-fil, RTMP-server,
  JSON-svar. Excel function names stay in English as Rutba writes them (SUM,
  VLOOKUP).
- **Brand and product names** stay as written: Rutba Office, Microsoft,
  Word, Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube Studio,
  LinkedIn Live Studio, WordArt, SmartArt, Power Query. Their own menu words,
  when quoted as steps in another product (In YouTube Studio, choose Create,
  Go live), are given as that product shows them in Swedish if known, else
  kept in English, since that is what the reader sees there.
- **The suite's app names** are translated as in the first table below and
  capitalised as names: öppna i E-post, personer från Kontakter.
- **Punctuation**: Swedish quotation marks are ”…” (the same mark, U+201D,
  at both ends), and ’…’ inside them: skriv till det med ett datum, till
  exempel ”ledigt den 12 mars?”. The English em dash is never kept, and a
  spaced en dash (common in Swedish print) is not used as a dash either:
  write a colon, a comma, parentheses or a new sentence. Banded Rows, every
  other row shaded becomes Randiga rader: varannan rad skuggad. An en dash in
  a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, also in 25 %, B5: 176 × 250
  mm and the like. Swedish puts a space before % (25 %); keep it an ordinary
  space.
- **Counts** use Swedish's two plural forms, `one` and `other`, each written
  in full with `{count}`:
  `one: {count} händelse i {name}.` / `other: {count} händelser i {name}.`;
  `one: {count} person inbjuden` / `other: {count} personer inbjudna`.
  A noun that does not change (ett fel, fem fel) still gets both lines.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, space as thousands separator, 2026-11-12 or 12 nov. 2026), so labels
  never spell out a format and never write a number format of their own.
  Times are 24-hour, from the region too.
- **Compounds** are written as one word, as Swedish wants: teckenstorlek,
  strömningsnyckel, webbadress, tidszon. Do not split them in two
  (särskrivning): never tecken storlek or webb adress.
- **Definite forms**: Swedish puts the article on the end of the noun. A
  label naming a thing in general uses the bare noun (Mapp, Konto), a label
  pointing at a known thing uses the definite form (Stäng fönsterrutan,
  Stäng filen). Mail folders take the definite form, as Outlook does:
  Inkorgen, Utkorgen.

## The apps

| English | Swedish |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokument |
| Worksheets | Kalkylblad |
| Presentations | Presentationer |
| Mail | E-post |
| Calendar | Kalender |
| Contacts | Kontakter |
| Pictures | Bilder |
| Image (the editor) | Bildredigerare |
| Video | Video |
| Home (the launcher) | Start |
| Talk | Samtal |
| Locker | Låsskåp |
| Colour | Färg |
| Base | Databas |
| Broadcast | Sändning |
| Recorder | Inspelare |

Image is Bildredigerare, not Bild, because Swedish Office already uses bild
for both a picture and a slide.

## Tabs and frame

| English | Swedish |
| :-- | :-- |
| File | Arkiv |
| Home | Start |
| Insert | Infoga |
| Draw | Rita |
| Design | Design |
| Layout | Layout |
| Page Layout | Sidlayout |
| References | Referenser |
| Mailings | Utskick |
| Review | Granska |
| View | Visa |
| Help | Hjälp |
| Formulas | Formler |
| Data | Data |
| Automate | Automatisera |
| Transitions | Övergångar |
| Animations | Animeringar |
| Slide Show | Bildspel |
| Record | Spela in |
| Table Design | Tabelldesign |
| Table Layout | Tabellayout |
| Shape Format | Formatera form |
| Picture Format | Bildformat |
| Ribbon | Menyfliksområde |
| Pane | Fönsterruta |
| Status bar | Statusfält |
| Dialog | Dialogruta |
| Settings | Inställningar |
| Language | Språk |
| Theme | Tema |

## Commands

| English | Swedish |
| :-- | :-- |
| New | Nytt (Ny with an en word: Ny bild, Ny händelse) |
| Open | Öppna |
| Save | Spara |
| Save As | Spara som |
| Save as Template | Spara som mall |
| Close | Stäng |
| Print | Skriv ut |
| Export | Exportera |
| Import | Importera |
| Share | Dela |
| Undo | Ångra |
| Redo | Gör om |
| Cut | Klipp ut |
| Copy | Kopiera |
| Paste | Klistra in |
| Paste Special | Klistra in special |
| Delete | Ta bort |
| Remove | Ta bort (Ta bort från … where it takes something off a list) |
| Rename | Byt namn |
| Select All | Markera allt |
| Find | Sök |
| Replace | Ersätt |
| Go To | Gå till |
| Insert | Infoga |
| Apply | Använd |
| Apply to All | Använd för alla |
| OK | OK |
| Cancel | Avbryt |
| Yes / No | Ja / Nej |
| Done | Klar |
| Next / Previous | Nästa / Föregående |
| Back | Tillbaka |
| Refresh | Uppdatera |
| Update | Uppdatera |
| Accept / Reject | Godkänn / Avvisa (changes); Acceptera / Avböj (invitations) |
| Sort | Sortera |
| Filter | Filtrera (the command); Filter (the thing) |
| Group / Ungroup | Gruppera / Dela upp grupp |
| Merge / Split | Sammanfoga / Dela |
| Zoom In / Zoom Out | Zooma in / Zooma ut |
| Full screen | Helskärm |
| Minimise / Maximise / Restore | Minimera / Maximera / Återställ nedåt |
| Expand / Collapse | Expandera / Komprimera |
| Browse | Bläddra |
| Add | Lägg till |
| Edit | Redigera |
| Reset | Återställ |
| Clear | Rensa |
| Show / Hide | Visa / Dölj |
| More | Mer (Fler with a plural: Fler färger) |
| None | Ingen (Inget with an ett word) |
| Automatic | Automatisk (Automatiskt as an adverb or with an ett word) |

Delete and Remove are both Ta bort, as in Office. Where both stand side by
side on one screen, Delete may become Radera to tell them apart; a reviewer
decides.

## Text and documents

| English | Swedish |
| :-- | :-- |
| Document | Dokument |
| Page | Sida |
| Paragraph | Stycke |
| Line | Rad |
| Word (a word) | Ord |
| Character | Tecken |
| Font | Teckensnitt |
| Font size | Teckenstorlek |
| Bold / Italic / Underline | Fet / Kursiv / Understruken |
| Strikethrough | Genomstruken |
| Subscript / Superscript | Nedsänkt / Upphöjd |
| Text highlight colour | Färg för textmarkering |
| Font colour | Teckenfärg |
| Colour | Färg |
| Style / Styles | Format / Format (formatmall in running text) |
| Heading | Rubrik |
| Title | Titel |
| Bullets / Numbering | Punktlista / Numrering |
| Multilevel List | Lista med flera nivåer |
| List | Lista |
| Indent | Indrag |
| Alignment / Align Left / Centre / Align Right / Justify | Justering / Vänsterjustera / Centrera / Högerjustera / Marginaljustera |
| Line spacing | Radavstånd |
| Margins | Marginaler |
| Orientation / Portrait / Landscape | Orientering / Stående / Liggande |
| Size (paper) | Storlek |
| Columns | Kolumner |
| Breaks | Brytningar |
| Header / Footer | Sidhuvud / Sidfot |
| Footnote / Endnote | Fotnot / Slutkommentar |
| Table of Contents | Innehållsförteckning |
| Caption | Beskrivning (bildtext for a picture's caption) |
| Bookmark | Bokmärke |
| Cross-reference | Korsreferens |
| Citation / Bibliography | Källhänvisning / Litteraturförteckning |
| Index | Index |
| Comment / Comments | Kommentar / Kommentarer |
| Track Changes | Spåra ändringar |
| Spelling | Stavning |
| Thesaurus | Synonymordlista |
| Word Count | Antal ord |
| Watermark | Vattenstämpel |
| Page Colour | Sidfärg |
| Text Box | Textruta |
| WordArt | WordArt |
| Equation | Ekvation |
| Symbol | Symbol |
| Hyperlink / Link | Hyperlänk / Länk |
| Mail Merge | Koppla dokument |
| Envelopes / Labels | Kuvert / Etiketter |
| Template | Mall |
| Untitled | Namnlös |

## Workbooks

| English | Swedish |
| :-- | :-- |
| Workbook | Arbetsbok |
| Sheet / Worksheet | Blad / Kalkylblad |
| Cell / Cells | Cell / Celler |
| Row / Rows | Rad / Rader |
| Column / Columns | Kolumn / Kolumner |
| Range | Område |
| Formula | Formel |
| Function | Funktion |
| Number format | Talformat |
| Currency / Percentage / Date / Time | Valuta / Procent / Datum / Tid |
| Freeze Panes | Lås fönsterrutor |
| Conditional Formatting | Villkorsstyrd formatering |
| Format as Table | Formatera som tabell |
| PivotTable | Pivottabell |
| Chart | Diagram |
| Sparklines | Miniatyrdiagram |
| Slicer | Utsnitt |
| Data Validation | Dataverifiering |
| Remove Duplicates | Ta bort dubbletter |
| Text to Columns | Text till kolumner |
| Power Query | Power Query |
| Name box | Namnruta |
| Formula bar | Formelfält |
| AutoSum | Autosumma |
| Sum / Average / Count / Min / Max | Summa / Medel / Antal / Min / Max |

## Presentations

| English | Swedish |
| :-- | :-- |
| Presentation | Presentation |
| Slide / Slides | Bild / Bilder |
| New Slide | Ny bild |
| Layout | Layout |
| Section | Avsnitt |
| Master | Bakgrund (Slide Master: Bildbakgrund) |
| Notes | Anteckningar |
| Handout | Åhörarexemplar |
| Shape / Shapes | Form / Former |
| Picture / Pictures | Bild / Bilder |
| Fill / Outline | Fyllning / Kontur |
| Shadow / Glow / Reflection | Skugga / Ljussken / Reflektion |
| Transition | Övergång |
| Animation | Animering |
| From Beginning / From Current Slide | Från början / Från aktuell bild |
| Presenter View | Föredragshållarvy |
| Rehearse Timings | Testa tidsinställningar |
| Video / Audio | Video / Ljud |

Slide and picture are both bild in Swedish PowerPoint, and the pack keeps
that. Where one sentence names both, the picture may become foto or the
slide presentationsbild; a reviewer decides.

## Mail, calendar, contacts, pictures

| English | Swedish |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Inkorgen / Skickat / Utkast / Utkorgen / Skräppost / Arkiv / Papperskorgen |
| Message | Meddelande |
| New message | Nytt meddelande |
| Reply / Reply All / Forward | Svara / Svara alla / Vidarebefordra |
| Send | Skicka |
| Attachment | Bifogad fil |
| Account | Konto |
| Folder | Mapp |
| Search | Sök |
| Unread / Flagged | Oläst / Flaggat |
| Rules | Regler |
| Signature | Signatur |
| Event | Händelse |
| Meeting | Möte |
| Today / Day / Week / Month / Agenda | Idag / Dag / Vecka / Månad / Agenda |
| Repeat | Upprepa |
| Reminder | Påminnelse |
| Contact | Kontakt |
| Address book | Adressbok |
| Phone / Email / Address | Telefon / E-post / Adress |
| Rotate / Crop / Flip | Rotera / Beskär / Vänd |
| Rating / Tags | Klassificering / Taggar |
| Slideshow | Bildspel |
| Brightness / Contrast | Ljusstyrka / Kontrast |
| Trim / Split | Trimma / Dela |
| Export video | Exportera video |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Swedish addressed to du, not word for word. Keep a sentence's facts (a
number, a name in `{braces}`, a key) exactly. Prefer the s-passive Office
uses, ”Filen kunde inte öppnas”, over a literal ”Den här filen öppnade
inte”. Not sent: {reason} becomes Skickades inte: {reason}.

## More recurring terms

| English | Swedish |
| :-- | :-- |
| Database | Databas |
| Table | Tabell |
| Record / Records | Post / Poster |
| Field | Fält |
| Source | Källa |
| Read only | Skrivskyddad |
| Key (a secret key) | Nyckel |
| Password | Lösenord |
| Web address | Webbadress |
| Network share | Nätverksresurs |
| Sign-in | Inloggning |
| Server address | Serveradress |
| Stream key | Strömningsnyckel |
| Live stream / Go live | Livesändning / Sänd live |
| Invitation / Invite | Inbjudan / Bjud in |
| Accepted / Declined / Tentative | Accepterat / Avböjt / Preliminärt |
| Cancellation / Cancelled | Avbokning / Inställt |
| Organizer | Organisatör |
| Room / Rooms and resources | Rum / Rum och resurser |
| Mailbox | Postlåda |
| All day | Heldag |
| Occurrence | Förekomst |
| Busy / Free | Upptagen / Ledig |
| Time zone | Tidszon |
| Recent colours | Senaste färger |
| Standard colours | Standardfärger |
| More colours… | Fler färger… |
| Accent (theme colour) | Dekorfärg |
| Background | Bakgrund |
| Borders | Kantlinjer |
| Banded Rows / Banded Columns | Randiga rader / Randiga kolumner |
| Bring Forward / Bring to Front | Flytta framåt / Placera längst fram |
| Clipboard | Urklipp |
| Clear formatting | Radera all formatering |
| Change case | Ändra skiftläge |
| Alt Text | Alternativ text |
| Accessibility / Check Accessibility | Tillgänglighet / Kontrollera tillgänglighet |
| Blank document / Blank presentation / Blank worksheet | Tomt dokument / Tom presentation / Tomt kalkylblad |
| Add to Dictionary | Lägg till i ordlista |
| Cc / Bcc | Kopia / Hemlig kopia |
| language pack | språkpaket |
| Voices and languages (the page) | Röster och språk |
| add-on | tillägg |
| speech engine | talmotor |
| speech model | talmodell |
| voice | röst |
| Add from a file (command) | Lägg till från fil |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice
- Buttons, menu items and ribbon commands take the imperative, verb first:
  Spara, Sök mottagare, Stäng fönstret.
- Sentences address the reader as du, lower case mid-sentence, never ni.
- Results and errors use the s-passive or har with the supine, which never
  agree with a placeholder: Länken har kopierats. Filen kunde inte öppnas.

### By intent
| Intent | How Swedish phrases it | English | Swedish |
| :-- | :-- | :-- | :-- |
| action on a button | Imperative, then the bare noun | Find Recipient | Sök mottagare |
| action in a menu | The same imperative; definite form for a known thing | Close Window | Stäng fönstret |
| name | Noun phrase, sentence case, compound as one word | Horizontal text | Vågrät text |
| heading | Compound or noun phrase, no full stop | Folder settings | Mappinställningar |
| state while working | Present tense with no subject, ending in … | Finding suggestions… | Söker efter förslag… |
| state when done | har with the s-passive supine; a second sentence as an imperative | Link copied. Paste it anywhere. | Länken har kopierats. Klistra in den var som helst. |
| question | Imperative phrase with ? when short; "Vill du ...?" when complete | Remove {name}? | Ta bort {name}? |
| advice | Imperative, then "för att" for the purpose | Sign in to Talk to accept. | Logga in i Samtal för att acceptera. |
| explain | Plain statement or noun phrase, full stop as in the English | Bullet character. | Punkttecken. |
| warning | The consequence as a statement; "Det går inte att ångra." | Unsaved changes will be lost. | Ändringar som inte sparats går förlorade. |
| error: cannot | "... kunde inte ...s"; "Det går inte att ..." where there is no subject | This account could not be set up | Det här kontot kunde inte konfigureras |
| error: failed | Definite noun and "misslyckades" | Text recognition failed. | Textigenkänningen misslyckades. |
| error: not-found | "... saknas" or "... hittades inte" | Picture file is missing | Bildfilen saknas |
| error: not-enough | "för stor", "för lång", "inte tillräckligt ..." | File too large for a message. | Filen är för stor för ett meddelande. |
| error: unavailable | "... är inte tillgängligt"; with a placeholder "{name} kan inte användas just nu" | Speech is not available. | Tal är inte tillgängligt. |
| error: not-allowed | s-passive "tilläts inte", or "är inte tillåtet" | Camera not allowed. | Kameran tilläts inte. |
| error: invalid | "... är inte ett ..." or "... är ogiltigt" | "{text}" is not a range | ”{text}” är inte ett område |
| error: other | Plain sentence; a rule as an imperative | Keep at least one worksheet visible. | Låt minst ett kalkylblad vara synligt. |
| sample | Example content written fresh in Swedish: Swedish names, places, dates and amounts, never a word-for-word copy | (the suite has no sample label) | (written fresh, for example ”Leverans till familjen Lindqvist, Uppsala”) |

### Short, medium and complete
- Short keeps the imperative and drops the object and any qualifier; if room
  allows one noun, keep it after the verb. Never keep the object alone without
  its verb. A placeholder is never dropped.
- Allowed abbreviations are the standard ones: t.ex. (no space inside), nr,
  s. (sida), st., ca, inkl., min and max. Unit symbols take no full stop: s,
  min, h, MB. Not allowed: made-up cuts (Inst., Dok.), splitting a compound to
  save room, and any abbreviation on a button or menu item.
- A counted label keeps `{count}` and its noun whole in both forms and
  shortens by dropping the words around them. Only a noun with a standard
  abbreviation shortens, the same in `one` and `other`: `{count} s.`.
- Complete adds the object, in the definite form where it is a known thing,
  and the place, and becomes a full sentence where the English complete is
  one; a question takes "Vill du ...?". Tooltips and screen readers read
  complete.

Worked examples (English short | medium | complete, then Swedish):
1. Find | Find Recipient | Find a recipient in the list
   Sök | Sök mottagare | Sök efter en mottagare i listan
2. Folder settings | Folder settings | Settings for this folder
   Mappinställningar | Mappinställningar | Inställningar för den här mappen
3. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Ta bort {name}? | Ta bort {name} från dina kontakter? | Vill du ta bort {name} från dina kontakter?

### Punctuation and marks
- A command that opens a dialog ends in … (U+2026) with no space before it:
  Bläddra…, Fler färger…. A command that acts at once has none. A state while
  working ends in … too.
- Colon, question mark and exclamation mark follow the word with no space
  before them; one ordinary space follows a colon. Never a no-break space; the
  space in 25 % is an ordinary one.
- Quotation marks ”…” (U+201D at both ends), and ’…’ inside them.
- Sentence case for buttons, menu items, headings and titles: only the first
  word and names take a capital.
- A full sentence ends in a full stop, errors included. A fragment follows its
  English version: a full stop if the English has one, none if not. Buttons,
  menu items, headings and titles never end in a full stop, and errors never
  end in an exclamation mark.

### Access keys
- `&` goes before a letter of the Swedish word, never the English letter for
  its own sake: &Edit is &Redigera, &File is &Arkiv.
- Prefer the first letter. If it is taken in the same menu or dialog, take a
  clear consonant later in the word, or the first letter of the second word:
  Spara &som.
- Use å, ä and ö only when no plain letter is free, and avoid letters with
  descenders (g, j, p, q, y) while another is free. Each letter once per menu
  or dialog.
- Never put `&` before a space, a placeholder or a mark. If short drops the
  word that carries it, move it to a letter of the word that stays.
