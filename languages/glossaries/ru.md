# Russian glossary for Rutba Office

The words the Russian pack (`lang-ru`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Russian (ru-RU) where those
have a word, then LibreOffice, then plain everyday Russian.

**This glossary was drafted by machine and needs a native speaker's review**
before the pack is called finished. A reviewer changes a word here first,
then in the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the infinitive, as
  Russian Office does: Сохранить (Save), Открыть (Open), Закрыть (Close),
  Вставить (Insert), Сохранить как… (Save As…). Some Office commands are
  nouns and stay nouns: Печать (Print), Экспорт (Export), Обзор… (Browse…),
  Отмена (Cancel).
- **Instructions inside sentences** (tooltips, help text, steps) use the
  polite plural imperative: Откройте «Параметры», затем выберите «Трансляция».
- **The reader** is addressed formally (вы, ваш), written in lower case
  inside a sentence, as current Microsoft does: Добавлено в ваш календарь.
  A capital only where the word starts the sentence: Вы можете изменить это
  позже. Prefer impersonal wording where it reads naturally: Не удалось
  открыть файл.
- **Capitals**: sentence case everywhere. Only the first word and names take a
  capital, even where the English uses title case: Align Selected Objects ->
  Выровнять выделенные объекты; Paste Special -> Специальная вставка.
- **Tab and group names** are nouns, as in Office: Главная, Вставка,
  Рецензирование, Вид, Разметка страницы, Буфер обмена.
- **Placeholders** such as `{name}`, `{count}`, `{0}` stay exactly as
  written, in braces, untranslated, wherever Russian word order puts them.
- **Cases with placeholders**: a placeholder cannot decline, so build the
  sentence so that it stays in the nominative, after a noun that carries the
  case, or after a colon: Таблица {name} уже существует; Приглашение от
  пользователя {name}; Организатор: {name}; Удалить таблицу {name}?
- **Gender of `{name}`**: the gender of a person or thing in a placeholder is
  unknown, so avoid past-tense verbs and adjectives agreeing with it. Use a
  colon or a neutral noun: {name} accepted -> {name}: принято, or Ответ от
  {name}: принято; {name} declined -> {name}: отклонено.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2,
  Создать событие (Ctrl+N).
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, AAC, H.264, `=SUM(ABOVE)`, `dd/mm/yyyy`. Function names stay
  in English: SUM, VLOOKUP.
- **Brand and product names** stay in Latin letters, undeclined: Rutba
  Office, Word, Excel, PowerPoint, Outlook, Windows, Google, Microsoft,
  iCloud, YouTube Studio, LinkedIn Live Studio, WordArt, SmartArt, Power Query.
  Where the grammar needs a case, put a noun before the brand: в приложении
  Outlook, на платформе Twitch.
- **App names** of the suite are translated as in the table below and
  written with a capital, in «» when they name the app inside a sentence:
  Добавьте учетную запись в «Почте». Prefer a noun before them when a case
  would be awkward: в приложении «Контакты».
- **Punctuation**: Russian quotation marks «», with „“ for quotes inside
  quotes: Нажмите «Сохранить». The ellipsis … stays at the end of a command
  that opens a dialog: Другие цвета…
- **No em dash.** Russian uses the dash a lot; this pack does not. Where the
  English has an em dash, or where Russian would put one, write a colon, a
  comma, parentheses or a new sentence: Чередующиеся строки: каждая вторая
  строка затенена. A paper size with its measure goes in parentheses:
  B5 (176 × 250 мм). No en dash with spaces as a dash either; an en dash in a
  range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only,
  including before units: 15 мин, 250 мм, 24 ч.
- **Letter ё**: write е, as Microsoft does (Удаленные, Учетная запись), and
  use ё only where a word would otherwise be misread (всё in «всё равно»).
- **Counts** use Russian's four plural forms, `one`, `few`, `many`, `other`
  (one = 1, 21, 31…; few = 2 to 4, 22 to 24…; many = 0, 5 to 20, 25 to 30…;
  other = fractions such as 1,5), every form written in full with `{count}`:
  `one: {count} слайд`, `few: {count} слайда`, `many: {count} слайдов`,
  `other: {count} слайда`. A verb or adjective beside the count agrees with
  it: `one: Выбран {count} файл`, `few: Выбрано {count} файла`,
  `many: Выбрано {count} файлов`, `other: Выбрано {count} файла`.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, space between thousands, 12.03.2026), so a label never spells out a
  number or date format of its own. Keep a format code from the English
  as written.
