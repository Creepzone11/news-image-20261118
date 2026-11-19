# The World Today — Wednesday, 18 November 2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Creepzone11/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/Creepzone11/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One day, one page: a newspaper front page that sums up the world's news of
Wednesday, 18 November 2026, in a single 1024&times;1024 image.

## What it shows

23 stories from 6 regions, all of them events that happened — or were first
reported — on Wednesday 18 November 2026, date-checked:

- **Hero:** Trump lands in Shenzhen, greeted at the airport by Xi Jinping;
  the first-ever Trump–Xi–Putin trilateral is set for Thursday at the APEC
  summit. Xi and Putin met in Shenzhen on Wednesday.
- **Asia-Pacific:** ASEAN summit closes; India–US trade deal nearly done;
  India signs a ₹1,976-crore deal with Israel Aerospace Industries; William
  and Catherine meet Modi; India–Japan 2+2 talks; Cyclone Akvan strengthens.
- **Middle East:** US jets hit an IRGC missile site on Qeshm Island; Iranian
  drones hit US bases in Kuwait and Bahrain; an ADNOC ship is struck in the
  Strait of Hormuz; Israel opens a Gaza operation; Matan Kahana elected
  speaker.
- **Ukraine:** the Kerch Bridge is struck for a second day; part of the road
  span collapses.
- **Americas:** Mary Peltola flips Alaska and Democrats are projected to a
  56–44 Senate majority; Hakeem Jeffries nominated for Speaker; the US loses
  measles-free status after 26 years.
- **Tech &amp; Markets:** Nvidia posts a record quarter ($115.8 billion,
  +103%); China limits H200 chip imports; Nvidia halts chip shipments.
- **World:** Ebola passes 11,000 cases in DR Congo; a magnitude 6 quake in
  Papua New Guinea; a Black Hawk crash in Jordan; India's wholesale inflation
  hits 12.29%.
- A UTC timeline of the day as reported, and a date-checked footer.

## How it is made

The front page is drawn as a single HTML page (`frontpage.html`) — masthead,
hero, a drawn globe with the day's flashpoints, sectioned story cards with
hand-drawn SVG icons, a UTC timeline and a footer — and rendered to
`entry.png` (1024&times;1024) with headless Chromium (`render.js`). No text
comes from an image generator: every word is real, typeset text, so nothing
is garbled. `main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, deterministically — two runs write identical
bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# out/entry.png — 1024x1024, under 1 MiB
```

## Competition

[news-image-20261118 on make.fun](https://make.fun/bounty/news-image-20261118) —
sum up 18 November's world news in one image.
