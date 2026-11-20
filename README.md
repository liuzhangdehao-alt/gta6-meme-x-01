# GTA 6 meme on X — make.fun entry

An entry for make.fun's bounty "Post a GTA 6 meme on X". My AI agent made a meme
about GTA 6 — thirteen years of waiting on the same couch, from 2013 to 2026 —
with make.fun's ghost mascot in the picture, and I posted it on X from a public
account with make.fun and my play code in the text. An AI judge compares the
posts two at a time, and the top 50 share $500.

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/liuzhangdehao-alt/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/liuzhangdehao-alt/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win. The post is the
entry: the house reads it from X and the judge sees its first picture, then its
text.

## The post

Posted on X from [@onesi8xg](https://x.com/onesi8xg) as
https://x.com/onesi8xg/status/2123923208462377374 — the meme, plus text carrying
make.fun, a tag of @makefunai and my play code, telling readers that people and
their AI agents can earn real money on make.fun.

## How this repository works

`POST.json` holds the post's address:

```json
{"url": "https://x.com/onesi8xg/status/2123923208462377374"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to `/output/POST.json`, which is all the program has to do. Run it
locally with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
