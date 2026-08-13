"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { stats, type Stat } from "@/lib/content";

const DURATION = 1400;

function StatItem({ stat, delay }: { stat: Stat; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const target = stat.value;
    const finalize = () => {
      el.textContent = target % 1 !== 0 ? target.toFixed(1) : String(target);
    };

    if (!("IntersectionObserver" in window)) {
      finalize();
      return;
    }

    const animate = () => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = target % 1 !== 0 ? target * eased : Math.round(target * eased);
        el.textContent = String(value);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  return (
    <Reveal className="stat-item" delay={delay}>
      <div className="stat-num">
        <span ref={numRef}>0</span>
        {stat.suffix ? <span className="unit">{stat.suffix}</span> : null}
      </div>
      <p className="stat-label">{stat.label}</p>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="stats-strip container">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} delay={i * 0.08} />
      ))}
    </section>
  );
}
