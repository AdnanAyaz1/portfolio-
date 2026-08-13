import { HeroThemeProvider } from "@/components/hero-theme";
import { Nav } from "@/components/nav";
import { ThemeToggler } from "@/components/theme-toggler";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ManifestoTop, ManifestoArchitecture } from "@/components/manifesto";
import { Stats } from "@/components/stats";
import { Story } from "@/components/story";
import { Bridge } from "@/components/bridge";

import { Experience } from "@/components/experience";
import { Capabilities } from "@/components/capabilities";
import { Approach } from "@/components/approach";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Work from "../components/work";

export default function Home() {
  return (
    <HeroThemeProvider>
      <Nav />
      <ThemeToggler />
      <main id="top" className="overflow-hidden">
        <Hero />
        <Marquee />
        <ManifestoTop />
        <Stats />
        <Story />
        <ManifestoArchitecture />
        <Work />
        <Approach />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </HeroThemeProvider>
  );
}
