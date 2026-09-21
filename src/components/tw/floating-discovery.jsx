import { useEffect, useState } from "react";
import { faqContact, site } from "../../content/site";
import { assetUrl } from "../../utils/asset";
import { ArrowUpRight } from "./primitives";

export function FloatingDiscovery() {
  const [visible, setVisible] = useState(true);
  const bookingUrl = faqContact.cta?.href || site.bookingUrl || "https://wa.me/message/TIRNTDQIVJ2YF1";
  const avatarSrc = faqContact.avatar?.src || assetUrl("/assets/raj-faq-avatar.jpg");

  useEffect(() => {
    let ticking = false;
    let currentVisible = true;

    const check = () => {
      const contact = document.getElementById("contact");
      if (!contact) return;
      const rect = contact.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // When the final contact card starts hovering up into the viewport, hide the floating button
      const inView = rect.top < vh * 0.75;
      const nextVisible = !inView;
      if (nextVisible !== currentVisible) {
        currentVisible = nextVisible;
        setVisible(nextVisible);
      }
    };

    const checkVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          check();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    check();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <aside
      aria-label="Book a discovery call"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 sm:gap-3 rounded-full border border-black/[0.08] bg-white/95 pl-1.5 pr-3.5 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.2)] active:scale-[0.98]"
      >
        {/* Round avatar with live active status indicator */}
        <div className="relative size-9 sm:size-10 shrink-0 overflow-hidden rounded-full border border-white/80 bg-neutral-900 shadow-sm">
          <img
            src={avatarSrc}
            alt="Raj Shegaonkar"
            width={80}
            height={80}
            loading="eager"
            decoding="async"
            className="size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {/* Pulsing online indicator */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 opacity-75 ring-2 ring-white animate-ping"
          />
        </div>

        {/* Text copy */}
        <div className="flex flex-col text-left">
          <span className="text-[13px] sm:text-[13.5px] font-semibold tracking-tight text-ink leading-tight">
            Book a Discovery Call
          </span>
          <span className="text-[10.5px] sm:text-[11px] font-medium text-ink-muted leading-tight hidden sm:block">
            Free 15-min chat
          </span>
        </div>

        {/* Round dark icon badge with micro-interaction */}
        <div
          aria-hidden="true"
          className="size-6 sm:size-7 rounded-full bg-ink text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-black"
        >
          <ArrowUpRight className="size-3.5 sm:size-4" />
        </div>
      </a>
    </aside>
  );
}
