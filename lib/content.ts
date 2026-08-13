/* ------------------------------------------------------------------
 * Content data — every string here is lifted verbatim from the
 * original portfolio.html blueprint.
 * `*...*` markers render as <strong> via the <Rich> helper.
 * ------------------------------------------------------------------ */

export const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Vercel AI SDK",
  "Prisma",
  "Stripe",
  "BullMQ",
  "GitHub Actions",
  "AWS",
  "Firebase",
  "Auth0",
];

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years shipping production SaaS & AI" },
  { value: 91, label: "Lighthouse score, up from 62" },
  { value: 3, suffix: "m", label: "Deploy time, down from 15 min" },
  { value: 5, label: "Agents in one LLM pipeline" },
];

export interface TimelineEntry {
  year: string;
  text: string;
}

export const storyTimeline: TimelineEntry[] = [
  {
    year: "2020",
    text: "Started *Computer Systems Engineering*, UET Peshawar",
  },
  {
    year: "2024",
    text: "First production role — *Apptex Software Solutions*, dashboards & Stripe payments",
  },
  {
    year: "2025",
    text: "*ProductBox* — healthcare portals, real-time scheduling, AI pipelines",
  },
  {
    year: "Now",
    text: "Shipping *AI-powered products* end to end — agents, dashboards, payments",
  },
];

export interface Spec {
  dt: string;
  dd: string;
}

export interface Project {
  index: string;
  label: string;
  title: string;
  hook: string;
  description: string;
  chips: string[];
  specs: Spec[];
  href?: string;
  hrefLabel?: string;
  /** Mirrors the original `direction: rtl` layout flip */
  flipped?: boolean;
}

