// One Emoji, One Smile — writes exactly one emoji to /output/entry.txt.
// Chosen emoji: 🤗 (hugging face) — warm, friendly and universal: an
// open-arms welcome for a stranger, clearly picked rather than the
// first default smiley, with no irony, intimacy or sarcasm.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Read back and verify: the gate needs 1–8 UTF-8 characters, so fail
// loudly instead of silently leaving a wrong or empty file behind.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI || [...written].length !== 1) {
  throw new Error(`entry.txt must hold exactly one emoji, got ${JSON.stringify(written)}`);
}
