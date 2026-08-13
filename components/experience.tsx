import { Reveal } from "@/components/reveal";
import { Rich } from "@/lib/rich";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2>Experience</h2>
          <span className="sec-line" aria-hidden="true" />
        </div>

        {experience.map((role, i) => (
          <Reveal key={role.company} className="exp-row" delay={i * 0.1}>
            <div className="exp-dates">
              {role.dates}
              <br />
              <span className="exp-loc">Peshawar, PK</span>
            </div>
            <div className="exp-content">
              <h3>
                {role.role} <span className="exp-role-muted">— {role.company}</span>
              </h3>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Rich text={bullet} />
                  </li>
                ))}
              </ul>
              <div className="exp-metric">
                <span className="m-label">{role.metric.label}</span>
                <span className="m-value">{role.metric.value}</span>
                <span className="m-sub">{role.metric.sub}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
