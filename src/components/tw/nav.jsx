import { useEffect, useRef, useState } from "react";
import { site } from "../../content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const navLinks = [
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <a
          href="#top"
          className={`rounded-pill bg-surface px-3.5 py-1.5 text-[12px] sm:px-4 sm:py-2 sm:text-[13px] lg:px-5 lg:py-3 lg:text-[14px] font-semibold tracking-tight text-ink transition-shadow duration-300 ${lifted ? "shadow-float" : "shadow-pill"}`}
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
          className={`flex size-[32px] sm:size-[38px] lg:size-12 items-center justify-center rounded-full bg-surface text-ink transition-[transform,box-shadow] duration-300 hover:scale-105 ${lifted ? "shadow-float" : "shadow-pill"}`}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="size-3.5 sm:size-4 lg:size-5"
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
              className="size-3.5 sm:size-4 lg:size-5"
              aria-hidden="true"
            >
              <path d="M4 8h16" />
              <path d="M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Floating menu card matching reference Image 2 */}
      {open && (
        <div className="mx-auto flex max-w-[1200px] justify-end">
          <div
            id="tw-menu"
            ref={panelRef}
            className="mt-3 w-[275px] sm:w-[290px] rounded-[28px] bg-white px-7 pt-7 pb-8 shadow-[0_12px_44px_rgba(0,0,0,0.14)] transition-all animate-in fade-in zoom-in-95 duration-150"
          >
            <nav className="flex flex-col space-y-[18px] text-left" aria-label="Main">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors duration-150 hover:text-ink-muted"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="pt-1 text-[17px] font-semibold tracking-[-0.01em] text-[#EA4714] transition-opacity duration-150 hover:opacity-80"
              >
                Get Template
              </a>
            </nav>

            {/* Circular Social Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex size-11 items-center justify-center rounded-full border border-black/15 text-ink transition-all duration-200 hover:border-black/40 hover:bg-black/5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-[15px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={site.socials?.linkedin || "https://www.linkedin.com/company/twixters-co/"}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full border border-black/15 text-ink transition-all duration-200 hover:border-black/40 hover:bg-black/5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
              </a>
              <a
                href={site.socials?.instagram || "https://www.instagram.com/twixters.co"}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full border border-black/15 text-ink transition-all duration-200 hover:border-black/40 hover:bg-black/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[17px]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
