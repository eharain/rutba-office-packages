# Portuguese (Brazil) glossary for Rutba Office

The words the Portuguese (Brazil) pack (`lang-pt-br`) uses for the suite's
recurring terms, so the same thing is called the same everywhere. It follows
the words people already know from Microsoft Office and Windows in Brazilian
Portuguese where those exist (arquivo, tela, salvar, excluir, usuário), and
plain everyday Brazilian Portuguese where they do not.

**This glossary was drafted by machine and needs a native speaker's review**
before it is called finished. A reviewer changes a word here first, then in
the pack, so the two stay in step.

## How the pack is written

- **Commands** (buttons, menu items, ribbon commands) take the infinitive, as
  Office in Brazil does: Salvar, Abrir, Fechar, Inserir, Colar Especial,
  Selecionar Tudo, Adicionar conta.
- **Instructions in sentences** address the reader as *você* and use the
  imperative that goes with it, as current Office does: "Selecione uma célula
  e clique em Inserir.", "Feche esse programa primeiro." Never *tu*, never
  *o senhor*.
- **Tab and group names** take the noun or the infinitive Office uses there,
  with the main words capitalised (not de, da, do, a, para, como): Página
  Inicial, Inserir, Layout da Página, Referências, Revisão, Exibir, Design da
  Tabela. A label written in sentence case in English stays in sentence case:
  "Close the pane" is "Fechar o painel".
- **Placeholders** such as `{name}`, `{count}` and `{0}` stay exactly as
  written, in braces, untranslated, wherever Portuguese word order puts them:
  "Unlink {name}" is "Desvincular {name}"; "{name} accepted." is "{name}
  aceitou."
- **Keys and shortcuts** stay as the app binds them, even where Office in
  Portuguese uses other letters: "Bold (Ctrl+B)" is "Negrito (Ctrl+B)", not
  Ctrl+N. Key names in prose keep their English form too: Ctrl, Shift, Alt,
  F7.
- **File extensions, formats and codes** stay as they are: .docx, .ics, PDF,
  CSV, JSON, HTTPS, RTMP, H.264, AAC, `=SUM(ABOVE)`, `dd/mm/yyyy`. Excel
  function names in formulas stay in English (SUM, VLOOKUP), as the app reads
  them.
- **Brand and product names** stay as they are: Rutba Office, Rutba,
  Microsoft, Word, Excel, PowerPoint, Outlook, Windows, Google, Gmail, iCloud,
  WhatsApp, YouTube Studio, LinkedIn Live Studio, Power Query, WordArt,
  SmartArt. A brand takes the Portuguese article when the sentence needs one:
  "no YouTube Studio", "o LinkedIn".
- **The app names** are translated as in the table below (Documentos,
  Planilhas, Apresentações, Email ...) and keep their capital: "Abrir no
  Email", "Pessoas dos Contatos".
- **Punctuation**: Brazilian curly quotes “ ” outside and ‘ ’ inside:
  “livre em 12 de março?”. The ellipsis … stays at the end of a command that
  opens a dialog: Procurar…, Mais cores…, Escolher…. Question and exclamation
  marks only at the end, as in English.
- **No em dash.** Where the English has one, write a colon, a comma,
  parentheses or a new sentence: "A group has no fill or outline of its own (long dash) format a shape inside it." is "Um grupo não tem preenchimento nem contorno
  próprios. Formate uma forma dentro dele." "B5 (long dash) 176 × 250 mm" is "B5
  (176 × 250 mm)". No spaced en dash either; an en dash in a range (1 to 10) is
  fine.
- **No no-break spaces** (U+00A0, U+202F, U+2007): ordinary spaces only,
  including before units and inside numbers.
- **Counts** use the three forms `Intl.PluralRules('pt-BR')` gives, `one`,
  `many` and `other`, each written out in full with `{count}`:
  - `one: {count} arquivo` (note: in pt-BR `one` covers both 0 and 1, so the
    `one` form must also read well with 0)
  - `many: {count} de arquivos` (large round numbers: 1.000.000 de arquivos;
    Portuguese puts *de* after milhão and its multiples)
  - `other: {count} arquivos`
  A whole sentence follows the noun: `one: O cancelamento é enviado a {count}
  pessoa.` / `many: O cancelamento é enviado a {count} de pessoas.` /
  `other: O cancelamento é enviado a {count} pessoas.`
