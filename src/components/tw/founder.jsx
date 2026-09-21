import { useState } from "react";
import { founder } from "../../content/site";
import { Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

function InstagramIcon({ className = "h-[20px] sm:h-[21.5px] w-auto" }) {
  return (
    <svg
      viewBox="0 0 73 73"
      fill="currentColor"
      fillRule="evenodd"
      className={className}
      aria-hidden="true"
    >
      <path d="M 34.75 21.00 L 30.25 22.00 L 24.75 25.75 L 21.25 31.00 L 20.25 34.50 L 20.25 38.75 L 21.00 42.75 L 22.25 45.50 L 24.25 48.25 L 27.00 50.75 L 31.00 52.75 L 34.50 53.50 L 38.00 53.50 L 44.25 51.75 L 48.75 48.25 L 51.75 43.50 L 52.75 39.00 L 52.75 35.00 L 51.75 31.00 L 50.50 28.75 L 46.50 24.25 L 42.00 21.75 L 38.50 21.00 Z M 35.50 26.00 L 37.50 26.00 L 38.50 26.50 L 39.50 26.50 L 43.25 28.50 L 46.00 31.50 L 46.00 32.00 L 47.00 33.50 L 47.75 36.25 L 47.75 38.25 L 47.00 41.25 L 45.50 43.75 L 42.00 47.00 L 41.00 47.25 L 40.00 48.00 L 37.50 48.50 L 33.75 48.25 L 30.50 46.75 L 27.75 44.25 L 25.75 41.25 L 25.25 38.25 L 25.50 34.25 L 26.50 32.75 L 26.75 31.75 L 30.50 27.75 Z M 53.75 15.50 L 52.00 16.25 L 51.00 17.25 L 50.25 18.75 L 50.25 20.00 L 51.00 21.50 L 52.50 23.00 L 54.00 23.50 L 54.75 23.50 L 56.50 22.75 L 57.50 21.75 L 58.25 20.00 L 58.25 19.00 L 57.50 17.00 L 56.75 16.25 L 54.75 15.50 Z M 6.25 7.25 L 2.00 13.75 L 1.00 18.50 L 1.00 56.50 L 2.00 60.75 L 5.75 66.50 L 10.25 70.25 L 17.00 72.75 L 55.75 72.75 L 59.75 71.75 L 66.50 67.50 L 70.75 61.00 L 72.00 56.25 L 72.00 18.25 L 70.75 13.75 L 67.00 7.75 L 58.25 2.25 L 52.25 1.50 L 17.00 1.75 L 10.75 4.00 Z M 10.25 10.75 L 13.50 8.50 L 19.25 6.75 L 53.50 6.75 L 61.50 9.75 L 65.00 13.75 L 67.00 20.50 L 67.00 54.50 L 64.00 62.25 L 60.00 65.75 L 54.50 67.75 L 18.50 67.75 L 11.25 64.75 L 6.75 58.25 L 5.75 52.50 L 6.00 18.50 Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-[20px] sm:h-[21.5px] w-auto" }) {
  return (
    <svg
      viewBox="0 0 73 73"
      fill="currentColor"
      fillRule="evenodd"
      className={className}
      aria-hidden="true"
    >
      <path d="M 33.50 29.25 L 32.00 31.00 L 32.25 55.00 L 33.25 56.00 L 35.00 56.50 L 37.00 54.50 L 37.00 40.50 L 37.75 38.25 L 41.50 34.75 L 45.75 34.50 L 48.25 35.75 L 51.00 39.50 L 51.00 54.25 L 53.50 56.50 L 55.25 56.00 L 56.50 54.50 L 56.50 41.75 L 55.75 37.25 L 53.50 33.50 L 51.00 31.25 L 47.25 29.50 L 42.25 29.25 L 37.50 31.00 L 35.50 29.25 Z M 22.25 29.25 L 21.00 30.75 L 21.00 54.75 L 21.75 55.75 L 23.00 56.50 L 23.50 56.50 L 25.50 55.50 L 26.00 54.25 L 26.00 31.25 L 25.25 29.75 L 24.25 29.25 Z M 23.00 18.00 L 21.50 18.75 L 20.25 20.00 L 19.75 21.00 L 19.75 23.25 L 20.00 24.00 L 21.50 25.50 L 22.00 25.75 L 25.25 25.75 L 25.75 25.50 L 26.75 24.50 L 27.75 22.75 L 27.75 21.75 L 27.25 20.50 L 26.75 19.75 L 26.25 19.25 L 24.00 18.00 Z M 3.50 3.00 L 1.50 8.50 L 1.50 67.25 L 3.00 71.00 L 5.75 72.75 L 69.25 72.75 L 71.00 71.75 L 72.75 69.00 L 72.75 6.00 L 71.75 3.50 L 67.00 1.50 L 7.25 1.50 Z M 7.50 6.75 L 67.25 6.75 L 68.00 7.75 L 67.75 67.00 L 67.00 67.75 L 7.50 67.75 L 6.75 67.00 L 6.75 7.50 Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-[19px] sm:h-[20.5px] w-auto" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function BehanceIcon({ className = "h-[20px] sm:h-[21.5px] w-auto" }) {
  return (
    <svg
      viewBox="0 0 79 73"
      fill="currentColor"
      fillRule="evenodd"
      className={className}
      aria-hidden="true"
    >
      <path d="M 55.75 30.00 L 50.75 33.25 L 46.75 38.75 L 45.25 44.75 L 46.25 51.25 L 48.00 55.00 L 51.50 58.50 L 54.75 60.50 L 59.00 61.75 L 63.25 61.75 L 69.00 60.25 L 74.50 55.75 L 75.00 53.00 L 73.50 51.25 L 71.75 51.25 L 65.75 56.00 L 60.00 56.75 L 57.25 56.00 L 52.00 51.50 L 51.25 48.75 L 57.25 48.00 L 76.25 48.00 L 78.00 46.25 L 77.75 41.75 L 76.75 39.00 L 73.25 33.75 L 67.75 30.25 L 64.50 29.25 L 58.75 29.25 Z M 51.00 41.50 L 51.75 40.00 L 53.00 38.50 L 55.75 36.00 L 56.75 35.75 L 58.25 34.75 L 59.50 34.50 L 63.25 34.50 L 65.25 34.75 L 66.50 35.75 L 67.00 35.75 L 68.25 36.50 L 70.50 38.75 L 72.00 41.25 L 72.00 42.50 L 71.50 43.00 L 51.75 43.00 L 51.25 42.75 Z M 48.00 20.00 L 48.25 22.00 L 50.25 23.50 L 73.00 23.50 L 74.00 23.00 L 75.00 21.75 L 75.00 19.75 L 74.75 19.25 L 73.00 18.00 L 50.50 18.00 L 48.75 19.00 Z M 2.50 13.00 L 1.25 14.75 L 1.25 59.50 L 3.00 61.75 L 27.00 61.75 L 33.25 59.50 L 37.50 55.00 L 39.25 49.75 L 38.50 42.25 L 35.75 38.00 L 32.75 35.50 L 35.00 32.25 L 36.75 27.50 L 36.50 23.00 L 34.50 18.25 L 31.25 15.00 L 27.00 13.00 Z M 6.50 39.25 L 7.50 38.50 L 27.50 38.75 L 29.75 39.75 L 32.75 42.50 L 34.25 45.75 L 34.00 50.25 L 32.75 52.50 L 30.50 55.00 L 29.00 56.00 L 26.75 56.75 L 7.25 56.75 L 6.50 56.00 Z M 6.75 18.00 L 7.25 17.75 L 24.75 17.75 L 27.50 18.75 L 30.25 21.25 L 31.50 24.25 L 31.50 26.25 L 31.00 28.50 L 30.00 30.25 L 28.25 32.00 L 25.25 33.25 L 7.25 33.25 L 6.50 32.50 Z" />
    </svg>
  );
}

export function Founder() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="sticky z-10 px-5 pt-12 pb-[30px] sm:px-8 sm:pt-16 sm:pb-[30px] border-b border-hair"
      style={{ top: "min(0px, calc(100vh - 100%))" }}
    >
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>{founder.eyebrow}</Eyebrow>
        <h2 id="about-heading" className="tw-h2 mt-3 sm:mt-4 text-center text-[clamp(1.8rem,5vw,3.2rem)]">
          <span className="text-ink">{founder.heading.plain}</span>
          <span className="text-ink-muted">{founder.heading.muted}</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-8 sm:mt-10 pb-[30px] grid max-w-[1200px] items-start gap-8 lg:grid-cols-[45%_1fr] lg:gap-14">
        <Reveal delay={60}>
          <div className="overflow-hidden rounded-[30px] sm:rounded-[36px] border border-black/[0.08] bg-white p-2 sm:p-2.5 shadow-float">
            <img
              src={founder.portrait.src}
              alt={founder.portrait.alt}
              width={founder.portrait.width}
              height={founder.portrait.height}
              loading="lazy"
              decoding="async"
              className="max-h-[330px] sm:max-h-[350px] aspect-[4/3] w-full rounded-[22px] sm:rounded-[28px] object-cover object-[center_35%]"
            />
          </div>

          {/* Caption row: Social logos on the left, Name/Role on the right */}
          <div className="mt-4 sm:mt-5 mb-[30px] flex items-center justify-between pl-1 pr-2">
            <div className="flex items-center gap-3.5 sm:gap-4 text-neutral-500">
              <a
                href={founder.socials?.instagram || "https://www.instagram.com/raj_shegaonkar/"}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-ink"
              >
                <InstagramIcon />
              </a>
              <a
                href={founder.socials?.linkedin || "https://www.linkedin.com/in/raj-shegaonkar-875999164/"}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-ink"
              >
                <LinkedInIcon />
              </a>
              <a
                href={founder.socials?.facebook || "https://www.facebook.com/profile.php?id=100006101853561"}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-200 hover:text-ink"
              >
                <FacebookIcon />
              </a>
              <a
                href={founder.socials?.behance || "https://www.behance.net/rajshegaonkar"}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="transition-colors duration-200 hover:text-ink"
              >
                <BehanceIcon />
              </a>
            </div>

            <div className="text-right">
              <p className="text-[16px] sm:text-[17px] font-semibold tracking-tight text-ink">{founder.name}</p>
              <p className="mt-0.5 text-[13px] sm:text-[13.5px] text-ink-muted">{founder.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div>
            <p className="max-w-[38rem] text-[15px] leading-[1.6] text-ink-muted sm:text-[16.5px]">
              {founder.bio}
            </p>
          </div>

          {/* Journey Header */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-1 border-b border-hair-soft pb-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] sm:text-[12.5px] font-semibold tracking-wider uppercase text-ink">
                10-Year Experience Journey
              </span>
              <span className="hidden text-[11px] sm:text-[11.5px] font-medium tracking-tight text-ink-faint sm:inline-block">
                2016 — 2026
              </span>
            </div>
            <p className="text-[11px] sm:text-[11.5px] font-medium tracking-tight text-ink-muted">
              TWIXTERS.CO → CLIENT JOURNEY → PROFESSIONAL CAREER → INTERNSHIPS
            </p>
          </div>

          {/* Experience Journey: Compact summary vs Detailed breakdown */}
          {!showAll ? (
            <ul className="mt-1">
              {founder.timeline.map((row) => (
                <li
                  key={row.role + row.org + row.period}
                  className="border-b border-hair-soft py-3 sm:py-3.5 transition-colors duration-200"
                >
                  <div className="grid gap-1 sm:grid-cols-[minmax(0,11.5rem)_1fr_auto] sm:items-baseline sm:gap-6">
                    <p className="text-[14.5px] sm:text-[15px] font-medium tracking-tight text-ink">{row.role}</p>
                    <p className="text-[13.5px] sm:text-[14px] text-ink-muted">{row.org}</p>
                    <p className="text-[12.5px] sm:text-[13px] whitespace-nowrap text-ink-faint">{row.period}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3 space-y-6">
              {/* 01 — TWIXTERS.CO */}
              <div className="border-b border-hair-soft pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">
                    {founder.journey.twixters.number} — {founder.journey.twixters.title}
                  </span>
                  <span className="text-[13px] text-ink-faint">
                    {founder.journey.twixters.period}
                  </span>
                </div>
                <p className="mt-1.5 text-[15.5px] font-medium text-ink">
                  {founder.journey.twixters.role}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                  {founder.journey.twixters.description}
                </p>
              </div>

              {/* 02 — CLIENT JOURNEY */}
              <div className="border-b border-hair-soft pb-5">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">
                  {founder.journey.clientJourney.number} — {founder.journey.clientJourney.title}
                </span>
                <ul className="mt-2 divide-y divide-hair-soft/60">
                  {founder.journey.clientJourney.items.map((client) => (
                    <li key={client.name} className="flex items-center justify-between py-2.5">
                      <span className="text-[14.5px] font-medium text-ink">{client.name}</span>
                      <span className="text-[13px] text-ink-faint">{client.period}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 03 — PROFESSIONAL CAREER */}
              <div className="border-b border-hair-soft pb-5">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">
                  {founder.journey.professionalCareer.number} — {founder.journey.professionalCareer.title}
                </span>
                <ul className="mt-2 divide-y divide-hair-soft/60">
                  {founder.journey.professionalCareer.items.map((item) => (
                    <li key={item.org} className="grid gap-1 sm:grid-cols-[1fr_auto] py-2.5 sm:items-baseline">
                      <div>
                        <span className="text-[14.5px] font-medium text-ink">{item.role}</span>
                        <span className="text-[13.5px] text-ink-muted"> · {item.org}</span>
                      </div>
                      <span className="text-[13px] text-ink-faint">{item.period}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 04 — INTERNSHIPS */}
              <div className="border-b border-hair-soft pb-5">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-faint">
                  {founder.journey.internships.number} — {founder.journey.internships.title}
                </span>
                <ul className="mt-2 divide-y divide-hair-soft/60">
                  {founder.journey.internships.items.map((item) => (
                    <li key={item.org} className="grid gap-1 sm:grid-cols-[1fr_auto] py-2.5 sm:items-baseline">
                      <div>
                        <span className="text-[14.5px] font-medium text-ink">{item.role}</span>
                        <span className="text-[13.5px] text-ink-muted"> · {item.org}</span>
                      </div>
                      <span className="text-[13px] text-ink-faint">{item.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Additional Highlights from Image 3, revealed when expanded */}
          {showAll && (
            <div className="mt-8 rounded-2xl border border-hair-soft bg-[#fafafa]/80 p-5 sm:p-6 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hair-soft pb-3">
                <div>
                  <h4 className="text-[14.5px] font-medium tracking-tight text-ink">
                    Additional Highlights
                  </h4>
                  <p className="text-[12.5px] text-ink-faint">Awards & Key Collaborations</p>
                </div>
                <span className="rounded-full border border-hair-soft bg-surface px-3 py-0.5 text-[12px] font-medium text-ink-muted">
                  Featured
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {founder.highlights?.map((item) => (
                  <div
                    key={item.name}
                    className="flex h-16 sm:h-20 items-center justify-center rounded-xl border border-hair-soft bg-surface p-2.5 sm:p-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      title={item.name}
                      className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              {founder.stats && (
                <p className="mt-4 text-center text-[12.5px] tracking-wide text-ink-muted">
                  {founder.stats}
                </p>
              )}
            </div>
          )}

          {/* Show more / Show less toggle button */}
          <div className="mt-5 flex items-center justify-between">
            {showAll ? (
              <span className="text-[12.5px] font-medium tracking-wide uppercase text-ink-faint">
                2016 – 2026 · A Decade in Design
              </span>
            ) : (
              <span className="text-[12.5px] text-ink-faint">
                10-Year Journey · 4 Stages
              </span>
            )}
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2 rounded-full border border-hair-soft bg-surface/80 px-4 py-2 text-[13.5px] font-medium tracking-tight text-ink transition-all duration-300 hover:border-hair hover:bg-surface hover:shadow-sm"
              aria-expanded={showAll}
            >
              <span>{showAll ? "Show less" : "Show more"}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-3.5 text-ink-muted transition-transform duration-300 group-hover:text-ink ${showAll ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
