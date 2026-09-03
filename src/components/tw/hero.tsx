import { useEffect, useState } from "react";
import { hero } from "../../content/site";
import { InkPill, StatusPill } from "./primitives";
import { Reveal } from "./reveal";

/**
 * Authentic calligraphic SVG watermark extracted directly from the reference.
 * Perfectly vectors the "Twixters" signature at all viewport scales.
 */
function TwixtersWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 328.12 107.85"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path d="M58.54,93.12c-.78.02-1.47,1.03-1.41,2.86.11,3.93-3.06,7.5-6.84,7.61-3.99.11-6.38-3.75-6.57-10.44-.61-21.29,21.16-65.26,35.02-79.03.62-.61.76-.81.83-1.01,5.47-.75,10.44-1.22,14.36-1.33,10.89-.31,17.51,1.86,17.65,6.51.04,1.24.48,1.76,1.19,1.74,2.92.05,7.1-8.53,6.98-12.46-.15-5.31-8.21-7.9-20.81-7.54-6.91.2-15.93,1.31-25.63,3.29-1.82-1.39-3.56-2.32-4.84-2.29-1.64.05-3.87,1.82-6.35,4.84C31.89,13.55-.6,28.71,0,49.94c.25,8.65,5.83,14.39,13.66,14.17,2.99-.09,4.46-.98,4.44-1.83-.02-.72-1.11-1.35-3.17-1.29-4.84.14-8.01-3.31-8.17-8.95-.44-15.53,22.89-26.88,46.86-33.47-11.4,19.93-23.81,52.02-23.31,69.58.32,11.27,6.06,20.02,17.95,19.68,8.33-.24,12.48-4.82,12.31-10.58-.08-2.82-1.12-4.16-2.04-4.14Z"/>
          <path d="M128.42,30.63c2.25,0,2.38-.53,2.38-1.32,0-4.29,4.29-13.67,6.67-13.67.53,0,.99-.53.99-.99,0-2.05-7.07-6.47-9.58-6.47-3.63,0-9.58,9.51-9.58,15,0,4.29,3.77,7.46,9.12,7.46Z"/>
          <path d="M165.21,46.54c-.92,0-1.89,1.21-2.59,3.03-1.24,3.29-15.83,36.75-16.58,36.75-1.35,0-3.67-11.27-5.29-22.45,7.72-11.61,15.29-21.15,17.39-21.15.54,0,1.19.61,1.84.61.49,0,.54-.26.54-.69,0-2.95-2.21-6.5-3.78-6.5-2.38,0-9.51,8.41-17.12,19.24-.37-3.25-.62-6.24-.71-8.63,1.49-2.46,2.43-4.24,2.47-4.82.06-.56-.5-1.07-1.2-1.21.02-.08.03-.16.03-.24,0-1.82-5.19-4.33-8.59-4.33-1.62,0-3.49.56-4.38,2.24-1.15-2.53-6.89-5.86-10.33-6.09-1.03-.74-2.12-1.3-2.97-1.3-5.45,0-22.33,24.07-26.88,36.38,1.32-8,4.79-20.83,6.34-20.83.24,0,.54-.34.54-.68,0-1.76-5.69-4.82-9.22-4.82-2.15,0-13.29,14.98-17.24,25.31,1.74-8.97,5.81-23.33,7.96-23.33.3,0,.54-.28.54-.62,0-1.76-7.12-4.82-10.71-4.82-2.04,0-9.88,23.5-9.88,29.8,0,3.29,8.02,8.29,12.69,8.29,1.14,0,1.2-.28,1.2-.79,0-4.14,4.19-12.54,8.56-19.47-1.5,4.48-2.63,9.19-2.63,11.92,0,3.01,8.86,8.34,13.83,8.34,1.26,0,1.68-.34,1.68-1.36,0-5.69,12.96-26.66,21.43-34.98-4.26,9.59-9.6,25.97-9.6,29.42,0,4.1,7.27,7.93,14.14,7.93,1.09,0,6.37-6.75,11.77-14.31.31,3.09.63,6.14.96,8.88-7.02,11.7-12.53,23.23-12.53,28.77,0,2.51,1.13,3.99,2.65,3.99.97,0,1.51-.61,1.51-2.08,0-3.9,4.11-12.48,9.62-22.01.05.43.11.78.22,1.04,1.73,6.93,8.91,13.35,15.45,13.35,1.94,0,20.04-42.29,20.2-46.11.05-.87-.59-1.65-1.3-1.65ZM116.33,70.59c-.13,0-.2-.4-.2-.73,0-3.22,8.02-29.32,10.59-29.65-.01.17-.03.34-.03.52,0,1.46.45,7.68,1.1,14.86-5.25,7.31-10.95,15.01-11.46,15.01Z"/>
          <path d="M328.12,24.79c0-10.14-4.05-17.08-9.91-17.08-2.34,0-3.3,1.09-3.3,2.11s.91,1.64,2.29,1.64c3.46,0,5.91,3.9,5.91,8.97,0,10.53-10.23,24.57-27.23,37.06-1.76-3.9-3.04-7.33-3.04-9.36,0-4.99,8.26-15.68,11.67-15.68,1.07,0,2.24,1.09,2.24,2.42,0,.78.37,1.33.8,1.33.59,0,1.28-.86,1.28-3.2,0-6.79-6.02-12.4-9.64-12.4-5.75,0-16.15,14.2-16.15,22.55,0,1.92.56,4.18,1.43,6.57-3.2,3.14-7.33,6.94-7.86,6.94-.11,0-.17-.17-.17-.62,0-3.24,2.78-9.82,4.77-9.82.62,0,1.19-.68,1.19-1.36,0-2.55-8.06-6.24-9.99-6.24-3.24,0-12.03,11.07-17.99,21,2.89-7.78,6.64-15.55,7.78-15.55.17,0,.4-.28.4-.62,0-2.1-7.49-4.82-10.1-4.82-1.23,0-3.67,4.85-6.07,10.73-5.02,7.43-14.71,20.01-21.17,20.01-2.55,0-4.14-1.99-4.14-5.28,0-7.83,8.85-18.62,15.04-19.3-1.02,6.98-8.29,11.81-11.98,11.81-.74,0-1.14.17-1.14.4,0,.74,3.35,2.38,5.62,2.38,4.43,0,13.11-6.58,13.11-14.42,0-4.6-5.79-8.91-10.84-8.91-5.84,0-12.57,5.75-16.64,12.58-1.85-5.08-5.49-8.22-10.55-8.22-2.68,0-3.89.89-3.89,1.72,0,.64.89,1.34,2.61,1.34,4.46,0,7.27,4.65,7.27,8.86,0,10.46-17.02,29.78-27.99,29.78-2.87,0-4.97-1.28-4.97-5.16,0-5.04,7.59-25.5,13.96-39.28,2.1.19,4.27.25,6.38.25,16.83,0,27.48-5.1,27.48-13.07,0-2.17-.76-3.57-1.98-3.57-1.02,0-1.72,1.08-1.72,2.68,0,5.23-7.78,8.93-19.13,8.93-2.93,0-5.74-.25-8.35-.64,2.3-4.59,4.27-7.59,5.23-7.59.45,0,1.15-.7,1.15-1.34,0-2.23-9.56-6.18-11.09-6.18-1.72,0-4.78,4.78-8.1,11.6-3.89-1.47-7.52-3.12-10.97-4.72-7.14-3.38-13.52-6.31-19.83-6.31-10.9,0-16.83,8.86-16.83,13.07,0,1.28.57,2.1,1.72,2.1,2.81,0-.06-4.97,7.08-4.97,4.08,0,9.88,1.47,16.2,3.25,6.25,1.79,12.56,3.44,19.32,4.72-6.5,14.67-13.01,33.35-13.01,37.75,0,8.86,7.91,13.9,19.45,13.9,14.12,0,25.3-7.51,29.8-18.78,2.52,3.34,6.33,5.45,10.03,5.45,6.25,0,12.97-5.98,18.39-12.41-1.13,3.6-1.88,6.51-1.88,7.66,0,3.86,8.17,7.26,10.27,7.26.62,0,1.02-.28,1.02-1.19,0-3.86,7.49-16.8,14.93-26.22-.62,1.7-.96,3.52-.96,5.16,0,2.38,7.09,6.19,11.58,6.19,1.14,0,5.33-3.67,9-7.44,1.28,2.86,2.81,5.74,4.18,8.29-6.18,3.98-13.48,9.36-13.48,14.28,0,7.1,5.86,12.64,9.38,12.64,4.37,0,14.23-8.82,14.23-16.69,0-2.26-.8-5.15-1.92-8.11,18.28-6.48,29.84-21.53,29.84-38.77ZM281.23,78.15c-1.07,0-1.81-.7-1.81-1.95,0-3.04,5.12-7.1,12.15-10.22.05.39.05.62.05.94,0,4.99-7.3,11.23-10.39,11.23Z"/>
        </g>
      </g>
    </svg>
  );
}

