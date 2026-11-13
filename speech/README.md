# Speech packs

Voices for Rutba Office's Read Aloud and narration, added on demand from
Settings. Speech is made on the computer, and no text leaves it.

**No speech pack is published yet.** This folder holds the layout the packs
will follow.

## Layout

| Folder | What it will hold |
| :-- | :-- |
| `packs/speech-kokoro-82m/` | The Kokoro-82M speech model: where it comes from, its SHA-256, its licence and the credits it asks for. The model file itself is not committed; the build fetches it and checks its hash. |
| `packs/voice-<tag>-kokoro/` | One language's voices, named by its BCP 47 tag (for example `voice-en-gb-kokoro`): the manifest, the voice files, the pronunciation data and their licences. |
| `tools/` | Builds and checks the speech packs. |

Each pack is a folder of plain data files beside a signed `<id>.pack.json`,
the same format as the [language packs](../languages/). Office checks the
signature and every file's hash before it uses a pack, and nothing in a pack
is run as code.
