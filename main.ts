import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "Our daily standup is fifteen minutes of five people saying 'same as yesterday' in increasingly creative ways.";

// Gate guard: the entry must be a single line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
