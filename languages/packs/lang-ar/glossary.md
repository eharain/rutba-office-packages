# Arabic glossary for Rutba Office

The words the Arabic catalogue (`ar.js`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Arabic, in Modern Standard
Arabic, and plain standard Arabic where Office has no word.

**This translation was drafted by machine and needs a native speaker's
review** before it is called finished. A reviewer changes a word here first,
then in `ar.js`, so the two stay in step.

## How the catalogue is written

- **Commands** take the verbal noun, as Office in Arabic does: حفظ (Save),
  فتح (Open), إغلاق (Close), إدراج (Insert), not the imperative.
- **Sentences** (tooltips, messages, questions) are full Modern Standard
  Arabic, addressing the reader directly as Office does (انقر، اختر، أدخل).
- **Placeholders** such as `{name}` and `{count}` stay exactly as written, in
  braces, untranslated; Arabic word order moves them where Arabic wants them.
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2.
- **File extensions, formats and codes** stay as they are: .docx, PDF, CSV,
  `=SUM(ABOVE)`, `dd/mm/yyyy`.
- **Brand and product names** stay in Latin letters: Rutba Office, Word,
  Excel, PowerPoint, Office, Windows, Google, Microsoft, iCloud, SmartArt,
  WordArt, PivotTable, Power Query.
- **Punctuation**: the Arabic comma ، semicolon ؛ and question mark ؟; a
  sentence ends with a full stop (.); the ellipsis … stays at the end of a
  command that opens a dialog, as in English.
- **Counts** use Arabic's six plural forms, chosen by `Intl.PluralRules`:
  `zero`, `one`, `two`, `few` (3 to 10), `many` (11 to 99) and `other` (100
  and over, and fractions). The noun follows Arabic's number agreement:

  ```js
  '{count} slide': {
    zero: 'لا توجد شرائح',
    one: 'شريحة واحدة',
    two: 'شريحتان',
    few: '{count} شرائح',
    many: '{count} شريحة',
    other: '{count} شريحة',
  }
  ```

  `{count}` may be left out of `zero`, `one` and `two` where Arabic says the
  number in words; every other placeholder is kept in every form.
- **Numbers** are written with the digits 0 to 9 in the catalogue; the window
  shows them in Western or Arabic-Indic digits by the digits setting.

## The apps

| English | Arabic |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | المستندات |
| Worksheets | أوراق العمل |
| Presentations | العروض التقديمية |
| Mail | البريد |
| Calendar | التقويم |
| Contacts | جهات الاتصال |
| Pictures | الصور |
| Image (the editor) | محرر الصور |
| Video | الفيديو |
| Home (the launcher) | الرئيسية |

## Tabs and frame

| English | Arabic |
| :-- | :-- |
| File | ملف |
| Home | الصفحة الرئيسية |
| Insert | إدراج |
| Draw | رسم |
| Design | تصميم |
| Layout | تخطيط |
| Page Layout | تخطيط الصفحة |
| References | مراجع |
| Mailings | مراسلات |
| Review | مراجعة |
| View | عرض |
| Help | تعليمات |
| Formulas | الصيغ |
| Data | بيانات |
| Automate | أتمتة |
| Transitions | انتقالات |
| Animations | حركات |
| Slide Show | عرض الشرائح |
| Record | تسجيل |
| Table Design | تصميم الجدول |
| Table Layout | تخطيط الجدول |
| Shape Format | تنسيق الشكل |
| Picture Format | تنسيق الصورة |
| Ribbon | الشريط |
| Pane | جزء |
| Status bar | شريط المعلومات |
| Dialog | مربع حوار |
| Settings | الإعدادات |
| Language | اللغة |
| Theme | النسق |

## Commands

| English | Arabic |
| :-- | :-- |
| New | جديد |
| Open | فتح |
| Save | حفظ |
| Save As | حفظ باسم |
| Save as Template | حفظ كقالب |
| Close | إغلاق |
| Print | طباعة |
| Export | تصدير |
| Import | استيراد |
| Share | مشاركة |
| Undo | تراجع |
| Redo | إعادة |
| Cut | قص |
| Copy | نسخ |
| Paste | لصق |
| Paste Special | لصق خاص |
| Delete | حذف |
| Remove | إزالة |
| Rename | إعادة تسمية |
| Select All | تحديد الكل |
| Find | بحث |
| Replace | استبدال |
| Go To | انتقال إلى |
| Insert | إدراج |
| Apply | تطبيق |
| Apply to All | تطبيق على الكل |
| OK | موافق |
| Cancel | إلغاء الأمر |
| Yes / No | نعم / لا |
| Done | تم |
| Next / Previous | التالي / السابق |
| Back | رجوع |
| Refresh | تحديث |
| Update | تحديث |
| Accept / Reject | قبول / رفض |
| Sort | فرز |
| Filter | تصفية |
| Group / Ungroup | تجميع / فك التجميع |
| Merge / Split | دمج / تقسيم |
| Zoom In / Zoom Out | تكبير / تصغير |
| Full screen | ملء الشاشة |
| Minimise / Maximise / Restore | تصغير / تكبير / استعادة |
| Expand / Collapse | توسيع / طي |
| Browse | استعراض |
| Add | إضافة |
| Edit | تحرير |
| Reset | إعادة تعيين |
| Clear | مسح |
| Show / Hide | إظهار / إخفاء |
| More | المزيد |
| None | بلا |
| Automatic | تلقائي |

## Text and documents

| English | Arabic |
| :-- | :-- |
| Document | مستند |
| Page | صفحة |
| Paragraph | فقرة |
| Line | سطر |
| Word (a word) | كلمة |
| Character | حرف |
| Font | الخط |
| Font size | حجم الخط |
| Bold / Italic / Underline | غامق / مائل / تسطير |
| Strikethrough | يتوسطه خط |
| Subscript / Superscript | منخفض / مرتفع |
| Text highlight colour | لون تمييز النص |
| Font colour | لون الخط |
| Colour | لون |
| Style / Styles | نمط / أنماط |
| Heading | عنوان |
| Title | العنوان |
| Bullets / Numbering | تعداد نقطي / تعداد رقمي |
| Multilevel List | قائمة متعددة المستويات |
| List | قائمة |
| Indent | مسافة بادئة |
| Alignment / Align Left / Centre / Align Right / Justify | محاذاة / محاذاة إلى اليسار / توسيط / محاذاة إلى اليمين / ضبط |
| Line spacing | تباعد الأسطر |
| Margins | الهوامش |
| Orientation / Portrait / Landscape | الاتجاه / عمودي / أفقي |
| Size (paper) | الحجم |
| Columns | أعمدة |
| Breaks | فواصل |
| Header / Footer | رأس الصفحة / تذييل الصفحة |
| Footnote / Endnote | حاشية سفلية / تعليق ختامي |
| Table of Contents | جدول المحتويات |
| Caption | تسمية توضيحية |
| Bookmark | إشارة مرجعية |
| Cross-reference | إسناد ترافقي |
| Citation / Bibliography | اقتباس / ثبت المراجع |
| Index | فهرس |
| Comment / Comments | تعليق / تعليقات |
| Track Changes | تعقب التغييرات |
| Spelling | التدقيق الإملائي |
| Thesaurus | قاموس المرادفات |
| Word Count | عدد الكلمات |
| Watermark | علامة مائية |
| Page Colour | لون الصفحة |
| Text Box | مربع نص |
| WordArt | WordArt |
| Equation | معادلة |
| Symbol | رمز |
| Hyperlink / Link | ارتباط تشعبي / ارتباط |
| Mail Merge | دمج المراسلات |
| Envelopes / Labels | مغلفات / تسميات |
| Template | قالب |
| Untitled | بلا عنوان |

## Workbooks

| English | Arabic |
| :-- | :-- |
| Workbook | مصنف |
| Sheet / Worksheet | ورقة / ورقة عمل |
| Cell / Cells | خلية / خلايا |
| Row / Rows | صف / صفوف |
| Column / Columns | عمود / أعمدة |
| Range | نطاق |
| Formula | صيغة |
| Function | دالة |
| Number format | تنسيق الأرقام |
| Currency / Percentage / Date / Time | عملة / نسبة مئوية / تاريخ / وقت |
| Freeze Panes | تجميد الأجزاء |
| Conditional Formatting | التنسيق الشرطي |
| Format as Table | تنسيق كجدول |
| PivotTable | PivotTable |
| Chart | مخطط |
| Sparklines | خطوط المؤشر |
| Slicer | أداة تقسيم البيانات |
| Data Validation | التحقق من صحة البيانات |
| Remove Duplicates | إزالة التكرارات |
| Text to Columns | نص إلى أعمدة |
| Power Query | Power Query |
| Name box | مربع الاسم |
| Formula bar | شريط الصيغة |
| AutoSum | جمع تلقائي |
| Sum / Average / Count / Min / Max | المجموع / المتوسط / العدد / الحد الأدنى / الحد الأقصى |

## Presentations

| English | Arabic |
| :-- | :-- |
| Presentation | عرض تقديمي |
| Slide / Slides | شريحة / شرائح |
| New Slide | شريحة جديدة |
| Layout | تخطيط |
| Section | مقطع |
| Master | رئيسي (Slide Master: الشريحة الرئيسية) |
| Notes | ملاحظات |
| Handout | نشرة |
| Shape / Shapes | شكل / أشكال |
| Picture / Pictures | صورة / صور |
| Fill / Outline | تعبئة / مخطط تفصيلي |
| Shadow / Glow / Reflection | ظل / توهج / انعكاس |
| Transition | انتقال |
| Animation | حركة |
| From Beginning / From Current Slide | من البداية / من الشريحة الحالية |
| Presenter View | طريقة عرض مقدم العرض |
| Rehearse Timings | تمرين على التوقيتات |
| Video / Audio | فيديو / صوت |

## Mail, calendar, contacts, pictures

| English | Arabic |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | علبة الوارد / العناصر المرسلة / المسودات / علبة الصادر / البريد غير الهام / الأرشيف / المحذوفات |
| Message | رسالة |
| New message | رسالة جديدة |
| Reply / Reply All / Forward | رد / رد على الكل / إعادة توجيه |
| Send | إرسال |
| Attachment | مرفق |
| Account | حساب |
| Folder | مجلد |
| Search | بحث |
| Unread / Flagged | غير مقروءة / موسومة بعلامة |
| Rules | قواعد |
| Signature | توقيع |
| Event | حدث |
| Meeting | اجتماع |
| Today / Day / Week / Month / Agenda | اليوم / يوم / أسبوع / شهر / جدول الأعمال |
| Repeat | تكرار |
| Reminder | تذكير |
| Contact | جهة اتصال |
| Address book | دفتر العناوين |
| Phone / Email / Address | هاتف / بريد إلكتروني / عنوان |
| Rotate / Crop / Flip | تدوير / اقتصاص / قلب |
| Rating / Tags | تقييم / علامات |
| Slideshow | عرض شرائح |
| Brightness / Contrast | السطوع / التباين |
| Trim / Split | اقتطاع / تقسيم |
| Export video | تصدير الفيديو |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
clear standard Arabic, not word for word. Keep a sentence's facts (a number,
a name in `{braces}`, a key) exactly. Prefer "تعذر فتح هذا الملف" over a
literal rendering.

