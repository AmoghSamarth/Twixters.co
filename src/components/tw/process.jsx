import { useEffect, useRef, useState } from "react";
import { processSteps } from "../../content/site";
import { Reveal } from "./reveal";

function LazyProcessVideo({ videoSrc, posterSrc, rotateAngle = 0 }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative my-2 sm:my-3 lg:my-4 flex-1 flex items-center justify-center"
      style={rotateAngle ? { transform: `rotate(${rotateAngle}deg)` } : undefined}
    >
      <video
        ref={videoRef}
        src={shouldLoad ? videoSrc : undefined}
        poster={posterSrc}
        preload="none"
        autoPlay={shouldLoad}
        loop
        muted
        playsInline
        className="w-full h-full max-h-[125px] sm:max-h-[150px] lg:max-h-[190px] xl:max-h-[210px] scale-[1.18] sm:scale-[1.32] lg:scale-[1.5] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.26] sm:group-hover:scale-[1.4] lg:group-hover:scale-[1.56] pointer-events-none"
      />
    </div>
  );
}

function MobileProcessConnectors() {
  return (
    <>
      {/* Connector 1: Arch connecting Card 1 to Card 2 (mobile & tablet) */}
      <div className="pointer-events-none absolute top-0 left-0 z-30 lg:hidden overflow-visible" aria-hidden="true">
        {/* Mobile (<640px) */}
        <svg className="block sm:hidden overflow-visible pointer-events-none" width="1" height="1" viewBox="0 0 1 1">
          <path
            d="M -44 78 C -38 8, -2 -16, 28 14"
            stroke="#ff5520"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="-44" cy="78" r="4.5" stroke="#ff5520" strokeWidth="2" fill="white" />
          <circle cx="28" cy="14" r="4.5" stroke="#ff5520" strokeWidth="2" fill="white" />
        </svg>
        {/* Tablet (640px - 1023px) */}
        <svg className="hidden sm:block overflow-visible pointer-events-none" width="1" height="1" viewBox="0 0 1 1">
          <path
            d="M -58 92 C -50 10, -6 -20, 32 16"
            stroke="#ff5520"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="-58" cy="92" r="5" stroke="#ff5520" strokeWidth="2.2" fill="white" />
          <circle cx="32" cy="16" r="5" stroke="#ff5520" strokeWidth="2.2" fill="white" />
        </svg>
      </div>

      {/* Connector 2: Loop-de-loop connecting Card 2 to Card 3 (mobile & tablet) */}
      <div className="pointer-events-none absolute top-0 right-0 z-30 lg:hidden overflow-visible" aria-hidden="true">
        {/* Mobile (<640px) */}
        <svg className="block sm:hidden overflow-visible pointer-events-none" width="1" height="1" viewBox="0 0 1 1">
          <path
            d="M -26 125 C -25.1 147.8, -16.3 167.2, -1.8 175.7 C 8.3 180.2, 20.6 175.7, 25.0 167.9 C 26.8 164.0, 25.0 157.5, 18.9 156.2 C 11.0 154.9, 1.3 161.4, -6.2 173.8 C -16.3 186.8, -23.8 206.2, -21.6 229.0 C -19.4 251.8, -4.0 258.2, 13.6 251.8 C 29.0 245.2, 39.1 222.5, 44 190"
            stroke="#ff5520"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="-26" cy="125" r="4.5" stroke="#ff5520" strokeWidth="2" fill="white" />
          <circle cx="44" cy="190" r="4.5" stroke="#ff5520" strokeWidth="2" fill="white" />
        </svg>
        {/* Tablet (640px - 1023px) */}
        <svg className="hidden sm:block overflow-visible pointer-events-none" width="1" height="1" viewBox="0 0 1 1">
          <path
            d="M -32 145 C -31.0 172.3, -20.6 195.7, -3.4 205.8 C 8.6 211.3, 23.1 205.8, 28.3 196.5 C 30.4 191.8, 28.3 184.0, 21.0 182.4 C 11.7 180.9, 0.2 188.7, -8.6 203.5 C -20.6 219.1, -29.4 242.5, -26.8 269.8 C -24.2 297.1, -6.0 304.9, 14.8 297.1 C 33.0 289.3, 45.0 262.0, 56 223"
            stroke="#ff5520"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="-32" cy="145" r="5" stroke="#ff5520" strokeWidth="2.2" fill="white" />
          <circle cx="56" cy="223" r="5" stroke="#ff5520" strokeWidth="2.2" fill="white" />
        </svg>
      </div>
    </>
  );
}

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
    <section id="process" aria-labelledby="process-heading" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 overflow-hidden">
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
          className="mt-4 sm:mt-5 text-center font-heading text-[clamp(2.0rem,5vw,3.5rem)] font-medium tracking-tight text-[#111111]"
        >
          Here&rsquo;s how it works
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-10 sm:mt-16 lg:mt-24 max-w-[1200px]">
        {/* Playful orange lines & rings connecting the cards (desktop overlay) */}
        <ProcessDoodles />

        {/* Horizontal scrollable rail on mobile & tablet; 3-column grid on desktop */}
        <ol className="relative z-10 flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 pt-7 sm:pt-9 -mt-5 sm:-mt-7 px-4 sm:px-6 -mx-4 sm:-mx-6 lg:mx-0 lg:px-0 lg:pb-0 lg:pt-0 lg:mt-0 lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-3">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 110}
              className={`tw-step relative shrink-0 snap-center w-[84vw] max-w-[340px] sm:w-[380px] sm:max-w-none lg:w-auto lg:shrink lg:snap-align-none ${i === 1 ? "z-20" : "z-10"}`}
              style={{
                ["--r"]: `${step.rotate}deg`,
                ["--y"]: `${step.offsetY}px`
              }}
            >
              <article
                className="tw-step-card group relative flex h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] xl:min-h-[460px] w-full flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[26px] lg:rounded-[32px] bg-white bg-clip-padding p-5 sm:p-6 lg:p-7 xl:p-8 border-[3px] sm:border-[4px] border-white/60 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_3px_12px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Top Row: Big Number */}
                <div className="flex items-start justify-between">
                  <p
                    aria-hidden="true"
                    className="text-[40px] sm:text-[52px] lg:text-[64px] xl:text-[74px] font-normal leading-none tracking-[-0.04em] text-[#111111] select-none"
                  >
                    {step.n}
                  </p>
                </div>

                {/* Middle: Deferred sequence-wise MP4 video animation in center of box */}
                <LazyProcessVideo
                  videoSrc={step.video}
                  posterSrc={step.poster}
                  rotateAngle={i === 1 ? -7 : i === 2 ? 4 : 0}
                />

                {/* Bottom: Title & Description */}
                <div className="mt-1 sm:mt-1.5 lg:mt-2 relative z-10">
                  <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] xl:text-[23px] font-medium tracking-[-0.02em] text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 lg:mt-2 text-[12.5px] sm:text-[13.5px] lg:text-[13.5px] xl:text-[14.5px] leading-[1.45] sm:leading-[1.5] text-neutral-500 font-normal">
                    {step.body}
                  </p>
                </div>
              </article>

              {/* Inter-card doodle connectors for mobile & tablet (anchored to card 2) */}
              {i === 1 && <MobileProcessConnectors />}
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
        @media (max-width: 1023px) {
          .tw-step-card { transform: none !important; }
        }
        @media (min-width: 1024px) {
          .tw-step { transform: translateY(var(--y)); }
          .tw-step-card { transform: rotate(var(--r)); }
        }
      `}</style>
    </section>
  );
}
