# French glossary for Rutba Office

The words the French (France) pack (`lang-fr`) uses for the suite's recurring
terms, so the same thing is called the same everywhere. It follows the words
people already know from Microsoft Office and Windows in French, as used in
France, and LibreOffice or plain everyday French where Office has no word.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** take the infinitive, as French Office does: Enregistrer (Save),
  Ouvrir (Open), Fermer (Close), Insérer (Insert), Ajouter un compte (Add
  account), Supprimer tout (Delete all).
- **The reader is addressed as vous**, never tu, as current Office does:
  « Fermez d'abord ce programme. », « Votre mot de passe ». Error messages
  prefer the impersonal Office turn where it reads well: « Impossible
  d'ouvrir ce fichier. », « Non envoyé : {reason} ».
- **Sentence case.** French capitalises only the first word of a label and
  proper names, never every word as English titles do: Mise en forme
  conditionnelle (Conditional Formatting), Mettre au premier plan (Bring to
  Front), Vérifier l'accessibilité (Check Accessibility).
- **Tab and group names** are the nouns French Office uses: Accueil,
  Insertion, Conception, Mise en page, Révision, Affichage. A group is named
  the same way: Presse-papiers, Police, Paragraphe, Styles.
- **Placeholders** such as `{name}`, `{count}` and `{table}` stay exactly as
  written, in braces, untranslated; French word order moves them where French
  wants them: « {table} ({count}) », « Renommer {name} », « Invitation de
  {name}. »
- **Gender and elision with placeholders.** The gender of `{name}` is unknown
  and it may begin with a vowel, so never write an article, an agreeing
  adjective or an elided form against a placeholder (no « le {name} », no
  « d'{name} »). Put a noun before it or use a colon: « La feuille {name} »,
  « Table : {name} », « Organisateur : {name} ». Past participles about a
  person in a placeholder stay out of agreement by rewording: « {name} a
  accepté. », « {name} a refusé. »
- **Keys and shortcuts** stay as written in the English: Ctrl+S, F7,
  Shift+F2, « Nouvel événement (Ctrl+N) ».
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, SQL, RTMP, AAC, H.264, HTTPS, `=SUM(ABOVE)`, `dd/mm/yyyy`.
  Function names (SUM, VLOOKUP) are never translated.
- **Brand and product names** stay as they are: Rutba Office, Rutba,
  Microsoft, Word, Excel, PowerPoint, Outlook, Office, Windows, Google, Gmail,
  iCloud, YouTube Studio, LinkedIn Live Studio, WordArt, SmartArt, Power
  Query. Menu names quoted from another company's site are given as that site
  shows them in French where known, else in English.
- **The app names** are translated as in the table below: Documents, Feuilles
  de calcul, Présentations, Courrier, Calendrier, and so on. They take a
  capital as names: « Ajoutez-en un dans Courrier, sous Comptes. »
- **Punctuation.** French puts a space before : ; ! ? and inside « »; here
  that space is an **ordinary space**, never a no-break space (U+00A0,
  U+202F), as TRANSLATING.md requires: « Envoyer l'invitation ? », « Lien : adresse
  web ». English "quotes" become « guillemets » with a space inside each mark.
  The apostrophe is the straight ' everywhere. The ellipsis … stays at the end
  of a command that opens a dialog, with no space before it: Parcourir…,
  Autres couleurs….
- **No em dash.** Where the English has (long dash) , write a colon, a comma,
  parentheses or a new sentence: "B5 (long dash) 176 × 250 mm" becomes « B5 (176 × 250
  mm) »; "Banded Rows (long dash) every other row shaded" becomes « Lignes à bandes :
  une ligne sur deux est ombrée ». No spaced en dash either; an en dash in a
  range (1 to 10) is fine.
- **Counts** use French's three plural forms, `one`, `many` and `other`, in
  that order. `one` covers 0 and 1, `many` is for large round numbers
  (1 000 000, where French says « de »), `other` for the rest:
  `one: {count} diapositive` / `many: {count} de diapositives` /
  `other: {count} diapositives`. Every form is written in full with `{count}`.
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, day before month), so a label never spells out a format. Units keep
  their symbols with an ordinary space: « 24 heures », « environ {seconds} s ».
