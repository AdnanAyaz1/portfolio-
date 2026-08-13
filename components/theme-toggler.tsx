"use client";

import { motion } from "motion/react";
import { useHeroTheme } from "@/components/hero-theme";

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
    </svg>
  );
}

export function ThemeToggler() {
  const { mode, toggle } = useHeroTheme();

  return (
    <div className="theme-toggler" aria-label="Theme toggler">
      <button
        type="button"
        className={`theme-toggler-btn${mode === "day" ? " active" : ""}`}
        onClick={toggle}
        aria-label={mode === "day" ? "Switch to night scene" : "Switch to day scene"}
      >
        <motion.span
          className="theme-toggler-icon"
          key={mode}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <SunIcon />
        </motion.span>
      </button>
      <div className="theme-toggler-divider" />
      <button
        type="button"
        className={`theme-toggler-btn${mode === "night" ? " active" : ""}`}
        onClick={toggle}
        aria-label={mode === "night" ? "Switch to day scene" : "Switch to night scene"}
      >
        <motion.span
          className="theme-toggler-icon"
          key={mode}
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MoonIcon />
        </motion.span>
      </button>
    </div>
  );
}
