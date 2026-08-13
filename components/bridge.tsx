"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

export function Bridge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="narrative-bridge pb-16!">
      <div className="container" ref={ref}>
        <div className="bridge-lede">
          <motion.p
            className="manifesto-line"
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            Theory is cheap.
          </motion.p>
          <motion.p
            className="manifesto-line"
            initial={{ opacity: 0, y: 34 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          >
            <em>Here&apos;s what</em> <span className="hl">shipped.</span>
          </motion.p>
          <motion.p
            className="bridge-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          >
            Four products that went from idea to production — from an agentic AI
            platform that argues with itself, to booking systems processing real
            payments.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
