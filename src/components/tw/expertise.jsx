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
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          backgroundImage: "url('/assets/micro-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px",
          opacity: 0.04,
        }}
      />

      {/* Eyebrow */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="h-px max-w-[90px] flex-1 bg-white/15" />
        <span className="tw-eyebrow text-[13px] tracking-[0.02em] text-white/40 sm:text-[14px]">
          Our Expertise
        </span>
        <div className="h-px max-w-[90px] flex-1 bg-white/15" />
      </Reveal>

      {/* Main layout */}
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-0">

          {/* Left: Static headline */}
          <div className="sm:flex-1">
            <h2
              className="tw-display whitespace-nowrap text-left font-semibold leading-[1.0] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(3.2rem, 8vw, 8.5rem)" }}
            >
              We<br />design
            </h2>
          </div>

          {/* Vertical hairline divider */}
          <div
            aria-hidden="true"
            className="hidden sm:block h-[200px] w-px shrink-0 self-center bg-white/10 mx-12 lg:mx-20"
          />

          {/* Right: Vertical scrolling slot */}
          <div className="sm:flex-1 w-full">
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(170px, 21vh, 270px)",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
              }}
            >
              <div className="tw-expertise-scroll">
                {loopItems.map((item, i) => (
                  <div
                    key={item + "-" + i}
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
