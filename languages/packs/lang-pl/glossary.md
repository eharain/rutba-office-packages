# Polish glossary for Rutba Office

The words the Polish pack (`lang-pl`) uses for the suite's recurring terms, so
the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Polish where those exist
(and LibreOffice where Office has none), and plain everyday Polish where they
do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the imperative, second person singular, as Office does:
  Zapisz (Save), Otwórz (Open), Zamknij (Close), Wstaw (Insert), Wyrównaj do
  lewej (Align Left). Never the infinitive (not "Zapisać").
- **Capital letters**: Polish Office writes labels in sentence case, so
  English Title Case becomes a capital on the first word only: Bring to Front
  is Przesuń na wierzch, Check Accessibility is Sprawdź ułatwienia dostępu.
  Proper names and app names keep their capitals.
- **The reader** is addressed informally (ty), as current Office and Windows
  do, with the pronoun in lower case and left out where the sentence works
  without it: Czy chcesz zapisać zmiany? Dodano do twojego kalendarza. Avoid
  Pan/Pani forms.
- **Statements of what happened** prefer the impersonal -no/-to form, which
  carries no gender and no person: Zapisano, Usunięto, Wysłano zaproszenie.
- **Tab names** are nouns, mostly verbal nouns, as Office has them:
  Narzędzia główne, Wstawianie, Projektowanie, Recenzja, Widok. **Group names**
  are nouns too: Schowek, Czcionka, Akapit, Style. A command button inside a
  group stays imperative: Wstaw tabelę.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated. A placeholder cannot take a case ending,
  so word the label to keep it in the nominative: put a noun before it that
  takes the case instead (Odepnij element {name}, Arkusz {name}), or use a
  colon (Tabela: {name}, Zaproszenie: {summary}, Odłącz: {name}).
