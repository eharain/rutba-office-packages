# Spanish (Spain) glossary for Rutba Office

The words the Spanish (Spain, es-ES) pack uses for the suite's recurring
terms, so the same thing is called the same everywhere. It follows the words
people already know from Microsoft Office and Windows in Spain's Spanish where
those exist, LibreOffice where Office has none, and plain everyday Spanish of
Spain where neither does (ordenador, archivo, vídeo).

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the infinitive, as
  Office in Spanish does: Guardar, Abrir, Cerrar, Insertar, Cambiar nombre,
  Enviar invitación, Agregar una sala.
- **The reader is addressed as tú**, as current Microsoft Office and Windows
  in Spain do, never usted. Instructions and questions use the tú forms:
  «¿Quieres guardar los cambios?», «Selecciona una celda y pulsa Entrar.»,
  «Agrega una en Correo, en Cuentas.»
- **Capitals**: sentence case everywhere, tab and group names included, as
  Office does: Diseño de página, Guardar como plantilla, Formato condicional.
  Only the first word and proper names take a capital. Days and months are
  lower case (lunes, marzo).
- **Tab and group names** take the noun or the infinitive Office uses for that
  tab: Archivo, Inicio, Insertar, Dibujar, Diseño, Revisar, Vista.
- **Placeholders** such as `{name}`, `{count}`, `{table}` stay exactly as
  written, in braces, untranslated; Spanish word order moves them where it
  needs them: «{table} está vinculada», «Desvincular {name}».
- **Keys and shortcuts** stay as they are: Ctrl+S, F7, Shift+F2. Key names in
  running text keep the English printed on the keyboard (Ctrl, Shift, Alt);
  Enter is «Entrar» and Esc stays Esc, as in Windows. Example: «Nuevo evento
  (Ctrl+N)».
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, RTMP, H.264, AAC, SQL. Function names in formulas stay in
  English (SUM, VLOOKUP), as TRANSLATING.md requires, even though Excel in Spanish
  shows SUMA and BUSCARV.
- **Brand and product names** stay as written: Rutba Office, Microsoft, Word,
  Excel, PowerPoint, Outlook, Windows, Google, iCloud, YouTube Studio, LinkedIn
  Live Studio, WordArt, SmartArt, Power Query.
- **App names** of the suite are translated as in the first table below:
  Documentos, Hojas de cálculo, Presentaciones, Correo, Calendario.
- **Punctuation**: questions and exclamations open with ¿ and ¡: «¿Leer de
  estos lugares?», «¿Enviar la invitación?». Quotation marks are the Spanish
  angle quotes « », with " " inside a quotation: «libre el 12 de marzo?».
  The ellipsis … stays at the end of a command that opens a dialog:
  Examinar…, Más colores…, Cambiar…
- **No em dash.** Where the English has (long dash) , write a colon, a comma,
  parentheses or a new sentence: «Cuentas: un servidor CalDAV o CardDAV
  (iCloud, Fastmail, Nextcloud y similares) sincronizado con este
  ordenador». No raya (the Spanish dialogue dash) and no spaced en dash
  either; an en dash in a range (1 to 10) is fine.
- **No no-break spaces**: ordinary spaces only, including before % (25 %)
  and inside numbers.
- **Counts** use the three forms `Intl.PluralRules` gives Spanish, `one`,
  `many` and `other`, each written out in full with `{count}`:
  - `one`: {count} archivo (1 archivo)
  - `many`: {count} de archivos (1 000 000 de archivos; large round
    millions take «de»)
  - `other`: {count} archivos (0 archivos, 2 archivos, 1,5 archivos)
  Words that agree with the count agree in every form: «Se escribió {count}
  evento.» / «Se escribieron {count} de eventos.» / «Se escribieron {count}
  eventos.»
- **Numbers and dates** are formatted by the window from the region (es-ES:
  1.234,5 and 12/03/2026); a label never spells out a format of its own. In
  running text a date reads «12 de marzo».
- **Gender and placeholders**: `{name}`, `{table}`, `{room}` can be of either
  gender, so avoid an article or adjective that must agree with them. Put a
  noun in front that fixes the gender, or use a colon: «La tabla {table}
  está vinculada», «Sala {room}: no está libre a esa hora», «Cambiar
  {name}». Never write «de {name}» where the value may start with «el»
  (avoid «de el»); write «del archivo {name}» or restructure.
- **Participles in short status words** (accepted, declined, tentative,
  replied) stay in the masculine singular when they stand alone: aceptado,
  rechazado, provisional, respondido.
