# Romanian glossary for Rutba Office

The words the Romanian pack (`lang-ro`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Romanian (ro-RO) where those
exist, and plain everyday Romanian where they do not.

**This translation was drafted by machine and needs a native speaker's
review** before it is called finished. A reviewer changes a word here first,
then in the pack, so the two stay in step.

## How the pack is written

- **Commands** take the long infinitive (the verbal noun), as Romanian Office
  does on buttons, menus and ribbon items: Salvare (Save), Deschidere (Open),
  Închidere (Close), Inserare (Insert), Adăugare cont (Add account).
  When a command needs an object pronoun or reads as a sentence, or is a
  question to the reader, it takes the formal imperative instead:
  Ștergeți doar aceasta (Delete this one), Trimiteți invitația? (Send the
  invitation?).
- **The reader is addressed formally** (second person plural, "dvs."), as
  current Office does: Doriți să salvați modificările?, Parola dvs. acolo
  (Your password there), Apăsați Ctrl+N pentru a adăuga un eveniment.
  Never "tu".
- **Capitals**: sentence case on every label, as Romanian Office writes them.
  Only the first word and names take a capital: Lipire specială, Salvare ca
  șablon, Formatare condiționată (not "Lipire Specială"), even where the
  English is in title case.
- **Tab and group names** are nouns (most of them verbal nouns): Pornire,
  Inserare, Proiectare, Aspect, Revizuire, Vizualizare. A tab named after a
  command uses the same word as the command (Inserare).
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated; Romanian word order moves them where
  Romanian wants them: {count} evenimente în {name}.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Enter.
  Aldin (Ctrl+B).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, HTTPS, `=SUM(ABOVE)`, `dd/mm/yyyy`.
- **Brand and product names** stay in Latin letters, unchanged: Rutba Office,
  Microsoft, Word, Excel, PowerPoint, Outlook, Windows, Google, iCloud,
  YouTube Studio, LinkedIn Live Studio. Do not hang a Romanian article on a
  brand with a hyphen ("Windows-ul", "Excel-ul"); rephrase instead:
  sistemul Windows, fișierul Excel, în Word.
- **The app names** are translated as the table below says and used like
  names, without an article: în Calendar, din Contacte, în E-mail.
- **Punctuation**: Romanian quotation marks „…” (low opening, high closing),
  with «» only for a quote inside a quote: „liber pe 12 martie?”. The
  ellipsis … stays at the end of a command that opens a dialog: Mai multe
  culori…, Răsfoire…. **No em dash**: where the English has one, use a colon,
  a comma, parentheses or a new sentence: B5 (176 × 250 mm); Rânduri
  alternante: fiecare al doilea rând umbrit. No spaced en dash as a dash
  either; an en dash in a range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only.
- **Letters**: always the comma-below ș Ș ț Ț, never the cedilla ş ţ.
  Use â inside words and î at the start and end of words (sunt, când,
  România, începe, a urî).
- **Counts** use Romanian's three plural forms, in this order: `one` (1),
  `few` (0, 2 to 19, and numbers ending in 01 to 19 such as 101 or 119),
  `other` (20 and up, except those endings), where the noun takes "de":
  `one: {count} eveniment`, `few: {count} evenimente`,
  `other: {count} de evenimente`. Every form is written in full, each with
  `{count}`. A form agrees in gender too: 1 persoană invitată, 2 persoane
  invitate, 20 de persoane invitate.
- **Numbers and dates** are formatted by the window from the region
  (ro-RO: decimal comma, 12.03.2026), so a label never spells out a format
  and never writes a number in a fixed format of its own.
- **Gender and case with placeholders**: `{name}`, `{room}`, `{table}` and the
  like may be any gender, and Romanian cannot put a case ending on a
  placeholder. Prefer wording that keeps the placeholder in the nominative
  and needs no agreement: a colon (Redenumire: {name}, Anulare fixare:
  {name}), or a preposition (pentru {name}, de la {name}, în {name}).
  Avoid "lui {name}" and adjectives or participles that would agree with the
  placeholder: write {name} a acceptat (the verb does not agree), not
  "{name} este acceptat/ă".
- **Lowercase fragments** in the English (accepted, declined, all day,
  bottom) stay lowercase in Romanian, as they are joined into a sentence.

## The apps

| English | Romanian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Documente |
| Worksheets | Foi de calcul |
| Presentations | Prezentări |
| Mail | E-mail |
| Calendar | Calendar |
| Contacts | Contacte |
| Pictures | Imagini |
| Image (the editor) | Imagine |
| Video | Video |
| Home (the launcher) | Acasă |

## Tabs and frame

| English | Romanian |
| :-- | :-- |
| File | Fișier |
| Home | Pornire |
| Insert | Inserare |
| Draw | Desenare |
| Design | Proiectare |
| Layout | Aspect |
| Page Layout | Aspect pagină |
| References | Referințe |
| Mailings | Corespondență |
| Review | Revizuire |
| View | Vizualizare |
| Help | Ajutor |
| Formulas | Formule |
| Data | Date |
| Automate | Automatizare |
| Transitions | Tranziții |
| Animations | Animații |
| Slide Show | Expunere diapozitive |
| Record | Înregistrare |
| Table Design | Proiectare tabel |
| Table Layout | Aspect tabel |
| Shape Format | Format formă |
| Picture Format | Format imagine |
| Ribbon | Panglică |
| Pane | Panou |
| Status bar | Bară de stare |
| Dialog | Casetă de dialog |
| Settings | Setări |
| Language | Limbă |
| Theme | Temă |

## Commands

| English | Romanian |
| :-- | :-- |
| New | Nou |
| Open | Deschidere |
| Save | Salvare |
| Save As | Salvare ca |
| Save as Template | Salvare ca șablon |
| Close | Închidere |
| Print | Imprimare |
| Export | Export |
| Import | Import |
| Share | Partajare |
| Undo | Anulare acțiune (tooltip: Anulare acțiune (Ctrl+Z)) |
| Redo | Refacere |
| Cut | Decupare |
| Copy | Copiere |
| Paste | Lipire |
| Paste Special | Lipire specială |
| Delete | Ștergere |
| Remove | Eliminare |
| Rename | Redenumire |
| Select All | Selectare totală |
| Find | Găsire |
| Replace | Înlocuire |
| Go To | Salt la |
| Insert | Inserare |
| Apply | Aplicare |
| Apply to All | Aplicare la toate |
| OK | OK |
| Cancel | Anulare |
| Yes / No | Da / Nu |
| Done | Gata |
| Next / Previous | Următorul / Anteriorul |
| Back | Înapoi |
| Refresh | Reîmprospătare |
| Update | Actualizare |
| Accept / Reject | Acceptare / Respingere |
| Sort | Sortare |
| Filter | Filtrare |
| Group / Ungroup | Grupare / Anulare grupare |
| Merge / Split | Îmbinare / Scindare |
| Zoom In / Zoom Out | Mărire / Micșorare |
| Full screen | Ecran complet |
| Minimise / Maximise / Restore | Minimizare / Maximizare / Restabilire |
| Expand / Collapse | Extindere / Restrângere |
| Browse | Răsfoire |
| Add | Adăugare |
| Edit | Editare |
| Reset | Resetare |
| Clear | Golire |
| Show / Hide | Afișare / Ascundere |
| More | Mai multe |
| None | Niciunul (or Fără, as a choice in a list) |
| Automatic | Automat |

Undo and Cancel are both "Anulare" in Romanian Office; this pack keeps
Cancel as Anulare (the dialog button) and gives Undo its longer name so the
two never meet on one screen. A reviewer may decide otherwise here first.

## Text and documents

| English | Romanian |
| :-- | :-- |
| Document | Document |
| Page | Pagină |
| Paragraph | Paragraf |
| Line | Rând (of text); Linie (a drawn line) |
| Word (a word) | Cuvânt |
| Character | Caracter |
| Font | Font |
| Font size | Dimensiune font |
| Bold / Italic / Underline | Aldin / Cursiv / Subliniat |
| Strikethrough | Tăiere text |
| Subscript / Superscript | Indice / Exponent |
| Text highlight colour | Culoare de evidențiere text |
| Font colour | Culoare font |
| Colour | Culoare |
| Style / Styles | Stil / Stiluri |
| Heading | Titlu (Titlu 1, Titlu 2, as in Word) |
| Title | Titlu |
| Bullets / Numbering | Marcatori / Numerotare |
| Multilevel List | Listă cu mai multe niveluri |
| List | Listă |
| Indent | Indent (Mărire indent / Micșorare indent) |
| Alignment / Align Left / Centre / Align Right / Justify | Aliniere / Aliniere la stânga / Centrare / Aliniere la dreapta / Stânga-dreapta |
| Line spacing | Spațiere între rânduri |
| Margins | Margini |
| Orientation / Portrait / Landscape | Orientare / Portret / Vedere |
| Size (paper) | Dimensiune |
| Columns | Coloane |
| Breaks | Întreruperi |
| Header / Footer | Antet / Subsol |
| Footnote / Endnote | Notă de subsol / Notă de final |
| Table of Contents | Cuprins |
| Caption | Legendă |
| Bookmark | Marcaj |
| Cross-reference | Referință încrucișată |
| Citation / Bibliography | Citat / Bibliografie |
| Index | Index |
| Comment / Comments | Comentariu / Comentarii |
| Track Changes | Urmărire modificări |
| Spelling | Ortografie |
| Thesaurus | Tezaur |
| Word Count | Număr de cuvinte |
| Watermark | Inscripționare |
| Page Colour | Culoare pagină |
| Text Box | Casetă text |
| WordArt | WordArt |
| Equation | Ecuație |
| Symbol | Simbol |
| Hyperlink / Link | Hyperlink / Link |
| Mail Merge | Îmbinare corespondență |
| Envelopes / Labels | Plicuri / Etichete |
| Template | Șablon |
| Untitled | Fără titlu |

## Workbooks

| English | Romanian |
| :-- | :-- |
| Workbook | Registru de lucru |
| Sheet / Worksheet | Foaie / Foaie de lucru |
| Cell / Cells | Celulă / Celule |
| Row / Rows | Rând / Rânduri |
| Column / Columns | Coloană / Coloane |
| Range | Zonă |
| Formula | Formulă |
| Function | Funcție |
| Number format | Format număr |
| Currency / Percentage / Date / Time | Monedă / Procentaj / Dată / Oră |
| Freeze Panes | Înghețare panouri |
| Conditional Formatting | Formatare condiționată |
| Format as Table | Formatare ca tabel |
| PivotTable | PivotTable |
| Chart | Diagramă |
| Sparklines | Diagrame sparkline |
| Slicer | Slicer |
| Data Validation | Validare date |
| Remove Duplicates | Eliminare dubluri |
| Text to Columns | Text în coloane |
| Power Query | Power Query |
| Name box | Casetă nume |
| Formula bar | Bară de formule |
| AutoSum | Însumare automată |
| Sum / Average / Count / Min / Max | Sumă / Medie / Contorizare / Min / Max |

## Presentations

| English | Romanian |
| :-- | :-- |
| Presentation | Prezentare |
| Slide / Slides | Diapozitiv / Diapozitive |
| New Slide | Diapozitiv nou |
| Layout | Aspect |
| Section | Secțiune |
| Master | Coordonator (Coordonator diapozitiv) |
| Notes | Note |
| Handout | Diapozitive imprimate |
| Shape / Shapes | Formă / Forme |
| Picture / Pictures | Imagine / Imagini |
| Fill / Outline | Umplere / Contur |
| Shadow / Glow / Reflection | Umbră / Strălucire / Reflexie |
| Transition | Tranziție |
| Animation | Animație |
| From Beginning / From Current Slide | De la început / De la diapozitivul curent |
| Presenter View | Vizualizare prezentator |
| Rehearse Timings | Repetare temporizări |
| Video / Audio | Video / Audio |

## Mail, calendar, contacts, pictures

| English | Romanian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Inbox / Elemente trimise / Ciorne / Outbox / E-mail nedorit / Arhivă / Coș de gunoi |
| Message | Mesaj |
| New message | Mesaj nou |
| Reply / Reply All / Forward | Răspuns / Răspuns tuturor / Redirecționare |
| Send | Trimitere |
| Attachment | Atașament |
| Account | Cont |
| Folder | Folder |
| Search | Căutare |
| Unread / Flagged | Necitit / Semnalizat |
| Rules | Reguli |
| Signature | Semnătură |
| Event | Eveniment |
| Meeting | Întâlnire |
| Today / Day / Week / Month / Agenda | Astăzi / Zi / Săptămână / Lună / Agendă |
| Repeat | Repetare |
| Reminder | Memento |
| Contact | Persoană de contact (short: Contact) |
| Address book | Agendă de adrese |
| Phone / Email / Address | Telefon / E-mail / Adresă |
| Rotate / Crop / Flip | Rotire / Trunchiere / Răsturnare |
| Rating / Tags | Evaluare / Etichete |
| Slideshow | Expunere diapozitive |
| Brightness / Contrast | Luminozitate / Contrast |
| Trim / Split | Tăiere / Scindare |
| Export video | Export video |

Inbox and Outbox stay as Romanian Outlook writes them.

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain, polite Romanian addressed with "dvs.", not word for word. Keep a
sentence's facts (a number, a name in `{braces}`, a key) exactly. Prefer
„Fișierul nu a putut fi deschis.” over a literal rendering, and
„Netrimis: {reason}” for "Not sent: {reason}".

## More recurring terms

| English | Romanian |
| :-- | :-- |
| Table (in a database) | Tabel |
| Record | Înregistrare |
| Field | Câmp |
| Database | Bază de date |
| Source | Sursă |
| Design (of a table or database) | Structură |
| Read only | Doar în citire |
| Key (access key) | Cheie |
| Password | Parolă |
| Web address | Adresă web |
| Network share | Resursă partajată în rețea |
| This computer | Acest computer |
| Protected store | Spațiu de stocare protejat |
| Sign-in | Conectare (date de conectare) |
| Pin / Unpin | Fixare / Anulare fixare |
| Link / Unlink | Legare / Anulare legătură |
| Invitation | Invitație |
| Invite | Invitare |
| Cancellation | Anulare (mesaj de anulare) |
| Organizer | Organizator |
| Accepted / Declined / Tentative | acceptat / refuzat / provizoriu |
| Room | Sală |
| Mailbox | Cutie poștală |
| Occurrence | Repetiție (Doar această repetiție / Fiecare repetiție) |
| Free / Busy | Liber / Ocupat |
| All day | Toată ziua |
| Time zone | Fus orar |
| Stream / Stream key | Flux / Cheie de flux |
| Go live | Începere transmisiune live |
| Server address | Adresă server |
| Standard colours / Recent colours / More colours… | Culori standard / Culori recente / Mai multe culori… |
| Accent / Background | Accent / Fundal |
| Borders | Borduri |
| Bring Forward / Bring to Front | Aducere în față / Aducere în prim-plan |
| Banded Rows / Banded Columns | Rânduri alternante / Coloane alternante |
| Alt Text | Text alternativ |
| Accessibility / Check Accessibility | Accesibilitate / Verificare accesibilitate |
| Clear formatting | Golire formatare |
| Change case | Modificare majuscule/minuscule |
| Blank document / presentation / worksheet | Document necompletat / Prezentare necompletată / Foaie de lucru necompletată |
| Redact | Anonimizare |
| Redacted copy | Copie anonimizată |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

The reader is addressed formally (dvs., second person plural), never tu.
Buttons, menu items and ribbon commands take the long infinitive (Salvare,
Închidere fereastră); questions, instructions and advice take the formal
imperative or indicative (Doriți să ...?, Conectați-vă ...). Errors use the
impersonal "Nu s-a putut ..." or "Nu se poate ...".

### By intent

| Intent | How this language phrases it | English | Romanian |
| :-- | :-- | :-- | :-- |
| action on a button | Long infinitive; complete adds the object | Record | Înregistrare |
| action in a menu | Long infinitive, sentence case | Close Window | Închidere fereastră |
| name | Noun or noun phrase, no article | Conversations | Conversații |
| heading | Noun phrase, sentence case, no full stop | Folder settings | Setări folder |
| state while working | Reflexive "Se" + present tense, then … | Finding suggestions… | Se caută sugestii… |
| state when done | Past participle agreeing with its noun, no auxiliary | Link copied. Paste it anywhere. | Link copiat. Lipiți-l oriunde. |
| question | Short and medium: formal imperative or indicative with ?; complete: "Doriți să ...?" | Remove {name} from your contacts? | Eliminați {name} din persoanele de contact? |
| advice | Formal imperative, full stop | Sign in to Talk to accept. | Conectați-vă la Talk pentru a accepta. |
| explain | Plain statement or noun phrase | The bullet character. | Caracterul marcatorului. |
| warning | Future, the consequence stated plainly | If you don’t save, your changes will be lost. | Dacă nu salvați, modificările se vor pierde. |
| error: cannot | "Nu se poate" + verb (now); "Nu s-a putut" + verb (it was tried) | Could not be set up | Nu s-a putut configura |
| error: failed | Noun + "nu a reușit"; "Eroare: {reason}" for a fragment | Text recognition failed. | Recunoașterea textului nu a reușit. |
| error: not-found | "Lipsește" + noun, or "... nu a fost găsit" | That picture’s file is missing | Lipsește fișierul imaginii. |
| error: not-enough | "Nu există suficient ..."; short: noun + "insuficient" | There is not enough space on the disk to record. | Nu există suficient spațiu pe disc pentru înregistrare. |
| error: unavailable | "... nu este disponibil"; short: noun + "indisponibil" | Speech is not available on this system. | Funcția de vorbire nu este disponibilă în acest sistem. |
| error: not-allowed | "Nu s-a permis" + noun; short: noun + "nepermis" | The camera was not allowed. | Nu s-a permis utilizarea camerei. |
| error: invalid | "... nu este un/o" + noun, or "nevalid" (never "invalid") | "{text}" is not a range | „{text}” nu este o zonă. |
| error: other | Plain sentence; formal imperative for what to do | A workbook must contain at least one visible worksheet. | Un registru de lucru trebuie să conțină cel puțin o foaie de lucru vizibilă. |
| sample | Natural Romanian content of the same kind and length, with names and places of Romania | Horizontal text | Text orizontal |

"Disponibil", "insuficient" and "nevalid" agree with the noun before them;
where that would be a placeholder, put a known noun first („Fișierul {name}
nu a fost găsit.”).

### Short, medium and complete

Medium is the version `messages.json` holds and today's code shows: write it
first, then make the other two from it.

Short:

- Lead with the word that carries the meaning: the verbal noun for an
  action, the noun for a name, the thing that failed for an error („Fișier
  negăsit”, „Spațiu insuficient pe disc”).
- Drop in this order: the frame (Doriți să, Puteți), possessives (dvs.), the
  place or the reason, then adjectives. Never drop a placeholder, a "nu" or
  the word that says what failed.
- An error or status becomes noun plus participle or adjective: „Trimitere
  nereușită”, „Link copiat”. A question stays a question: „Eliminați
  {name}?”.
- Abbreviate only when dropping words is not enough, with a full stop.
  Allowed: nr. (număr), pag. (pagină), aprox., and the glossary's Min and
  Max without a stop; unit symbols take no stop (KB, MB, GB, px, pt, s,
  min, h, %).
- Never abbreviate a verbal noun on a button, an app name, a tab name or a
  glossary term; never drop diacritics to save room; never use chat forms
  (pt for "pentru", sa for "să") or English abbreviations (No., Qty).
- A counted label keeps `{count}` and all three forms. The abbreviation is
  the same in every form, and `other` keeps "de": `one: {count} pag.` /
  `few: {count} pag.` / `other: {count} de pag.`

Complete:

- Adds what the others leave to the context: the object („acest cont”), the
  place („în listă”) and the next step.
- A message, error, advice or tooltip is one or more full sentences. A
  question opens with "Doriți să" where the English asks "Do you want".
- A command stays a long infinitive with its object; when the object needs
  an article and the label reads as a sentence, it takes the formal
  imperative, as the glossary allows („Găsiți un destinatar în listă”).
- Tooltips and screen readers read complete, so it must make sense alone.

Worked examples (short | medium | complete):

- English: Find | Find Recipient | Find a recipient in the list
- Romanian: Găsire | Găsire destinatar | Găsiți un destinatar în listă
- English: Remove {name}? | Remove {name} from your contacts? | Do you want to
  remove {name} from your contacts?
- Romanian: Eliminați {name}? | Eliminați {name} din persoanele de contact? |
  Doriți să eliminați {name} din persoanele de contact?
- English: Not enough disk space to record. | There is not enough space on the
  disk to record. | There is not enough space on the disk to record.
- Romanian: Spațiu insuficient pe disc. | Nu există suficient spațiu pe disc
  pentru înregistrare. | Nu există suficient spațiu pe disc pentru
  înregistrare.

### Punctuation and marks

- A command that opens a dialog ends with … (one character, no space
  before) in every version: Răsfoire…, Salvare ca…. A state while working
  ends with … too.
- No space before : ; ! ? and never a no-break space anywhere. A number and
  % take no space: „{percent}%”.
- Quotation marks are „ ” with no space inside; a quote inside a quote takes
  « ». English "{text}" becomes „{text}”.
- Letters: comma-below ș ț, never the cedilla; capitals keep their marks
  (Î, Ș, Ț, Ă, Â).
- Sentence case on buttons, menu items, tabs, headings and dialog titles,
  even where the English is title case; days and months lower case.
- Errors, warnings, advice and every full sentence end with a full stop; a
  sentence that ends with ? or ! takes none. No full stop on buttons, menu
  items, names, headings, titles, or a fragment that ends with a
  placeholder.
- No exclamation marks in messages.

### Access keys

- `&` goes before a letter of the Romanian word itself: &Fișier, &Editare,
  Salvare &ca…, &Inserare.
- Take the first letter when it is free in that menu or dialog, else another
  clear letter of the main word; every key is unique in its menu or dialog.
- Avoid letters with marks (ă, â, î, ș, ț): &Închidere takes another letter,
  as Î&nchidere. Avoid the narrow i, l, j when another letter is free.
- One `&` per label, never before a space, a mark, the … or a placeholder.
  Every version that keeps the word keeps the same letter.
- The `(&X)` form after the word is for scripts without Latin letters;
  Romanian never uses it.
