import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "../../content/site";

/**
 * Exact replica of the two vertical pill bars quote icon from the reference
 */
function QuoteMark({ className = "" }) {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      aria-hidden="true"
      className={`text-neutral-400/90 select-none shrink-0 ${className}`}
    >
      <rect width="3.5" height="12" rx="1.2" fill="currentColor" />
      <rect x="7" width="3.5" height="12" rx="1.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Dynamic Typewriter with organic human cadence:
 * - Natural breathing pauses at commas and periods
 * - Active sleek cursor during typing that gracefully fades out after finish
 * - Invisible ghost text prevents layout shift
 */
function DynamicTypewriterQuote({
  text,
  start = false,
  baseSpeed = 20,
  onComplete,
}) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef(null);

  const typeNextChar = useCallback(
    (currentIndex) => {
      if (currentIndex >= text.length) {
        setIsDone(true);
        onComplete?.();
        setTimeout(() => setCursorVisible(false), 1600);
        return;
      }

      setDisplayedLength(currentIndex + 1);

      const currentChar = text[currentIndex];
      let delay = baseSpeed;

      if (currentChar === "." || currentChar === "!" || currentChar === "?") {
        delay = 180 + Math.random() * 50;
      } else if (currentChar === "," || currentChar === ";" || currentChar === "—") {
        delay = 110 + Math.random() * 30;
      } else if (currentChar === " ") {
        delay = baseSpeed + (Math.random() * 14 - 4);
      } else {
        delay = Math.max(12, baseSpeed + (Math.random() * 14 - 7));
      }

      timeoutRef.current = setTimeout(() => {
        typeNextChar(currentIndex + 1);
      }, delay);
    },
    [text, baseSpeed, onComplete]
  );

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedLength(text.length);
      setIsDone(true);
      setCursorVisible(false);
      onComplete?.();
      return;
    }

    setDisplayedLength(0);
    setIsDone(false);
    setCursorVisible(true);
    timeoutRef.current = setTimeout(() => {
      typeNextChar(0);
    }, 120);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [start, text, typeNextChar]);

  const isTyping = start && displayedLength < text.length;

  return (
    <div className="relative">
      {/* Invisible placeholder locks line wrapping to exactly match reference */}
      <p
        aria-hidden="true"
        className="invisible select-none whitespace-pre-line text-[17px] font-normal leading-[1.5] tracking-[-0.012em] text-[#111111]"
      >
        {text}
      </p>

      {/* Visible typewriter text */}
      <p className="absolute inset-0 whitespace-pre-line text-[17px] font-normal leading-[1.5] tracking-[-0.012em] text-[#111111]">
        <span>{text.slice(0, displayedLength)}</span>
        {cursorVisible && (
          <span
            aria-hidden="true"
            className={`inline-block w-[2px] h-[1.12em] bg-neutral-800 ml-0.5 rounded-[1px] align-text-bottom transition-opacity duration-500 ${
              isTyping ? "animate-pulse opacity-100" : isDone ? "animate-pulse opacity-60" : "opacity-0"
            }`}
          />
        )}
      </p>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Natural cascade for second review
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartSecond(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const review1 = testimonials[0];
  const review2 = testimonials[1];

  return (
    <section
      ref={sectionRef}
      aria-label="Client reviews"
      className="px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1060px]">
        {/* Subtle vertical center divider matching reference height and position */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-2 bottom-8 w-[1px] bg-[#d1d5db] -translate-x-1/2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {/* Left Column: Review 1 (Top-aligned) */}
          {review1 && (
            <div className="md:pr-14 md:pl-2 flex justify-start md:justify-end">
              <div className="w-full max-w-[430px] pt-2 md:pt-14">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <DynamicTypewriterQuote
                      text={review1.quote}
                      start={isInView}
                      baseSpeed={19}
                    />
                  </div>
                  <QuoteMark className="mt-1" />
                </div>

                <div
                  className={`mt-7 flex items-center gap-3 transition-opacity duration-700 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={review1.avatar}
                    alt={review1.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="size-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14.5px] font-semibold text-[#111111] leading-tight tracking-[-0.01em]">
                      {review1.name}
                    </span>
                    <span className="text-[13px] font-normal text-neutral-500 leading-tight mt-0.5">
                      {review1.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Review 2 (Lower staggered placement) */}
          {review2 && (
            <div className="md:pl-14 md:pr-2 flex justify-start">
              <div className="w-full max-w-[430px] pt-2 md:pt-[150px]">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <DynamicTypewriterQuote
                      text={review2.quote}
                      start={startSecond}
                      baseSpeed={19}
                    />
                  </div>
                  <QuoteMark className="mt-1" />
                </div>

                <div
                  className={`mt-7 flex items-center gap-3 transition-opacity duration-700 ${
                    startSecond ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={review2.avatar}
                    alt={review2.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="size-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14.5px] font-semibold text-[#111111] leading-tight tracking-[-0.01em]">
                      {review2.name}
                    </span>
                    <span className="text-[13px] font-normal text-neutral-500 leading-tight mt-0.5">
                      {review2.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
