"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";
import { useHeroTheme, type HeroMode } from "@/components/hero-theme";

gsap.registerPlugin(ScrollTrigger);

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const POSTERS: Record<HeroMode, string> = {
  day: "/assets/hero-day-poster.webp",
  night: "/assets/hero-night-poster.webp",
};

const TYPEWRITER_PHRASES = [
  "that scale.",
  "that evolve.",
  "that are built for change.",
  "that handle complexity.",
  "that last.",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function useTypewriter(phrases: string[]) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, text.length + 1));
          if (text.length + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
            return;
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            return;
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return text;
}

export function Hero() {
  const { mode } = useHeroTheme();
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const typewriterText = useTypewriter(TYPEWRITER_PHRASES);

  /* GSAP ScrollTrigger — parallax poster + content drift/fade on scroll. */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(innerRef.current, {
        yPercent: -10,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "80% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={mode}
            className="hero-bg-layer"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <Image
              src={POSTERS[mode]}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-inner" ref={innerRef}>
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        >
          Full-stack · AI-first engineer
        </motion.p>

        <h1 className="hero-name">
          <motion.span
            className="hero-name-line"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          >
            I don&apos;t just build software,
          </motion.span>
          <motion.span
            className="hero-name-line"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.24 }}
          >
            I architect systems
          </motion.span>
          <motion.span
            className="hero-name-line"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.36 }}
          >
            <span className="accent accent-underline">
              {typewriterText}
              <span className="typewriter-cursor" aria-hidden="true">|</span>
              <svg className="accent-svg" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                <path d="M2 8 C 60 2, 120 2, 150 6 S 240 10, 298 4" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.span>
        </h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        >
          {site.tagline}
        </motion.p>

        <div className="hero-cta">
          <motion.a
            className="btn btn-primary"
            href="#work"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.64 }}
          >
            View selected work <span aria-hidden="true">→</span>
          </motion.a>
          <motion.a
            className="btn btn-outline-light"
            href="#contact"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.74 }}
          >
            Get in touch
          </motion.a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="line" />
        Scroll
      </div>
  
    </section>
  );
}
