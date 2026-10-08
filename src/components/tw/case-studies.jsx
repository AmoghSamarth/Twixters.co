import { useState, useEffect } from "react";
import { caseStudies } from "../../content/site";
import { ArrowUpRight, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";

export function CaseStudies() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".case-study-li")) {
        setExpandedIdx(null);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setExpandedIdx(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (e, i) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      if (expandedIdx !== i) {
        e.preventDefault();
        setExpandedIdx(i);
      }
    }
  };

  const activeIdx = hoveredIdx !== null ? hoveredIdx : expandedIdx;

  return (
    <section id="work" aria-labelledby="work-heading" className="case-studies-section px-3 sm:px-8 py-20 sm:py-24 md:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>Our Projects</Eyebrow>
        <h2 id="work-heading" className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]">
          Recent Case Studies
        </h2>
      </Reveal>

      {/* Double row in every view: grid-cols-2 across mobile, tablet and desktop */}
      <ul
        data-hovered={activeIdx !== null ? activeIdx : undefined}
        className="case-studies-grid mx-auto mt-10 sm:mt-14 md:mt-16 grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-6 md:gap-10"
      >
        {caseStudies.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={i * 90}
            className={`case-study-li relative hover:z-30 ${activeIdx === i ? "z-30" : "z-10"}`}
          >
            <div className="case-study-card-shift">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleCardClick(e, i)}
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                    setHoveredIdx(i);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                    setHoveredIdx(null);
                  }
                }}
                className="group relative block focus-visible:outline-none"
              >
                <div className="relative overflow-hidden rounded-[18px] sm:rounded-[28px] md:rounded-[36px] bg-[#cfcfcf] shadow-float transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1.5 group-hover:shadow-lift">
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
                    className={`absolute inset-x-0 top-0 w-full z-30 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeIdx === i
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-[0.99] pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                    }`}
                  >
                    <div className="overflow-hidden rounded-[18px] sm:rounded-[28px] md:rounded-[36px] shadow-[0_28px_65px_rgba(0,0,0,0.32)]">
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

                <div className="case-study-meta relative mt-3 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 px-0.5 sm:px-1">
                  <p className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[16px] font-medium tracking-tight text-ink-muted">
                    {project.title}
                    <ArrowUpRight className="size-3.5 sm:size-4 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <span className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-[#e5e5e5] px-2 py-0.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-[12.5px] font-medium tracking-tight text-ink-muted transition-colors duration-300 group-hover:bg-[#dcdcdc]"
                      >
                        {tag}
                      </span>
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

        /* 2-Column layout in every view (mobile, tablet, desktop):
           - Hovering card 0 (col 1, row 1) moves card 2 (col 1, row 2) down
           - Hovering card 1 (col 2, row 1) moves card 3 (col 2, row 2) down
           - Column 2 items remain unaffected when column 1 is hovered, and vice versa */
        .case-studies-grid[data-hovered] {
          margin-bottom: calc((100% - 0.75rem) * 0.3439);
        }
        @media (min-width: 640px) {
          .case-studies-grid[data-hovered] {
            margin-bottom: calc((100% - 1.5rem) * 0.3439);
          }
        }
        @media (min-width: 768px) {
          .case-studies-grid[data-hovered] {
            margin-bottom: calc((100% - 2.5rem) * 0.3439);
          }
        }
        .case-studies-grid[data-hovered="0"] .case-study-li:nth-child(3) .case-study-card-shift {
          transform: translateY(calc(68.78cqi));
        }
        .case-studies-grid[data-hovered="1"] .case-study-li:nth-child(4) .case-study-card-shift {
          transform: translateY(calc(68.78cqi));
        }
      `}</style>
    </section>
  );
}
