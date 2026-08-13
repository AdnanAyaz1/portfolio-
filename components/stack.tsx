import { Reveal } from "@/components/reveal";
import { stackPanes } from "@/lib/content";

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">06</span>
          <h2>No stack loyalty. Just the right tools, shipped.</h2>
          <span className="sec-line" aria-hidden="true" />
        </div>

        <p className="sec-lede">
          I&apos;m an open-stack developer. I don&apos;t reach for the same
          framework every time — I pick what actually fits the problem, then
          design, build, and deliver production-grade results end to end.
        </p>

        <Reveal className="stack-terminal">
          <div className="stack-titlebar">
            <div className="stack-dots" aria-hidden="true">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>
            <span className="stack-filename">adnan / stack.ts</span>
          </div>
          <div className="stack-body">
            {stackPanes.map((pane) => (
              <div className="stack-pane" key={pane.title}>
                <h4 className="stack-pane-title">{pane.title}</h4>
                {pane.items.map((item) => (
                  <div className="stack-item" key={item.name}>
                    <span className="stack-item-name">{item.name}</span>
                    <span className="stack-item-tag">{item.tag}</span>
                  </div>
                ))}
              </div>
            ))}
            <div className="stack-note">
              → chosen per project, never by default
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
