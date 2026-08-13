"use client";

import Link from "next/link";

type ProjectCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  href?: string;
};

export function ProjectCard({
  number,
  category,
  title,
  description,
  image,
  tags = [],
  href = "#",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-[560px] w-[82vw] max-w-[520px] shrink-0 flex-col overflow-hidden rounded-2xl bg-[#141517] border border-white/10 transition-all duration-500 ease-out will-change-transform sm:h-[620px] sm:w-[520px] "
    >
      {/* Card image as full background */}
      {image ? (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-110 group-hover:opacity-75"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : null}

      {/* Gradient scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-[#141517]" />

      {/* Accent glow that blooms on hover */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_50%_130%,rgba(245,78,0,0.35),transparent_60%)]" />

      {/* Top meta: number + divider + category */}
      <div className="absolute left-8 top-8 z-20 flex flex-col items-start">
        <span
          className="text-[13px] font-semibold tracking-[0.12em] text-white/90 transition-colors duration-300 group-hover:text-[#f54e00]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {number}
        </span>
        <span className="mt-3 h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#f54e00]" />
        {category ? (
          <span
            className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors duration-500 group-hover:text-white/90"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {category}
          </span>
        ) : null}
      </div>

      {/* Active pointer — white circular arrow, top-right, reveals on hover */}
      <div className="absolute right-8 top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#141517] shadow-lg opacity-0 scale-75 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:bg-[#f54e00] group-hover:text-white">
        <svg
          className="card-pointer-arrow h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="8 7 17 7 17 16" />
        </svg>
      </div>

      {/* Floating case study label below the pointer, top-right */}
      <span
        className="absolute right-8 top-[92px] z-20 text-right text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85 opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Case study
      </span>

      {/* Bottom content */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 text-white"
        style={{ padding: "40px" }}
      >
        <h3
          className="text-[34px] font-extrabold leading-[1.05] tracking-tight transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-white"
          style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}
        >
          {title}
        </h3>

        <p
          className="max-w-[92%] text-[15px] leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90"
          style={{ marginTop: "16px" }}
        >
          <span className="mr-2 text-[var(--accent)] transition-transform duration-300 group-hover:inline-block group-hover:translate-x-1">—</span>
          {description}
        </p>

        {tags.length > 0 && (
          <div
            className="flex flex-wrap gap-2.5"
            style={{ marginTop: "28px" }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.06] px-3! py-1.5! text-[10px] font-medium uppercase tracking-[0.08em] text-white/65 transition-all duration-300 group-hover:border-[#f54e00]/40 group-hover:bg-[#f54e00]/15 group-hover:text-white"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
