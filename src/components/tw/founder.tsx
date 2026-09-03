import { founder } from "../../content/site";
import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

/** The small orange mark floating near the bio, per the reference. */
function Smiley() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="size-7 shrink-0 text-accent"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <circle cx="16" cy="16" r="13" />
      <path d="M11 13.5v.01M21 13.5v.01M10.5 20c1.8 2.2 3.6 3.2 5.5 3.2s3.7-1 5.5-3.2" />
    </svg>
  );
}

export function Founder() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>{founder.eyebrow}</Eyebrow>
        <h2 id="about-heading" className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]">
          {founder.heading.plain}
          <span className="text-ink-faint">{founder.heading.muted}</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-[1200px] items-start gap-12 lg:grid-cols-[42%_1fr] lg:gap-16">
        <Reveal delay={80} className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none">
          <div className="rotate-[-3deg] overflow-hidden rounded-[26px] bg-[#cfcfcf] shadow-lift">
            <img
              src={founder.portrait.src}
              alt={founder.portrait.alt}
              width={founder.portrait.width}
              height={founder.portrait.height}
              loading="lazy"
              decoding="async"
              className="aspect-[9/10] w-full object-cover"
            />
          </div>
          <div className="mt-8 pl-1">
            <p className="text-[17px] font-semibold tracking-tight text-ink">{founder.name}</p>
            <p className="mt-1 text-[14px] text-ink-muted">{founder.role}</p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex items-start gap-4">
            <p className="max-w-[38rem] text-[16px] leading-[1.62] text-ink-muted sm:text-[17px]">
              {founder.bio}
            </p>
            <Smiley />
          </div>

          <ul className="mt-12">
            {founder.timeline.map((row, i) => (
              <Reveal
                as="li"
                key={row.role + row.org}
                delay={i * 80}
                className="border-t border-hair-soft py-5 last:border-b"
              >
                <div className="grid gap-1 sm:grid-cols-[minmax(0,10rem)_1fr_auto] sm:items-baseline sm:gap-6">
                  <p className="text-[15.5px] font-medium tracking-tight text-ink">{row.role}</p>
                  <p className="text-[14.5px] text-ink-muted">{row.org}</p>
                  <p className="text-[13.5px] whitespace-nowrap text-ink-faint">{row.period}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
