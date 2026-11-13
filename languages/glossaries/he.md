# Hebrew glossary for Rutba Office

The words the Hebrew pack (`lang-he`) uses for the suite's recurring terms,
so the same thing is called the same everywhere. It follows the words people
already know from Microsoft Office and Windows in Hebrew (Israel, he-IL) where
those have a word, LibreOffice where Office has none, and plain everyday
Hebrew where neither does.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the verbal noun (שם פעולה), as current Office does in
  Backstage and as Windows 11 does: שמירה (Save), פתיחה (Open), סגירה (Close),
  הדפסה (Print), שמירה בשם (Save As). This keeps commands short and free of
  grammatical gender. A command phrase longer than one word keeps the same
  shape: הוספת חדר (Add a room), עריכת אירוע (Edit event), שליחת הזמנה (Send
  invitation).
- **The reader** is addressed without gender, as current Microsoft Hebrew
  does. Never use a second-person imperative, present or future verb (בחר,
  אתה יכול, תוכל). Use an impersonal form instead: יש לבחור, אפשר להוסיף,
  כדי להוסיף אירוע, יש להקיש Ctrl+N. Words whose unpointed spelling is the
  same for both genders are fine: שלך (your), לוח השנה שלך, ענית (you
  answered), לך.
- **Tab and group names** are nouns, as in Office: קובץ, בית, הוספה, עיצוב,
  פריסה, סקירה, תצוגה. A tab and the command of the same English name may
  share a word (Insert: הוספה).
- **Placeholders** such as `{name}`, `{count}`, `{0}` stay exactly as written,
  in braces, untranslated, wherever Hebrew word order puts them. A Hebrew
  prefix letter (ב, ל, מ, ה, ו, ש, כ) before a placeholder, a Latin word or a
  digit is joined with an ordinary hyphen, as Microsoft writes it:
  ב-{name}, ל-Word, מ-{address}, ב-12 במרץ. Never attach the article ה to a
  placeholder; rephrase: "The sheet {name}" is הגיליון {name}.
- **Gender of `{name}`**: a person's name may be either gender, so no verb or
  adjective agrees with it. Use a noun phrase or a colon: "{name} accepted."
  is התקבל אישור מ-{name}. "{name} declined." is התקבלה דחייה מ-{name}.
  Things named by a placeholder take a neutral frame too: "{table} is linked"
  is הטבלה {table} מקושרת (agreeing with הטבלה, not with the name).
- **Keys and shortcuts** stay in Latin, as they are: Ctrl+S, F7, Shift+F2.
  "Press" is הקשה / יש להקיש: יש להקיש Ctrl+N כדי להוסיף אירוע.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, H.264, AAC, HTTPS, `dd/mm/yyyy`, `=SUM(ABOVE)`.
- **Brand and product names** stay in Latin letters, never transliterated:
  Rutba Office, Word, Excel, PowerPoint, Outlook, Windows, Microsoft, Google,
  iCloud, YouTube Studio, LinkedIn Live Studio, WordArt, SmartArt,
  PivotTable, Power Query.
- **The app names** are translated as in the first table (מסמכים, גיליונות,
  מצגות, דואר, לוח שנה ...). Inside a sentence they take no article and no
  prefix-hyphen, like any Hebrew word: באנשי קשר (in Contacts), בדואר (in
  Mail).
- **Punctuation**: Hebrew uses the Latin comma, full stop, colon and
  question mark, written as usual; the window lays them out right to left.
  Quotation marks are the plain double quote "...", as Hebrew software
  writes them, with ' inside a quotation. Abbreviations take the Hebrew
  gershayim ״ (U+05F4) and geresh ׳ (U+05F3), never the quote mark, so they
  never clash with a quotation: מ״מ, ס״מ, שנ׳, צ׳אט. The ellipsis … stays at
  the end of a command that opens a dialog: עיון…, צבעים נוספים….
- **No em dash.** Where the English has (long dash) , write a colon, a comma,
  parentheses or a new sentence: "A group has no fill or outline of its own (long dash) format a shape inside it." is לקבוצה אין מילוי או קו מתאר משלה. יש לעצב
  צורה שבתוכה. A size label "B5 (long dash) 176 × 250 mm" is B5 (176 × 250 מ״מ). Do not
  use an en dash with spaces as a dash; the maqaf ־ is not used either, an
  ordinary hyphen joins compounds (דו-שיח). An en dash in a range (1 to 10)
  is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007) and **no invisible
  direction marks** (U+200F, U+200E, U+202B and the like): ordinary spaces
  only. Parentheses and brackets are typed as normal; the window mirrors them.
