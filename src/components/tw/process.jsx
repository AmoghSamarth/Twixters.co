import { processSteps } from "../../content/site";
import { Reveal } from "./reveal";

function ProcessDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 1200 424"
        fill="none"
        aria-hidden="true"
        className="w-full h-full overflow-visible"
      >
        {/* Line 1: Exact reference arch connecting Card 1 to Card 2 */}
        <path
          d="M 315 115 C 322 15, 372 -18, 428 14"
          stroke="#ff5520"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Dot on Card 1 */}
        <circle cx="315" cy="115" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
        {/* Dot on Card 2 border */}
        <circle cx="428" cy="14" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />

        {/* Line 2: Exact reference loop-de-loop connecting Card 2 to Card 3 */}
        <path
          d="M 720 160 C 722 195, 742 225, 775 238 C 798 245, 826 238, 836 226 C 840 220, 836 210, 822 208 C 804 206, 782 216, 765 235 C 742 255, 725 285, 730 320 C 735 355, 770 365, 810 355 C 845 345, 868 310, 885 260"
          stroke="#ff5520"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dot on Card 2 */}
        <circle cx="720" cy="160" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
        {/* Dot on Card 3 */}
        <circle cx="885" cy="260" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
      </svg>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="px-5 py-24 sm:px-8 sm:py-32 overflow-hidden">
      {/* Editorial Eyebrow matching reference */}
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-center gap-4 text-ink-muted">
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16 max-w-[60px]" />
          <span className="tw-serif-italic shrink-0 text-[18px] sm:text-[21px] text-neutral-600 tracking-[0.02em] select-none">
            Our Process, Explained
          </span>
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16 max-w-[60px]" />
        </div>
        <h2
          id="process-heading"
          className="mt-5 text-center font-heading text-[clamp(2.1rem,5vw,3.5rem)] font-medium tracking-tight text-[#111111]"
        >
          Here&rsquo;s how it works
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-[1200px] md:mt-24">
        {/* Playful orange lines & rings connecting the cards */}
        <ProcessDoodles />

        <ol className="relative z-10 grid gap-8 lg:grid-cols-3 lg:gap-3">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 110}
              className={`tw-step relative ${i === 1 ? "z-20" : "z-10"}`}
              style={{
                ["--r"]: `${step.rotate}deg`,
                ["--y"]: `${step.offsetY}px`
              }}
            >
              <article
                className="tw-step-card flex h-full min-h-[380px] sm:min-h-[420px] aspect-[1/1.08] flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-white bg-clip-padding p-8 sm:p-9 border-[4px] border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <p
                  aria-hidden="true"
                  className="text-[68px] sm:text-[78px] font-normal leading-none tracking-[-0.04em] text-[#111111]"
                >
                  {step.n}
                </p>
                <div className="mt-8">
                  <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] sm:text-[15px] leading-[1.55] text-neutral-500 font-normal">
                    {step.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>

      <style>{`
        .tw-serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
        }
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
