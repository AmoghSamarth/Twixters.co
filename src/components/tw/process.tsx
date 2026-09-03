import { processSteps } from "../../content/site";
import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Hand-drawn connectors. Inline SVG stroke paths (never images) so they can be
 * drawn on scroll and dropped below md. Decorative — hidden from a11y tree.
 */
function Doodles() {
  return (
    <Reveal className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        aria-hidden="true"
        className="size-full"
        preserveAspectRatio="none"
      >
      <path
        d="M356 268c30-12 38-44 24-62-12-16-34-10-32 8 3 24 40 32 70 12 22-15 36-34 54-46"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        className="tw-draw"
        style={{ ["--draw-len" as string]: 340, ["--reveal-delay" as string]: "180ms" }}
        data-doodle=""
      />
      <path
        d="M780 178c26-22 60-18 68 8 7 24-18 42-34 30-14-11-4-30 14-28 26 3 48 30 62 60 8 18 14 34 22 46"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        className="tw-draw"
        style={{ ["--draw-len" as string]: 420, ["--reveal-delay" as string]: "420ms" }}
        data-doodle=""
      />
      </svg>
    </Reveal>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>Our Process, Explained</Eyebrow>
        <h2
          id="process-heading"
          className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]"
        >
          Here&rsquo;s how it works
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-[1200px] md:mt-20">
        <Doodles />
        <ol className="relative z-10 grid gap-6 lg:grid-cols-3 lg:gap-16">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 110}
              className="tw-step"
              style={{
                ["--r" as string]: `${step.rotate}deg`,
                ["--y" as string]: `${step.offsetY}px`,
              }}
            >
              <article className="tw-step-card flex h-full min-h-[248px] flex-col justify-between rounded-[22px] bg-surface p-7 shadow-float sm:min-h-[280px] sm:p-8">
                <p
                  aria-hidden="true"
                  className="text-[46px] leading-none font-bold tracking-[-0.045em] text-ink sm:text-[54px]"
                >
                  {step.n}
                </p>
                <div className="mt-10">
                  <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-ink sm:text-[23px]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.6] text-ink-muted">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      <style>{`
        @media (min-width: 640px) and (max-width: 1023px) {
          .tw-step-card { transform: rotate(calc(var(--r) * 0.5)); }
        }
        @media (min-width: 1024px) {
          .tw-step { transform: translateY(var(--y)); }
          .tw-step-card { transform: rotate(var(--r)); }
        }
      `}</style>
    </section>
  );
}