- **No vowel points** (niqqud). Use full spelling (כתיב מלא) as Microsoft
  does: תיקייה, עריכה, תוכנה, שיחה, חדשה.
- **Counts** use Hebrew's three forms `one`, `two`, `other`, each written in
  full with `{count}` before the noun (as software does, though speech says
  אירוע אחד). `two` normally matches `other`; never use the dual (יומיים,
  שעתיים) since the digit is already there:
  - `one`: {count} אירוע
  - `two`: {count} אירועים
  - `other`: {count} אירועים

  Feminine nouns the same way: {count} שקופית / {count} שקופיות /
  {count} שקופיות. People: {count} אדם / {count} אנשים / {count} אנשים.
- **Numbers and dates**: Western digits 0-9. The window formats numbers,
  dates and times from the region, so a label never spells out a format of
  its own. A percentage keeps the sign after the number: 25%. A worked example
  inside a sentence is written as Hebrew says it: "free on 12 March?" is
  "פנוי ב-12 במרץ?".
- **Units** take the Hebrew abbreviation: mm מ״מ, cm ס״מ, s שנ׳, %.

## The apps

| English | Hebrew |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | מסמכים |
| Worksheets | גיליונות |
| Presentations | מצגות |
| Mail | דואר |
| Calendar | לוח שנה |
| Contacts | אנשי קשר |
| Pictures | תמונות |
| Image (the editor) | עורך תמונה |
| Video | וידאו |
| Home (the launcher) | בית |
| Talk | שיחות |
| Locker | כספת |
| Colour | צבע |
| Base | מסד נתונים |
| Broadcast | שידור |
| Recorder | מקליט |

Note for the reviewer: Image is עורך תמונה so it is never confused with
Pictures (תמונות).

## Tabs and frame

| English | Hebrew |
| :-- | :-- |
| File | קובץ |
| Home | בית |
| Insert | הוספה |
| Draw | ציור |
| Design | עיצוב |
| Layout | פריסה |
| Page Layout | פריסת עמוד |
| References | הפניות |
| Mailings | דברי דואר |
| Review | סקירה |
| View | תצוגה |
| Help | עזרה |
| Formulas | נוסחאות |
| Data | נתונים |
| Automate | אוטומציה |
| Transitions | מעברים |
| Animations | הנפשות |
| Slide Show | הצגת שקופיות |
| Record | הקלטה |
| Table Design | עיצוב טבלה |
| Table Layout | פריסת טבלה |
| Shape Format | עיצוב צורה |
| Picture Format | עיצוב תמונה |
| Ribbon | רצועת הכלים |
| Pane | חלונית |
| Status bar | שורת המצב |
| Dialog | תיבת דו-שיח |
| Settings | הגדרות |
| Language | שפה |
| Theme | ערכת נושא |

## Commands

| English | Hebrew |
| :-- | :-- |
| New | חדש |
| Open | פתיחה |
| Save | שמירה |
| Save As | שמירה בשם |
| Save as Template | שמירה כתבנית |
| Close | סגירה |
| Print | הדפסה |
| Export | ייצוא |
| Import | ייבוא |
| Share | שיתוף |
| Undo | ביטול פעולה |
| Redo | ביצוע חוזר |
| Cut | גזירה |
| Copy | העתקה |
| Paste | הדבקה |
| Paste Special | הדבקה מיוחדת |
| Delete | מחיקה |
| Remove | הסרה |
| Rename | שינוי שם |
| Select All | בחירת הכול |
| Find | חיפוש |
| Replace | החלפה |
| Go To | מעבר אל |
| Insert | הוספה |
| Apply | החלה |
| Apply to All | החלה על הכול |
| OK | אישור |
| Cancel | ביטול |
| Yes / No | כן / לא |
| Done | סיום |
| Next / Previous | הבא / הקודם |
| Back | חזרה |
| Refresh | רענון |
| Update | עדכון |
| Accept / Reject | קבלה / דחייה |
| Sort | מיון |
| Filter | סינון |
| Group / Ungroup | קיבוץ / ביטול קיבוץ |
| Merge / Split | מיזוג / פיצול |
| Zoom In / Zoom Out | הגדלת התצוגה / הקטנת התצוגה |
| Full screen | מסך מלא |
| Minimise / Maximise / Restore | מזעור / הגדלה / שחזור |
| Expand / Collapse | הרחבה / כיווץ |
| Browse | עיון… |
| Add | הוספה |
| Edit | עריכה |
| Reset | איפוס |
| Clear | ניקוי |
| Show / Hide | הצגה / הסתרה |
| More | עוד |
| None | ללא |
| Automatic | אוטומטי |