## Intents and versions

### Voice
- Buttons, menu items and names take the verbal noun, as the pack glossary
  (packs/lang-ar/glossary.md) sets: حفظ، فتح، إدراج، البحث عن مستلم. Never
  the imperative on a button.
- Sentences address the reader directly in Modern Standard Arabic, in the
  masculine singular imperative as Microsoft's Arabic style does for a
  reader of either sex: انقر، اختر، أدخل. A complete question uses هل تريد ...؟
- A state takes جارٍ with the verbal noun while working (جارٍ الإنشاء…) and
  تم with the verbal noun when done (تم حذف ...). Agreement follows the noun
  the verb is about, never `{name}`: build the sentence on a known noun.

### By intent
Each row shows the medium version.

| Intent | How this language phrases it | English | Arabic |
| :-- | :-- | :-- | :-- |
| action (button) | Verbal noun, with the definite article on the object | Find Recipient | البحث عن مستلم |
| action (menu) | As a button; a command that opens a dialog ends with … | Close Window | إغلاق النافذة |
| name | Noun phrase, Office's Arabic word where it has one | Uppercase | أحرف كبيرة |
| heading | Construct phrase (idafa), no final mark | Folder settings | إعدادات المجلد |
| state (working) | جارٍ + verbal noun + … | Finding suggestions… | جارٍ البحث عن اقتراحات… |
| state (done) | تم + verbal noun, ends with . when English has a full stop | Link copied. Paste it anywhere. | تم نسخ الارتباط. الصقه في أي مكان. |
| question | Verbal noun + ؟ (medium), هل تريد + verbal noun + ؟ (complete) | Remove {name} from your contacts? | إزالة {name} من جهات الاتصال؟ |
| advice | Imperative, then the purpose with لـ, ends with . | Click elsewhere to break the word there. | انقر في مكان آخر لفصل الكلمة هناك. |
| explain | Plain nominal sentence, ends with . when English does | The bullet character. | حرف التعداد النقطي. |
| warning | لا يمكن ... for cannot; fact first | This cannot be undone. | لا يمكن التراجع عن هذا الإجراء. |
| error: cannot | تعذر + verbal noun | Could not send: {why}. | تعذر الإرسال: {why}. |
| error: failed | فشل + verbal noun | Text recognition failed. | فشل التعرف على النص. |
| error: not-found | تعذر العثور على ...، or ... مفقود for a missing file | That picture's file is missing | ملف هذه الصورة مفقود |
| error: not-enough | لا توجد ... كافية, or ... كبير جدًا, طويل جدًا | There is not enough space on the disk to record. | لا توجد مساحة كافية على القرص للتسجيل. |
| error: unavailable | ... غير متوفر | Speech is not available on this system. | ميزة الكلام غير متوفرة على هذا النظام. |
| error: not-allowed | لم يُسمح بـ ...، or غير مسموح بـ ... | The camera was not allowed. | لم يُسمح باستخدام الكاميرا. |
| error: invalid | «{x}» ليس + noun with tanween, or ... غير صالح | "{text}" is not a range | «{text}» ليس نطاقًا |
| error: other | The rule, as an imperative or a plain statement | Keep at least one worksheet visible. | أبقِ ورقة عمل واحدة على الأقل ظاهرة. |
| sample | Content an Arabic reader would write; months as CLDR names them | free on 12 March? (the suite has no sample label) | هل أنت متفرغ يوم 12 مارس؟ |

