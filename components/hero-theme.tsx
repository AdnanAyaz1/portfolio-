"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

export type HeroMode = "day" | "night";

interface HeroThemeValue {
  mode: HeroMode;
  toggle: () => void;
}

const HeroThemeContext = createContext<HeroThemeValue>({
  mode: "day",
  toggle: () => {},
});

export function HeroThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<HeroMode>("day");
  const toggle = useCallback(
    () => setMode((m) => (m === "day" ? "night" : "day")),
    [],
  );

  return (
    <HeroThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </HeroThemeContext.Provider>
  );
}

export function useHeroTheme() {
  return useContext(HeroThemeContext);
}
