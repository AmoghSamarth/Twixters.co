import { useState, useEffect, useRef, useCallback } from "react";
import { assetUrl } from "../../utils/asset";

const BRANDING_SERVICES = [
  "Brand Strategy",
  "Logo Design",
  "Visual Identity",
  "Typography & Color Systems",
  "Stationery",
  "Packaging",
  "Brand Assets",
];

const ADVERTISING_SERVICES = [
  "Campaign Strategy",
  "Product Launch Campaigns",
  "Hoardings",
  "Posters & Flyers",
  "Digital Display Ads",
  "Social Media Creatives",
  "Festival & Event Promotions",
];

export function Expertise() {
  const leftDeckRef = useRef(null);
  const rightDeckRef = useRef(null);
  const lastWheelLeftRef = useRef(0);
  const lastWheelRightRef = useRef(0);

  // Active indices: start with reference states (Brand Assets & Hoardings)
  const [activeLeft, setActiveLeft] = useState(6);
  const [activeRight, setActiveRight] = useState(2);

  // Manual click handlers
  const handleSelectLeft = useCallback((i) => {
    setActiveLeft(i);
  }, []);

  const handleSelectRight = useCallback((i) => {
    setActiveRight(i);
  }, []);

  // ONLY when hovered on the images, scroll animation triggers; scrolling elsewhere scrolls the page normally
  useEffect(() => {
    const leftEl = leftDeckRef.current;
    const rightEl = rightDeckRef.current;

    const onLeftWheel = (e) => {
      e.preventDefault();
      const now = performance.now();
      if (now - lastWheelLeftRef.current < 260) return;
      if (Math.abs(e.deltaY) < 12) return;
      lastWheelLeftRef.current = now;

      if (e.deltaY > 0) {
        setActiveLeft((prev) => (prev + 1) % BRANDING_SERVICES.length);
      } else {
        setActiveLeft((prev) => (prev - 1 + BRANDING_SERVICES.length) % BRANDING_SERVICES.length);
      }
    };

    const onRightWheel = (e) => {
      e.preventDefault();
      const now = performance.now();
      if (now - lastWheelRightRef.current < 260) return;
      if (Math.abs(e.deltaY) < 12) return;
      lastWheelRightRef.current = now;

      if (e.deltaY > 0) {
        setActiveRight((prev) => (prev + 1) % ADVERTISING_SERVICES.length);
      } else {
        setActiveRight((prev) => (prev - 1 + ADVERTISING_SERVICES.length) % ADVERTISING_SERVICES.length);
      }
    };

    if (leftEl) leftEl.addEventListener("wheel", onLeftWheel, { passive: false });
    if (rightEl) rightEl.addEventListener("wheel", onRightWheel, { passive: false });

    return () => {
      if (leftEl) leftEl.removeEventListener("wheel", onLeftWheel);
      if (rightEl) rightEl.removeEventListener("wheel", onRightWheel);
    };
  }, []);

  // Helper to calculate 3D deck transform for Left (Branding) cards: ONLY 3 CARDS VISIBLE AT A TIME
  const getLeftDeckStyle = (index) => {
    let diff = index - activeLeft;
    if (diff > 3) diff -= 7;
    if (diff < -3) diff += 7;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // Declutter: ONLY 3 cards visible at a time (diff = -1, 0, 1)
    if (absDiff > 1) {
      return {
        transform: `rotateY(${diff > 0 ? -16 : 16}deg) translate3d(${diff > 0 ? 110 : -110}px, 0, -80px) scale(0.68)`,
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.35s ease",
      };
    }

    let translateX = 0;
    let translateZ = 45;
    let rotateY = -2;
    let rotateZ = -0.5;
    let scale = 1.0;
    let opacity = 1.0;
    let zIndex = 30;

    if (diff === 0) {
      // Front center active card
      translateX = 0;
      translateZ = 48;
      rotateY = -2;
      rotateZ = -0.5;
      scale = 1.0;
      opacity = 1.0;
      zIndex = 30;
    } else if (diff === -1) {
      // 1 Card peeking behind on the left
      translateX = -68;
      translateZ = -18;
      rotateY = 12;
      rotateZ = -1.5;
      scale = 0.90;
      opacity = 0.9;
      zIndex = 20;
    } else if (diff === 1) {
      // 1 Card peeking behind on the right
      translateX = 68;
      translateZ = -22;
      rotateY = -12;
      rotateZ = 1.5;
      scale = 0.89;
      opacity = 0.85;
      zIndex = 18;
    }

    return {
      transform: `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: isCenter ? "auto" : "none",
      transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
      boxShadow: isCenter
        ? "-16px 24px 50px -10px rgba(0,0,0,0.35), -6px 12px 24px -6px rgba(0,0,0,0.2)"
        : "-8px 14px 28px rgba(0,0,0,0.14)",
    };
  };

  // Helper to calculate 3D deck transform for Right (Advertising) cards: ONLY 3 CARDS VISIBLE AT A TIME
  const getRightDeckStyle = (index) => {
    let diff = index - activeRight;
    if (diff > 3) diff -= 7;
    if (diff < -3) diff += 7;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // Declutter: ONLY 3 cards visible at a time (diff = -1, 0, 1)
    if (absDiff > 1) {
      return {
        transform: `rotateY(${diff > 0 ? -18 : 14}deg) translate3d(${diff > 0 ? 110 : -110}px, 0, -80px) scale(0.68)`,
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.35s ease",
      };
    }

    let translateX = 0;
    let translateZ = 45;
    let rotateY = -6;
    let rotateZ = 0.5;
    let scale = 1.0;
    let opacity = 1.0;
    let zIndex = 30;

    if (diff === 0) {
      // Front center active billboard card
      translateX = 0;
      translateZ = 48;
      rotateY = -6;
      rotateZ = 0.5;
      scale = 1.0;
      opacity = 1.0;
      zIndex = 30;
    } else if (diff === -1) {
      // 1 Card peeking behind on the left
      translateX = -74;
      translateZ = -20;
      rotateY = 10;
      rotateZ = -1.5;
      scale = 0.89;
      opacity = 0.88;
      zIndex = 20;
    } else if (diff === 1) {
      // 1 Card peeking behind on the right
      translateX = 72;
      translateZ = -22;
      rotateY = -14;
      rotateZ = 1.8;
      scale = 0.89;
      opacity = 0.88;
      zIndex = 20;
    }

    return {
      transform: `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: isCenter ? "auto" : "none",
      transition: "transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
      boxShadow: isCenter
        ? "-20px 26px 55px -10px rgba(0,0,0,0.38), -8px 14px 28px -6px rgba(0,0,0,0.22)"
        : "-10px 14px 28px rgba(0,0,0,0.14)",
    };
  };

  return (
    <section
      id="expertise"
      aria-label="What we design"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-14 sm:pt-16 lg:pt-12 pb-7 lg:pb-8 select-text"
    >
      <div className="mx-auto w-full max-w-[1460px] flex-1 flex flex-col justify-between">
        {/* ─── 1. TOP HEADER ROW: ────────  What we design  ──────── ─── */}
        <div className="relative flex items-center justify-center select-none shrink-0 pt-2 pb-4">
          <div className="flex items-center justify-center gap-5 sm:gap-7 flex-1 max-w-[480px]">
            <div className="h-px flex-1 bg-neutral-300/80" />
            <h2
              className="text-[23px] sm:text-[27px] lg:text-[29px] text-neutral-800 tracking-[0.015em] select-none whitespace-nowrap"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              What we design
            </h2>
            <div className="h-px flex-1 bg-neutral-300/80" />
          </div>
        </div>

        {/* ─── 2. TWO MAIN SERVICE AREAS (LEFT & RIGHT) ─── */}
        <div className="relative my-auto py-2">
          {/* Central Vertical Divider Line (Desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-4 bottom-6 -translate-x-1/2 w-px bg-neutral-300/75 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-18 items-center">
            {/* ────────────────────────────────────────────────
                LEFT SERVICE AREA: 01 Branding Ecosystem
                ──────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-6 xl:gap-x-10 gap-y-6 lg:items-center">
              {/* Title + Service List Column */}
              <div className="select-none flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-mono tracking-widest text-neutral-400 uppercase">
                    01
                  </span>
                  <div className="w-8 h-px bg-neutral-300/80" />
                </div>

                {/* Headline */}
                <h3
                  className="tw-display font-medium text-ink leading-[1.0] tracking-[-0.035em] mb-4 sm:mb-5 lg:mb-6"
                  style={{ fontSize: "clamp(2.2rem, 3.2vw, 3.4rem)" }}
                >
                  Branding<br />Ecosystem
                </h3>

                {/* Services directly on background: Copy text blur from Image 2 */}
                <div className="flex flex-col gap-1.5 sm:gap-2 select-none">
                  {BRANDING_SERVICES.map((item, i) => {
                    const isActive = i === activeLeft;

                    return (
                      <div
                        key={item}
                        onClick={() => handleSelectLeft(i)}
                        className="group flex items-center gap-2.5 cursor-pointer py-0.5 transition-all duration-300 ease-out"
                        style={{
                          opacity: isActive ? 1 : 0.35,
                          filter: isActive ? "blur(0px)" : "blur(1.8px)",
                          transform: isActive ? "translateX(2px)" : "translateX(0px)",
                        }}
                      >
                        {/* Bullet dot */}
                        <span
                          className="size-1.5 rounded-full bg-ink transition-opacity duration-200 shrink-0"
                          style={{ opacity: isActive ? 1 : 0 }}
                        />
                        <span
                          className="tracking-[-0.018em] transition-all duration-300 whitespace-nowrap"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "clamp(0.95rem, 1.15vw, 1.12rem)",
                            fontWeight: isActive ? 550 : 400,
                            color: isActive ? "#111111" : "#444444",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Horizontal Image Gallery Deck: Decluttered (3 Cards Visible) & Hover Scroll */}
              <div className="flex justify-center lg:justify-end py-2 lg:py-0 overflow-visible">
                <div
                  ref={leftDeckRef}
                  className="relative w-full max-w-[290px] sm:max-w-[320px] xl:max-w-[360px] h-[310px] sm:h-[335px] xl:h-[365px] flex items-center justify-center select-none will-change-transform cursor-pointer"
                  style={{ perspective: "1400px" }}
                >
                  {/* Card 0: Brand Strategy */}
                  <div
                    style={getLeftDeckStyle(0)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#161619] p-6 flex flex-col justify-between border border-white/[0.08] select-none"
                  >
                    <div className="flex justify-between items-center opacity-40">
                      <span className="text-[7.5px] font-mono tracking-[0.24em] text-white uppercase">STRATEGY</span>
                      <span className="text-[7.5px] font-mono tracking-[0.2em] text-white">01</span>
                    </div>
                    <div className="my-auto flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-3">
                        <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-white/70" />
                        </div>
                      </div>
                      <span className="text-[12.5px] sm:text-[13.5px] font-medium text-white/90 tracking-tight leading-tight">
                        Brand Architecture &amp;<br />Market Positioning
                      </span>
                    </div>
                    <div className="text-center opacity-40">
                      <span className="text-[7px] font-mono tracking-[0.26em] text-white uppercase">Framework 2026</span>
                    </div>
                  </div>

                  {/* Card 1: Logo Design */}
                  <div
                    style={getLeftDeckStyle(1)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#141416] p-6 flex flex-col justify-between border border-white/[0.08] select-none"
                  >
                    <div className="flex justify-between items-center opacity-35">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">ID-SYS</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-white">02</span>
                    </div>
                    <div className="flex items-center justify-center my-auto">
                      <svg viewBox="0 0 64 64" fill="none" className="size-18 text-white/85" aria-hidden="true">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
                        <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
                        <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.55" />
                        <path
                          d="M32 11 A21 21 0 0 0 32 53"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeOpacity="0.9"
                        />
                        <circle cx="32" cy="32" r="4.5" fill="currentColor" fillOpacity="0.95" />
                      </svg>
                    </div>
                    <div className="text-center opacity-35">
                      <span className="text-[6.5px] font-mono tracking-[0.26em] text-white uppercase">Logo &amp; Mark</span>
                    </div>
                  </div>

                  {/* Card 2: Visual Identity */}
                  <div
                    style={getLeftDeckStyle(2)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] overflow-hidden border border-black/[0.06] select-none"
                  >
                    <img
                      src={assetUrl("/assets/branding-specimen-blur.jpg")}
                      alt="Visual Identity Collateral"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Card 3: Typography & Color Systems */}
                  <div
                    style={getLeftDeckStyle(3)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#fbf9f5] border border-black/[0.06] p-5 sm:p-6 flex flex-col justify-between select-none"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden rounded-tr-[16px]"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#eae7de]/70 rounded-bl-[24px] border-b border-l border-black/[0.04]" />
                    </div>
                    <div className="flex justify-between items-center opacity-45">
                      <span className="text-[7.5px] font-mono tracking-[0.24em] text-neutral-700 uppercase">TYPOGRAPHY</span>
                      <span className="text-[7.5px] font-mono tracking-[0.2em] text-neutral-700">04</span>
                    </div>
                    <div className="my-auto text-center space-y-1">
                      <span className="text-[64px] sm:text-[76px] font-serif italic text-neutral-900 leading-none block select-none">
                        Ag
                      </span>
                      <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-500 uppercase block">
                        Editorial Serif &amp; Grotesk
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400">
                      <span>PANTONE 2026</span>
                      <span>WARM NEUTRAL</span>
                    </div>
                  </div>

                  {/* Card 4: Stationery */}
                  <div
                    style={getLeftDeckStyle(4)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#faf9f6] p-5 flex flex-col justify-between border border-black/[0.07] select-none"
                  >
                    <div className="flex justify-between items-center opacity-40">
                      <span className="text-[7.5px] font-mono tracking-[0.24em] text-neutral-800 uppercase">STATIONERY</span>
                      <span className="text-[7.5px] font-mono tracking-[0.2em] text-neutral-800">05</span>
                    </div>
                    <div className="my-auto p-3.5 rounded-[8px] bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between h-[120px]">
                      <span className="text-[8.5px] font-mono tracking-[0.26em] text-neutral-900 uppercase font-semibold">TWIXTERS CO.</span>
                      <div className="space-y-1.5 opacity-30">
                        <div className="h-1 bg-neutral-800 rounded-full w-3/4" />
                        <div className="h-1 bg-neutral-800 rounded-full w-1/2" />
                      </div>
                      <span className="text-[6.5px] font-mono tracking-[0.18em] text-neutral-400">STUDIO COLLATERAL</span>
                    </div>
                    <div className="text-center opacity-40">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-neutral-800 uppercase">Cotton Stock 380gsm</span>
                    </div>
                  </div>

                  {/* Card 5: Packaging (Light Identity Card with Fold) */}
                  <div
                    style={getLeftDeckStyle(5)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#f7f5f0] p-5 flex flex-col justify-between border border-black/[0.06] overflow-hidden select-none"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-600 uppercase font-semibold">
                        BRAND
                      </span>
                      <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-600 uppercase font-semibold">
                        IDENTITY
                      </span>
                      <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-400 uppercase">
                        SYSTEM
                      </span>
                      <div className="w-4 h-px bg-neutral-300 mt-1" />
                    </div>

                    {/* Curved diagonal folded shadow corner in bottom left */}
                    <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#eae5dc] rounded-tr-[32px] shadow-md -rotate-12 border-t border-r border-black/[0.06]" />

                    <div className="z-10 text-right">
                      <span className="text-[6.5px] font-mono tracking-[0.22em] text-neutral-400 uppercase">
                        SPECIMEN NO. 06
                      </span>
                    </div>
                  </div>

                  {/* Card 6: Brand Assets (HERO MATTE DARK "Aa" CARD) */}
                  <div
                    style={getLeftDeckStyle(6)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#141416] p-5 sm:p-6 flex flex-col justify-between border border-white/[0.08] select-none"
                  >
                    {/* Top labels */}
                    <div className="flex justify-between items-center">
                      <span className="text-[7.5px] font-mono tracking-[0.24em] text-white/50 uppercase">
                        TWIXTERS
                      </span>
                      <span className="text-[7.5px] font-mono tracking-[0.2em] text-white/50">
                        07
                      </span>
                    </div>

                    {/* Large Elegant Serif "Aa" in center */}
                    <div className="my-auto text-center">
                      <span
                        className="text-[80px] sm:text-[92px] xl:text-[104px] text-white/70 leading-none tracking-tight font-normal block select-none"
                        style={{
                          fontFamily: "var(--font-serif), Playfair Display, Georgia, serif",
                        }}
                      >
                        Aa
                      </span>
                    </div>

                    {/* Bottom labels */}
                    <div className="text-center flex flex-col gap-1 pb-1">
                      <span className="text-[8px] sm:text-[8.5px] font-mono tracking-[0.28em] text-white/80 uppercase font-medium">
                        BRAND ASSETS
                      </span>
                      <span className="text-[7px] sm:text-[7.5px] font-mono tracking-[0.28em] text-white/40 uppercase">
                        FOR BOLDER BRANDS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ────────────────────────────────────────────────
                RIGHT SERVICE AREA: 02 Advertising Campaigns
                ──────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-6 xl:gap-x-10 gap-y-6 lg:items-center lg:pl-4 xl:pl-6">
              {/* Title + Service List Column */}
              <div className="select-none flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-mono tracking-widest text-neutral-400 uppercase">
                    02
                  </span>
                  <div className="w-8 h-px bg-neutral-300/80" />
                </div>

                {/* Headline */}
                <h3
                  className="tw-display font-medium text-ink leading-[1.0] tracking-[-0.035em] mb-4 sm:mb-5 lg:mb-6"
                  style={{ fontSize: "clamp(2.2rem, 3.2vw, 3.4rem)" }}
                >
                  Advertising<br />Campaigns
                </h3>

                {/* Services directly on background: Copy text blur from Image 2 */}
                <div className="flex flex-col gap-1.5 sm:gap-2 select-none">
                  {ADVERTISING_SERVICES.map((item, i) => {
                    const isActive = i === activeRight;

                    return (
                      <div
                        key={item}
                        onClick={() => handleSelectRight(i)}
                        className="group flex items-center gap-2.5 cursor-pointer py-0.5 transition-all duration-300 ease-out"
                        style={{
                          opacity: isActive ? 1 : 0.35,
                          filter: isActive ? "blur(0px)" : "blur(1.8px)",
                          transform: isActive ? "translateX(2px)" : "translateX(0px)",
                        }}
                      >
                        {/* Bullet dot */}
                        <span
                          className="size-1.5 rounded-full bg-ink transition-opacity duration-200 shrink-0"
                          style={{ opacity: isActive ? 1 : 0 }}
                        />
                        <span
                          className="tracking-[-0.018em] transition-all duration-300 whitespace-nowrap"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "clamp(0.95rem, 1.15vw, 1.12rem)",
                            fontWeight: isActive ? 550 : 400,
                            color: isActive ? "#111111" : "#444444",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Horizontal Image Gallery Deck: Decluttered (3 Cards Visible) & Hover Scroll */}
              <div className="flex justify-center lg:justify-end py-2 lg:py-0 overflow-visible">
                <div
                  ref={rightDeckRef}
                  className="relative w-full max-w-[290px] sm:max-w-[320px] xl:max-w-[360px] h-[310px] sm:h-[335px] xl:h-[365px] flex items-center justify-center select-none will-change-transform cursor-pointer"
                  style={{ perspective: "1400px" }}
                >
                  {/* Card 0: Campaign Strategy */}
                  <div
                    style={getRightDeckStyle(0)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#161619] p-5 sm:p-6 flex flex-col justify-between border border-white/[0.08] select-none"
                  >
                    <div className="flex justify-between items-center opacity-35">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">STRATEGY</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-white">01</span>
                    </div>
                    <div className="my-auto py-2">
                      <span className="tw-display text-[18px] sm:text-[20px] font-bold text-white leading-[0.95] tracking-tight block uppercase">
                        Audience Reach &amp;<br />Market Dominance
                      </span>
                    </div>
                    <div className="opacity-35">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Framework 2026</span>
                    </div>
                  </div>

                  {/* Card 1: Product Launch Campaigns */}
                  <div
                    style={getRightDeckStyle(1)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#141416] p-5 sm:p-6 flex flex-col justify-between border border-white/10 select-none"
                  >
                    <div className="flex justify-between items-center opacity-35">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">LAUNCH</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-white">02</span>
                    </div>
                    <div className="my-auto py-2">
                      <span className="tw-display text-[19px] sm:text-[22px] font-bold text-white leading-[0.92] tracking-tight block uppercase">
                        Product<br />Launch<br />Worldwide.
                      </span>
                    </div>
                    <div className="opacity-35">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Go-to-market 2026</span>
                    </div>
                  </div>

                  {/* Card 2: Hoardings (HERO BILLBOARD WITH SPOTLIGHTS & LEAF SHADOW) */}
                  <div
                    style={getRightDeckStyle(2)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[6px] bg-[#161618] p-2 sm:p-2.5 flex flex-col border-[2.5px] border-[#252528] select-none"
                  >
                    {/* Top Rim with 3 Spotlights */}
                    <div className="absolute -top-5 inset-x-0 flex items-center justify-around px-5 pointer-events-none">
                      {[0, 1, 2].map((spot) => (
                        <div key={spot} className="flex flex-col items-center">
                          <div className="w-3.5 h-1.5 bg-[#404046] rounded-t-xs shadow-xs" />
                          <div className="w-[1.5px] h-3.5 bg-[#4a4a52]" />
                        </div>
                      ))}
                    </div>

                    {/* Billboard Canvas Face */}
                    <div className="relative flex-1 rounded-[4px] bg-[#faf9f6] p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-inner border border-black/[0.06]">
                      {/* Soft branch/leaf ambient shadow overlay */}
                      <div
                        aria-hidden="true"
                        className="absolute -top-4 -right-4 w-44 h-44 pointer-events-none opacity-20"
                        style={{
                          background:
                            "radial-gradient(ellipse at 70% 30%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)",
                          filter: "blur(8px)",
                        }}
                      />

                      {/* Spotlight downlight wash reflection */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-24 pointer-events-none rounded-t-[4px]"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
                        }}
                      />

                      {/* Bold Hoarding Typography: Ideas Move People. */}
                      <div className="pt-2 pl-0.5 flex flex-col z-10 select-none">
                        <span
                          className="text-[30px] sm:text-[34px] xl:text-[38px] leading-[0.92] tracking-[-0.035em] text-[#111111] font-serif font-medium"
                          style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif" }}
                        >
                          Ideas
                        </span>
                        <span
                          className="text-[30px] sm:text-[34px] xl:text-[38px] leading-[0.92] tracking-[-0.035em] text-[#111111] font-serif font-medium"
                          style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif" }}
                        >
                          Move
                        </span>
                        <span
                          className="text-[30px] sm:text-[34px] xl:text-[38px] leading-[0.92] tracking-[-0.035em] text-[#111111] font-serif font-medium"
                          style={{ fontFamily: "var(--font-serif), Playfair Display, Georgia, serif" }}
                        >
                          People.
                        </span>
                      </div>

                      {/* Small bottom brand imprint */}
                      <div className="z-10 text-center pb-0.5">
                        <span className="text-[7.5px] sm:text-[8px] font-mono tracking-[0.26em] text-neutral-400 uppercase select-none">
                          TWIXTERS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Posters & Flyers (Urban Street Photography Card) */}
                  <div
                    style={getRightDeckStyle(3)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] overflow-hidden border border-black/[0.08] select-none"
                  >
                    <img
                      src={assetUrl("/assets/ad-street-blur.jpg")}
                      alt="Outdoor Campaign Environment"
                      className="w-full h-full object-cover grayscale contrast-125"
                      loading="lazy"
                    />
                  </div>

                  {/* Card 4: Digital Display Ads */}
                  <div
                    style={getRightDeckStyle(4)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#151518] p-5 flex flex-col justify-between border border-white/10 select-none"
                  >
                    <div className="flex justify-between items-center opacity-35">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">DIGITAL DISPLAY</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-white">05</span>
                    </div>
                    <div className="my-auto p-3 rounded-[10px] bg-neutral-900 border border-neutral-700/60 shadow-inner flex flex-col justify-center gap-2">
                      <div className="h-1.5 bg-neutral-600 rounded-full w-2/3" />
                      <span className="text-[13px] font-bold text-white tracking-tight uppercase leading-tight">
                        Dynamic Motion &amp; Display Units
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[8px] font-mono text-neutral-400">Live Campaign</span>
                      </div>
                    </div>
                    <div className="opacity-35">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Interactive Ad Units</span>
                    </div>
                  </div>

                  {/* Card 5: Social Media Creatives */}
                  <div
                    style={getRightDeckStyle(5)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#fbf9f5] p-5 flex flex-col justify-between border border-black/[0.08] select-none"
                  >
                    <div className="flex justify-between items-center opacity-40">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-800 uppercase">SOCIAL</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-neutral-800">06</span>
                    </div>
                    <div className="my-auto text-center space-y-2">
                      <div className="mx-auto w-11 h-11 rounded-[12px] bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                        9:16
                      </div>
                      <span className="text-[12.5px] font-semibold text-neutral-900 block tracking-tight">
                        Content Series &amp;<br />Viral Formats
                      </span>
                    </div>
                    <div className="text-center opacity-40">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-neutral-800 uppercase">High-Engagement Media</span>
                    </div>
                  </div>

                  {/* Card 6: Festival & Event Promotions */}
                  <div
                    style={getRightDeckStyle(6)}
                    className="absolute w-[205px] sm:w-[225px] xl:w-[250px] h-[285px] sm:h-[310px] xl:h-[340px] rounded-[16px] bg-[#0d0d0f] p-5 flex flex-col justify-between border border-white/10 select-none"
                  >
                    <div className="flex justify-between items-center opacity-35">
                      <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">EVENTS</span>
                      <span className="text-[7px] font-mono tracking-[0.2em] text-white">07</span>
                    </div>
                    <div className="my-auto py-2 text-center">
                      <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-400 block mb-1">ANNUAL SUMMIT</span>
                      <span className="tw-display text-[20px] font-black text-white leading-[0.9] tracking-tighter uppercase block">
                        Experience<br />In Motion
                      </span>
                    </div>
                    <div className="text-center opacity-35">
                      <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Festival &amp; Stage Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. FOOTER ROW: Minimalist Mouse Scroll Indicator ─── */}
        <div className="relative flex items-center justify-center select-none shrink-0 pt-2 pb-1">
          <div className="flex flex-col items-center gap-1.5 mx-auto">
            <div className="w-[16px] h-[25px] rounded-full border border-neutral-400/90 flex items-start justify-center pt-1">
              <div className="w-1 h-1.5 rounded-full bg-neutral-600 animate-pulse" />
            </div>
            <span className="text-[8.5px] font-mono tracking-[0.26em] text-neutral-400 uppercase">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
