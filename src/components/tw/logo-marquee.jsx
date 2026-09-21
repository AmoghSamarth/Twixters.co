import { assetUrl } from "../../utils/asset";

const LOGO_IDS = Array.from({ length: 20 }, (_, i) => i + 6);

export function LogoMarquee() {
  return (
    <section
      aria-label="Partner and client logos"
      className="relative w-full overflow-hidden py-10 sm:py-14 select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-marquee-left items-center gap-12 sm:gap-16 md:gap-20 hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0">
          {LOGO_IDS.map((num) => (
            <div
              key={`logo-a-${num}`}
              className="flex h-10 sm:h-12 md:h-14 w-28 sm:w-36 md:w-40 items-center justify-center shrink-0"
            >
              <img
                src={assetUrl(`/assets/Logo (${num}).svg`)}
                alt={`Partner logo ${num}`}
                loading="lazy"
                decoding="async"
                className="max-h-8 sm:max-h-10 md:max-h-11 w-auto max-w-full object-contain brightness-0 opacity-40 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for infinite seamless loop) */}
        <div
          className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0"
          aria-hidden="true"
        >
          {LOGO_IDS.map((num) => (
            <div
              key={`logo-b-${num}`}
              className="flex h-10 sm:h-12 md:h-14 w-28 sm:w-36 md:w-40 items-center justify-center shrink-0"
            >
              <img
                src={assetUrl(`/assets/Logo (${num}).svg`)}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-8 sm:max-h-10 md:max-h-11 w-auto max-w-full object-contain brightness-0 opacity-40 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-drift-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-left {
          animation: marquee-drift-left 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
