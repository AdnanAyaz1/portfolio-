import { marqueeItems } from "@/lib/content";

export function Marquee() {
  return (
    <div className="marquee-wrap" aria-label="Technologies">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
        {/* Duplicate copy creates the seamless loop; hidden from AT. */}
        {marqueeItems.map((item, i) => (
          <span className="marquee-item" key={`dup-${i}`} aria-hidden="true">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