- **Words that clash, as in Office.** French Office uses Annuler for both
  Undo and Cancel, and Réduire for both Minimise and Collapse; the pack does
  the same, as users expect, and the context (a button in a dialog, the
  window controls) tells them apart. Enregistrement is both the Record tab and
  a database record, as in Access.

## The apps

| English | French |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Documents |
| Worksheets | Feuilles de calcul |
| Presentations | Présentations |
| Mail | Courrier |
| Calendar | Calendrier |
| Contacts | Contacts |
| Pictures | Photos |
| Image (the editor) | Image |
| Video | Vidéo |
| Home (the launcher) | Accueil |
| Talk | Talk |
| Locker | Coffre |
| Colour | Couleur |
| Base | Base |
| Data Files (the database's file app) | Fichiers de données |
| Broadcast | Diffusion |
| Recorder | Enregistreur |

Pictures is « Photos », as in Windows, so it never clashes with Image, the
editor.

## Tabs and frame

| English | French |
| :-- | :-- |
| File | Fichier |
| Home | Accueil |
| Insert | Insertion |
| Draw | Dessin |
| Design | Conception |
| Layout | Disposition (Word's Layout tab: Mise en page) |
| Page Layout | Mise en page |
| References | Références |
| Mailings | Publipostage |
| Review | Révision |
| View | Affichage |
| Help | Aide |
| Formulas | Formules |
| Data | Données |
| Automate | Automatiser |
| Transitions | Transitions |
| Animations | Animations |
| Slide Show | Diaporama |
| Record | Enregistrement |
| Table Design | Création de tableau |
| Table Layout | Disposition du tableau |
| Shape Format | Format de la forme |
| Picture Format | Format de l'image |
| Ribbon | Ruban |
| Pane | Volet |
| Status bar | Barre d'état |
| Dialog | Boîte de dialogue |
| Settings | Paramètres |
| Language | Langue |
| Theme | Thème |

## Commands

| English | French |
| :-- | :-- |
| New | Nouveau |
| Open | Ouvrir |
| Save | Enregistrer |
| Save As | Enregistrer sous |
| Save as Template | Enregistrer comme modèle |
| Close | Fermer |
| Print | Imprimer |
| Export | Exporter |
| Import | Importer |
| Share | Partager |
| Undo | Annuler |
| Redo | Rétablir |
| Cut | Couper |
| Copy | Copier |
| Paste | Coller |
| Paste Special | Collage spécial |
| Delete | Supprimer |
| Remove | Supprimer (Retirer when nothing is destroyed: Retirer du calendrier) |
| Rename | Renommer |
| Select All | Sélectionner tout |
| Find | Rechercher |
| Replace | Remplacer |
| Go To | Atteindre |
| Insert | Insérer |
| Apply | Appliquer |
| Apply to All | Appliquer partout |
| OK | OK |
| Cancel | Annuler |
| Yes / No | Oui / Non |
| Done | Terminé |
| Next / Previous | Suivant / Précédent |
| Back | Retour |
| Refresh | Actualiser |
| Update | Mettre à jour |
| Accept / Reject | Accepter / Refuser |
| Sort | Trier |
| Filter | Filtrer |
| Group / Ungroup | Grouper / Dissocier |
| Merge / Split | Fusionner / Fractionner |
| Zoom In / Zoom Out | Zoom avant / Zoom arrière |
| Full screen | Plein écran |
| Minimise / Maximise / Restore | Réduire / Agrandir / Restaurer |
| Expand / Collapse | Développer / Réduire |
| Browse | Parcourir |
| Add | Ajouter |
| Edit | Modifier |
| Reset | Réinitialiser |
| Clear | Effacer |
| Show / Hide | Afficher / Masquer |
| More | Plus (Autres… before a noun: Autres couleurs…) |
| None | Aucun (Aucune for a feminine noun) |
| Automatic | Automatique |

## Text and documents

| English | French |
| :-- | :-- |
| Document | Document |
| Page | Page |
| Paragraph | Paragraphe |
| Line | Ligne |
| Word (a word) | Mot |
| Character | Caractère |
| Font | Police |
| Font size | Taille de police |
| Bold / Italic / Underline | Gras / Italique / Souligné |
| Strikethrough | Barré |
| Subscript / Superscript | Indice / Exposant |
| Text highlight colour | Couleur de surbrillance du texte |
| Font colour | Couleur de police |
| Colour | Couleur |
| Style / Styles | Style / Styles |
| Heading | Titre (Heading 1: Titre 1) |
| Title | Titre |
| Bullets / Numbering | Puces / Numérotation |
| Multilevel List | Liste à plusieurs niveaux |
| List | Liste |
| Indent | Retrait |
| Alignment / Align Left / Centre / Align Right / Justify | Alignement / Aligner à gauche / Centrer / Aligner à droite / Justifier |
| Line spacing | Interligne |
| Margins | Marges |
| Orientation / Portrait / Landscape | Orientation / Portrait / Paysage |
| Size (paper) | Taille |
| Columns | Colonnes |
| Breaks | Sauts |
| Header / Footer | En-tête / Pied de page |
| Footnote / Endnote | Note de bas de page / Note de fin |
| Table of Contents | Table des matières |
| Caption | Légende |
| Bookmark | Signet |
| Cross-reference | Renvoi |
| Citation / Bibliography | Citation / Bibliographie |
| Index | Index |
| Comment / Comments | Commentaire / Commentaires |
| Track Changes | Suivi des modifications |
| Spelling | Orthographe |
| Thesaurus | Dictionnaire des synonymes |
| Word Count | Statistiques (the button); nombre de mots (the count) |
| Watermark | Filigrane |
| Page Colour | Couleur de page |
| Text Box | Zone de texte |
| WordArt | WordArt |
| Equation | Équation |
| Symbol | Symbole |
| Hyperlink / Link | Lien hypertexte / Lien |
| Mail Merge | Publipostage |
| Envelopes / Labels | Enveloppes / Étiquettes |
| Template | Modèle |
| Untitled | Sans titre |

## Workbooks

| English | French |
| :-- | :-- |
| Workbook | Classeur |
| Sheet / Worksheet | Feuille / Feuille de calcul |
| Cell / Cells | Cellule / Cellules |
| Row / Rows | Ligne / Lignes |
| Column / Columns | Colonne / Colonnes |
| Range | Plage |
| Formula | Formule |
| Function | Fonction |
| Number format | Format de nombre |
| Currency / Percentage / Date / Time | Monétaire / Pourcentage / Date / Heure |
| Freeze Panes | Figer les volets |
| Conditional Formatting | Mise en forme conditionnelle |
| Format as Table | Mettre sous forme de tableau |
| PivotTable | Tableau croisé dynamique |
| Chart | Graphique |
| Sparklines | Graphiques sparkline |
| Slicer | Segment |
| Data Validation | Validation des données |
| Remove Duplicates | Supprimer les doublons |
| Text to Columns | Convertir (in full: Convertir le texte en colonnes) |
| Power Query | Power Query |
| Name box | Zone Nom |
| Formula bar | Barre de formule |
| AutoSum | Somme automatique |
| Sum / Average / Count / Min / Max | Somme / Moyenne / Nombre / Min / Max |

## Presentations

| English | French |
| :-- | :-- |
| Presentation | Présentation |
| Slide / Slides | Diapositive / Diapositives |
| New Slide | Nouvelle diapositive |
| Layout | Disposition |
| Section | Section |
| Master | Masque |
| Notes | Notes |
| Handout | Document à distribuer |
| Shape / Shapes | Forme / Formes |
| Picture / Pictures | Image / Images |
| Fill / Outline | Remplissage / Contour |
| Shadow / Glow / Reflection | Ombre / Lumière / Réflexion |
| Transition | Transition |
| Animation | Animation |
| From Beginning / From Current Slide | À partir du début / À partir de la diapositive actuelle |
| Presenter View | Mode Présentateur |
| Rehearse Timings | Vérification du minutage |
| Video / Audio | Vidéo / Audio |

## Mail, calendar, contacts, pictures

| English | French |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Boîte de réception / Éléments envoyés / Brouillons / Boîte d'envoi / Courrier indésirable / Archive / Corbeille |
| Message | Message |
| New message | Nouveau message |
| Reply / Reply All / Forward | Répondre / Répondre à tous / Transférer |
| Send | Envoyer |
| Attachment | Pièce jointe |
| Account | Compte |
| Folder | Dossier |
| Search | Rechercher |
| Unread / Flagged | Non lu / Avec indicateur |
| Rules | Règles |
| Signature | Signature |
| Event | Événement |
| Meeting | Réunion |
| Today / Day / Week / Month / Agenda | Aujourd'hui / Jour / Semaine / Mois / Agenda |
| Repeat | Répéter (the setting: Périodicité; Does not repeat: Aucune périodicité) |
| Reminder | Rappel |
| Contact | Contact |
| Address book | Carnet d'adresses |
| Phone / Email / Address | Téléphone / E-mail / Adresse |
| Rotate / Crop / Flip | Faire pivoter / Rogner / Retourner |
| Rating / Tags | Note / Mots clés |
| Slideshow | Diaporama |
| Brightness / Contrast | Luminosité / Contraste |
| Trim / Split | Découper / Fractionner |
| Export video | Exporter la vidéo |

## Errors and plain sentences

Error messages, tooltips and explanations are full sentences: translate the
meaning, in plain, polite French addressed as vous, not word for word. Keep a
sentence's facts (a number, a name in `{braces}`, a key) exactly. Prefer
« Impossible d'ouvrir ce fichier. » or « Ce fichier n'a pas pu être ouvert. »
over a literal rendering, and short status lines in the Office style:
« Enregistré, mais non envoyé : {reason} ».

## More recurring terms

| English | French |
| :-- | :-- |
| Record (a database record) | Enregistrement |
| Field | Champ |
| Table (database) | Table |
| Database | Base de données |
| Read only | Lecture seule |
| Network share | Partage réseau |
| Web address | Adresse web |
| Password | Mot de passe |
| Sign-in (the details sent) | Identifiants de connexion |
| Key or token | Clé ou jeton |
| Unpin | Détacher |
| Sample records | Exemples d'enregistrements |
| Stream key | Clé de stream |
| Server address | Adresse du serveur |
| Go live | Passer en direct |
| Invitation / Invite | Invitation / Inviter |
| Organizer | Organisateur |
| Accepted / Declined / Tentative | Accepté / Refusé / Provisoire |
| All day | Toute la journée |
| Time zone | Fuseau horaire |
| Room / Rooms and resources | Salle / Salles et ressources |
| Mailbox | Boîte aux lettres |
| Availability | Disponibilités |
| Busy / Free | Occupé / Libre |
| Cancellation | Annulation |
| Occurrence / Every occurrence | Occurrence / Toutes les occurrences |
| Every day / Every week / Every weekday | Tous les jours / Toutes les semaines / Tous les jours ouvrés |
| Kept in step (synced) | Synchronisé |
| Recent colours / Standard colours / More colours… | Couleurs récentes / Couleurs standard / Autres couleurs… |
| Accent | Accentuation |
| Background | Arrière-plan |
| Banded Rows / Banded Columns | Lignes à bandes / Colonnes à bandes |
| Bring Forward / Bring to Front | Avancer / Mettre au premier plan |
| Borders | Bordures |
| Clipboard | Presse-papiers |
| Clear formatting / Change case | Effacer la mise en forme / Modifier la casse |
| Alt Text | Texte de remplacement |
| Check Accessibility | Vérifier l'accessibilité |
| Actual Size / Arrange | Taille réelle / Organiser |
| Attach / Attachments | Joindre / Pièces jointes |
| Blank document / Blank presentation / Blank worksheet | Document vierge / Présentation vierge / Feuille de calcul vierge |
| Add to Dictionary | Ajouter au dictionnaire |
| Apply Redactions | Appliquer les biffures |
| Captions (video) | Sous-titres |
| Cc / Bcc | Cc / Cci |

## Intents and versions

### Voice

The reader is vous, never tu. Buttons, menu items and ribbon commands take
the infinitive (Enregistrer, Fermer la fenêtre). Instructions and advice take
the vous imperative (« Fermez d'abord ce programme. »). Errors prefer the
impersonal Office turns (« Impossible de ... », « ... introuvable ») to a
sentence with a subject.

### By intent

| Intent | How this language phrases it | English | French |
| :-- | :-- | :-- | :-- |
| action on a button | Infinitive; complete adds the object | Record | Enregistrer |
| action in a menu | Infinitive, sentence case, article kept | Close Window | Fermer la fenêtre |
| name | Noun or noun phrase, no article | Conversations | Conversations |
| heading | Noun phrase, sentence case, no full stop | Folder settings | Paramètres du dossier |
| state while working | Noun of the action, then …; add « en cours » only when the noun alone reads as a name | Finding suggestions… | Recherche de suggestions… |
| state when done | Past participle agreeing with its noun, no auxiliary | Link copied. Paste it anywhere. | Lien copié. Collez-le où vous voulez. |
| question | Short and medium: infinitive, space, ?; complete: « Voulez-vous ... ? » | Remove {name} from your contacts? | Supprimer {name} de vos contacts ? |
| advice | Vous imperative, full stop | Sign in to Talk to accept. | Connectez-vous à Talk pour accepter. |
| explain | Plain statement or noun phrase, full stop when it is a sentence | The bullet character. | Le caractère de puce. |
| warning | Future or present, the consequence stated plainly | If you don’t save, your changes will be lost. | Si vous n'enregistrez pas, vos modifications seront perdues. |
| error: cannot | « Impossible de » + infinitive; « ... n'a pas pu être ... » in a longer sentence | Could not be set up | Impossible de configurer |
| error: failed | « Échec de » + noun; « Échec : {reason} » for a fragment | Text recognition failed. | Échec de la reconnaissance du texte. |
| error: not-found | Noun + « introuvable » | That picture’s file is missing | Fichier de l'image introuvable. |
| error: not-enough | Noun + « insuffisant »; « Il n'y a pas assez de ... » in full | There is not enough space on the disk to record. | Il n'y a pas assez d'espace sur le disque pour enregistrer. |
| error: unavailable | « ... n'est pas disponible »; short: noun + « indisponible » | Speech is not available on this system. | La synthèse vocale n'est pas disponible sur ce système. |
| error: not-allowed | « ... n'a pas été autorisé »; short: noun + « non autorisé » | The camera was not allowed. | L'accès à la caméra n'a pas été autorisé. |
| error: invalid | « ... n'est pas un/une » + noun, or « non valide »; never « invalide » | "{text}" is not a range | « {text} » n'est pas une plage. |
| error: other | Plain sentence; vous imperative for what to do | A workbook must contain at least one visible worksheet. | Un classeur doit contenir au moins une feuille de calcul visible. |
| sample | Natural French content of the same kind and length, with names and places of France | Horizontal text | Texte horizontal |

An adjective after an unknown placeholder or a feminine noun agrees with the
noun it follows; where that noun is a placeholder, put a known noun first
(« Le fichier {name} est introuvable. »).

### Short, medium and complete

Medium is the version `messages.json` holds and today's code shows: write it
first, then make the other two from it.

Short:

- Lead with the word that carries the meaning: the verb for an action, the
  noun for a name, the thing that failed for an error (« Fichier
  introuvable », « Espace disque insuffisant »).
- Drop in this order: the polite frame (« Voulez-vous », « Vous pouvez »),
  articles and possessives, the place or the reason, then adjectives. Never
  drop a placeholder, a negation or the word that says what failed.
- An error or status becomes noun plus adjective or participle: « Échec de
  l'envoi », « Lien copié ». A question stays a question: « Supprimer
  {name} ? ».
- Abbreviate only when dropping words is not enough. An abbreviation removes
  at least three letters, cuts before a vowel and ends with a full stop.
  Allowed: n° (numéro), p. (page), env. (environ), car. (caractères), max.
  and min. in a column head, and unit symbols without a full stop (o, Ko, Mo,
  Go, px, pt, s, min, h, %).
- Never abbreviate a verb on a button, an app name, a tab name or a glossary
  term; never use SMS forms (ds, ts, qqch, pr) or a slash for « ou ».
- A counted label keeps `{count}` and all three forms. Use a short noun or a
  symbol; an abbreviated noun is the same in every form, and `many` then
  drops « de »: `one: {count} car.` / `many: {count} car.` /
  `other: {count} car.`

Complete:

- Adds what the others leave to the context: the object (« ce compte »), the
  place (« dans la liste ») and the next step.
- A message, error, advice or tooltip is one or more full sentences, each
  with a full stop. A question opens with « Voulez-vous » where the English
  asks "Do you want".
- A command stays an infinitive with its object (« Rechercher un
  destinataire dans la liste »); it never becomes a sentence to the reader.
- Tooltips and screen readers read complete, so it must make sense alone.

Worked examples (short | medium | complete):

- English: Find | Find Recipient | Find a recipient in the list
- French: Rechercher | Rechercher un destinataire | Rechercher un
  destinataire dans la liste
- English: Remove {name}? | Remove {name} from your contacts? | Do you want to
  remove {name} from your contacts?
- French: Supprimer {name} ? | Supprimer {name} de vos contacts ? |
  Voulez-vous supprimer {name} de vos contacts ?
- English: Not enough disk space to record. | There is not enough space on the
  disk to record. | There is not enough space on the disk to record.
- French: Espace disque insuffisant. | Il n'y a pas assez d'espace sur le
  disque pour enregistrer. | Il n'y a pas assez d'espace sur le disque pour
  enregistrer.
- A counted short, English `{count} wd` / `{count} wds`: French
  `one: {count} mot` / `many: {count} de mots` / `other: {count} mots`
  (the noun is short already, so nothing is abbreviated).

### Punctuation and marks

- A command that opens a dialog ends with … (one character, no space
  before) in every version: Parcourir…, Enregistrer sous…. A state while
  working ends with … too.
- An ordinary space goes before : ; ! ? and never a no-break space:
  « Envoyer l'invitation ? », « Table : {name} », « Échec : {reason} ».
- Quotation marks are « » with an ordinary space inside each mark; a quote
  inside a quote takes “ ”. English "{text}" becomes « {text} ».
- The apostrophe is the straight '. Capitals keep their accents: État,
  À propos, Échec.
- Sentence case on buttons, menu items, tabs, headings and dialog titles.
- Errors, warnings, advice and every full sentence end with a full stop, as
  the Microsoft French guide asks, even where the English short has none.
  No full stop on buttons, menu items, names, headings, titles, or a
  fragment that ends with a placeholder.
- No exclamation marks in messages. Avoid parentheses in errors: use a colon
  or a second sentence.
- A number and its unit or % take an ordinary space: « {seconds} s »,
  « {percent} % ».

### Access keys

- `&` goes before a letter of the French word itself: &Fichier, &Modifier,
  Enregistrer &sous…, &Insertion.
- Take the first letter when it is free in that menu or dialog, else another
  clear letter of the main word; every key is unique in its menu or dialog.
- Avoid accented letters and ç (é, è, à, ç), and the narrow i, l, j when
  another letter is free.
- One `&` per label, never before a space, a mark, the … or a placeholder.
  Every version that keeps the word keeps the same letter.
- The `(&X)` form after the word is for scripts without Latin letters; French
  never uses it.
