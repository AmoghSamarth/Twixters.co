import { testimonials } from "../../content/site";
import { Reveal } from "./reveal";
function QuoteMark() {
  return <span
    aria-hidden="true"
    className="text-[34px] leading-none font-semibold tracking-tight text-ink/25 select-none"
  >
      &bdquo;
    </span>;
}
export function Testimonials() {
  return <section aria-label="Client feedback" className="px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[1200px]">
        {testimonials.map((t, i) => <Reveal
    key={t.name}
    delay={i * 120}
    className={`max-w-[30rem] ${i === 0 ? "mr-auto" : "mt-16 ml-auto text-left md:mt-24 md:max-w-[32rem] lg:-mt-4 lg:mr-8"} ${i === 0 ? "lg:ml-8" : ""}`}
  >
            <figure>
              <blockquote>
                <p className="text-[17px] leading-[1.5] font-medium tracking-[-0.015em] text-ink sm:text-[19px]">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3.5">
                <img
    src={t.avatar}
    alt={t.name}
    width={760}
    height={880}
    loading="lazy"
    decoding="async"
    className="size-11 rounded-full object-cover"
  />
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold tracking-tight text-ink">{t.name}</span>
                  <span className="text-[13.5px] text-ink-muted">{t.role}</span>
                </span>
                <QuoteMark />
              </figcaption>
            </figure>
          </Reveal>)}
      </div>
    </section>;
}
