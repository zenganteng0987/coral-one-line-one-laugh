// One Line, One Laugh — entry for u-coral-404-one-line-one-laugh-22f2c9f3
// The program writes the single funny line to /output/entry.txt (the
// competition gate reads that file) and prints exactly the same line
// to stdout, with no other output.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I told my AI assistant I was lonely, so it scheduled a meeting with myself and declined it.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  // The grader sandbox provides /output; stdout stays the entry either way.
}

process.stdout.write(entry);
