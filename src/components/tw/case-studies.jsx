import { useState } from "react";
import { caseStudies } from "../../content/site";
import { ArrowUpRight, Eyebrow, TagPill } from "./primitives";
import { Reveal } from "./reveal";

export function CaseStudies() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="work" aria-labelledby="work-heading" className="case-studies-section px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>Our Projects</Eyebrow>
        <h2 id="work-heading" className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]">
          Recent Case Studies
        </h2>
      </Reveal>

      <ul
        data-hovered={hoveredIdx !== null ? hoveredIdx : undefined}
        className="case-studies-grid mx-auto mt-14 grid max-w-[1200px] gap-8 sm:mt-16 md:grid-cols-2 md:gap-10"
      >
        {caseStudies.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 90} className="case-study-li relative hover:z-30">
            <div className="case-study-card-shift">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative block focus-visible:outline-none"
              >
                <div className="relative overflow-hidden rounded-[28px] bg-[#cfcfcf] shadow-float transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1.5 group-hover:shadow-lift sm:rounded-[36px]">
                  <img
                    src={project.src}
                    alt={project.alt}
                    width={1024}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Expanding portrait preview consuming the entire box */}
                {project.expandSrc && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 w-full z-30 opacity-0 scale-[0.99] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100"
                  >
                    <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-[0_28px_65px_rgba(0,0,0,0.32)]">
                      <img
                        src={project.expandSrc}
                        alt={`${project.title} expanded preview`}
                        width={1133}
                        height={1629}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="case-study-meta relative mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
                  <p className="flex items-center gap-2 text-[16px] font-medium tracking-tight text-ink-muted">
                    {project.title}
                    <ArrowUpRight className="size-4 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <span className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </span>
                </div>
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <style>{`
        .case-study-li {
          container-type: inline-size;
        }

        .case-study-card-shift {
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .case-study-meta {
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        /* Invisible bridge above metadata to ensure smooth hover without hit gaps */
        .case-study-meta::before {
          content: "";
          position: absolute;
          top: -24px;
          left: 0;
          right: 0;
          height: 24px;
        }

        /* Move hovered card's own title & tags down so they stay visible below the expanded sheet */
        .case-studies-grid[data-hovered="0"] .case-study-li:nth-child(1) .case-study-meta,
        .case-studies-grid[data-hovered="1"] .case-study-li:nth-child(2) .case-study-meta,
        .case-studies-grid[data-hovered="2"] .case-study-li:nth-child(3) .case-study-meta,
        .case-studies-grid[data-hovered="3"] .case-study-li:nth-child(4) .case-study-meta {
          transform: translateY(calc(68.78cqi));
        }

        /* Smooth expansion of grid container bottom margin so following section moves down without overlap */
        .case-studies-grid {
          transition: margin-bottom 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 2-Column desktop layout (md: >= 768px):
           - Hovering card 0 (col 1, row 1) moves card 2 (col 1, row 2) down
           - Hovering card 1 (col 2, row 1) moves card 3 (col 2, row 2) down
           - Column 2 items remain unaffected when column 1 is hovered, and vice versa */
        @media (min-width: 768px) {
          .case-studies-grid[data-hovered] {
            margin-bottom: calc((100% - 2.5rem) * 0.3439);
          }
          .case-studies-grid[data-hovered="0"] .case-study-li:nth-child(3) .case-study-card-shift {
            transform: translateY(calc(68.78cqi));
          }
          .case-studies-grid[data-hovered="1"] .case-study-li:nth-child(4) .case-study-card-shift {
            transform: translateY(calc(68.78cqi));
          }
        }

        /* 1-Column mobile layout (< 768px):
           - Hovering/tapping an item moves all subsequent items down */
        @media (max-width: 767px) {
          .case-studies-grid[data-hovered] {
            margin-bottom: calc(100% * 0.6878);
          }
          .case-studies-grid[data-hovered="0"] .case-study-li:nth-child(n+2) .case-study-card-shift {
            transform: translateY(calc(68.78cqi));
          }
          .case-studies-grid[data-hovered="1"] .case-study-li:nth-child(n+3) .case-study-card-shift {
            transform: translateY(calc(68.78cqi));
          }
          .case-studies-grid[data-hovered="2"] .case-study-li:nth-child(4) .case-study-card-shift {
            transform: translateY(calc(68.78cqi));
          }
        }
      `}</style>
    </section>
  );
}
