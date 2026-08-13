"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PipelineDiagram } from "@/components/pipeline";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const POINTS = [
  {
    title: "Five roles, one pipeline",
    desc: "Each agent owns a narrow decision, so no single prompt holds the whole business.",
  },
  {
    title: "The revision loop",
    desc: "The Critic rejects weak plans and pushes them back until the output holds up — a built-in quality gate.",
  },
  {
    title: "No human in the loop",
    desc: "BullMQ workers, Redis queues, and cron keep the run on schedule without supervision.",
  },
];

export function PipelinePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <motion.p
        className="panel-label"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        CafePromo AI — How it works
      </motion.p>

      <motion.h3
        className="panel-title"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      >
        Every morning, five agents wake up and argue about coffee.
      </motion.h3>

      <motion.p
        className="panel-lede"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
      >
        Menu Analyst reads every menu in a city. Weather Analyst checks the
        forecast. Strategist drafts the promotions, Critic tears them apart,
        and Synthesizer publishes the plan that survives.
      </motion.p>

      <motion.div
        className="pipeline-visual"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
      >
        <PipelineDiagram />
      </motion.div>

      <motion.div
        className="pipeline-cap"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
      >
        <span>CafePromo AI · Morning run</span>
        <span>
          revises itself until the{" "}
          <strong>Critic approves</strong>
        </span>
      </motion.div>

      <div className="panel-grid" ref={gridRef}>
        {POINTS.map((point, i) => (
          <motion.div
            className="panel-point"
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
          >
            <h4>{point.title}</h4>
            <p>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
