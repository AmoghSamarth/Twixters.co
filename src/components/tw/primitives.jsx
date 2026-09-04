export function ArrowUpRight({ className = "size-4" }) {
  return <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>;
}
export function ArrowRight({ className = "size-4" }) {
  return <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>;
}
export function Eyebrow({ children }) {
  return <p className="flex items-center justify-center gap-5 text-ink-muted">
      <span aria-hidden="true" className="tw-hair hidden w-full max-w-[26vw] flex-1 sm:block" />
      <span className="tw-eyebrow shrink-0 text-[15px] sm:text-[19px]">{children}</span>
      <span aria-hidden="true" className="tw-hair hidden w-full max-w-[26vw] flex-1 sm:block" />
    </p>;
}
export function InkPill({
  href,
  children,
  external,
  className = ""
}) {
  return <a
    href={href}
    {...external ? { target: "_blank", rel: "noreferrer" } : {}}
    className={`group inline-flex min-h-[38px] items-center justify-center gap-2 rounded-pill bg-ink px-5 py-1.5 text-[13.5px] font-medium tracking-tight text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#000] ${className}`}
  >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>;
}
export function StatusPill({
  children,
  className = ""
}) {
  return <p
    className={`inline-flex items-center gap-2.5 rounded-pill bg-surface px-5 py-2.5 text-[13.5px] font-medium tracking-tight text-ink shadow-pill ${className}`}
  >
      <span aria-hidden="true" className="size-2 rounded-full bg-[#2f9e5f]" />
      {children}
    </p>;
}
export function TagPill({ children }) {
  return <span className="rounded-pill bg-[#e5e5e5] px-3 py-1.5 text-[12.5px] font-medium tracking-tight text-ink-muted transition-colors duration-300 group-hover:bg-[#dcdcdc]">
      {children}
    </span>;
}