- **Abbreviations** of units follow Russian usage without a full stop: мм,
  с (seconds), мин, ч; «Около {seconds} с» for "About {seconds} s".
- **Length**: Russian runs longer than English. Keep ribbon buttons, tabs and
  menu items short, using the Office word even if a longer phrase would be
  more exact: Статистика (Word Count), Регистр (Change case).

## The apps

| English | Russian |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Документы |
| Worksheets | Таблицы |
| Presentations | Презентации |
| Mail | Почта |
| Calendar | Календарь |
| Contacts | Контакты |
| Pictures | Фотографии |
| Image (the editor) | Изображение |
| Video | Видео |
| Home (the launcher) | Главная |
| Talk | Разговоры |
| Locker | Сейф |
| Colour | Цвет |
| Base | База |
| Broadcast | Трансляция |
| Recorder | Средство записи |

## Tabs and frame

| English | Russian |
| :-- | :-- |
| File | Файл |
| Home | Главная |
| Insert | Вставка |
| Draw | Рисование |
| Design | Конструктор |
| Layout | Макет |
| Page Layout | Разметка страницы |
| References | Ссылки |
| Mailings | Рассылки |
| Review | Рецензирование |
| View | Вид |
| Help | Справка |
| Formulas | Формулы |
| Data | Данные |
| Automate | Автоматизация |
| Transitions | Переходы |
| Animations | Анимация |
| Slide Show | Слайд-шоу |
| Record | Запись |
| Table Design | Конструктор таблиц |
| Table Layout | Макет таблицы |
| Shape Format | Формат фигуры |
| Picture Format | Формат рисунка |
| Ribbon | Лента |
| Pane | Область |
| Status bar | Строка состояния |
| Dialog | Диалоговое окно |
| Settings | Параметры |
| Language | Язык |
| Theme | Тема |

## Commands

| English | Russian |
| :-- | :-- |
| New | Создать |
| Open | Открыть |
| Save | Сохранить |
| Save As | Сохранить как |
| Save as Template | Сохранить как шаблон |
| Close | Закрыть |
| Print | Печать |
| Export | Экспорт |
| Import | Импорт |
| Share | Поделиться |
| Undo | Отменить |
| Redo | Вернуть |
| Cut | Вырезать |
| Copy | Копировать |
| Paste | Вставить |
| Paste Special | Специальная вставка |
| Delete | Удалить |
| Remove | Удалить (Убрать where nothing is destroyed: Убрать из календаря) |
| Rename | Переименовать |
| Select All | Выделить все |
| Find | Найти |
| Replace | Заменить |
| Go To | Перейти |
| Insert | Вставить |
| Apply | Применить |
| Apply to All | Применить ко всем |
| OK | ОК (Cyrillic letters) |
| Cancel | Отмена |
| Yes / No | Да / Нет |
| Done | Готово |
| Next / Previous | Далее / Назад (steps); Следующий / Предыдущий (items) |
| Back | Назад |
| Refresh | Обновить |
| Update | Обновить |
| Accept / Reject | Принять / Отклонить |
| Sort | Сортировка |
| Filter | Фильтр |
| Group / Ungroup | Группировать / Разгруппировать |
| Merge / Split | Объединить / Разделить |
| Zoom In / Zoom Out | Увеличить / Уменьшить |
| Full screen | Во весь экран |
| Minimise / Maximise / Restore | Свернуть / Развернуть / Восстановить |
| Expand / Collapse | Развернуть / Свернуть |
| Browse | Обзор |
| Add | Добавить |
| Edit | Изменить |
| Reset | Сбросить |
| Clear | Очистить |
| Show / Hide | Показать / Скрыть |
| More | Еще |
| None | Нет |
| Automatic | Автоматически |

## Text and documents

