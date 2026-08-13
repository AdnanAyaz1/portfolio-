import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

/* ─── Data ──────────────────────────────────────────────────────────────── */

type Feature = { title: string; description: string };
type Stat = { value: string; label: string; sub: string };
type ProblemSolution = { title: string; description: string };

type CaseStudy = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  type: string;
  liveUrl: string;
  problem: ProblemSolution;
  solution: ProblemSolution;
  techStack: string[];
  features: Feature[];
  contributions: string[];
  results: Stat[];
};

const caseStudies: Record<string, CaseStudy> = {
  "cafepromo-ai": {
    label: "Flagship · Case study",
    title: "CafePromo AI",
    subtitle: "AI-Powered Business Intelligence for Cafes",
    description:
      "A SaaS platform that uses 5 specialized AI agents to analyze weather, competitors, and menu data — delivering daily pricing and promotion recommendations that maximize revenue for cafe owners.",
    year: "2025",
    role: "Full Stack Developer",
    type: "AI SaaS",
    liveUrl: "https://multi-agent-cafe-ai.vercel.app/",
    problem: {
      title: "Cafe owners make pricing decisions on gut feeling.",
      description:
        "Small cafe businesses lose revenue by not adapting to weather changes, ignoring competitor pricing, and making manual menu adjustments. Existing tools are either too complex or don't leverage AI for intelligent, automated decision-making.",
    },
    solution: {
      title: "Multi-agent AI that thinks like a business strategist.",
      description:
        "Five specialized AI agents collaborate to analyze weather forecasts, scrape competitor data, evaluate menu performance, and synthesize actionable daily recommendations — with an approval system that keeps humans in control of significant changes.",
    },
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Groq LLMs",
      "Redis",
      "BullMQ",
      "Playwright",
      "NextAuth",
      "Shadcn UI",
    ],
    features: [
      {
        title: "Weather Intelligence",
        description:
          "Real-time weather API integration automatically adjusts pricing strategies based on conditions. Hot days trigger cold drink promotions; rainy mornings push hot beverages.",
      },
      {
        title: "Competitor Tracking",
        description:
          "AI-powered web scraping with Playwright and Crawlee monitors competitor menus and pricing daily, giving you a strategic edge without manual research.",
      },
      {
        title: "5-Agent AI Pipeline",
        description:
          "Menu Analyst, Weather Analyst, Strategist, Critic, and Synthesizer agents collaborate using Groq LLMs to produce actionable daily business recommendations.",
      },
      {
        title: "Smart Decision Engine",
        description:
          "Automated approval system handles small pricing changes autonomously while flagging significant adjustments for human review, keeping you in control.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Real-time dashboard with weather cards, competitor insights, menu performance metrics, and AI-generated recommendations with confidence scores.",
      },
      {
        title: "Background Job Queue",
        description:
          "BullMQ-powered job queue handles daily analysis pipelines, competitor scraping, and data processing asynchronously with Redis-backed reliability.",
      },
    ],
    contributions: [
      "Architected a multi-agent AI pipeline with 5 specialized LLM agents (Menu Analyst, Weather Analyst, Strategist, Critic, Synthesizer) using Groq models for daily business intelligence.",
      "Built real-time weather integration that triggers automatic pricing strategy adjustments based on weather conditions, time of day, and seasonal patterns.",
      "Implemented AI-powered competitor scraping with Playwright and Crawlee to monitor competitor menus, pricing, and promotions daily.",
      "Designed the Smart Decision Engine with tiered approval workflows: auto-approve small changes, queue significant adjustments for human review.",
      "Created a full dashboard with weather cards, competitor insights, menu performance analytics, and confidence-scored AI recommendations.",
      "Set up BullMQ job queue with Redis for async processing of daily analysis pipelines, competitor scraping, and data synchronization.",
      "Integrated Stripe for subscription billing with tiered pricing plans and checkout flow.",
      "Implemented secure auth with NextAuth, Prisma adapter, and PostgreSQL for multi-tenant data isolation.",
    ],
    results: [
      {
        value: "5",
        label: "AI Agents",
        sub: "Menu, Weather, Strategist, Critic, Synthesizer",
      },
      {
        value: "3",
        label: "Data Sources",
        sub: "Weather API, Competitor Sites, Menu Data",
      },
      {
        value: "24/7",
        label: "Monitoring",
        sub: "Automated daily analysis pipelines",
      },
      {
        value: "10x",
        label: "Faster",
        sub: "Decisions vs manual research",
      },
    ],
  },

  "expedient-vms": {
    label: "Healthcare · Platform",
    title: "Expedient VMS",
    subtitle: "Multi-Role Vendor Management System",
    description:
      "A monorepo that powers four role-specific web apps (admin, client, candidate, vendor) on top of one Express + MySQL backend, giving staffing agencies a single source of truth for orders, candidates, timesheets, and documents.",
    year: "2025",
    role: "Full Stack Developer",
    type: "Monorepo / 4 apps",
    liveUrl: "https://client.expedientvms.com/auth",
    problem: {
      title: "Staffing agencies run on stitched-together tools.",
      description:
        "Recruiting teams juggle separate portals for clients, candidates, vendors, and timesheets — each with its own login, data model, and reporting. Orders fall through the cracks, timesheet approvals lag, and there is no single view of the business.",
    },
    solution: {
      title: "One monorepo. Four role-based apps. One backend.",
      description:
        "A Turbo-repo monorepo where four role-specific React apps (admin, client, candidate, vendor) share one design system and consume a single Express + MySQL API — keeping data consistent and shipping faster.",
    },
    techStack: [
      "React",
      "Vite",
      "Turbo Repo",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Auth0",
      "Twilio",
      "AWS",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Chart.js",
    ],
    features: [
      {
        title: "Multi-Role Apps",
        description:
          "Four role-specific applications (admin, client, candidate, vendor) sharing a single design system and code base via the monorepo.",
      },
      {
        title: "Orders & Timesheets",
        description:
          "End-to-end order lifecycle, react-big-calendar scheduling, and timesheet approvals with server-side pagination via TanStack Table.",
      },
      {
        title: "Twilio Messaging",
        description:
          "In-app conversations between clients, vendors, and candidates powered by Twilio Conversations with read state and notifications.",
      },
      {
        title: "AWS File Storage",
        description:
          "Secure resume, contract, and document uploads on AWS S3 with signed URLs, SES email pipelines, and SQS-backed async jobs.",
      },
    ],
    contributions: [
      "Built the shared monorepo packages (ui, hooks, constants, enums, utils) consumed by all four front-end apps and the Express server.",
      "Architected the candidate and client apps with role-based routing, Auth0 integration, and a single Twilio Paste design system.",
      "Implemented the order management module with TanStack Table server-side pagination, filters, and bulk actions.",
      "Built the timesheet workflow on top of react-big-calendar with approval states, audit trail, and Chart.js reporting.",
      "Wired up AWS S3 for resume and contract uploads with pre-signed URLs, plus SES email templates and SQS async jobs on the server.",
      "Set up the Turbo pipeline so all four apps and the server build, lint, and deploy in parallel from a single command.",
    ],
    results: [
      {
        value: "4",
        label: "Role-based apps",
        sub: "Admin, Client, Candidate, Vendor",
      },
      {
        value: "1",
        label: "Monorepo",
        sub: "Shared packages across web + server",
      },
      {
        value: "100%",
        label: "Reused UI",
        sub: "One design system, zero duplication",
      },
      {
        value: "3",
        label: "Live portals",
        sub: "Client, Candidate, Vendor",
      },
    ],
  },

  omniconnects: {
    label: "Service booking · Payments",
    title: "OmniConnects",
    subtitle: "SaaS Booking & Management for Salons",
    description:
      "A multi-tenant platform that lets independent salons and barbershops accept online bookings, run their day-to-day operations, and grow with built-in payments, scheduling, and analytics — all in one app.",
    year: "2025",
    role: "Full Stack Developer",
    type: "Multi-tenant SaaS",
    liveUrl: "https://www.omniconnects.com",
    problem: {
      title: "Independent salons still run on paper and phone calls.",
      description:
        "Small businesses lose bookings to missed calls, juggle staff schedules in spreadsheets, and have no view of revenue, retention, or staff performance. The few tools that exist are clunky, single-role, and built for chains — not the local owner.",
    },
    solution: {
      title: "An all-in-one app with role-based workflows.",
      description:
        "Omni-Connects gives every stakeholder — customer, employee, manager, and admin — their own tailored dashboard. Online booking, payments, scheduling, location discovery, and analytics live under a single, real-time platform powered by PostgreSQL and Stripe.",
    },
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Firebase",
      "PostgreSQL",
      "Stripe",
      "Google Maps",
      "Framer Motion",
      "React Hook Form",
    ],
    features: [
      {
        title: "Login & Authentication",
        description:
          "Secure Firebase Auth login with role-based routing. Admins and clients each land on their own tailored dashboard after authentication.",
      },
      {
        title: "Dashboard & Sidebar Navigation",
        description:
          "A unified admin dashboard with sidebar navigation giving instant access to bookings, products, services, employees, and analytics. Real-time revenue and booking stats at a glance.",
      },
      {
        title: "Booking Management",
        description:
          "Full booking lifecycle — create, view, edit, and cancel appointments. Color-coded calendar with week/day views, employee filtering, and status tracking (Pending, Done, Cancelled).",
      },
      {
        title: "Invoice & Payment Processing",
        description:
          "Stripe-powered checkout with automated fee calculation (sales tax, Omni fee, card processing). Webhook-verified payments, invoice generation, and refund handling.",
      },
      {
        title: "Product & Inventory Management",
        description:
          "Complete product CRUD with table/grid views, search, bulk selection, and Cloudinary image uploads. Track stock levels and manage product details from a single panel.",
      },
      {
        title: "Service Management",
        description:
          "Create and manage services with duration, pricing, and type (At Shop / At Home). Assign services to specific employees and control availability per staff member.",
      },
      {
        title: "Customer Checkout / Cart",
        description:
          "Customer-facing checkout with service selection, date/time picking, address input for at-home bookings, and order summary with tax/fee breakdown before Stripe payment.",
      },
      {
        title: "Task / Todo Scheduling Calendar",
        description:
          "Interactive calendar for scheduling staff tasks, tracking attendance, and managing off-days. Employees see their own schedule while admins get a full team overview.",
      },
    ],
    contributions: [
      "Built the full admin dashboard with sidebar navigation, role-based routing, and real-time stats using React + Vite with Redux Toolkit and Zustand.",
      "Implemented the booking management system with react-big-calendar (week/day views), color-coded events, employee filtering, and status lifecycle (Pending → Done → Cancelled).",
      "Integrated Stripe Checkout with automated fee breakdown (sales tax, platform fee, card processing), webhook verification, invoice generation, and refund handling.",
      "Designed the product & inventory management layer with CRUD, table/grid views, bulk actions, Cloudinary image uploads, and real-time quantity updates.",
      "Built the service management system allowing admins to create services with duration, pricing, type (At Shop / At Home), and per-employee assignment.",
      "Developed the customer checkout flow with service selection, date/time picking, address input for at-home bookings, and order summary with tax/fee calculation.",
      "Created the task/todo scheduling calendar for staff management with attendance tracking, off-day configuration, and team-wide overview for admins.",
      "Architected Firebase Cloud Functions backend handling payment processing, webhook verification, and real-time Firestore sync across all dashboards.",
    ],
    results: [
      {
        value: "6",
        label: "Core modules",
        sub: "Bookings, Products, Orders, Services, Employees, Calendar",
      },
      {
        value: "2",
        label: "User roles",
        sub: "Admin & Client",
      },
      {
        value: "100%",
        label: "Real-time sync",
        sub: "Bookings, inventory, and calendar via Firestore",
      },
      {
        value: "Live",
        label: "In production",
        sub: "omniconnects.com",
      },
    ],
  },

  motoarena: {
    label: "AI · Vehicle discovery",
    title: "MotoArena",
    subtitle: "AI-Powered Car Dealership Platform",
    description:
      "A modern dealership management platform on Next.js 15 that lets dealers manage inventory, customers request test drives, and admins run the show — with Cloudinary image pipelines and Google Gen AI baked in.",
    year: "2023",
    role: "Full Stack Developer",
    type: "Dealership SaaS",
    liveUrl: "https://ai-moto-arena.vercel.app",
    problem: {
      title: "Dealerships still juggle spreadsheets and paper test-drive sheets.",
      description:
        "Inventory, test-drive bookings, and customer follow-ups live in separate tools — so dealers lose leads, customers bounce, and the admin team has no real-time view of what is moving on the lot.",
    },
    solution: {
      title: "One Next.js app for inventory, scheduling, and admin.",
      description:
        "A single Next.js 15 deployment with role-based route groups, Prisma + PostgreSQL on the back, Cloudinary for media, and Google Gen AI for smart features — so dealers, customers, and admins all work from the same source of truth.",
    },
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Cloudinary",
      "Google Gen AI",
      "TanStack Table",
      "React Hook Form",
      "Zod",
    ],
    features: [
      {
        title: "Car Inventory Management",
        description:
          "Dealers manage full vehicle listings with rich specs, pricing, status (available / reserved / sold), and a TanStack Table admin view with filters and sorting.",
      },
      {
        title: "Test Drive Scheduling",
        description:
          "Customers request test drives with date pickers, the dealer approves or reschedules from the admin, and both sides see real-time status updates.",
      },
      {
        title: "Cloudinary Image Pipeline",
        description:
          "Multi-image uploads per car with Cloudinary transformations, signed URLs, and an editorial featured-cars carousel on the home page.",
      },
      {
        title: "Admin Dashboard & RBAC",
        description:
          "Role-based admin dashboard for inventory, reservations, saved cars, and user management — all behind NextAuth.js route guards.",
      },
    ],
    contributions: [
      "Architected the app on Next.js 15 with the App Router, route groups for (auth), (root), and (admin), and shared server actions for mutations.",
      "Modelled the Prisma schema for users, dealerships, cars, reservations, saved-cars, and roles, with PostgreSQL as the source of truth.",
      "Wired NextAuth.js with credentials + bcrypt, role-based session callbacks, and route-level guards for the admin dashboard.",
      "Built the car inventory module with TanStack Table (sort, filter, paginate) and a multi-step create/edit form with Zod + React Hook Form.",
      "Implemented the test-drive scheduler with react-day-picker, dealer approval flow, and toast-based real-time status updates.",
      "Integrated Cloudinary via next-cloudinary for image uploads, on-the-fly transformations, and the featured-cars homepage carousel.",
    ],
    results: [
      {
        value: "4",
        label: "Route groups",
        sub: "auth, root, admin, api",
      },
      {
        value: "100%",
        label: "Type-safe",
        sub: "TypeScript + Zod end-to-end",
      },
      {
        value: "RBAC",
        label: "Built-in",
        sub: "Customer, Dealer, Admin roles",
      },
      {
        value: "Live",
        label: "In production",
        sub: "ai-moto-arena.vercel.app",
      },
    ],
  },

  devflow: {
    label: "Developer Q&A · AI",
    title: "DevFlow",
    subtitle: "A Q&A Platform for Developers",
    description:
      "A modern Stack Overflow-style Q&A platform built on Next.js 15, Prisma, and PostgreSQL — with Google Gen AI suggesting tags as you type, code-aware rich text, and a reputation system that rewards quality answers.",
    year: "2024",
    role: "Full Stack Developer",
    type: "Q&A SaaS",
    liveUrl: "https://dev-flow-prisma-k1r1.vercel.app",
    problem: {
      title: "Developer Q&A still feels heavy and slow.",
      description:
        "Existing platforms have bloated UX, weak code rendering, and no help with tagging or formatting when posting — so the first-time experience drops off and quality answers get buried.",
    },
    solution: {
      title: "A fast, type-safe Q&A app with AI in the loop.",
      description:
        "Next.js 15 + Prisma + PostgreSQL power a single-tenant experience with rich-text + code highlighting, AI-suggested tags, reputation tied to votes, and global search with infinite scroll.",
    },
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "PostgreSQL",
      "Google Gen AI",
      "OpenAI SDK",
      "NextAuth",
      "Cloudinary",
      "React Hook Form",
      "Zod",
    ],
    features: [
      {
        title: "Auth & Authorization",
        description:
          "Google OAuth and email/password auth via NextAuth.js, with JWT sessions, password reset via Nodemailer, and route-level role guards.",
      },
      {
        title: "Q&A + Rich Text Editor",
        description:
          "Ask and answer questions with the MDX editor, code syntax highlighting via Bright, voting, view tracking, and tag-based organisation.",
      },
      {
        title: "AI Tag Suggestions",
        description:
          "Google Gen AI suggests the most relevant tags for a new question as the user types — cutting friction from the posting flow.",
      },
      {
        title: "Reputation, Bookmarks & Search",
        description:
          "Reputation system tied to votes, bookmark favourite questions, global search with filters, and infinite scroll for feeds.",
      },
    ],
    contributions: [
      "Architected the full-stack on Next.js 15 with the App Router, TypeScript, and a Shadcn-UI + Tailwind design system.",
      "Modelled the schema in Prisma and wired PostgreSQL relationships for users, questions, answers, votes, tags, and bookmarks.",
      "Implemented NextAuth.js with Google OAuth and email/password credentials, JWT sessions, and password reset via Nodemailer.",
      "Built the Q&A editor on top of MDXEditor with Bright-powered code syntax highlighting, view tracking, and vote toggling.",
      "Integrated Google Gen AI to suggest tags as the user types and OpenAI for in-app help prompts, both server-side via API routes.",
      "Shipped global search, infinite scroll, dark/light mode via next-themes, and image uploads to Cloudinary with signed URLs.",
    ],
    results: [
      {
        value: "5",
        label: "Core modules",
        sub: "Auth, Q&A, Tags, Reputation, Search",
      },
      {
        value: "100%",
        label: "Type-safe",
        sub: "TypeScript + Zod end-to-end",
      },
      {
        value: "Open",
        label: "Source",
        sub: "Full codebase on GitHub",
      },
      {
        value: "Live",
        label: "In production",
        sub: "dev-flow-prisma-k1r1.vercel.app",
      },
    ],
  },
};

