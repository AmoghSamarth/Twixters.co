import { collage, collageCta } from "../../content/site";
import { ArrowUpRight } from "./primitives";
import { Reveal } from "./reveal";
export function Collage() {
  return <section aria-label="Selected work" className="relative px-4 pb-20 sm:px-8 sm:pb-24">
      <Reveal className="relative mx-auto max-w-[1280px]">
        <div className="rounded-[28px] bg-[#191919] p-3 sm:rounded-[36px] sm:p-4">
          {
    /* Desktop / tablet mosaic */
  }
          <div className="tw-collage hidden gap-3 sm:grid sm:gap-3.5">
            {collage.map((block, i) => <Reveal
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
              </Reveal>)}
          </div>

          {
    /* Mobile: a snap rail, not an endless vertical stack */
  }
          <ul className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 sm:hidden">
            {collage.map((block) => <li
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
              </li>)}
          </ul>
        </div>

        {
    /* Circular affordance overlapping the shell's bottom edge */
  }
        <a
    href={collageCta.href}
    className="group absolute -bottom-7 left-1/2 flex size-16 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-surface text-ink shadow-lift transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105"
  >
          <span className="sr-only">{collageCta.label}</span>
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
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
    </section>;
}
