import { capabilities, pricing } from "../../content/site";
import { ArrowUpRight, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

function PlusInCircle() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      className="mt-0.5 size-[18px] shrink-0 text-accent"
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 8.25v7.5M8.25 12h7.5" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <h2
          id="pricing-heading"
          className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]"
        >
          {pricing.heading}
        </h2>
      </Reveal>

      <Reveal delay={90} className="mx-auto mt-14 max-w-[1200px]">
        <div className="grid gap-10 rounded-[28px] bg-gradient-to-b from-[#e8e8e8] to-[#f7f7f7] p-6 shadow-lift sm:rounded-[36px] sm:p-10 lg:grid-cols-[40%_1fr] lg:gap-14">
          {/* Price column */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Plan indicator. The reference shows a two-state control, but
                  the current implementation defines only the "One Time" plan —
                  no second plan or price is invented here. */}
              <div className="inline-flex items-center gap-1 rounded-pill bg-[#dcdcdc] p-1">
                <span className="rounded-pill bg-accent px-4 py-2 text-[13px] font-semibold tracking-tight text-white">
                  {pricing.planLabel}
                </span>
                <span className="px-4 py-2 text-[13px] font-medium tracking-tight text-ink-muted">
                  {pricing.planNote}
                </span>
              </div>

              <p className="mt-8 flex flex-wrap items-baseline gap-2">
                <span className="text-[clamp(2.6rem,7vw,3.6rem)] leading-none font-bold tracking-[-0.035em] text-ink">
                  {pricing.price}
                </span>
                <span className="text-[19px] font-normal text-ink-faint">{pricing.priceSuffix}</span>
              </p>
            </div>

            <div className="mt-10">
              <p className="flex items-center gap-2.5 text-[13.5px] font-medium tracking-tight text-ink-muted">
                <span aria-hidden="true" className="size-2 rounded-full bg-[#2f9e5f]" />
                {pricing.availability}
              </p>
              <a
                href={pricing.cta.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-pill bg-ink px-7 text-[15px] font-semibold tracking-tight text-white shadow-pill transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-black sm:w-auto"
              >
                {pricing.cta.label}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Included column */}
          <div className="rounded-[22px] bg-surface p-6 shadow-float sm:p-8">
            <h3 className="text-[15px] font-semibold tracking-tight text-ink">
              {pricing.includedTitle}
            </h3>
            <ul className="mt-5 grid gap-3.5">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <PlusInCircle />
                  <span className="text-[15px] leading-[1.5] text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-hair-soft pt-7">
              <p className="text-[15px] leading-[1.6] text-ink-muted">{pricing.bio.text}</p>
              <div className="mt-5 flex items-center gap-3.5">
                <img
                  src={pricing.bio.avatar}
                  alt={`${pricing.bio.name}, ${pricing.bio.role}`}
                  width={900}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="size-11 rounded-full object-cover"
                />
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold tracking-tight text-ink">
                    {pricing.bio.name}
                  </span>
                  <span className="text-[13.5px] text-ink-muted">{pricing.bio.role}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Capability grid — plain editorial rows, never cards. */}
      <Reveal delay={60} className="mx-auto mt-11 max-w-[1200px] sm:mt-14">
        <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                aria-hidden="true"
                className="size-[17px] shrink-0 text-ink"
              >
                <path d="M4 12.5 9 17.5 20 6.5" />
              </svg>
              <span className="text-[15px] tracking-tight text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