const slugs = Object.keys(caseStudies);

/* ─── Static generation ─────────────────────────────────────────────────── */

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = caseStudies[slug];

  if (!cs) {
    return { title: "Not Found" };
  }

  return {
    title: `${cs.title} — Case Study | ${site.name}`,
    description: cs.description,
    openGraph: {
      title: `${cs.title} — Case Study`,
      description: cs.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${cs.title} — Case Study`,
      description: cs.description,
    },
  };
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const cs = caseStudies[slug];

  if (!cs) {
    return notFound();
  }

  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        fontFamily: "var(--font-display)",
        minHeight: "100vh",
      }}
    >
      {/* ── Back nav ─────────────────────────────────────────────────── */}
      <div className="container" style={{ paddingTop: "32px" }}>
        <Link
          href="/#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "var(--fg-muted)",
            fontFamily: "var(--font-mono)",
            transition: "color 0.2s",
            textDecoration: "none",
          }}
          className="hover:text-[var(--accent)]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: "56px", paddingBottom: "80px" }}>
        <div className="container">
          {/* Label badge */}
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              marginBottom: "20px",
              padding: "5px 12px",
              border: "1px solid rgba(245,78,0,0.25)",
              borderRadius: "4px",
              background: "rgba(245,78,0,0.06)",
            }}
          >
            {cs.label}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              margin: "0 0 20px",
              maxWidth: "900px",
            }}
          >
            {cs.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 22px)",
              fontWeight: 400,
              color: "var(--fg-dim)",
              lineHeight: 1.5,
              maxWidth: "680px",
              marginBottom: "32px",
            }}
          >
            {cs.subtitle}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              color: "var(--fg-muted)",
              lineHeight: 1.75,
              maxWidth: "640px",
              marginBottom: "40px",
            }}
          >
            {cs.description}
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              marginBottom: "40px",
              paddingBottom: "40px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {[
              { label: "Year", value: cs.year },
              { label: "Role", value: cs.role },
              { label: "Type", value: cs.type },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--fg)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Live URL button */}
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "14px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                fontFamily: "var(--font-display)",
              }}
              className="hover:bg-[var(--accent-dim)] hover:-translate-y-px"
            >
              View Live Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M6 3h5v5" />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* ── Problem / Solution ───────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Problem */}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--border)",
                  borderRadius: "12px 12px 0 0",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--fg-muted)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "20px",
                }}
              >
                Problem
              </span>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  fontFamily: "var(--font-display)",
                }}
              >
                {cs.problem.title}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--fg-dim)",
                }}
              >
                {cs.problem.description}
              </p>
            </div>

            {/* Solution */}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--accent)",
                  borderRadius: "12px 12px 0 0",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "20px",
                }}
              >
                Solution
              </span>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--fg)",
                  marginBottom: "16px",
                  fontFamily: "var(--font-display)",
                }}
              >
                {cs.solution.title}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--fg-dim)",
                }}
              >
                {cs.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <SectionHeading label="Stack" title="Technologies Used" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "40px",
            }}
          >
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-mono)",
                  color: "var(--fg-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "8px 16px",
                  background: "#fff",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <SectionHeading label="Features" title="Key Features" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {cs.features.map((feature, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                }}
                className="group hover:border-[var(--accent)]/40 transition-colors duration-300"
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(245,78,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: "10px",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "var(--fg-muted)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contributions ────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <SectionHeading label="My Work" title="Contributions" />
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: "40px 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "860px",
            }}
          >
            {cs.contributions.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(245,78,0,0.08)",
                    border: "1px solid rgba(245,78,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    marginTop: "2px",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--fg-dim)",
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "1px solid var(--border)",
          background: "rgba(245,78,0,0.025)",
        }}
      >
        <div className="container">
          <SectionHeading label="Outcomes" title="Results" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2px",
              marginTop: "48px",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "var(--border)",
            }}
          >
            {cs.results.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "40px 32px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "10px",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: "6px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--fg-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "120px",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              fontFamily: "var(--font-mono)",
              marginBottom: "24px",
            }}
          >
            See it live
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--fg)",
              maxWidth: "700px",
              margin: "0 auto 36px",
              fontFamily: "var(--font-display)",
            }}
          >
            Ready to explore {cs.title}?
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "16px 36px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                fontFamily: "var(--font-display)",
              }}
              className="hover:bg-[var(--accent-dim)] hover:-translate-y-px"
            >
              View Live Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M6 3h5v5" />
              </svg>
            </a>
            <Link
              href="/#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                fontSize: "15px",
                fontWeight: 500,
                padding: "16px 36px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "border-color 0.2s",
                fontFamily: "var(--font-display)",
              }}
              className="hover:border-[var(--fg-muted)]"
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <span
        style={{
          display: "inline-block",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontFamily: "var(--font-mono)",
          marginBottom: "12px",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          color: "var(--fg)",
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