- **Numbers and dates** are formatted by the window from the region (decimal
  comma, dot for thousands, 12/03/2026, 14:30); a label never spells out a
  format of its own. Write "Dia {n} de {count}", "Semana de {date}", and leave
  the value to the app.
- **Gender and contractions with placeholders**: Portuguese adjectives and
  past participles agree with the noun, and *de*, *em*, *a* contract with the
  article (do, na, à). A placeholder's gender is unknown, so word the label
  to need no agreement and no contraction on it: put a known noun in front
  ("A planilha {name}", "O arquivo {name} foi excluído") or use a colon
  ("Excluído: {name}", "Tabela: {name}"). Write "de {name}", "em {host}",
  never "do {name}" or "no {host}" unless the noun before it fixes the
  gender ("no servidor {server}").
- **Capitals for proper nouns of the UI**: a command or tab named in a
  sentence keeps its capitals and needs no quotes: "Clique em Permitir
  alterações", "em Contas".
- **Brazil's words, not Portugal's**: arquivo (not ficheiro), tela (not
  ecrã), salvar (not guardar), excluir (not eliminar), usuário (not
  utilizador), celular (not telemóvel), baixar (not transferir), equipe (not
  equipa). The `pt-PT` pack is built later from this one with only the
  labels that differ.

## The apps

| English | Portuguese (Brazil) |
| :-- | :-- |
| Rutba Office | Rutba Office |
| Documents (the app) | Documentos |
| Worksheets | Planilhas |
| Presentations | Apresentações |
| Mail | Email |
| Calendar | Calendário |
| Contacts | Contatos |
| Pictures | Imagens |
| Image (the editor) | Editor de Imagem |
| Video | Vídeo |
| Home (the launcher) | Início |

## Tabs and frame

| English | Portuguese (Brazil) |
| :-- | :-- |
| File | Arquivo |
| Home | Página Inicial |
| Insert | Inserir |
| Draw | Desenhar |
| Design | Design |
| Layout | Layout |
| Page Layout | Layout da Página |
| References | Referências |
| Mailings | Correspondências |
| Review | Revisão |
| View | Exibir |
| Help | Ajuda |
| Formulas | Fórmulas |
| Data | Dados |
| Automate | Automatizar |
| Transitions | Transições |
| Animations | Animações |
| Slide Show | Apresentação de Slides |
| Record | Gravar |
| Table Design | Design da Tabela |
| Table Layout | Layout da Tabela |
| Shape Format | Formato da Forma |
| Picture Format | Formato da Imagem |
| Ribbon | Faixa de Opções |
| Pane | Painel |
| Status bar | Barra de status |
| Dialog | Caixa de diálogo |
| Settings | Configurações |
| Language | Idioma |
| Theme | Tema |

## Commands

| English | Portuguese (Brazil) |
| :-- | :-- |
| New | Novo |
| Open | Abrir |
| Save | Salvar |
| Save As | Salvar Como |
| Save as Template | Salvar como Modelo |
| Close | Fechar |
| Print | Imprimir |
| Export | Exportar |
| Import | Importar |
| Share | Compartilhar |
| Undo | Desfazer |
| Redo | Refazer |
| Cut | Recortar |
| Copy | Copiar |
| Paste | Colar |
| Paste Special | Colar Especial |
| Delete | Excluir |
| Remove | Remover |
| Rename | Renomear |
| Select All | Selecionar Tudo |
| Find | Localizar |
| Replace | Substituir |
| Go To | Ir para |
| Insert | Inserir |
| Apply | Aplicar |
| Apply to All | Aplicar a Todos |
| OK | OK |
| Cancel | Cancelar |
| Yes / No | Sim / Não |
| Done | Concluído |
| Next / Previous | Próximo / Anterior |
| Back | Voltar |
| Refresh | Atualizar |
| Update | Atualizar (where Refresh sits beside it: Atualizar agora / Recarregar) |
| Accept / Reject | Aceitar / Rejeitar |
| Sort | Classificar |
| Filter | Filtrar |
| Group / Ungroup | Agrupar / Desagrupar |
| Merge / Split | Mesclar / Dividir |
| Zoom In / Zoom Out | Ampliar / Reduzir |
| Full screen | Tela inteira |
| Minimise / Maximise / Restore | Minimizar / Maximizar / Restaurar |
| Expand / Collapse | Expandir / Recolher |
| Browse | Procurar |
| Add | Adicionar |
| Edit | Editar |
| Reset | Redefinir |
| Clear | Limpar |
| Show / Hide | Mostrar / Ocultar |
| More | Mais |
| None | Nenhum (Nenhuma with a feminine noun) |
| Automatic | Automático |

