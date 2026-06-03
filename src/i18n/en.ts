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
    description: `Software engineer with 3+ years building responsive, accessible products in React and Astro. I ship fast, reliable interfaces, collaborate across design and backend, and work comfortably in JavaScript/TypeScript, Python, and C-level problem solving.`,
    location: "Uzbekistan",
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
    basedIn: "Based in Uzbekistan",
    languagesLine: "Languages: English (primary), Russian, Korean.",
  },
  contact: {
    heading: `Let's Connect`,
    intro: `Want to build something cool, fix a tricky bug, or just talk ideas? Message me anytime — I’m around.`,
    availability: "Replies within 24h.",
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
      {label: "Timeline", value: "2026"},
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
        src: "/images/projects/bronuz/bronuz_homepage_2.png",
        alt: "BronUz homepage — search results with map and venue cards",
        caption:
          "BronUz homepage — search results with map and venue cards",
      },
      {
        src: "/images/projects/bronuz/bronuz_venue.png",
        alt: "BronUz venue detail — photo gallery, slot picker, and booking sidebar",
        caption:
          "BronUz venue detail — photo gallery, slot picker, and booking sidebar",
      },
      {
        src: "/images/projects/bronuz/bronuz_business.png",
        alt: "BronUz business dashboard — revenue analytics and today's bookings",
        caption:
          "BronUz business dashboard — revenue analytics and today's bookings",
      },
      {
        src: "/images/projects/bronuz/bronuz_admin.png",
        alt: "BronUz admin panel — venue approvals and platform analytics",
        caption: "BronUz admin panel — venue approvals and platform analytics",
      },
    ],
    cta: {label: "Visit live site", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Case Study",
    title: "Personal Assistant Bot",
    subtitle: "An AI-powered Telegram impersonator that handles business messages, manages tasks, and learns about each contact — all from the edge.",
    meta: [
      {label: "Client", value: "Personal project"},
      {label: "Role", value: "Software Engineer"},
      {label: "Timeline", value: "2026"},
      {label: "Stack", value: "TypeScript, Cloudflare Workers, KV, Gemini, grammY, Serper"},
    ],
    problem: {
      title: "The challenge",
      body: "Running a business means dozens of Telegram messages a day — clients asking about services, partners coordinating, errands to remember. Replying to each one personally at the right time in the right language (Uzbek, Russian, or English) while keeping track of todos and follow-ups was becoming unmanageable.",
    },
    research: {
      title: "What I did",
      bullets: [
        "Built a Telegram bot using Telegram's Business API that intercepts incoming customer messages and replies as the business owner — without ever revealing it's an AI.",
        "Designed a three-tier memory system (conversation history, persona profiles, long-term facts) all backed by Cloudflare KV, giving each contact a persistent context without a database.",
        "Implemented an AI model fallback chain with automatic 24-hour cooldown tracking to gracefully handle Gemini's free-tier quota limits.",
        "Added automatic language detection — replies in Uzbek, Russian, or English matching the sender's language.",
        "Integrated a lightweight task engine with AI-powered natural language time parsing, daily morning briefings, and overdue reminders via cron triggers.",
        "Wired up live web search (Serper.dev) so the AI can answer questions about weather, news, prices, and real-time information.",
        "Deployed on Cloudflare Workers for low latency, with an Express-based local dev fallback.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "The bot handles dozens of daily conversations autonomously — responding naturally in three languages with appropriate tone and context.",
        "Task management with AI-powered time parsing means I can say 'remind me tomorrow at 3' and it just works, with automatic morning briefings so nothing slips.",
        "Zero infrastructure cost — Cloudflare Workers free tier + Gemini free tier + KV free tier keep the whole system running for $0/month.",
        "~1,500 lines of TypeScript, four runtime dependencies (grammY, Gemini SDK, Express, dotenv), and it runs entirely at the edge with no servers to manage.",
      ],
    },
    images: [
      { src: "/images/projects/3d-device-with-ai-assistant.webm", alt: "Telegram Business API integration — the bot intercepts incoming business messages and replies as the owner with AI-generated responses.", caption: "Telegram Business API integration — the bot intercepts incoming business messages and replies as the owner with AI-generated responses that match the sender's language and tone." },
      { src: "/images/projects/ai-assistant-on-digital-screen-smart-device.webm", alt: "Three-tier memory system — the bot keeps conversation history, persona profiles, and long-term facts per contact using Cloudflare KV.", caption: "Three-tier memory system — the bot keeps conversation history, persona profiles, and long-term facts per contact using Cloudflare KV." },
    ],
    cta: {label: "View source", href: "https://github.com/bekzodturgunoff/personal-assistant"},
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
        src: "/images/projects/octopos/octopos_before.png",
        alt: "Original Octopos landing page before redesign",
        caption:
          "Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.",
      },
      {
        src: "/images/projects/octopos/octopos.png",
        alt: "Screenshot of the Octopos landing page",
        caption:
          "High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.",
      },
    ],
    cta: {label: "Visit live site", href: "https://octopos.uz"},
  },
  octoposAppsCaseStudy: {
    badge: "Case Study",
    title: "Octopos POS — Mobile & Dashboard Apps",
    subtitle: "A suite of cross-platform POS and dashboard applications for restaurants and retail businesses.",
    meta: [
      {label: "Client", value: "Octopos"},
      {label: "Role", value: "Product Designer · Software Engineer"},
      {label: "Timeline", value: "2025"},
      {label: "Stack", value: "React Native, Expo, TypeScript, Tailwind, Supabase, PostgreSQL"},
    ],
    problem: {
      title: "The challenge",
      body: "Octopos needed a complete POS ecosystem: a reliable point-of-sale app for front-of-house staff, a kitchen display system for the back-of-house team, and a dashboard for managers to track orders, revenue, and inventory. Each app had to work seamlessly together while handling offline resilience and sub-second order sync.",
    },
    research: {
      title: "What I built",
      bullets: [
        "Point-of-Sale app with menu browsing, cart management, order modifications (add-ons, substitutions, item notes), multiple payment methods (card, cash, QR), and automatic tax/discount calculations.",
        "Kitchen Display System — real-time incoming orders grouped by station with colour-coded priority, course timing (appetiser → main → dessert), and complete/modify actions.",
        "Dashboard with real-time sales analytics, order tracking with status management, employee management, inventory tracking, shift reports, and menu management.",
        "Supabase real-time sync — orders placed on any POS terminal appear instantly on the KDS and update the dashboard — all within sub-second latency.",
        "Offline-first architecture — order queue with automatic sync when connectivity is restored, ensuring the restaurant never stops taking orders.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "Three production apps shipped simultaneously — POS terminal, Kitchen Display, and Manager Dashboard — all sharing the same Supabase backend.",
        "Seamless real-time order flow: server takes order on POS → kitchen sees it instantly on KDS → manager tracks everything on dashboard.",
        "Offline resilience means zero downtime even during internet outages — orders queue locally and sync when back online.",
      ],
    },
    images: [
      { src: "/images/projects/octopos_apps/dash_1.png", alt: "Octopos dashboard — real-time sales analytics and order overview", caption: "Manager dashboard showing daily revenue, active orders, and key metrics at a glance." },
      { src: "/images/projects/octopos_apps/dash_2.png", alt: "Octopos dashboard — order tracking and status management", caption: "Order management view with real-time status updates across all tables." },
      { src: "/images/projects/octopos_apps/dash_3.png", alt: "Octopos dashboard — inventory and menu management", caption: "Inventory tracking and menu management with stock level alerts." },
      { src: "/images/projects/octopos_apps/pos_1.png", alt: "Octopos POS — menu browsing and cart management", caption: "POS terminal with menu categories, item selection, and active cart." },
      { src: "/images/projects/octopos_apps/pos_2.png", alt: "Octopos POS — order modifications and payment", caption: "Order modification screen with add-ons, substitutions, and item notes." },
      { src: "/images/projects/octopos_apps/pos_3.png", alt: "Octopos POS — payment processing", caption: "Payment screen with card, cash, and QR payment options and auto-calculated totals." },
      { src: "/images/projects/octopos_apps/kitchen_1.png", alt: "Octopos Kitchen Display — real-time incoming orders", caption: "Kitchen Display System showing incoming orders grouped by station with priority indicators." },
    ],
    cta: {label: "Visit Octopos", href: "https://octopos.uz"},
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
          "Prompt Engineering",
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
