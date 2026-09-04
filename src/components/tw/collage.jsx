import { collage, collageCta } from "../../content/site";
import { Reveal } from "./reveal";

export function Collage() {
  return (
    <section aria-label="Selected work" className="relative px-4 pb-20 sm:px-8 sm:pb-24">
      <Reveal className="relative mx-auto max-w-[1280px]">
        <div className="relative rounded-[28px] bg-[#191919] p-3 sm:rounded-[36px] sm:p-4">
          {/* Desktop / tablet mosaic */}
          <div className="tw-collage hidden gap-3 sm:grid sm:gap-3.5">
            {collage.map((block, i) => (
              <Reveal
                key={block.src + block.area}
                delay={i * 70}
                className="overflow-hidden rounded-[18px] sm:rounded-[22px]"
                style={{ gridArea: block.area }}
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
              </Reveal>
            ))}
          </div>

          {/* Mobile: a snap rail, not an endless vertical stack */}
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

          {/* Floating "See Recent Work" CTA - Single unified two-part composition */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-[53%] z-30">
            <a
              href={collageCta?.href || "#work"}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label={collageCta?.label || "See Recent Work"}
              className="group pointer-events-auto block cursor-pointer select-none transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div className="tw-cta-float relative">
                {/* 1. Black Label Pill */}
                <div className="absolute -top-[28px] -left-[20px] sm:-top-[38px] sm:-left-[26px] md:-top-[44px] md:-left-[32px] z-10 w-[136px] h-[40px] sm:w-[165px] sm:h-[48px] md:w-[196px] md:h-[58px] rounded-full bg-[#0a0a0a] shadow-[0_10px_25px_rgba(0,0,0,0.35)] flex items-center justify-center rotate-[16deg]">
                  <span className="text-white text-[11px] sm:text-[13px] md:text-[15px] font-bold tracking-tight whitespace-nowrap">
                    {collageCta?.label || "See Recent Work"}
                  </span>
                  {/* Downward triangle pointer tail */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-[6px] md:-bottom-[8px] left-[48%] -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] md:border-l-[7px] md:border-r-[7px] md:border-t-[8px] border-l-transparent border-r-transparent border-t-[#0a0a0a]"
                  />
                </div>

                {/* 2. White Circular Button with Phosphor FolderOpen icon */}
                <div className="w-[88px] h-[88px] sm:w-[116px] sm:h-[116px] md:w-[138px] md:h-[138px] rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_16px_36px_rgba(0,0,0,0.22)] flex items-center justify-center">
                  <svg
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-6 sm:size-8 md:size-10 text-black transition-transform duration-300 group-hover:scale-105"
                  >
                    <path d="M240 88h-109.33L102.93 60.27A16.1 16.1 0 0 0 91.64 56H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 15.82-13.68l16-104A16 16 0 0 0 240 88Zm-25.76 112H40V72h51.64l27.73 27.73A16.1 16.1 0 0 0 130.67 104h91.94Z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Reveal>

      <style>{`
        .tw-collage {
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 190px 190px 150px 150px;
          grid-template-areas:
            "a a a b b b"
            "a a a b b b"
            "c c d d f f"
            "e e d d f f";
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .tw-collage { grid-template-rows: 210px 210px 170px 170px; }
        }
        @media (min-width: 1024px) {
          .tw-collage { grid-template-rows: 260px 260px 200px 200px; }
        }
      `}</style>
    </section>
  );
}
