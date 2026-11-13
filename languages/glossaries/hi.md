## Intents and versions

### Voice
- The reader is आप, as packs/lang-hi/glossary.md sets. Commands and
  instructions take the polite imperative in एँ or ें (सहेजें, खोलें, क्लिक
  करें), never the bare stem (खोल) or the familiar form (खोलो).
- A state uses the passive: जा रहा है while working (बनाया जा रहा है…), गया or
  गई when done (हटा दी गई). A complete question uses क्या आप ... चाहते हैं?
- Verbs agree in gender. When `{name}` could be a man, a woman or a thing,
  build the sentence on को or on a known noun, so the verb takes the default
  masculine: {name} को हटा दिया गया।

### By intent
Each row shows the medium version.

| Intent | How this language phrases it | English | Hindi |
| :-- | :-- | :-- | :-- |
| action (button) | Object, then verb in करें or ें | Find Recipient | प्राप्तकर्ता ढूँढें |
| action (menu) | As a button; a command that opens a dialog ends with … | Close Window | विंडो बंद करें |
| name | Noun phrase, Office's Hindi word where it has one | Uppercase | बड़े अक्षर |
| heading | Noun phrase, no final mark | Folder settings | फ़ोल्डर सेटिंग्स |
| state (working) | Passive with जा रहा है or जा रहे हैं, then … | Finding suggestions… | सुझाव ढूँढे जा रहे हैं… |
| state (done) | Past with गया or गई, ends with । | Link copied. Paste it anywhere. | लिंक की प्रतिलिपि बन गई। इसे कहीं भी चिपकाएँ। |
| question | The command with ? (medium), क्या आप ... चाहते हैं? (complete) | Remove {name} from your contacts? | {name} को अपने संपर्कों से निकालें? |
| advice | Purpose with के लिए, then the instruction, ends with । | Click elsewhere to break the word there. | शब्द को वहाँ तोड़ने के लिए कहीं और क्लिक करें। |
| explain | Plain statement, ends with । when English has a full stop | The bullet character. | बुलेट वर्ण। |
| warning | Fact first; पूर्ववत नहीं किया जा सकता for cannot be undone | This cannot be undone. | इसे पूर्ववत नहीं किया जा सकता। |
| error: cannot | Passive with नहीं ... जा सका | Could not send: {why}. | भेजा नहीं जा सका: {why}। |
| error: failed | Task + विफल रहा or विफल रही | Text recognition failed. | टेक्स्ट पहचान विफल रही। |
| error: not-found | Thing + नहीं मिला or नहीं मिली | That picture's file is missing | उस चित्र की फ़ाइल नहीं मिली |
| error: not-enough | पर्याप्त ... नहीं है, or बहुत बड़ा, बहुत लंबा | There is not enough space on the disk to record. | रिकॉर्ड करने के लिए डिस्क पर पर्याप्त स्थान नहीं है। |
| error: unavailable | Thing + उपलब्ध नहीं है | Speech is not available on this system. | इस सिस्टम पर स्पीच उपलब्ध नहीं है। |
| error: not-allowed | ... की अनुमति नहीं दी गई, or ... की अनुमति नहीं है | The camera was not allowed. | कैमरे की अनुमति नहीं दी गई। |
| error: invalid | "{x}" कोई ... नहीं है, or ... मान्य नहीं है | "{text}" is not a range | "{text}" कोई श्रेणी नहीं है |
| error: other | The rule, as a polite instruction or a plain statement | Keep at least one worksheet visible. | कम से कम एक कार्यपत्रक दिखता रहने दें। |
| sample | Content a reader in India would write, dates in Indian order | free on 12 March? (the suite has no sample label) | क्या आप 12 मार्च को खाली हैं? |

### Short, medium and complete
- **Short** keeps the verb, because Hindi puts it last and a label without it
  reads as a noun: drop the object before the verb, never the verb. Drop, in
  this order: अपने, यह, इस, उस where the control shows the thing; qualifiers
  and के लिए phrases; the second sentence; the final है of a negative
  statement (उपलब्ध नहीं है → उपलब्ध नहीं); क्या आप ... चाहते हैं of a question.
  Keep the words that carry the error kind: नहीं ... सका, विफल, नहीं मिला,
  पर्याप्त नहीं, उपलब्ध नहीं, अनुमति नहीं.
