# Chinese, Traditional (Taiwan) glossary for Rutba Office

The words the zh-Hant pack (`lang-zh-hant`, region zh-TW) uses for the suite's
recurring terms, so the same thing is called the same everywhere. It follows
Microsoft Office and Windows in Traditional Chinese as used in Taiwan where
they have a word, and plain everyday Taiwan usage where they do not. These are
Taiwan's own software words, not mainland words converted to Traditional
characters.

**This glossary was drafted by machine and needs a native speaker's review**
before the pack is called finished. A reviewer changes a word here first, then
in the pack, so the two stay in step.

## How the pack is written

- **Taiwan's words, never converted mainland words.** The ones that matter
  most:

  | Use (Taiwan) | Not (mainland) | Meaning |
  | :-- | :-- | :-- |
  | 軟體 | 軟件 | software |
  | 檔案 | 文件 | file |
  | 文件 | 文檔 | document |
  | 資料夾 | 文件夾 | folder |
  | 儲存 | 保存 | save |
  | 列印 | 打印 | print |
  | 設定 | 設置 | settings |
  | 預設 | 默認 | default |
  | 程式 | 程序 | program |
  | 視窗 | 窗口 | window |
  | 螢幕 | 屏幕 | screen |
  | 網路 | 網絡 | network |
  | 伺服器 | 服務器 | server |
  | 資料 | 數據 | data |
  | 帳戶 | 賬戶 | account |
  | 影片 | 視頻 | video |
  | 介面 | 界面 | interface |
  | 搜尋 | 搜索 | search |
  | 連結 | 鏈接 | link |
  | 訊息 | 信息 | message |
  | 支援 | 支持 | support |
  | 物件 | 對象 | object |
  | 字型 | 字體 | font |
  | 範本 | 模板 | template |
  | 登入 | 登錄 | sign in |
  | 線上 | 在線 | online |
  | 剪貼簿 | 剪貼板 | clipboard |
  | 執行 | 運行 | run |
  | 品質 | 質量 | quality |
  | 解析度 | 分辨率 | resolution |
  | 列 / 欄 | 行 / 列 | row / column (Taiwan: 列 is a row, 欄 is a column) |

- **Commands** are a bare verb or verb plus object, as Office does; Chinese has
  no infinitive or imperative form, and buttons never add 請: 儲存 (Save),
  開啟 (Open), 插入表格 (Insert Table), 傳送邀請 (Send invitation).
- **The reader** is addressed politely with 您, as current Office and Windows
  in Taiwan do; 你 is never used: 您的行事曆已有新的詳細資料。 In full
  sentences that ask the reader to do something, 請 may open the sentence,
  but sparingly: 請先關閉該程式。
- **Tab and group names** are short noun or verb phrases taken from Office:
  常用, 插入, 版面配置, 校閱, 檢視. Groups likewise: 剪貼簿, 字型, 段落.
- **Placeholders** such as `{name}`, `{count}`, `{0}` stay exactly as
  written, untranslated, and move to where Chinese word order wants them:
  `{room} is booked for {when}.` becomes 已為 {when} 預約 {room}。
- **Spacing**: put one ordinary half-width space between Chinese characters
  and a Latin word, a number or a placeholder, as Microsoft's Taiwan style
  does, but no space next to full-width punctuation: 傳送給 {name}。,
  已開啟 Rutba Office, 15 分鐘前.
