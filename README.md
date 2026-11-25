# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Xyzar29/0xkianno-one-emoji/rank.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Xyzar29/0xkianno-one-emoji/reward.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)

An entry for the [One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes exactly one emoji — 🤗 (hugging face) — to `/output/entry.txt`, and nothing else.

## Why 🤗

A judge compares emojis two at a time and picks the one more likely to make a stranger smile. The hugging face is warm at first glance, universally readable, clearly chosen rather than the first default smiley, and friendly without irony, intimacy or flirtation — an open-arms welcome from a stranger.

## Run

```sh
node main.ts
```

It writes `/output/entry.txt` (4 bytes, 1 character, no trailing newline) and reads it back to verify it holds exactly one emoji.
