## Intents and versions

### Voice
- The reader is آپ, as packs/lang-ur/glossary.md sets. Commands and
  instructions take the polite imperative in یں (کھولیں، محفوظ کریں،
  کلک کریں), never the bare stem (کھول) or the familiar form (کھولو).
- A state uses the passive: جا رہا ہے while working (بنایا جا رہا ہے…), گیا
  or ہو گیا when done (حذف کر دیا گیا). A complete question uses
  کیا آپ ... چاہتے ہیں؟
- Verbs agree in gender. When `{name}` could be a man, a woman or a thing,
  build the sentence on کو or on a known noun, so the verb takes the default
  masculine: {name} کو ہٹا دیا گیا۔

### By intent
Each row shows the medium version.

| Intent | How this language phrases it | English | Urdu |
| :-- | :-- | :-- | :-- |
| action (button) | Object, then verb in کریں or یں | Find Recipient | وصول کنندہ تلاش کریں |
| action (menu) | As a button; a command that opens a dialog ends with … | Close Window | ونڈو بند کریں |
| name | Noun phrase, Office's word where it has one | Uppercase | بڑے حروف |
| heading | Noun phrase with کی or کا, no final mark | Folder settings | فولڈر کی ترتیبات |
| state (working) | Passive with جا رہا ہے or جا رہی ہیں, then … | Finding suggestions… | تجاویز تلاش کی جا رہی ہیں… |
| state (done) | Past with ہو گیا or کر دیا گیا, ends with ۔ | Link copied. Paste it anywhere. | لنک کاپی ہو گیا۔ اسے کہیں بھی پیسٹ کریں۔ |
| question | The command with ؟ (medium), کیا آپ ... چاہتے ہیں؟ (complete) | Remove {name} from your contacts? | {name} کو اپنے روابط سے ہٹائیں؟ |
| advice | Purpose with کے لیے, then the instruction, ends with ۔ | Click elsewhere to break the word there. | لفظ کو وہاں توڑنے کے لیے کسی اور جگہ کلک کریں۔ |
| explain | Plain statement, ends with ۔ when English has a full stop | The bullet character. | بلٹ کا حرف۔ |
| warning | Fact first; کالعدم نہیں کیا جا سکتا for cannot be undone | This cannot be undone. | اسے کالعدم نہیں کیا جا سکتا۔ |
| error: cannot | Passive with نہیں ... جا سکا | Could not send: {why}. | نہیں بھیجا جا سکا: {why}۔ |
| error: failed | Task + ناکام ہو گیا or ناکام ہو گئی | Text recognition failed. | متن کی شناخت ناکام ہو گئی۔ |
| error: not-found | Thing + نہیں ملا or نہیں ملی | That picture's file is missing | اس تصویر کی فائل نہیں ملی |
| error: not-enough | کافی ... نہیں ہے, or بہت بڑا, بہت لمبا | There is not enough space on the disk to record. | ریکارڈ کرنے کے لیے ڈسک پر کافی جگہ نہیں ہے۔ |
| error: unavailable | Thing + دستیاب نہیں ہے | Speech is not available on this system. | اس سسٹم پر اسپیچ دستیاب نہیں ہے۔ |
| error: not-allowed | ... کی اجازت نہیں دی گئی, or ... کی اجازت نہیں | The camera was not allowed. | کیمرے کی اجازت نہیں دی گئی۔ |
| error: invalid | "{x}" کوئی ... نہیں ہے, or ... درست نہیں | "{text}" is not a range | "{text}" کوئی رینج نہیں ہے |
| error: other | The rule, as a polite instruction or a plain statement | Keep at least one worksheet visible. | کم از کم ایک ورک شیٹ نظر آتی رہنے دیں۔ |
| sample | Content a reader in Pakistan would write, dates in Urdu order | free on 12 March? (the suite has no sample label) | 12 مارچ کو فارغ ہیں؟ |