export const projects: Project[] = [
  {
    index: "01",
    label: "Flagship · Case study",
    title: "CafePromo AI",
    hook: "Every morning, five agents wake up and argue about coffee.",
    description:
      "An agentic AI platform that turns raw cafe and restaurant data into daily business recommendations. Multi-agent extraction, validation before any output is trusted, and fully autonomous daily operation.",
    chips: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Vercel AI SDK",
      "Groq",
      "Prisma 7",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Playwright",
    ],
    specs: [
      { dt: "Type", dd: "Agentic AI · BI platform" },
      { dt: "Input", dd: "Raw cafe & restaurant data" },
      { dt: "Pipeline", dd: "Multi-agent · validate-before-output" },
      { dt: "Automation", dd: "BullMQ workers · Redis · daily cron" },
      { dt: "Output", dd: "Autonomous daily recommendations" },
      { dt: "Status", dd: "Internal platform · case study" },
    ],
  },
  {
    index: "02",
    label: "Healthcare · Platform",
    title: "Expedient VMS",
    hook: "A vendor management system that hospitals actually depend on.",
    description:
      "A multi-role vendor management system connecting healthcare staffing agencies, their clients, and hospitals — spanning scheduling, timesheets, messaging, and document workflows.",
    chips: [
      "React",
      "Vite",
      "Turborepo",
      "Tailwind CSS",
      "Auth0",
      "Twilio",
      "React Big Calendar",
      "Chart.js",
      "Docker",
      "CI/CD",
    ],
    specs: [
      { dt: "Scope", dd: "Landing page · AI chatbot · Portals" },
      { dt: "Auth", dd: "Auth0 · JWT · role-based routing" },
      { dt: "Messaging", dd: "Twilio Conversations · in-app chat" },
      { dt: "Storage", dd: "AWS S3 · document uploads" },
      { dt: "Performance", dd: "62 → 91 Lighthouse score" },
      { dt: "Deploy", dd: "15 min → 3 min with Docker + CI/CD" },
    ],
    href: "https://expedientvms.com",
    hrefLabel: "View live",
  },
  {
    index: "03",
    label: "Service booking · Payments",
    title: "OmniConnects",
    hook: "20+ Redux slices. Zero data-sync bugs.",
    description:
      "A service-booking and order platform connecting customers with providers — with a full admin back office for services, products, orders, subscriptions, and payments.",
    chips: [
      "React 18",
      "Vite",
      "Redux Toolkit",
      "Zustand",
      "Firebase",
      "Stripe",
      "Google Maps API",
      "Tailwind CSS",
    ],
    specs: [
      { dt: "Modules", dd: "Services · orders · bookings · accounts" },
      { dt: "Payments", dd: "Checkout · subscriptions · refunds" },
      { dt: "State", dd: "20+ Redux slices · zero data-sync bugs" },
      { dt: "Maps", dd: "Google Maps location handling" },
      { dt: "Backend", dd: "Firebase Cloud Functions" },
    ],
    flipped: true,
  },
  {
    index: "04",
    label: "AI · Vehicle discovery",
    title: "MotoArena",
    hook: "Snap a photo of any car. Gemini identifies it.",
    description:
      "AI-powered vehicle discovery — identify cars by image with Gemini, searchable across six relational data models.",
    chips: [
      "Next.js 15",
      "Prisma",
      "PostgreSQL",
      "NextAuth v5",
      "Gemini 2.5 Flash",
      "Cloudinary",
    ],
    specs: [
      { dt: "Stack", dd: "Next.js 15 · Prisma · PostgreSQL" },
      { dt: "Models", dd: "6 relational data models" },
      { dt: "Auth", dd: "NextAuth v5 · Google · GitHub" },
      { dt: "AI", dd: "Gemini 2.5 Flash · image identification" },
      { dt: "Media", dd: "Cloudinary pipeline · carousel" },
    ],
    href: "https://ai-moto-arena.vercel.app",
    hrefLabel: "View live",
  },
  {
    index: "05",
    label: "Developer Q&A · AI",
    title: "DevFlow",
    hook: "Ask questions. AI suggests tags as you type.",
    description:
      "Open-source developer Q&A platform built on Next.js 15, Prisma, and PostgreSQL — featuring Google Gen AI tag suggestions, MDX rich-text editing, and reputation engine.",
    chips: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Google Gen AI",
      "NextAuth",
    ],
    specs: [
      { dt: "Type", dd: "Q&A SaaS · Open Source" },
      { dt: "Editor", dd: "MDXEditor · Code syntax highlighting" },
      { dt: "AI", dd: "Google Gen AI tag suggestions" },
      { dt: "Engine", dd: "Reputation, voting, bookmarks, search" },
    ],
    href: "https://dev-flow-prisma-k1r1.vercel.app",
    hrefLabel: "View live",
    flipped: true,
  },
  {
    index: "06",
    label: "Frontend · E-commerce",
    title: "Coffee Lot",
    hook: "Modern coffee shop experience with fluid animations.",
    description:
      "A modern coffee shop web experience designed with smooth transitions, interactive menus, and responsive design.",
    chips: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    specs: [
      { dt: "Type", dd: "Frontend Landing & Storefront" },
      { dt: "Design", dd: "Responsive · Micro-interactions" },
    ],
    href: "https://github.com/AdnanAyaz1/the-coffee-lot",
    hrefLabel: "GitHub Repo",
  },
  {
    index: "07",
    label: "Frontend · Restaurant",
    title: "Bistro Cafe Landing",
    hook: "Engaging restaurant showcase with rich motion UI.",
    description:
      "An animated restaurant landing page leveraging Next.js, Tailwind CSS, and Framer Motion for high visual engagement.",
    chips: ["Next.js", "Tailwind CSS", "Framer Motion"],
    specs: [
      { dt: "Type", dd: "Restaurant Landing Page" },
      { dt: "Motion", dd: "Framer Motion animations" },
    ],
    href: "https://github.com/AdnanAyaz1/Bistro-Caffe-landing-page",
    hrefLabel: "GitHub Repo",
    flipped: true,
  },
  {
    index: "08",
    label: "Frontend · Brand UI",
    title: "Nike Landing Page",
    hook: "Sleek product landing page built for high conversion.",
    description:
      "Modern e-commerce product landing page demonstrating responsive layout architecture, dynamic shoe selection, and subtle micro-interactions.",
    chips: ["React", "Tailwind CSS", "Responsive Design"],
    specs: [
      { dt: "Type", dd: "Product Showcase Landing" },
      { dt: "UI/UX", dd: "Responsive layout · Custom controls" },
    ],
    href: "https://github.com/AdnanAyaz1/Nike_landingPage",
    hrefLabel: "GitHub Repo",
  },
  {
    index: "09",
    label: "Backend · API",
    title: "E-commerce Backend",
    hook: "Robust API architecture with payment & cart management.",
    description:
      "Complete backend REST API powering e-commerce stores — featuring session management, cart processing, order workflows, and Stripe payment processing.",
    chips: ["Node.js", "Express", "MongoDB", "Stripe API"],
    specs: [
      { dt: "Type", dd: "Backend REST API" },
      { dt: "Payments", dd: "Stripe integration" },
      { dt: "Database", dd: "MongoDB · Mongoose schemas" },
    ],
    href: "https://github.com/AdnanAyaz1/Ecommerce_Backend",
    hrefLabel: "GitHub Repo",
    flipped: true,
  },
];

export interface ExperienceRole {
  dates: string;
  role: string;
  company: string;
  bullets: string[];
  metric: { label: string; value: string; sub: string };
}

