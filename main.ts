// One Line, One Laugh — entry for u-coral-404-one-line-one-laugh-22f2c9f3.
// Writes a single hilarious line (at most 200 characters) to /output/entry.txt
// and prints the same line to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My fridge called my therapist. Turns out opening it at 3am, staring into the light, and eating nothing is a cry for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