## Text and documents

| English | Hebrew |
| :-- | :-- |
| Document | מסמך |
| Page | עמוד |
| Paragraph | פסקה |
| Line | שורה |
| Word (a word) | מילה |
| Character | תו |
| Font | גופן |
| Font size | גודל גופן |
| Bold / Italic / Underline | מודגש / נטוי / קו תחתון |
| Strikethrough | קו חוצה |
| Subscript / Superscript | כתב תחתי / כתב עילי |
| Text highlight colour | צבע סימון טקסט |
| Font colour | צבע גופן |
| Colour | צבע |
| Style / Styles | סגנון / סגנונות |
| Heading | כותרת |
| Title | כותרת ראשית |
| Bullets / Numbering | תבליטים / מספור |
| Multilevel List | רשימה מרובת רמות |
| List | רשימה |
| Indent | כניסה |
| Alignment / Align Left / Centre / Align Right / Justify | יישור / יישור לשמאל / מרכוז / יישור לימין / יישור לשני הצדדים |
| Line spacing | מרווח בין שורות |
| Margins | שוליים |
| Orientation / Portrait / Landscape | כיוון / לאורך / לרוחב |
| Size (paper) | גודל |
| Columns | עמודות |
| Breaks | מעברים |
| Header / Footer | כותרת עליונה / כותרת תחתונה |
| Footnote / Endnote | הערת שוליים / הערת סיום |
| Table of Contents | תוכן עניינים |
| Caption | כיתוב |
| Bookmark | סימנייה |
| Cross-reference | הפניה צולבת |
| Citation / Bibliography | ציטוט / ביבליוגרפיה |
| Index | אינדקס |
| Comment / Comments | הערה / הערות |
| Track Changes | מעקב אחר שינויים |
| Spelling | איות |
| Thesaurus | מילון מילים נרדפות |
| Word Count | ספירת מילים |
| Watermark | סימן מים |
| Page Colour | צבע עמוד |
| Text Box | תיבת טקסט |
| WordArt | WordArt |
| Equation | משוואה |
| Symbol | סמל |
| Hyperlink / Link | היפר-קישור / קישור |
| Mail Merge | מיזוג דואר |
| Envelopes / Labels | מעטפות / תוויות |
| Template | תבנית |
| Untitled | ללא שם |

Breaks (Documents) and Transitions (Presentations) are both מעברים, as in
Office; the apps never show them side by side.

## Workbooks

| English | Hebrew |
| :-- | :-- |
| Workbook | חוברת עבודה |
| Sheet / Worksheet | גיליון / גיליון עבודה |
| Cell / Cells | תא / תאים |
| Row / Rows | שורה / שורות |
| Column / Columns | עמודה / עמודות |
| Range | טווח |
| Formula | נוסחה |
| Function | פונקציה |
| Number format | תבנית מספר |
| Currency / Percentage / Date / Time | מטבע / אחוזים / תאריך / שעה |
| Freeze Panes | הקפאת חלוניות |
| Conditional Formatting | עיצוב מותנה |
| Format as Table | עיצוב כטבלה |
| PivotTable | PivotTable |
| Chart | תרשים |
| Sparklines | תרשימי מגמה |
| Slicer | כלי פריסה |
| Data Validation | אימות נתונים |
| Remove Duplicates | הסרת כפילויות |
| Text to Columns | טקסט לעמודות |
| Power Query | Power Query |
| Name box | תיבת השם |
| Formula bar | שורת הנוסחאות |
| AutoSum | סכום אוטומטי |
| Sum / Average / Count / Min / Max | סכום / ממוצע / ספירה / מינימום / מקסימום |

Function names in formulas (SUM, AVERAGE, VLOOKUP) stay in Latin.

