"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface NodeDef {
  id: string;
  x: number;
  y: number;
  title: string;
  titleX: number;
  titleY: number;
  sub: string;
  subX: number;
  subY: number;
}

const NODES: NodeDef[] = [
  {
    id: "menu",
    x: 28,
    y: 46,
    title: "Menu Analyst",
    titleX: 123,
    titleY: 76,
    sub: "reads every menu in the city",
    subX: 123,
    subY: 95,
  },
  {
    id: "weather",
    x: 28,
    y: 180,
    title: "Weather Analyst",
    titleX: 123,
    titleY: 210,
    sub: "pulls today's forecast",
    subX: 123,
    subY: 229,
  },
  {
    id: "strategist",
    x: 340,
    y: 108,
    title: "Strategist",
    titleX: 435,
    titleY: 138,
    sub: "drafts today's promotions",
    subX: 435,
    subY: 157,
  },
  {
    id: "critic",
    x: 600,
    y: 78,
    title: "Critic",
    titleX: 695,
    titleY: 108,
    sub: "flags weak plans, sends back",
    subX: 695,
    subY: 127,
  },
  {
    id: "synthesizer",
    x: 600,
    y: 232,
    title: "Synthesizer",
    titleX: 695,
    titleY: 262,
    sub: "publishes the final brief",
    subX: 695,
    subY: 281,
  },
];

interface LinkDef {
  id: string;
  d: string;
  loop?: boolean;
}

const LINKS: LinkDef[] = [
  {
    id: "line-menu",
    d: "M218,78 L282,78 L282,140 L330,140",
  },
  {
    id: "line-weather",
    d: "M218,212 L282,212 L282,140 L330,140",
  },
  {
    id: "line-strategist",
    d: "M530,140 L565,140 L565,110 L590,110",
  },
  {
    id: "line-feedback",
    d: "M600,100 C470,-20 280,-10 372,110",
    loop: true,
  },
  {
    id: "line-critic",
    d: "M695,140 L695,222",
  },
  {
    id: "line-output",
    d: "M695,296 L695,330",
  },
];

const DRAW: [number, number, number, number] = [0.4, 0, 0.2, 1];

export function PipelineDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <svg
        viewBox="0 0 858 380"
        className="h-auto w-full overflow-visible"
        aria-label="CafePromo AI agent pipeline"
      >
        <defs>
          <marker
            id="pipeline-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>

          <marker
            id="pipeline-feedback-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Gray base lines */}
        {LINKS.map((link) => (
          <path
            key={link.id}
            d={link.d}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd={
              link.loop
                ? "url(#pipeline-feedback-arrow)"
                : "url(#pipeline-arrow)"
            }
            opacity="0.5"
          />
        ))}

        {/* Animated orange lines */}
        {LINKS.map((link, i) => (
          <motion.path
            key={`active-${link.id}`}
            d={link.d}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd={
              link.loop
                ? "url(#pipeline-feedback-arrow)"
                : "url(#pipeline-arrow)"
            }
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              inView
                ? { pathLength: 1, opacity: 0.8 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              pathLength: {
                duration: 0.8,
                ease: DRAW,
                delay: 0.5 + i * 0.35,
              },
              opacity: { duration: 0.1, delay: 0.5 + i * 0.35 },
            }}
          />
        ))}

        {/* Agent nodes */}
        {NODES.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width="210"
              height="64"
              rx="21"
              fill="var(--surface-raised)"
              stroke="var(--border)"
              strokeWidth="1"
            />

            <text
              x={node.titleX}
              y={node.titleY}
              textAnchor="middle"
              fill="var(--fg)"
              fontSize="15"
              fontWeight="600"
              fontFamily="var(--font-display)"
            >
              {node.title}
            </text>

            <text
              x={node.subX}
              y={node.subY}
              textAnchor="middle"
              fill="var(--fg-muted)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              letterSpacing="0.04em"
            >
              {node.sub}
            </text>
          </g>
        ))}

        {/* Output chip */}
        <g>
          <rect
            x="560"
            y="328"
            width="270"
            height="42"
            rx="21"
            fill="var(--surface-raised)"
            stroke="var(--border)"
            strokeWidth="1"
          />

          <text
            x="695"
            y="354"
            textAnchor="middle"
            fill="var(--fg)"
            fontSize="12"
            fontFamily="var(--font-mono)"
            letterSpacing="0.04em"
            fontWeight="500"
          >
            auto-posted · 6:00 AM daily
          </text>
        </g>
      </svg>
    </div>
  );
}
