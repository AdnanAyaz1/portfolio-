import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top 4-Column Layout */}
        <div className="footer-top-grid">
          {/* Brand & Bio */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <span className="footer-dot" aria-hidden="true">●</span>
              <span className="footer-brand-name">{site.name}</span>
            </div>
            <p className="footer-bio">
              Independent developer building AI-first SaaS products. Available for selected engagements.
            </p>
          </div>

          {/* SITE links */}
          <div className="footer-col">
            <h4 className="footer-col-title">SITE</h4>
            <ul className="footer-nav-list">
              <li><a href="#work">Work</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          {/* CONTACT links */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-nav-list">
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href="#contact">Start a project</a></li>
            </ul>
          </div>

          {/* SOCIAL links */}
          <div className="footer-col">
            <h4 className="footer-col-title">SOCIAL</h4>
            <ul className="footer-nav-list">
              <li>
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  X / Twitter <span className="arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Status Row */}
        <div className="footer-status-row">
          <div className="footer-status-label">NOW</div>
          <div className="footer-status-info">
            <span>Q3 2026 · 2 slots</span>
            <span className="footer-status-sep">·</span>
            <span>Remote · Pakistan</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © 2026 · Designed &amp; built with care by {site.name}
          </div>
          <div className="footer-updated">
            last updated 07 / 26
          </div>
        </div>
      </div>
    </footer>
  );
}