- **Abbreviations**: Hindi labels never abbreviate a word, neither with a
  full stop nor with the abbreviation sign ॰ (no पृ॰ for पृष्ठ). Allowed: the
  Latin codes the pack glossary keeps (PDF, Ctrl+S); units come from `Intl`.
  Not allowed: an English word in place of the glossary's Hindi one, the
  bare verb stem, dropping a nukta or chandrabindu to save room (फ़ाइल, जाएँ).
- **Counted labels** keep both forms, `one` (0 and 1) and `other`, in every
  version, with the noun's plural where Hindi changes it (पंक्तियाँ). Short
  drops the words round the count, never the count or the noun: हर {count}
  मिनट stays as it is.
- **Complete** adds the object or place English adds (सूची में, अपने संपर्कों
  से), writes the whole sentence with its है, and asks with क्या आप. It may
  equal medium.

| English short | English medium | English complete | Short | Medium | Complete |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Find | Find Recipient | Find a recipient in the list | ढूँढें | प्राप्तकर्ता ढूँढें | सूची में प्राप्तकर्ता ढूँढें |
| Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? | {name} को निकालें? | {name} को अपने संपर्कों से निकालें? | क्या आप {name} को अपने संपर्कों से निकालना चाहते हैं? |
| Could not set up | Could not be set up | This account could not be set up | सेट नहीं हो सका | सेट नहीं किया जा सका | यह खाता सेट नहीं किया जा सका |

### Punctuation and marks
- **Danda**: a sentence ends with । , touching the last word or placeholder
  ({why}।), never a Latin full stop. Question and exclamation marks are ? and
  ! with no space before them; avoid ! in messages.
- **Colon**: : with no space before and one space after: भेजा नहीं जा सका: {why}।
- **Comma and parentheses** are the ordinary , ( ) as in English.
- **Ellipsis**: one … (U+2026) at the end of a command that opens a dialog
  and of a working state, never three full stops.
- **Quotation marks** are straight double quotes "...", as most of the pack
  writes them round placeholders and names. A few pack labels use “ ”; new
  versions use straight quotes.
- **Placeholders** stay `{name}`, untranslated, where Hindi word order wants
  them, often first, followed by the postposition as a separate word:
  {name} को, {name} में, {name} का.
- **Latin names and codes** (Rutba Office, Word, PDF, Ctrl+S) stay in Latin
  letters, followed by a separate Hindi postposition: Word में.
- **Capitalisation**: Devanagari has none; Latin names keep their own case.
- **Full stops**: a version whose English ends with a full stop ends with । ;
  one whose English does not (buttons, titles, fragment errors such as उस
  चित्र की फ़ाइल नहीं मिली) has none.
- **No long dash**: some of the pack's tooltips still join a name and its
  explanation with a long dash; every new version writes a colon instead:
  सूत्र का मूल्यांकन करें: ...

### Access keys
- Hindi has no Latin letters, so the key goes after the word as (&X), with
  the English letter and no space before: &Edit → संपादन(&E); &File →
  फ़ाइल(&F); &View → दृश्य(&V).
- Before an ellipsis, never after it: Save &As… → इस रूप में सहेजें(&A)….
- The pack's menu labels today drop the & entirely (संपादन); every new
  version restores the (&X), the same in short, medium and complete.

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

- In a sentence (a medium or a complete that is a sentence or a phrase), write the product's local name with its English name beside it in brackets, the first time the label names it: रुतबा ऑफ़िस (Rutba Office). A second mention in the same label takes the local name alone.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the glossary gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay in Latin letters, as written.

| English | Hindi |
| :-- | :-- |
| Rutba | रुतबा |
| Rutba Office | रुतबा ऑफ़िस |
| Talk, Rutba Talk | टॉक, रुतबा टॉक |
| Rutba Image | रुतबा इमेज |
| Rutba Video | रुतबा वीडियो |
| Studio | स्टूडियो |
| Recorder | रिकॉर्डर |
| Locker | लॉकर |
| Data Files | डेटा फ़ाइलें |
