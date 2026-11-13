# German glossary for Rutba Office

The words the German pack (`lang-de`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in German (Germany) where they
have a word, LibreOffice where Office has none, and plain everyday German
where neither does.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the infinitive, as
  German Office does: Speichern, Öffnen, Schließen, Einfügen, Raum
  hinzufügen, Ereignis bearbeiten. Never the imperative on a button.
- **Instructions in sentences** (tooltips, hints, dialog text) address the
  reader informally with lowercase **du / dein**, as current Microsoft 365 and
  Windows do in German: „Schließe zuerst das andere Programm.“, „Füge in Mail
  unter Konten eines hinzu.“, „Deine Datensätze bleiben, wie sie waren.“
  Never mix in Sie.
- **Tab and group names** are the names German Office uses, even where the
  tab name is a verb: Datei, Start, Einfügen, Entwurf, Überprüfen, Ansicht;
  groups such as Zwischenablage, Schriftart, Absatz, Formatvorlagen.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, untranslated, wherever German word order puts them:
  `Tabelle: {name}`, `{name} umbenennen`, `Weitere Optionen für {name}`.
- **Keys and shortcuts** stay exactly as the English writes them, as TRANSLATING.md
  requires: Ctrl+S, F7, Shift+F2, „Neues Ereignis (Ctrl+N)“. (German
  Office itself writes Strg+S, Umschalt+F2, Entf. Changing that would need
  the owner's word for the pack as a whole, so a reviewer raises it rather
  than changing single labels.)
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, `=SUM(ABOVE)`.
- **Brand and product names** stay as written: Rutba Office, Microsoft, Word,
  Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube Studio, Twitch,
  LinkedIn Live Studio, WordArt, PivotTable, SmartArt, Power Query.
  Compounds with a name take a hyphen, as German does (Microsoft-Konto,
  Office-Datei, ICS-Datei); with a two-word name, prefer a phrase over a long
  hyphen chain: „Konto für Rutba Office“, not „Rutba-Office-Konto“.
- **App names** are translated as the table below says (Dokumente, Kalender,
  Kontakte); Talk and other names marked as names stay in English.
- **Punctuation and quotation marks**: German quotation marks „…“ (U+201E
  opening, U+201C closing), for example „frei am 12. März?“. The ellipsis …
  stays at the end of a command that opens a dialog: Durchsuchen…, Weitere
  Farben…. Nouns are capitalised; „du“ and „dein“ stay lowercase.
- **No em dash.** Where the English has one, German uses a colon, a comma,
  parentheses or a new sentence: „A group has no fill or outline of its own (long dash) format a shape inside it.“ becomes „Eine Gruppe hat keine eigene Füllung
  oder Kontur. Formatiere eine Form darin.“; „Banded Rows (long dash) every other row
  shaded“ becomes „Gebänderte Zeilen: jede zweite Zeile schattiert“. No en
  dash with spaces as a dash; an en dash in a range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only, also
  before % and in „z. B.“: `dunkler {percent} %`.
- **Counts** use German's two plural forms, `one` and `other`, each written
  out in full with `{count}`:
  `one: Der Entwurf ist aktuell: {count} Änderung.`
  `other: Der Entwurf ist aktuell: {count} Änderungen.`
  Where the noun after the count would need a case ending that changes with
  the number, choose wording that keeps it in the nominative or after a colon.
- **Numbers and dates** are formatted by the window from the region (de-DE:
  1.234,5; 12.03.2026), so labels never spell out a format or a separator and
  never write a date pattern themselves. Units stay as given: 176 × 250 mm,
  15 Minuten, 5 s.
- **Special to German**:
  - Placeholders cannot decline, so never put an article or a case ending on
    them: write „Datei von {name}“ or „{name}: Datei“, not „{name}s Datei“;
    write „Tabelle {table}“ or a colon, not „der {table}“.
  - The gender of `{name}` is unknown: avoid adjectives, articles and
    pronouns that agree with it („{name} hat abgelehnt.“, not „Er/Sie hat …“).
  - Long compounds: keep ribbon labels short; use the Office compound where
    one exists (Texthervorhebungsfarbe) and otherwise prefer a short phrase
    over a new compound of three or more nouns.
  - Status messages are short past participles or nominal phrases, as Office
    does: Gespeichert, Nicht gesendet: {reason}, Abgesagt: {summary}.
  - Error messages are plain sentences in the passive or with „konnte nicht“:
    „Diese Datei konnte nicht geöffnet werden.“

## The apps

| English | German |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumente |
| Worksheets | Tabellen |
| Presentations | Präsentationen |
| Mail | Mail |
| Calendar | Kalender |
| Contacts | Kontakte |
| Pictures | Bilder |
| Image (the editor) | Bildbearbeitung |
| Video | Video |
| Home (the launcher) | Start |
| Talk | Talk |
| Locker | Tresor |
| Colour | Farbe |
| Base | Datenbank |
| Broadcast | Livestream |
| Recorder | Rekorder |

## Tabs and frame

| English | German |
| :-- | :-- |
| File | Datei |
| Home | Start |
| Insert | Einfügen |
| Draw | Zeichnen |
| Design | Entwurf |
| Layout | Layout |
| Page Layout | Seitenlayout |
| References | Referenzen |
| Mailings | Sendungen |
| Review | Überprüfen |
| View | Ansicht |
| Help | Hilfe |
| Formulas | Formeln |
| Data | Daten |
| Automate | Automatisieren |
| Transitions | Übergänge |
| Animations | Animationen |
| Slide Show | Bildschirmpräsentation |
| Record | Aufzeichnen |
| Table Design | Tabellenentwurf |
| Table Layout | Tabellenlayout |
| Shape Format | Formformat |
| Picture Format | Bildformat |
| Ribbon | Menüband |
| Pane | Bereich |
| Status bar | Statusleiste |
| Dialog | Dialogfeld |
| Settings | Einstellungen |
| Language | Sprache |
| Theme | Design |

## Commands

| English | German |
| :-- | :-- |
| New | Neu |
| Open | Öffnen |
| Save | Speichern |
| Save As | Speichern unter |
| Save as Template | Als Vorlage speichern |
| Close | Schließen |
| Print | Drucken |
| Export | Exportieren |
| Import | Importieren |
| Share | Teilen |
| Undo | Rückgängig |
| Redo | Wiederholen |
| Cut | Ausschneiden |
| Copy | Kopieren |
| Paste | Einfügen |
| Paste Special | Inhalte einfügen |
| Delete | Löschen |
| Remove | Entfernen |
| Rename | Umbenennen |
| Select All | Alles auswählen |
| Find | Suchen |
| Replace | Ersetzen |
| Go To | Gehe zu |
| Insert | Einfügen |
| Apply | Übernehmen (in a dialog); Anwenden (a style or colour) |
| Apply to All | Auf alle anwenden |
| OK | OK |
| Cancel | Abbrechen |
| Yes / No | Ja / Nein |
| Done | Fertig |
| Next / Previous | Weiter / Zurück (steps); Nächste / Vorherige (items) |
| Back | Zurück |
| Refresh | Aktualisieren |
| Update | Aktualisieren; Update (a software update) |
| Accept / Reject | Annehmen / Ablehnen |
| Sort | Sortieren |
| Filter | Filtern |
| Group / Ungroup | Gruppieren / Gruppierung aufheben |
| Merge / Split | Verbinden / Teilen (cells); Zusammenführen (documents) |
| Zoom In / Zoom Out | Vergrößern / Verkleinern |
| Full screen | Vollbild |
| Minimise / Maximise / Restore | Minimieren / Maximieren / Wiederherstellen |
| Expand / Collapse | Erweitern / Reduzieren |
| Browse | Durchsuchen |
| Add | Hinzufügen |
| Edit | Bearbeiten |
| Reset | Zurücksetzen |
| Clear | Löschen (contents, formatting); Leeren (a field or list) |
| Show / Hide | Anzeigen / Ausblenden |
| More | Mehr; Weitere (before a noun: Weitere Farben…) |
| None | Keine (Ohne for borders and effects, as Office does) |
| Automatic | Automatisch |

## Text and documents

| English | German |
| :-- | :-- |
| Document | Dokument |
| Page | Seite |
| Paragraph | Absatz |
| Line | Zeile (of text); Linie (drawn) |
| Word (a word) | Wort |
| Character | Zeichen |
| Font | Schriftart |
| Font size | Schriftgrad |
| Bold / Italic / Underline | Fett / Kursiv / Unterstrichen |
| Strikethrough | Durchgestrichen |
| Subscript / Superscript | Tiefgestellt / Hochgestellt |
| Text highlight colour | Texthervorhebungsfarbe |
| Font colour | Schriftfarbe |
| Colour | Farbe |
| Style / Styles | Formatvorlage / Formatvorlagen |
| Heading | Überschrift |
| Title | Titel |
| Bullets / Numbering | Aufzählungszeichen / Nummerierung |
| Multilevel List | Liste mit mehreren Ebenen |
| List | Liste |
| Indent | Einzug |
| Alignment / Align Left / Centre / Align Right / Justify | Ausrichtung / Linksbündig / Zentriert / Rechtsbündig / Blocksatz |
| Line spacing | Zeilenabstand |
| Margins | Seitenränder |
| Orientation / Portrait / Landscape | Ausrichtung / Hochformat / Querformat |
| Size (paper) | Größe |
| Columns | Spalten |
| Breaks | Umbrüche |
| Header / Footer | Kopfzeile / Fußzeile |
| Footnote / Endnote | Fußnote / Endnote |
| Table of Contents | Inhaltsverzeichnis |
| Caption | Beschriftung |
| Bookmark | Textmarke |
| Cross-reference | Querverweis |
| Citation / Bibliography | Zitat / Literaturverzeichnis |
| Index | Index |
| Comment / Comments | Kommentar / Kommentare |
| Track Changes | Änderungen nachverfolgen |
| Spelling | Rechtschreibung |
| Thesaurus | Thesaurus |
| Word Count | Wörter zählen (the command); Wortanzahl (the figure) |
| Watermark | Wasserzeichen |
| Page Colour | Seitenfarbe |
| Text Box | Textfeld |
| WordArt | WordArt |
| Equation | Formel |
| Symbol | Symbol |
| Hyperlink / Link | Hyperlink / Link |
| Mail Merge | Seriendruck |
| Envelopes / Labels | Umschläge / Etiketten |
| Template | Vorlage |
| Untitled | Unbenannt |

## Workbooks

| English | German |
| :-- | :-- |
| Workbook | Arbeitsmappe |
| Sheet / Worksheet | Blatt / Arbeitsblatt |
| Cell / Cells | Zelle / Zellen |
| Row / Rows | Zeile / Zeilen |
| Column / Columns | Spalte / Spalten |
| Range | Bereich |
| Formula | Formel |
| Function | Funktion |
| Number format | Zahlenformat |
| Currency / Percentage / Date / Time | Währung / Prozent / Datum / Uhrzeit |
| Freeze Panes | Fenster fixieren |
| Conditional Formatting | Bedingte Formatierung |
| Format as Table | Als Tabelle formatieren |
| PivotTable | PivotTable |
| Chart | Diagramm |
| Sparklines | Sparklines |
| Slicer | Datenschnitt |
| Data Validation | Datenüberprüfung |
| Remove Duplicates | Duplikate entfernen |
| Text to Columns | Text in Spalten |
| Power Query | Power Query |
| Name box | Namenfeld |
| Formula bar | Bearbeitungsleiste |
| AutoSum | AutoSumme |
| Sum / Average / Count / Min / Max | Summe / Mittelwert / Anzahl / Min. / Max. |

## Presentations

| English | German |
| :-- | :-- |
| Presentation | Präsentation |
| Slide / Slides | Folie / Folien |
| New Slide | Neue Folie |
| Layout | Layout |
| Section | Abschnitt |
| Master | Master |
| Notes | Notizen |
| Handout | Handzettel |
| Shape / Shapes | Form / Formen |
| Picture / Pictures | Bild / Bilder |
| Fill / Outline | Füllung / Kontur |
| Shadow / Glow / Reflection | Schatten / Leuchten / Spiegelung |
| Transition | Übergang |
| Animation | Animation |
| From Beginning / From Current Slide | Von Beginn an / Ab aktueller Folie |
| Presenter View | Referentenansicht |
| Rehearse Timings | Probelauf |
| Video / Audio | Video / Audio |

## Mail, calendar, contacts, pictures

| English | German |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Posteingang / Gesendete Elemente / Entwürfe / Postausgang / Junk-E-Mail / Archiv / Gelöschte Elemente |
| Message | Nachricht |
| New message | Neue Nachricht |
| Reply / Reply All / Forward | Antworten / Allen antworten / Weiterleiten |
| Send | Senden |
| Attachment | Anlage |
| Account | Konto |
| Folder | Ordner |
| Search | Suchen |
| Unread / Flagged | Ungelesen / Gekennzeichnet |
| Rules | Regeln |
| Signature | Signatur |
| Event | Ereignis |
| Meeting | Besprechung |
| Today / Day / Week / Month / Agenda | Heute / Tag / Woche / Monat / Agenda |
| Repeat | Wiederholen |
| Reminder | Erinnerung |
| Contact | Kontakt |
| Address book | Adressbuch |
| Phone / Email / Address | Telefon / E-Mail / Adresse |
| Rotate / Crop / Flip | Drehen / Zuschneiden / Spiegeln |
| Rating / Tags | Bewertung / Tags |
| Slideshow | Diashow |
| Brightness / Contrast | Helligkeit / Kontrast |
| Trim / Split | Kürzen / Teilen |
| Export video | Video exportieren |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain German with du, not word for word. Keep a sentence's facts (a number, a
name in `{braces}`, a key) exactly. Prefer „Diese Datei konnte nicht geöffnet
werden.“ over a literal rendering, and „Nicht gesendet: {reason}“ over a
full clause where the English is a short status.