| English | Russian |
| :-- | :-- |
| Document | Документ |
| Page | Страница |
| Paragraph | Абзац |
| Line | Строка |
| Word (a word) | Слово |
| Character | Знак |
| Font | Шрифт |
| Font size | Размер шрифта |
| Bold / Italic / Underline | Полужирный / Курсив / Подчеркнутый |
| Strikethrough | Зачеркнутый |
| Subscript / Superscript | Подстрочный знак / Надстрочный знак |
| Text highlight colour | Цвет выделения текста |
| Font colour | Цвет шрифта |
| Colour | Цвет |
| Style / Styles | Стиль / Стили |
| Heading | Заголовок |
| Title | Название |
| Bullets / Numbering | Маркеры / Нумерация |
| Multilevel List | Многоуровневый список |
| List | Список |
| Indent | Отступ |
| Alignment / Align Left / Centre / Align Right / Justify | Выравнивание / По левому краю / По центру / По правому краю / По ширине |
| Line spacing | Междустрочный интервал |
| Margins | Поля |
| Orientation / Portrait / Landscape | Ориентация / Книжная / Альбомная |
| Size (paper) | Размер |
| Columns | Колонки |
| Breaks | Разрывы |
| Header / Footer | Верхний колонтитул / Нижний колонтитул |
| Footnote / Endnote | Сноска / Концевая сноска |
| Table of Contents | Оглавление |
| Caption | Название объекта |
| Bookmark | Закладка |
| Cross-reference | Перекрестная ссылка |
| Citation / Bibliography | Ссылка на источник / Список литературы |
| Index | Предметный указатель |
| Comment / Comments | Комментарий / Комментарии |
| Track Changes | Исправления |
| Spelling | Орфография |
| Thesaurus | Тезаурус |
| Word Count | Статистика |
| Watermark | Подложка |
| Page Colour | Цвет страницы |
| Text Box | Текстовое поле |
| WordArt | WordArt |
| Equation | Уравнение |
| Symbol | Символ |
| Hyperlink / Link | Гиперссылка / Ссылка |
| Mail Merge | Слияние |
| Envelopes / Labels | Конверты / Наклейки |
| Template | Шаблон |
| Untitled | Без названия |

## Workbooks

| English | Russian |
| :-- | :-- |
| Workbook | Книга |
| Sheet / Worksheet | Лист / Лист |
| Cell / Cells | Ячейка / Ячейки |
| Row / Rows | Строка / Строки |
| Column / Columns | Столбец / Столбцы |
| Range | Диапазон |
| Formula | Формула |
| Function | Функция |
| Number format | Числовой формат |
| Currency / Percentage / Date / Time | Денежный / Процентный / Дата / Время |
| Freeze Panes | Закрепить области |
| Conditional Formatting | Условное форматирование |
| Format as Table | Форматировать как таблицу |
| PivotTable | Сводная таблица |
| Chart | Диаграмма |
| Sparklines | Спарклайны |
| Slicer | Срез |
| Data Validation | Проверка данных |
| Remove Duplicates | Удалить дубликаты |
| Text to Columns | Текст по столбцам |
| Power Query | Power Query |
| Name box | Поле имени |
| Formula bar | Строка формул |
| AutoSum | Автосумма |
| Sum / Average / Count / Min / Max | Сумма / Среднее / Количество / Минимум / Максимум |

## Presentations

| English | Russian |
| :-- | :-- |
| Presentation | Презентация |
| Slide / Slides | Слайд / Слайды |
| New Slide | Создать слайд |
| Layout | Макет |
| Section | Раздел |
| Master | Образец |
| Notes | Заметки |
| Handout | Выдача |
| Shape / Shapes | Фигура / Фигуры |
| Picture / Pictures | Рисунок / Рисунки |
| Fill / Outline | Заливка / Контур |
| Shadow / Glow / Reflection | Тень / Свечение / Отражение |
| Transition | Переход |
| Animation | Анимация |
| From Beginning / From Current Slide | С начала / С текущего слайда |
| Presenter View | Режим докладчика |
| Rehearse Timings | Настройка времени |
| Video / Audio | Видео / Звук |

## Mail, calendar, contacts, pictures

| English | Russian |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Входящие / Отправленные / Черновики / Исходящие / Нежелательная почта / Архив / Корзина |
| Message | Сообщение |
| New message | Новое сообщение |
| Reply / Reply All / Forward | Ответить / Ответить всем / Переслать |
| Send | Отправить |
| Attachment | Вложение |
| Account | Учетная запись |
| Folder | Папка |
| Search | Поиск |
| Unread / Flagged | Непрочитанные / С флажком |
| Rules | Правила |
| Signature | Подпись |
| Event | Событие |
| Meeting | Собрание |
| Today / Day / Week / Month / Agenda | Сегодня / День / Неделя / Месяц / Повестка дня |
| Repeat | Повторять |
| Reminder | Напоминание |
| Contact | Контакт |
| Address book | Адресная книга |
| Phone / Email / Address | Телефон / Электронная почта / Адрес |
| Rotate / Crop / Flip | Повернуть / Обрезать / Отразить |
| Rating / Tags | Оценка / Теги |
| Slideshow | Слайд-шоу |
| Brightness / Contrast | Яркость / Контрастность |
| Trim / Split | Обрезать / Разделить |
| Export video | Экспорт видео |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain polite Russian, not word for word. Keep a sentence's facts (a number, a
name in `{braces}`, a key) exactly. Prefer impersonal forms such as
«Не удалось открыть файл» or «Не отправлено: {reason}» over a literal
rendering, and keep the English pattern "Not sent: …" as a short word and a
colon.

