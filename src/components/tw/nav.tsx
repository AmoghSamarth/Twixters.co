import { useEffect, useRef, useState } from "react";
import { site } from "../../content/site";
import { ArrowUpRight } from "./primitives";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <a
          href="#top"
          className={`rounded-pill bg-surface px-5 py-3 text-[14px] font-semibold tracking-tight text-ink transition-shadow duration-300 ${
            lifted ? "shadow-float" : "shadow-pill"
          }`}
        >
          {site.name}
        </a>
        <button
          ref={buttonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="tw-menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex size-12 items-center justify-center rounded-full bg-surface text-ink transition-[transform,box-shadow] duration-300 hover:scale-105 ${
            lifted ? "shadow-float" : "shadow-pill"
          }`}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="size-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="size-5"
              aria-hidden="true"
            >
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="tw-menu"
        ref={panelRef}
        hidden={!open}
        className="mx-auto mt-3 max-w-[1200px] overflow-hidden rounded-[28px] bg-surface p-4 shadow-lift"
      >
        <nav className="grid gap-1" aria-label="Main">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center justify-between rounded-[18px] px-4 py-3 text-[17px] font-medium tracking-tight text-ink transition-colors duration-200 hover:bg-[#f1f1f1]"
            >
              {item.label}
              <ArrowUpRight className="size-4 text-ink-faint" />
            </a>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex min-h-[52px] items-center justify-center gap-2 rounded-pill bg-ink px-6 py-4 text-[14px] font-semibold text-white"
        >
          Book a free discovery call
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}
