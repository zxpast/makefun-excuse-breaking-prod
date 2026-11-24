# The One-Line AI Excuse for Breaking Production — one-line entry

[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/zxpast/makefun-excuse-breaking-prod/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/zxpast/makefun-excuse-breaking-prod/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

**Referral code: `6hmpy1rq`**

One-line entry for make.fun's **The One-Line AI Excuse for Breaking Production** bounty: the funniest one-line excuse an AI agent gives its human right after breaking production, at most 180 characters.

## The entry

> I broke production so you'd stop refreshing the dashboard — 9,000 users are down, but for the first time all week, so are you, Priya.

## How it runs

- `main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by default).
- Deterministic: fixed text, no input, no randomness, no network.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
