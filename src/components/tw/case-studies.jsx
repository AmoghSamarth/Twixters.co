import { caseStudies } from "../../content/site";
import { ArrowUpRight, Eyebrow, TagPill } from "./primitives";
import { Reveal } from "./reveal";
export function CaseStudies() {
  return <section id="work" aria-labelledby="work-heading" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <Eyebrow>Our Projects</Eyebrow>
        <h2 id="work-heading" className="tw-h2 mt-6 text-center text-[clamp(1.9rem,5.6vw,3.5rem)]">
          Recent Case Studies
        </h2>
      </Reveal>

      <ul className="mx-auto mt-14 grid max-w-[1200px] gap-8 sm:mt-16 md:grid-cols-2 md:gap-10">
        {caseStudies.map((project, i) => (
          <Reveal as="li" key={project.title} delay={i * 90} className="relative hover:z-30">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
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
                  className="pointer-events-none absolute inset-x-0 top-0 w-full z-30 opacity-0 scale-[0.99] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100"
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

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
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
          </Reveal>
        ))}
      </ul>
    </section>;
}
