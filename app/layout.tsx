import type { Metadata } from "next";
import { Outfit, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { CustomCursor } from "@/components/cursor";
import { SmoothScroll } from "@/components/smooth-scroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Full Stack Engineer & AI Systems`,
  description:
    "Full Stack Engineer building production SaaS and AI-powered platforms — multi-agent pipelines, client portals, and payment systems built end to end.",
  keywords: [
    "Full Stack Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Multi-agent pipelines",
    "SaaS",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Full Stack Engineer & AI Systems`,
    description:
      "Full Stack Engineer building production SaaS and AI-powered platforms — multi-agent pipelines, client portals, and payment systems built end to end.",
    type: "website",
    locale: "en_US",
    siteName: `${site.firstName} · ${site.role}`,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Full Stack Engineer & AI Systems`,
    description:
      "Production SaaS and AI platforms — multi-agent pipelines, client portals, and payment systems built end to end.",
  },
  metadataBase: new URL(site.url),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>
          <CustomCursor />
          <div className="grain" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
