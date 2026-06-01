# lindyoperation.com

The website for **Lindy Operation** — a cashflow company that operates a
portfolio of durable businesses. Built with React + Vite.

**Philosophy:** _Be the fire the wind can't blow out._ We operate businesses for
cash, reinvest what they earn, and let time compound — the Lindy way: the longer
a thing lasts, the longer it will last. Antifragile by design.

## Routes

| Path          | Page                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| `/`           | **Landing** — "The Long Fire": a dark, editorial company manifesto         |
| `/brand`      | **Brand Book** — 26-slide identity deck (logo, color, type, applications)  |
| `/disclosure` | **전자공시** — electronic disclosures, posted per the articles of incorporation |

## Develop

This project uses **pnpm**.

```bash
pnpm install       # if pnpm blocks the esbuild build step: pnpm approve-builds esbuild
pnpm run dev       # http://localhost:5173
pnpm run build     # production build to dist/
pnpm run preview   # preview the production build
```

> This folder lives under a parent pnpm monorepo, so it declares its own
> `pnpm-workspace.yaml` (root = `.`) to keep installs local and self-contained.

**Dev feedback overlay:** [`agentation`](https://www.npmjs.com/package/agentation) is
mounted in `main.jsx` behind `import.meta.env.DEV`, so the click-to-annotate
"send to agent" toolbar shows up during `pnpm run dev` and is tree-shaken out of
production builds.

## Two surfaces, two treatments — one fire

The **Spark** mark ([`src/components/Spark.jsx`](src/components/Spark.jsx)) and the
ember/fire essence are shared across both surfaces; the visual treatments differ:

- **Landing ("The Long Fire")** — warm near-black, big tight **Geist** display type
  with oblique ember accents, film grain, drifting ember glow, the Spark glowing
  like a live coal. An editorial manifesto, not a product funnel. Theme variables
  are scoped under `.lp` in [`src/pages/Landing.css`](src/pages/Landing.css); the
  `/disclosure` page reuses the same theme.
- **Brand Book** — the formal identity system from Claude Design: Navy `#1B3A5E`
  lead, warm neutrals, Ember `#EC5A2A` + Gold `#C9A24B` accents, **Geist** +
  Geist Mono. Tokens in [`src/styles/tokens.css`](src/styles/tokens.css).

## The mark — _the Spark_

A single leaning flame with an updraft cut through its center. Reusable component;
fill follows `currentColor`, so color is driven by the wrapper's CSS `color`. The
landing adds a `glow` class for the ember drop-shadow + flicker animation.

## Structure

```
src/
  components/Spark.jsx       the flame mark
  deck/                      Deck.jsx — scaling + keyboard/click nav for the slide deck
  pages/
    Landing.jsx / .css       the "The Long Fire" landing manifesto
    BrandBook.jsx            wires the 26 slides into <Deck>
    brand-book.css           slide styles (scoped under .bb)
    slides/Slide01..26.jsx   one component per brand-book slide (authored at 1920×1080)
  styles/                    tokens.css + global.css
```

The original Claude Design handoff bundle (HTML prototypes + chat transcripts) is
kept locally under `_design_src/` for reference and is git-ignored.

### Brand Book deck controls

`←` / `→` (or PageUp/PageDown / Space) to navigate · `Home` / `End` to jump ·
number keys `1`–`9` for direct access · click the left/right third of the stage.

### Contact

Daehun Lee · danny@lindyoperation.com · Seoul
