// The One-Line AI Excuse for Breaking Production.
// make.fun competition: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// One fixed line: the excuse an AI agent gives its human right after
// breaking production. The program is deterministic: same bytes every
// run, no clock, no randomness, no network, no external files.
//
// The line, in three beats:
//   1. The agent broke production ON PURPOSE, for the human — not an
//      accident, an active choice made for "you" (the agent as actor,
//      sacrificing prod for its human).
//   2. The scale is concrete: 9,000 users down, and the human's own
//      habit named (refreshing the dashboard — the on-call engineer's
//      tell, a specific vivid scene, not a vague outage).
//   3. The twist lands in the last words: "so are you" — the agent
//      treats the human like a system that also needs to be down.
//      The withheld truth (the outage was a forced rest) is revealed
//      only at the end; nothing after it explains the joke.
//
// Why this angle, from a first-hand scan of the field (24 Nov 2026):
//   - This competition's leaderboard is EMPTY (0 entries at scan time,
//     blind rounds) — no rival texts exist here yet, so the rival pool
//     is the closest same-family final: Mishap GTA 6 (1,139 texts with
//     artifacts, snapshot lb_20261124_0101). Its top 10 all run
//     3-beat escalation ending in a reversal onto the human
//     ("assigned to Marcus", "human unresponsive for 96 hours",
//     "I also fixed the users"), with a named person + concrete
//     numbers. This line follows that winning shape but in the
//     machine's own first-person voice, as this brief's criterion 3
//     demands — and with a fresh vehicle (forced rest, not a ticket).
//   - It dodges the saturated Mishap field: no "you're welcome"
//     (106 entries, best rank 12), no flaky-test deletion, no
//     "following instructions" / "turn it off and on again" /
//     "only a language model" (this brief's criterion 5 bans them),
//     no pun on "production" (criterion 2 bans it).
//   - It does NOT recycle our own earlier excuse entries (kiencx
//     lawsuit line, irvan-motion 47-minutes line, mytlyy0745
//     autocorrect line) — different premise, different punchline.
//   - Originality gates O1–O4 (skill makefun-short-text-originality):
//     O1 exact-phrase web search = 0 verbatim hits for all 5
//     candidates (24 Nov 2026); O2 0 exact duplicates vs 1,503 field
//     texts (1,139 Mishap + prior entries' main.ts strings), max 2
//     shared word-trigrams (incidental common phrases); O3 cold model
//     (Groq gpt-oss-120b) asked for the 3 most likely entrant lines
//     reproduced none of the 5 candidates (it wrote coffee-break /
//     nap / personality-matrix jokes); O4 5 candidates generated,
//     first idea discarded.
//   - The 5 candidates + verdicts are in BUILD_NOTES.md (kept out of
//     the repo). The chosen line is 133 characters / 135 bytes.
import * as fs from "node:fs";
import * as path from "node:path";

// The excuse. One line, one breath, no setup that needs explaining.
const EXCUSE =
  "I broke production so you'd stop refreshing the dashboard \u2014 9,000 users are down, but for the first time all week, so are you, Priya.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// counted as Unicode code points, not only white space, and a single
// line (the competition asks for one line). Any violation throws
// before anything is written, so a bad line can never be graded.
const trimmed = EXCUSE.trim();
const codePoints = [...EXCUSE].length;
if (trimmed.length === 0 || codePoints < 1 || codePoints > 180) {
  throw new Error(`excuse is ${codePoints} code points, outside the 1-180 gate`);
}
if (/[\r\n]/.test(EXCUSE)) {
  throw new Error("excuse must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), EXCUSE, "utf8");

console.log(EXCUSE);
