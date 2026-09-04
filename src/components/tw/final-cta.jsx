import { finalCta, site } from "../../content/site";
import { ArrowUpRight } from "./primitives";
import { Reveal } from "./reveal";
export function FinalCta() {
  return <section id="contact" aria-labelledby="contact-heading" className="px-4 pb-6 sm:px-8 sm:pb-8">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="tw-grain overflow-hidden rounded-[28px] bg-night px-6 py-20 sm:rounded-[40px] sm:px-12 sm:py-28">
          <div className="mx-auto max-w-[44rem] text-center">
            <p aria-hidden="true" className="font-script text-[34px] leading-none text-white/90">
              {finalCta.mark}
            </p>
            <h2
    id="contact-heading"
    className="tw-h2 mt-8 text-[clamp(2rem,6vw,3.6rem)] text-white"
  >
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-[34rem] text-[15.5px] leading-[1.6] text-white/70 sm:text-[17px]">
              {finalCta.body}
            </p>
            <a
    href={finalCta.cta.href}
    target="_blank"
    rel="noreferrer"
    className="group mt-10 inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-pill border border-white/35 px-8 text-[15px] font-medium tracking-tight text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-night"
  >
              {finalCta.cta.label}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <footer className="mt-24 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="rounded-[10px] border border-white/25 px-4 py-2.5 text-[12.5px] tracking-tight text-white/70">
              {site.copyright}
            </p>
            {
    /* Only destinations that actually exist in the current
       implementation — no social links were invented. */
  }
            <ul className="flex items-center gap-3">
              <li>
                <a
    href={site.bookingUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="Message Twixters.Co on WhatsApp"
    className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors duration-300 hover:border-white hover:text-white"
  >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2c5.46 0 9.9-4.43 9.9-9.9S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.46-.72-2.94-1.16-4.8-4.2-4.95-4.4-.14-.19-1.17-1.57-1.17-3 0-1.42.75-2.12 1.02-2.4.26-.3.58-.37.77-.37h.55c.18 0 .42-.07.65.5.24.58.8 1.98.87 2.12.07.15.12.32.02.5-.1.2-.15.32-.29.5l-.43.5c-.15.14-.3.3-.14.59.14.29.65 1.11 1.4 1.8.95.9 1.76 1.17 2.02 1.31.24.15.4.12.55-.07.14-.2.63-.73.8-.98.17-.24.34-.2.57-.12.24.1 1.5.71 1.76.85.26.14.43.2.5.31.06.12.06.68-.18 1.35Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
    href={`mailto:${site.email}`}
    aria-label={`Email ${site.email}`}
    className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors duration-300 hover:border-white hover:text-white"
  >
                  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    className="size-4"
  >
                    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </Reveal>
    </section>;
}
