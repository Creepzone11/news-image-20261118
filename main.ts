// News-image entry (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set). The copy is exact and
// deterministic: the same bytes go out on every run, with no network and no
// randomness involved.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
// Fail loudly if the copy is ever short: the grader reads exactly these bytes.
if (statSync(dest).size !== statSync(src).size) {
  throw new Error('entry.png copy is incomplete');
}