export const experience: ExperienceRole[] = [
  {
    dates: "Jan 2025 — Present",
    role: "Full Stack Developer",
    company: "ProductBox",
    bullets: [
      "Built client and hospital portal dashboards with *React Big Calendar* for scheduling and timesheet management.",
      "Set up *Docker* environments and *GitHub Actions CI/CD* pipelines — cutting deploy time from 15 minutes to 3.",
      "Implemented *role-based routing and Auth0 integration* across client and hospital portals.",
    ],
    metric: {
      label: "Deploy time",
      value: "15m → 3m",
      sub: "Docker + GitHub Actions CI/CD",
    },
  },
  {
    dates: "2024 — Jan 2025",
    role: "Full Stack Developer",
    company: "Apptex",
    bullets: [
      "Developed the dashboard managing services, products, orders, bookings, *freelancer and business accounts*, subscriptions, and payments.",
      "Integrated *Stripe* checkout, subscriptions, and refunds via Firebase Cloud Functions — holding *99.9% uptime*.",
      "Managed *20+ Redux Toolkit slices* with zero data-sync bugs.",
    ],
    metric: {
      label: "Payment uptime",
      value: "99.9%",
      sub: "Stripe via Firebase Cloud Functions",
    },
  },
];

export interface Capability {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const capabilities: Capability[] = [
  {
    num: "— 01",
    title: "Product engineering",
    description:
      "End-to-end SaaS systems built for actual production load. Type-safe APIs, predictable data layers, and a frontend that survives real users without ceremony.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Docker"],
  },
  {
    num: "— 02",
    title: "AI workflow systems",
    description:
      "Image, text, and agent pipelines that respect latency, cost, and failure modes. The hard parts — queues, retries, observability — built in from day one.",
    tags: ["Vercel AI SDK", "OpenAI", "Google Gemini", "Groq", "BullMQ", "Redis"],
  },
  {
    num: "— 03",
    title: "Interface design",
    description:
      "Calm, opinionated product UI with restraint. Typography, hierarchy, and motion treated as engineering disciplines — not decoration applied at the end.",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Redux Toolkit", "Zustand"],
  },
];

export interface ApproachStep {
  num: string;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    num: "— Step 01",
    title: "Understand the business goal",
    description:
      "Before any UI or schema. What does this product change for the people using it, and how do we know it worked?",
  },
  {
    num: "— Step 02",
    title: "Design the smallest useful product",
    description:
      "The shortest path between a real user and a real outcome. Everything else is deferred until the core is honest.",
  },
  {
    num: "— Step 03",
    title: "Build with production architecture",
    description:
      "Type-safe from edge to database. Observability, retries, and migrations as first-class — not bolted on under pressure.",
  },
  {
    num: "— Step 04",
    title: "Refine until it feels effortless",
    description:
      "The last 20% is where products stop feeling like demos. Latency, copy, motion, edge cases — sanded down until they disappear.",
  },
];

export interface StackPane {
  title: string;
  items: { name: string; tag: string }[];
}

export const stackPanes: StackPane[] = [
  {
    title: "Application",
    items: [
      { name: "Next.js", tag: "framework" },
      { name: "TypeScript", tag: "language" },
      { name: "React 19", tag: "ui" },
      { name: "Tailwind CSS", tag: "styling" },
      { name: "Shadcn UI", tag: "primitives" },
    ],
  },
  {
    title: "Server & data",
    items: [
      { name: "Node.js", tag: "runtime" },
      { name: "PostgreSQL", tag: "database" },
      { name: "Prisma ORM", tag: "data" },
      { name: "Redis", tag: "cache" },
      { name: "Docker", tag: "deploy" },
    ],
  },
  {
    title: "AI & workflows",
    items: [
      { name: "Vercel AI SDK", tag: "orchestration" },
      { name: "OpenAI / Gemini", tag: "models" },
      { name: "Groq", tag: "inference" },
      { name: "BullMQ", tag: "queues" },
    ],
  },
  {
    title: "Infra",
    items: [
      { name: "GitHub Actions", tag: "ci/cd" },
      { name: "AWS", tag: "cloud" },
      { name: "Stripe", tag: "payments" },
      { name: "Auth0", tag: "auth" },
    ],
  },
];

export interface AboutFact {
  label: string;
  value: string;
}

export const aboutFacts: AboutFact[] = [
  { label: "BASED", value: "Pakistan · GMT +5" },
  { label: "PRACTICE", value: "AI-first SaaS products" },
  { label: "YEARS SHIPPING", value: "3+" },
  { label: "AVAILABILITY", value: "Selected product builds" },
  { label: "ENGAGEMENTS", value: "Fractional · Build · Advisory" },
];
