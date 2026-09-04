import { useEffect, useLayoutEffect, useRef } from "react";
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
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
  return <Tag
    ref={ref}
    className={`tw-reveal ${className}`}
    style={{ ["--reveal-delay"]: `${delay}ms` }}
    {...rest}
  >
      {children}
    </Tag>;
}
