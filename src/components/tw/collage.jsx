import { useEffect, useRef, useState } from "react";
import { collage, collageCta } from "../../content/site";
import { Reveal } from "./reveal";

export function Collage() {
  const sectionRef = useRef(null);
  const floatRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const hasEnteredRef = useRef(false);

  useEffect(() => {
    // Respect reduced motion preference
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

        // Trigger entrance once section enters viewport
        if (!hasEnteredRef.current && rect.top < vh * 0.92) {
          hasEnteredRef.current = true;
          setHasEntered(true);
        }

        if (hasEnteredRef.current) {
          // Scroll progress through the section: 0 = section top at bottom of viewport, 1 = section bottom at top of viewport
          const totalTravel = rect.height + vh;
          const traveled = vh - rect.top;
          const progress = Math.max(0, Math.min(1, traveled / totalTravel));

          // Map progress to a vertical offset: rises from +40px to -40px as you scroll through
          // This gives the "floating through the section" feeling
          const targetY = (0.5 - progress) * 80;

          // Smooth lerp
          smoothY += (targetY - smoothY) * 0.08;

          // Subtle idle breathing (gentle float, no rotation to keep units locked)
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

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work"
      className="relative px-4 pb-20 sm:px-8 sm:pb-24"
    >
      <Reveal className="relative mx-auto max-w-[1280px]">
        {/* Dark showroom container */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#191919] p-3 sm:rounded-[36px] sm:p-4">

          {/* ── Desktop mosaic: 2-column reference layout ── */}
          <div className="tw-collage hidden sm:block">
            {/* Left column */}
            <div className="tw-col-left flex flex-col gap-3 sm:gap-3.5">
              {/* Top image — tall */}
              <Reveal delay={0} className="overflow-hidden rounded-[18px] sm:rounded-[22px] tw-img-tall-a">
                <img
                  src={collage[0]?.src || "/assets/work-1.jpg"}
                  alt={collage[0]?.alt || "Brand identity work"}
                  width={1024}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </Reveal>
              {/* Bottom image */}
              <Reveal delay={80} className="overflow-hidden rounded-[18px] sm:rounded-[22px] tw-img-tall-b">
                <img
                  src={collage[2]?.src || "/assets/work-3.jpg"}
                  alt={collage[2]?.alt || "Brand design work"}
                  width={1024}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </Reveal>
            </div>

            {/* Right column */}
            <div className="tw-col-right flex flex-col gap-3 sm:gap-3.5">
              {/* Top right image — large single */}
              <Reveal delay={40} className="overflow-hidden rounded-[18px] sm:rounded-[22px] tw-img-right-a">
                <img
                  src={collage[1]?.src || "/assets/work-2.jpg"}
                  alt={collage[1]?.alt || "Organic brand design"}
                  width={1024}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </Reveal>
              {/* Bottom right: 3-panel row */}
              <div className="tw-img-right-b grid grid-cols-3 gap-3 sm:gap-3.5">
                <Reveal delay={100} className="overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <img
                    src={collage[3]?.src || "/assets/work-5.jpg"}
                    alt={collage[3]?.alt || "Design work"}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </Reveal>
                <Reveal delay={130} className="overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <img
                    src={collage[4]?.src || "/assets/work-4.jpg"}
                    alt={collage[4]?.alt || "Design work"}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </Reveal>
                <Reveal delay={160} className="overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <img
                    src={collage[5]?.src || "/assets/work-6.jpg"}
                    alt={collage[5]?.alt || "Design work"}
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </div>

          {/* ── Mobile: horizontal snap rail ── */}
          <ul className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 sm:hidden">
            {collage.map((block) => (
              <li
                key={`m-${block.src}`}
                className="h-[210px] w-[86%] shrink-0 snap-center overflow-hidden rounded-[18px]"
              >
                <img
                  src={block.src}
                  alt={block.alt}
                  width={1024}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </li>
            ))}
          </ul>

          {/* ── Floating "See Recent Work" CTA ── */}
          {/* Positioned at horizontal center seam, approximately at the junction between top and bottom rows */}
          <div className="pointer-events-none absolute left-1/2 top-[50%] z-30 -translate-x-[50%] -translate-y-[50%] hidden sm:block">
            {/* Entrance fade + rise */}
            <div
              className={`transition-[opacity,transform] duration-700 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
                {/* This div gets the scroll-driven parallax transform */}
                <div ref={floatRef} className="relative">

                  {/* 1. Black rotated pill — above and slightly left of center */}
                  <div
                    className="absolute z-10 flex items-center justify-center rounded-full bg-[#0a0a0a] shadow-[0_10px_28px_rgba(0,0,0,0.4)]"
                    style={{
                      width: "clamp(155px, 13vw, 196px)",
                      height: "clamp(46px, 4vw, 58px)",
                      top: "clamp(-54px, -4.5vw, -44px)",
                      left: "clamp(-34px, -2.8vw, -26px)",
                      transform: "rotate(16deg)",
                    }}
                  >
                    <span className="text-white font-bold tracking-tight whitespace-nowrap" style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}>
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
                        borderTop: "7px solid #0a0a0a",
                      }}
                    />
                  </div>

                  {/* 2. White frosted circular button */}
                  <div
                    className="flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
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
                      style={{ width: "clamp(28px, 2.6vw, 40px)", height: "clamp(28px, 2.6vw, 40px)" }}
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
        /* Desktop mosaic — 2-column layout matching reference */
        .tw-collage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          gap: 14px;
        }
        .tw-col-left,
        .tw-col-right {
          display: flex;
          flex-direction: column;
        }

        /* Left column heights */
        .tw-img-tall-a {
          height: clamp(340px, 36vw, 520px);
        }
        .tw-img-tall-b {
          height: clamp(260px, 28vw, 400px);
        }

        /* Right column heights */
        .tw-img-right-a {
          height: clamp(300px, 32vw, 460px);
        }
        .tw-img-right-b {
          height: clamp(200px, 21vw, 300px);
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .tw-img-tall-a { height: clamp(280px, 36vw, 380px); }
          .tw-img-tall-b { height: clamp(200px, 26vw, 280px); }
          .tw-img-right-a { height: clamp(250px, 32vw, 340px); }
          .tw-img-right-b { height: clamp(160px, 20vw, 220px); }
        }
      `}</style>
    </section>
  );
}
