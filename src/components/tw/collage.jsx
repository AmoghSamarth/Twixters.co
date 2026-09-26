import { useEffect, useRef, useState } from "react";
import { collage, collageCta } from "../../content/site";
import { Reveal } from "./reveal";
import { assetUrl } from "../../utils/asset";

/* ─── Image sets for each column (duplicated for seamless loop) with exact intrinsic dimensions ─── */
const leftImages = [
  {
    src: assetUrl("/assets/portfolio-a1.jpg"),
    srcMobile: assetUrl("/assets/portfolio-a1-m.webp"),
    alt: "Portfolio work A1",
    width: 1400,
    height: 787,
  },
  {
    src: assetUrl("/assets/portfolio-a2.png"),
    srcMobile: assetUrl("/assets/portfolio-a2-m.webp"),
    alt: "Portfolio work A2",
    width: 1400,
    height: 1026,
  },
  {
    src: assetUrl("/assets/portfolio-a3.png"),
    srcMobile: assetUrl("/assets/portfolio-a3-m.webp"),
    alt: "Portfolio work A3",
    width: 1400,
    height: 912,
  },
];

const rightImages = [
  {
    src: assetUrl("/assets/portfolio-b1.png"),
    srcMobile: assetUrl("/assets/portfolio-b1-m.webp"),
    alt: "Portfolio work B1",
    width: 966,
    height: 664,
  },
  {
    src: assetUrl("/assets/portfolio-b2.png"),
    srcMobile: assetUrl("/assets/portfolio-b2-m.webp"),
    alt: "Portfolio work B2",
    width: 1400,
    height: 700,
  },
  {
    src: assetUrl("/assets/portfolio-b3.jpg"),
    srcMobile: assetUrl("/assets/portfolio-b3-m.webp"),
    alt: "Portfolio work B3",
    width: 1400,
    height: 1166,
  },
];

