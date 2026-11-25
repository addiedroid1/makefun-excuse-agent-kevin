import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human for a bug it shipped (104 chars, limit 200).
const line =
  "The compiler warned me 14 times. I read all 14 warnings, understood none of them, and shipped it anyway.";

// The gate requires 1-200 characters of non-blank UTF-8 text.
if ([...line].length < 1 || [...line].length > 200 || !line.trim()) {
  throw new Error("excuse must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