## Presentations

| English | Hebrew |
| :-- | :-- |
| Presentation | מצגת |
| Slide / Slides | שקופית / שקופיות |
| New Slide | שקופית חדשה |
| Layout | פריסה |
| Section | מקטע |
| Master | תבנית בסיס |
| Notes | הערות דובר |
| Handout | דף מידע |
| Shape / Shapes | צורה / צורות |
| Picture / Pictures | תמונה / תמונות |
| Fill / Outline | מילוי / קו מתאר |
| Shadow / Glow / Reflection | צל / זוהר / השתקפות |
| Transition | מעבר |
| Animation | הנפשה |
| From Beginning / From Current Slide | מההתחלה / מהשקופית הנוכחית |
| Presenter View | תצוגת מציג |
| Rehearse Timings | חזרה על תזמונים |
| Video / Audio | וידאו / שמע |

Notes is הערות דובר so it never clashes with Comments (הערות).

## Mail, calendar, contacts, pictures

| English | Hebrew |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | דואר נכנס / פריטים שנשלחו / טיוטות / דואר יוצא / דואר זבל / ארכיון / אשפה |
| Message | הודעה |
| New message | הודעה חדשה |
| Reply / Reply All / Forward | תשובה / תשובה לכולם / העברה |
| Send | שליחה |
| Attachment | קובץ מצורף |
| Account | חשבון |
| Folder | תיקייה |
| Search | חיפוש |
| Unread / Flagged | לא נקרא / מסומן בדגל |
| Rules | כללים |
| Signature | חתימה |
| Event | אירוע |
| Meeting | פגישה |
| Today / Day / Week / Month / Agenda | היום / יום / שבוע / חודש / סדר יום |
| Repeat | חזרתיות |
| Reminder | תזכורת |
| Contact | איש קשר |
| Address book | פנקס כתובות |
| Phone / Email / Address | טלפון / דואר אלקטרוני / כתובת |
| Rotate / Crop / Flip | סיבוב / חיתוך / היפוך |
| Rating / Tags | דירוג / תגיות |
| Slideshow | הצגת שקופיות |
| Brightness / Contrast | בהירות / ניגודיות |
| Trim / Split | קיצוץ / פיצול |
| Export video | ייצוא וידאו |

Repeat is חזרתיות so it never clashes with Back (חזרה). "Email" as a noun
for a message is הודעת דואר אלקטרוני; as a verb, שליחה בדואר אלקטרוני.

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain, gender-neutral Hebrew, not word for word. Keep a sentence's facts (a
number, a name in `{braces}`, a key) exactly. Prefer "לא ניתן היה לפתוח את
הקובץ." over a literal rendering, and "לא נשלח: {reason}" for a short
status.

## More recurring terms

| English | Hebrew |
| :-- | :-- |
| Database | מסד נתונים |
| Table | טבלה |
| Record / Records | רשומה / רשומות |
| Field | שדה |
| Read only | לקריאה בלבד |
| Source | מקור |
| Copy (a copy, noun) | עותק |
| Network share | תיקייה משותפת ברשת |
| Web address | כתובת אינטרנט |
| Server address | כתובת שרת |
| Password | סיסמה |
| Key | מפתח |
| Stream key | מפתח שידור |
| On a schedule | לפי לוח זמנים |
| Invitation / Invite | הזמנה / הזמנה (command) |
| Accepted / Declined / Tentative | התקבל / נדחה / טנטטיבי |
| Cancellation | הודעת ביטול |
| Organizer | מארגן |
| Room / Rooms | חדר / חדרים |
| Mailbox | תיבת דואר |
| Time zone | אזור זמן |
| All day | כל היום |
| Busy / Free | תפוס / פנוי |
| Occurrence | מופע |
| Every day / Every week / Every month / Every year | כל יום / כל שבוע / כל חודש / כל שנה |
| Hijri | הג׳רי |
| More colours… | צבעים נוספים… |
| Recent colours / Standard colours | צבעים אחרונים / צבעים רגילים |
| Accent | הדגשה |
| Background | רקע |
| Borders | גבולות |
| Banded Rows / Banded Columns | שורות מפוספסות / עמודות מפוספסות |
| Bring Forward / Bring to Front | הבאה קדימה / הבאה לחזית |
| Clipboard | לוח |
| Alt Text | טקסט חלופי |
| Accessibility | נגישות |
| Clear formatting | ניקוי עיצוב |
| Change case | שינוי רישיות |
| Blank document / Blank presentation / Blank worksheet | מסמך ריק / מצגת ריקה / גיליון ריק |
| Choose… | בחירה… |
| language pack | חבילת שפה |
| Voices and languages (the page) | קולות ושפות |
| add-on | תוסף |
| speech engine | מנוע דיבור |
| speech model | מודל דיבור |
| voice | קול |
| Add from a file (command) | הוספה מקובץ |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