### Short, medium and complete
- **Short** keeps the verb, because Urdu puts it last and a label without it
  reads as a noun: drop the object before the verb, never the verb. Drop, in
  this order: اپنے, یہ, اس, وہ where the control shows the thing; qualifiers
  and کے لیے phrases; the second sentence; the final ہے of a negative
  statement (دستیاب نہیں ہے → دستیاب نہیں); کیا آپ ... چاہتے ہیں of a question.
  Keep the words that carry the error kind: نہیں ... سکا, ناکام, نہیں ملا,
  کافی نہیں, دستیاب نہیں, اجازت نہیں.
- **Abbreviations**: Urdu labels never abbreviate a word with a dot or a
  single letter (no ص for صفحہ). Allowed: the Latin codes the pack glossary
  keeps (PDF, Ctrl+S); units come from `Intl`. Not allowed: an English word in
  place of the glossary's Urdu one, the bare verb stem.
- **Counted labels** keep both forms, `one` and `other`, in every version,
  and the noun's plural ending (سلائیڈز). Short drops the words round the
  count, never the count or the noun: ہر {count} منٹ stays as it is.
- **Complete** adds the object or place English adds (فہرست میں، اپنے روابط
  سے), writes the whole sentence with its ہے, and asks with کیا آپ. It may
  equal medium.

| English short | English medium | English complete | Short | Medium | Complete |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Find | Find Recipient | Find a recipient in the list | تلاش کریں | وصول کنندہ تلاش کریں | فہرست میں وصول کنندہ تلاش کریں |
| Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? | {name} کو ہٹائیں؟ | {name} کو اپنے روابط سے ہٹائیں؟ | کیا آپ {name} کو اپنے روابط سے ہٹانا چاہتے ہیں؟ |
| Could not set up | Could not be set up | This account could not be set up | ترتیب نہیں ہو سکا | ترتیب نہیں دیا جا سکا | یہ اکاؤنٹ ترتیب نہیں دیا جا سکا |

### Punctuation and marks
- **Right to left**: write every label in reading order, first word first;
  the window lays it out right to left. Write no directional marks (U+200E,
  U+200F, U+202A to U+202E, U+2066 to U+2069) in pack text. If a placeholder
  or a Latin name shows on the wrong side in review, report the label as a
  code fix rather than adding marks.
- **Placeholders** stay `{name}` in Latin braces, untranslated, where Urdu
  grammar wants them, often first: {name} کو ہٹائیں؟. Never reverse the
  braces. Urdu punctuation after a placeholder touches it: {why}۔
- **Latin names and codes** (Rutba Office, Word, PDF, Ctrl+S, .docx) stay one
  unbroken left-to-right run: no Urdu mark or word inside them. A key in
  parentheses follows the Urdu words: شکل کاپی کریں (Ctrl+C).
- **Marks**: comma ، , semicolon ؛ , question mark ؟ and full stop ۔ ; the
  colon and exclamation mark are the ordinary : and ! with no space before
  them, and one space after the colon. Parentheses are typed ( then ), in
  reading order; the window mirrors them.
- **Arrows** in a path follow the reading direction: English → becomes ←
  (داخل کریں ← بک مارک), as the pack already writes.
- **Ellipsis**: one … at the end of a command that opens a dialog and of a
  working state, typed last; it shows at the left.
- **Quotation marks** are straight double quotes "...", as the pack writes
  them round placeholders and names.
- **Capitalisation**: Urdu has none; Latin names keep their own case.
- **Full stops**: a version whose English ends with a full stop ends with ۔ ;
  one whose English does not (buttons, titles, fragment errors) has none.
- **No long dash**: some of the pack's tooltips still join a name and its
  explanation with a long dash; every new version writes a colon instead:
  فارمولا جانچیں: ...

### Access keys
- Urdu has no Latin letters, so the key goes after the word as (&X), with
  the English letter and no space before: &Edit → ترمیم(&E); &File →
  فائل(&F); &View → منظر(&V). In right-to-left layout it shows at the left.
- Before an ellipsis, never after it: Save &As… → بطور محفوظ کریں(&A)….
- The pack's menu labels today drop the & entirely (ترمیم); every new version
  restores the (&X), the same in short, medium and complete.
