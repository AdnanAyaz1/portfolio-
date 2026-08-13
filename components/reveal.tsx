"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Rendered element. Defaults to <div>. */
  as?: ElementType;
  variant?: RevealVariant;
  /** Transition delay in seconds (used for staggers). */
  delay?: number;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Reveal — fades/slides children in the first time they scroll into view.
 * Pure CSS transitions are driven by the `.in-view` class (see globals.css).
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  threshold = 0.12,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("in-view");

    if (!("IntersectionObserver" in window)) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const resolvedStyle: CSSProperties = delay
    ? { ...style, transitionDelay: `${delay}s` }
    : style ?? {};

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      data-variant={variant}
      className={className}
      style={resolvedStyle}
    >
      {children}
    </Tag>
  );
}

interface InViewProps {
  children: ReactNode;
  className?: string;
  /** Class added once the element is inside the viewport. */
  activeClass?: string;
  as?: ElementType;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * InView — adds `activeClass` to the wrapper once it enters the viewport.
 * Used for the pipeline "draw-on" effect and other scroll-triggered classes.
 */
export function InView({
  children,
  className,
  activeClass = "draw",
  as: Tag = "div",
  threshold = 0.25,
  style,
}: InViewProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add(activeClass);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(activeClass);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [activeClass, threshold]);

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}
