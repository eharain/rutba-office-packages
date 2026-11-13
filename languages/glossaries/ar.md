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