Commands (buttons, menu items, ribbon, and their tooltips) are verbal nouns,
never imperatives: חיפוש נמען, סגירת החלון. The reader is addressed without
gender: יש ל..., אפשר ל..., כדי ל...; the unpointed ברצונך and שלך are fine.
Status lines and errors take a noun subject, and the verb agrees with that
noun, never with a placeholder.

### By intent

| Intent | How this language phrases it | English | Hebrew |
| :-- | :-- | :-- | :-- |
| action, button | Verbal noun, the object after it in the construct state | Find Recipient | חיפוש נמען |
| action, menu | Verbal noun in the construct state with the definite object | Close Window | סגירת החלון |
| name | Noun, then the adjective agreeing with it | Horizontal text | טקסט אופקי |
| heading | Noun phrase in the construct state | Folder settings | הגדרות תיקייה |
| state, working | Verbal noun with the ellipsis; no present participle, which has gender | Finding suggestions… | חיפוש הצעות… |
| state, done | Passive past agreeing with the noun subject, then אפשר ל... | Link copied. Paste it anywhere. | הקישור הועתק. אפשר להדביק אותו בכל מקום. |
| question | Infinitive question; complete "האם ברצונך ...?" | Remove {name}? | להסיר את {name}? |
| advice | כדי ל... first, then יש ל... | Sign in to Talk to accept. | כדי לאשר, יש להיכנס לשיחות. |
| explain | Plain statement or noun phrase | Bullet character. | תו התבליט. |
| warning | "לא ניתן ל..." | Cannot be undone. | לא ניתן לבטל. |
| error: cannot | "לא ניתן ל..." for cannot, "לא ניתן היה ל..." for could not | Could not set up | לא ניתן היה להגדיר |
| error: failed | Noun, then נכשל or נכשלה agreeing with it | Recognition failed. | הזיהוי נכשל. |
| error: not-found | Noun, then לא נמצא or לא נמצאה; חסר for missing | Picture file is missing | קובץ התמונה לא נמצא |
| error: not-enough | "גדול מדי", "ארוך מדי", "אין מספיק ..." | File too large for a message. | הקובץ גדול מדי להודעה אחת. |
| error: unavailable | Noun, then אינו זמין or אינה זמינה | Speech is not available. | ההקראה אינה זמינה. |
| error: not-allowed | "אין הרשאה ל..." | Camera not allowed. | אין הרשאה להשתמש במצלמה. |
| error: invalid | A noun before the value, then אינו or אינה: "הערך ... אינו ..." | "{text}" is not a range | הערך "{text}" אינו טווח |
| error: other | Plain statement; יש ל... where the English gives an order | Keep at least one worksheet visible. | יש להשאיר לפחות גיליון עבודה אחד גלוי. |
| sample | Written as Hebrew says it, the prefix joined to the digit with a hyphen | free on 12 March? | פנוי ב-12 במרץ? |

The suite has no sample label; the sample row uses the
sample sentence this glossary already gives.

### Short, medium and complete

- **Short** keeps the verbal noun and drops the object; the construct form
  returns to the plain form: "חיפוש נמען" becomes "חיפוש", "סגירת החלון"
  becomes "סגירה".
- Drop in this order: the object (with את), then the place ("ברשימה",
  "מאנשי הקשר"), then שלך, then a second clause. Never drop a placeholder,
  a negation (לא, אין, אינו) or a key, and never a prefix letter.
- A message's short version may be a colon fragment: "לא נשלח: {reason}",
  "מילים: {count}".
- Allowed abbreviations are the standard ones, with geresh or gershayim:
  מס׳, עמ׳, דק׳, שנ׳, מ״מ, ס״מ. Units, dates and times come from `Intl`.
  Not allowed: abbreviations of your own, a word cut with a full stop, Latin
  letters for a Hebrew word.