### Short, medium and complete
- **Short** keeps the verbal noun first and its object after it. Drop, in
  this order: هذا, هذه, تلك where the control shows the thing; qualifiers and
  في ... phrases; the second sentence; هل تريد of a question. Keep تم and
  جارٍ (the state) and تعذر, فشل, غير متوفر, لم يُسمح, غير صالح (the error kind).
  A short button may keep the bare verbal noun alone (بحث for البحث عن مستلم).
- **Abbreviations**: Arabic labels never abbreviate a word, with a dot or
  without (no ص for صفحة). Allowed: the Latin names and codes the pack
  glossary keeps (PDF, PivotTable, Ctrl+S); units come from `Intl`. Not
  allowed: an English word in place of the glossary's Arabic one, dropping
  the tanween where the pack writes it (نطاقًا).
- **Counted labels** keep all six forms (`zero`, `one`, `two`, `few`, `many`,
  `other`) in every version, each with its own number agreement. Short drops
  the words round the count, never a form; `zero`, `one` and `two` may stay
  words without `{count}` (شريحة واحدة، شريحتان).
- **Complete** adds the object or place English adds (في القائمة، من جهات
  الاتصال), writes the whole sentence, and asks with هل تريد. It may equal
  medium.

| English short | English medium | English complete | Short | Medium | Complete |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Find | Find Recipient | Find a recipient in the list | بحث | البحث عن مستلم | البحث عن مستلم في القائمة |
| Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? | إزالة {name}؟ | إزالة {name} من جهات الاتصال؟ | هل تريد إزالة {name} من جهات الاتصال؟ |
| Could not set up | Could not be set up | This account could not be set up | تعذر الإعداد | تعذر إعداده | تعذر إعداد هذا الحساب |

