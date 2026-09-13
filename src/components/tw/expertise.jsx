import { Reveal } from "./reveal";
import { offPageContent } from "../../content/site";

const { groups } = offPageContent.whatWeDo;

/* ─── One scrolling column of list items ─── */
function ScrollList({ items, duration }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden flex-1"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <ul
        className="tw-expertise-list"
        style={{ animationDuration: duration + "s" }}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <li key={item + i} className="tw-expertise-list-item">
            <span className="tw-expertise-star" aria-hidden="true">*</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-label="What we design"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Eyebrow */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="tw-hair flex-1 max-w-[90px]" />
        <span className="tw-eyebrow text-[20px] sm:text-[23px] text-neutral-600 tracking-[0.02em] select-none">
          What we design
        </span>
        <div className="tw-hair flex-1 max-w-[90px]" />
      </Reveal>

      {/* Two-group layout */}
      <Reveal className="mx-auto max-w-[1360px]">
        <div className="flex flex-col gap-14 sm:flex-row sm:gap-0 sm:items-stretch">

          {groups.map((group, gi) => (
            <div
              key={group.title}
              className="flex flex-1 flex-row items-stretch gap-8 sm:gap-10 lg:gap-14"
            >
              {/* Group title */}
              <div className="w-[130px] sm:w-[160px] lg:w-[200px] xl:w-[230px] shrink-0 flex items-center">
                <h2
                  className="tw-display font-normal leading-[1.1] tracking-[-0.035em] text-ink"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 3.2rem)" }}
                >
                  {group.title}
                </h2>
              </div>

              {/* Scrolling list */}
              <ScrollList
                items={group.items}
                duration={gi === 0 ? 28 : 24}
              />

              {/* Column divider (between the two groups) */}
              {gi === 0 && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block w-px shrink-0 self-stretch bg-hair mx-4 lg:mx-8"
                />
              )}
            </div>
          ))}

        </div>
      </Reveal>

      <style>{`
        /* ── Scrolling list strip ── */
        .tw-expertise-list {
          display: flex;
          flex-direction: column;
          list-style: none;
          margin: 0;
          padding: 0;
          animation: tw-list-up linear infinite;
          will-change: transform;
        }

        .tw-expertise-list-item {
          display: flex;
          align-items: baseline;
          gap: 0.5em;
          flex-shrink: 0;
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.3vw, 1.25rem);
          font-weight: 400;
          color: var(--color-ink-muted);
          line-height: 1.0;
          padding: 0.55em 0;
          letter-spacing: -0.01em;
        }

        .tw-expertise-star {
          color: var(--color-ink-faint);
          font-size: 0.85em;
          line-height: 1;
          flex-shrink: 0;
        }

        @keyframes tw-list-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .tw-expertise-list:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .tw-expertise-list { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
