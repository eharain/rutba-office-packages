# Italian glossary for Rutba Office

The words the Italian pack (`lang-it`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Italian (Italy's usage)
where those have a word, LibreOffice where Office has none, and plain
everyday Italian where neither does.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the imperative, second person singular, as Office does:
  Salva, Apri, Chiudi, Inserisci, Salva con nome, Incolla speciale. A longer
  command keeps the same form: "Aggiungi un account", "Invia l'invito".
- **The reader is addressed informally** (tu), as current Office and Windows
  do: "Vuoi salvare le modifiche?", "Il tuo calendario contiene i nuovi
  dettagli.", "Aggiungine uno in Posta, in Account." Never Lei, never the old
  impersonal "Salvare le modifiche?".
- **Sentence case** everywhere, as Italian Office writes it: only the first
  word and names take a capital. "Allinea a sinistra", "Formattazione
  condizionale", "Nuova diapositiva". Days and months stay lowercase
  (lunedì, marzo).
- **Tab and group names** are the names Office uses, mostly nouns or the
  command word as Office has it: Home, Inserisci, Disegno, Progettazione,
  Layout, Revisione, Visualizza. A group name is a noun: Appunti, Carattere,
  Paragrafo, Stili.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated; Italian word order moves them where it
  wants them: "{added} aggiunti, {updated} aggiornati in {calendar}."
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2.
  "Nuovo evento (Ctrl+N)".
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`. Excel function
  names stay in English as the pack's formulas use them: SUM, VLOOKUP.
- **Brand and product names** stay as written: Rutba Office, Microsoft,
  Word, Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube Studio,
  LinkedIn Live Studio, WordArt, SmartArt, Power Query.
- **The app names** are translated as the table below says (Documenti,
  Posta, Calendario...); they keep their capital inside a sentence: "Aggiungi
  la stanza come account in Posta."
- **Punctuation**: Italian quotation marks are “ ” (curly double), « » not
  used: “libero il 12 marzo?”. The apostrophe is the plain ' as in Office
  UI: "Dall'inizio", "l'account". A capital E with accent is È, never E'.
  The ellipsis … stays at the end of a command that opens a dialog:
  "Sfoglia…", "Altri colori…".
- **No em dash.** Where the English has one, Italian uses a colon, a comma,
  parentheses or a new sentence: "Account: un server CalDAV o CardDAV
  (iCloud, Fastmail, Nextcloud e simili) sincronizzato con questo computer".
  No spaced en dash as a dash either; an en dash in a range (1 to 10) is fine.
  "B5 (long dash) 176 × 250 mm" becomes "B5 (176 × 250 mm)" or "B5: 176 × 250 mm".
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only,
  also before units and percent signs where a space is written ("176 × 250
  mm"). Italian writes "25%" with no space.
- **Counts** use the three forms `Intl.PluralRules` gives Italian, `one`,
  `many`, `other`, each written out in full. `many` is for large round
  numbers (1.000.000 and up) and takes "di" before the noun:
  `one: {count} diapositiva`, `many: {count} di diapositive`,
  `other: {count} diapositive`.
  With a participle or adjective, agree it with the noun in each form:
  `one: {count} evento scritto`, `many: {count} di eventi scritti`,
  `other: {count} eventi scritti`.
  Borrowed nouns do not change in the plural (1 file, 3 file; 1 account,
  3 account; 1 database, 3 database), so only the words round them change.
- **Numbers and dates** are formatted by the window from the region
  (it-IT: 1.234,5; 12/03/2026), so a label never spells out a format of its
  own. Write the placeholder and let the number come in: "{percent}%",
  "Settimana del {date}".
- **Special to Italian**:
  - *Articles and elision before a placeholder*: Italian would elide
    ("l'evento", "dell'invito"), but a placeholder's first letter is unknown.
    Put a noun before it ("il file {name}", "la tabella {table}", "il foglio
    {name}") or a colon ("Tabella: {name}"), never "l'{name}" or "il {name}"
    alone.
  - *Gender of `{name}`*: unknown, so avoid adjectives and participles that
    agree with it. "Ha accettato: {name}" or "{name} ha accettato." (verb
    only), not "{name} è stato aggiunto"; use "Aggiunto: {name}" only when
    the noun before it fixes the gender.
  - *Prepositions with articles*: "in {calendar}" and "a {name}" work
    without an article; avoid "nel {calendar}" or "al {name}".
  - *Status words* (accepted, declined, tentative) shown alone take the
    masculine singular past participle or adjective, as a status:
    accettato, rifiutato, provvisorio.
  - *Undo and Cancel* are both "Annulla" in Italian Office; the button
    context tells them apart. *Refresh and Update* are both "Aggiorna".
  - *Heading and Title* are both "Titolo" in Word's styles ("Titolo 1",
    "Titolo"); elsewhere Heading may be "Intestazione" only when it means a
    column heading.

## The apps

| English | Italian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Documenti |
| Worksheets | Fogli di lavoro |
| Presentations | Presentazioni |
| Mail | Posta |
| Calendar | Calendario |
| Contacts | Contatti |
| Pictures | Foto |
| Image (the editor) | Immagine |
| Video | Video |
| Home (the launcher) | Home |

Pictures is "Foto", as the Windows app is called, so that it stays apart from
the editor "Immagine".

## Tabs and frame

| English | Italian |
| :-- | :-- |
| File | File |
| Home | Home |
| Insert | Inserisci |
| Draw | Disegno |
| Design | Progettazione |
| Layout | Layout |
| Page Layout | Layout di pagina |
| References | Riferimenti |
| Mailings | Lettere |
| Review | Revisione |
| View | Visualizza |
| Help | Guida |
| Formulas | Formule |
| Data | Dati |
| Automate | Automatizza |
| Transitions | Transizioni |
| Animations | Animazioni |
| Slide Show | Presentazione |
| Record | Registra |
| Table Design | Struttura tabella |
| Table Layout | Layout tabella |
| Shape Format | Formato forma |
| Picture Format | Formato immagine |
| Ribbon | Barra multifunzione |
| Pane | Riquadro |
| Status bar | Barra di stato |
| Dialog | Finestra di dialogo |
| Settings | Impostazioni |
| Language | Lingua |
| Theme | Tema |

## Commands

| English | Italian |
| :-- | :-- |
| New | Nuovo |
| Open | Apri |
| Save | Salva |
| Save As | Salva con nome |
| Save as Template | Salva come modello |
| Close | Chiudi |
| Print | Stampa |
| Export | Esporta |
| Import | Importa |
| Share | Condividi |
| Undo | Annulla |
| Redo | Ripeti |
| Cut | Taglia |
| Copy | Copia |
| Paste | Incolla |
| Paste Special | Incolla speciale |
| Delete | Elimina |
| Remove | Rimuovi |
| Rename | Rinomina |
| Select All | Seleziona tutto |
| Find | Trova |
| Replace | Sostituisci |
| Go To | Vai a |
| Insert | Inserisci |
| Apply | Applica |
| Apply to All | Applica a tutto |
| OK | OK |
| Cancel | Annulla |
| Yes / No | Sì / No |
| Done | Fine |
| Next / Previous | Avanti / Indietro (as a step); Successivo / Precedente (as an item) |
| Back | Indietro |
| Refresh | Aggiorna |
| Update | Aggiorna |
| Accept / Reject | Accetta / Rifiuta |
| Sort | Ordina |
| Filter | Filtro (the name); Filtra (the command) |
| Group / Ungroup | Raggruppa / Separa |
| Merge / Split | Unisci / Dividi |
| Zoom In / Zoom Out | Zoom avanti / Zoom indietro |
| Full screen | Schermo intero |
| Minimise / Maximise / Restore | Riduci a icona / Ingrandisci / Ripristina |
| Expand / Collapse | Espandi / Comprimi |
| Browse | Sfoglia |
| Add | Aggiungi |
| Edit | Modifica |
| Reset | Reimposta |
| Clear | Cancella |
| Show / Hide | Mostra / Nascondi |
| More | Altro |
| None | Nessuno |
| Automatic | Automatico |

## Text and documents

| English | Italian |
| :-- | :-- |
| Document | Documento |
| Page | Pagina |
| Paragraph | Paragrafo |
| Line | Riga |
| Word (a word) | Parola |
| Character | Carattere |
| Font | Tipo di carattere (Carattere as a group name) |
| Font size | Dimensione carattere |
| Bold / Italic / Underline | Grassetto / Corsivo / Sottolineato |
| Strikethrough | Barrato |
| Subscript / Superscript | Pedice / Apice |
| Text highlight colour | Colore evidenziazione testo |
| Font colour | Colore carattere |
| Colour | Colore |
| Style / Styles | Stile / Stili |
| Heading | Titolo |
| Title | Titolo |
| Bullets / Numbering | Elenco puntato / Elenco numerato |
| Multilevel List | Elenco a più livelli |
| List | Elenco |
| Indent | Rientro |
| Alignment / Align Left / Centre / Align Right / Justify | Allineamento / Allinea a sinistra / Centra / Allinea a destra / Giustifica |
| Line spacing | Interlinea |
| Margins | Margini |
| Orientation / Portrait / Landscape | Orientamento / Verticale / Orizzontale |
| Size (paper) | Dimensioni |
| Columns | Colonne |
| Breaks | Interruzioni |
| Header / Footer | Intestazione / Piè di pagina |
| Footnote / Endnote | Nota a piè di pagina / Nota di chiusura |
| Table of Contents | Sommario |
| Caption | Didascalia |
| Bookmark | Segnalibro |
| Cross-reference | Riferimento incrociato |
| Citation / Bibliography | Citazione / Bibliografia |
| Index | Indice |
| Comment / Comments | Commento / Commenti |
| Track Changes | Revisioni |
| Spelling | Ortografia |
| Thesaurus | Thesaurus |
| Word Count | Conteggio parole |
| Watermark | Filigrana |
| Page Colour | Colore pagina |
| Text Box | Casella di testo |
| WordArt | WordArt |
| Equation | Equazione |
| Symbol | Simbolo |
| Hyperlink / Link | Collegamento ipertestuale / Collegamento |
| Mail Merge | Stampa unione |
| Envelopes / Labels | Buste / Etichette |
| Template | Modello |
| Untitled | Senza titolo |

## Workbooks

| English | Italian |
| :-- | :-- |
| Workbook | Cartella di lavoro |
| Sheet / Worksheet | Foglio / Foglio di lavoro |
| Cell / Cells | Cella / Celle |
| Row / Rows | Riga / Righe |
| Column / Columns | Colonna / Colonne |
| Range | Intervallo |
| Formula | Formula |
| Function | Funzione |
| Number format | Formato numero |
| Currency / Percentage / Date / Time | Valuta / Percentuale / Data / Ora |
| Freeze Panes | Blocca riquadri |
| Conditional Formatting | Formattazione condizionale |
| Format as Table | Formatta come tabella |
| PivotTable | Tabella pivot |
| Chart | Grafico |
| Sparklines | Grafici sparkline |
| Slicer | Filtro dati |
| Data Validation | Convalida dati |
| Remove Duplicates | Rimuovi duplicati |
| Text to Columns | Testo in colonne |
| Power Query | Power Query |
| Name box | Casella Nome |
| Formula bar | Barra della formula |
| AutoSum | Somma automatica |
| Sum / Average / Count / Min / Max | Somma / Media / Conteggio / Min / Max |

## Presentations

| English | Italian |
| :-- | :-- |
| Presentation | Presentazione |
| Slide / Slides | Diapositiva / Diapositive |
| New Slide | Nuova diapositiva |
| Layout | Layout |
| Section | Sezione |
| Master | Schema |
| Notes | Note |
| Handout | Stampati |
| Shape / Shapes | Forma / Forme |
| Picture / Pictures | Immagine / Immagini |
| Fill / Outline | Riempimento / Contorno |
| Shadow / Glow / Reflection | Ombreggiatura / Alone / Riflesso |
| Transition | Transizione |
| Animation | Animazione |
| From Beginning / From Current Slide | Dall'inizio / Dalla diapositiva corrente |
| Presenter View | Visualizzazione Relatore |
| Rehearse Timings | Prova tempi |
| Video / Audio | Video / Audio |

## Mail, calendar, contacts, pictures

| English | Italian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Posta in arrivo / Posta inviata / Bozze / Posta in uscita / Posta indesiderata / Archivio / Cestino |
| Message | Messaggio |
| New message | Nuovo messaggio |
| Reply / Reply All / Forward | Rispondi / Rispondi a tutti / Inoltra |
| Send | Invia |
| Attachment | Allegato |
| Account | Account |
| Folder | Cartella |
| Search | Cerca |
| Unread / Flagged | Da leggere / Contrassegnati |
| Rules | Regole |
| Signature | Firma |
| Event | Evento |
| Meeting | Riunione |
| Today / Day / Week / Month / Agenda | Oggi / Giorno / Settimana / Mese / Agenda |
| Repeat | Ricorrenza (the field); Ripeti (the verb: "Non si ripete") |
| Reminder | Promemoria |
| Contact | Contatto |
| Address book | Rubrica |
| Phone / Email / Address | Telefono / Posta elettronica / Indirizzo |
| Rotate / Crop / Flip | Ruota / Ritaglia / Capovolgi |
| Rating / Tags | Valutazione / Tag |
| Slideshow | Presentazione |
| Brightness / Contrast | Luminosità / Contrasto |
| Trim / Split | Taglia / Dividi |
| Export video | Esporta video |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Italian addressed with tu, not word for word. Keep a sentence's facts
(a number, a name in `{braces}`, a key) exactly. Prefer "Non è stato
possibile aprire il file." or "Impossibile aprire il file." over a literal
rendering, and "Non inviato: {reason}" for the short status form.

## More recurring terms

| English | Italian |
| :-- | :-- |
| Database | Database |
| Table | Tabella |
| Record | Record |
| Field | Campo |
| Design (of a table) | Struttura |
| Source | Origine |
| Read only | Sola lettura |
| Web address | Indirizzo web |
| Network share | Condivisione di rete |
| Key (a secret) | Chiave |
| Password | Password |
| Sign-in | Credenziali di accesso |
| Link / Unlink (a source) | Collega / Scollega |
| Pin / Unpin | Aggiungi / Rimuovi (with what it pins to: "Rimuovi {name} dai preferiti") |
| Stream key | Chiave di streaming |
| Server address | Indirizzo del server |
| Go live | Vai in diretta |
| Room | Sala |
| Mailbox | Cassetta postale |
| Invitation / Invite | Invito / Invita |
| Organizer | Organizzatore |
| Accepted / Declined / Tentative | Accettato / Rifiutato / Provvisorio |
| Cancellation | Annullamento |
| Occurrence | Occorrenza |
| All day | Tutto il giorno |
| Time zone | Fuso orario |
| Free / Busy | Libero / Occupato |
| Start time / End time | Ora di inizio / Ora di fine |
| Recent colours / Standard colours / More colours… | Colori recenti / Colori standard / Altri colori… |
| darker / lighter (a colour) | più scuro / più chiaro |
| Background | Sfondo |
| Borders | Bordi |
| Banded Rows / Banded Columns | Righe alternate / Colonne alternate |
| Bring Forward / Bring to Front | Porta avanti / Porta in primo piano |
| Clipboard | Appunti |
| Clear formatting | Cancella formattazione |
| Change case | Maiuscole/minuscole |
| Alt Text | Testo alternativo |
| Accessibility / Check Accessibility | Accessibilità / Verifica accessibilità |
| Cc / Bcc | Cc / Ccn |

## Intents and versions

### Voice

The reader is tu, never Lei. Buttons, menu items and ribbon commands take the
imperative, second person singular (Salva, Chiudi finestra), and so do
instructions and advice ("Accedi a Talk per accettare."). Errors use the
impersonal "Impossibile ..." or "Non è stato possibile ...". Never the old
impersonal infinitive question ("Salvare le modifiche?").

### By intent

| Intent | How this language phrases it | English | Italian |
| :-- | :-- | :-- | :-- |
| action on a button | Imperative (tu); complete adds the object | Record | Registra |
| action in a menu | Imperative (tu), sentence case, no article | Close Window | Chiudi finestra |
| name | Noun or noun phrase, no article | Conversations | Conversazioni |
| heading | Noun phrase, sentence case, article dropped, no full stop | Folder settings | Impostazioni cartella |
| state while working | Noun of the action, then …; add "in corso" only when the noun alone reads as a name | Finding suggestions… | Ricerca dei suggerimenti… |
| state when done | Past participle agreeing with its noun, no auxiliary | Link copied. Paste it anywhere. | Collegamento copiato. Incollalo dove vuoi. |
| question | Short and medium: present tense with ?; complete: "Vuoi ...?" | Remove {name} from your contacts? | Rimuovi {name} dai tuoi contatti? |
| advice | Imperative (tu), full stop | Sign in to Talk to accept. | Accedi a Talk per accettare. |
| explain | Plain statement or noun phrase | The bullet character. | Il carattere dell'elenco puntato. |
| warning | Future, the consequence stated plainly | If you don’t save, your changes will be lost. | Se non salvi, le modifiche andranno perse. |
| error: cannot | "Impossibile" + infinitive; "Non è stato possibile" + infinitive in a longer sentence | Could not be set up | Impossibile configurare |
| error: failed | Noun + "non riuscito"; "Errore: {reason}" for a fragment | Text recognition failed. | Riconoscimento del testo non riuscito. |
| error: not-found | "Manca" + noun, or noun + "non trovato" | That picture’s file is missing | Manca il file dell'immagine. |
| error: not-enough | Noun + "insufficiente"; "Non c'è abbastanza ..." in full | There is not enough space on the disk to record. | Non c'è abbastanza spazio sul disco per registrare. |
| error: unavailable | "... non è disponibile" | Speech is not available on this system. | La sintesi vocale non è disponibile in questo sistema. |
| error: not-allowed | "... non è stato consentito"; short: noun + "non consentito" | The camera was not allowed. | L'uso della fotocamera non è stato consentito. |
| error: invalid | "... non è un/una" + noun, or "non valido" | "{text}" is not a range | “{text}” non è un intervallo. |
| error: other | Plain sentence; imperative (tu) for what to do | A workbook must contain at least one visible worksheet. | Una cartella di lavoro deve contenere almeno un foglio di lavoro visibile. |
| sample | Natural Italian content of the same kind and length, with names and places of Italy | Horizontal text | Testo orizzontale |

"Non riuscito", "non trovato" and "non valido" agree with the noun before
them; where that would be a placeholder, put a known noun first ("Il file
{name} non è stato trovato.").

### Short, medium and complete

Medium is the version `messages.json` holds and today's code shows: write it
first, then make the other two from it.

Short:

- Lead with the word that carries the meaning: the verb for an action, the
  noun for a name, the thing that failed for an error ("File non trovato",
  "Spazio su disco insufficiente").
- Drop in this order: the frame ("Vuoi ...?", "Puoi"), articles and
  possessives, the place or the reason, then adjectives. Never drop a
  placeholder, a "non" or the word that says what failed.
- An error or status becomes noun plus participle or adjective: "Invio non
  riuscito", "Collegamento copiato". A question stays a question: "Rimuovi
  {name}?".
- Abbreviate only when dropping words is not enough, with a full stop.
  Allowed: pag. (pagina), n. (numero), ca. (circa), and the glossary's Min
  and Max without a stop; unit symbols take no stop (KB, MB, GB, px, pt, s,
  min, h, %).
- Never abbreviate a verb on a button, an app name, a tab name or a glossary
  term; never use chat forms (x for "per", cmq, nn) or English abbreviations
  (No., Qty).
- A counted label keeps `{count}` and all three forms. The abbreviation is
  the same in every form, and `many` keeps "di": `one: {count} pag.` /
  `many: {count} di pag.` / `other: {count} pag.`

Complete:

- Adds what the others leave to the context: the object ("questo account"),
  the place ("nell'elenco") and the next step.
- A message, error, advice or tooltip is one or more full sentences. A
  question opens with "Vuoi" where the English asks "Do you want".
- A command stays an imperative with its object ("Trova un destinatario
  nell'elenco").
- Tooltips and screen readers read complete, so it must make sense alone.

Worked examples (short | medium | complete):

- English: Find | Find Recipient | Find a recipient in the list
- Italian: Trova | Trova destinatario | Trova un destinatario nell'elenco
- English: Remove {name}? | Remove {name} from your contacts? | Do you want to
  remove {name} from your contacts?
- Italian: Rimuovi {name}? | Rimuovi {name} dai tuoi contatti? | Vuoi
  rimuovere {name} dai tuoi contatti?
- English: Not enough disk space to record. | There is not enough space on the
  disk to record. | There is not enough space on the disk to record.
- Italian: Spazio su disco insufficiente. | Non c'è abbastanza spazio sul
  disco per registrare. | Non c'è abbastanza spazio sul disco per
  registrare.

### Punctuation and marks

- A command that opens a dialog ends with … (one character, no space
  before) in every version: Sfoglia…, Salva con nome…. A state while
  working ends with … too.
- No space before : ; ! ? and never a no-break space anywhere. A number and
  % take no space: "{percent}%".
- Quotation marks are “ ” with no space inside; a quote inside a quote takes
  ‘ ’. English "{text}" becomes “{text}”.
- The apostrophe is the straight '. Capitals keep their accents: È, never
  E'.
- Sentence case on buttons, menu items, tabs, headings and dialog titles;
  days and months lower case.
- Errors, warnings, advice and every full sentence end with a full stop; a
  sentence that ends with ? or ! takes none. No full stop on buttons, menu
  items, names, headings, titles, or a fragment that ends with a
  placeholder.
- No exclamation marks in messages.

### Access keys

- `&` goes before a letter of the Italian word itself: &File, &Modifica,
  Salva &con nome…, &Inserisci.
- Take the first letter when it is free in that menu or dialog, else another
  clear letter of the main word; every key is unique in its menu or dialog.
- Avoid accented letters (à, è, é, ì, ò, ù), and the narrow i, l, j when
  another letter is free.
- One `&` per label, never before a space, a mark, the … or a placeholder.
  Every version that keeps the word keeps the same letter.
- The `(&X)` form after the word is for scripts without Latin letters;
  Italian never uses it.