## More recurring terms

| English | German |
| :-- | :-- |
| Database | Datenbank |
| Table (of records) | Tabelle |
| Record | Datensatz |
| Field | Feld |
| Design (of a table or database) | Entwurf |
| Data Files (the database app's copy) | Data Files (name; reviewer to confirm whether it is translated) |
| Read only | Schreibgeschützt |
| Source | Quelle |
| Network share | Netzwerkfreigabe |
| Web address | Webadresse |
| Password | Kennwort |
| Key (access key) | Schlüssel |
| Stream key | Streamschlüssel |
| Server address | Serveradresse |
| Sign-in | Anmeldung |
| On a schedule | Nach Zeitplan |
| This computer | Dieser Computer |
| Copy (a copy) | Kopie |
| Link / Unlink (a table) | Verknüpfen / Verknüpfung aufheben |
| Pin / Unpin | Anheften / Lösen |
| Invitation | Einladung |
| Invite | Einladen |
| Organizer | Organisator |
| Accepted / Tentative / Declined | Angenommen / Mit Vorbehalt / Abgelehnt |
| Cancellation | Absage |
| Room / Rooms and resources | Raum / Räume und Ressourcen |
| Mailbox | Postfach |
| Time zone | Zeitzone |
| All day | Ganztägig |
| Occurrence / Every occurrence | Vorkommen / Alle Vorkommen |
| Availability | Verfügbarkeit |
| Busy / Free | Gebucht / Frei |
| Standard colours / Recent colours / More colours… | Standardfarben / Zuletzt verwendete Farben / Weitere Farben… |
| Accent / Background | Akzent / Hintergrund |
| Borders | Rahmen |
| Banded Rows / Banded Columns | Gebänderte Zeilen / Gebänderte Spalten |
| Bring to Front / Bring Forward | In den Vordergrund / Eine Ebene nach vorne |
| Clipboard | Zwischenablage |
| Clear formatting | Formatierung löschen |
| Alt Text / Accessibility | Alternativtext / Barrierefreiheit |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice
- Buttons, menu items and ribbon commands take the infinitive, object first:
  Speichern, Empfänger suchen. Never the imperative and never du on a control.
- Sentences address the reader with lowercase du and dein, never Sie, and
  give instructions in the du imperative: „Melde dich bei Talk an.“
- Results are past participles or short nominal phrases (Gespeichert, Link
  kopiert); errors are plain sentences with „konnte nicht“ or the passive.

### By intent
| Intent | How German phrases it | English | German |
| :-- | :-- | :-- | :-- |
| action on a button | Object, then the infinitive; no article, no du | Find Recipient | Empfänger suchen |
| action in a menu | The same infinitive as a button; Office's wording where Office has the item | Close Window | Fenster schließen |
| name | Noun or noun phrase; an Office compound where one exists | Horizontal text | Horizontaler Text |
| heading | Noun phrase or compound, no verb, no full stop | Folder settings | Ordnereinstellungen |
| state while working | Passive with „wird“ or „werden“, ending in … | Finding suggestions… | Vorschläge werden gesucht… |
| state when done | Past participle without „wurde“; a second sentence with du | Link copied. Paste it anywhere. | Link kopiert. Du kannst ihn überall einfügen. |
| question | Infinitive phrase with ? when short; „Möchtest du ...?“ when complete | Remove {name}? | {name} entfernen? |
| advice | du imperative, then the place or the reason | Sign in to Talk to accept. | Melde dich bei Talk an, um anzunehmen. |
| explain | Plain statement or noun phrase, full stop as in the English | Bullet character. | Aufzählungszeichen. |
| warning | The consequence as a statement; „Dies kann nicht rückgängig gemacht werden.“ | Unsaved changes will be lost. | Nicht gespeicherte Änderungen gehen verloren. |
| error: cannot | „... konnte nicht ... werden“; short: noun and „fehlgeschlagen“ | This account could not be set up | Dieses Konto konnte nicht eingerichtet werden |
| error: failed | Noun and „fehlgeschlagen“ | Text recognition failed. | Texterkennung fehlgeschlagen. |
| error: not-found | „... fehlt“ or „... wurde nicht gefunden“ | Picture file is missing | Bilddatei fehlt |
| error: not-enough | „zu groß“, „zu lang“, „nicht genügend ...“ | File too large for a message. | Datei zu groß für eine Nachricht. |
| error: unavailable | „... ist nicht verfügbar“; no answer: „... hat nicht geantwortet“ | Speech is not available. | Sprachausgabe ist nicht verfügbar. |
| error: not-allowed | „... nicht zugelassen“ or „... ist nicht zulässig“ | Camera not allowed. | Kamera nicht zugelassen. |
| error: invalid | „... ist kein ...“ or „... ist ungültig“ | "{text}" is not a range | „{text}“ ist kein Bereich |
| error: other | Plain sentence; a rule as a du imperative | Keep at least one worksheet visible. | Lass mindestens ein Arbeitsblatt sichtbar. |
| sample | Example content written fresh in German: German names, places, dates and amounts, never a word-for-word copy | (the suite has no sample label) | (written fresh, for example „Lieferung an Familie Becker, Köln“) |

### Short, medium and complete
- Short keeps the infinitive and drops the object and any qualifier; if room
  allows one noun, keep the head noun before the infinitive. Never keep the
  object alone without its verb. A placeholder is never dropped.
- Allowed abbreviations are the standard ones, with a full stop: Nr., S.
  (Seite), Min. and Max. (minimum, maximum), Std., Sek., ggf., z. B. (with an
  ordinary space). Unit symbols take none: s, min, h, MB. Not allowed: made-up
  cuts (Einst., Dok.), a cut inside a compound, and any abbreviation on a
  button or menu item.
- A counted label keeps `{count}` and its noun whole in both forms and
  shortens by dropping the words around them. Only a noun with a standard
  abbreviation shortens, the same in `one` and `other`: `{count} S.`.
- Complete adds the object with its article and the place, and becomes a
  full sentence where the English complete is one; a question takes
  „Möchtest du ...?“. Tooltips and screen readers read complete.

Worked examples (English short | medium | complete, then German):
1. Find | Find Recipient | Find a recipient in the list
   Suchen | Empfänger suchen | Empfänger in der Liste suchen
2. Folder settings | Folder settings | Settings for this folder
   Ordnereinstellungen | Ordnereinstellungen | Einstellungen für diesen Ordner
3. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   {name} entfernen? | {name} aus deinen Kontakten entfernen? | Möchtest du {name} aus deinen Kontakten entfernen?

### Punctuation and marks
- A command that opens a dialog ends in … (U+2026) with no space before it:
  Durchsuchen…, Weitere Farben…. A command that acts at once has none. A
  state while working ends in … too.
- Colon, question mark and exclamation mark follow the word with no space
  before them; one ordinary space follows a colon. Never a no-break space, also
  not before % or inside z. B.
- Quotation marks „…“ (U+201E, U+201C), and ‚…‘ (U+201A, U+2018) inside them.
- No title case. The first word takes a capital and so does every noun, as
  German spelling requires; adjectives and verbs inside a label stay lower
  case: Neue Folie, Als Vorlage speichern, Bedingte Formatierung. du and dein
  stay lower case.
- A full sentence ends in a full stop, errors included. A fragment follows its
  English version: a full stop if the English has one, none if not. Buttons,
  menu items, headings and titles never end in a full stop, and errors never
  end in an exclamation mark.

### Access keys
- `&` goes before a letter of the German word, never the English letter for
  its own sake: &Edit is &Bearbeiten, &File is &Datei.
- Prefer the first letter. If it is taken in the same menu or dialog, take a
  clear consonant later in the word, or the first letter of the second word:
  Speichern &unter.
- Avoid ä, ö, ü and ß, and letters with descenders (g, j, p, q, y), while a
  plain letter is free. Each letter once per menu or dialog.
- Never put `&` before a space, a placeholder or a mark. If short drops the
  word that carries it, move it to a letter of the word that stays.
