import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const expertiseItems = [
  "brand identities",
  "visual concepts",
  "packaging design",
  "design systems",
  "ad campaigns",
  "social creatives",
  "logo marks",
  "brand strategy",
  "typography systems",
  "digital assets",
];

const N = expertiseItems.length;           // 10
const ANGLE_STEP = 360 / N;               // 36deg per item
const WHEEL_RADIUS = 210;                 // px — virtual drum radius

// [duration_ms, target_velocity_deg_per_s, lerp_factor]
const PHASES = [
  [4200,  16, 0.016],  // slow cruise
  [1100, 360, 0.11 ],  // fast burst
  [3800,  16, 0.016],  // decelerate
];

export function Expertise() {
  const rotRef        = useRef(0);
  const velRef        = useRef(16);
  const rafRef        = useRef(null);
  const lastRef       = useRef(null);
  const phaseRef      = useRef(0);
  const phaseStartRef = useRef(null);
  const [rot, setRot] = useState(0);

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
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;

      const [pDur] = PHASES[phaseRef.current];
      if (now - phaseStartRef.current >= pDur) {
        phaseRef.current = (phaseRef.current + 1) % PHASES.length;
        phaseStartRef.current = now;
      }

      const [, targetVel, ease] = PHASES[phaseRef.current];
      velRef.current += (targetVel - velRef.current) * ease;
      rotRef.current += velRef.current * dt;
      setRot(rotRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section
      id="expertise"
      aria-label="Our Expertise"
      className="relative overflow-hidden px-4 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-36 xl:px-[96px] 2xl:px-[112px]"
    >
      {/* Eyebrow */}
      <Reveal className="mb-16 flex items-center justify-center gap-5 sm:mb-20 lg:mb-24">
        <div className="tw-hair flex-1 max-w-[90px]" />
        <span className="tw-eyebrow text-[20px] sm:text-[23px] text-neutral-600 tracking-[0.02em] select-none">
          Our Expertise
        </span>
        <div className="tw-hair flex-1 max-w-[90px]" />
      </Reveal>

      {/* Main layout */}
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-0">

          {/* Left: "We design" */}
          <div className="sm:flex-1">
            <h2
              className="tw-display whitespace-nowrap text-left font-semibold leading-[1.0] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              We<br />design
            </h2>
          </div>

          {/* Vertical hairline divider */}
          <div
            aria-hidden="true"
            className="hidden sm:block h-[340px] w-px shrink-0 self-center bg-hair mx-12 lg:mx-20"
          />

          {/* Right: 3-D drum / wheel */}
          <div className="sm:flex-1 w-full">
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(280px, 36vh, 420px)",
                /* Mask-image fades items at top & bottom — works on any bg */
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
              }}
            >
              {expertiseItems.map((item, i) => {
                const raw    = (i * ANGLE_STEP - rot % 360 + 3600) % 360;
                const signed = raw > 180 ? raw - 360 : raw;
                if (Math.abs(signed) > 84) return null;

                const rad     = (signed * Math.PI) / 180;
                const yOff    = Math.sin(rad) * WHEEL_RADIUS;
                const sc      = Math.cos(rad);
                const opacity = Math.max(0, Math.pow(Math.cos(rad), 0.55));
                const isActive = Math.abs(signed) < 18;

                return (
                  <div
                    key={item}
                    aria-hidden={isActive ? undefined : "true"}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "50%",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      color: isActive ? "#111111" : "#5a5a5a",
                      opacity,
                      transform:
                        `translateY(calc(-50% + ${yOff.toFixed(2)}px)) scaleY(${sc.toFixed(4)})`,
                      transformOrigin: "left center",
                      willChange: "transform, opacity",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
