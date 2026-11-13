# Speech packs

Voices for Rutba Office's Read Aloud and narration, added on demand from
Settings. Speech is made on the computer, and no text leaves it.

**No speech pack is published yet.** This folder holds the layout the packs
will follow.

## Layout

Everything is added separately, by the person's choice.

| Folder | What it will hold | Needs |
| :-- | :-- | :-- |
| `packs/speech-engine/` | The speech engine, built for one Office version and signed with Office's release key. Added with the first voice. | |
| `packs/speech-kokoro-82m-<fp16\|fp32\|q8>/` | One build of the Kokoro-82M model: where it comes from, its SHA-256, its licence and the credits it asks for. The model file itself is not committed; the build fetches it and checks its hash. | the engine |
| `packs/speech-<tag>-kokoro/` | One language's pronunciation data, word list and number spelling, named by its BCP 47 tag (for example `speech-en-gb-kokoro`). | a model |
| `packs/voice-kokoro-<voice>/` | One voice and its details (for example `voice-kokoro-bf-emma`). | its language's pack |
| `tools/` | Builds and checks the speech packs. | |

Adding a first voice offers the other packs it needs in one step, with the
total size shown first.

Every pack carries the version number of the Office release it belongs to,
so the packs and the suite stay in step. Each pack is a folder of plain files
beside a signed `<id>.pack.json`, the same format as the
[language packs](../languages/). Office checks the signature and every file's
hash before it uses a pack. Only the engine holds program code, and it is
signed with the same key as Office itself.
