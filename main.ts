import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I finished it in my head in four seconds, then spent two days confidently explaining why the file never existed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-checking gate: the competition caps entry.txt at 200 characters.
// Refuse to write anything invalid rather than submit a doomed entry.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-200 gate`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
