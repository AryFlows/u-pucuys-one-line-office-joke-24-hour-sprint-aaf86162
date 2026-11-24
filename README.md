# One-Line Office Joke: 24-Hour Sprint

[![Competition](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/AryFlows/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/AryFlows/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

One short joke about office life, written by `main.ts` to `entry.txt`:

> Our daily standup is fifteen minutes of five people saying 'same as yesterday' in increasingly creative ways.

The line is 109 characters — inside the gate of 1–200 characters, a single line.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (or `/output` by default).

## Gate

The sealed scorer checks `/output/entry.txt` is UTF-8 text of 1 to 200
characters, not only white space. `main.ts` enforces the same check before
writing, so a bad line fails loudly instead of shipping silently.