### Punctuation and marks
- **Right to left**: write every label in reading order, first word first;
  the window lays it out right to left. Write no directional marks (U+200E,
  U+200F, U+061C, U+202A to U+202E, U+2066 to U+2069) in pack text; `Intl`
  adds its own to formatted values, which tests expect. If a placeholder or a
  Latin name shows on the wrong side in review, report the label as a code
  fix rather than adding marks.
- **Placeholders** stay `{name}` in Latin braces, untranslated, where Arabic
  word order wants them. A one-letter preposition (بـ، لـ) never joins a
  placeholder: put a noun between them (باستخدام {name}), never ب{name}.
  Punctuation after a placeholder touches it: {why}.
- **Latin names and codes** (Rutba Office, Word, PDF, Ctrl+S, .docx) stay one
  unbroken left-to-right run, with no Arabic letter attached; put a word
  before them where Arabic needs an article: ملف PDF, never الـPDF.
- **Marks**: comma ، , semicolon ؛ , question mark ؟ ; a sentence ends with
  the ordinary full stop (.), as the pack glossary sets. Colon and
  exclamation mark are : and ! with no space before them, and one space
  after the colon. Parentheses are typed ( then ), in reading order; the
  window mirrors them.
- **Quotation marks** are « before and » after, typed in that order, as the
  pack writes them round placeholders and names: «{text}». A few pack labels
  still use straight quotes; new versions use « ».
