import Image from "next/image";
import { site } from "@/lib/site";
import { aboutFacts } from "@/lib/content";

export function Contact() {
  return (
    <section className="about-contact-section" id="contact">
      {/* Full Background Image covering the entire section */}
      <div className="about-contact-bg" aria-hidden="true">
        <Image
          src="/assets/contact-cover-image.png"
          alt=""
          fill
          className="about-contact-bg-img"
          priority
          sizes="100vw"
        />
        <div className="about-contact-bg-fade" />
      </div>

      <div className="container relative z-10">
        {/* 05 ABOUT Section Header */}
        <div className="about-sec-head">
          <div className="about-sec-left">
            <span className="about-sec-num">05</span>
            <h2 className="about-sec-title">Contact</h2>
          </div>
          <span className="about-sec-tag">WHO</span>
        </div>

        {/* Top Grid: Quote on Left, Metadata Table on Right */}
        <div className="about-content-grid">
          <div className="about-quote-col">
            <h3 className="about-quote-text font-normal!">
              I&apos;m a developer who cares about both the system and the surface: the
              architecture users never see, and the interface they feel every second.
            </h3>
          </div>

          <div className="about-facts-col">
            <div className="about-facts-table">
              {aboutFacts.map((fact) => (
                <div className="about-fact-row" key={fact.label}>
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: Left side empty for background artwork, Right side for 06 CONTACT */}
        <div className="contact-content-grid">
          <div className="contact-empty-col" aria-hidden="true" />

          <div className="contact-info-col">
         
            <h2 className="contact-main-heading">
              Have an AI product, SaaS idea, or workflow worth building?
            </h2>
            <p className="contact-main-desc">
              Send a short brief. I&apos;ll help turn it into a focused, shippable product,
              usually within a couple of days, sometimes the same one.
            </p>

            <div className="contact-actions-row">
              <a className="btn-contact-primary" href={`mailto:${site.email}`}>
                Start a conversation <span className="btn-arrow">↗</span>
              </a>
              <a
                className="btn-contact-secondary"
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 20-min intro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
