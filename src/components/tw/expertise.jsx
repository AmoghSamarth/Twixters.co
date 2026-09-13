import { Reveal } from "./reveal";

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
  const loopItems = [...expertiseItems, ...expertiseItems];

  return (
    <section
      id="expertise"
      aria-label="Our Expertise"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Eyebrow */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="tw-hair flex-1 max-w-[90px]" />
        <span className="tw-eyebrow text-[20px] sm:text-[23px] text-neutral-600 tracking-[0.02em] select-none">
          Our Expertise
        </span>
        <div className="tw-hair flex-1 max-w-[90px]" />
      </Reveal>

      {/* Main layout */}
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-0">

          {/* Left: Static headline */}
          <div className="sm:flex-1">
            <h2
              className="tw-display whitespace-nowrap text-left font-semibold leading-[1.0] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              We<br />design
            </h2>
          </div>

          {/* Vertical hairline divider */}
          <div
            aria-hidden="true"
            className="hidden sm:block h-[200px] w-px shrink-0 self-center bg-hair mx-12 lg:mx-20"
          />

          {/* Right: Vertical scrolling slot */}
          <div className="sm:flex-1 w-full">
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(220px, 28vh, 360px)",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
              }}
            >
              <div className="tw-expertise-scroll">
                {loopItems.map((item, i) => (
                  <div
                    key={item + "-" + i}
                    className="tw-expertise-item font-medium tracking-[-0.03em] text-ink-muted"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)",
                      lineHeight: "1.4",
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

      <style>{`
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
      `}</style>
    </section>
  );
}