- **Computer** is «ordenador» («este ordenador»), not «equipo» or
  «computadora». A file is «archivo», never «fichero».

## The apps

| English | Spanish |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Documentos |
| Worksheets | Hojas de cálculo |
| Presentations | Presentaciones |
| Mail | Correo |
| Calendar | Calendario |
| Contacts | Contactos |
| Pictures | Imágenes |
| Image (the editor) | Imagen |
| Video | Vídeo |
| Home (the launcher) | Inicio |
| Talk | Talk |
| Locker | Caja fuerte |
| Colour | Color |
| Base | Base |
| Data Files | Archivos de datos |
| Broadcast | Emisión |
| Recorder | Grabadora |

## Tabs and frame

| English | Spanish |
| :-- | :-- |
| File | Archivo |
| Home | Inicio |
| Insert | Insertar |
| Draw | Dibujar |
| Design | Diseño |
| Layout | Disposición |
| Page Layout | Diseño de página |
| References | Referencias |
| Mailings | Correspondencia |
| Review | Revisar |
| View | Vista |
| Help | Ayuda |
| Formulas | Fórmulas |
| Data | Datos |
| Automate | Automatizar |
| Transitions | Transiciones |
| Animations | Animaciones |
| Slide Show | Presentación con diapositivas |
| Record | Grabar |
| Table Design | Diseño de tabla |
| Table Layout | Disposición de tabla |
| Shape Format | Formato de forma |
| Picture Format | Formato de imagen |
| Ribbon | Cinta de opciones |
| Pane | Panel |
| Status bar | Barra de estado |
| Dialog | Cuadro de diálogo |
| Settings | Configuración |
| Language | Idioma |
| Theme | Tema |

## Commands

| English | Spanish |
| :-- | :-- |
| New | Nuevo |
| Open | Abrir |
| Save | Guardar |
| Save As | Guardar como |
| Save as Template | Guardar como plantilla |
| Close | Cerrar |
| Print | Imprimir |
| Export | Exportar |
| Import | Importar |
| Share | Compartir |
| Undo | Deshacer |
| Redo | Rehacer |
| Cut | Cortar |
| Copy | Copiar |
| Paste | Pegar |
| Paste Special | Pegado especial |
| Delete | Eliminar |
| Remove | Quitar |
| Rename | Cambiar nombre |
| Select All | Seleccionar todo |
| Find | Buscar |
| Replace | Reemplazar |
| Go To | Ir a |
| Insert | Insertar |
| Apply | Aplicar |
| Apply to All | Aplicar a todo |
| OK | Aceptar |
| Cancel | Cancelar |
| Yes / No | Sí / No |
| Done | Listo |
| Next / Previous | Siguiente / Anterior |
| Back | Atrás |
| Refresh | Actualizar |
| Update | Actualizar (where Refresh is beside it: Update = Aplicar actualización) |
| Accept / Reject | Aceptar / Rechazar |
| Sort | Ordenar |
| Filter | Filtrar |
| Group / Ungroup | Agrupar / Desagrupar |
| Merge / Split | Combinar / Dividir |
| Zoom In / Zoom Out | Acercar / Alejar |
| Full screen | Pantalla completa |
| Minimise / Maximise / Restore | Minimizar / Maximizar / Restaurar |
| Expand / Collapse | Expandir / Contraer |
| Browse | Examinar |
| Add | Agregar |
| Edit | Editar |
| Reset | Restablecer |
| Clear | Borrar |
| Show / Hide | Mostrar / Ocultar |
| More | Más |
| None | Ninguno |
| Automatic | Automático |

## Text and documents

