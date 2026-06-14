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
      {label: "Stack", value: "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper"},
    ],
    problem: {
      title: "The challenge",
      body: "Running a business means dozens of Telegram messages a day — clients asking about services, partners coordinating, errands to remember. Replying to each one personally at the right time in the right language (Uzbek, Russian, or English) while keeping track of todos and follow-ups was becoming unmanageable.",
    },
    research: {
      title: "What I did",
      bullets: [
        "Designed a three-tier memory system (conversation history, persona profiles, long-term facts) backed by Cloudflare KV, giving each contact persistent context at zero database cost.",
        "Implemented an AI model fallback chain across 5 Gemini models with automatic 24-hour cooldown tracking to gracefully handle free-tier quota limits, with a secondary Groq fallback for background analysis tasks.",
        "Added automatic language detection — replies in Uzbek, Russian, or English matching the sender's language using regex heuristics with no external NLP dependency.",
        "Built an intent classifier and confidence scorer — the classifier runs before any AI call to detect urgency, greetings, price inquiries, and complaints; the scorer evaluates each AI response and falls back to human-like clarifiers when confidence is low.",
        "Integrated a lightweight task engine with AI-powered natural language time parsing (\"remind me tomorrow at 3\"), daily morning briefings, and overdue reminders via cron triggers — all parsed by Gemini into structured task objects.",
        "Wired up live web search (Serper.dev) so the bot can answer questions about weather, news, and real-time information.",
        "Added a Groq-powered brain analysis system that runs in the background after every 4th message, extracting conversation summaries, new facts, intent shifts, and sentiment changes — feeding insights back into future replies for continuity.",
        "Built a full web dashboard with HTTP Basic Auth to monitor conversations, configure AI models, view usage stats, and tweak runtime settings without redeploying.",
        "Designed a human-like reply timing system — new contacts get a delayed first response, slow repliers are matched in cadence, and urgent messages bypass the queue entirely.",
        "Deployed on Cloudflare Workers for low latency, with an Express-based local dev fallback for development.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "The bot handles dozens of daily conversations autonomously — responding naturally in three languages with appropriate tone, context, and timing.",
        "Task management with AI-powered time parsing means \"remind me tomorrow at 3\" just works, with automatic morning briefings so nothing slips.",
        "Zero infrastructure cost — Cloudflare Workers free tier + Gemini free tier + KV free tier keep the whole system running for $0/month.",
        "~6,900 lines of TypeScript, four runtime dependencies (grammY, Gemini SDK, Express, dotenv), running entirely at the edge with no servers to manage.",
      ],
    },
    images: [
      { src: "/images/projects/3d-stickle-robot-assistant-device-with-smiling-pixel-face-and-control-knobs.png", alt: "Telegram Business API integration — the bot intercepts incoming business messages and replies as the owner with AI-generated responses.", caption: "Telegram Business API integration — the bot intercepts incoming business messages and replies as the owner with AI-generated responses that match the sender's language and tone." },
      { src: "/images/projects/3d-stickle-retro-tablet-with-pixel-ai-chatbot-1.png", alt: "Three-tier memory system — the bot keeps conversation history, persona profiles, and long-term facts per contact using Cloudflare KV.", caption: "Three-tier memory system — the bot keeps conversation history, persona profiles, and long-term facts per contact using Cloudflare KV." },
    ],
    cta: {label: "View source", href: "https://github.com/bekzodturgunoff/personal-assistant"},
  },
  caseStudy: {
    badge: "Case Study",
    title: "Octopos Landing Page",
    subtitle: "Turning a complex restaurant management platform into a clear, conversion-focused product experience.",
    meta: [
      {label: "Client", value: "Octopos"},
      {label: "Role", value: "Frontend Engineer · Product Implementation"},
      {label: "Timeline", value: "4 weeks · 2026"},
      {label: "Stack", value: "Astro, Tailwind CSS, Resend"},
    ],
    problem: {
      title: "The challenge",
      body: "Octopos had a powerful multi-app ecosystem (Dash, POS, Kitchen), but the product value was not clearly communicated through the existing landing page. The site lacked structure, modern UX flow, and a strong onboarding path for new users.",
    },
    research: {
      title: "What I did",
      bullets: [
        "Implemented the full landing page based on a design provided by a senior developer/designer, translating it into a responsive, production-ready website.",
        "Built the entire frontend from scratch using Astro and Tailwind, ensuring pixel-accurate implementation across mobile and desktop.",
        "Developed product mockups and visual sections to clearly explain how Dash, POS, and Kitchen work together as a unified system.",
        "Implemented onboarding and trial signup flow to capture leads and grant access to the platform.",
        "Connected backend services for user onboarding and automated email handling via Resend.",
        "Ensured performance optimization, mobile responsiveness, and SEO structure.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "Delivered a fast, modern SaaS landing page that improved clarity of the product ecosystem and strengthened user understanding of Octopos.",
        "Created a smooth trial onboarding flow that reduced friction for new users trying the platform.",
        "Shipped the complete product within 4 weeks in collaboration with the product and engineering team.",
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
    title: "Octopos apps",
    subtitle: "A suite of PWA-based POS, kitchen display, and management dashboard applications for restaurants and retail businesses.",
    meta: [
      {label: "Client", value: "Octopos"},
      {label: "Role", value: "Product Designer · Software Engineer"},
      {label: "Timeline", value: "2026"},
      {label: "Stack", value: "TypeScript, React 18/19, Vite, TanStack Router, TanStack Query, TanStack React DB, Zustand, Tailwind CSS v4, Go, SQLite, NATS"},
    ],
    problem: {
      title: "My role",
      body: "As a Frontend Developer, I worked on the POS, Kitchen Display System, and Dashboard applications. My responsibilities included integrating Go-based APIs, implementing new features, developing user interfaces that matched the existing design system, and collaborating with backend developers to deliver business requirements. I contributed to improving order management workflows, customer management features, and operational tools used by restaurant staff and managers.",
    },
    research: {
      title: "What I built",
      bullets: [
        "Integrated frontend applications with Go-based REST APIs using Swagger/OpenAPI documentation.",
        "Developed and maintained features across Point-of-Sale (POS), Kitchen Display System (KDS), and Dashboard modules in a collaborative team environment.",
        "POS: implemented ordering workflows, customer lookup and creation, multi-fulfillment support (dine-in, takeaway, delivery), and various UI/business logic improvements.",
        "Kitchen Display System: developed and enhanced live order management features, including ticket lifecycle workflows, fulfillment indicators, filtering, and real-time operational interfaces.",
        "Dashboard: implemented new business management features including order creation directly from the dashboard and customer management functionality.",
        "Built frontend features based on backend requirements, connected new API endpoints, handled data synchronization, and resolved integration issues.",
        "Maintained design consistency across newly developed features, ensuring they matched the existing product's UI/UX standards and were seamlessly integrated into the application.",
        "Collaborated closely with backend and frontend developers during feature development, testing, and deployment.",
        "Debugged production issues, improved application stability, and enhanced user experience across multiple modules.",
        "Worked with an offline-first POS architecture utilizing TanStack React DB and WASQLite, integrating frontend functionality with offline transaction workflows and synchronization mechanisms.",
      ],
    },
    design: {
      title: "Results",
      bullets: [
        "Three production PWAs shipped simultaneously — POS terminal, Kitchen Display, and Manager Dashboard — all sharing the same Go/SQLite/NATS backend.",
        "Seamless order flow: server takes order on POS → kitchen sees it within seconds on KDS (3-second polling) → manager tracks everything on dashboard.",
        "Offline resilience means zero downtime during internet outages — orders queue locally via WASQLite and sync when back online with automatic conflict resolution.",
      ],
    },
    images: [
      { src: "/images/projects/octopos_apps/dash_1.png", alt: "Octopos dashboard — revenue charts and KPIs overview", caption: "Manager dashboard showing daily revenue, active orders, and key metrics at a glance." },
      { src: "/images/projects/octopos_apps/dash_2.png", alt: "Octopos dashboard — order list and detail views", caption: "Order management view with real-time status updates across all tables." },
      { src: "/images/projects/octopos_apps/dash_3.png", alt: "Octopos dashboard — inventory tracking and purchase orders", caption: "Inventory tracking with stock alerts, purchase orders, and menu management." },
      { src: "/images/projects/octopos_apps/pos_1.png", alt: "Octopos POS — hierarchical catalog browsing and cart management", caption: "POS terminal with menu categories, item selection, and active cart." },
      { src: "/images/projects/octopos_apps/pos_2.png", alt: "Octopos POS — payment processing with split payments", caption: "Payment screen with cash, card, and split payment options with auto-calculated totals." },
      { src: "/images/projects/octopos_apps/pos_3.png", alt: "Octopos POS — floor plan with table management", caption: "Visual floor plan view with table management, customer lookup, and order assignment." },
      { src: "/images/projects/octopos_apps/kitchen_1.png", alt: "Octopos Kitchen Display — masonry grid of live order tickets", caption: "Kitchen Display System showing live order tickets grouped by station with shake animation for new items and fulfillment badges." },
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
