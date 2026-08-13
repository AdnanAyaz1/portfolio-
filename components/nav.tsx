"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, site } from "@/lib/site";

const TRACKED_SECTIONS = [
  "about",
  "work",
  "approach",
  "stack",
  "contact",
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      setScrolled(window.scrollY > 24);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);

      // Active section: find the section closest to current scroll position
      // Only highlight after scrolling at least 800px to avoid highlighting on initial load
      let current = "";
      if (window.scrollY > 800) {
        const pos = window.scrollY + 160;
        
        // Get sections with their offsets and sort by offsetTop
        const sectionsWithOffsets = TRACKED_SECTIONS
          .map((id) => {
            const el = document.getElementById(id);
            if (!el) return { id, offset: -1 };

            // Handle pinned elements (work section is pinned with GSAP)
            // If element is inside a pin-spacer, use the spacer's offset
            let offset = el.offsetTop;
            const offsetParent = el.offsetParent as HTMLElement | null;
            if (offsetParent?.className === "pin-spacer") {
              offset = offsetParent.offsetTop;
            }
            return { id, offset };
          })
          .filter((s) => s.offset > 0)  // Skip invalid offsets
          .sort((a, b) => a.offset - b.offset);
        
        // Find the last section whose offset is <= pos
        for (let i = sectionsWithOffsets.length - 1; i >= 0; i--) {
          if (sectionsWithOffsets[i].offset <= pos) {
            current = sectionsWithOffsets[i].id;
            break;
          }
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu on resize up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={scrolled ? "nav scrolled" : "nav nav--overlay"}>
        <a
          className="nav-brand"
          href="#top"
          onClick={closeMenu}
          aria-label={`${site.name} — back to top`}
        >
          {site.initials}
        </a>
        <nav className={`nav-links${menuOpen ? " open" : ""} z-[100] `} id="navLinks" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-nav
              className={active === link.href.slice(1) ? "active" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Let&apos;s talk
        </a>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={active === link.href.slice(1) ? "active" : undefined}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.06 + i * 0.04 }}
                >
                  <span className="mobile-link-label">{link.label}</span>
                  <span className="mobile-link-arrow" aria-hidden="true">→</span>
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <a className="mobile-menu-cta" href="#contact" onClick={closeMenu}>
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
