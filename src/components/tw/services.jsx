import { useState, useEffect, useRef } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.preventDefault();
    dragStartRef.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
    setIsDragging(true);
  };

  // Window listeners guarantee that release ALWAYS snaps back no matter where the pointer is
  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e) => {
      setOffset({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      });
    };

    const onPointerUp = () => {
      setIsDragging(false);
      setOffset({ x: 0, y: 0 });
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging]);

  return (
    <div
      onPointerDown={handlePointerDown}
      className={`tw-service-chip tw-float-${chip.floatDir || "tl"} relative inline-block select-none touch-none ${
        isDragging ? "cursor-grabbing z-50 scale-105" : "cursor-grab z-10 hover:scale-[1.03]"
      }`}
      style={{
        ["--base-rotate"]: `${chip.rotate || 0}deg`,
        ["--base-x"]: `${chip.offsetX || 0}px`,
        transform: `translate(calc(var(--base-x) + ${offset.x}px), ${offset.y}px) rotate(var(--base-rotate))`,
        transition: isDragging
          ? "none"
          : "transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease",
      }}
    >
      {/* Frosted translucent outer bubble capsule (the "bg bubble around them") with soft neutral shadow */}
      <div
        className={`absolute -inset-[5px] sm:-inset-[6px] rounded-full bg-white/60 backdrop-blur-[6px] border border-white/80 pointer-events-none transition-shadow duration-300 ${
          isDragging
            ? "shadow-[0_24px_48px_rgba(0,0,0,0.18),0_8px_16px_rgba(0,0,0,0.08)]"
            : "shadow-[0_16px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.04)]"
        }`}
        aria-hidden="true"
      />

      {/* Solid white inner pill */}
      <div className="relative z-10 inline-flex items-center gap-2.5 sm:gap-3 rounded-full bg-white py-[6px] pl-[6px] pr-[16px] sm:pr-[18px] shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-black/[0.04]">
        <span
          className="size-[28px] sm:size-[30px] rounded-full flex items-center justify-center shrink-0 shadow-sm"
          style={{ backgroundColor: chip.color }}
        >
          <ChipIcon type={chip.icon} />
        </span>
        <span className="text-[13.5px] sm:text-[14px] font-medium tracking-tight text-[#1a1a1a] whitespace-nowrap">
          {chip.label}
        </span>
      </div>
    </div>
  );
}

function getWordColor(index, totalWords, progress) {
  // Transition window for each individual word
  const step = 1 / totalWords;
  const wordStart = index * step;
  const wordEnd = (index + 1) * step;
  const wordProgress = Math.min(Math.max((progress - wordStart) / (wordEnd - wordStart), 0), 1);

  // Interpolate from unrevealed grey rgb(156, 156, 156) to active black rgb(17, 17, 17)
  const r = Math.round(156 - wordProgress * (156 - 17));
  const g = Math.round(156 - wordProgress * (156 - 17));
  const b = Math.round(156 - wordProgress * (156 - 17));
  return `rgb(${r}, ${g}, ${b})`;
}

