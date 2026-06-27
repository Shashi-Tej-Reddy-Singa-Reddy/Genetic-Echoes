# Genetic Echoes — Can DNA Remember?

An interactive, single-file web experience that investigates one question:

> **Could a vivid scene, encoded at a moment of extreme stress, be stored in a person's DNA, carried down through generations of sons, and *re-seen* by a descendant who hits that same stress level — centuries later?**

The page is a dark, "bioluminescent" scrollytelling site built around a live **3D DNA double helix** (Three.js + WebGL), with every part of the research presented in readable, themed sections.

---

## Table of contents

- [Quick start](#quick-start)
- [The idea being explored](#the-idea-being-explored)
- [The research, summarized](#the-research-summarized)
- [What the page contains](#what-the-page-contains)
- [Features](#features)
- [Technical details](#technical-details)
- [How to customize it](#how-to-customize-it)
- [Browser support & offline note](#browser-support--offline-note)
- [Honesty & sourcing](#honesty--sourcing)
- [File structure](#file-structure)

---

## Quick start

No build step, no dependencies to install. Just open the file:

```bash
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

> The 3D libraries (Three.js) load from a CDN, so the **first load needs an internet connection**. If the helix ever fails to appear, the page still works fully — it falls back to a static gradient background. To run it fully offline, see [How to customize it](#how-to-customize-it).

**Tip:** drag the **stress slider** in the hero section — it drives the helix animation in real time.

---

## The idea being explored

The user's original theory, stated in four steps:

| Step | Claim |
|------|-------|
| **1 · Encode** | A person experiences a vivid visual of someone + a setting, burned in at an extreme moment, and it is written strongly into his DNA. |
| **2 · The Key** | The encoding is tied to a specific stress / situation level — that level acts as the lock, and later the key. |
| **3 · Inherit** | That DNA passes father → son → son across many generations, long after the original person has died. |
| **4 · Replay** | A descendant who hits the *same* stress level unlocks and *sees* the original scene — a person he could never have met. |

The page's central finding: **a weaker version of this is real, proven science; the strong "replay a specific scene" version has no known biological mechanism.**

---

## The research, summarized

This README doubles as a standalone summary of the findings. Confidence is labeled throughout the page as **Established / Debated / Contested / Pseudoscience**.

### The verdict
- ✅ **Real:** An ancestor's intense, stressful experience *can* chemically mark their DNA and bias descendants' fear and stress responses — sometimes to a specific cue. You inherit a **disposition**.
- ❌ **Not known to be possible:** A descendant consciously **seeing** the ancestor's specific scene. You do not inherit a replayable **episode**.

### What's real — transgenerational epigenetic inheritance
The DNA *sequence* doesn't change with experience, but chemical marks on it can, and some survive into sperm/egg. Carriers: **DNA methylation, histone modifications, non-coding RNA.**

Key evidence:
- **Dias & Ressler (2014, *Nature Neuroscience*)** — mice taught to fear a cherry-blossom scent (acetophenone) had children/grandchildren born fearful of that exact smell, via the sperm. *Almost a literal version of the theory — but with smell, and what's inherited is a fear, not a picture.*
- **Yehuda (2016)** — Holocaust survivors and their children show altered *FKBP5* methylation and cortisol biology (human, correlational, debated).
- **Dutch Hunger Winter / Överkalix** — famine effects measurable in grandchildren.
- **Glanzman (2018, *eNeuro*)** — RNA from trained sea slugs (*Aplysia*) transferred a memory-like state when injected into untrained ones.
- **Planaria** (McConnell; Shomrat & Levin, 2013) — flatworms keep learned behavior after regrowing their heads.

### The three barriers (why the strong version fails)
1. **Weismann barrier** — body/brain cells can't write information back into the germline (sperm/egg).
2. **Encoding problem** — a memory is a pattern of synaptic strengths (the *engram*), not a nucleotide sequence; nothing transcodes one into the other.
3. **Replay problem** — even if stored, no mechanism reads DNA back into conscious vision.
   - *Twist:* DNA **can** literally store images — Church (2012) and Shipman (2017) even wrote a movie into living bacteria — but only via an engineered codec, not a natural brain→DNA→vision pipeline.

### Why "stress" is the right key
- **Flashbulb memory** (Brown & Kulik, 1977) — stress hormones burn in vivid, photographic recall.
- **State-dependent memory** (Godden & Baddeley, 1975) — recall improves when retrieval state matches encoding state.
- Stress is also exactly when epigenetic marks are laid down — the trigger *is* the writer.

### The four deep-dive branches
1. **Molecular machinery** — how stress reaches the germline: epididymosomes, sperm microRNAs/tsRNAs, Mansuy's RNA-injection experiment, the reprogramming-erasure problem, and Rechavi's multi-generational "memory" in worms.
2. **Jung's archetypes** — collective unconscious; archetypes as inherited *forms*, not images; the same defensible-vs-overreach dividing line.
3. **Reincarnation research** — Stevenson/Tucker's cases (UVA DOPS), the methodology, the critics, and why it proposes a *non-DNA* mechanism (survival of consciousness).
4. **Writing images into DNA** — the data-storage pipeline and the CRISPR "movie in bacteria"; proof the *medium* works while the natural read/write heads don't exist.

### The unifying picture
Across all four branches: **inheriting a tendency, a form, or a capable medium is real — inheriting a replayable episode is the one step nothing in biology bridges.**

---

## What the page contains

The page is a single scroll, divided into eleven sections (each is an anchor + nav dot):

| # | Section (`#id`) | Content |
|---|-----------------|---------|
| 1 | `#hero` | Title + the interactive stress slider |
| 2 | `#theory` | The four-step hypothesis |
| 3 | `#verdict` | Real-vs-wall split verdict |
| 4 | `#real` | Epigenetic carriers + Dias-Ressler + evidence timeline |
| 5 | `#barriers` | The three barriers + the DNA-storage twist |
| 6 | `#stress` | Why stress is the correct trigger |
| 7 | `#names` | A 25-term glossary with live category filters |
| 8 | `#cases` | Documented cases tiered by credibility |
| 9 | `#deepdive` | The four branches as switchable tabs |
| 10 | `#unifying` | The proves/overreaches comparison table |
| 11 | `#close` | Closing synthesis (Medium + Channel + Trigger) |

---

## Features

**3D / visual**
- Live **WebGL DNA double helix** — glowing beads + base-pair rungs (Three.js `InstancedMesh`).
- **Bloom** post-processing (`UnrealBloomPass`) for the neon glow.
- Two **traveling "inheritance" pulses** that run up the helix continuously.
- A floating **particle field** and mouse-parallax camera drift.
- The helix **re-themes its colors** to match each section as you scroll.

**Interaction**
- **Stress slider** (hero) — raises rotation speed, glow, bloom, and reddening; readout climbs *Calm → Alert → High arousal → Vivid encoding → Flashbulb memory*.
- **Glossary filters** — All / Biology / Psychology / Fringe / Fiction.
- **Deep-dive tabs** — four branches, each re-themes the helix.
- **Dot navigation** with hover labels + a top **scroll-progress bar**.
- Scroll-triggered **reveal animations** (staggered).

**Readability (designed for text over a live 3D background)**
- Near-opaque "glass" panels so all card/table/list text has a dark backing.
- An automatic **dim + reading veil**: when you scroll past the hero, the helix dims to ~40% and a dark scrim fades in; the hero itself stays fully vivid.
- Brightened text colors plus drop-/text-shadows on floating headings and leads.

---

## Technical details

- **Single self-contained file:** `index.html` (HTML + CSS + JS inline; ~59 KB).
- **3D engine:** [Three.js](https://threejs.org/) `r160`, loaded via an ES-module **import map** from `unpkg`:
  - `three`, plus addons `EffectComposer`, `RenderPass`, `UnrealBloomPass`, `OutputPass`.
- **Fonts:** Space Grotesk (display) + Inter (body) from Google Fonts, with system fallbacks.
- **No build tooling, no framework, no package manager.**
- **Rendering:** the helix is built once as instanced geometry; per-frame work updates instance colors (gradient + pulse + stress + dim), bloom strength, and camera parallax. Pixel ratio is capped at 2 for performance.
- **Accessibility/robustness:** WebGL init is wrapped in `try/catch`; on failure the canvas hides and the CSS gradient remains. A loader overlay fades out on load (with a safety timeout).

---

## How to customize it

Everything lives in `index.html`. Useful anchors:

| Want to change… | Where to look |
|-----------------|---------------|
| Accent colors / theme | CSS `:root` variables (`--accent`, `--glass`, `--text`, …) |
| Per-section helix colors | the `SECTION_ACCENT` map in the `<script>` |
| Deep-dive tab colors | the `tabAcc` map |
| Glossary terms | the `GLOSSARY` array (`[category, term, definition]`) |
| Comparison table rows | the `UNIFY` array |
| Helix shape | `N`, `RADIUS`, `HEIGHT`, `TURNS` constants |
| How much the helix dims behind text | `targetDim` logic + `dimF` in `animate()` |
| Reading-veil darkness | `#reading-scrim` opacity (CSS + the value set in the section observer) |
| Bloom intensity | the `UnrealBloomPass(...)` constructor args and `bloom.strength` |

**To run fully offline:** download `three.module.js` and the four addon files locally, drop them next to `index.html`, and update the import-map URLs to relative paths. (Optionally self-host the two fonts too.)

---

## Browser support & offline note

- Works in any modern browser with **WebGL2** and **ES-module import maps** (Chrome/Edge 89+, Firefox 108+, Safari 16.4+).
- Needs internet on first load for the CDN-hosted Three.js + fonts.
- Heavy bloom + instancing is GPU-accelerated; on very old hardware the page degrades gracefully to the gradient background.

---

## Honesty & sourcing

This is an educational synthesis, not a peer-reviewed paper. Claims are explicitly tiered on the page:

- **Established** — replicated experimental science (e.g., the animal epigenetics studies).
- **Debated** — real but contested human data (e.g., Holocaust-offspring studies).
- **Contested / anecdotal** — e.g., reincarnation cases, transplant "cellular memory."
- **Pseudoscience** — labeled as such (e.g., morphic resonance).

Named studies are cited inline (author + year + journal where applicable) so they can be looked up independently. Where a mechanism is unknown or a study is unreplicated, the page says so.

---

## File structure

```
theory/
├── index.html     # the entire experience (HTML + CSS + JS, self-contained)
└── README.md      # this file
```

---

*Built as a single-page, dependency-light artifact. Drag the stress slider, scroll slowly, and read the deep-dive tabs for the full picture.*