- **Arrows** in a path follow the reading direction: English → becomes ←
  (إدراج ← إشارة مرجعية).
- **Ellipsis**: one … at the end of a command that opens a dialog and of a
  working state, typed last; it shows at the left.
- **Capitalisation**: Arabic has none; Latin names keep their own case.
- **Full stops**: a version whose English ends with a full stop ends with .;
  one whose English does not (buttons, titles, fragment errors) has none.
- **Spelling**: تعذر without the shadda, as Office writes it; the pack has
  both تعذر and تعذّر, and new versions use تعذر.
- **No long dash**: some of the pack's tooltips still join a name and its
  explanation with a long dash; every new version writes a colon instead:
  معادلة: انقر نقرًا مزدوجًا لتحريرها

### Access keys
- Arabic has no Latin letters, so the key goes after the word as (&X), with
  the English letter and no space before: &Edit → تحرير(&E); &File →
  ملف(&F); &View → عرض(&V). In right-to-left layout it shows at the left.
  Arabic Windows once marked an Arabic letter instead; the suite does not.
- Before an ellipsis, never after it: Save &As… → حفظ باسم(&A)….
- The pack's menu labels today drop the & entirely (تحرير); every new version
  restores the (&X), the same in short, medium and complete.

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

- In a sentence (a medium or a complete that is a sentence or a phrase), write the product's local name with its English name beside it in brackets, the first time the label names it: رتبة أوفيس (Rutba Office). A second mention in the same label takes the local name alone.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the glossary gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay in Latin letters, as written.

| English | Arabic |
| :-- | :-- |
| Rutba | رتبة |
| Rutba Office | رتبة أوفيس |
| Talk, Rutba Talk | توك، رتبة توك |
| Studio | استوديو |
| Recorder | المسجّل |
| Locker | الخزانة |
| Data Files | ملفات البيانات |
| Other Rutba apps | the word the pack already uses, with the English beside it |
