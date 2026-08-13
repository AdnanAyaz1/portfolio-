import type { ReactNode } from "react";

/**
 * Rich — renders `*emphasized*` markers inside plain strings as <strong>.
 * Keeps content data clean and type-safe while preserving the original
 * HTML's inline emphasis.
 */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <strong key={i}>{part.slice(1, -1)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}
