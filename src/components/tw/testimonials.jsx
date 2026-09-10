import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "../../content/site";

/**
 * Two vertical pill bars quotation mark icon matching reference
 */
function QuoteMark({ className = "" }) {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      aria-hidden="true"
      className={`text-black/30 select-none shrink-0 ${className}`}
    >
      <rect width="4" height="15" rx="1.5" fill="currentColor" />
      <rect x="8" width="4" height="15" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Dynamic Typewriter with human-like rhythm:
 * - Large editorial font size matching reference
 * - Organic pauses at punctuation
 * - Active blinking accent cursor
 * - Zero layout shift via ghost text
 */
function DynamicTypewriterQuote({
  text,
  start = false,
  baseSpeed = 19,
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
        className="invisible select-none whitespace-pre-line text-[19px] sm:text-[20px] lg:text-[21px] font-normal leading-[1.5] tracking-[-0.012em] text-[#111111]"
      >
        {text}
      </p>

      {/* Visible typewriter text */}
      <p className="absolute inset-0 whitespace-pre-line text-[19px] sm:text-[20px] lg:text-[21px] font-normal leading-[1.5] tracking-[-0.012em] text-[#111111]">
        <span>{text.slice(0, displayedLength)}</span>
        {cursorVisible && (
          <span
            aria-hidden="true"
            className={`inline-block w-[2.5px] h-[1.12em] bg-neutral-800 ml-0.5 rounded-[1px] align-text-bottom transition-opacity duration-500 ${
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
      className="px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="relative mx-auto max-w-[1240px]">
        {/* Distinct visible black/dark center divider line matching reference */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-4 bottom-10 w-[1px] bg-black/25 -translate-x-1/2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0">
          {/* Left Column: Review 1 (Top-aligned) */}
          {review1 && (
            <div className="md:pr-12 lg:pr-16 flex justify-start md:justify-end">
              <div className="w-full max-w-[580px] pt-2 md:pt-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <DynamicTypewriterQuote
                      text={review1.quote}
                      start={isInView}
                      baseSpeed={19}
                    />
                  </div>
                  <QuoteMark className="mt-1.5" />
                </div>

                <div
                  className={`mt-8 sm:mt-9 flex items-center gap-3.5 transition-opacity duration-700 ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={review1.avatar}
                    alt={review1.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="size-12 sm:size-[48px] rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-[16px] sm:text-[17px] font-semibold text-[#111111] leading-tight tracking-[-0.01em]">
                      {review1.name}
                    </span>
                    <span className="text-[14px] sm:text-[14.5px] font-normal text-neutral-500 leading-tight mt-1">
                      {review1.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Review 2 (Staggered to line up with Rishi's avatar) */}
          {review2 && (
            <div className="md:pl-12 lg:pl-16 flex justify-start">
              <div className="w-full max-w-[580px] pt-2 md:pt-[190px]">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <DynamicTypewriterQuote
                      text={review2.quote}
                      start={startSecond}
                      baseSpeed={19}
                    />
                  </div>
                  <QuoteMark className="mt-1.5" />
                </div>

                <div
                  className={`mt-8 sm:mt-9 flex items-center gap-3.5 transition-opacity duration-700 ${
                    startSecond ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={review2.avatar}
                    alt={review2.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="size-12 sm:size-[48px] rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-[16px] sm:text-[17px] font-semibold text-[#111111] leading-tight tracking-[-0.01em]">
                      {review2.name}
                    </span>
                    <span className="text-[14px] sm:text-[14.5px] font-normal text-neutral-500 leading-tight mt-1">
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