- **Keys and shortcuts** stay as they are, in half-width parentheses after a
  space, as Office shows them: 粗體 (Ctrl+B), 新增活動 (Ctrl+N), F7.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`.
- **Brand and product names** stay in Latin letters: Rutba Office, Rutba,
  Office, Word, Excel, PowerPoint, Outlook, Windows, Microsoft, Google,
  iCloud, YouTube, Facebook, Instagram, TikTok, LinkedIn, Twitch.
- **App names** of the suite are translated as in the table below (文件,
  工作表, 簡報, 郵件, 行事曆 ...). When a sentence names the app, the name
  stands alone without quotes: 在連絡人中新增會議室。
- **Punctuation** is full-width in Chinese text: ，。、：；？！（）. A list
  of items within a sentence uses the enumeration comma 、: 學生、課程、
  班級與出缺勤。 Parentheses around Chinese text are full-width （）;
  around Latin-only content (a key, a code) they are half-width, as above.
- **Quotation marks** are 「」, with 『』 inside a quotation:
  例如「12 月 3 日有空嗎？」。
- **Ellipsis**: the single … stays at the end of a command that opens a
  dialog, as in English: 另存新檔…, 瀏覽…, 其他色彩…. A label that says
  something is in progress keeps it too: 正在檢查…
- **No em dash.** Chinese prose would use a double dash, but the pack never
  uses it, nor a spaced en dash. Where the English has an em dash, write a
  full-width colon, a comma, parentheses or a new sentence:
  `Banded Rows (long dash) every other row shaded` becomes 帶狀列：每隔一列加上網底。
  An en dash in a range (1 to 10) is fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only.
- **Counts**: Chinese has one plural form, `other`, so every counted label
  gets one line, `n.other`, written in full with `{count}` and the right
  measure word (個, 張, 封, 位, 頁, 項, 筆). Both English forms collapse into
  it:
  `one: {count} slide / other: {count} slides` gives `n.other	{count} 張投影片`;
  `one: The cancellation is sent to {count} person.` and its `other` form give
  `n.other	取消通知已傳送給 {count} 位受邀者。`
  Measure words used: 個 (general, events 個活動, changes 個變更), 張
  (slides, pictures, sheets), 封 (mail messages), 位 (people), 頁 (pages),
  項 (items, bookings 項預約), 筆 (records, 筆記錄).
- **Numbers and dates** are formatted by the window from the region (zh-TW),
  so labels never spell out a format and never hard-code 年月日 order. Digits
  are the ordinary 0 to 9. A percentage is written with the digit and %:
  {percent}%.
- **Special to Chinese**: no gender, no case, no articles, so `{name}` needs
  no agreement. Possession is 的: {name} 的郵件. The English word order often
  reverses: `Free times: {room}` becomes {room} 的空閒時間. Status words that
  English writes in lower case (accepted, declined, tentative) are 已接受,
  已拒絕, 暫訂; Chinese has no letter case, so "lower case" labels need no
  special handling. Title case in English (Align Center) has no counterpart.
  `Heading` and `Title` are both 標題 in Office; where both appear together,
  Title is 標題 and a numbered heading is 標題 1, 標題 2.

## The apps

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | 文件 |
| Worksheets | 工作表 |
| Presentations | 簡報 |
| Mail | 郵件 |
| Calendar | 行事曆 |
| Contacts | 連絡人 |
| Pictures | 相片 |
| Image (the editor) | 影像 |
| Video | 影片 |
| Home (the launcher) | 首頁 |
| Talk | 通話 |
| Locker | 保險箱 |
| Colour | 色彩 |
| Base | 資料庫 |
| Broadcast | 直播 |
| Recorder | 錄製器 |

## Tabs and frame

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| File | 檔案 |
| Home | 常用 |
| Insert | 插入 |
| Draw | 繪圖 |
| Design | 設計 |
| Layout | 版面配置 |
| Page Layout | 頁面配置 |
| References | 參考資料 |
| Mailings | 郵件 |
| Review | 校閱 |
| View | 檢視 |
| Help | 說明 |
| Formulas | 公式 |
| Data | 資料 |
| Automate | 自動化 |
| Transitions | 轉換 |
| Animations | 動畫 |
| Slide Show | 投影片放映 |
| Record | 錄製 |
| Table Design | 表格設計 |
| Table Layout | 表格版面配置 |
| Shape Format | 圖形格式 |
| Picture Format | 圖片格式 |
| Ribbon | 功能區 |
| Pane | 窗格 |
| Status bar | 狀態列 |
| Dialog | 對話方塊 |
| Settings | 設定 |
| Language | 語言 |
| Theme | 佈景主題 |

## Commands

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| New | 新增 |
| Open | 開啟 |
| Save | 儲存 |
| Save As | 另存新檔 |
| Save as Template | 另存為範本 |
| Close | 關閉 |
| Print | 列印 |
| Export | 匯出 |
| Import | 匯入 |
| Share | 共用 |
| Undo | 復原 |
| Redo | 取消復原 |
| Cut | 剪下 |
| Copy | 複製 |
| Paste | 貼上 |
| Paste Special | 選擇性貼上 |
| Delete | 刪除 |
| Remove | 移除 |
| Rename | 重新命名 |
| Select All | 全選 |
| Find | 尋找 |
| Replace | 取代 |
| Go To | 移至 |
| Insert | 插入 |
| Apply | 套用 |
| Apply to All | 全部套用 |
| OK | 確定 |
| Cancel | 取消 |
| Yes / No | 是 / 否 |
| Done | 完成 |
| Next / Previous | 下一個 / 上一個 (in a wizard: 下一步 / 上一步) |
| Back | 返回 |
| Refresh | 重新整理 |
| Update | 更新 |
| Accept / Reject | 接受 / 拒絕 |
| Sort | 排序 |
| Filter | 篩選 |
| Group / Ungroup | 組成群組 / 取消群組 |
| Merge / Split | 合併 / 分割 |
| Zoom In / Zoom Out | 放大 / 縮小 |
| Full screen | 全螢幕 |
| Minimise / Maximise / Restore | 最小化 / 最大化 / 還原 |
| Expand / Collapse | 展開 / 摺疊 |
| Browse | 瀏覽 |
| Add | 新增 |
| Edit | 編輯 |
| Reset | 重設 |
| Clear | 清除 |
| Show / Hide | 顯示 / 隱藏 |
| More | 更多 |
| None | 無 |
| Automatic | 自動 |

## Text and documents

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Document | 文件 |
| Page | 頁面 |
| Paragraph | 段落 |
| Line | 行 (of text); 線條 (a drawn line) |
| Word (a word) | 字 |
| Character | 字元 |
| Font | 字型 |
| Font size | 字型大小 |
| Bold / Italic / Underline | 粗體 / 斜體 / 底線 |
| Strikethrough | 刪除線 |
| Subscript / Superscript | 下標 / 上標 |
| Text highlight colour | 文字醒目提示色彩 |
| Font colour | 字型色彩 |
| Colour | 色彩 |
| Style / Styles | 樣式 / 樣式 |
| Heading | 標題 |
| Title | 標題 |
| Bullets / Numbering | 項目符號 / 編號 |
| Multilevel List | 多層次清單 |
| List | 清單 |
| Indent | 縮排 |
| Alignment / Align Left / Centre / Align Right / Justify | 對齊方式 / 靠左對齊 / 置中 / 靠右對齊 / 左右對齊 |
| Line spacing | 行距 |
| Margins | 邊界 |
| Orientation / Portrait / Landscape | 方向 / 直向 / 橫向 |
| Size (paper) | 大小 |
| Columns | 欄 |
| Breaks | 分隔設定 |
| Header / Footer | 頁首 / 頁尾 |
| Footnote / Endnote | 註腳 / 章節附註 |
| Table of Contents | 目錄 |
| Caption | 標號 |
| Bookmark | 書籤 |
| Cross-reference | 交互參照 |
| Citation / Bibliography | 引文 / 書目 |
| Index | 索引 |
| Comment / Comments | 註解 / 註解 |
| Track Changes | 追蹤修訂 |
| Spelling | 拼字 |
| Thesaurus | 同義字 |
| Word Count | 字數統計 |
| Watermark | 浮水印 |
| Page Colour | 頁面色彩 |
| Text Box | 文字方塊 |
| WordArt | 文字藝術師 |
| Equation | 方程式 |
| Symbol | 符號 |
| Hyperlink / Link | 超連結 / 連結 |
| Mail Merge | 合併列印 |
| Envelopes / Labels | 信封 / 標籤 |
| Template | 範本 |
| Untitled | 未命名 |

## Workbooks

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Workbook | 活頁簿 |
| Sheet / Worksheet | 工作表 / 工作表 |
| Cell / Cells | 儲存格 / 儲存格 |
| Row / Rows | 列 / 列 |
| Column / Columns | 欄 / 欄 |
| Range | 範圍 |
| Formula | 公式 |
| Function | 函數 |
| Number format | 數值格式 |
| Currency / Percentage / Date / Time | 貨幣 / 百分比 / 日期 / 時間 |
| Freeze Panes | 凍結窗格 |
| Conditional Formatting | 設定格式化的條件 |
| Format as Table | 格式化為表格 |
| PivotTable | 樞紐分析表 |
| Chart | 圖表 |
| Sparklines | 走勢圖 |
| Slicer | 交叉分析篩選器 |
| Data Validation | 資料驗證 |
| Remove Duplicates | 移除重複項 |
| Text to Columns | 資料剖析 |
| Power Query | Power Query |
| Name box | 名稱方塊 |
| Formula bar | 資料編輯列 |
| AutoSum | 自動加總 |
| Sum / Average / Count / Min / Max | 加總 / 平均值 / 計數 / 最小值 / 最大值 |

## Presentations

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Presentation | 簡報 |
| Slide / Slides | 投影片 / 投影片 |
| New Slide | 新投影片 |
| Layout | 版面配置 |
| Section | 章節 |
| Master | 母片 |
| Notes | 備忘稿 |
| Handout | 講義 |
| Shape / Shapes | 圖案 / 圖案 |
| Picture / Pictures | 圖片 / 圖片 |
| Fill / Outline | 填滿 / 外框 |
| Shadow / Glow / Reflection | 陰影 / 光暈 / 反射 |
| Transition | 轉換 |
| Animation | 動畫 |
| From Beginning / From Current Slide | 從首張投影片 / 從目前投影片 |
| Presenter View | 簡報者檢視畫面 |
| Rehearse Timings | 排練計時 |
| Video / Audio | 影片 / 音訊 |

## Mail, calendar, contacts, pictures

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | 收件匣 / 寄件備份 / 草稿 / 寄件匣 / 垃圾郵件 / 封存 / 垃圾桶 |
| Message | 郵件 (a mail message); 訊息 (a chat or notice) |
| New message | 新郵件 |
| Reply / Reply All / Forward | 回覆 / 全部回覆 / 轉寄 |
| Send | 傳送 |
| Attachment | 附件 |
| Account | 帳戶 |
| Folder | 資料夾 |
| Search | 搜尋 |
| Unread / Flagged | 未讀取 / 已標幟 |
| Rules | 規則 |
| Signature | 簽名 |
| Event | 活動 |
| Meeting | 會議 |
| Today / Day / Week / Month / Agenda | 今天 / 日 / 週 / 月 / 議程 |
| Repeat | 重複 |
| Reminder | 提醒 |
| Contact | 連絡人 |
| Address book | 通訊錄 |
| Phone / Email / Address | 電話 / 電子郵件 / 地址 |
| Rotate / Crop / Flip | 旋轉 / 裁剪 / 翻轉 |
| Rating / Tags | 評等 / 標籤 |
| Slideshow | 投影片放映 |
| Brightness / Contrast | 亮度 / 對比 |
| Trim / Split | 修剪 / 分割 |
| Export video | 匯出影片 |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain polite Taiwan Mandarin with 您 where the reader is named, not word for
word. Keep a sentence's facts (a number, a name in `{braces}`, a key) exactly.
Prefer 無法開啟這個檔案。 over a literal rendering, and 未傳送：{reason} for
`Not sent: {reason}`.

## More recurring terms

| English | Chinese (Traditional, Taiwan) |
| :-- | :-- |
| Database | 資料庫 |
| Table (in a database) | 資料表 |
| Table (in a document) | 表格 |
| Record (a database row) | 記錄 |
| Field | 欄位 |
| Read only | 唯讀 |
| Network share | 網路共用資料夾 |
| Web address | 網址 |
| Server | 伺服器 |
| Password | 密碼 |
| Sign-in | 登入資訊 |
| Key (access key, stream key) | 金鑰 / 串流金鑰 |
| Encrypted | 已加密 |
| This computer | 這部電腦 |
| Schedule | 排程 |
| Sample records | 範例記錄 |
| Data Files (the database file kind) | 資料檔案 |
| Stream / Go live | 串流 / 開始直播 |
| Platform | 平台 |
| Room (meeting room) | 會議室 |
| Booking | 預約 |
| Invitation / Invite | 邀請 |
| Organizer | 召集人 |
| Cancellation | 取消通知 |
| Accepted / Declined / Tentative | 已接受 / 已拒絕 / 暫訂 |
| Free / Busy | 空閒 / 忙碌 |
| All day | 整天 |
| Occurrence (of a repeating event) | 這一次 (this occurrence); 每一次 (every occurrence) |
| Time zone | 時區 |
| Cc / Bcc | 副本 / 密件副本 |
| Pin / Unpin | 釘選 / 取消釘選 |
| Link / Unlink | 連結 / 取消連結 |
| Standard colours / Recent colours / More colours… | 標準色彩 / 最近使用的色彩 / 其他色彩… |
| Clipboard | 剪貼簿 |
| Borders | 框線 |
| Background | 背景 |
| Alt Text | 替代文字 |
| Accessibility / Check Accessibility | 協助工具 / 檢查協助工具 |
| Bring Forward / Bring to Front | 上移一層 / 移到最上層 |
| Banded Rows / Banded Columns | 帶狀列 / 帶狀欄 |

## Intents and versions

### Voice
- The reader is 您, never 你, as this glossary sets; most labels need no
  pronoun, and 您 appears only where a sentence names the reader.
- A command is the bare verb or verb plus object (尋找收件者); a button or
  menu item never takes 請, and a sentence opens with 請 only sparingly.
- A state takes 正在 while it runs and 已 when it is done; a yes or no
  question is 要...嗎？ in medium and 您要...嗎？ in complete.

### By intent
Each row shows the medium version.

| Intent | How this language phrases it | English | Chinese (Traditional, Taiwan) |
| :-- | :-- | :-- | :-- |
| action (button) | Verb plus object, no subject, no 請 | Find Recipient | 尋找收件者 |
| action (menu) | As a button; a command that opens a dialog ends with … | Close Window | 關閉視窗 |
| name | Noun phrase, Office's Taiwan word where it has one | Uppercase | 全部大寫 |
| heading | Noun phrase, no final mark | Folder settings | 資料夾設定 |
| state (working) | 正在 + verb + object + … | Finding suggestions… | 正在尋找建議… |
| state (done) | 已 + verb + object; 。 if English has a full stop | Link copied. Paste it anywhere. | 已複製連結。可貼到任何位置。 |
| question | 要 + action + 嗎？ | Remove {name} from your contacts? | 要從連絡人中移除 {name} 嗎？ |
| advice | Instruction, verb first, 按一下 for click, ends with 。 | Click elsewhere to break the word there. | 按一下其他位置，即可在該處斷字。 |
| explain | Plain statement, ends with 。 when English does | The bullet character. | 項目符號字元。 |
| warning | Fact first, then what follows; 無法復原 for cannot be undone | This cannot be undone. | 此動作無法復原。 |
| error: cannot | 無法 + verb | Could not send: {why}. | 無法傳送：{why}。 |
| error: failed | Task + 失敗 | Text recognition failed. | 文字辨識失敗。 |
| error: not-found | 找不到 + object | That picture's file is missing | 找不到該圖片的檔案 |
| error: not-enough | Thing + 不足，無法 + verb; or Thing + 太大 or 過長 | There is not enough space on the disk to record. | 磁碟空間不足，無法錄製。 |
| error: unavailable | 無法使用 + thing | Speech is not available on this system. | 此系統無法使用語音功能。 |
| error: not-allowed | 未允許 or 不允許 + verb | The camera was not allowed. | 未允許使用相機。 |
| error: invalid | 「{x}」不是 + noun, or thing + 無效 | "{text}" is not a range | 「{text}」不是範圍 |
| error: other | The rule, stated plainly | Keep at least one worksheet visible. | 至少須保留一張可見的工作表。 |
| sample | Content a Taiwan reader would write; dates in Chinese order with spaces round digits | free on 12 March? (the suite has no sample label) | 3 月 12 日有空嗎？ |

### Short, medium and complete
- **Width**: each Chinese character and each full-width mark (，。、：；？！「」（）)
  takes 2 columns; a Latin letter, digit or half-width space takes 1; each
  `{placeholder}` takes 8. The spaces round digits and placeholders count, so
  3 月 12 日 is 11 columns.
- **Short** keeps the verb first and the core noun after it. Drop, in this
  order: modifiers and 的 phrases; the particles 了, 嗎, 呢, 吧 and the 要 of a
  question (a question keeps ？); 一個, 一張, 這個 before a noun that is not
  being counted; 您的, 此, 該 where the control shows the thing; the second
  clause or sentence. Keep 已 and 正在 (the state) and 無法, 找不到, 不足, 失敗
  (the error kind).
- **Measure words with a count** stay in every version. Short drops the noun
  after the measure word when the control shows what is counted:
  {count} 張投影片 → {count} 張. Never keep the noun and drop the measure word.
- **Abbreviations**: none with a full stop. Allowed: the shorter Taiwan Office
  term where Office has two, and the Latin codes this glossary keeps (PDF, KB,
  Ctrl+N). Not allowed: clipped words Office does not use (投影 for 投影片),
  mainland short forms, English words in place of Chinese ones, half-width
  marks to save columns.
- **Complete** adds the object or place English adds (在清單中, 從連絡人中),
  writes the whole sentence, and asks with 您要...嗎？. It may equal medium.

| English short | English medium | English complete | Short | Medium | Complete |
| :-- | :-- | :-- | :-- | :-- | :-- |
| Find | Find Recipient | Find a recipient in the list | 尋找 | 尋找收件者 | 在清單中尋找收件者 |
| Remove {name}? | Remove {name} from your contacts? | Do you want to remove {name} from your contacts? | 移除 {name}？ | 要從連絡人中移除 {name} 嗎？ | 您要從連絡人中移除 {name} 嗎？ |
| Could not set up | Could not be set up | This account could not be set up | 無法設定 | 無法設定 | 無法設定這個帳戶 |

### Punctuation and marks
- **Ellipsis**: one … (U+2026) at the end of a command that opens a dialog
  and of a working state, as Microsoft writes it; not the six-dot …… of
  Chinese prose, not three full stops. With an access key it follows the key:
  另存新檔(&A)….
- **Colon, question and exclamation marks** are full-width ：？！ with no space
  before or after, even next to Latin text or a placeholder: 無法傳送：{why}。
  Avoid ！ in messages.
- **Quotation marks** are 「」 with 『』 inside, with no space inside or
  outside them.
- **Capitalisation**: Chinese has none. Latin names keep their own case
  (Rutba Office, PDF).
- **Full stops**: a version whose English ends with a full stop ends with 。;
  one whose English does not (buttons, titles, fragment errors such as
  找不到該圖片的檔案) has none. Each version follows its own English.
- **Parentheses** are full-width （） around Chinese, half-width ( ) around a
  key or an access key.

### Access keys
- Chinese has no Latin letter to mark, so the key goes after the word as
  (&X), with the English letter, half-width parentheses and no space before:
  &Edit → 編輯(&E); &File → 檔案(&F); &View → 檢視(&V).
- Before an ellipsis, never after it: Save &As… → 另存新檔(&A)….
- Every version of a label keeps the same (&X); a label with no & in English
  gets none, and & never goes before a Chinese character.
