# Twixters.Co — production website source

This is the actual implementation powering https://twixters-studio.higgsfield.app/ —
exported as a standalone, independently runnable project. Nothing was redesigned;
the only changes made during export were removing hosting-platform-internal
scaffolding (vendored workspace packages and unused template components) and the
dependency entries that pointed at them. All page code, content, assets, styling,
animation and accessibility are byte-identical to the deployed site.

## Stack

- React 19 + TypeScript
- TanStack Start (file-based routes, SSR) on Vite 7
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Builds to a Cloudflare-Worker-shaped server bundle (`dist/server/server.js`,
  `export default { fetch }`) + hashed static client assets (`dist/client`)

## Run it

```bash
bun install        # or: npm install / pnpm install
bun run dev        # dev server (default http://localhost:3000)

bun run typecheck  # tsc --noEmit
bun run build      # production build -> dist/server + dist/client
```

Deploying the production build: `dist/server/server.js` is a Worker-style
`fetch` handler; serve `dist/client` as static assets in front of it (Cloudflare
Workers + static assets, or any equivalent host). `wrangler.jsonc` is the
build/dev input used by the original hosting platform; adapt it to your own
Cloudflare account if you deploy there. `app.manifest.json` is platform metadata
(no storage bindings are used) and can be ignored elsewhere.

## Layout

```
src/
  routes/            __root.tsx (head/meta/fonts/shell), index.tsx (the page),
                     robots.txt + sitemap.xml routes
  components/tw/     the site's components:
                     nav, hero (inline H1 image chips), collage, services (scattered
                     chips), process (rotated cards + SVG doodle arrows), testimonials,
                     case-studies, founder (+timeline), pricing (+capability grid),
                     faq (accessible accordion), final-cta (dark inset card + footer),
                     primitives (pills, eyebrow, arrows), reveal (scroll reveal),
                     structured-data (Organization + FAQPage JSON-LD)
  content/site.ts    ALL copy, links, assets, scatter geometry (deterministic,
                     never random) — the single content source
  styles.css         Tailwind v4 tokens: palette, type, radii, shadows, reveal +
                     doodle-draw keyframe utilities, reduced-motion overrides
  module/design-inspector/  hosting-platform editor bridge; inert unless
                     HF_DESIGN_INSPECTOR=1 (safe to leave, safe to delete)
public/
  assets/            chip-collage, chip-mark, work-1..6, raj, rishi, ujwal, desk,
                     og.jpg (social card) — the real project imagery
  favicon.ico
design-brief.md      the implementation contract distilled from the approved PDF
```

## Fonts

Inter Tight (300–800 + italics) and Kaushan Script load from Google Fonts —
configured in `src/routes/__root.tsx` (preconnect + stylesheet), exactly as
deployed. No local font files; do not substitute families.

## Content notes (as deployed, on purpose)

- All four case-study cards link to the same Behance gallery — that is the
  current live content, preserved verbatim.
- Booking CTAs point at the studio's WhatsApp link; the only other destination
  is mailto:twixters.co@gmail.com.
- Founding year is 2021 everywhere; the career timeline is verbatim, including
  the Feb 2020 → Jun 2022 gap.
- Pricing is "₹5,000 / per project", single plan.
