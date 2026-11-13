# Bulgarian glossary for Rutba Office

The words the Bulgarian pack (`lang-bg`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Bulgarian (bg-BG) where those
have a word, and plain standard Bulgarian where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the second person
  singular imperative, as Bulgarian Office does: Запиши (Save), Отвори (Open),
  Затвори (Close), Вмъкни (Insert), Изтрий (Delete). A few commands keep the
  noun Office uses for them: Печат (Print), Отказ (Cancel), Търсене (Search
  as a box or pane name).
- **How the reader is addressed**: the polite plural вие, written in lower
  case, as current Microsoft software does: „Вашият файл е записан.“,
  „Въведете паролата си.“ Never the informal ти, never a capital Вие.
- **Tab, group, pane and dialog names** take the noun or verbal noun, as
  Office does: Начало, Вмъкване, Рисуване, Оформление, Преглед, Изглед. The
  same action is a verb when it is a button: the tab is Вмъкване, the button
  is Вмъкни.
- **Capitals**: sentence case in every label, as Bulgarian Office writes them:
  „Вмъкване на таблица“, „Оформление на страница“. Only the first word and
  names take a capital.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated, wherever Bulgarian word order puts them.
  A placeholder cannot take the definite article, so put a noun with the
  article in front of it: „Листът {name}“, „Таблицата {table} вече
  съществува.“, „Изтрий файла {name}“.
- **Gender of `{name}`**: a person's gender is not known. Prefer the aorist,
  which does not show gender: „{name} прие.“, „{name} отказа.“ Avoid the
  perfect participle („е приел/приела“). For things, the noun in front of the
  placeholder carries the gender, as above.
- **Keys and shortcuts** stay as they are, in Latin letters: Ctrl+S, F7,
  Shift+F2: „Получер (Ctrl+B)“.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, AAC, H.264, `=SUM(ABOVE)`, `dd/mm/yyyy`: „Събития от .ics“.
- **Brand and product names** stay in Latin letters, undeclined: Rutba Office,
  Word, Excel, PowerPoint, Office, Windows, Google, Microsoft, iCloud,
  YouTube, LinkedIn: „Отвори YouTube Studio“.
- **The suite's own app names** are translated as in the tables below
  (Документи, Работни листове, Поща, Календар, Разговори) and take a capital,
  as names do: „Добавете акаунт в Поща.“
- **Punctuation**: Bulgarian quotation marks „…“ (low opening, high closing),
  with ‚…‘ inside them. The ellipsis … stays at the end of a command that
  opens a dialog: Преглед…, Още цветове…. Where English has an em dash ( (long dash) ),
  write a colon, a comma, parentheses or a new sentence, never a dash with
  spaces: „Групата няма собствено запълване или контур: форматирайте фигура в
  нея.“ An en dash in a range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only, also
  between a number and its unit (25 %, 176 × 250 мм).
- **Units** take their Bulgarian symbols: мм, см, с (seconds), мин:
  „B5 (176 × 250 мм)“, „около {seconds} с“.
- **Counts** use Bulgarian's two forms, `one` and `other`. A masculine noun
  for a thing takes the count form in -а/-я after a number, not the full
  plural; feminine and neuter nouns take the plural; people are counted with
  човек / души:
  - `{ one: '{count} слайд', other: '{count} слайда' }`
  - `{ one: '{count} страница', other: '{count} страници' }`
  - `{ one: '{count} събитие', other: '{count} събития' }`
  - `{ one: '{count} човек', other: '{count} души' }`
  The `other` form also covers 0 (0 слайда).
- **Numbers and dates** are formatted by the window from the region (bg-BG:
  decimal comma, space between thousands, 12.03.2026). Labels never spell out
  a number or date format of their own.
- **Ordinal and clitic order**: short pronouns follow Bulgarian order
  („Запишете го“, „Не е изпратено“); do not copy English word order into a
  label.

## The apps

| English | Bulgarian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Документи |
| Worksheets | Работни листове |
| Presentations | Презентации |
| Mail | Поща |
| Calendar | Календар |
| Contacts | Контакти |
| Pictures | Снимки |
| Image (the editor) | Изображение |
| Video | Видео |
| Home (the launcher) | Начало |

## Tabs and frame

| English | Bulgarian |
| :-- | :-- |
| File | Файл |
| Home | Начало |
| Insert | Вмъкване |
| Draw | Рисуване |
| Design | Проектиране |
| Layout | Оформление |
| Page Layout | Оформление на страница |
| References | Препратки |
| Mailings | Пощенски списъци |
| Review | Преглед |
| View | Изглед |
| Help | Помощ |
| Formulas | Формули |
| Data | Данни |
| Automate | Автоматизиране |
| Transitions | Преходи |
| Animations | Анимации |
| Slide Show | Слайдшоу |
| Record | Запис |
| Table Design | Проектиране на таблица |
| Table Layout | Оформление на таблица |
| Shape Format | Формат на фигура |
| Picture Format | Формат на картина |
| Ribbon | Лента |
| Pane | Екран |
| Status bar | Лента на състоянието |
| Dialog | Диалогов прозорец |
| Settings | Настройки |
| Language | Език |
| Theme | Тема |

## Commands

| English | Bulgarian |
| :-- | :-- |
| New | Нов |
| Open | Отвори |
| Save | Запиши |
| Save As | Запиши като |
| Save as Template | Запиши като шаблон |
| Close | Затвори |
| Print | Печат |
| Export | Експортирай |
| Import | Импортирай |
| Share | Сподели |
| Undo | Отмени |
| Redo | Повтори |
| Cut | Изрежи |
| Copy | Копирай |
| Paste | Постави |
| Paste Special | Специално поставяне |
| Delete | Изтрий |
| Remove | Премахни |
| Rename | Преименувай |
| Select All | Избери всичко |
| Find | Намери |
| Replace | Замени |
| Go To | Отиди на |
| Insert | Вмъкни |
| Apply | Приложи |
| Apply to All | Приложи за всички |
| OK | OK |
| Cancel | Отказ |
| Yes / No | Да / Не |
| Done | Готово |
| Next / Previous | Напред / Назад (as buttons); Следващ / Предишен (as items) |
| Back | Назад |
| Refresh | Обнови |
| Update | Актуализирай |
| Accept / Reject | Приеми / Отхвърли |
| Sort | Сортирай |
| Filter | Филтър |
| Group / Ungroup | Групирай / Разгрупирай |
| Merge / Split | Обедини / Раздели |
| Zoom In / Zoom Out | Увеличи / Намали |
| Full screen | Цял екран |
| Minimise / Maximise / Restore | Минимизирай / Максимизирай / Възстанови |
| Expand / Collapse | Разгъни / Свий |
| Browse | Преглед… |
| Add | Добави |
| Edit | Редактирай |
| Reset | Нулирай |
| Clear | Изчисти |
| Show / Hide | Покажи / Скрий |
| More | Още |
| None | Няма |
| Automatic | Автоматично |

## Text and documents

| English | Bulgarian |
| :-- | :-- |
| Document | Документ |
| Page | Страница |
| Paragraph | Абзац |
| Line | Ред |
| Word (a word) | Дума |
| Character | Знак |
| Font | Шрифт |
| Font size | Размер на шрифта |
| Bold / Italic / Underline | Получер / Курсив / Подчертан |
| Strikethrough | Зачертан |
| Subscript / Superscript | Долен индекс / Горен индекс |
| Text highlight colour | Цвят за осветяване на текста |
| Font colour | Цвят на шрифта |
| Colour | Цвят |
| Style / Styles | Стил / Стилове |
| Heading | Заглавие (the styles are Заглавие 1, Заглавие 2) |
| Title | Заглавие (the style); Име (a document's title field) |
| Bullets / Numbering | Водещи символи / Номериране |
| Multilevel List | Списък на много нива |
| List | Списък |
| Indent | Отстъп |
| Alignment / Align Left / Centre / Align Right / Justify | Подравняване / Подравняване отляво / Центриране / Подравняване отдясно / Двустранно подравняване |
| Line spacing | Разредка между редовете |
| Margins | Полета |
| Orientation / Portrait / Landscape | Ориентация / Книжна / Албумна |
| Size (paper) | Размер |
| Columns | Колони |
| Breaks | Прекъсвания |
| Header / Footer | Горен колонтитул / Долен колонтитул |
| Footnote / Endnote | Бележка под линия / Бележка в края |
| Table of Contents | Съдържание |
| Caption | Надпис |
| Bookmark | Показалец |
| Cross-reference | Кръстосана препратка |
| Citation / Bibliography | Цитат / Библиография |
| Index | Индекс |
| Comment / Comments | Коментар / Коментари |
| Track Changes | Проследяване на промените |
| Spelling | Правопис |
| Thesaurus | Синонимен речник |
| Word Count | Брой думи |
| Watermark | Воден знак |
| Page Colour | Цвят на страницата |
| Text Box | Текстово поле |
| WordArt | WordArt |
| Equation | Уравнение |
| Symbol | Символ |
| Hyperlink / Link | Хипервръзка / Връзка |
| Mail Merge | Циркулярни документи |
| Envelopes / Labels | Пликове / Етикети |
| Template | Шаблон |
| Untitled | Без заглавие |

## Workbooks

| English | Bulgarian |
| :-- | :-- |
| Workbook | Работна книга |
| Sheet / Worksheet | Лист / Работен лист |
| Cell / Cells | Клетка / Клетки |
| Row / Rows | Ред / Редове |
| Column / Columns | Колона / Колони |
| Range | Диапазон |
| Formula | Формула |
| Function | Функция |
| Number format | Числов формат |
| Currency / Percentage / Date / Time | Валута / Процент / Дата / Час |
| Freeze Panes | Фиксиране на прозорците |
| Conditional Formatting | Условно форматиране |
| Format as Table | Форматирай като таблица |
| PivotTable | Обобщена таблица |
| Chart | Диаграма |
| Sparklines | Блещукащи линии |
| Slicer | Сегментиращ филтър |
| Data Validation | Проверка на данни |
| Remove Duplicates | Премахни дубликатите |
| Text to Columns | Текст в колони |
| Power Query | Power Query |
| Name box | Поле за име |
| Formula bar | Лента за формули |
| AutoSum | Автосумиране |
| Sum / Average / Count / Min / Max | Сума / Средно / Брой / Мин. / Макс. |

## Presentations

| English | Bulgarian |
| :-- | :-- |
| Presentation | Презентация |
| Slide / Slides | Слайд / Слайдове |
| New Slide | Нов слайд |
| Layout | Оформление |
| Section | Раздел |
| Master | Образец |
| Notes | Бележки |
| Handout | Раздатъчен материал |
| Shape / Shapes | Фигура / Фигури |
| Picture / Pictures | Картина / Картини |
| Fill / Outline | Запълване / Контур |
| Shadow / Glow / Reflection | Сянка / Блясък / Отражение |
| Transition | Преход |
| Animation | Анимация |
| From Beginning / From Current Slide | От началото / От текущия слайд |
| Presenter View | Изглед на представящия |
| Rehearse Timings | Репетиране на времената |
| Video / Audio | Видео / Аудио |

## Mail, calendar, contacts, pictures

| English | Bulgarian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Входящи / Изпратени / Чернови / Изходящи / Нежелана поща / Архив / Кошче |
| Message | Съобщение |
| New message | Ново съобщение |
| Reply / Reply All / Forward | Отговори / Отговори на всички / Препрати |
| Send | Изпрати |
| Attachment | Прикачен файл |
| Account | Акаунт |
| Folder | Папка |
| Search | Търсене (box or pane); Търси (button) |
| Unread / Flagged | Непрочетени / С флаг |
| Rules | Правила |
| Signature | Подпис |
| Event | Събитие |
| Meeting | Събрание |
| Today / Day / Week / Month / Agenda | Днес / Ден / Седмица / Месец / Програма |
| Repeat | Повтаряне |
| Reminder | Напомняне |
| Contact | Контакт |
| Address book | Адресна книга |
| Phone / Email / Address | Телефон / Имейл / Адрес |
| Rotate / Crop / Flip | Завърти / Отрежи / Обърни |
| Rating / Tags | Оценка / Етикети |
| Slideshow | Слайдшоу |
| Brightness / Contrast | Яркост / Контраст |
| Trim / Split | Скъси / Раздели |
| Export video | Експортирай видео |

Crop is Отрежи and Trim is Скъси so that neither is confused with Cut
(Изрежи).

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain polite Bulgarian (вие), not word for word. Keep a sentence's facts (a
number, a name in `{braces}`, a key) exactly. Prefer „Файлът не можа да бъде
отворен.“ over a literal rendering, and „Не е изпратено: {reason}“ over a
calque.

## More recurring terms

| English | Bulgarian |
| :-- | :-- |
| Talk (the app) | Разговори |
| Locker (the app) | Сейф |
| Colour (the app) | Цвят |
| Base (the app) | База |
| Broadcast (the app) | Излъчване |
| Recorder (the app) | Записване |
| Data Files (the database's own format) | Файлове с данни |
| Database | База данни |
| Table | Таблица |
| Record (a row of data) | Запис |
| Field | Поле |
| Design (of a table or database) | Структура |
| Source | Източник |
| Read only | Само за четене |
| Network share | Споделена мрежова папка |
| Web address | Уеб адрес |
| Server address | Адрес на сървъра |
| Password | Парола |
| Key (a secret) | Ключ |
| Stream key | Ключ за поточно предаване |
| Go live | Започни предаване на живо |
| Invitation | Покана |
| Organizer | Организатор |
| Accepted / Declined / Tentative | Приета / Отказана / Под въпрос |
| All day | Цял ден |
| Time zone | Часова зона |
| Occurrence (of a repeating event) | Повторение |
| Room / Booking | Зала / Резервация |
| Busy / Free | Зает / Свободен |
| Availability | Заетост |
| Cc / Bcc | Як / Ск |
| Attach | Прикачи |
| Unpin / Unlink | Откачи / Премахни връзката |
| Recent colours / Standard colours / More colours… | Последни цветове / Стандартни цветове / Още цветове… |
| Clear formatting | Изчисти форматирането |
| Change case | Смяна на регистъра |
| Add to Dictionary | Добави в речника |
| Alt Text | Алтернативен текст |
| Accessibility / Check Accessibility | Достъпност / Провери достъпността |
| Background / Accent | Фон / Акцент |
| Banded Rows / Banded Columns | Редове на ивици / Колони на ивици |
| Bring Forward / Bring to Front | Премести напред / Изнеси най-отпред |
| Borders | Граници |
| Clipboard | Клипборд |
| Blank document / Blank worksheet / Blank presentation | Празен документ / Празен работен лист / Празна презентация |

## Intents and versions

### Voice

Buttons and menu items take the second person singular imperative (Запиши,
Намери получател); the few Office nouns stay nouns (Печат, Отказ). Sentences
address the reader with the polite plural вие, in lower case, and its
imperative (Въведете, изберете). With `{name}` use the aorist, which shows no
gender, never the perfect participle.

### By intent

| Intent | How this language phrases it | English | Bulgarian |
| :-- | :-- | :-- | :-- |
| action on a button | Singular imperative, object after it, no article | Mark Text | Маркирай текст |
| action in a menu | The same imperative; ellipsis when it opens a dialog | Close Window | Затвори прозореца |
| name | Noun phrase without the article, no full stop | Horizontal text | Хоризонтален текст |
| heading | Noun phrase; на + the owner with its article | Folder settings | Настройки на папката |
| state while working | Verbal noun and the ellipsis | Finding suggestions… | Търсене на предложения… |
| state when done | е + past passive participle agreeing with a named noun | Link copied. Paste it anywhere. | Връзката е копирана. Поставете я където и да е. |
| question | Да се + verb + ли ...?, `{name}` after a noun with its article | Remove {name}? | Да се премахне ли контактът {name}? |
| advice | Polite plural imperative; за да for the purpose | Sign in to Talk to accept. | Влезте в Разговори, за да приемете. |
| explain | Noun phrase or plain sentence, full stop as in the English | Bullet character. | Водещ символ. |
| warning | Plain statement with не може | Cannot be undone. | Това действие не може да бъде отменено. |
| error: cannot | Не можа да се + verb (aorist, no gender) | Could not send: {why}. | Не можа да се изпрати: {why}. |
| error: failed | Неуспешно + verbal noun | Recognition failed. | Неуспешно разпознаване на текст. |
| error: not-found | Липсва (no agreement), or не е намерен agreeing with its noun | Picture file is missing | Файлът на картината липсва |
| error: not-enough | Твърде голям agreeing, or Няма достатъчно + noun | File too large for a message. | Файлът е твърде голям за съобщение. |
| error: unavailable | Не е наличен agreeing with its noun | Speech is not available. | Синтезът на реч не е наличен. |
| error: not-allowed | Няма разрешение за + noun | Camera not allowed. | Няма разрешение за камерата. |
| error: invalid | „...“ не е + noun | "{text}" is not a range | „{text}“ не е диапазон |
| error: other | Plain statement, or the polite imperative that states the rule | Keep at least one worksheet visible. | Оставете видим поне един работен лист. |
| sample | Natural Bulgarian content; dates and numbers as the region writes them | free on 12 March? | свободни на 12 март? |

The suite has no sample label; the sample row uses the
suite's calendar sample that the other glossaries quote.

### Short, medium and complete

- Medium is the version the pack shows today. Write it first, then shorten
  and extend from it, keeping the same words for the same things.
- Short: the imperative or the key noun goes first. Drop си, вашия, този and
  phrases of place or manner (в списъка, на диска, сега). Drop the definite
  article only where the noun stays clear without it. Keep every placeholder,
  key name and format code.
- Abbreviate only when no shorter Office word fits: cut after a consonant
  and end with a full stop (макс., мин., бр., стр., напр.). Unit symbols
  take no full stop (мм, см, с). Never abbreviate a verb, an app or brand
  name, or any word in an error, question or warning.
- A counted label keeps both forms (one, other) and the count form of a
  masculine noun. Short drops the verb beside the count and keeps `{count}`
  with the noun: `one: {count} файл`, `other: {count} файла`. With a
  standard abbreviation both forms may be the same text: `{count} стр.`
- Complete: add the object and where it goes, as the English complete does,
  and end a sentence with a full stop. Where the English complete asks "Do
  you want to ...?", use Искате ли да + present: Искате ли да премахнете
  контакта {name} от контактите си?
- Tooltips and screen readers read complete, so it must make sense alone.

| Example | Version | English | Bulgarian |
| :-- | :-- | :-- | :-- |
| 1 | short | Find | Намери |
| 1 | medium | Find Recipient | Намери получател |
| 1 | complete | Find a recipient in the list | Намери получател в списъка |
| 2 | short | Delete version of {name}? | Да се изтрие ли версия на {name}? |
| 2 | medium | Delete this version of {name}? | Да се изтрие ли тази версия на {name}? |
| 2 | complete | Delete this version of {name} from the Locker? | Да се изтрие ли тази версия на {name} от Сейф? |
| 3 | short | Not enough disk space to record. | Няма място за запис. |
| 3 | medium | There is not enough space on the disk to record. | На диска няма достатъчно място за запис. |
| 3 | complete | There is not enough space on the disk to record. | На диска няма достатъчно място за запис. |

### Punctuation and marks

- Ellipsis: the single character … with no space before it, on a command
  that opens a dialog or asks for more (Запиши като…, Още цветове…), and on a
  state while working (Търсене на предложения…). Not on a command that acts
  at once.
- Colon, question mark and exclamation mark: no space before, one ordinary
  space after: Организатор: {name}. Never a no-break space anywhere, also not
  between a number and its unit.
- Quotation marks: „…“ outside, ‚…‘ inside. The English straight quotes
  become „…“, also around a placeholder: „{text}“.
- Capitals: sentence case on buttons, menu items, tabs, headings and window
  titles; only the first word and names take a capital.
- Full stops: an error, warning or message that is a sentence ends with a
  full stop, as the English does; a label the English leaves without one
  (Picture file is missing) stays without one. Buttons, menu items, names
  and headings take none. No exclamation marks in errors.
- No dash of any kind between words: a colon or a comma takes its place.

### Access keys

- `&` goes before a Cyrillic letter of the Bulgarian word, as Bulgarian
  Office and Windows do: &Файл, &Начало, &Редактирай, Запиши &като…. The
  `(&X)` form with the English letter after the word is not used for
  Bulgarian.
- Prefer the first letter. If another item in the same menu, ribbon tab or
  dialog has it, take a later consonant that stands out. Each access key is
  unique within one menu, tab or dialog.
- Never put `&` before a placeholder, a space, a digit or the letters ь, ъ,
  й. A label with no `&` in the English gets none.
