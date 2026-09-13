import { useId, useState } from "react";
import { faqContact, faqs, site } from "../../content/site";
import { ArrowRight, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
function FaqRow({
  q,
  a,
  open,
  onToggle,
  index
}) {
  const base = useId();
  const panelId = `${base}-panel-${index}`;
  const buttonId = `${base}-button-${index}`;
  return <li className="border-b border-hair-soft first:border-t">
      <h3>
        <button
    type="button"
    id={buttonId}
    aria-expanded={open}
    aria-controls={panelId}
    onClick={onToggle}
    className="flex min-h-[64px] w-full items-center justify-between gap-6 py-6 text-left"
  >
          <span className="text-[16px] leading-[1.4] font-medium tracking-[-0.015em] text-ink sm:text-[17.5px]">
            {q}
          </span>
          <span
    aria-hidden="true"
    className={`grid size-7 shrink-0 place-items-center text-accent transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
  >
            <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    className="size-5"
  >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
    id={panelId}
    role="region"
    aria-labelledby={buttonId}
    className="grid transition-[grid-template-rows] duration-300 ease-out"
    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
  >
        <div className="overflow-hidden">
          <p className="pr-10 pb-7 text-[15px] leading-[1.62] text-ink-muted">{a}</p>
        </div>
      </div>
    </li>;
}
export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>FAQ</Eyebrow>
        <h2 id="faq-heading" className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]">
          Your Questions, Answered
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-[1200px] items-start gap-12 lg:grid-cols-[36%_1fr] lg:gap-16">
        {
    /* Contact card — below the accordion on mobile, beside it on desktop */
  }
        <Reveal delay={80} className="order-2 lg:order-1">
          <div className="rotate-[-2.5deg] rounded-[28px] border border-black/[0.06] bg-white/80 p-6 sm:p-7 shadow-[0_20px_45px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-transform duration-500 hover:rotate-0 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <div className="size-14 sm:size-16 shrink-0 overflow-hidden rounded-full border-2 border-white/80 bg-neutral-900 shadow-sm">
                <img
                  src={faqContact.avatar?.src || faqContact.image?.src}
                  alt={faqContact.avatar?.alt || faqContact.image?.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-semibold tracking-tight text-ink">
                  {faqContact.heading}
                </h3>
                <p className="mt-0.5 text-[14px] sm:text-[14.5px] text-ink-muted">
                  {faqContact.sub}
                </p>
              </div>
            </div>

            <a
              href={faqContact.cta.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex min-h-[50px] sm:min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 text-[14.5px] font-semibold tracking-tight text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.35)] transition-[transform,background-color,shadow] duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_14px_28px_-5px_rgba(0,0,0,0.45)]"
            >
              <span>{faqContact.cta.label}</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="mt-5 text-center text-[13.5px] text-ink-muted">
              {faqContact.emailPrefix}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent transition-opacity duration-200 hover:opacity-80"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={40} className="order-1 lg:order-2">
          <ul>
            {faqs.map((item, i) => <FaqRow
    key={item.q}
    index={i}
    q={item.q}
    a={item.a}
    open={openIndex === i}
    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
  />)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
