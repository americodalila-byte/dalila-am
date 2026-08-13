import * as React from "react";

/** Reveals children once the element scrolls into view (respects prefers-reduced-motion). */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

export function revealStyle(shown: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : "translateY(14px)",
    transition: `opacity 700ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
  };
}