export function Services() {
  const { eyebrow, statementLines, leftChips, rightChips } = services;
  const textRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to gradually turn words from grey to black
  useEffect(() => {
    const updateScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Start reveal when the top of the text enters 82% of viewport
      // Complete reveal across a 20% wider scroll distance (20% slower pacing)
      const start = windowHeight * 0.82;
      const end = windowHeight * 0.239; // 20% longer scroll distance for slower reveal
      const current = rect.top;

      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const totalWords = statementLines.reduce((acc, line) => acc + line.length, 0);
  let globalWordIndex = 0;

  return (
    <section
      id="services"
      aria-labelledby="services-statement"
      className="px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32 overflow-hidden"
    >
      {/* Eyebrow with refined editorial serif font matching reference */}
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-center gap-4 text-ink-muted">
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16 max-w-[60px]" />
          <span className="tw-serif-italic shrink-0 text-[20px] sm:text-[23px] text-neutral-600 tracking-[0.02em] select-none">
            {eyebrow}
          </span>
          <span aria-hidden="true" className="tw-hair w-12 sm:w-16 max-w-[60px]" />
        </div>
      </Reveal>

      <div className="relative mx-auto mt-12 sm:mt-16 max-w-[1360px] px-4">
        {/* Desktop 3-column composition (matching expected design) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 xl:gap-16">
          
          {/* Left Column (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[205px] xl:h-[220px] items-end shrink-0 w-[190px] xl:w-[210px]">
            {leftChips.map((chip, i) => (
              <Reveal key={chip.label} delay={100 + i * 70}>
                <ChipItem chip={chip} />
              </Reveal>
            ))}
          </div>

          {/* Central Statement with scroll-driven word-by-word reveal */}
          <Reveal delay={60} className="relative z-10 shrink-0 max-w-[720px] xl:max-w-[780px]">
            <p
              id="services-statement"
              ref={textRef}
              className="text-center font-heading text-[clamp(1.5rem,2.4vw,2.35rem)] font-normal leading-[1.26] tracking-[-0.022em]"
            >
              {statementLines.map((lineWords, lineIndex) => (
                <span key={lineIndex} className="block lg:whitespace-nowrap">
                  {lineWords.map((word) => {
                    const wordIndex = globalWordIndex++;
                    const color = getWordColor(wordIndex, totalWords, scrollProgress);
                    return (
                      <span
                        key={wordIndex}
                        style={{ color, transition: "color 0.17s ease-out" }}
                        className="inline-block mx-[0.14em]"
                      >
                        {word}
                      </span>
                    );
                  })}
                </span>
              ))}
            </p>
          </Reveal>

          {/* Right Column (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[205px] xl:h-[220px] items-start shrink-0 w-[190px] xl:w-[210px]">
            {rightChips.map((chip, i) => (
              <Reveal key={chip.label} delay={140 + i * 70}>
                <ChipItem chip={chip} />
              </Reveal>
            ))}
          </div>

          {/* Mobile / Tablet Chips (< lg) */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-4 max-w-[560px] mt-6">
            {[...leftChips, ...rightChips].map((chip, i) => (
              <Reveal key={chip.label} delay={120 + i * 50}>
                <ChipItem chip={{ ...chip, offsetX: 0 }} />
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .tw-serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
        }

        /* Directional idle float animations along the reference arrows */
        @keyframes float-tl {
          0%, 100% { translate: 0px 0px; }
          50% { translate: -8px -5px; }
        }
        @keyframes float-l {
          0%, 100% { translate: 0px 0px; }
          50% { translate: -9px 0px; }
        }
        @keyframes float-bl {
          0%, 100% { translate: 0px 0px; }
          50% { translate: -8px 5px; }
        }
        @keyframes float-tr {
          0%, 100% { translate: 0px 0px; }
          50% { translate: 8px -5px; }
        }
        @keyframes float-r {
          0%, 100% { translate: 0px 0px; }
          50% { translate: 9px 0px; }
        }
        @keyframes float-br {
          0%, 100% { translate: 0px 0px; }
          50% { translate: 8px 6px; }
        }

        .tw-float-tl:not(.cursor-grabbing) {
          animation: float-tl 4.5s ease-in-out infinite alternate;
        }
        .tw-float-l:not(.cursor-grabbing) {
          animation: float-l 4.2s ease-in-out infinite alternate;
        }
        .tw-float-bl:not(.cursor-grabbing) {
          animation: float-bl 4.8s ease-in-out infinite alternate;
        }
        .tw-float-tr:not(.cursor-grabbing) {
          animation: float-tr 4.6s ease-in-out infinite alternate;
        }
        .tw-float-r:not(.cursor-grabbing) {
          animation: float-r 4.3s ease-in-out infinite alternate;
        }
        .tw-float-br:not(.cursor-grabbing) {
          animation: float-br 4.7s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
