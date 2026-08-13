"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export interface WordSegment {
  text: string;
  /** "em" → bold ink, "hl" → accent, matching the original markup. */
  cls?: "em" | "hl";
}

interface WordRevealProps {
  /** Segments of text; "\n" inside a segment renders a line break. */
  segments: WordSegment[];
  className?: string;
  /** Base delay before the first word animates (s). */
  delay?: number;
  /** Delay between words (s). */
  wordDelay?: number;
}

/**
 * WordReveal — splits text into individual words and staggers them in
 * (rise + de-blur) the first time the block scrolls into view.
 * The `.word` transition styles live in globals.css.
 */
export function WordReveal({
  segments,
  className,
  delay = 0,
  wordDelay = 0.04,
}: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);

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
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  let wordIndex = 0;
  const rendered: ReactNode[] = [];

  segments.forEach((segment, s) => {
    const words = segment.text.split(" ");

    words.forEach((word, w) => {
      if (word.length > 0) {
        rendered.push(
          <span
            key={`${s}-${w}`}
            className={segment.cls ? `word ${segment.cls}` : "word"}
            style={{ transitionDelay: `${delay + wordIndex * wordDelay}s` }}
          >
            {word}
          </span>,
        );
        wordIndex += 1;
      }
      // Reinsert the space between words (as its own inline node so
      // wrapping still works naturally).
      if (w < words.length - 1) {
        rendered.push(
          <span key={`${s}-${w}-sp`} className="word-whitespace">
            {" "}
          </span>,
        );
      }
    });

    if (s < segments.length - 1) {
      rendered.push(<br key={`br-${s}`} />);
    }
  });

  return (
    <p ref={ref} className={className}>
      {rendered}
    </p>
  );
}
