"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Rich } from "@/lib/rich";
import { storyTimeline } from "@/lib/content";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];
const DRAW_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];
const LINE_DURATION = 2.4;

export function Story() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, amount: 0.5 });
  const leftRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, amount: 0.2 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inView = useInView(timelineRef, { once: true, amount: 0.35 });

  // Fallback: evenly spaced delays; replaced with measured positions below.
  const [delays, setDelays] = useState<number[]>(() =>
    storyTimeline.map((_, i) => (i / storyTimeline.length) * LINE_DURATION),
  );

  // Measure each item's offset so every bullet pops exactly when the
  // drawing line's tip reaches that date.
  useLayoutEffect(() => {
    const el = timelineRef.current;
    if (!el || el.scrollHeight === 0) return;
    setDelays(
      itemRefs.current.map((item) =>
        item ? (item.offsetTop / el.scrollHeight) * LINE_DURATION : 0,
      ),
    );
  }, []);

  return (
    <section className="section pb-0!" id="about">
      <div className="container">
        <motion.div
          className="sec-head"
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="sec-num">01</span>
          <h2>The beginning</h2>
          <span className="sec-line" aria-hidden="true" />
        </motion.div>

        <div className="spread spread--flush">
          <div ref={leftRef}>
            <motion.p
              className="serif-quote"
              style={{ fontSize: 22, maxWidth: "44ch" }}
              initial={{ opacity: 0, y: 24 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              I didn&apos;t learn to build apps. I learned how systems work — then
              built products people actually use.
            </motion.p>
            <motion.p
              className="story-text"
              initial={{ opacity: 0, y: 24 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
            >
              It started at UET Peshawar, studying Computer Systems Engineering —
              not to memorize frameworks, but to understand what happens under
              the hood. By 2024 I was shipping production dashboards at Apptex,
              wiring Stripe payments and booking flows that real businesses
              depended on. A year later I was running multi-agent AI pipelines
              at ProductBox.
            </motion.p>
            <motion.p
              className="story-text"
              initial={{ opacity: 0, y: 24 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
            >
              The thread is simple: I don&apos;t build demos. I build systems that
              earn their keep.
            </motion.p>
          </div>

          <div className="timeline" ref={timelineRef}>
            {/* The spine draws downward from the top once scrolled into view. */}
            <motion.div
              className="timeline-line"
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: LINE_DURATION, ease: DRAW_EASE }}
            />
            {storyTimeline.map((entry, i) => (
              <div
                className="timeline-item"
                key={entry.year}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
              >
                {/* Bullet pops in when the line's tip reaches this date. */}
                <motion.span
                  className="timeline-dot"
                  aria-hidden="true"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 22,
                    delay: (delays[i] ?? 0) + 0.05,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                    delay: (delays[i] ?? 0) + 0.15,
                  }}
                >
                  <span className="timeline-year">{entry.year}</span>
                  <p className="timeline-text">
                    <Rich text={entry.text} />
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
