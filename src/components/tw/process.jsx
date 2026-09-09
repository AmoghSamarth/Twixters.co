import { processSteps } from "../../content/site";
import { Reveal } from "./reveal";

function ProcessDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 1220 520"
        fill="none"
        aria-hidden="true"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Line 1: Exact reference arch connecting Card 1 to Card 2 */}
        <path
          d="M 268 185 C 283.2 126.5, 333.2 102.5, 383.2 102.5 C 408.2 102.5, 430.2 106.5, 445.4 111.3"
          stroke="#ff5520"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Dot on Card 1 */}
        <circle cx="268" cy="185" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
        {/* Dot on Card 2 */}
        <circle cx="445.4" cy="111.3" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />

        {/* Line 2: Exact reference loop-de-loop connecting Card 2 to Card 3 */}
        <path
          d="M 726 275 C 726.7 290.7, 740.5 309.8, 763.8 312.9 C 779.7 315.1, 802 316.1, 802 309.2 C 802 302.3, 780.8 306.6, 761.7 315.1 C 744.8 322.5, 729.9 333.1, 733.1 352.2 C 736.3 371.2, 759.6 377.6, 779.7 375.5 C 806.2 372.3, 846.5 347.9, 875.8 318.9"
          stroke="#ff5520"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dot on Card 2 */}
        <circle cx="726" cy="275" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
        {/* Dot on Card 3 */}
        <circle cx="875.8" cy="318.9" r="5.5" stroke="#ff5520" strokeWidth="2.5" fill="white" />
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
          className="mt-5 text-center font-heading text-[clamp(1.9rem,4.8vw,3.2rem)] font-medium tracking-tight text-[#111111]"
        >
          Here&rsquo;s how it works
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-[1180px] md:mt-24">
        {/* Playful orange lines & rings connecting the cards */}
        <ProcessDoodles />

        <ol className="relative z-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 110}
              className="tw-step"
              style={{
                ["--r"]: `${step.rotate}deg`,
                ["--y"]: `${step.offsetY}px`
              }}
            >
              <article className="tw-step-card flex h-full min-h-[380px] sm:min-h-[420px] flex-col justify-between rounded-[32px] bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.03)] border-[6px] border-white/65 transition-transform duration-300 hover:scale-[1.02]">
                <p
                  aria-hidden="true"
                  className="text-[70px] sm:text-[80px] font-normal leading-none tracking-[-0.04em] text-[#111111]"
                >
                  {step.n}
                </p>
                <div className="mt-10">
                  <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-neutral-500 font-normal">
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
