import { Reveal } from "./reveal";

/* ─── Expertise items that scroll vertically in the slot ─── */
const expertiseItems = [
  "brand identities",
  "visual concepts",
  "packaging design",
  "design systems",
  "ad campaigns",
  "social creatives",
  "logo marks",
  "brand strategy",
  "typography systems",
  "digital assets",
];

export function Expertise() {
  /* Duplicate for seamless infinite loop */
  const loopItems = [...expertiseItems, ...expertiseItems];

  return (
    <section
      id="expertise"
      aria-label="Our Expertise"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Subtle grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Eyebrow ── */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="h-px max-w-[90px] flex-1 bg-white/15" />
        <span className="tw-eyebrow text-[13px] tracking-[0.02em] text-white/40 sm:text-[14px]">
          Our Expertise
        </span>
        <div className="h-px max-w-[90px] flex-1 bg-white/15" />
      </Reveal>

      {/* ── Main layout ── */}
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-0">

          {/* Left: Static "We design" headline */}
          <div className="sm:flex-1">
            <h2
              className="tw-display whitespace-nowrap text-left font-semibold leading-[1.0] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(3.2rem, 8vw, 8.5rem)" }}
            >
              We<br />design
            </h2>
          </div>

          {/* Vertical hairline divider (desktop) */}
          <div
            aria-hidden="true"
            className="hidden sm:block h-[200px] w-px shrink-0 self-center bg-white/10 mx-12 lg:mx-20"
          />

          {/* Right: Vertical scrolling expertise slot */}
          <div className="sm:flex-1 w-full">
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(170px, 21vh, 270px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
              }}
            >
              <div className="tw-expertise-scroll">
                {loopItems.map((item, i) => (
                  <div
                    key={${item}-}
                    className="tw-expertise-item font-medium tracking-[-0.025em] text-white/75"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3.6vw, 3.4rem)",
                      lineHeight: "1.45",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      <style>{
        .tw-expertise-scroll {
          display: flex;
          flex-direction: column;
          will-change: transform;
          animation: tw-expertise-up 18s linear infinite;
        }
        .tw-expertise-item {
          flex-shrink: 0;
          padding: 0.22em 0;
        }
        @keyframes tw-expertise-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .tw-expertise-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tw-expertise-scroll { animation: none !important; }
        }
      }</style>
    </section>
  );
}