- **Gender of `{name}`**: a name may be a man, a woman, a room or a file, so
  never make a past-tense verb or an adjective agree with it. Not
  "{name} zaakceptował", but {name}: zaakceptowano, or Zaakceptowane przez:
  {name}.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2, Ctrl+N. Key
  names in a sentence follow Windows: Enter, Esc, Strzałka w dół.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`. Excel function
  names stay in English as the suite writes them (SUM, VLOOKUP).
- **Brand and product names** stay as written: Rutba Office, Word, Excel,
  PowerPoint, Outlook, Windows, Google, Microsoft, iCloud, YouTube Studio,
  LinkedIn Live Studio, WordArt, SmartArt, Power Query.
- **The suite's app names** are translated as in the table below and keep
  their capital: otwórz w aplikacji Dokumenty, wiadomość w aplikacji Poczta.
  When an app name has to be inflected, put the word aplikacja in front and
  leave the name in the nominative.
- **Quotation marks** are Polish: „tekst” (low opening, high closing), and
  «tekst» inside a quotation. Example: napisz „wolna 12 marca?”.
- **No em dash.** Where the English has one, Polish uses a colon, a comma,
  parentheses or a new sentence, never a spaced en dash: "Accounts (long dash) a
  CalDAV or CardDAV server" becomes Konta: serwer CalDAV lub CardDAV. A
  range keeps its en dash: 1 to 10.
- **The ellipsis** … stays at the end of a command that opens a dialog:
  Więcej kolorów…, Przeglądaj…, Zmień…
- **Spaces**: ordinary spaces only, never a no-break space, even before a
  unit or inside a number: 176 × 250 mm, 25%.
- **Counts** use all four Polish plural forms, in this order: `one` (1),
  `few` (2 to 4, 22 to 24, 32 to 34 ...), `many` (0, 5 to 21, 25 to 31 ...)
  and `other` (fractions). Every form carries `{count}`:
  `one: {count} slajd`, `few: {count} slajdy`, `many: {count} slajdów`,
  `other: {count} slajdu`. After a verb the case changes with the form:
  Usunięto {count} komórkę / komórki / komórek / komórki.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, space between thousands, 12.03.2026), so a label never spells out a
  format. Month names written in a sentence go in the genitive: 12 marca.
- **Percent** stays attached to the number as the English writes it: 25%.

## The apps

| English | Polish |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Dokumenty |
| Worksheets | Arkusze |
| Presentations | Prezentacje |
| Mail | Poczta |
| Calendar | Kalendarz |
| Contacts | Kontakty |
| Pictures | Zdjęcia |
| Image (the editor) | Obraz |
| Video | Wideo |
| Home (the launcher) | Start |
| Talk | Rozmowy |
| Locker | Sejf |
| Colour | Kolor |
| Base | Baza |
| Data Files | Pliki danych |
| Broadcast | Transmisja |
| Recorder | Rejestrator |

Pictures is Zdjęcia, as Windows names its photo app, so that Obraz and Obrazy
stay free for the editor and for a picture in a document.

## Tabs and frame

| English | Polish |
| :-- | :-- |
| File | Plik |
| Home | Narzędzia główne |
| Insert | Wstawianie |
| Draw | Rysowanie |
| Design | Projektowanie |
| Layout | Układ |
| Page Layout | Układ strony |
| References | Odwołania |
| Mailings | Korespondencja |
| Review | Recenzja |
| View | Widok |
| Help | Pomoc |
| Formulas | Formuły |
| Data | Dane |
| Automate | Automatyzowanie |
| Transitions | Przejścia |
| Animations | Animacje |
| Slide Show | Pokaz slajdów |
| Record | Nagrywanie |
| Table Design | Projekt tabeli |
| Table Layout | Układ tabeli |
| Shape Format | Formatowanie kształtu |
| Picture Format | Formatowanie obrazu |
| Ribbon | Wstążka |
| Pane | Okienko |
| Status bar | Pasek stanu |
| Dialog | Okno dialogowe |
| Settings | Ustawienia |
| Language | Język |
| Theme | Motyw |

## Commands

| English | Polish |
| :-- | :-- |
| New | Nowy (Nowa, Nowe to agree with the noun: Nowa wiadomość, Nowe wydarzenie) |
| Open | Otwórz |
| Save | Zapisz |
| Save As | Zapisz jako |
| Save as Template | Zapisz jako szablon |
| Close | Zamknij |
| Print | Drukuj |
| Export | Eksportuj |
| Import | Importuj |
| Share | Udostępnij |
| Undo | Cofnij |
| Redo | Wykonaj ponownie |
| Cut | Wytnij |
| Copy | Kopiuj |
| Paste | Wklej |
| Paste Special | Wklej specjalnie |
| Delete | Usuń |
| Remove | Usuń (Usuń z ... where the English says "remove from") |
| Rename | Zmień nazwę |
| Select All | Zaznacz wszystko |
| Find | Znajdź |
| Replace | Zamień |
| Go To | Przejdź do |
| Insert | Wstaw |
| Apply | Zastosuj |
| Apply to All | Zastosuj do wszystkich |
| OK | OK |
| Cancel | Anuluj |
| Yes / No | Tak / Nie |
| Done | Gotowe |
| Next / Previous | Dalej / Wstecz (buttons in a sequence); Następny / Poprzedni (the next or previous item) |
| Back | Wstecz |
| Refresh | Odśwież |
| Update | Aktualizuj |
| Accept / Reject | Zaakceptuj / Odrzuć |
| Sort | Sortuj |
| Filter | Filtruj |
| Group / Ungroup | Grupuj / Rozgrupuj |
| Merge / Split | Scal / Podziel |
| Zoom In / Zoom Out | Powiększ / Pomniejsz |
| Full screen | Pełny ekran |
| Minimise / Maximise / Restore | Minimalizuj / Maksymalizuj / Przywróć |
| Expand / Collapse | Rozwiń / Zwiń |
| Browse | Przeglądaj |
| Add | Dodaj |
| Edit | Edytuj |
| Reset | Resetuj |
| Clear | Wyczyść |
| Show / Hide | Pokaż / Ukryj |
| More | Więcej |
| None | Brak |
| Automatic | Automatycznie (Automatyczny as a setting's value, as in a colour list) |

## Text and documents

| English | Polish |
| :-- | :-- |
| Document | Dokument |
| Page | Strona |
| Paragraph | Akapit |
| Line | Wiersz (of text); Linia (a drawn line) |
| Word (a word) | Wyraz |
| Character | Znak |
| Font | Czcionka |
| Font size | Rozmiar czcionki |
| Bold / Italic / Underline | Pogrubienie / Kursywa / Podkreślenie |
| Strikethrough | Przekreślenie |
| Subscript / Superscript | Indeks dolny / Indeks górny |
| Text highlight colour | Kolor wyróżnienia tekstu |
| Font colour | Kolor czcionki |
| Colour | Kolor |
| Style / Styles | Styl / Style |
| Heading | Nagłówek (the style: Nagłówek 1) |
| Title | Tytuł |
| Bullets / Numbering | Punktory / Numerowanie |
| Multilevel List | Lista wielopoziomowa |
| List | Lista |
| Indent | Wcięcie |
| Alignment / Align Left / Centre / Align Right / Justify | Wyrównanie / Wyrównaj do lewej / Wyśrodkuj / Wyrównaj do prawej / Wyjustuj |
| Line spacing | Interlinia |
| Margins | Marginesy |
| Orientation / Portrait / Landscape | Orientacja / Pionowa / Pozioma |
| Size (paper) | Rozmiar |
| Columns | Kolumny |
| Breaks | Podziały |
| Header / Footer | Nagłówek / Stopka |
| Footnote / Endnote | Przypis dolny / Przypis końcowy |
| Table of Contents | Spis treści |
| Caption | Podpis |
| Bookmark | Zakładka |
| Cross-reference | Odsyłacz |
| Citation / Bibliography | Cytat / Bibliografia |
| Index | Indeks |
| Comment / Comments | Komentarz / Komentarze |
| Track Changes | Śledź zmiany |
| Spelling | Pisownia |
| Thesaurus | Słownik synonimów |
| Word Count | Liczba wyrazów |
| Watermark | Znak wodny |
| Page Colour | Kolor strony |
| Text Box | Pole tekstowe |
| WordArt | WordArt |
| Equation | Równanie |
| Symbol | Symbol |
| Hyperlink / Link | Hiperlink / Link |
| Mail Merge | Korespondencja seryjna |
| Envelopes / Labels | Koperty / Etykiety |
| Template | Szablon |
| Untitled | Bez tytułu |

Heading and Header are both Nagłówek in Polish Office; where both appear
together, say Styl nagłówka for the heading and Nagłówek strony for the
header.

## Workbooks

| English | Polish |
| :-- | :-- |
| Workbook | Skoroszyt |
| Sheet / Worksheet | Arkusz / Arkusz |
| Cell / Cells | Komórka / Komórki |
| Row / Rows | Wiersz / Wiersze |
| Column / Columns | Kolumna / Kolumny |
| Range | Zakres |
| Formula | Formuła |
| Function | Funkcja |
| Number format | Format liczb |
| Currency / Percentage / Date / Time | Walutowe / Procentowe / Data / Godzina (format names); Waluta / Procent for the thing itself |
| Freeze Panes | Zablokuj okienka |
| Conditional Formatting | Formatowanie warunkowe |
| Format as Table | Formatuj jako tabelę |
| PivotTable | Tabela przestawna |
| Chart | Wykres |
| Sparklines | Wykresy przebiegu w czasie |
| Slicer | Fragmentator |
| Data Validation | Poprawność danych |
| Remove Duplicates | Usuń duplikaty |
| Text to Columns | Tekst jako kolumny |
| Power Query | Power Query |
| Name box | Pole nazwy |
| Formula bar | Pasek formuły |
| AutoSum | Autosumowanie |
| Sum / Average / Count / Min / Max | Suma / Średnia / Licznik / Min / Maks |

## Presentations

| English | Polish |
| :-- | :-- |
| Presentation | Prezentacja |
| Slide / Slides | Slajd / Slajdy |
| New Slide | Nowy slajd |
| Layout | Układ |
| Section | Sekcja |
| Master | Wzorzec |
| Notes | Notatki |
| Handout | Materiały informacyjne |
| Shape / Shapes | Kształt / Kształty |
| Picture / Pictures | Obraz / Obrazy |
| Fill / Outline | Wypełnienie / Kontur |
| Shadow / Glow / Reflection | Cień / Poświata / Odbicie |
| Transition | Przejście |
| Animation | Animacja |
| From Beginning / From Current Slide | Od początku / Od bieżącego slajdu |
| Presenter View | Widok prezentera |
| Rehearse Timings | Próba tempa |
| Video / Audio | Wideo / Dźwięk |

## Mail, calendar, contacts, pictures

| English | Polish |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Skrzynka odbiorcza / Elementy wysłane / Wersje robocze / Skrzynka nadawcza / Wiadomości-śmieci / Archiwum / Kosz |
| Message | Wiadomość |
| New message | Nowa wiadomość |
| Reply / Reply All / Forward | Odpowiedz / Odpowiedz wszystkim / Prześlij dalej |
| Send | Wyślij |
| Attachment | Załącznik |
| Account | Konto |
| Folder | Folder |
| Search | Wyszukaj (the command); Wyszukiwanie (the box or pane) |
| Unread / Flagged | Nieprzeczytane / Oflagowane |
| Rules | Reguły |
| Signature | Podpis |
| Event | Wydarzenie |
| Meeting | Spotkanie |
| Today / Day / Week / Month / Agenda | Dzisiaj / Dzień / Tydzień / Miesiąc / Agenda |
| Repeat | Powtarzaj |
| Reminder | Przypomnienie |
| Contact | Kontakt |
| Address book | Książka adresowa |
| Phone / Email / Address | Telefon / E-mail / Adres |
| Rotate / Crop / Flip | Obróć / Przytnij / Przerzuć |
| Rating / Tags | Ocena / Tagi |
| Slideshow | Pokaz slajdów |
| Brightness / Contrast | Jasność / Kontrast |
| Trim / Split | Przytnij / Podziel |
| Export video | Eksportuj wideo |

## Errors and plain sentences

Error messages, notes and tooltips are full sentences: translate the meaning
in plain, natural Polish, not word for word, and keep each sentence's facts
(a number, a name in `{braces}`, a key) exactly. Prefer "Nie można otworzyć
tego pliku." over a literal rendering, and the impersonal Nie wysłano: {reason}
over a sentence that needs a subject. The suite's English is deliberately
plain; Polish should be plain too, without officialese.

## More recurring terms

| English | Polish |
| :-- | :-- |
| Record / Records | Rekord / Rekordy |
| Field | Pole |
| Table | Tabela |
| Database | Baza danych |
| Design (of a table or database) | Projekt |
| Read only | Tylko do odczytu |
| Network share | Udział sieciowy |
| Web address | Adres internetowy |
| Password | Hasło |
| Key | Klucz |
| Stream key | Klucz strumienia |
| Server address | Adres serwera |
| Go live | Rozpocznij transmisję na żywo |
| Live stream | Transmisja na żywo |
| Invitation | Zaproszenie |
| Cancellation | Odwołanie |
| Accepted / Declined / Tentative | Zaakceptowano / Odrzucono / Wstępnie |
| Organizer | Organizator |
| Room / Rooms | Sala / Sale |
| Mailbox | Skrzynka pocztowa |
| Time zone | Strefa czasowa |
| All day | Cały dzień |
| Occurrence | Wystąpienie |
| Start time / End time | Godzina rozpoczęcia / Godzina zakończenia |
| Availability | Dostępność |
| Busy / Free | Zajęty / Wolny |
| Standard colours / Recent colours | Kolory standardowe / Ostatnio używane kolory |
| More colours… | Więcej kolorów… |
| Borders | Obramowania |
| Background | Tło |
| Accent | Akcent |
| Alt Text | Tekst alternatywny |
| Bring Forward / Bring to Front | Przesuń do przodu / Przesuń na wierzch |
| Clear formatting | Wyczyść formatowanie |
| Clipboard | Schowek |
| Banded Rows / Banded Columns | Wiersze naprzemienne / Kolumny naprzemienne |
| Actual Size | Rzeczywisty rozmiar |
| Add to Dictionary | Dodaj do słownika |
| Accessibility / Check Accessibility | Ułatwienia dostępu / Sprawdź ułatwienia dostępu |
| Cc / Bcc | DW / UDW |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

Commands take the imperative, second person singular: Zapisz, Nagraj, Zamknij
okno. Sentences speak to the reader as ty, the pronoun in lower case and left
out where the sentence works without it. What happened takes the impersonal
-no/-to form, never a gendered past tense: Skopiowano link, Nie wysłano: {why}.

### By intent

| Intent | How this language phrases it | English | Polish |
| :-- | :-- | :-- | :-- |
| action (button) | Imperative, verb first, object after it | Record | Nagraj |
| action (menu) | Imperative with its object, sentence case | Close Window | Zamknij okno |
| name | Noun phrase in the nominative, no verb, no full stop | Uppercase | Wielkie litery |
| heading | Noun phrase, sentence case, no full stop; dialog titles too | Folder settings | Ustawienia folderu |
| state (working) | Verbal noun in -anie or -enie, then … | Finding suggestions… | Wyszukiwanie sugestii… |
| state (done) | Impersonal -no/-to verb first, then the object | Link copied. Paste it anywhere. | Skopiowano link. Wklej go w dowolnym miejscu. |
| question | Infinitive first; complete opens with Czy chcesz; a noun before `{name}` | Remove {name}? | Usunąć kontakt {name}? |
| advice | Imperative; the purpose after a comma with aby | Sign in to Talk to accept. | Zaloguj się w aplikacji Rozmowy, aby zaakceptować. |
| explain | Statement in the present tense, or a noun phrase with a full stop | Bullet character. | Znak punktora. |
| warning | Plain statement of the result; nie można cofnąć for "cannot be undone" | Cannot be undone. | Tej operacji nie można cofnąć. |
| error: cannot | Nie można + infinitive, for "cannot" and "could not" alike | Could not set up | Nie można skonfigurować |
| error: failed | The noun + nie powiódł się / nie powiodła się / nie powiodło się; Nie udało się + infinitive where there is no noun | Recognition failed. | Rozpoznawanie nie powiodło się. |
| error: not-found | Brak + genitive, or Nie znaleziono + genitive; with a placeholder, Nie znaleziono: {name} | Picture file is missing | Brak pliku obrazu |
| error: not-enough | Za mało + genitive; za duży / za długi agreeing with a known noun | Not enough disk space to record. | Za mało miejsca na dysku, aby nagrywać. |
| error: unavailable | The noun + jest niedostępny/a/e; with a placeholder, Niedostępne: {name} | Speech is not available. | Mowa jest niedostępna. |
| error: not-allowed | Nie zezwolono na + accusative; short form Noun: brak zgody | Camera not allowed. | Kamera: brak zgody. |
| error: invalid | „{x}” nie jest + instrumental; Nieprawidłowy + noun | "{text}" is not a range | „{text}” nie jest zakresem |
| error: other | What to do, as an imperative, or what is wrong, as a statement | Keep at least one worksheet visible. | Pozostaw widoczny co najmniej jeden arkusz. |
| sample | Write it as a Polish user would type it; keep its case and length | free 12 March? | wolna 12 marca? |

The sample row is the glossary's own quotation example: the suite has
no sample label.

### Short, medium and complete

- **Medium** is the text in `messages.json`; short and complete are made from
  it, so their words match the pack's.
- **Short** keeps, in this order: the verb of an action, its object noun, and
  the key words of an error (Nie można, Brak, Za mało, nie jest). It drops, in
  this order: possessives (twój, swój), demonstratives (ten, ta, to), place and
  purpose phrases (w tym dokumencie, aby ...), adjectives, a second sentence.
- Short never drops a placeholder, a shortcut in brackets (Ctrl+S) or the
  ellipsis of a command that opens a dialog, and never leaves out a Polish
  letter (ą, ę, ł, ó, ś ...) to save room.
- **Abbreviations** only in short, only when the words still do not fit, and
  only these: nr, str., poz., godz., maks., np., wg. Polish rule: no full stop
  when the abbreviation ends with the word's last letter (nr, wg), a full stop
  otherwise (str., godz., maks.). Units and codes stay as symbols with no stop
  (MB, px, min, s). Never abbreviate a verb, an app name or a button's word.
- **A counted label** keeps `{count}` and all four forms in every version. To
  shorten it, drop the verb or turn it into the colon form, which needs no
  agreement and is the same text in each form: medium `Usunięto {count}
  komórek` (many) becomes short `Usunięto: {count}` in one, few, many, other.
- **Complete** adds what the English complete adds: the object (Znajdź
  adresata na liście), the place, the reason, the next step. A message in
  complete is whole sentences, each with its full stop, and a question opens
  with Czy chcesz. Tooltips and screen readers read complete, so it must make
  sense with nothing around it.
- Short is never wider than medium, nor medium than complete. The three may
  be the same text.

Worked examples (English short | medium | complete, then Polish):

1. Find | Find Recipient | Find a recipient in the list
   Znajdź | Znajdź adresata | Znajdź adresata na liście
2. Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts?
   Usunąć kontakt {name}? | Usunąć kontakt {name} z listy kontaktów? | Czy chcesz usunąć kontakt {name} z listy kontaktów?
3. Camera not allowed. | The camera was not allowed. | The camera was not allowed. Allow it in your system's privacy settings.
   Kamera: brak zgody. | Nie zezwolono na użycie kamery. | Nie zezwolono na użycie kamery. Zezwól na to w ustawieniach prywatności systemu.

### Punctuation and marks

- **Ellipsis**: the single character …, with no space before it, at the end of
  a command that opens a dialog or asks for more (Przeglądaj…, Więcej
  kolorów…) and of a working state (Zapisywanie…). Not on a command that acts
  at once. A version keeps the ellipsis if the medium has it.
- **Colon, question mark, exclamation mark, semicolon**: no space before, one
  ordinary space after. Never a no-break space anywhere in pack text.
- **Quotation marks**: „…” (U+201E opening, U+201D closing), «…» inside a
  quotation. The English straight quotes round a placeholder become „{name}”.
- **Capitals**: sentence case on buttons, menu items, tabs, groups, headings
  and dialog titles: the first word and names only. After a colon, lower case
  unless a name follows.
- **Full stops**: an error, warning or message that is a sentence ends with a
  full stop, and so does every sentence in complete. A button, menu item, name,
  heading, tab or a status fragment without a verb takes none, as the English
  version does. Questions end with ?. Do not use exclamation marks.
- **Numbers**: percent stays attached (25%); numbers and dates come from the
  region and are never written into a label by hand.

### Access keys

- Put `&` before one letter of the Polish word, one `&` per label: &Edit is
  &Edytuj, Close Window is &Zamknij okno. Latin script needs no (&X) form.
- Prefer the first letter of the first word, then a clear consonant in that
  word, then a letter of the next word.
- Never a letter with a diacritic (ą ć ę ł ń ó ś ź ż): on the Polish
  programmer's keyboard they are typed with right Alt, which clashes with the
  access key.
- Avoid i and l (hard to see underlined) and letters with descenders (g j p q
  y) when another letter is free. Each letter is unique within one menu or
  dialog, and a command keeps the same letter in every app where it can.