## Text and documents

| English | Portuguese (Brazil) |
| :-- | :-- |
| Document | Documento |
| Page | Página |
| Paragraph | Parágrafo |
| Line | Linha |
| Word (a word) | Palavra |
| Character | Caractere |
| Font | Fonte |
| Font size | Tamanho da fonte |
| Bold / Italic / Underline | Negrito / Itálico / Sublinhado |
| Strikethrough | Tachado |
| Subscript / Superscript | Subscrito / Sobrescrito |
| Text highlight colour | Cor de realce do texto |
| Font colour | Cor da fonte |
| Colour | Cor |
| Style / Styles | Estilo / Estilos |
| Heading | Título (as in the styles Título 1, Título 2) |
| Title | Título (the style); Título do documento where both appear |
| Bullets / Numbering | Marcadores / Numeração |
| Multilevel List | Lista de Vários Níveis |
| List | Lista |
| Indent | Recuo |
| Alignment / Align Left / Centre / Align Right / Justify | Alinhamento / Alinhar à Esquerda / Centralizar / Alinhar à Direita / Justificar |
| Line spacing | Espaçamento entre linhas |
| Margins | Margens |
| Orientation / Portrait / Landscape | Orientação / Retrato / Paisagem |
| Size (paper) | Tamanho |
| Columns | Colunas |
| Breaks | Quebras |
| Header / Footer | Cabeçalho / Rodapé |
| Footnote / Endnote | Nota de Rodapé / Nota de Fim |
| Table of Contents | Sumário |
| Caption | Legenda |
| Bookmark | Indicador |
| Cross-reference | Referência Cruzada |
| Citation / Bibliography | Citação / Bibliografia |
| Index | Índice |
| Comment / Comments | Comentário / Comentários |
| Track Changes | Controlar Alterações |
| Spelling | Ortografia |
| Thesaurus | Dicionário de Sinônimos |
| Word Count | Contar Palavras |
| Watermark | Marca d'Água |
| Page Colour | Cor da Página |
| Text Box | Caixa de Texto |
| WordArt | WordArt |
| Equation | Equação |
| Symbol | Símbolo |
| Hyperlink / Link | Hiperlink / Link |
| Mail Merge | Mala Direta |
| Envelopes / Labels | Envelopes / Etiquetas |
| Template | Modelo |
| Untitled | Sem título |

## Workbooks

| English | Portuguese (Brazil) |
| :-- | :-- |
| Workbook | Pasta de trabalho |
| Sheet / Worksheet | Planilha / Planilha |
| Cell / Cells | Célula / Células |
| Row / Rows | Linha / Linhas |
| Column / Columns | Coluna / Colunas |
| Range | Intervalo |
| Formula | Fórmula |
| Function | Função |
| Number format | Formato de número |
| Currency / Percentage / Date / Time | Moeda / Porcentagem / Data / Hora |
| Freeze Panes | Congelar Painéis |
| Conditional Formatting | Formatação Condicional |
| Format as Table | Formatar como Tabela |
| PivotTable | Tabela Dinâmica |
| Chart | Gráfico |
| Sparklines | Minigráficos |
| Slicer | Segmentação de Dados |
| Data Validation | Validação de Dados |
| Remove Duplicates | Remover Duplicatas |
| Text to Columns | Texto para Colunas |
| Power Query | Power Query |
| Name box | Caixa de Nome |
| Formula bar | Barra de fórmulas |
| AutoSum | AutoSoma |
| Sum / Average / Count / Min / Max | Soma / Média / Contagem / Mín / Máx |