## More recurring terms

| English | Russian |
| :-- | :-- |
| Table (database) | Таблица |
| Record (database) | Запись |
| Field | Поле |
| Design (of a table or database) | Структура |
| Data Files | Файлы данных |
| Read only | Только для чтения |
| Source | Источник |
| Network share | Сетевая папка |
| Web address | Веб-адрес |
| Server address | Адрес сервера |
| Protected store (of this computer) | Защищенное хранилище |
| Key / Token | Ключ / Токен |
| Password | Пароль |
| Unlink | Отменить связь |
| Pin / Unpin | Закрепить / Открепить |
| Stream / Stream key | Трансляция / Ключ трансляции |
| Go live | Начать трансляцию |
| Platform | Платформа |
| Invitation / Invite | Приглашение / Пригласить |
| Accepted / Declined / Tentative | Принято / Отклонено / Под вопросом |
| Organizer | Организатор |
| Room / Room mailbox | Помещение / Почтовый ящик помещения |
| Mailbox | Почтовый ящик |
| All day | Весь день |
| Busy / Free | Занят / Свободно |
| Time zone | Часовой пояс |
| Occurrence (of a repeating event) | Повторение |
| Cancellation | Отмена |
| Availability | Занятость |
| Start time / End time | Время начала / Время окончания |
| Recent colours / Standard colours / More colours… | Последние цвета / Стандартные цвета / Другие цвета… |
| Accessibility / Check Accessibility | Специальные возможности / Проверить специальные возможности |
| Alt Text | Замещающий текст |
| Blank document / Blank presentation / Blank worksheet | Новый документ / Новая презентация / Новый лист |
| Clipboard | Буфер обмена |
| Background | Фон |
| Borders | Границы |
| Bring Forward / Bring to Front | Переместить вперед / На передний план |
| Banded Rows / Banded Columns | Чередующиеся строки / Чередующиеся столбцы |
| Arrange | Упорядочить |
| Clear formatting / Change case | Очистить формат / Регистр |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

Buttons and menu items take the infinitive (Сохранить, Найти получателя); the
few Office nouns stay nouns (Печать, Отмена). Instructions inside sentences
take the polite plural imperative (Откройте, выберите). The reader is вы, in
lower case inside a sentence; prefer impersonal wording (Не удалось ...) and
never a past tense or adjective that agrees with `{name}`.

### By intent

| Intent | How this language phrases it | English | Russian |
| :-- | :-- | :-- | :-- |
| action on a button | Infinitive, object in the accusative after it | Mark Text | Отметить текст |
| action in a menu | Infinitive as on a button; ellipsis when it opens a dialog | Close Window | Закрыть окно |
| name | Noun phrase in the nominative, no full stop | Horizontal text | Горизонтальный текст |
| heading | Noun phrase, owner in the genitive after it, no full stop | Folder settings | Параметры папки |
| state while working | Verbal noun and the ellipsis | Finding suggestions… | Поиск вариантов… |
| state when done | Short participle agreeing with a named noun, or neuter impersonal (Скопировано.) | Link copied. Paste it anywhere. | Ссылка скопирована. Вставьте ее в любое место. |
| question | Infinitive question; `{name}` after a noun that carries the case | Remove {name}? | Удалить контакт {name}? |
| advice | Polite imperative; чтобы for the purpose | Sign in to Talk to accept. | Чтобы принять, войдите в «Разговоры». |
| explain | Noun phrase or plain sentence, full stop as in the English | Bullet character. | Знак маркера. |
| warning | Plain statement with нельзя or будет | Cannot be undone. | Это действие нельзя отменить. |
| error: cannot | Не удалось + infinitive | Could not send: {why}. | Не удалось отправить: {why}. |
| error: failed | Не удалось + infinitive, as for cannot | Recognition failed. | Не удалось распознать текст. |
| error: not-found | Отсутствует (no agreement), or не найден agreeing with its noun | Picture file is missing | Файл рисунка отсутствует |
| error: not-enough | Недостаточно + genitive, or слишком большой | File too large for a message. | Файл слишком большой для сообщения. |
| error: unavailable | Недоступен agreeing with its noun | Speech is not available. | Синтез речи недоступен. |
| error: not-allowed | Нет доступа к + dative, or Нет разрешения на + accusative | Camera not allowed. | Нет доступа к камере. |
| error: invalid | «...» не является + instrumental | "{text}" is not a range | «{text}» не является диапазоном |
| error: other | Plain statement, or the polite imperative that states the rule | Keep at least one worksheet visible. | Оставьте видимым хотя бы один лист. |
| sample | Natural Russian content; dates and numbers as the region writes them | free on 12 March? | свободны 12 марта? |

