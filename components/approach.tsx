"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Reveal } from "@/components/reveal";
import { approachSteps } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Approach() {
  const flowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const pathRefs = useRef<SVGPathElement[]>([]);
  const maskRefs = useRef<SVGPathElement[]>([]);
  const arrowRefs = useRef<SVGPathElement[]>([]);

  const segments = Math.max(approachSteps.length - 1, 1);

  useLayoutEffect(() => {
    const flow = flowRef.current;
    const svg = svgRef.current;

    if (!flow || !svg) return;

    const drawConnector = () => {
      const circles = gsap.utils.toArray<HTMLElement>(
        ".approach-circle",
        flow
      );

      if (circles.length < 2) return;

      const flowRect = flow.getBoundingClientRect();

      const points = circles.map((circle) => {
        const rect = circle.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2 - flowRect.left,
          y: rect.top + rect.height / 2 - flowRect.top,
        };
      });

      /*
       * The connector curves were tuned for a wide desktop
       * layout. Scale the control-point offsets down on
       * smaller viewports so the lines never swing outside
       * the flow container on tablets / narrow desktops.
       */
      const scale = Math.min(
        1.15,
        Math.max(0.5, flowRect.width / 1100)
      );

      const A = 90 * scale;
      const B = 150 * scale;
      const C = 45 * scale;
      const D = 22 * scale;
      const E = 10 * scale;

      for (let i = 0; i < points.length - 1; i++) {
        const start = points[i];
        const end = points[i + 1];

        let path = "";

        /*
         * 01 → 02
         *
         * Starts on the left, sweeps outward toward
         * the right, then gently curls into 02.
         */
        if (i === 0) {
          path = `
            M ${start.x} ${start.y}
            C
              ${start.x + A} ${start.y},
              ${end.x - B} ${end.y - 100 * scale},
              ${end.x - C} ${end.y - C}
            C
              ${end.x - D} ${end.y - D},
              ${end.x - E} ${end.y - E},
              ${end.x} ${end.y}
          `;
        }

        /*
         * 02 → 03
         *
         * Mirror of the first curve.
         *
         * This is deliberately NOT generated using the
         * same generic formula so the visual feels designed.
         */
        else if (i === 1) {
          path = `
            M ${start.x} ${start.y}
            C
              ${start.x - A} ${start.y},
              ${end.x + B} ${end.y - 100 * scale},
              ${end.x + C} ${end.y - C}
            C
              ${end.x + D} ${end.y - D},
              ${end.x + E} ${end.y - E},
              ${end.x} ${end.y}
          `;
        }

        /*
         * 03 → 04
         *
         * Mirror of 01 → 02.
         */
        else {
          path = `
            M ${start.x} ${start.y}
            C
              ${start.x + A} ${start.y},
              ${end.x - B} ${end.y - 100 * scale},
              ${end.x - C} ${end.y - C}
            C
              ${end.x - D} ${end.y - D},
              ${end.x - E} ${end.y - E},
              ${end.x} ${end.y}
          `;
        }

        const visiblePath = pathRefs.current[i];
        const maskPath = maskRefs.current[i];
        const arrow = arrowRefs.current[i];

        visiblePath?.setAttribute("d", path);
        maskPath?.setAttribute("d", path);

        /*
         * Make the animation follow the REAL length
         * of the generated curve.
         */
        if (maskPath) {
          const length = maskPath.getTotalLength();

          gsap.set(maskPath, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          /*
           * The visible dotted path itself doesn't need
           * a dashoffset animation because the mask handles
           * the reveal.
           */
        }

        /*
         * Position the arrowhead at the end of the path.
         */
        if (arrow && visiblePath) {
          const length = visiblePath.getTotalLength();
          const point = visiblePath.getPointAtLength(length);

          /*
           * Find a point slightly before the end so we can
           * calculate the direction of the curve.
           */
          const previous = visiblePath.getPointAtLength(
            Math.max(0, length - 12)
          );

          const angle =
            (Math.atan2(
              point.y - previous.y,
              point.x - previous.x
            ) *
              180) /
            Math.PI;

          arrow.setAttribute(
            "transform",
            `translate(${point.x}, ${point.y}) rotate(${angle})`
          );
        }
      }

      svg.setAttribute(
        "viewBox",
        `0 0 ${flowRect.width} ${flowRect.height}`
      );
    };

    drawConnector();

    const ctx = gsap.context(() => {
      /*
       * Main drawing timeline.
       */
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: flow,
          start: "top 70%",
          once: true,
        },
      });

      maskRefs.current.forEach((mask, index) => {
        if (!mask) return;

        if (arrowRefs.current[index]) {
          gsap.set(arrowRefs.current[index], {
            opacity: 0,
            scale: 0.7,
            transformOrigin: "center",
          });
        }

        // Draw connector
        timeline.to(
          mask,
          {
            strokeDashoffset: 0,
            duration: 0.75,
            ease: "power2.out",
          },
          index === 0 ? 0 : "-=0.25"
        );

        // Reveal arrow immediately at the end
        if (arrowRefs.current[index]) {
          timeline.to(
            arrowRefs.current[index],
            {
              opacity: 1,
              scale: 1,
              duration: 0.15,
              ease: "power2.out",
            },
            "-=0.08"
          );
        }
      });

      /*
       * Card content reveal.
       *
       * Each row gets its OWN ScrollTrigger.
       *
       * The row itself is no longer animated because the
       * individual circle and text elements now have their
       * own reveal animations.
       */
      const rows = gsap.utils.toArray<HTMLElement>(
        ".approach-row",
        flow
      );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
   * Approach row reveal.
   *
   * Each row's circle and text now use the Reveal component
   * for staggered scroll-in animation.
   */
    }, flow);

    const raf = requestAnimationFrame(drawConnector);

    const onLoad = () => {
      drawConnector();
      ScrollTrigger.refresh();
    };

    const onResize = () => {
      drawConnector();
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);

    ScrollTrigger.addEventListener(
      "refresh",
      drawConnector
    );

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);

      ScrollTrigger.removeEventListener(
        "refresh",
        drawConnector
      );

      ctx.revert();
    };
  }, []);

  return (
    <section
      className="section"
      id="approach"
    >
      <div className="container">

        {/* Section heading */}
        <Reveal className="sec-head" delay={0.05} variant="up">
          <span className="sec-num">
            05
          </span>

          <h2>
            Our Approach
          </h2>

          <span
            className="sec-line"
            aria-hidden="true"
          />
        </Reveal>

        {/* Approach flow */}
        <div
          ref={flowRef}
          className="approach-flow"
        >
          {/* SVG connector layer */}
          <svg
            ref={svgRef}
            className="approach-path"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>

              {/*
               * Custom arrowhead.
               *
               * We don't use markerEnd here because the
               * arrow is individually animated and positioned
               * based on the actual curve.
               */}
              <g id="approach-arrow">
                <path
                  d="M -8 -5 L 0 0 L -8 5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

            </defs>

            {Array.from({
              length: segments,
            }).map((_, index) => (
              <g key={index}>

                {/*
                 * Invisible drawing mask.
                 *
                 * GSAP animates this path from its complete
                 * length down to zero.
                 */}
                <mask
                  id={`approach-reveal-${index}`}
                >
                  <path
                    ref={(element) => {
                      if (element) {
                        maskRefs.current[index] =
                          element;
                      }
                    }}
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </mask>

                {/*
                 * Visible dotted line.
                 */}
                <path
                  ref={(element) => {
                    if (element) {
                      pathRefs.current[index] =
                        element;
                    }
                  }}
                  className="approach-line"
                  stroke="var(--accent)"
                  strokeWidth="1.25"
                  strokeDasharray="4 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  mask={`url(#approach-reveal-${index})`}
                />

                {/*
                 * Individually animated arrowhead.
                 */}
                <use
                  href="#approach-arrow"
                  ref={(element) => {
                    if (element) {
                      arrowRefs.current[index] =
                        element as unknown as SVGPathElement;
                    }
                  }}
                  opacity="0"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                />

              </g>
            ))}
          </svg>

          {/* Steps */}
          <div className="approach-steps">

            {approachSteps.map(
              (step, index) => {
                const num = String(
                  index + 1
                ).padStart(2, "0");

                const alternate =
                  index % 2 === 1;

                /*
                 * RIGHT SIDE
                 *
                 * 02 / 04
                 */
                if (alternate) {
                  return (
                    <div
                      key={step.num}
                      className="approach-row flex flex-col gap-6 md:flex-row md:items-center md:justify-end md:gap-16"
                    >
                      {/* Circle */}
                      <Reveal
                        className="approach-circle"
                        variant={index % 2 === 0 ? "up" : "down"}
                        delay={index * 0.1}
                      >
                        <div className="flex justify-center md:w-[58%] md:justify-end lg:w-[50%]">
                          <div className="approach-circle">
                            {num}
                          </div>
                        </div>
                      </Reveal>

                      {/* Text */}
                      <Reveal
                        className="approach-text"
                        variant={index % 2 === 0 ? "up" : "down"}
                        delay={index * 0.1 + 0.08}
                      >
                        <div className="approach-text md:w-1/3">
                          <p className="approach-step-label">
                            Step {num}
                          </p>

                          <h3>
                            {step.title}
                          </h3>

                          <p>
                            {step.description}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  );
                }

                /*
                 * LEFT SIDE
                 *
                 * 01 / 03
                 */
                return (
                  <div
                    key={step.num}
                    className="approach-row flex flex-col gap-6 md:flex-row md:items-center md:gap-16"
                  >
                    {/* Text */}
                    <Reveal
                      className="approach-text"
                      variant={index % 2 === 0 ? "up" : "down"}
                      delay={index * 0.1 + 0.08}
                    >
                      <div className="approach-text md:w-1/3">
                        <p className="approach-step-label">
                          Step {num}
                        </p>

                        <h3>
                          {step.title}
                        </h3>

                        <p>
                          {step.description}
                        </p>
                      </div>
                    </Reveal>

                    {/* Circle */}
                    <Reveal
                      className="approach-circle"
                      variant={index % 2 === 0 ? "up" : "down"}
                      delay={index * 0.1}
                    >
                      <div className="flex order-first justify-center md:order-none md:w-[58%] md:justify-start lg:w-[50%]">
                        <div className="approach-circle">
                          {num}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              }
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
