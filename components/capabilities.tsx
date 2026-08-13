import { Reveal } from "@/components/reveal";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2>Three practices that compound engineering, AI systems, and interface design.</h2>
          <span className="sec-line" aria-hidden="true" />
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} className="cap-card" delay={i * 0.1}>
              <p className="cap-num">{cap.num}</p>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
              <div className="cap-tags">
                {cap.tags.map((tag) => (
                  <span className="cap-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
