import { services } from "../../content/site";
import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Value proposition: one large grey statement with six floating chips orbiting
 * it. Deliberately NOT six service cards — the scatter is the composition.
 * Positions are deterministic data (percentages), never random.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-statement"
      className="px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-28"
    >
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>{services.eyebrow}</Eyebrow>
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-[1200px] lg:min-h-[440px]">
        <Reveal delay={80} className="relative z-10 mx-auto max-w-[46rem] px-2 lg:px-0">
          <p
            id="services-statement"
            className="text-center text-[clamp(1.35rem,4.4vw,2.3rem)] leading-[1.34] font-light tracking-[-0.02em] text-ink-faint lg:pt-24"
          >
            {services.statement}
          </p>
        </Reveal>

        <ul className="tw-chips mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:mt-0 lg:block">
          {services.chips.map((chip, i) => (
            <Reveal
              as="li"
              key={chip.label}
              delay={140 + i * 70}
              className="tw-chip"
              style={{
                ["--x" as string]: `${chip.x}%`,
                ["--y" as string]: `${chip.y}%`,
                ["--r" as string]: `${chip.rotate}deg`,
              }}
            >
              <span className="tw-chip-inner inline-flex items-center gap-2.5 rounded-pill bg-surface px-4 py-2.5 text-[13px] font-medium tracking-tight text-ink shadow-pill sm:text-[13.5px]">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-[3px]"
                  style={{ backgroundColor: chip.dot }}
                />
                {chip.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .tw-chip-inner { transform: rotate(calc(var(--r) * 0.4)); }
        }
        @media (min-width: 1024px) {
          .tw-chip {
            position: absolute;
            left: var(--x);
            top: var(--y);
          }
          .tw-chip-inner { transform: rotate(var(--r)); }
        }
      `}</style>
    </section>
  );
}
