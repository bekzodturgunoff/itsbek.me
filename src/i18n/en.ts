import type {I18n} from "./types";

const en: I18n = {
  nav: {
    links: {
      about: "My Story",
      skills: "Tools",
      caseStudy: "Case Study",
      work: "Projects",
      contact: "Say Hi",
      resume: "Resume",
    },
  },
  hero: {
    name: "Bekzod Turgunov",
    headlineLine1: "I build products",
    headlineLine2: "people actually use.",
    subtextLine1: "Frontend \u00B7 Full-stack \u00B7 AI \u00B7 Cloud",
    subtextLine2: "Tashkent \u2192 Seoul. Shipping code since 2021.",
    availability: "Available for interesting work",
  },
  origin: {
    grewUp: "Raised in",
    country: "Uzbekistan.",
    studied: "Survived Seoul.",
    building: "Still shipping.",
    timeline: [
      {
        year: "2021",
        description:
          "Wrote my first line of code in Uzbekistan. Entirely self-taught, fueled by slow internet and sheer stubbornness.",
      },
      {
        year: "2023",
        description:
          "Moved to Seoul. Studied Cyber Security at Sejong University (and learned how to break things properly).",
      },
      {
        year: "Now",
        description:
          "Back in Tashkent, shipping real-world products for untapped markets that other developers overlook.",
      },
    ],
    body: "I started coding back in 2021. There was no massive \u201clearn to code\u201d hype in Uzbekistan back then \u2014 just me, an unstable Wi-Fi connection, and an annoying urge to build things. I\u2019d build something, break it completely, fix it, and repeat. I definitely learned more from those chaotic failures than any structured tutorial could ever teach me.\n\nBy 2023, I had shipped enough chaotic side projects to realize how much I still didn\u2019t know. I packed my bags for Seoul to study Cyber Security at Sejong University \u2014 not for the piece of paper, but to truly understand how systems tick under the hood. Now I\u2019m back in Tashkent, focusing on building high-performance products for markets most developers haven\u2019t even noticed yet.",
    info: "Based in Uzbekistan \u00B7 EN \u00B7 RU \u00B7 KO \u00B7 UZ \u00B7 UTC+5",
  },
  craft: {
    label: "02 — THE CRAFT",
    headline: "Technology is the material. The product is the point.",
    body1: "I think in systems. A component isn't just a UI element — it's a contract between the product and the person using it. React is how I write that contract. TypeScript is the discipline that makes night deployments boring. Boring is good in production.",
    body2: "The stack changes with the problem. Sometimes it's Go and Cloudflare Workers for an edge API. Sometimes it's a full Supabase backend with RLS. The constant is shipping fast without cutting corners. Security isn't added at the end — it's in the architecture from day one.",
  },
  about: {
    title: "Behind the code",
    body: "I’m a software engineer who looks at code through the lens of a product builder. I cut my teeth coding in Uzbekistan when finding a decent tutorial was harder than debugging the code it gave you. I then spent a few years in Seoul diving deep into system security. \n\nI speak two languages, jump across the full stack without breaking a sweat, and firmly believe that the best code is the code that actually reaches production.",
    philosophy: [
      "Production beats perfection. Code running live is worth infinitely more than flawless code sitting idle on localhost.",
      "Security isn't a feature you slap on at the end. It should be baked into the architecture from line one.",
      "Fast doesn\u2019t mean fragile. A well-designed system can handle high velocity without falling apart.",
      "Great products solve painful, real-world problems. Everything else is just expensive pixel pushing.",
    ],
  },
  ending: {
    headlineLine1: "Not trying to be the smartest",
    headlineLine2: "developer in the room.",
    headlineLine3: "Just the one who makes the whole room better.",
    body: "I'm focusing my energy on distributed systems, security-first architectures, and building meaningful platforms for overlooked markets. If that aligns with what you're spinning up next \u2014 let\u2019s chat.",
    cta: "Let\u2019s build something real.",
  },
  contact: {
    heading: "Let\u2019s talk.",
    intro: "Got a challenging project or just a quick question?",
    availability: "Usually replies before your coffee gets cold.",
    ctas: {
      email: "Email",
      telegram: "Telegram",
      phone: "Phone",
    },
    form: {
      name: "Your Name",
      namePlaceholder: "What should I call you?",
      email: "Your Email",
      emailPlaceholder: "you@example.com",
      message: "Your Message",
      messagePlaceholder: "What awesome thing are we building?",
      submit: "Send Message",
    },
  },
  projects: {
    selectedWork: "Selected Work",
  },
  bronUzCaseStudy: {
    badge: "Case Study",
    title: "BronUz \u2014 Frictionless Venue Booking",
    subtitle:
      "How I built a fully functional multi-vendor booking marketplace for Uzbekistan from a completely blank folder.",
    meta: [
      {label: "Client", value: "Personal Project (Pet Project)"},
      {label: "Role", value: "Solo Full-Stack Dev & Designer"},
      {label: "Timeline", value: "(2026)"},
      {
        label: "Stack",
        value:
          "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel",
      },
    ],
    problem: {
      title: "The Problem",
      body: "In Uzbekistan, trying to book a football pitch, a table at a cafe, or a local event space is a total logistical nightmare. You usually have to dig up random phone numbers from Instagram or exchange endless Telegram messages hoping someone replies before next week. I wanted to see if I could single-handedly solve this by building a blistering fast, end-to-end marketplace over a single long weekend. It required a seamless customer booking flow, a heavy-duty merchant dashboard for venue owners to track revenue, and a master admin control center.",
    },
    research: {
      title: "How I Built It (And Survived)",
      bullets: [
        "Database Architecture: Structured a solid Supabase backend with 13 relational tables, fully locked down with Row-Level Security (RLS) policies and custom Edge Functions for background tasks.",
        "Interactive Maps & Filters: Coded over 15 frontend pages. Hooked up Leaflet maps with dynamic URL-state synchronization, enabling users to instantly filter across 25+ categories and share exact results via a single link.",
        "Merchant Command Center: Built a dedicated dashboard for business owners featuring live analytics charts, interactive booking calendars, custom slot controls, and precise team role permissions.",
        "Secure Admin Gateway: Assembled a master control center for platform approvals, utilizing PostgreSQL SECURITY DEFINER functions to handle sensitive actions without exposing raw database tables.",
        "Telegram Webhook Pipeline: Integrated a bot that instantly pings venue owners upon a new booking, handles automated 24-hour cron reminders, and serves as an automated support channel.",
        "Granular Pricing Rules: Implemented logic for customizable loyalty rewards, real-time waitlists, and flexible cancellation windows that business owners can tweak on the fly.",
        "PWA Support: Added offline caching and native-like service worker workflows using Workbox, making it fully installable on iOS and Android.",
      ],
    },
    design: {
      title: "The Reality Check",
      bullets: [
        "It's completely production-ready and live at bronuz.vercel.app. Real authentication, real DB transactions, and live status updates.",
        "Successfully managed three completely distinct user personas (Customer, Vendor, Admin) without bloating the layout architecture.",
        "Proved that solid upfront architectural choices let you ship incredibly fast without leaving a trail of broken code.",
      ],
    },
    images: [
      {
        src: "/images/projects/bronuz/bronuz_homepage_2.webp",
        alt: "BronUz homepage showing map and search cards",
        caption:
          "The main discovery view. Keeps map coordinates and search parameters perfectly synced in the URL.",
      },
      {
        src: "/images/projects/bronuz/bronuz_venue.webp",
        alt: "BronUz venue booking screen",
        caption:
          "The venue checkout view where clients pick a date and tap available time slots.",
      },
      {
        src: "/images/projects/bronuz/bronuz_business.webp",
        alt: "BronUz business dashboard analytics",
        caption:
          "The merchant dashboard built for venue owners to track daily payouts and manage bookings.",
      },
      {
        src: "/images/projects/bronuz/bronuz_admin.webp",
        alt: "BronUz master admin dashboard",
        caption:
          "The super-admin panel where I monitor global platform statistics and vet new merchants.",
      },
    ],
    cta: {label: "Launch Live Demo", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Case Study",
    title: "My AI Assistant Bot",
    subtitle:
      "A lightning-fast Telegram assistant that copies my personality, retains deep context, and costs exactly $0.00 to run.",
    meta: [
      {label: "Client", value: "Personal Project"},
      {label: "Role", value: "Backend / AI Engineer"},
      {label: "Timeline", value: "2026"},
      {
        label: "Stack",
        value:
          "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper",
      },
    ],
    problem: {
      title: "The Problem",
      body: "Running multiple online projects meant my Telegram inbox was constantly exploding across different time zones. Answering repetitive pricing queries, tracking technical requests, and constantly context-switching between English, Russian, and Uzbek became a massive productivity drain. I built an AI assistant to act as an automated extension of myself \u2014 not a boring, generic chatbot, but a bot configured to match my actual tone, saving me hours of manual texting.",
    },
    research: {
      title: "How I Built It",
      bullets: [
        "Three-Tier Memory System: Powered by Cloudflare KV to handle immediate conversation states, user profiles, and long-term fact storage so it never forgets a returning lead.",
        "Failover Matrix: Architected an automated fallback chain across 5 Gemini models to cleanly handle unexpected rate limits, with ultra-fast Groq models executing deep context parsing in parallel.",
        "Zero-Latency Language Routing: Used lightweight regex triggers to catch language shifts instantly, adapting on the fly to English, Russian, or Uzbek without wasting precious execution time on heavy NLP libraries.",
        "Intent Pre-Processor: Built an initial routing layer that scans for critical trigger words (like urgent technical bugs or custom pricing negotiations) to flag me manually instead of letting the AI hallucinate.",
        "Natural Language Crons: Integrated natural text parsing (e.g., 'remind me tomorrow at 3 PM') to automatically schedule follow-up tasks, trigger morning summaries, and track overdue items.",
        "Live Web Access: Tied in Serper.dev web scraping, allowing the bot to fetch up-to-the-minute real-world data whenever a user asks for live facts or current context.",
        "Asynchronous Deep Analysis: Every four messages, a background Groq job asynchronously condenses the chat thread, updates the user's permanent profile, and analyzes conversational sentiment.",
        "Lightweight Admin Portal: Built a fast, secure web dashboard protected by HTTP Basic Auth to audit chat logs, swap live LLM engines on the fly, and monitor system resources.",
        "Humanized Typing Delays: Programmed adaptive message pacing that simulates real typing speeds based on urgency, message complexity, and history with that specific user.",
        "Dual Environment Architecture: Engineered the worker using standard Cloudflare tools but wrapped it in a local Express fallback environment for easy offline debugging.",
      ],
    },
    design: {
      title: "The Proof of Concept",
      bullets: [
        "Flawlessly handles dozens of multi-lingual client conversations daily without requiring my manual intervention.",
        "The automated follow-up system ensures no prospective client or task falls through the cracks.",
        "Maintains a grand total hosting and processing bill of exactly $0.00 by maxing out high-performance serverless free tiers.",
      ],
    },
    images: [
      {
        src: "/images/projects/tg-bot/3d-stickle-retro-tablet-with-pixel-ai-chatbot-1.png",
        alt: "Retro tablet with pixel AI chatbot interface",
        caption:
          "The pixel-art dashboard tracking assistant states and automated chat interactions.",
      },
      {
        src: "/images/projects/tg-bot/3d-stickle-robot-assistant-device-with-smiling-pixel-face-and-control-knobs.png",
        alt: "Robot assistant device with smiling pixel face and control knobs",
        caption:
          "The assistant's internal concept design: retro styling wrapping modern serverless AI power.",
      },
    ],
    cta: {label: "Test the AI Assistant", href: "https://t.me/itsbek_bot"},
  },
  octoposAppsCaseStudy: {
    badge: "Case Study",
    title: "Octopos \u2014 High-Load Restaurant Tech",
    subtitle:
      "Re-architecting a massive ecosystem of restaurant management suites and real-time POS terminals for breakneck performance.",
    meta: [
      {label: "Client", value: "Octopos (Commercial Platform)"},
      {label: "Role", value: "Lead Frontend Engineer"},
      {label: "Timeline", value: "2025 - 2026"},
      {
        label: "Stack",
        value:
          "React, TypeScript, Tailwind CSS, TanStack Query, Zustand, Radix UI, Lucide React, i18next",
      },
    ],
    problem: {
      title: "The Problem",
      body: "The original legacy frontend for this comprehensive restaurant management suite was bloated, sluggish, and highly fragile. Waiters faced noticeable input lag during busy rushes, kitchen staff missed critical tickets due to state sync drops, and adding simple client requests was a complete architectural nightmare. I was brought in to completely rewrite and future-proof the core web architecture from scratch, turning a legacy monolith into a blazing-fast workspace.",
    },
    research: {
      title: "What I Overhauled",
      bullets: [
        "Ground-Up Frontend Re-architecture: Evicted the legacy codebase entirely for a highly modular React + TypeScript setup engineered explicitly for rendering speed and aggressive asset reuse.",
        "High-Velocity POS Terminal: Designed and coded a fluid, keyboard-shortcut-driven terminal interface with sub-millisecond cart updates, dynamic bill splitting, and instantaneous item filtering.",
        "Real-Time Floor Map: Built an interactive, custom drag-and-drop table manager from scratch that safely locks occupied tables globally and updates visual states instantly.",
        "Reactive Kitchen Monitor (KDS): Engineered a heavy-duty display screen interface for kitchen teams that prioritizes orders by preparation windows, alerts staff visually as tickets age, and guarantees zero missed tickets.",
        "State Optimization: Replaced convoluted data flows with hyper-focused Zustand micro-stores and optimized TanStack Query caching layers, completely eliminating data drift between cashier stands and the kitchen.",
        "Robust Internationalization: Implemented dynamic translation schemas that intelligently preserve complex layouts, preventing text wrapping or UI breaking across vastly different language lengths.",
      ],
    },
    design: {
      title: "The Outcomes",
      bullets: [
        "The newly optimized software is actively deployed live across enterprise restaurants and retail hubs via octopos.uz.",
        "Drastically shrunk the main bundle sizes, ensuring fluid 60fps operation even on low-end, budget Android restaurant tablets.",
        "Waiters now process transactions in seconds, and kitchen screens pick up orders the exact millisecond they are tapped at the register.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos_apps/dash_1.webp",
        alt: "Octopos management dashboard showing analytics",
        caption:
          "The high-level merchant dashboard where store owners analyze profits, configure menus, and track live inventory.",
      },
      {
        src: "/images/projects/octopos_apps/dash_2.webp",
        alt: "Octopos order list view",
        caption:
          "The granular order monitoring panel tailored for managers tracking active bills and table transactions.",
      },
      {
        src: "/images/projects/octopos_apps/dash_3.webp",
        alt: "Octopos inventory and purchase tool",
        caption:
          "The supply-chain ledger where managers automate low-stock triggers and log external vendor invoices.",
      },
      {
        src: "/images/projects/octopos_apps/pos_1.webp",
        alt: "Octopos terminal catalog grid",
        caption:
          "The optimized checkout matrix built to handle rapid-fire taps during frantic lunch rushes.",
      },
      {
        src: "/images/projects/octopos_apps/pos_2.webp",
        alt: "Octopos cash register payment screen",
        caption:
          "The modal checkout system allowing cashiers to instantly calculate change, process partial card payments, and split tabs.",
      },
      {
        src: "/images/projects/octopos_apps/pos_3.webp",
        alt: "Octopos interactive layout map",
        caption:
          "The custom vector canvas where restaurant owners map out their physical tables, track server ownership, and view occupancy status.",
      },
      {
        src: "/images/projects/octopos_apps/kitchen_1.webp",
        alt: "Octopos live kitchen display station screen",
        caption:
          "The high-visibility Kitchen Display Screen (KDS) engineered to keep chefs coordinated with color-coded preparation timers.",
      },
    ],
    cta: {label: "Explore Octopos Platform", href: "https://octopos.uz"},
  },
  octoposLandingCaseStudy: {
    badge: "Case Study",
    title: "Octopos Landing Page",
    subtitle:
      "Condensing a multifaceted B2B restaurant ecosystem into a highly polished, conversion-oriented SaaS landing experience.",
    meta: [
      {label: "Client", value: "Octopos"},
      {label: "Role", value: "Frontend Engineer \u00B7 UX Implementation"},
      {label: "Timeline", value: "4 Weeks (2026)"},
      {label: "Stack", value: "Astro, Tailwind CSS, Resend"},
    ],
    problem: {
      title: "The Challenge",
      body: "While Octopos had a incredibly mature software suite (Dash, POS, Kitchen), its primary landing page failed to articulate that value clearly. The existing site suffered from dense text blocks, lacked a modern visual narrative, and didn't provide a smooth, frictionless onboarding gateway for restaurant owners looking for a demo.",
    },
    research: {
      title: "What I Executed",
      bullets: [
        "Translated high-fidelity designs provided by a senior designer into fully responsive, production-grade web layouts without cutting corners.",
        "Architected the entire frontend using Astro and Tailwind CSS to ensure near-zero client-side JavaScript overhead and flawless mobile performance.",
        "Developed interactive UI showcases and interactive wireframe blocks to intuitively demonstrate how Dash, POS, and Kitchen communicate in real time.",
        "Built a seamless multi-step lead capture flow to sign up business leads for trial access and custom demos.",
        "Integrated robust backend API triggers for automatic onboarding sequences and reliable email confirmation dispatches via Resend.",
        "Fine-tuned Core Web Vitals, image rendering pipelines, and clean semantic SEO structure for maximum organic discoverability.",
      ],
    },
    design: {
      title: "The Return on Investment",
      bullets: [
        "Delivered a blazing-fast B2B marketing asset that radically enhanced product clarity and reduced user confusion regarding the platform's features.",
        "Significantly dropped user drop-off rates on the trial registration page through an optimized, low-friction wizard interface.",
        "Shipped the entire marketing project from code initialization to final deployment within a strict 4-week window.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos/octopos_before.webp",
        alt: "Original Octopos landing page before redesign",
        caption:
          "The original MVP landing page: heavy text walls, low-contrast hierarchy, and a buried conversion funnel.",
      },
      {
        src: "/images/projects/octopos/octopos.webp",
        alt: "Screenshot of the Octopos landing page",
        caption:
          "The completely transformed desktop view featuring an impactful hero layout, concrete use-cases, and prominent social proof indicators.",
      },
    ],
    cta: {label: "View Live Marketing Site", href: "https://octopos.uz"},
  },
  skills: {
    title: "Tools I Actually Use",
    groups: [
      {
        title: "Frontend Arsenal",
        items: [
          "React",
          "Astro",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Sass",
          "HTML5 / CSS3",
        ],
      },
      {
        title: "Backend & Infra",
        items: ["Node.js", "Supabase", "PostgreSQL", "Python", "Go"],
      },
      {
        title: "Miscellaneous",
        items: [
          "Git & GitHub",
          "CI/CD Pipelines",
          "Automated Testing",
          "C / Assembly",
          "Prompt Engineering",
          "Vercel",
        ],
      },
    ],
  },
  footer: {
    email: "Email",
    github: "GitHub",
    telegram: "Telegram",
    resume: "Resume",
    builtWith:
      "Crafted using Next.js, Framer Motion, GSAP, and Lenis \u2014 strictly zero templates, zero boring boilerplates.",
  },
};

export default en;