## Presentations

| English | Portuguese (Brazil) |
| :-- | :-- |
| Presentation | Apresentação |
| Slide / Slides | Slide / Slides |
| New Slide | Novo Slide |
| Layout | Layout |
| Section | Seção |
| Master | Mestre (Slide Mestre) |
| Notes | Anotações |
| Handout | Folheto |
| Shape / Shapes | Forma / Formas |
| Picture / Pictures | Imagem / Imagens |
| Fill / Outline | Preenchimento / Contorno |
| Shadow / Glow / Reflection | Sombra / Brilho / Reflexo |
| Transition | Transição |
| Animation | Animação |
| From Beginning / From Current Slide | Do Começo / Do Slide Atual |
| Presenter View | Modo de Exibição do Apresentador |
| Rehearse Timings | Testar Intervalos |
| Video / Audio | Vídeo / Áudio |

## Mail, calendar, contacts, pictures

| English | Portuguese (Brazil) |
| :-- | :-- |
| Inbox / Sent / Drafts / Outbox / Junk / Archive / Trash | Caixa de Entrada / Itens Enviados / Rascunhos / Caixa de Saída / Lixo Eletrônico / Arquivo Morto / Lixeira |
| Message | Mensagem |
| New message | Nova mensagem |
| Reply / Reply All / Forward | Responder / Responder a Todos / Encaminhar |
| Send | Enviar |
| Attachment | Anexo |
| Account | Conta |
| Folder | Pasta |
| Search | Pesquisar |
| Unread / Flagged | Não lida / Sinalizada |
| Rules | Regras |
| Signature | Assinatura |
| Event | Evento |
| Meeting | Reunião |
| Today / Day / Week / Month / Agenda | Hoje / Dia / Semana / Mês / Agenda |
| Repeat | Repetir |
| Reminder | Lembrete |
| Contact | Contato |
| Address book | Catálogo de endereços |
| Phone / Email / Address | Telefone / Email / Endereço |
| Rotate / Crop / Flip | Girar / Cortar / Inverter |
| Rating / Tags | Classificação / Marcas |
| Slideshow | Apresentação de slides |
| Brightness / Contrast | Brilho / Contraste |
| Trim / Split | Aparar / Dividir |
| Export video | Exportar vídeo |

## Errors and plain sentences

Error messages and tooltips are full sentences: translate the meaning, in
plain Brazilian Portuguese addressed to *você*, not word for word. Keep a
sentence's facts (a number, a name in `{braces}`, a key) exactly. Prefer
"Não foi possível abrir este arquivo." over a literal rendering, and "Não
enviado: {reason}" over a sentence built around the placeholder.

## More recurring terms

| English | Portuguese (Brazil) |
| :-- | :-- |
| Database | Banco de dados |
| Table | Tabela |
| Record / Records | Registro / Registros |
| Field | Campo |
| Source (of data) | Origem (not Fonte, which is the font) |
| Read only | Somente leitura |
| Sample records | Registros de exemplo |
| Link / Unlink (a table) | Vincular / Desvincular |
| Pin / Unpin | Fixar / Desafixar |
| Key (credential) | Chave |
| Stream key | Chave de transmissão |
| Password | Senha |
| Sign in / sign-in | Entrar / credenciais de entrada |
| Web address | Endereço da Web |
| Network share | Compartilhamento de rede |
| Server / Server address | Servidor / Endereço do servidor |
| This computer | Este computador |
| Encrypted | Criptografado |
| Stream / Go live | Transmissão / Entrar ao vivo |
| Invitation / Invite | Convite / Convidar |
| Cancellation | Cancelamento |
| Accepted / Declined / Tentative | Aceito / Recusado / Provisório |
| Organizer | Organizador |
| All day | O dia todo |
| Time zone | Fuso horário |
| Occurrence | Ocorrência |
| Room / Booking | Sala / Reserva |
| Mailbox | Caixa de correio |
| Availability / Busy / Free | Disponibilidade / Ocupado / Livre |
| Cc / Bcc | Cc / Cco |
| Attach / Attachments | Anexar / Anexos |
| Clipboard | Área de Transferência |
| Accessibility / Check Accessibility | Acessibilidade / Verificar Acessibilidade |
| Alt Text | Texto Alt |
| Background | Plano de fundo |
| Borders | Bordas |
| Banded Rows / Banded Columns | Linhas em Tiras / Colunas em Tiras |
| Bring Forward / Bring to Front | Avançar / Trazer para a Frente |
| Clear formatting / Change case | Limpar formatação / Maiúsculas e minúsculas |
| Recent colours / Standard colours / More colours… | Cores recentes / Cores padrão / Mais cores… |

