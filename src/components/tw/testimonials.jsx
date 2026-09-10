import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials } from "../../content/site";

function QuoteIcon({ className = "" }) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="currentColor"
      aria-hidden="true"
      className={`text-neutral-400/80 shrink-0 select-none ${className}`}
    >
      <path d="M0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V2z" />
    </svg>
  );
}

/**
 * Dynamic Typewriter with human-like rhythm:
 * - Variable keystroke delays (fast bursts for words)
 * - Natural breathing pauses at commas (120ms) and periods (200ms)
 * - Active blinking orange-accented cursor during typing
 * - Graceful fade-out of cursor after typing completes
 */
function DynamicTypewriterQuote({
  text,
  start = false,
  baseSpeed = 22,
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
        // Keep cursor blinking for 1.8s then fade out
        setTimeout(() => setCursorVisible(false), 1800);
        return;
      }

      setDisplayedLength(currentIndex + 1);

      const currentChar = text[currentIndex];
      let delay = baseSpeed;

      // Human-like rhythm: punctuation pauses
      if (currentChar === "." || currentChar === "!" || currentChar === "?") {
        delay = 180 + Math.random() * 60; // 180-240ms after sentence end
      } else if (currentChar === "," || currentChar === ";" || currentChar === "—") {
        delay = 110 + Math.random() * 40; // 110-150ms after pause
      } else if (currentChar === " ") {
        delay = baseSpeed + (Math.random() * 18 - 6); // slight word boundary hesitation
      } else {
        delay = Math.max(12, baseSpeed + (Math.random() * 16 - 8)); // micro-jitter
      }

      timeoutRef.current = setTimeout(() => {
        typeNextChar(currentIndex + 1);
      }, delay);
    },
    [text, baseSpeed, onComplete]
  );

  useEffect(() => {
    if (!start) return;

    // Accessibility check: reduced motion displays full text immediately
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

    // Start typing
    setDisplayedLength(0);
    setIsDone(false);
    setCursorVisible(true);
    timeoutRef.current = setTimeout(() => {
      typeNextChar(0);
    }, 150);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [start, text, typeNextChar]);

  const isTyping = start && displayedLength < text.length;

  return (
    <div className="relative">
      {/* Invisible placeholder locks full bounding dimensions so text never jumps */}
      <p
        aria-hidden="true"
        className="invisible select-none text-[18px] sm:text-[20px] font-normal leading-[1.5] sm:leading-[1.55] tracking-[-0.015em] text-[#111111]"
      >
        {text}
      </p>

      {/* Visible dynamically typed text */}
      <p className="absolute inset-0 text-[18px] sm:text-[20px] font-normal leading-[1.5] sm:leading-[1.55] tracking-[-0.015em] text-[#111111]">
        <span>{text.slice(0, displayedLength)}</span>
        {cursorVisible && (
          <span
            aria-hidden="true"
            className={`inline-block w-[2.5px] h-[1.12em] bg-[#ff5520] ml-0.5 rounded-[1px] align-text-bottom transition-opacity duration-500 ${
              isTyping ? "animate-pulse opacity-100" : isDone ? "animate-pulse opacity-70" : "opacity-0"
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

  // Dynamically cascade: Review 2 starts after Review 1 has gained momentum (approx. 1.2s in)
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartSecond(true);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const review1 = testimonials[0];
  const review2 = testimonials[1];

  return (
    <section
      ref={sectionRef}
      aria-label="Client reviews"
      className="px-6 py-16 sm:px-12 sm:py-24"
    >
      <div className="relative mx-auto max-w-[1240px]">
        {/* Subtle vertical center divider matching reference */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-neutral-300 -translate-x-1/2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {/* Left Column: Review 1 (Top-aligned) */}
          {review1 && (
            <div className="md:pr-12 lg:pr-16 pt-2 md:pt-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <DynamicTypewriterQuote
                    text={review1.quote}
                    start={isInView}
                    baseSpeed={20}
                  />
                </div>
                <QuoteIcon className="mt-1" />
              </div>

              <div
                className={`mt-6 flex items-center gap-3.5 transition-opacity duration-700 ${
                  isInView ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={review1.avatar}
                  alt={review1.name}
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                  className="size-11 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#111111] leading-snug">
                    {review1.name}
                  </span>
                  <span className="text-[13.5px] font-normal text-neutral-500 leading-snug">
                    {review1.role}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Review 2 (Lower staggered placement) */}
          {review2 && (
            <div className="md:pl-12 lg:pl-16 pt-2 md:pt-36 lg:pt-40">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <DynamicTypewriterQuote
                    text={review2.quote}
                    start={startSecond}
                    baseSpeed={20}
                  />
                </div>
                <QuoteIcon className="mt-1" />
              </div>

              <div
                className={`mt-6 flex items-center gap-3.5 transition-opacity duration-700 ${
                  startSecond ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={review2.avatar}
                  alt={review2.name}
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                  className="size-11 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#111111] leading-snug">
                    {review2.name}
                  </span>
                  <span className="text-[13.5px] font-normal text-neutral-500 leading-snug">
                    {review2.role}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