/**
 * Animated Slideshow Chip — seamlessly cross-fades between visual objects on a loop,
 * exactly reproducing the Framer slideshow component.
 */
function AnimatedHeroChip({
  slides,
  tone,
  delay,
}: {
  slides: { src: string; alt: string }[];
  tone: "light" | "dark";
  delay: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Reveal
      as="span"
      delay={delay}
      className={`relative mx-[0.16em] inline-block h-[0.77em] w-[1.18em] translate-y-[-0.03em] overflow-hidden rounded-[0.22em] align-middle shadow-[0_10px_25px_rgba(0,0,0,0.15)] ring-1 ring-black/10 ${
        tone === "dark" ? "bg-[#141414] ring-white/15" : "bg-white"
      }`}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading="eager"
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        />
      ))}
    </Reveal>
  );
}

export function Hero() {
  // Slides for Chip A (Light / Brand identity collateral thumbnails)
  const chipASlides = [
    { src: "/assets/work-1.jpg", alt: "The Saath branding collateral" },
    { src: "/assets/chip-collage.jpg", alt: "Branding collateral moodboard" },
    { src: "/assets/work-2.jpg", alt: "Gamla organic brand design" },
    { src: "/assets/work-5.jpg", alt: "Twixters packaging collateral" },
  ];

  // Slides for Chip B (Dark / Monogram marks & logos)
  const chipBSlides = [
    { src: "/assets/chip-mark.jpg", alt: "Twixters monogram mark" },
    { src: "/assets/work-3.jpg", alt: "Cognito Bite brand identity" },
    { src: "/assets/work-4.jpg", alt: "The Biryani Story mark" },
  ];

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-[160px] pb-24 sm:px-8 sm:pt-[300px] sm:pb-32">
      {/* Subtle ambient light beam streak matching live reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[650px] w-[950px] rotate-[-22deg] bg-gradient-to-r from-white/40 via-white/15 to-transparent blur-3xl"
      />

      {/* Script wordmark watermark — exactly matching reference size, top offset, and relationship to H1 */}
      <TwixtersWatermark className="pointer-events-none absolute top-[60px] left-1/2 w-[clamp(380px,54vw,760px)] -translate-x-1/2 text-ink/[0.06] select-none sm:top-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* H1 Headline with integrated animated slideshow chips */}
        <h1 className="tw-display mx-auto max-w-[1040px] text-center text-[clamp(2.35rem,6.4vw,6rem)] leading-[1.12] tracking-[-0.04em]">
          <Reveal as="span" className="block" delay={0}>
            <span className="font-bold text-ink">{hero.lineOneBefore}</span>
            <AnimatedHeroChip slides={chipASlides} tone="light" delay={420} />
            <span className="font-light text-ink-muted">{hero.lineOneAfter}</span>
          </Reveal>
          <Reveal as="span" className="block whitespace-nowrap sm:whitespace-nowrap" delay={110}>
            <span className="font-light text-ink-muted">{hero.lineTwoBefore}</span>
            <AnimatedHeroChip slides={chipBSlides} tone="dark" delay={520} />
            <span className="font-bold text-ink">{hero.lineTwoAfter}</span>
          </Reveal>
        </h1>

        {/* Supporting Copy */}
        <Reveal delay={200} className="mx-auto mt-6 max-w-[540px] px-4 sm:mt-7">
          <p className="text-center text-[15px] leading-[1.5] text-ink-muted sm:text-[16px]">
            {hero.sub}
          </p>
        </Reveal>

        {/* CTA & Trusted by group */}
        <Reveal
          delay={280}
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-6"
        >
          {/* Obsidian CTA pill with white capsule outer frame */}
          <div className="rounded-full p-1 bg-surface/90 shadow-[0_6px_20px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
            <InkPill href={hero.cta.href} className="min-h-[46px] px-7 py-3 text-[15px] sm:text-[16px]">
              {hero.cta.label}
            </InkPill>
          </div>

          {/* Real avatar stack + Trusted by Leaders */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <ul className="flex items-center pl-2.5">
              {hero.avatars.map((a) => (
                <li key={a.src} className="-ml-2.5">
                  <img
                    src={a.src}
                    alt={a.alt}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="size-9 rounded-full border-2 border-surface object-cover shadow-xs"
                  />
                </li>
              ))}
            </ul>
            <p className="text-[12px] font-medium tracking-tight text-ink-muted">{hero.trustLabel}</p>
          </div>
        </Reveal>

        {/* Booking Open status pill with pulsing green dot */}
        <Reveal delay={340} className="mt-6 flex justify-center sm:mt-8">
          <StatusPill className="px-5 py-2.5 text-[13.5px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
            {hero.availability}
          </StatusPill>
        </Reveal>
      </div>
    </section>
  );
}
