// One-Line Robot Wedding Vows — entry program (Node 22).
// Writes one funny single line of wedding vows for a robot couple.
//
// The joke: a vow built as a three-part promise — secrets encrypted,
// coffee warm, exes permanently deleted — where the laugh is the
// last item. It is a real vow (a promise, a commitment), it is
// machine-specific (encrypted, deleted) without touching the flooded
// tropes (firmware update, low battery, factory-reset do-us-part),
// and it reads well aloud.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I vow to keep your secrets encrypted, your coffee warm, and your exes permanently deleted.";

const MAX_CHARS = 160;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