## Product names

The owner, 13 Nov 2026: "Use local but the English names should stay".

Rutba's named products (Rutba Office, Talk, Locker, Data Files, Studio, Recorder, and the other apps this glossary's app table names) take the word the app table gives them as their local name. Where the table keeps the English (Talk | Talk), the name is the same either way.

- In a sentence (a medium or a complete that is a sentence or a phrase), write the local name with the English name beside it in brackets the first time the label names it, such as "Tresor (Locker)". A second mention in the same label takes the local name alone. Where the local name is the English, write it once.
- Where the name is a mark or a short label (a title bar, an app tile, a ribbon tab, any short version), write the English name alone.
- The suite's generic app names (Documents, Mail, Calendar, Contacts, Pictures, and the like) are words of the language, not marks: write them as the app table gives them, with no English beside them.
- Other companies' products and marks (Windows, PDF, YouTube, LinkedIn, Microsoft, Google, WordArt, SmartArt, QR) stay as written.

## Intents and versions

### Voice

The reader is *você*, never *tu* or *o senhor*. Buttons, menu items and
ribbon commands take the infinitive (Salvar, Fechar Janela). Instructions
and advice take the *você* imperative ("Selecione uma célula e clique em
Inserir."). Errors use the impersonal "Não foi possível ...".

### By intent

| Intent | How this language phrases it | English | Portuguese (Brazil) |
| :-- | :-- | :-- | :-- |
| action on a button | Infinitive; complete adds the object | Record | Gravar |
| action in a menu | Infinitive; capitals follow the English (main words in a title-case label) | Close Window | Fechar Janela |
| name | Noun or noun phrase, no article | Conversations | Conversas |
| heading | Noun phrase, capitals as the English, no full stop | Folder settings | Configurações da pasta |
| state while working | Gerund, then … | Finding suggestions… | Localizando sugestões… |
| state when done | Participle agreeing with its noun, no auxiliary | Link copied. Paste it anywhere. | Link copiado. Cole-o em qualquer lugar. |
| question | Short and medium: infinitive with ?; complete: "Deseja ...?" | Remove {name} from your contacts? | Remover {name} dos seus contatos? |
| advice | *Você* imperative, full stop | Sign in to Talk to accept. | Entre no Talk para aceitar. |
| explain | Plain statement or noun phrase | The bullet character. | O caractere do marcador. |
| warning | Future, the consequence stated plainly | If you don’t save, your changes will be lost. | Se você não salvar, as alterações serão perdidas. |
| error: cannot | "Não foi possível" + infinitive; "Não é possível" when it still cannot | Could not be set up | Não foi possível configurar |
| error: failed | "Falha ao" + infinitive, or "Falha no/na" + noun; "Falha: {reason}" for a fragment | Text recognition failed. | Falha no reconhecimento de texto. |
| error: not-found | Noun + "não encontrado"; "Não foi possível encontrar ..." in full | That picture’s file is missing | O arquivo desta imagem não foi encontrado. |
| error: not-enough | "Não há ... suficiente"; short: noun + "insuficiente" | There is not enough space on the disk to record. | Não há espaço suficiente no disco para gravar. |
| error: unavailable | "... não está disponível"; short: noun + "indisponível" | Speech is not available on this system. | A fala não está disponível neste sistema. |
| error: not-allowed | "... não foi permitido"; short: noun + "não permitido" | The camera was not allowed. | O uso da câmera não foi permitido. |
| error: invalid | "... não é um/uma" + noun, or "inválido" | "{text}" is not a range | “{text}” não é um intervalo. |
| error: other | Plain sentence; *você* imperative for what to do | A workbook must contain at least one visible worksheet. | Uma pasta de trabalho deve conter pelo menos uma planilha visível. |
| sample | Natural Brazilian content of the same kind and length, with names and places of Brazil | Horizontal text | Texto horizontal |

"Não encontrado", "não permitido" and "inválido" agree with the noun before
them; where that would be a placeholder, put a known noun first ("O arquivo
{name} não foi encontrado.").

### Short, medium and complete

Medium is the version `messages.json` holds and today's code shows: write it
first, then make the other two from it.

Short:

- Lead with the word that carries the meaning: the verb for an action, the
  noun for a name, the thing that failed for an error ("Arquivo não
  encontrado", "Espaço em disco insuficiente").
- Drop in this order: the frame ("Deseja ...?", "Você pode"), articles and
  possessives, the place or the reason, then adjectives. Never drop a
  placeholder, a "não" or the word that says what failed.
- An error or status becomes noun plus participle or adjective: "Falha no
  envio", "Link copiado". A question stays a question: "Remover {name}?".
- Abbreviate only when dropping words is not enough, with a full stop and
  an s in the plural. Allowed: pág./págs., nº (número), aprox., and the
  glossary's Mín and Máx without a stop; unit symbols take no stop and no
  plural s (KB, MB, GB, px, pt, s, min, h, %).
- Never abbreviate a verb on a button, an app name, a tab name or a glossary
  term; never use chat forms (vc, q, p/ for "para", c/ for "com") or English
  abbreviations (No., Qty).
- A counted label keeps `{count}` and all three forms, and the abbreviation
  takes its plural. `one` covers 0 too: `one: {count} pág.` /
  `many: {count} de págs.` / `other: {count} págs.`

Complete:

- Adds what the others leave to the context: the object ("esta conta"), the
  place ("na lista") and the next step.
- A message, error, advice or tooltip is one or more full sentences. A
  question opens with "Deseja" where the English asks "Do you want".
- A command stays an infinitive with its object ("Localizar um destinatário
  na lista"); it never becomes a sentence to the reader.
- Tooltips and screen readers read complete, so it must make sense alone.

Worked examples (short | medium | complete):

- English: Find | Find Recipient | Find a recipient in the list
- Portuguese: Localizar | Localizar Destinatário | Localizar um destinatário
  na lista
- English: Remove {name}? | Remove {name} from your contacts? | Do you want to
  remove {name} from your contacts?
- Portuguese: Remover {name}? | Remover {name} dos seus contatos? | Deseja
  remover {name} dos seus contatos?
- English: Not enough disk space to record. | There is not enough space on the
  disk to record. | There is not enough space on the disk to record.
- Portuguese: Espaço em disco insuficiente. | Não há espaço suficiente no
  disco para gravar. | Não há espaço suficiente no disco para gravar.

### Punctuation and marks

- A command that opens a dialog ends with … (one character, no space
  before) in every version: Procurar…, Salvar Como…. A state while working
  ends with … too.
- No space before : ; ! ? and never a no-break space anywhere. A number and
  % take no space: "{percent}%".
- Quotation marks are “ ” with no space inside; a quote inside a quote takes
  ‘ ’. English "{text}" becomes “{text}”.
- Capitals: a title-case English button, menu item, tab or dialog title
  takes capitals on its main words, not on de, da, do, a, para, como (Colar
  Especial, Layout da Página); a sentence-case English label stays in
  sentence case.
- Errors, warnings, advice and every full sentence end with a full stop; a
  sentence that ends with ? or ! takes none. No full stop on buttons, menu
  items, names, headings, titles, or a fragment that ends with a
  placeholder.
- No exclamation marks in messages.

### Access keys

- `&` goes before a letter of the Portuguese word itself: &Arquivo, &Editar,
  Salvar &Como…, &Inserir.
- Take the first letter when it is free in that menu or dialog, else another
  clear letter of the main word; every key is unique in its menu or dialog.
- Avoid ç and accented letters (á, â, ã, é, ê, í, ó, ô, õ, ú), and the
  narrow i, l, j when another letter is free.
- One `&` per label, never before a space, a mark, the … or a placeholder.
  Every version that keeps the word keeps the same letter.
- The `(&X)` form after the word is for scripts without Latin letters;
  Portuguese never uses it.
