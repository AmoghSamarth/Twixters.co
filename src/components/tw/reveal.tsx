import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll reveal. SSR renders fully visible; the pending (offset) state is only
 * applied on the client in a layout effect, so nothing ever flashes and nothing
 * is stranded invisible if JS or the observer fails. A safety timer reveals
 * anything still pending after 1.4s — a full-page screenshot always shows the
 * whole document.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") return;

    el.dataset.reveal = "pending";
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.dataset.reveal = "in";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);

    const safety = window.setTimeout(() => {
      show();
      io.disconnect();
    }, 1400);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`tw-reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
