# Twixters.Co — implementation brief

This is NOT a fresh creative brief. The design is APPROVED and supplied as a
rendered full-page reference (`refs/twixters-reference.pdf`). This file records
the contract the implementation follows so later edits do not drift.

## Source priority (from the client brief)

1. **PDF** — visual composition and art direction. Dominant on every conflict.
2. **twixters.lovable.app** — current content, copy, real image assets, FAQ
   answers, CTA destinations (WhatsApp), case-study links (Behance).
3. Framer project — not reachable without an authenticated session; not used.

## Animation mode

`non-animated` — the client brief supplies its own explicit, restrained
animation spec (scroll reveals, SVG doodle draw, FAQ height, hover micro-motion)
and forbids camera journeys, WebGL, 3D, parallax and particles. No scroll-scrub
film. This is the client's own instruction, not a default.

## Locked palette (sampled from the reference render)

| Token | Value | Use |
|---|---|---|
| `field` | `#d9d9d9` | page background (warm grey) |
| `surface` | `#ffffff` | cards, pills, chips |
| `ink` | `#111111` | primary type, solid CTA |
| `ink-muted` | `#5a5a5a` | body copy (contrast-safe on field) |
| `ink-faint` | `#8a8a8a` | greyed display words only |
| `accent` | `#e5503a` | doodles, FAQ plus, toggle, smiley — nothing else |
| `night` | `#0a0a0a` | inset final CTA card |

Project card colours come from the artwork, never from the palette.

## Locked type

`Inter Tight` (300–800) for everything structural — tight geometric grotesque,
negative tracking on display sizes. `Kaushan Script` for the script wordmark
watermark and the dark-CTA mark only. Section eyebrows are Inter Tight *italic*
at small size between hairlines — never uppercase tracked-out sans.

## Section order (locked to the PDF)

nav · hero · portfolio collage · services scatter · process · testimonials ·
case studies · founder + timeline · pricing · capability grid · FAQ · dark CTA +
footer.

Sections that exist on the Lovable site but NOT in the approved PDF composition
(What We Do / Industries / Why Twixters, the six-stage Discovery→Growth strip)
are kept as typed content in `src/content/site.ts` and deliberately NOT rendered,
per the client brief.

## Non-negotiable identity elements

inline image chips inside the H1 · script watermark behind the hero · asymmetric
scattered service chips with deterministic offsets · rotated staggered process
cards + orange hand-drawn doodle connectors · diagonally-opposed testimonials ·
large rounded project cards · rotated founder portrait · editorial timeline ·
one wide pricing card · plain capability grid (never cards) · inset dark CTA.

## Deterministic scatter

Every rotation/offset lives in `src/content/site.ts` as data. No random values.
