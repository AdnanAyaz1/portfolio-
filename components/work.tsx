"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectCard } from "@/components/project-card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "AGENTIC AI · BI PLATFORM",
    title: "CafePromo AI",
    description:
      "Multi-agent AI platform with 5 autonomous LLM agents that extract and validate cafe business intelligence daily.",
    image: "/assets/ChatGPT%20Image%20Aug%2012,%202026,%2011_41_56%20AM.png",
    tags: ["Next.js 16", "Vercel AI SDK", "Groq", "Prisma 7", "BullMQ", "PostgreSQL"],
    href: "/work/cafepromo-ai",
  },
  {
    number: "02",
    category: "HEALTHCARE · SAAS",
    title: "Expedient VMS",
    description:
      "Monorepo healthcare staffing portal cut deploy times from 15m to 3m with Docker and CI/CD automation.",
    image: "/assets/ChatGPT%20Image%20Aug%2012,%202026,%2011_43_39%20AM.png",
    tags: ["React", "Turborepo", "Auth0", "Twilio", "Docker", "CI/CD"],
    href: "/work/expedient-vms",
  },
  {
    number: "03",
    category: "SERVICE BOOKING · PAYMENTS",
    title: "OmniConnects",
    description:
      "Multi-role SaaS service booking platform with 20+ Redux slices, Stripe subscriptions, and zero data-sync bugs.",
    image: "/assets/ChatGPT%20Image%20Aug%2012,%202026,%2011_44_38%20AM.png",
    tags: ["React 18", "Redux Toolkit", "Stripe", "Firebase", "Google Maps"],
    href: "/work/omniconnects",
  },
  {
    number: "04",
    category: "AI · VEHICLE DISCOVERY",
    title: "MotoArena",
    description:
      "AI vehicle discovery engine identifying cars from images via Gemini 2.5 Flash across 6 relational data models.",
    image: "/assets/ChatGPT%20Image%20Aug%2012,%202026,%2011_46_03%20AM.png",
    tags: ["Next.js 15", "Gemini 2.5 Flash", "Prisma", "PostgreSQL", "NextAuth v5", "Cloudinary"],
    href: "/work/motoarena",
  },
  {
    number: "05",
    category: "DEVELOPER Q&A · AI",
    title: "DevFlow",
    description:
      "Developer Q&A platform featuring real-time AI tag suggestions, MDX syntax highlighting, and reputation engine.",
    image: "/assets/DEVFLOW.png",
    tags: ["Next.js 15", "TypeScript", "Google Gen AI", "Prisma", "PostgreSQL", "NextAuth"],
    href: "/work/devflow",
  },
  {
    number: "06",
    category: "FRONTEND · STOREFRONT",
    title: "Coffee Lot",
    description:
      "Modern coffee shop digital experience featuring fluid page transitions, interactive menus, and responsive design.",
    image: "/assets/coffee.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    href: "https://github.com/AdnanAyaz1/the-coffee-lot",
  },
  {
    number: "07",
    category: "FRONTEND · RESTAURANT",
    title: "Bistro Cafe Landing",
    description:
      "High-converting restaurant landing page built with custom Framer Motion variants and responsive layout design.",
    image: "/assets/bistro.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "UX Design", "Frontend"],
    href: "https://github.com/AdnanAyaz1/Bistro-Caffe-landing-page",
  },
  {
    number: "08",
    category: "FRONTEND · BRAND UI",
    title: "Nike Landing Page",
    description:
      "Sleek e-commerce product showcase landing page demonstrating dynamic shoe selectors and interactive micro-UI.",
    image: "/assets/nike.png",
    tags: ["React", "Tailwind CSS", "Component Architecture", "Micro-interactions"],
    href: "https://github.com/AdnanAyaz1/Nike_landingPage",
  },
  {
    number: "09",
    category: "BACKEND · REST API",
    title: "E-commerce Backend",
    description:
      "Production REST API backend powering e-commerce stores with session management, cart processing, and Stripe API.",
    image: "/assets/thumb2.jpg",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Stripe API", "REST API"],
    href: "https://github.com/AdnanAyaz1/Ecommerce_Backend",
  },
];

export default function HorizontalWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => track.scrollWidth - viewport.clientWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full py-20!"
    >
      <div className="container">
        <div className="flex w-full flex-col gap-10 lg:flex-row">
          {/* Left */}
          <div className="w-full lg:w-[30%]">
            <span className="work-label">Featured Work</span>

            <h2 className="work-title">
              Systems
              <br />
              I&apos;ve Built
            </h2>

            <p className="work-lede">
              A selection of AI-powered products and systems I&apos;ve designed
              and built end-to-end.
            </p>
          </div>

          {/* Right */}
          <div
            ref={viewportRef}
            className="w-full overflow-x-auto pb-4 lg:w-[70%] lg:overflow-hidden lg:pb-0"
          >
            <div
              ref={trackRef}
              className="flex w-max gap-6 pr-10 pl-1 sm:gap-10 sm:pr-40 lg:pl-0  "
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  number={project.number}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  href={project.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