The suite has no sample label; the sample row uses the
suite's calendar sample that the other glossaries quote.

### Short, medium and complete

- Medium is the version the pack shows today. Write it first, then shorten
  and extend from it, keeping the same words for the same things.
- Short: the infinitive or the key noun goes first. Drop этот, ваш, все,
  and phrases of place or manner (в списке, на диске, сейчас). Keep every
  placeholder, key name and format code.
- Abbreviate only when no shorter Office word fits: cut after a consonant
  and before a vowel, and end with a full stop (макс., доп., стр.). Unit
  symbols take no full stop (мм, с, мин, ч). Never abbreviate a verb, an
  app or brand name, or any word in an error, question or warning.
- A counted label keeps all four forms (one, few, many, other). Short drops
  the verb or adjective beside the count and keeps `{count}` with the noun in
  each form: `one: {count} файл`, `few: {count} файла`, `many: {count}
  файлов`, `other: {count} файла`. With a standard abbreviation the four
  forms may be the same text: `{count} стр.`
- Complete: add the object and where it goes, as the English complete does,
  and end a sentence with a full stop. A question stays an infinitive
  question with its object added; "Do you want to ...?" becomes the same
  infinitive question, never Вы действительно хотите ...?
- Tooltips and screen readers read complete, so it must make sense alone.

| Example | Version | English | Russian |
| :-- | :-- | :-- | :-- |
| 1 | short | Find | Найти |
| 1 | medium | Find Recipient | Найти получателя |
| 1 | complete | Find a recipient in the list | Найти получателя в списке |
| 2 | short | Delete version of {name}? | Удалить версию {name}? |
| 2 | medium | Delete this version of {name}? | Удалить эту версию {name}? |
| 2 | complete | Delete this version of {name} from the Locker? | Удалить эту версию {name} из «Сейфа»? |
| 3 | short | Not enough disk space to record. | Недостаточно места для записи. |
| 3 | medium | There is not enough space on the disk to record. | Недостаточно места на диске для записи. |
| 3 | complete | There is not enough space on the disk to record. | Недостаточно места на диске для записи. |

### Punctuation and marks

- Ellipsis: the single character … with no space before it, on a command
  that opens a dialog or asks for more (Сохранить как…, Другие цвета…), and
  on a state while working (Поиск вариантов…). Not on a command that acts at
  once.
- Colon, question mark and exclamation mark: no space before, one ordinary
  space after: Организатор: {name}. Never a no-break space anywhere, also not
  before a unit.
- Quotation marks: «» outside, „“ inside. The English straight quotes become
  «», also around a placeholder: «{text}».
- Capitals: sentence case on buttons, menu items, tabs, headings and window
  titles; only the first word and names take a capital.
- Full stops: an error, warning or message that is a sentence ends with a
  full stop, as the English does; a label the English leaves without one
  (Picture file is missing) stays without one. Buttons, menu items, names
  and headings take none. No exclamation marks in errors.
- No dash of any kind between words: a colon or a comma takes its place.

### Access keys

- `&` goes before a Cyrillic letter of the Russian word, as Russian Office
  and Windows do: &Файл, &Вид, &Изменить, Сохранить &как…. The `(&X)` form
  with the English letter after the word is not used for Russian.
- Prefer the first letter. If another item in the same menu, ribbon tab or
  dialog has it, take a later consonant that stands out. Each access key is
  unique within one menu, tab or dialog.
- Never put `&` before a placeholder, a space, a digit or the letters й, ъ,
  ы, ь. A label with no `&` in the English gets none.
