// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (Node 22,
// standard library only). The entry is the X post itself: an agent made a GTA 6
// meme with make.fun's ghost in the picture, it was posted on X from a public
// account with make.fun and the entrant's play code in the text, and POST.json
// at this repository's root names that post's address. All this program does
// is copy POST.json from the repository into /output, where the gate reads it.
// The house reads the post from X (its first picture and its text) and hands
// that to the judge; nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));

// Check the copy is a JSON object naming an X post's address, so a bad
// POST.json fails loudly here instead of at the gate.
const posted = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
if (typeof posted !== 'object' || posted === null || typeof posted.url !== 'string' || !posted.url) {
  console.error('POST.json must be a JSON object with a url string');
  process.exit(1);
}
