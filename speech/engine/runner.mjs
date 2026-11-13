// The Kokoro-82M runner: phonemes and a voice in, 24 kHz samples out.
//
// No text handling here (text/ turns words into phonemes) and no ONNX
// Runtime import: the caller hands in the runtime, so this file runs the same
// under onnxruntime-node in the engine's utility process and under a stand-in
// in the tests.
//
// The model (onnx-community/Kokoro-82M-v1.0-ONNX) takes three inputs:
//   input_ids  int64 [1, n+2]  the phoneme ids, with 0 at both ends
//   style      float32 [1, 256] one row of the voice, chosen by n
//   speed      float32 [1]
// and gives one output, `waveform`, float32 at 24 kHz. It gives no timings.

export const SAMPLE_RATE = 24000;
/** A voice file is 510 rows of 256 floats; row n is used for n phonemes. */
export const STYLE_DIM = 256;
export const STYLE_ROWS = 510;
/** The most phoneme ids one call takes (the model's 512 positions less the two pads). */
export const MAX_PHONEMES = 510;

/**
 * Phoneme ids for a phoneme string. Symbols the vocabulary does not know are
 * dropped and counted, so a caller can see a text step writing symbols the
 * voices never learned.
 * @param {string} phonemes
 * @param {Record<string, number>} vocab
 * @returns {{ ids: number[], unknown: string[] }}
 */
export function toIds(phonemes, vocab) {
  const ids = [];
  const unknown = [];
  for (const ch of phonemes) {
    const id = vocab[ch];
    if (id === undefined) unknown.push(ch);
    else ids.push(id);
  }
  return { ids, unknown };
}

/**
 * The style row for a sentence of n phonemes.
 * @param {Float32Array} voice  510 x 256 floats
 * @param {number} n
 */
export function styleFor(voice, n) {
  if (!(voice instanceof Float32Array) || voice.length !== STYLE_ROWS * STYLE_DIM) {
    throw new Error(`a voice must be ${STYLE_ROWS} x ${STYLE_DIM} floats`);
  }
  const row = Math.min(Math.max(n, 0), STYLE_ROWS - 1);
  return voice.subarray(row * STYLE_DIM, (row + 1) * STYLE_DIM);
}

/** A voice file's bytes as floats (little-endian float32, as published). */
export function readVoice(bytes) {
  const buf = bytes instanceof ArrayBuffer ? bytes : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  if (buf.byteLength !== STYLE_ROWS * STYLE_DIM * 4) throw new Error(`a voice file must be ${STYLE_ROWS * STYLE_DIM * 4} bytes`);
  return new Float32Array(buf);
}

/**
 * A loaded model.
 * @param {object} ort       the ONNX Runtime module (Tensor, InferenceSession)
 * @param {object} session   an InferenceSession over the model's bytes
 * @param {Record<string, number>} vocab
 */
export function createRunner(ort, session, vocab) {
  let busy = Promise.resolve();
  /**
   * Speak one piece of phonemes (at most MAX_PHONEMES ids; text/ cuts longer
   * sentences at clause boundaries before they get here).
   * @param {string} phonemes
   * @param {Float32Array} voice
   * @param {{ speed?: number }} [opts]
   * @returns {Promise<{ samples: Float32Array, unknown: string[] }>}
   */
  function say(phonemes, voice, { speed = 1 } = {}) {
    const { ids, unknown } = toIds(phonemes, vocab);
    if (ids.length > MAX_PHONEMES) throw new Error(`too many phonemes for one call: ${ids.length} > ${MAX_PHONEMES}`);
    if (!(speed >= 0.5 && speed <= 2)) throw new Error('speed must be between 0.5 and 2');
    const style = styleFor(voice, ids.length);
    const padded = BigInt64Array.from([0, ...ids, 0].map(BigInt));
    const feeds = {
      input_ids: new ort.Tensor('int64', padded, [1, padded.length]),
      style: new ort.Tensor('float32', Float32Array.from(style), [1, STYLE_DIM]),
      speed: new ort.Tensor('float32', new Float32Array([speed]), [1]),
    };
    // One call at a time: the session is shared, and a queue keeps the order
    // sentences were asked in.
    const run = busy.then(() => session.run(feeds));
    busy = run.catch(() => {});
    // A model can answer NaN for a whole sentence (the 16-bit build does, for
    // some sentence and voice pairs): that is never played, it is an error the
    // reader shows and skips past.
    return run.then((out) => {
      const samples = out.waveform.data;
      for (let i = 0; i < samples.length; i++) if (!Number.isFinite(samples[i])) throw new Error('the speech model gave no usable sound for this sentence');
      return { samples, unknown };
    });
  }
  return { say };
}

/** Samples as a 16-bit mono WAV file, for saving narration as a clip. */
export function toWav(samples, rate = SAMPLE_RATE) {
  const b = Buffer.alloc(44 + samples.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + samples.length * 2, 4); b.write('WAVEfmt ', 8);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
  b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
  b.write('data', 36); b.writeUInt32LE(samples.length * 2, 40);
  for (let i = 0; i < samples.length; i++) b.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(samples[i] * 32767))), 44 + i * 2);
  return b;
}
