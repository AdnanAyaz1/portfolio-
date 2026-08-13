"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* Identical to the hero's animation language (see hero.tsx).
   No reduced-motion guard: a conditional initial/animate would render
   opacity:0 on the server but not on the client (hydration mismatch),
   leaving the text stuck invisible. The hero animates unconditionally,
   so the text always ends visible — we do the same. */
const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const LINES: React.ReactNode[] = [
  <>
    Interfaces get you <em>in the room.</em>
  </>,
  <>
    <em>Systems</em> keep you there.
  </>,
  <>
    <span className="hl">Autonomy</span> makes you <em>memorable.</em>
  </>,
];

interface ManifestoProps {
  lines: React.ReactNode[];
  sub: string;
}

export function Manifesto({ lines, sub }: ManifestoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="manifesto">
      <div className="container" ref={ref}>
        <div className="manifesto-lines">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="manifesto-line"
              initial={{ opacity: 0, y: 34 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.12 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <motion.p
          className="manifesto-sub"
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: lines.length * 0.12,
          }}
        >
          {sub}
        </motion.p>
      </div>
    </section>
  );
}

export function ManifestoTop() {
  return (
    <Manifesto
      lines={LINES}
      sub="This portfolio is organized the way I work. First I ship interfaces real users touch. Then I make the systems behind them fast and reliable. And finally — the hard part — I teach the software to make decisions without me."
    />
  );
}

export function ManifestoArchitecture() {
  return (
    <Manifesto
      lines={[
        <>Talk is cheap.</>,
        <>
          <em>Code is easy.</em>
        </>,
        <>
          Show me the <span className="hl">architecture.</span>
        </>,
      ]}
      sub="Any developer can write code. I design systems that scale — multi-agent pipelines, event-driven architectures, payment flows that never fail. That's the difference between a script and a product."
    />
  );
}
