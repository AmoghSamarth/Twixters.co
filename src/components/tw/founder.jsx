import { founder } from "../../content/site";
import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

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

function InstagramIcon({ className = "size-[18px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-[18px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="4" />
      <path d="M8 11v5" />
      <circle cx="8" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <path d="M12 16v-5" />
      <path d="M12 13a2 2 0 0 1 4 0v3" />
    </svg>
  );
}

function BehanceIcon({ className = "size-[18px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.799 13.1c1.2 0 2.2-.6 2.2-2 0-1.1-.8-1.7-1.8-1.8V9.2c.8-.1 1.6-.7 1.6-1.7 0-1.3-1-1.8-2.2-1.8H3.5v7.4h4.299zm-2.399-5.8h2.1c.6 0 1 .3 1 .9 0 .6-.4.9-1 .9H5.4V7.3zm0 4.2h2.2c.7 0 1.2.3 1.2 1 0 .7-.5 1.1-1.3 1.1H5.4v-2.1zm11.2-2.9c-2.1 0-3.6 1.6-3.6 3.8s1.5 3.8 3.7 3.8c1.6 0 2.8-.8 3.3-2.1h-1.8c-.3.5-.8.7-1.5.7-1.1 0-1.8-.7-1.9-1.8h5.3c0-.2.1-.5.1-.7 0-2.3-1.4-3.7-3.6-3.7zm-1.8 3c.1-1 .8-1.6 1.8-1.6s1.6.6 1.7 1.6h-3.5zm.3-4.5h3.2v1.1h-3.2V7.1z" />
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

      <div className="mx-auto mt-16 grid max-w-[1200px] items-start gap-12 lg:grid-cols-[48%_1fr] lg:gap-16">
        <Reveal delay={80} className="mx-auto w-full max-w-[30rem] lg:mx-0 lg:max-w-none">
          <div className="rotate-[-2.5deg] overflow-hidden rounded-[26px] border-[3px] border-white bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:rotate-0">
            <img
              src={founder.portrait.src}
              alt={founder.portrait.alt}
              width={founder.portrait.width}
              height={founder.portrait.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[center_35%]"
            />
          </div>

          {/* Caption row: Social logos on the left, Name/Role on the right */}
          <div className="mt-6 flex items-center justify-between pl-1 pr-2">
            <div className="flex items-center gap-3 text-neutral-500">
              <a
                href={founder.socials?.instagram || "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-ink"
              >
                <InstagramIcon />
              </a>
              <a
                href={founder.socials?.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-ink"
              >
                <LinkedInIcon />
              </a>
              <a
                href={founder.socials?.behance || "https://behance.net"}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="transition-colors duration-200 hover:text-ink"
              >
                <BehanceIcon />
              </a>
            </div>

            <div className="text-right">
              <p className="text-[17px] font-semibold tracking-tight text-ink">{founder.name}</p>
              <p className="mt-0.5 text-[14px] text-ink-muted">{founder.role}</p>
            </div>
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