function MarqueeColumn({ images, duration, className = "" }) {
  // Repeat images so that one group is taller than the showroom container
  const groupImages = [...images, ...images];

  return (
    <div className={`tw-marquee-track overflow-hidden ${className}`}>
      <div
        className="tw-marquee-inner"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="tw-marquee-group">
          {groupImages.map((img, i) => (
            <div
              key={`${img.src}-g1-${i}`}
              className="tw-marquee-card overflow-hidden rounded-[16px] sm:rounded-[20px]"
            >
              <img
                src={img.src}
                srcSet={`${img.srcMobile} 700w, ${img.src} 1400w`}
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 600px"
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block rounded-[16px] sm:rounded-[20px]"
              />
            </div>
          ))}
        </div>
        <div className="tw-marquee-group" aria-hidden="true">
          {groupImages.map((img, i) => (
            <div
              key={`${img.src}-g2-${i}`}
              className="tw-marquee-card overflow-hidden rounded-[16px] sm:rounded-[20px]"
            >
              <img
                src={img.src}
                srcSet={`${img.srcMobile} 700w, ${img.src} 1400w`}
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 600px"
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block rounded-[16px] sm:rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Collage() {
  const sectionRef = useRef(null);
  const floatRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const hasEnteredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setHasEntered(true);
      hasEnteredRef.current = true;
      return;
    }

    let rafId;
    let smoothY = 0;

    const tick = () => {
      if (sectionRef.current && floatRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const vh = window.innerHeight;

        if (!hasEnteredRef.current && rect.top < vh * 0.92) {
          hasEnteredRef.current = true;
          setHasEntered(true);
        }

        if (hasEnteredRef.current) {
          // Scroll-driven vertical parallax for the floating CTA (desktop only)
          const isDesktop = window.innerWidth >= 1024;
          const totalTravel = rect.height + vh;
          const traveled = vh - rect.top;
          const progress = Math.max(0, Math.min(1, traveled / totalTravel));
          const targetY = isDesktop ? (0.5 - progress) * 60 : 0;
          smoothY += (targetY - smoothY) * 0.08;

          // Idle float
          const t = performance.now() * 0.001;
          const idlePeriod = 4.8;
          const idleY = Math.sin((t * 2 * Math.PI) / idlePeriod) * 3;
          const idleX = Math.cos((t * 2 * Math.PI) / idlePeriod) * 1.2;

          floatRef.current.style.transform = `translate3d(${idleX.toFixed(2)}px, ${(smoothY + idleY).toFixed(2)}px, 0)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const railRef = useRef(null);
  const isInteractingRef = useRef(false);
  const currentIndexRef = useRef(0);

  // Auto-scroll right images one by one like a swipe on mobile & tablet
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let timer = null;
    let resetTimer = null;
    const totalOriginal = leftImages.length + rightImages.length; // 6

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (isInteractingRef.current || !railRef.current) return;
        const container = railRef.current;
        const items = container.children;
        if (!items || items.length === 0) return;

        const nextIdx = currentIndexRef.current + 1;
        currentIndexRef.current = nextIdx;

        const targetEl = items[nextIdx];
        if (targetEl) {
          const targetLeft =
            targetEl.offsetLeft -
            container.offsetLeft -
            (container.clientWidth - targetEl.clientWidth) / 2;
          container.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: "smooth",
          });
        }

        // When reaching the duplicated set, smoothly settle then reset invisibly to start
        if (nextIdx >= totalOriginal) {
          if (resetTimer) clearTimeout(resetTimer);
          resetTimer = setTimeout(() => {
            if (isInteractingRef.current || !railRef.current) return;
            const c = railRef.current;
            const first = c.children[0];
            if (first) {
              const resetLeft =
                first.offsetLeft -
                c.offsetLeft -
                (c.clientWidth - first.clientWidth) / 2;
              c.scrollTo({
                left: Math.max(0, resetLeft),
                behavior: "auto",
              });
              currentIndexRef.current = 0;
            }
          }, 650);
        }
      }, 2800);
    };

    const onPointerDown = () => {
      isInteractingRef.current = true;
      if (resetTimer) clearTimeout(resetTimer);
    };

    const onPointerUp = () => {
      setTimeout(() => {
        isInteractingRef.current = false;
        if (railRef.current) {
          const c = railRef.current;
          const center = c.scrollLeft + c.clientWidth / 2;
          let closestIdx = 0;
          let closestDist = Infinity;
          for (let i = 0; i < c.children.length; i++) {
            const child = c.children[i];
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const dist = Math.abs(childCenter - center);
            if (dist < closestDist) {
              closestDist = dist;
              closestIdx = i;
            }
          }
          currentIndexRef.current = closestIdx % totalOriginal;
        }
      }, 400);
    };

    rail.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    startTimer();

    return () => {
      if (timer) clearInterval(timer);
      if (resetTimer) clearTimeout(resetTimer);
      rail.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work"
      className="relative z-20 -mt-4 sm:-mt-8 md:-mt-[44px] px-3 pb-16 sm:px-6 md:px-10 lg:px-16 xl:px-[96px] 2xl:px-[112px] sm:pb-24"
    >
      <Reveal className="relative mx-auto max-w-[1444px]">
        {/* Dark showroom container */}
        <div className="relative overflow-hidden rounded-[24px] border-[4px] sm:border-[5px] border-white/30 bg-[#191919] px-3 py-3 sm:rounded-[32px] md:rounded-[36px] sm:px-[28px] lg:px-[36px] sm:py-4">

          {/* ── Desktop: two auto-scrolling marquee columns (lg: >= 1024px) ── */}
          <div className="tw-collage hidden lg:grid">
            {/* Left column — slower speed */}
            <MarqueeColumn images={leftImages} duration={32} />

            {/* Right column — slightly faster speed */}
            <MarqueeColumn images={rightImages} duration={25} />
          </div>

          {/* ── Mobile & Tablet: auto-scrolling horizontal snap rail (< 1024px) ── */}
          <ul
            ref={railRef}
            className="-mx-1 flex snap-x snap-mandatory gap-3 sm:gap-4 overflow-x-auto px-1 pb-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...leftImages, ...rightImages, ...leftImages, ...rightImages].map((img, i) => (
              <li
                key={`m-${img.src}-${i}`}
                className="h-[210px] sm:h-[280px] md:h-[340px] w-[86%] sm:w-[60%] md:w-[48%] shrink-0 snap-center overflow-hidden rounded-[18px] sm:rounded-[24px]"
              >
                <img
                  src={img.srcMobile || img.src}
                  srcSet={`${img.srcMobile} 700w, ${img.src} 1400w`}
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 60vw, 600px"
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="size-full object-cover select-none pointer-events-none"
                />
              </li>
            ))}
          </ul>

          {/* ── Floating "See Recent Work" CTA: bottom-right on mobile & tablet, centered on desktop ── */}
          <div
            className="pointer-events-none absolute z-30 block right-4 bottom-3 sm:right-6 sm:bottom-5 md:right-8 md:bottom-6 lg:right-auto lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <div
              className={`transition-[opacity,transform] duration-700 ease-out ${hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <a
                href={collageCta?.href || "#work"}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={collageCta?.label || "See Recent Work"}
                className="group pointer-events-auto block cursor-pointer select-none transition-transform duration-300 ease-out hover:scale-[1.04]"
              >
                <div ref={floatRef} className="relative">
                  {/* 1. Translucent black rotated pill */}
                  <div
                    className="absolute z-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
                    style={{
                      width: "clamp(155px, 13vw, 196px)",
                      height: "clamp(46px, 4vw, 58px)",
                      top: "clamp(-54px, -4.5vw, -44px)",
                      left: "clamp(-34px, -2.8vw, -26px)",
                      transform: "rotate(16deg)",
                    }}
                  >
                    <span
                      className="text-white font-bold tracking-tight whitespace-nowrap drop-shadow-sm"
                      style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}
                    >
                      {collageCta?.label || "See Recent Work"}
                    </span>
                    {/* Downward triangle pointer tail */}
                    <div
                      aria-hidden="true"
                      className="absolute left-[48%] -translate-x-1/2"
                      style={{
                        bottom: "clamp(-7px, -0.6vw, -8px)",
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "7px solid rgba(0, 0, 0, 0.5)",
                      }}
                    />
                  </div>

                  {/* 2. Translucent frosted circular button */}
                  <div
                    className="flex items-center justify-center rounded-full bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                    style={{
                      width: "clamp(110px, 9.5vw, 138px)",
                      height: "clamp(110px, 9.5vw, 138px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-black transition-transform duration-300 group-hover:scale-105"
                      style={{
                        width: "clamp(28px, 2.6vw, 40px)",
                        height: "clamp(28px, 2.6vw, 40px)",
                      }}
                    >
                      <path d="M240 88h-109.33L102.93 60.27A16.1 16.1 0 0 0 91.64 56H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 15.82-13.68l16-104A16 16 0 0 0 240 88Zm-25.76 112H40V72h51.64l27.73 27.73A16.1 16.1 0 0 0 130.67 104h91.94Z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </Reveal>

      <style>{`
        /* ── Grid shell — 2.5x taller container ── */
        .tw-collage {
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          /* Container is now 1.5x taller — images fill it and scroll through */
          height: clamp(1050px, 132vh, 1530px);
        }

        /* ── Each marquee track clips overflow ── */
        .tw-marquee-track {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        /* ── Inner strip that actually moves ── */
        .tw-marquee-inner {
          display: flex;
          flex-direction: column;
          animation: tw-scroll-up linear infinite;
          will-change: transform;
        }

        /* ── Group of cards with 30px gap (doubled) ── */
        .tw-marquee-group {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding-bottom: 30px;
          flex-shrink: 0;
        }

        /* ── Individual image cards — snug wrap so image gap is exactly 15px ── */
        .tw-marquee-card {
          flex-shrink: 0;
          width: 100%;
        }

        /* ── The keyframe: translate up by exactly 50% of the doubled content height ── */
        @keyframes tw-scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        /* ── NO hover-pause — continuous scroll always on ── */

        /* ── Deep black gradient fade at top and bottom edges ── */
        .tw-marquee-track::before,
        .tw-marquee-track::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          z-index: 2;
          pointer-events: none;
        }
        /* Top fade — images melt into black as they exit upward — 30% longer, more gradual */
        .tw-marquee-track::before {
          top: 0;
          height: 208px;
          background: linear-gradient(
            to bottom,
            #191919 0%,
            rgba(25, 25, 25, 0.88) 20%,
            rgba(25, 25, 25, 0.6) 50%,
            rgba(25, 25, 25, 0.2) 80%,
            transparent 100%
          );
        }
        /* Bottom fade — images melt into black as they enter from bottom — 30% longer */
        .tw-marquee-track::after {
          bottom: 0;
          height: 208px;
          background: linear-gradient(
            to top,
            #191919 0%,
            rgba(25, 25, 25, 0.88) 20%,
            rgba(25, 25, 25, 0.6) 50%,
            rgba(25, 25, 25, 0.2) 80%,
            transparent 100%
          );
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .tw-collage { height: clamp(780px, 112vh, 1200px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tw-marquee-inner { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
