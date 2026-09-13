import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";
import { offPageContent } from "../../content/site";

const { groups } = offPageContent.whatWeDo;

/* ─── 3D Drum Wheel with variable speed, deceleration & blur depth-of-field ─── */
function DrumWheel({ items, phaseOffset = 0, initialRot = 0 }) {
  const rotRef = useRef(initialRot);
  const velRef = useRef(16);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const phaseRef = useRef(0); // 0: cruise, 1: burst, 2: decel
  const phaseStartRef = useRef(null);
  const phaseDurRef = useRef(4000 + phaseOffset);
  const isHoveredRef = useRef(false);
  const [rot, setRot] = useState(initialRot);

  const N = items.length;
  const ANGLE_STEP = 360 / N;
  const WHEEL_RADIUS = 135; // px — virtual drum radius

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tick = (now) => {
      if (lastRef.current === null) {
        lastRef.current = now;
        phaseStartRef.current = now;
      }
      const dt = Math.min((now - lastRef.current) / 1000, 0.1);
      lastRef.current = now;

      const elapsed = now - phaseStartRef.current;
      if (elapsed >= phaseDurRef.current) {
        const nextPhase = (phaseRef.current + 1) % 3;
        phaseRef.current = nextPhase;
        phaseStartRef.current = now;

        if (nextPhase === 0) {
          // Slow cruise: 3.6s – 5.4s
          phaseDurRef.current = 3600 + Math.random() * 1800;
        } else if (nextPhase === 1) {
          // Fast burst: 0.9s – 1.3s
          phaseDurRef.current = 900 + Math.random() * 400;
        } else {
          // Deceleration: 3.2s – 4.5s
          phaseDurRef.current = 3200 + Math.random() * 1300;
        }
      }

      let targetVel = 16;
      let ease = 0.02;
      if (isHoveredRef.current) {
        targetVel = 0;
        ease = 0.08;
      } else if (phaseRef.current === 1) {
        targetVel = 320 + Math.random() * 60;
        ease = 0.12;
      } else if (phaseRef.current === 2) {
        targetVel = 16;
        ease = 0.022;
      } else {
        targetVel = 16;
        ease = 0.03;
      }

      velRef.current += (targetVel - velRef.current) * ease;
      rotRef.current += velRef.current * dt;
      setRot(rotRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [N, phaseOffset]);

  return (
    <div
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      className="relative overflow-hidden cursor-default select-none w-full"
      style={{
        height: "220px",
        perspective: "800px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
      }}
    >
      {items.map((item, i) => {
        const raw = (i * ANGLE_STEP - (rot % 360) + 3600) % 360;
        const signed = raw > 180 ? raw - 360 : raw;
        const dist = Math.abs(signed) / ANGLE_STEP;

        // Cull items more than ~1.4 items away so only 1 sharp + 1 blurred above/below are visible
        if (dist > 1.4) return null;

        const rad = (signed * Math.PI) / 180;
        const yOff = Math.sin(rad) * WHEEL_RADIUS;
        const sc = Math.cos(rad);

        // Compute progressive Gaussian blur and opacity
        let blurPx = 0;
        let opacity = 1;
        const isActive = dist < 0.3;

        if (dist <= 0.22) {
          blurPx = 0;
          opacity = 1;
        } else if (dist <= 1.0) {
          const t = (dist - 0.22) / 0.78;
          blurPx = t * 4.5;
          opacity = 1 - t * 0.65;
        } else {
          const t2 = Math.min((dist - 1.0) / 0.4, 1);
          blurPx = 4.5 + t2 * 3.5;
          opacity = Math.max(0, 0.35 - t2 * 0.35);
        }

        return (
          <div
            key={item}
            aria-hidden={isActive ? undefined : "true"}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              transform: `translateY(calc(-50% + ${yOff.toFixed(2)}px)) rotateX(${(-signed * 0.55).toFixed(1)}deg) scaleY(${sc.toFixed(4)})`,
              transformOrigin: "left center",
              opacity: Number(opacity.toFixed(3)),
              filter: `blur(${blurPx.toFixed(1)}px)`,
              WebkitFilter: `blur(${blurPx.toFixed(1)}px)`,
              willChange: "transform, opacity, filter",
              pointerEvents: "none",
            }}
          >
            <div className="whitespace-nowrap">
              <span
                className="tracking-[-0.015em] select-none"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.15rem, 1.6vw, 1.55rem)",
                  fontWeight: 400,
                  color: isActive ? "#111111" : "#555555",
                  transition: "color 0.25s ease",
                }}
              >
                {item}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-label="What we design"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Eyebrow */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="tw-hair flex-1 max-w-[90px]" />
        <span className="tw-eyebrow text-[20px] sm:text-[23px] text-neutral-600 tracking-[0.02em] select-none">
          What we design
        </span>
        <div className="tw-hair flex-1 max-w-[90px]" />
      </Reveal>

      {/* Two-group drum wheel layout */}
      <Reveal className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 items-center">
          {groups.map((group, gi) => {
            const words = group.title.split(" ");
            const firstWord = words[0];
            const restWords = words.slice(1).join(" ");

            return (
              <div
                key={group.title}
                className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-7 xl:gap-10"
              >
                {/* Group Title */}
                <div className="w-full sm:w-[150px] lg:w-[165px] xl:w-[195px] shrink-0">
                  <span className="text-[12px] font-mono tracking-widest text-neutral-400 uppercase mb-2 block select-none">
                    0{gi + 1}
                  </span>
                  <h2
                    className="tw-display font-medium leading-[1.08] tracking-[-0.035em] text-ink"
                    style={{ fontSize: "clamp(1.9rem, 2.7vw, 3.1rem)" }}
                  >
                    {firstWord}
                    <br />
                    {restWords}
                  </h2>
                </div>


                {/* Drum Wheel */}
                <div className="flex-1 w-full min-w-0 overflow-hidden">
                  <DrumWheel
                    items={group.items}
                    phaseOffset={gi * 2400}
                    initialRot={gi * 55}
                  />
                </div>

                {/* Column divider between Group 1 & Group 2 (Desktop only, positioned right) */}
                {gi === 0 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute -right-6 xl:-right-8 top-1/2 -translate-y-1/2 h-[180px] w-px bg-hair"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
