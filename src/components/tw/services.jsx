import { services } from "../../content/site";
import { Reveal } from "./reveal";

function ChipIcon({ type }) {
  switch (type) {
    case "grid":
      return (
        <svg viewBox="0 0 16 16" fill="white" className="size-3.5 sm:size-4" aria-hidden="true">
          <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1.2" />
          <rect x="9" y="2.5" width="4.5" height="4.5" rx="1.2" />
          <rect x="2.5" y="9" width="4.5" height="4.5" rx="1.2" />
          <rect x="9" y="9" width="4.5" height="4.5" rx="1.2" />
        </svg>
      );
    case "ad":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 sm:size-4" aria-hidden="true">
          <rect x="2" y="2.5" width="12" height="11" rx="2" />
          <line x1="6.5" y1="2.5" x2="6.5" y2="13.5" />
          <rect x="8.5" y="5" width="3.5" height="3" rx="0.5" fill="white" stroke="none" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 sm:size-4" aria-hidden="true">
          <circle cx="6.8" cy="6.8" r="4.2" />
          <line x1="10" y1="10" x2="14" y2="14" />
          <circle cx="6.8" cy="6.8" r="1.5" fill="white" stroke="none" />
        </svg>
      );
    case "curve":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 sm:size-4" aria-hidden="true">
          <path d="M2.5 10.5C4 4.5 7 4.5 8 10.5S12 16.5 13.5 10.5" />
        </svg>
      );
    case "planning":
      return (
        <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 sm:size-4" aria-hidden="true">
          <path d="M2.5 6.5V9.5C2.5 10 3 10.5 3.5 10.5H5L8.5 13.5V2.5L5 5.5H3.5C3 5.5 2.5 6 2.5 6.5Z" fill="white" stroke="none" />
          <path d="M11 5.5C11.8 6.5 11.8 9.5 11 10.5" />
          <path d="M13 3.5C14.5 5.5 14.5 10.5 13 12.5" />
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox="0 0 16 16" fill="white" className="size-3.5 sm:size-4" aria-hidden="true">
          <path d="M8 1.5L9.6 6.2L14.5 8L9.6 9.8L8 14.5L6.4 9.8L1.5 8L6.4 6.2L8 1.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function ChipItem({ chip }) {
  return (
    <div
      className="tw-service-chip inline-flex items-center gap-3 rounded-full bg-white py-[6px] pl-[7px] pr-[18px] shadow-[0_14px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.03)] border border-black/[0.04] select-none cursor-default"
      style={{
        ["--rotate"]: `${chip.rotate || 0}deg`,
        ["--offset-x"]: `${chip.offsetX || 0}px`
      }}
    >
      <span
        className="size-[30px] rounded-full flex items-center justify-center shrink-0 shadow-sm"
        style={{ backgroundColor: chip.color }}
      >
        <ChipIcon type={chip.icon} />
      </span>
      <span className="text-[14px] sm:text-[14.5px] font-medium tracking-tight text-[#1a1a1a] whitespace-nowrap">
        {chip.label}
      </span>
    </div>
  );
}

export function Services() {
  const { eyebrow, statementTop1, statementTop2, statementBottom1, statementBottom2, leftChips, rightChips } = services;

  return (
    <section
      id="services"
      aria-labelledby="services-statement"
      className="px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32 overflow-hidden"
    >
      {/* Eyebrow */}
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-center gap-4 text-ink-muted">
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16" />
          <span className="tw-eyebrow shrink-0 text-[16px] sm:text-[18px] text-ink-muted">
            {eyebrow}
          </span>
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16" />
        </div>
      </Reveal>

      <div className="relative mx-auto mt-12 sm:mt-16 max-w-[1360px] px-4">
        {/* Desktop 3-column composition (matching expected design) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 xl:gap-10">
          
          {/* Left Column (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[195px] xl:h-[205px] items-end shrink-0 w-[190px] xl:w-[210px]">
            {leftChips.map((chip, i) => (
              <Reveal key={chip.label} delay={100 + i * 70}>
                <ChipItem chip={chip} />
              </Reveal>
            ))}
          </div>

          {/* Central Statement */}
          <Reveal delay={60} className="relative z-10 shrink-0 max-w-[760px] xl:max-w-[820px]">
            <p
              id="services-statement"
              className="text-center font-heading text-[clamp(1.5rem,2.4vw,2.35rem)] font-normal leading-[1.26] tracking-[-0.022em]"
            >
              <span className="block text-[#111111] lg:whitespace-nowrap">
                {statementTop1}
              </span>
              <span className="block text-[#111111] lg:whitespace-nowrap">
                {statementTop2}
              </span>
              <span className="block text-[#9a9a9a] lg:whitespace-nowrap">
                {statementBottom1}
              </span>
              <span className="block text-[#9a9a9a] lg:whitespace-nowrap">
                {statementBottom2}
              </span>
            </p>
          </Reveal>

          {/* Right Column (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[195px] xl:h-[205px] items-start shrink-0 w-[190px] xl:w-[210px]">
            {rightChips.map((chip, i) => (
              <Reveal key={chip.label} delay={140 + i * 70}>
                <ChipItem chip={chip} />
              </Reveal>
            ))}
          </div>

          {/* Mobile / Tablet Chips (< lg) */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-3.5 max-w-[560px] mt-4">
            {[...leftChips, ...rightChips].map((chip, i) => (
              <Reveal key={chip.label} delay={120 + i * 50}>
                <ChipItem chip={{ ...chip, offsetX: 0, rotate: -2.5 }} />
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .tw-service-chip {
          transform: rotate(var(--rotate, 0deg)) translateX(var(--offset-x, 0px));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .tw-service-chip:hover {
          transform: rotate(0deg) translateX(var(--offset-x, 0px)) translateY(-3px) scale(1.03);
        }
      `}</style>
    </section>
  );
}
