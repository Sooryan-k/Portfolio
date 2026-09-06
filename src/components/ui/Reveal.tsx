"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// One observer shared by every Reveal on the page rather than one each.
let shared: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver() {
  shared ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        shared?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  return shared;
}

/**
 * Scroll-reveal wrapper: fades + rises content into view once.
 *
 * The animation itself is CSS (see globals.css) — this only flips the class
 * when the element scrolls in, so the bundle stays tiny and nothing
 * above the fold waits on JS to paint. Children are still rendered on the
 * server. Respects the user's reduced-motion preference.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    callbacks.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal", visible && "is-visible", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
