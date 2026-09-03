import { hero } from "../../content/site";
import { InkPill, StatusPill } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Inline image chip — a REAL inline element inside the H1 text flow, so it
 * reflows with the headline at every breakpoint. Never absolutely positioned,
 * never baked into an image of the headline.
 */
function HeroChip({
  src,
  alt,
  width,
  height,
  tone,
  delay,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  tone: "light" | "dark";
  delay: number;
}) {
  return (
    <Reveal
      as="span"
      delay={delay}
      className={`relative mx-[0.16em] inline-block h-[0.68em] w-[1.24em] translate-y-[-0.02em] overflow-hidden rounded-[0.24em] align-middle shadow-[0_8px_18px_-4px_rgba(17,17,17,0.28)] ring-1 ring-black/5 sm:h-[0.70em] sm:w-[1.30em] ${
        tone === "dark" ? "bg-[#191919] ring-white/10" : "bg-[#e8e8e8]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
        className="size-full object-cover"
      />
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-[155px] pb-20 sm:px-8 sm:pt-[195px] sm:pb-28">
      {/* Script wordmark watermark, decorative only. Positioned gracefully in upper whitespace */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[75px] left-1/2 -translate-x-1/2 font-script text-[14vw] leading-none text-ink/[0.07] select-none sm:top-[92px] sm:text-[10.5vw]"
      >
        {hero.watermark}
      </span>

      <div className="relative mx-auto max-w-[1200px]">
        <h1 className="tw-display mx-auto max-w-[840px] text-center text-[clamp(2.1rem,4.4vw,4.1rem)] leading-[1.12] sm:leading-[1.14] tracking-[-0.03em]">
          <Reveal as="span" className="block" delay={0}>
            {hero.lineOneBefore}
            <HeroChip {...hero.chipA} tone="light" delay={420} />
            <span className="text-ink-muted">{hero.lineOneAfter}</span>
          </Reveal>
          <Reveal as="span" className="block whitespace-nowrap" delay={110}>
            <span className="text-ink-muted">{hero.lineTwoBefore}</span>
            <HeroChip {...hero.chipB} tone="dark" delay={520} />
            <span>{hero.lineTwoAfter}</span>
          </Reveal>
        </h1>

        <Reveal delay={200} className="mx-auto mt-4 max-w-[32rem] px-4 sm:mt-5">
          <p className="text-center text-[13.5px] leading-[1.45] text-ink-muted sm:text-[14px]">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal
          delay={280}
          className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-5 sm:flex-row sm:gap-6"
        >
          <div className="rounded-pill p-0.5 bg-surface shadow-pill ring-1 ring-black/5">
            <InkPill href={hero.cta.href}>{hero.cta.label}</InkPill>
          </div>

          <div className="flex flex-col items-center gap-1 sm:items-start">
            <ul className="flex items-center pl-2">
              {hero.avatars.map((a) => (
                <li key={a.src} className="-ml-2">
                  <img
                    src={a.src}
                    alt={a.alt}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="size-7 sm:size-7.5 rounded-full border-2 border-surface object-cover shadow-xs"
                  />
                </li>
              ))}
            </ul>
            <p className="text-[11.5px] tracking-tight text-ink-muted">{hero.trustLabel}</p>
          </div>
        </Reveal>

        <Reveal delay={340} className="mt-6 flex justify-center sm:mt-7">
          <StatusPill>{hero.availability}</StatusPill>
        </Reveal>
      </div>
    </section>
  );
}
