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
      viewBox="0 0 40 14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <path d="M 7.137 11.292 C 7.042 11.294 6.958 11.417 6.965 11.639 C 6.978 12.115 6.592 12.548 6.131 12.562 C 5.645 12.575 5.353 12.107 5.33 11.296 C 5.256 8.714 7.91 3.382 9.599 1.713 C 9.675 1.639 9.692 1.614 9.7 1.59 C 10.367 1.499 10.973 1.442 11.451 1.429 C 12.778 1.391 13.585 1.654 13.602 2.218 C 13.607 2.369 13.661 2.432 13.747 2.429 C 14.103 2.435 14.613 1.395 14.598 0.918 C 14.58 0.274 13.597 -0.04 12.061 0.004 C 11.219 0.028 10.12 0.163 8.937 0.403 C 8.715 0.234 8.503 0.122 8.347 0.125 C 8.147 0.131 7.875 0.346 7.573 0.712 C 3.888 1.643 -0.072 3.482 0.001 6.056 C 0.031 7.105 0.712 7.801 1.666 7.774 C 2.031 7.763 2.21 7.655 2.207 7.552 C 2.205 7.465 2.072 7.389 1.821 7.396 C 1.231 7.413 0.845 6.995 0.825 6.311 C 0.771 4.428 3.615 3.051 6.537 2.252 C 5.147 4.669 3.635 8.56 3.696 10.689 C 3.735 12.056 4.434 13.117 5.884 13.076 C 6.899 13.047 7.405 12.491 7.384 11.793 C 7.374 11.451 7.248 11.288 7.136 11.291 Z M 15.655 3.715 C 15.929 3.715 15.945 3.65 15.945 3.554 C 15.945 3.034 16.468 1.897 16.758 1.897 C 16.823 1.897 16.879 1.833 16.879 1.777 C 16.879 1.528 16.017 0.992 15.711 0.992 C 15.268 0.992 14.543 2.145 14.543 2.811 C 14.543 3.331 15.003 3.716 15.655 3.716 Z" />
        <path d="M 13.387 1.884 C 13.274 1.884 13.156 2.031 13.071 2.252 C 12.92 2.651 11.141 6.708 11.05 6.708 C 10.885 6.708 10.603 5.341 10.405 3.986 C 11.346 2.578 12.269 1.421 12.525 1.421 C 12.591 1.421 12.67 1.495 12.749 1.495 C 12.809 1.495 12.815 1.464 12.815 1.411 C 12.815 1.054 12.546 0.623 12.354 0.623 C 12.064 0.623 11.195 1.643 10.267 2.956 C 10.222 2.562 10.192 2.2 10.181 1.91 C 10.362 1.612 10.477 1.396 10.482 1.325 C 10.489 1.257 10.421 1.196 10.336 1.179 C 10.338 1.169 10.339 1.159 10.339 1.15 C 10.339 0.929 9.707 0.624 9.292 0.624 C 9.095 0.624 8.867 0.692 8.758 0.896 C 8.618 0.589 7.918 0.186 7.499 0.158 C 7.373 0.068 7.241 0 7.137 0 C 6.473 0 4.415 2.919 3.86 4.411 C 4.021 3.441 4.444 1.886 4.633 1.886 C 4.663 1.886 4.699 1.844 4.699 1.803 C 4.699 1.59 4.006 1.219 3.575 1.219 C 3.313 1.219 1.955 3.035 1.474 4.288 C 1.686 3.2 2.182 1.459 2.444 1.459 C 2.481 1.459 2.51 1.425 2.51 1.384 C 2.51 1.17 1.642 0.799 1.204 0.799 C 0.956 0.799 0 3.649 0 4.413 C 0 4.812 0.978 5.418 1.547 5.418 C 1.686 5.418 1.693 5.384 1.693 5.322 C 1.693 4.82 2.204 3.801 2.737 2.961 C 2.554 3.504 2.416 4.076 2.416 4.407 C 2.416 4.772 3.496 5.418 4.102 5.418 C 4.255 5.418 4.307 5.377 4.307 5.253 C 4.307 4.563 5.886 2.02 6.919 1.011 C 6.4 2.174 5.749 4.16 5.749 4.579 C 5.749 5.076 6.635 5.54 7.472 5.54 C 7.605 5.54 8.249 4.722 8.907 3.805 C 8.945 4.18 8.984 4.55 9.024 4.882 C 8.168 6.301 7.497 7.699 7.497 8.371 C 7.497 8.675 7.634 8.854 7.82 8.854 C 7.938 8.854 8.004 8.78 8.004 8.602 C 8.004 8.129 8.505 7.089 9.176 5.933 C 9.182 5.985 9.19 6.028 9.203 6.059 C 9.414 6.9 10.289 7.678 11.086 7.678 C 11.323 7.678 13.529 2.55 13.549 2.087 C 13.555 1.981 13.477 1.887 13.39 1.887 Z M 7.428 4.801 C 7.413 4.801 7.404 4.752 7.404 4.712 C 7.404 4.322 8.382 1.157 8.695 1.117 C 8.694 1.137 8.691 1.158 8.691 1.18 C 8.691 1.357 8.746 2.111 8.825 2.982 C 8.185 3.868 7.491 4.802 7.428 4.802 Z" />
        <path d="M 39.998 3.006 C 39.998 1.777 39.504 0.935 38.79 0.935 C 38.504 0.935 38.387 1.067 38.387 1.191 C 38.387 1.315 38.498 1.39 38.666 1.39 C 39.088 1.39 39.387 1.863 39.387 2.478 C 39.387 3.755 38.14 5.457 36.068 6.972 C 35.853 6.499 35.697 6.083 35.697 5.837 C 35.697 5.231 36.704 3.935 37.12 3.935 C 37.25 3.935 37.393 4.067 37.393 4.229 C 37.393 4.323 37.438 4.39 37.49 4.39 C 37.562 4.39 37.646 4.286 37.646 4.002 C 37.646 3.179 36.912 2.498 36.471 2.498 C 35.77 2.498 34.502 4.22 34.502 5.233 C 34.502 5.466 34.571 5.74 34.677 6.029 C 34.287 6.41 33.783 6.871 33.719 6.871 C 33.705 6.871 33.698 6.85 33.698 6.796 C 33.698 6.403 34.037 5.605 34.279 5.605 C 34.355 5.605 34.424 5.523 34.424 5.44 C 34.424 5.131 33.442 4.683 33.207 4.683 C 32.812 4.683 31.74 6.026 31.014 7.23 C 31.366 6.286 31.823 5.344 31.962 5.344 C 31.983 5.344 32.011 5.31 32.011 5.269 C 32.011 5.014 31.098 4.685 30.78 4.685 C 30.63 4.685 30.332 5.273 30.04 5.986 C 29.428 6.887 28.247 8.412 27.459 8.412 C 27.148 8.412 26.955 8.171 26.955 7.772 C 26.955 6.822 28.033 5.514 28.788 5.432 C 28.664 6.278 27.777 6.864 27.328 6.864 C 27.237 6.864 27.189 6.884 27.189 6.912 C 27.189 7.002 27.597 7.201 27.874 7.201 C 28.414 7.201 29.472 6.403 29.472 5.452 C 29.472 4.894 28.766 4.372 28.15 4.372 C 27.439 4.372 26.618 5.069 26.122 5.897 C 25.897 5.281 25.453 4.9 24.836 4.9 C 24.509 4.9 24.362 5.008 24.362 5.109 C 24.362 5.187 24.47 5.272 24.68 5.272 C 25.224 5.272 25.566 5.835 25.566 6.346 C 25.566 7.614 23.492 9.957 22.154 9.957 C 21.805 9.957 21.549 9.802 21.549 9.331 C 21.549 8.72 22.474 6.239 23.25 4.568 C 23.506 4.591 23.771 4.599 24.028 4.599 C 26.079 4.599 27.378 3.98 27.378 3.014 C 27.378 2.751 27.285 2.581 27.136 2.581 C 27.012 2.581 26.927 2.712 26.927 2.906 C 26.927 3.54 25.978 3.989 24.595 3.989 C 24.254 3.988 23.914 3.962 23.577 3.911 C 23.857 3.354 24.097 2.991 24.214 2.991 C 24.269 2.991 24.355 2.906 24.355 2.828 C 24.355 2.558 23.189 2.079 23.003 2.079 C 22.793 2.079 22.42 2.658 22.015 3.485 C 21.541 3.307 21.099 3.107 20.678 2.913 C 19.808 2.503 19.03 2.148 18.261 2.148 C 16.932 2.148 16.21 3.222 16.21 3.733 C 16.21 3.888 16.279 3.987 16.419 3.987 C 16.762 3.987 16.412 3.385 17.282 3.385 C 17.78 3.385 18.487 3.563 19.257 3.779 C 20.019 3.996 20.788 4.196 21.612 4.351 C 20.82 6.13 20.026 8.395 20.026 8.929 C 20.026 10.003 20.99 10.614 22.397 10.614 C 24.118 10.614 25.481 9.704 26.029 8.337 C 26.337 8.742 26.801 8.998 27.252 8.998 C 28.014 8.998 28.833 8.273 29.494 7.493 C 29.356 7.93 29.265 8.282 29.265 8.422 C 29.265 8.89 30.26 9.302 30.516 9.302 C 30.592 9.302 30.641 9.268 30.641 9.158 C 30.641 8.69 31.554 7.121 32.461 5.978 C 32.385 6.185 32.344 6.405 32.344 6.604 C 32.344 6.893 33.208 7.355 33.755 7.355 C 33.894 7.355 34.405 6.91 34.852 6.453 C 35.008 6.799 35.195 7.149 35.362 7.458 C 34.609 7.94 33.719 8.593 33.719 9.189 C 33.719 10.05 34.433 10.722 34.862 10.722 C 35.395 10.722 36.597 9.653 36.597 8.698 C 36.597 8.424 36.499 8.074 36.363 7.715 C 38.591 6.929 40 5.104 40 3.014 Z M 34.282 9.477 C 34.151 9.477 34.061 9.392 34.061 9.24 C 34.061 8.872 34.685 8.379 35.542 8.001 C 35.548 8.048 35.548 8.076 35.548 8.115 C 35.548 8.72 34.659 9.477 34.282 9.477 Z" />
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
    <section id="top" className="relative overflow-hidden px-5 pt-[180px] pb-24 sm:px-8 sm:pt-[340px] sm:pb-36">
      {/* Subtle ambient light beam streak matching live reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[650px] w-[950px] rotate-[-22deg] bg-gradient-to-r from-white/40 via-white/15 to-transparent blur-3xl"
      />

      {/* Script wordmark watermark — high in the background with a wide empty quiet zone before H1 */}
      <TwixtersWatermark className="pointer-events-none absolute top-[20px] left-1/2 w-[clamp(260px,38vw,560px)] -translate-x-1/2 text-ink/[0.04] select-none sm:top-[30px]" />

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
