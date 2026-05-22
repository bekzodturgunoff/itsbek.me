import type {I18n} from "./types";

const en: I18n = {
  nav: {
    links: {
      about: "About",
      skills: "Skills",
      caseStudy: "Case Study",
      work: "Work",
      contact: "Contact",
      resume: "Resume",
    },
  },
  hero: {
    name: "itsbek.me",
    titleTop: "Software Engineer",
    titleBottom: "focused on User Experience",
    description: `Software engineer with 4+ years building responsive, accessible products in React and Astro. I ship fast, reliable interfaces, collaborate across design and backend, and work comfortably in JavaScript/TypeScript, Python, and C-level problem solving.`,
    location: "South Korea, Seoul",
    availability: "Open for new projects",
    timezoneLabel: "KST (GMT +9)",
    buttons: {
      contact: "Contact Me",
      viewWork: "View Work",
      viewCaseStudy: "View Case Study",
    },
  },
  about: {
    intro: `I’m a software engineer who blends product thinking with frontend craft. I focus on performance, accessibility, and clear communication so every release is smooth, measurable, and genuinely helpful for users. I’m currently studying Computer Information Security at Sejong University, bringing a security-minded lens to everything I ship.`,
    basedIn: "Based in South Korea, Seoul",
    languagesLine: "Languages: English (primary), Russian, Korean.",
  },
  contact: {
    heading: `Let's Connect`,
    intro: `Want to build something cool, fix a tricky bug, or just talk ideas? Message me anytime — I’m around.`,
    availability: "Replies within 24h (Seoul).",
    ctas: {
      call: "Call Me",
      email: "Send an Email",
      telegram: "Message on Telegram",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "What's on your mind?",
      submit: "Send Message",
    },
  },
  projects: {
    selectedWork: "Selected Work",
  },
  bronUzCaseStudy: {
    badge: "Case Study",
    title: "BronUz — Venue Reservation Platform",
    subtitle:
      "Designing and shipping Uzbekistan's first full-stack reservation platform in 3 days.",
    meta: [
      {label: "Client", value: "Personal project"},
      {label: "Role", value: "Full-Stack Engineer · Product Designer"},
      {label: "Timeline", value: "3 days · 2026"},
      {
        label: "Stack",
        value:
          "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel",
      },
    ],
    problem: {
      title: "The challenge",
      body: "Uzbekistan has no unified platform where users can discover and book local venues — cafes, restaurants, football pitches, gaming clubs, barbershops, gyms, coworking spaces, and more. Businesses manage bookings manually via phone calls and WhatsApp. Users have no way to see real-time availability, read verified reviews, or confirm a booking without calling. The goal was to build the platform that solves this entirely — full-stack web app, business owner tools, and a complete admin panel — all from a single Supabase backend, in 3 days.",
    },
    research: {
      title: "What I built",
      bullets: [
        "Designed and built the complete full-stack architecture from scratch: React + Vite frontend, Supabase backend with 13 database tables, row-level security policies, and Edge Functions",
        "Built 15+ pages including venue discovery with Leaflet map search, real-time slot booking, and URL-synced shareable search filters across 25+ venue categories",
        "Business owner dashboard with revenue analytics, booking calendar, slot availability management, staff management, promo code creation, and recharts-powered charts",
        "Full admin panel with venue approval workflow (approve/reject), user management with role assignment, platform-wide analytics, and SECURITY DEFINER RPC functions so admins can never directly edit owner data",
        "Integrated a Telegram bot with webhook-based booking confirmations, 24h automated reminders, and deep link user verification via Supabase Edge Functions + Ai chatting for customer support",
        "Loyalty points system (earn per booking, redeem as discounts), waitlist for fully-booked slots, promo codes, group bookings, staff selection, and per-venue cancellation policies",
        "Deployed as a PWA with Workbox offline caching, install prompt with iOS detection, and automated booking reminder cron job via Supabase Edge Functions",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "Live at bronuz.vercel.app with full auth, real venue data, and end-to-end booking flow in production",
        "Three fully separated user roles — customer, business owner, admin — each with their own protected dashboard and capabilities",
        "Entire platform — from blank folder to deployed full-stack product — shipped in 3 days",
      ],
    },
    images: [
      {
        src: "/images/projects/bronuz_homepage.png",
        alt: "BronUz homepage — hero with search bar and venue category pills",
        caption:
          "BronUz homepage — hero with search bar and venue category pills",
      },
      {
        src: "/images/projects/bronuz_homepage_2.png",
        alt: "BronUz homepage — search results with map and venue cards",
        caption:
          "BronUz homepage — search results with map and venue cards",
      },
      {
        src: "/images/projects/bronuz_venue.png",
        alt: "BronUz venue detail — photo gallery, slot picker, and booking sidebar",
        caption:
          "BronUz venue detail — photo gallery, slot picker, and booking sidebar",
      },
      {
        src: "/images/projects/bronuz_business.png",
        alt: "BronUz business dashboard — revenue analytics and today's bookings",
        caption:
          "BronUz business dashboard — revenue analytics and today's bookings",
      },
      {
        src: "/images/projects/bronuz_business_2.png",
        alt: "BronUz business dashboard — slot management and calendar",
        caption:
          "BronUz business dashboard — slot management and calendar",
      },
      {
        src: "/images/projects/bronuz_admin.png",
        alt: "BronUz admin panel — venue approvals and platform analytics",
        caption: "BronUz admin panel — venue approvals and platform analytics",
      },
    ],
    cta: {label: "Visit live site", href: "https://bronuz.vercel.app"},
  },
  caseStudy: {
    badge: "Case Study",
    title: "Octopos Landing Page",
    subtitle:
      "Turning a complex knowledge platform into a high-converting launch in four weeks.",
    meta: [
      {label: "Client", value: "Octopos"},
      {label: "Role", value: "Product Designer · Software Engineer"},
      {label: "Timeline", value: "4 weeks · 2025"},
      {label: "Stack", value: "Astro, Tailwind, Vercel, Resend"},
    ],
    problem: {
      title: "The challenge",
      body: "Octopos needed a modern landing page that clearly explained its product and encouraged users to try it. The previous version looked outdated, didn’t show product value well, and wasn’t friendly on mobile.",
    },
    research: {
      title: "What I did",
      bullets: [
        "Rebuilt the entire website from zero — architecture, design, content, and implementation.",
        "Designed clear, visual product mockups to demonstrate how the tools work across devices.",
        "Implemented a simple onboarding flow to collect user info and grant instant trial access to the three main apps.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "The new site feels clean, fast, and professional, helping people grasp Octopos in seconds and motivating more visitors to try it.",
      ],
    },
    images: [
      {
        src: "/images/projects/before.png",
        alt: "Original Octopos landing page before redesign",
        caption:
          "Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.",
      },
      {
        src: "/images/projects/octopos.png",
        alt: "Screenshot of the Octopos landing page",
        caption:
          "High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.",
      },
    ],
    cta: {label: "Visit live site", href: "https://octopos.uz"},
  },
  skills: {
    title: "What I Work With",
    groups: [
      {
        title: "Core",
        items: [
          "React",
          "Astro",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Tailwind",
          "Sass",
          "HTML/CSS",
          "Supabase",
          "PostgreSQL",
        ],
      },
      {title: "Systems", items: ["C", "Assembly", "Python"]},
      {
        title: "Tooling",
        items: [
          "Git",
          "GitHub Actions",
          "Testing (Jest/Vitest)",
          "CI/CD",
          "Accessibility & Performance Audits",
          "Vercel",
        ],
      },
    ],
  },
  footer: {
    reserved: "All rights reserved.",
    email: "Email",
    github: "GitHub",
    telegram: "Telegram",
    resume: "Resume",
    bandName: "itsbek.me",
    maintenance:
      "Built with love, caffeine, and a few mysterious errors. If it breaks, I probably learned something new. (Fix incoming… soonish.)",
  },
};

export default en;
