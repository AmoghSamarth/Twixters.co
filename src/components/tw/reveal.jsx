import { useEffect, useLayoutEffect, useRef } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Single shared IntersectionObserver instance to eliminate redundant observer allocations
let sharedObserver = null;
const observerCallbacks = new WeakMap();

function getSharedObserver() {
  if (!sharedObserver && typeof IntersectionObserver !== "undefined") {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
  }
  return sharedObserver;
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
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }

    el.dataset.reveal = "pending";
    let done = false;

    const show = () => {
      if (done) return;
      done = true;
      el.dataset.reveal = "in";
    };

    const io = getSharedObserver();
    if (io) {
      observerCallbacks.set(el, show);
      io.observe(el);
    } else {
      show();
      return;
    }

    const safety = window.setTimeout(() => {
      show();
      if (io && el) {
        observerCallbacks.delete(el);
        io.unobserve(el);
      }
    }, 1400);

    return () => {
      window.clearTimeout(safety);
      if (io && el) {
        observerCallbacks.delete(el);
        io.unobserve(el);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`tw-reveal ${className}`}
      style={{ ["--reveal-delay"]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