| English | Spanish |
| :-- | :-- |
| Document | Documento |
| Page | Página |
| Paragraph | Párrafo |
| Line | Línea |
| Word (a word) | Palabra |
| Character | Carácter |
| Font | Fuente |
| Font size | Tamaño de fuente |
| Bold / Italic / Underline | Negrita / Cursiva / Subrayado |
| Strikethrough | Tachado |
| Subscript / Superscript | Subíndice / Superíndice |
| Text highlight colour | Color de resaltado del texto |
| Font colour | Color de fuente |
| Colour | Color |
| Style / Styles | Estilo / Estilos |
| Heading | Título (styles Título 1, Título 2; the list of them is «Títulos») |
| Title | Título (the style); a document's title field is also «Título» |
| Bullets / Numbering | Viñetas / Numeración |
| Multilevel List | Lista multinivel |
| List | Lista |
| Indent | Sangría |
| Alignment / Align Left / Centre / Align Right / Justify | Alineación / Alinear a la izquierda / Centrar / Alinear a la derecha / Justificar |
| Line spacing | Interlineado |
| Margins | Márgenes |
| Orientation / Portrait / Landscape | Orientación / Vertical / Horizontal |
| Size (paper) | Tamaño |
| Columns | Columnas |
| Breaks | Saltos |
| Header / Footer | Encabezado / Pie de página |
| Footnote / Endnote | Nota al pie / Nota al final |
| Table of Contents | Tabla de contenido |
| Caption | Título (as Word's Insertar título); a video's captions are «Subtítulos» |
| Bookmark | Marcador |
| Cross-reference | Referencia cruzada |
| Citation / Bibliography | Cita / Bibliografía |
| Index | Índice |
| Comment / Comments | Comentario / Comentarios |
| Track Changes | Control de cambios |
| Spelling | Ortografía |
| Thesaurus | Sinónimos |
| Word Count | Contar palabras |
| Watermark | Marca de agua |
| Page Colour | Color de página |
| Text Box | Cuadro de texto |
| WordArt | WordArt |
| Equation | Ecuación |
| Symbol | Símbolo |
| Hyperlink / Link | Hipervínculo / Vínculo |
| Mail Merge | Combinar correspondencia |
| Envelopes / Labels | Sobres / Etiquetas |
| Template | Plantilla |
| Untitled | Sin título |

## Workbooks

| English | Spanish |
| :-- | :-- |
| Workbook | Libro |
| Sheet / Worksheet | Hoja / Hoja de cálculo |
| Cell / Cells | Celda / Celdas |
| Row / Rows | Fila / Filas |
| Column / Columns | Columna / Columnas |
| Range | Rango |
| Formula | Fórmula |
| Function | Función |
| Number format | Formato de número |
| Currency / Percentage / Date / Time | Moneda / Porcentaje / Fecha / Hora |
| Freeze Panes | Inmovilizar paneles |
| Conditional Formatting | Formato condicional |
| Format as Table | Dar formato como tabla |
| PivotTable | Tabla dinámica |
| Chart | Gráfico |
| Sparklines | Minigráficos |
| Slicer | Segmentación de datos |
| Data Validation | Validación de datos |
| Remove Duplicates | Quitar duplicados |
| Text to Columns | Texto en columnas |
| Power Query | Power Query |
| Name box | Cuadro de nombres |
| Formula bar | Barra de fórmulas |
| AutoSum | Autosuma |
| Sum / Average / Count / Min / Max | Suma / Promedio / Recuento / Mín. / Máx. (labels only; function names stay SUM, AVERAGE, COUNT, MIN, MAX) |

## Presentations

| English | Spanish |
| :-- | :-- |
| Presentation | Presentación |
| Slide / Slides | Diapositiva / Diapositivas |
| New Slide | Nueva diapositiva |
| Layout | Diseño (PowerPoint's slide layout; the Layout tab of Documents is «Disposición») |
| Section | Sección |
| Master | Patrón |
| Notes | Notas |
| Handout | Documento para distribuir (Handout Master: Patrón de documentos) |
| Shape / Shapes | Forma / Formas |
| Picture / Pictures | Imagen / Imágenes |
| Fill / Outline | Relleno / Contorno |
| Shadow / Glow / Reflection | Sombra / Iluminado / Reflexión |
| Transition | Transición |
| Animation | Animación |
| From Beginning / From Current Slide | Desde el principio / Desde la diapositiva actual |
| Presenter View | Vista Moderador |
| Rehearse Timings | Ensayar intervalos |
| Video / Audio | Vídeo / Audio |

## Mail, calendar, contacts, pictures

| English | Spanish |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Bandeja de entrada / Elementos enviados / Borradores / Bandeja de salida / Correo no deseado / Archivo / Papelera |
| Message | Mensaje |
| New message | Nuevo mensaje |
| Reply / Reply All / Forward | Responder / Responder a todos / Reenviar |
| Send | Enviar |
| Attachment | Archivo adjunto (plural: Datos adjuntos, as Outlook) |
| Account | Cuenta |
| Folder | Carpeta |
| Search | Buscar |
| Unread / Flagged | No leído / Marcado |
| Rules | Reglas |
| Signature | Firma |
| Event | Evento |
| Meeting | Reunión |
| Today / Day / Week / Month / Agenda | Hoy / Día / Semana / Mes / Agenda |
| Repeat | Repetir |
| Reminder | Aviso |
| Contact | Contacto |
| Address book | Libreta de direcciones |
| Phone / Email / Address | Teléfono / Correo electrónico / Dirección |
| Rotate / Crop / Flip | Girar / Recortar / Voltear |
| Rating / Tags | Clasificación / Etiquetas |
| Slideshow | Presentación de diapositivas |
| Brightness / Contrast | Brillo / Contraste |
| Trim / Split | Recortar / Dividir |
| Export video | Exportar vídeo |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Spanish addressed as tú, not word for word. Keep a sentence's facts (a
number, a name in `{braces}`, a key) exactly. Prefer «No se pudo abrir este
archivo.» over a literal rendering, and «No enviado: {reason}» for the short
status lines.

## More recurring terms

| English | Spanish |
| :-- | :-- |
| this computer | este ordenador |
| database | base de datos |
| table | tabla |
| record / records | registro / registros |
| field | campo |
| design (of a table or database) | diseño |
| read only | solo lectura |
| linked / unlink | vinculado / Desvincular |
| Unpin | Desanclar |
| source | origen |
| web address | dirección web |
| network share | recurso compartido de red |
| password | contraseña |
| key or token | clave o token |
| protected store (of the computer) | almacén protegido |
| sign-in | inicio de sesión |
| on a schedule | de forma programada |
| sample records | registros de ejemplo |
| stream / live stream | transmisión / transmisión en directo |
| stream key | clave de transmisión |
| server address | dirección del servidor |
| go live | emitir en directo |
| invitation / invite | invitación / Invitar |
| cancellation | cancelación |
| accepted / declined / tentative | aceptado / rechazado / provisional |
| organizer | organizador |
| busy / free | ocupado / libre |
| availability | disponibilidad |
| all day | todo el día |
| occurrence (of a repeating event) | repetición (Solo esta repetición) |
| Every day / week / month / year | Todos los días / Todas las semanas / Todos los meses / Todos los años |
| time zone | zona horaria |
| room / mailbox | sala / buzón |
| Accessibility / Alt Text | Accesibilidad / Texto alternativo |
| Background / Accent | Fondo / Énfasis |
| Banded Rows / Banded Columns | Filas con bandas / Columnas con bandas |
| Borders | Bordes |
| Bring Forward / Bring to Front | Traer adelante / Traer al frente |
| Clipboard / Clear formatting | Portapapeles / Borrar formato |
| Recent colours / Standard colours / More colours… | Colores recientes / Colores estándar / Más colores… |
| Cc / Bcc | CC / CCO |

## Intents and versions

### Voice

The reader is tú, never usted. Buttons, menu items and ribbon commands take
the infinitive (Guardar, Cerrar ventana). Instructions and advice take the tú
imperative («Selecciona una celda y pulsa Entrar.»). Errors use the
impersonal «se» («No se pudo abrir este archivo.»).

### By intent

| Intent | How this language phrases it | English | Spanish |
| :-- | :-- | :-- | :-- |
| action on a button | Infinitive; complete adds the object | Record | Grabar |
| action in a menu | Infinitive, sentence case | Close Window | Cerrar ventana |
| name | Noun or noun phrase, no article | Conversations | Conversaciones |
| heading | Noun phrase, sentence case, no full stop | Folder settings | Configuración de la carpeta |
| state while working | Gerund, then … | Finding suggestions… | Buscando sugerencias… |
| state when done | Participle agreeing with its noun, no auxiliary | Link copied. Paste it anywhere. | Vínculo copiado. Pégalo donde quieras. |
| question | Short and medium: ¿infinitive?; complete: «¿Quieres ...?» | Remove {name} from your contacts? | ¿Quitar a {name} de tus contactos? |
| advice | Tú imperative, full stop | Sign in to Talk to accept. | Inicia sesión en Talk para aceptar. |
| explain | Plain statement or noun phrase | The bullet character. | El carácter de viñeta. |
| warning | Future, the consequence stated plainly | If you don’t save, your changes will be lost. | Si no guardas, se perderán los cambios. |
| error: cannot | «No se puede» + infinitive (now); «No se pudo» + infinitive (it was tried) | Could not be set up | No se pudo configurar |
| error: failed | «Error al» + infinitive; «Error: {reason}» for a fragment | Text recognition failed. | Error al reconocer el texto. |
| error: not-found | «No se encuentra» or «Falta» + noun; short: noun + «no encontrado» | That picture’s file is missing | Falta el archivo de esta imagen. |
| error: not-enough | «No hay suficiente» + noun; short: noun + «insuficiente» | There is not enough space on the disk to record. | No hay suficiente espacio en el disco para grabar. |
| error: unavailable | «... no está disponible» | Speech is not available on this system. | La síntesis de voz no está disponible en este sistema. |
| error: not-allowed | «No se permitió» + infinitive or noun; short: noun + «no permitido» | The camera was not allowed. | No se permitió usar la cámara. |
| error: invalid | «... no es un/una» + noun, or «no es válido» | "{text}" is not a range | «{text}» no es un rango. |
| error: other | Plain sentence; tú imperative for what to do | A workbook must contain at least one visible worksheet. | Un libro debe contener al menos una hoja de cálculo visible. |
| sample | Natural content of Spain of the same kind and length | Horizontal text | Texto horizontal |

With a placeholder, «válido» agrees with a noun you put after it («no es
una dirección válida»), never with the placeholder itself.

### Short, medium and complete

Medium is the version `messages.json` holds and today's code shows: write it
first, then make the other two from it.

Short:

- Lead with the word that carries the meaning: the verb for an action, the
  noun for a name, the thing that failed for an error («Archivo no
  encontrado», «Espacio en disco insuficiente»).
- Drop in this order: the frame («¿Quieres ...?», «Puedes»), articles and
  possessives, the place or the reason, then adjectives. Never drop a
  placeholder, a «no» or the word that says what failed. A question keeps
  both ¿ and ?.
- An error or status becomes noun plus adjective or participle: «Error al
  enviar», «Vínculo copiado».
- Abbreviate only when dropping words is not enough, with a full stop and,
  in the plural, an s before it. Allowed: pág./págs., núm., n.º, aprox., and
  the glossary's Mín. and Máx.; unit symbols take no full stop and no
  plural s (KB, MB, GB, px, pt, s, min, h, %).
- Never abbreviate a verb on a button, an app name, a tab name or a
  glossary term; never use chat forms (q, xq, tb, x for «por») or English
  abbreviations (No., Qty).
- A counted label keeps `{count}` and all three forms, and the abbreviation
  takes its plural: `one: {count} pág.` / `many: {count} de págs.` /
  `other: {count} págs.`

Complete:

- Adds what the others leave to the context: the object («esta cuenta»), the
  place («en la lista») and the next step.
- A message, error, advice or tooltip is one or more full sentences. A
  question opens with «¿Quieres ...?» where the English asks "Do you want".
- A command stays an infinitive with its object («Buscar un destinatario en
  la lista»); it never becomes a sentence to the reader.
- Tooltips and screen readers read complete, so it must make sense alone.

Worked examples (short | medium | complete):

- English: Find | Find Recipient | Find a recipient in the list
- Spanish: Buscar | Buscar destinatario | Buscar un destinatario en la lista
- English: Remove {name}? | Remove {name} from your contacts? | Do you want to
  remove {name} from your contacts?
- Spanish: ¿Quitar a {name}? | ¿Quitar a {name} de tus contactos? |
  ¿Quieres quitar a {name} de tus contactos?
- English: Not enough disk space to record. | There is not enough space on the
  disk to record. | There is not enough space on the disk to record.
- Spanish: Espacio en disco insuficiente. | No hay suficiente espacio en el
  disco para grabar. | No hay suficiente espacio en el disco para grabar.

### Punctuation and marks

- A command that opens a dialog ends with … (one character, no space
  before) in every version: Examinar…, Guardar como…. A state while working
  ends with … too.
- ¿ and ¡ open the question or exclamation where it starts, also in the
  middle of a label: «Control de cambios no registra esto. ¿Continuar?».
- No space before ? ! : ; and never a no-break space anywhere. A number and
  % take an ordinary space, as the glossary sets: «{percent} %».
- Quotation marks are « » with no space inside; a quote inside a quote
  takes “ ”. English "{text}" becomes «{text}».
- Sentence case on buttons, menu items, tabs, headings and dialog titles;
  days and months lower case.
- Errors, warnings, advice and every full sentence end with a full stop; a
  sentence that ends with ? or ! takes none. No full stop on buttons, menu
  items, names, headings, titles, or a fragment that ends with a
  placeholder.
- A full stop goes after a closing » or parenthesis, never before it.
- No exclamation marks in messages.

### Access keys

- `&` goes before a letter of the Spanish word itself: &Archivo, &Editar,
  Guardar &como…, &Insertar.
- Take the first letter when it is free in that menu or dialog, else another
  clear letter of the main word; every key is unique in its menu or dialog.
- Avoid ñ and accented letters (á, é, í, ó, ú, ü), and the narrow i, l, j
  when another letter is free.
- One `&` per label, never before a space, a mark (¿ included), the … or a
  placeholder. Every version that keeps the word keeps the same letter.
- The `(&X)` form after the word is for scripts without Latin letters;
  Spanish never uses it.
