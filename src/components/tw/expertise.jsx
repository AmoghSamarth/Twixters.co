import { useEffect, useRef, useState, useCallback } from "react";
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
  const outerTrackRef = useRef(null);
  const userInteractedRef = useRef(false);
  const interactTimeoutRef = useRef(null);

  // Default active items match reference: Typography & Color Systems (idx 3) and Hoardings (idx 2)
  const [activeLeft, setActiveLeft] = useState(3);
  const [activeRight, setActiveRight] = useState(2);
  const activeLeftRef = useRef(3);
  const activeRightRef = useRef(2);

  // Manual interaction handler
  const handleSelectLeft = useCallback((i) => {
    userInteractedRef.current = true;
    activeLeftRef.current = i;
    setActiveLeft(i);
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);
    interactTimeoutRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 4500);
  }, []);

  const handleSelectRight = useCallback((i) => {
    userInteractedRef.current = true;
    activeRightRef.current = i;
    setActiveRight(i);
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);
    interactTimeoutRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 4500);
  }, []);

  // Vertical scroll -> Horizontal sideways card deck scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!outerTrackRef.current) return;
      const rect = outerTrackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollDist = rect.height - vh;

      let progress = 0.5;
      if (scrollDist > 0) {
        progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
      } else {
        const totalDist = vh + rect.height;
        const currentDist = vh - rect.top;
        progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      }

      // Sync active service items smoothly based on scroll progress if user hasn't manually clicked
      if (!userInteractedRef.current) {
        // Map progress across the 7 service cards [0..6]
        const norm = Math.min(Math.max((progress - 0.08) / 0.84, 0), 1);
        const nextLeft = Math.min(
          BRANDING_SERVICES.length - 1,
          Math.max(0, Math.floor(norm * BRANDING_SERVICES.length))
        );
        const nextRight = Math.min(
          ADVERTISING_SERVICES.length - 1,
          Math.max(0, Math.floor(norm * ADVERTISING_SERVICES.length))
        );

        if (nextLeft !== activeLeftRef.current) {
          activeLeftRef.current = nextLeft;
          setActiveLeft(nextLeft);
        }
        if (nextRight !== activeRightRef.current) {
          activeRightRef.current = nextRight;
          setActiveRight(nextRight);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);
    };
  }, []);

  // Helper to calculate 3D deck transform for Left (Branding) cards
  const getLeftDeckStyle = (index) => {
    const diff = index - activeLeft;
    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // If card is far away, completely hide it
    if (absDiff > 2) {
      return {
        transform: `rotateY(16deg) translate3d(${diff > 0 ? 150 : -130}px, 0, -60px) scale(0.75)`,
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        transition: "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease",
      };
    }

    let translateX = 0;
    let translateZ = 45;
    let rotateY = 16;
    let rotateZ = 0;
    let scale = 1.0;
    let opacity = 1.0;
    let zIndex = 30;

    if (diff === 0) {
      // Center active card
      translateX = 0;
      translateZ = 45;
      rotateY = 16;
      rotateZ = 0;
      scale = 1.0;
      opacity = 1.0;
      zIndex = 30;
    } else if (diff === -1) {
      // One card behind to the left (like the matte monogram card in reference)
      translateX = -52;
      translateZ = -15;
      rotateY = 21;
      rotateZ = -1.5;
      scale = 0.91;
      opacity = 0.78;
      zIndex = 22;
    } else if (diff === -2) {
      // Two cards behind to the left (like the blurred specimen card in reference)
      translateX = -100;
      translateZ = -42;
      rotateY = 25;
      rotateZ = -3;
      scale = 0.85;
      opacity = 0.65;
      zIndex = 15;
    } else if (diff === 1) {
      // One card behind to the right (like the origami packaging card in reference)
      translateX = 80;
      translateZ = -22;
      rotateY = 7;
      rotateZ = 3;
      scale = 0.88;
      opacity = 0.82;
      zIndex = 20;
    } else if (diff === 2) {
      // Two cards behind to the right
      translateX = 132;
      translateZ = -45;
      rotateY = 4;
      rotateZ = 4.5;
      scale = 0.82;
      opacity = 0.5;
      zIndex = 12;
    }

    return {
      transform: `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: isCenter ? "auto" : "none",
      transition: "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease, box-shadow 0.5s ease",
      boxShadow: isCenter
        ? "-22px 30px 60px -12px rgba(0,0,0,0.22), -8px 12px 24px -6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.05)"
        : "-10px 14px 28px rgba(0,0,0,0.1)",
    };
  };

  // Helper to calculate 3D deck transform for Right (Advertising) cards
  const getRightDeckStyle = (index) => {
    const diff = index - activeRight;
    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // If card is far away, completely hide it
    if (absDiff > 2) {
      return {
        transform: `rotateY(-18deg) translate3d(${diff > 0 ? 150 : -130}px, 0, -60px) scale(0.75)`,
        opacity: 0,
        pointerEvents: "none",
        zIndex: 0,
        transition: "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.4s ease",
      };
    }

    let translateX = 0;
    let translateZ = 45;
    let rotateY = -18;
    let rotateZ = 0;
    let scale = 1.0;
    let opacity = 1.0;
    let zIndex = 30;

    if (diff === 0) {
      // Center active billboard
      translateX = 0;
      translateZ = 45;
      rotateY = -18;
      rotateZ = 0;
      scale = 1.0;
      opacity = 1.0;
      zIndex = 30;
    } else if (diff === -1) {
      // One card behind to the left (like urban street scene in reference)
      translateX = -95;
      translateZ = -38;
      rotateY = -24;
      rotateZ = -3;
      scale = 0.86;
      opacity = 0.78;
      zIndex = 22;
    } else if (diff === -2) {
      // Two cards behind to the left
      translateX = -135;
      translateZ = -55;
      rotateY = -28;
      rotateZ = -4.5;
      scale = 0.80;
      opacity = 0.5;
      zIndex = 14;
    } else if (diff === 1) {
      // One card behind to the right (like BOLD IDEAS poster in reference)
      translateX = 88;
      translateZ = -20;
      rotateY = -11;
      rotateZ = 2.5;
      scale = 0.88;
      opacity = 0.85;
      zIndex = 20;
    } else if (diff === 2) {
      // Two cards behind to the right
      translateX = 135;
      translateZ = -45;
      rotateY = -5;
      rotateZ = 4;
      scale = 0.82;
      opacity = 0.55;
      zIndex = 12;
    }

    return {
      transform: `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: isCenter ? "auto" : "none",
      transition: "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease, box-shadow 0.5s ease",
      boxShadow: isCenter
        ? "-24px 34px 68px -10px rgba(0,0,0,0.36), -10px 16px 32px -8px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.12)"
        : "-10px 14px 28px rgba(0,0,0,0.12)",
    };
  };

  return (
    /* ─── Outer Track: Sticky Pinning Track for Controlled Horizontal Travel on Desktop ─── */
    <div
      ref={outerTrackRef}
      className="relative lg:min-h-[280vh]"
    >
      <section
        id="expertise"
        aria-label="What we design"
        className="relative lg:sticky lg:top-0 min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-hidden px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-20 sm:pt-22 lg:pt-16 pb-10 lg:pb-8 select-text bg-[#f2f2f2]"
      >
        <div className="mx-auto w-full max-w-[1480px] h-full flex flex-col justify-between">
          {/* ─── 1. TOP HEADER ROW (What we design) ─── */}
          <div className="relative w-full flex items-center justify-center select-none shrink-0">
            {/* Top Center Title with Dividers */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-1 max-w-[480px] mx-auto">
              <div className="h-px flex-1 bg-neutral-300/80" />
              <h2
                className="text-[22px] sm:text-[26px] lg:text-[28px] text-neutral-800 tracking-[0.015em] select-none whitespace-nowrap"
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
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-neutral-300/75 pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
              {/* ────────────────────────────────────────────────
                  LEFT SERVICE AREA: 01 Branding Ecosystem
                  ──────────────────────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-6 xl:gap-x-8 gap-y-5 lg:items-center">
                {/* Title (order-1 on mobile, col 1 row 1 on desktop) */}
                <div className="order-1 lg:col-start-1 lg:row-start-1 select-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-mono tracking-widest text-neutral-400 uppercase">
                      01
                    </span>
                    <div className="w-8 h-px bg-neutral-300/80" />
                  </div>
                  <h3
                    className="tw-display font-medium text-ink leading-[1.02] tracking-[-0.035em]"
                    style={{ fontSize: "clamp(2.3rem, 3.4vw, 3.5rem)" }}
                  >
                    Branding<br />Ecosystem
                  </h3>
                </div>

                {/* Horizontal Image Gallery Deck (order-2 on mobile, col 2 row 1-3 on desktop) */}
                <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end py-3 lg:py-0 overflow-visible">
                  <div
                    className="relative w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[420px] h-[340px] sm:h-[375px] xl:h-[415px] flex items-center justify-center select-none will-change-transform"
                    style={{ perspective: "1400px" }}
                  >
                    {/* Card 0: Brand Strategy */}
                    <div
                      style={getLeftDeckStyle(0)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#161619] p-6 flex flex-col justify-between border border-white/[0.08] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-40">
                        <span className="text-[7.5px] font-mono tracking-[0.24em] text-white uppercase">STRATEGY</span>
                        <span className="text-[7.5px] font-mono tracking-[0.2em] text-white">01</span>
                      </div>
                      <div className="my-auto flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-3">
                          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-white/70" />
                          </div>
                        </div>
                        <span className="text-[13px] sm:text-[14px] font-medium text-white/90 tracking-tight leading-tight">
                          Brand Architecture &amp;<br />Market Positioning
                        </span>
                      </div>
                      <div className="text-center opacity-40">
                        <span className="text-[7px] font-mono tracking-[0.26em] text-white uppercase">Framework 2026</span>
                      </div>
                    </div>

                    {/* Card 1: Logo Design (Matte Dark Monogram Card) */}
                    <div
                      style={getLeftDeckStyle(1)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#141416] p-6 flex flex-col justify-between border border-white/[0.08] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">ID-SYS</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-white">02</span>
                      </div>
                      <div className="flex items-center justify-center my-auto">
                        <svg viewBox="0 0 64 64" fill="none" className="size-20 text-white/85" aria-hidden="true">
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

                    {/* Card 2: Visual Identity (Soft Blurred Specimen) */}
                    <div
                      style={getLeftDeckStyle(2)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] overflow-hidden border border-black/[0.06] pointer-events-none select-none"
                    >
                      <img
                        src={assetUrl("/assets/branding-specimen-blur.jpg")}
                        alt="Visual Identity Collateral"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Card 3: Typography & Color Systems (HERO "Aa" CARD FROM REFERENCE) */}
                    <div
                      style={getLeftDeckStyle(3)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#fbf9f5] border border-black/[0.06] p-6 sm:p-7 flex flex-col justify-between pointer-events-auto select-none"
                    >
                      {/* Diagonal paper crease line overlay */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 w-28 h-28 pointer-events-none overflow-hidden rounded-tr-[16px]"
                      >
                        <div
                          className="w-full h-full"
                          style={{
                            background:
                              "linear-gradient(135deg, transparent 48%, rgba(0,0,0,0.05) 50%, rgba(255,255,255,0.8) 52%, transparent 56%)",
                          }}
                        />
                      </div>

                      {/* Hero Didone Serif "Aa" */}
                      <div className="pt-3 pl-1 select-none">
                        <span
                          className="text-[96px] sm:text-[112px] xl:text-[124px] text-ink leading-[0.82] tracking-tight font-normal block"
                          style={{
                            fontFamily: "var(--font-serif), Playfair Display, Georgia, serif",
                          }}
                        >
                          Aa
                        </span>
                      </div>

                      {/* Bottom typography details */}
                      <div className="flex flex-col gap-1 pb-1 pl-1 select-none">
                        <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.28em] text-neutral-700 uppercase font-semibold">
                          Typography
                        </span>
                        <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.28em] text-neutral-400 uppercase">
                          Color Systems
                        </span>
                      </div>
                    </div>

                    {/* Card 4: Stationery */}
                    <div
                      style={getLeftDeckStyle(4)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#faf9f6] p-6 flex flex-col justify-between border border-black/[0.07] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-40">
                        <span className="text-[7.5px] font-mono tracking-[0.24em] text-neutral-800 uppercase">STATIONERY</span>
                        <span className="text-[7.5px] font-mono tracking-[0.2em] text-neutral-800">05</span>
                      </div>
                      <div className="my-auto p-4 rounded-[8px] bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between h-[130px]">
                        <span className="text-[9px] font-mono tracking-[0.26em] text-neutral-900 uppercase font-semibold">TWIXTERS CO.</span>
                        <div className="space-y-1.5 opacity-30">
                          <div className="h-1 bg-neutral-800 rounded-full w-3/4" />
                          <div className="h-1 bg-neutral-800 rounded-full w-1/2" />
                        </div>
                        <span className="text-[7px] font-mono tracking-[0.18em] text-neutral-400">STUDIO COLLATERAL</span>
                      </div>
                      <div className="text-center opacity-40">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-800 uppercase">Cotton Stock 380gsm</span>
                      </div>
                    </div>

                    {/* Card 5: Packaging (ORIGAMI FOLDED BOOKLET FROM REFERENCE) */}
                    <div
                      style={getLeftDeckStyle(5)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] overflow-hidden border border-black/[0.06] pointer-events-none select-none"
                    >
                      <img
                        src={assetUrl("/assets/branding-origami-fold.jpg")}
                        alt="Packaging Design Specimen"
                        className="w-full h-full object-cover contrast(105%)"
                        loading="lazy"
                      />
                    </div>

                    {/* Card 6: Brand Assets */}
                    <div
                      style={getLeftDeckStyle(6)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#141416] p-6 flex flex-col justify-between border border-white/[0.08] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">ASSETS</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-white">07</span>
                      </div>
                      <div className="my-auto grid grid-cols-3 gap-2.5 p-2">
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                          <div key={idx} className="aspect-square rounded-[8px] bg-white/[0.06] border border-white/10 flex items-center justify-center">
                            <div className="size-3 rounded-full bg-white/40" />
                          </div>
                        ))}
                      </div>
                      <div className="text-center opacity-35">
                        <span className="text-[6.5px] font-mono tracking-[0.26em] text-white uppercase">Design Tokens &amp; Components</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services List + Tracker (order-3 on mobile, col 1 row 2 on desktop) */}
                <div className="order-3 lg:col-start-1 lg:row-start-2 flex items-start gap-4 sm:gap-6 shrink-0 min-w-0">
                  {/* Editorial Vertical Tracker (e.g. 03 ● 07) */}
                  <div className="flex flex-col items-center justify-between h-[205px] py-1 select-none text-[11px] font-mono text-neutral-400 shrink-0">
                    <span>0{activeLeft + 1}</span>
                    <div className="relative w-px h-[125px] bg-neutral-300/80">
                      <div
                        className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-neutral-800 transition-all duration-400 ease-out"
                        style={{
                          top: `${(activeLeft / (BRANDING_SERVICES.length - 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span>0{BRANDING_SERVICES.length}</span>
                  </div>

                  {/* Services directly on background (NO CARDS) */}
                  <div className="flex flex-col gap-2.5 select-none">
                    {BRANDING_SERVICES.map((item, i) => {
                      const dist = Math.abs(i - activeLeft);
                      const isActive = dist === 0;
                      const isNear = dist === 1;

                      return (
                        <div
                          key={item}
                          onClick={() => handleSelectLeft(i)}
                          onMouseEnter={() => handleSelectLeft(i)}
                          className="group flex items-center gap-2.5 cursor-pointer py-0.5 transition-all duration-450 ease-out"
                          style={{
                            opacity: isActive ? 1 : isNear ? 0.68 : 0.42,
                            filter: isActive
                              ? "blur(0px)"
                              : isNear
                              ? "blur(0.8px)"
                              : "blur(1.4px)",
                            transform: isActive
                              ? "translateX(2px)"
                              : "translateX(0px)",
                          }}
                        >
                          {/* Bullet dot */}
                          <span
                            className="size-1.5 rounded-full bg-ink transition-opacity duration-300 shrink-0"
                            style={{ opacity: isActive ? 1 : 0 }}
                          />
                          <span
                            className="tracking-[-0.018em] transition-colors duration-300 whitespace-nowrap"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "clamp(1rem, 1.25vw, 1.18rem)",
                              fontWeight: isActive ? 500 : 400,
                              color: isActive ? "#111111" : "#555555",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Subtle Divider */}
              <div className="block lg:hidden my-4 h-px w-full bg-neutral-300/60" />

              {/* ────────────────────────────────────────────────
                  RIGHT SERVICE AREA: 02 Advertising Campaigns
                  ──────────────────────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-6 xl:gap-x-8 gap-y-5 lg:items-center lg:pl-3 xl:pl-6">
                {/* Title (order-1 on mobile, col 1 row 1 on desktop) */}
                <div className="order-1 lg:col-start-1 lg:row-start-1 select-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-mono tracking-widest text-neutral-400 uppercase">
                      02
                    </span>
                    <div className="w-8 h-px bg-neutral-300/80" />
                  </div>
                  <h3
                    className="tw-display font-medium text-ink leading-[1.02] tracking-[-0.035em]"
                    style={{ fontSize: "clamp(2.3rem, 3.4vw, 3.5rem)" }}
                  >
                    Advertising<br />Campaigns
                  </h3>
                </div>

                {/* Horizontal Image Gallery Deck (order-2 on mobile, col 2 row 1-3 on desktop) */}
                <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end py-3 lg:py-0 overflow-visible">
                  <div
                    className="relative w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[420px] h-[340px] sm:h-[375px] xl:h-[415px] flex items-center justify-center select-none will-change-transform"
                    style={{ perspective: "1400px" }}
                  >
                    {/* Card 0: Campaign Strategy (Urban street scene with pedestrian walking) */}
                    <div
                      style={getRightDeckStyle(0)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] overflow-hidden border border-black/[0.06] pointer-events-none select-none"
                    >
                      <img
                        src={assetUrl("/assets/ad-street-blur.jpg")}
                        alt="Outdoor Campaign Street Environment"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Card 1: Product Launch Campaigns */}
                    <div
                      style={getRightDeckStyle(1)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#111114] p-6 flex flex-col justify-between border border-white/[0.08] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7.5px] font-mono tracking-[0.24em] text-white uppercase">LAUNCH</span>
                        <span className="text-[7.5px] font-mono tracking-[0.2em] text-white">02</span>
                      </div>
                      <div className="my-auto py-2">
                        <span className="tw-display text-[22px] sm:text-[25px] font-bold text-white leading-[0.92] tracking-tight block uppercase">
                          Product<br />Launch<br />Worldwide.
                        </span>
                      </div>
                      <div className="opacity-35">
                        <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Go-to-market 2026</span>
                      </div>
                    </div>

                    {/* Card 2: Hoardings (REALISTIC BILLBOARD FROM REFERENCE) */}
                    <div
                      style={getRightDeckStyle(2)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[6px] bg-[#161618] p-2 sm:p-2.5 flex flex-col border-[2.5px] border-[#252528] pointer-events-auto select-none"
                    >
                      {/* Top Rim with 3 Spotlights */}
                      <div className="absolute -top-5 inset-x-0 flex items-center justify-around px-5 pointer-events-none">
                        {[0, 1, 2].map((spot) => (
                          <div key={spot} className="flex flex-col items-center">
                            {/* Spotlight fixture head */}
                            <div className="w-3.5 h-1.5 bg-[#404046] rounded-t-xs shadow-xs" />
                            {/* Bracket arm */}
                            <div className="w-[1.5px] h-3.5 bg-[#4a4a52]" />
                          </div>
                        ))}
                      </div>

                      {/* Billboard Canvas Face */}
                      <div className="relative flex-1 rounded-[4px] bg-[#faf9f6] p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-inner border border-black/[0.06]">
                        {/* Spotlight downlight wash reflection */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-28 pointer-events-none rounded-t-[4px]"
                          style={{
                            background:
                              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
                          }}
                        />

                        {/* Bold Hoarding Typography: Ideas Move People. */}
                        <div className="pt-2 pl-0.5 flex flex-col z-10 select-none">
                          <span
                            className="tw-display font-medium text-[32px] sm:text-[36px] xl:text-[40px] leading-[0.92] tracking-[-0.045em] text-ink"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            Ideas
                          </span>
                          <span
                            className="tw-display font-medium text-[32px] sm:text-[36px] xl:text-[40px] leading-[0.92] tracking-[-0.045em] text-ink"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            Move
                          </span>
                          <span
                            className="tw-display font-medium text-[32px] sm:text-[36px] xl:text-[40px] leading-[0.92] tracking-[-0.045em] text-ink"
                            style={{ fontFamily: "var(--font-display)" }}
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

                    {/* Card 3: Posters & Flyers (BOLD IDEAS BRIGHTER GROW POSTER FROM REFERENCE) */}
                    <div
                      style={getRightDeckStyle(3)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] overflow-hidden bg-[#121214] p-5 flex flex-col justify-between border border-white/10 pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">OOH CAMPAIGN</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-white">04</span>
                      </div>
                      <div className="my-auto py-2 pl-2">
                        <span className="tw-display text-[21px] sm:text-[23px] font-bold text-white/90 leading-[0.92] tracking-tight block uppercase">
                          Bold<br />Ideas<br />Brighter<br />Grow.
                        </span>
                      </div>
                      <div className="opacity-35">
                        <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Twixters Studio</span>
                      </div>
                    </div>

                    {/* Card 4: Digital Display Ads */}
                    <div
                      style={getRightDeckStyle(4)}
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#151518] p-5 flex flex-col justify-between border border-white/10 pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">DIGITAL DISPLAY</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-white">05</span>
                      </div>
                      <div className="my-auto p-3 rounded-[10px] bg-neutral-900 border border-neutral-700/60 shadow-inner flex flex-col justify-center gap-2">
                        <div className="h-1.5 bg-neutral-600 rounded-full w-2/3" />
                        <span className="text-[14px] font-bold text-white tracking-tight uppercase leading-tight">
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
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#fbf9f5] p-5 flex flex-col justify-between border border-black/[0.08] pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-40">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-neutral-800 uppercase">SOCIAL</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-neutral-800">06</span>
                      </div>
                      <div className="my-auto text-center space-y-2">
                        <div className="mx-auto w-12 h-12 rounded-[12px] bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                          9:16
                        </div>
                        <span className="text-[13px] font-semibold text-neutral-900 block tracking-tight">
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
                      className="absolute w-[215px] sm:w-[245px] xl:w-[275px] h-[300px] sm:h-[335px] xl:h-[375px] rounded-[16px] bg-[#0d0d0f] p-5 flex flex-col justify-between border border-white/10 pointer-events-none select-none"
                    >
                      <div className="flex justify-between items-center opacity-35">
                        <span className="text-[7px] font-mono tracking-[0.24em] text-white uppercase">EVENTS</span>
                        <span className="text-[7px] font-mono tracking-[0.2em] text-white">07</span>
                      </div>
                      <div className="my-auto py-2 text-center">
                        <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-400 block mb-1">ANNUAL SUMMIT</span>
                        <span className="tw-display text-[22px] font-black text-white leading-[0.9] tracking-tighter uppercase block">
                          Experience<br />In Motion
                        </span>
                      </div>
                      <div className="text-center opacity-35">
                        <span className="text-[6.5px] font-mono tracking-[0.24em] text-white uppercase">Festival &amp; Stage Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services List (order-3 on mobile, col 1 row 2 on desktop) */}
                <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col gap-2.5 select-none pl-1 sm:pl-2 shrink-0 min-w-0">
                  {ADVERTISING_SERVICES.map((item, i) => {
                    const dist = Math.abs(i - activeRight);
                    const isActive = dist === 0;
                    const isNear = dist === 1;

                    return (
                      <div
                        key={item}
                        onClick={() => handleSelectRight(i)}
                        onMouseEnter={() => handleSelectRight(i)}
                        className="group flex items-center gap-2.5 cursor-pointer py-0.5 transition-all duration-450 ease-out"
                        style={{
                          opacity: isActive ? 1 : isNear ? 0.68 : 0.42,
                          filter: isActive
                            ? "blur(0px)"
                            : isNear
                            ? "blur(0.8px)"
                            : "blur(1.4px)",
                          transform: isActive
                            ? "translateX(2px)"
                            : "translateX(0px)",
                        }}
                      >
                        {/* Bullet dot */}
                        <span
                          className="size-1.5 rounded-full bg-ink transition-opacity duration-300 shrink-0"
                          style={{ opacity: isActive ? 1 : 0 }}
                        />
                        <span
                          className="tracking-[-0.018em] transition-colors duration-300 whitespace-nowrap"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "clamp(1rem, 1.25vw, 1.18rem)",
                            fontWeight: isActive ? 500 : 400,
                            color: isActive ? "#111111" : "#555555",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ─── 3. FOOTER ROW (SCROLL TO EXPLORE) ─── */}
          <div className="relative w-full flex items-center justify-center select-none shrink-0 pb-1">
            {/* Bottom Center: Minimalist Mouse Scroll Indicator */}
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
    </div>
  );
}