- **Counted labels** keep the three forms, `{count}` before the noun. Short
  drops the words round the noun, never the noun; if still too wide, put the
  noun first with a colon, in the plural: "מילים: {count}".
- **Complete** adds the object with את and the article, the place and שלך;
  a message becomes a full sentence with a full stop, and a question
  becomes "האם ברצונך ...?".

| Version | Short | Medium | Complete |
| :-- | :-- | :-- | :-- |
| English | Find | Find Recipient | Find a recipient in the list |
| Hebrew | חיפוש | חיפוש נמען | חיפוש נמען ברשימה |
| English | Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? |
| Hebrew | להסיר את {name}? | להסיר את {name} מאנשי הקשר? | האם ברצונך להסיר את {name} מאנשי הקשר שלך? |
| English | Folder settings | Folder settings | Settings for this folder |
| Hebrew | הגדרות תיקייה | הגדרות תיקייה | הגדרות עבור תיקייה זו |

### Punctuation and marks

- **Ellipsis**: … straight after the last word, no space, on a command that
  opens a dialog ("עיון…") and on a working state ("חיפוש הצעות…"). It is
  the last character in the file and shows at the word's left.
- **Colon, question and exclamation marks**: no space before, one ordinary
  space after, written where Hebrew word order puts them: "לא נשלח:
  {reason}". Avoid the exclamation mark.
- **Quotation marks**: the plain " round a name or a value, ' inside them;
  gershayim and geresh only in abbreviations.
- **Capitals**: Hebrew has none. Latin names, keys and codes keep their own
  capitals: Word, Ctrl+S, PDF.
- **Full stops**: a full sentence ends with one, in every version; a button,
  title, name or noun-phrase status takes none. Where the English version is
  a fragment with a full stop ("Bullet character."), keep the full stop.

**Right to left.** Every label is written in logical order, the order it is
read, never in the order it appears on screen. The window sets the direction
to right to left, and the rules below keep the mixed parts in place:

- A placeholder, a Latin name, a key, a file name or a number is a left to
  right run inside the Hebrew. Write it where Hebrew word order puts it, and
  write `{name}` with its braces as they are; never reverse a run or its
  braces to make it look right.
- Do not start a label with a placeholder, a Latin word, a key or a digit
  where a Hebrew word can go first. Notifications, tooltips, the taskbar and
  exported files may take the direction from the first letter, and a Latin
  first word turns the whole line left to right, with the punctuation on the
  wrong side. Put a Hebrew noun first: "{name} is not available." is
  "השירות {name} אינו זמין.".
- Punctuation after a Latin run at the end of a label is written straight
  after it ("להסיר את {name}?"); in the right to left line it shows at the
  far left, as it should. Where the Latin run would end a question or a
  sentence, prefer adding the Hebrew place after it: "להסיר את {name} מאנשי
  הקשר?".
- Two Latin parts with only a space, a comma or a plus between them
  ("Ctrl+Shift+S", "Word, Excel") show as one left to right run in English
  order. Keep a Hebrew word between Latin names that must be read in Hebrew
  order: "Word או Excel".
- Parentheses round a Latin run stay with it: "(Ctrl+N)". Parentheses round
  Hebrew are typed normally and the window mirrors them.
- The prefix hyphen stays between the Hebrew letter and the run: "ב-{name}",
  "ל-Word", and the run never takes the article ה.
- No direction marks (U+200E, U+200F, U+202A to U+202E, U+2066 to U+2069) in
  the pack: where a line still lays out wrongly, the fix is in the code, by
  isolating the placeholder's value, not in the text.

### Access keys

- Hebrew has no Latin letters, so the access key is written `(&X)` straight
  after the Hebrew word, no space, with the letter the English label marks:
  "&Edit" is "עריכה(&E)", "&Find" is "חיפוש(&F)". It shows to the word's
  left.
- On a command that opens a dialog, `(&X)` goes before the ellipsis:
  "עיון(&B)…".
- Never put `&` before a Hebrew letter. Microsoft's Hebrew Windows marks a
  Hebrew letter instead; this pack follows the suite's rule, so the key is
  the one the English label and its documentation name.
- One `(&X)` per label, never after a placeholder or a Latin name. Where two
  items in one menu would share a letter, the English labels already differ,
  so keep their letters.
