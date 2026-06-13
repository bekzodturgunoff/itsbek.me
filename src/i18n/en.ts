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
    titleTop: "Software Engineer",
    headlineLine1: "I build",
    headlineLine2: "interfaces.",
    description:
      "Products for places that don\u2019t have them yet.\nMost ship in days, not quarters.",
    availability: "Available",
  },
  about: {
    intro:
      "I was born in Uzbekistan and taught myself to code back when finding good internet was harder than finding bugs. No bootcamps or fast-track degrees — just tough problems and enough stubbornness to keep banging my head against the keyboard until things worked.\n\nIn 2023, I moved to Seoul to study cyber security and ship real software in a completely different language. It made me a much sharper developer. Now I'm back in Uzbekistan, still working the way I always have: by building things before I feel ready.",
    basedIn: "Living in Uzbekistan",
    languagesLine: "Languages: English (Fluent), Russian, Korean.",
  },
  origin: {
    grewUp: "Grew up in",
    country: "Uzbekistan.",
    studied: "Studied in Seoul.",
    building: "Still building.",
  },
  contact: {
    heading: "Let's talk.",
    intro:
      "Got a project or a question? Drop me a line. I'm based in Uzbekistan (GMT+5) and usually get back to people on the same day.",
    availability: "Usually replies within a few hours.",
    ctas: {
      call: "Give Me a Call",
      email: "Send an Email",
      telegram: "Ping Me on Telegram",
    },
    form: {
      name: "Your Name",
      namePlaceholder: "What should I call you?",
      email: "Your Email",
      emailPlaceholder: "you@example.com",
      message: "Your Message",
      messagePlaceholder: "What are we building?",
      submit: "Send Message",
    },
  },
  projects: {
    selectedWork: "Things I've Built",
  },
  bronUzCaseStudy: {
    badge: "Case Study",
    title: "BronUz — Booking Rooms & Venues",
    subtitle:
      "How I built a fully functional multi-vendor booking platform for Uzbekistan from a blank folder in just 3 days.",
    meta: [
      {label: "Client", value: "Personal Project"},
      {label: "Role", value: "Solo Full-Stack Dev & Designer"},
      {label: "Timeline", value: "3 Days (2026)"},
      {
        label: "Stack",
        value:
          "React, Vite, TypeScript, Tailwind CSS, Supabase, PostgreSQL, React Query, Zustand, Leaflet, Recharts, i18next, Vercel",
      },
    ],
    problem: {
      title: "The Problem",
      body: "In Uzbekistan, trying to book a football field, a cafe table, or a local event space is a headache. You usually have to dig up random phone numbers or send endless Telegram messages back and forth hoping someone replies. I wanted to see if I could fix this by building a fast, complete marketplace in a single weekend. It needed a smooth customer booking path, a real dashboard for business owners to track their money, and a master admin panel to keep an eye on everything.",
    },
    research: {
      title: "How I Built It",
      bullets: [
        "Database Architecture: Set up a Supabase backend with 13 relational tables, Row-Level Security (RLS) to lock down user data, and custom Edge Functions for background work.",
        "Interactive Maps & Filters: Built a frontend with over 15 pages. Tied Leaflet maps together with heavy URL-state filtering so users can search, filter across 25+ categories, and share exact search results instantly.",
        "Merchant Dashboard: Built a portal for shop owners with live business charts, visual booking calendars, custom slot controls, and a team permission management system.",
        "Safe Admin Panel: Put together a secure gateway for platform approvals. Used Postgres SECURITY DEFINER functions so regular database access rules can't be bypassed by accident.",
        "Telegram Integration: Connected a helper bot via webhooks. It messages owners immediately when someone books, runs cron jobs for 24-hour reminders, and acts as a basic support line.",
        "Granular Rules: Coded custom loyalty points, waitlists, and flexible cancellation rules that business owners can adjust whenever they want.",
        "PWA Features: Used Workbox to handle offline caching and custom workflows so users can install it on iOS like a native app.",
      ],
    },
    design: {
      title: "The Reality",
      bullets: [
        "It's completely live at bronuz.vercel.app. Real auth, real database updates, and real booking flows actually work.",
        "Handled three distinct user experiences (Customer, Shop Owner, and Admin) without rewriting the core layout logic.",
        "Proved that good architecture decisions let you move fast without breaking things.",
      ],
    },
    images: [
      {
        src: "/images/projects/bronuz/bronuz_homepage_2.webp",
        alt: "BronUz homepage showing map and search cards",
        caption:
          "The main search page. It keeps the map and the filtered venue cards perfectly in sync.",
      },
      {
        src: "/images/projects/bronuz/bronuz_venue.webp",
        alt: "BronUz venue booking screen",
        caption:
          "The venue page where clients pick their day and select open time slots.",
      },
      {
        src: "/images/projects/bronuz/bronuz_business.webp",
        alt: "BronUz business dashboard analytics",
        caption:
          "The dashboard I built for shop owners to track daily revenue and upcoming bookings.",
      },
      {
        src: "/images/projects/bronuz/bronuz_admin.webp",
        alt: "BronUz master admin dashboard",
        caption:
          "The admin view where I approve new signups and look at platform stats.",
      },
    ],
    cta: {label: "Try the Live Demo", href: "https://bronuz.vercel.app"},
  },
  telegramBotCaseStudy: {
    badge: "Case Study",
    title: "My AI Assistant Bot",
    subtitle:
      "A fast Telegram assistant that thinks like me, remembers past chats, and costs exactly $0.00 to run.",
    meta: [
      {label: "Client", value: "Personal Project"},
      {label: "Role", value: "Backend Engineer"},
      {label: "Timeline", value: "2026"},
      {
        label: "Stack",
        value:
          "TypeScript, Cloudflare Workers, KV, Gemini, Groq, grammY, Serper",
      },
    ],
    problem: {
      title: "The Problem",
      body: "Running online projects means my Telegram is always blowing up with messages across different time zones. Answering pricing questions, tracking tasks, and switching constantly between English, Russian, and Uzbek became a massive time sink. I built an AI assistant to stand in for me—not to sound like a generic bot, but to reply in my actual tone and save me hours of manual texting.",
    },
    research: {
      title: "How I Built It",
      bullets: [
        "Smart Memory: Used Cloudflare KV to create a three-tier memory setup. It tracks the current chat state, remembers a user's profile, and stores long-term facts so it never forgets a returning contact.",
        "Fallback Matrix: Set up an automated chain across 5 Gemini models to handle rate limits gracefully, with Groq working in the background to handle heavy context analysis.",
        "Quick Language Routing: Wrote simple regex checks to catch language switches instantly. The bot matches the speaker in English, Russian, or Uzbek without wasting precious milliseconds calling heavy NLP libraries.",
        "Intent Check: Built a routing step that reads messages for panic or pricing keywords before letting the AI answer. If it's unsure, it asks a friendly clarifying question instead of hallucinating.",
        "Natural Language Reminders: The bot parses normal phrases like 'remind me tomorrow at 3 PM' to schedule tasks, runs morning recaps, and handles overdue items via cron triggers.",
        "Live Web Search: Hooked up Serper.dev so the bot can fetch real-time data like weather, news, and live facts when someone asks.",
        "Deep Background Analysis: Every four messages, Groq runs in the background to summarize the conversation thread, updates the user's profile, and catches any shift in mood.",
        "Private Dashboard: Threw together a quick web dashboard protected by basic HTTP auth. It lets me read chats, swap live AI models, and view resource usage without touching code.",
        "Human Typing Speed: Added smart delays. It answers brand new contacts a bit slower, adapts to slow texters, and jumps straight to the point if a message looks urgent.",
        "Local Setup: Built the worker using standard Cloudflare tools but included an Express fallback so I can test and debug everything locally on my machine.",
      ],
    },
    design: {
      title: "The Reality",
      bullets: [
        "It handles dozens of multi-language chats every day without me touching my phone.",
        "The reminder system catches everything, meaning I don't miss business follow-ups anymore.",
        "Total hosting and API costs are absolutely zero by staying within smart serverless free tiers.",
      ],
    },
    images: [
      {
        src: "/images/projects/bot/bot_chat.webp",
        alt: "Telegram chat screenshot with the bot",
        caption:
          "A real conversation showing the bot fluidly handling context and changing languages.",
      },
      {
        src: "/images/projects/bot/bot_dash.webp",
        alt: "Web dashboard for managing the bot",
        caption:
          "The clean, password-protected web view I use to check logs and tweak AI settings.",
      },
    ],
    cta: {label: "Ping My Bot", href: "https://t.me/itsbek_bot"},
  },
  octoposAppsCaseStudy: {
    badge: "Case Study",
    title: "Octopos — Tech for Restaurants",
    subtitle:
      "Rewriting a massive restaurant management suite and digital point-of-sale terminal for real speed.",
    meta: [
      {label: "Client", value: "Octopos (Commercial Product)"},
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
      body: "The original codebase for this multi-app restaurant management platform was slow and difficult to maintain. Waiters were waiting for screens to load, kitchen staff were missing tickets because of sync delays, and adding a simple menu feature felt like moving a mountain. I stepped in to redesign the core frontend architecture from scratch, turning a messy legacy codebase into an incredibly snappy tool that works under pressure.",
    },
    research: {
      title: "What I Solved",
      bullets: [
        "Complete Frontend Rewrite: Ripped out the old code and built a modern React, TypeScript, and Tailwind system focused entirely on rendering speed and component reuse.",
        "Waiter-Proof Layouts: Designed an incredibly fast cash-register interface with smart keyboard shortcuts, visual menu filtering, split-bill logic, and instant cart updates.",
        "Interactive Floor Map: Built a drag-and-drop table management system from scratch. It handles table locks in real time, logs customer profiles, and accurately changes table shapes dynamically.",
        "Kitchen Ticket System: Developed a heavy-duty Kitchen Display Screen (KDS) layout. It organizes orders by prep times, changes card colors as tickets age, and flashes clear alerts so cooks don't miss orders.",
        "Bulletproof State Management: Swapped out messy prop-drilling for clean Zustand stores and fine-tuned TanStack Query cache rules. This fixed data-sync bugs between the checkout counters and the kitchen.",
        "Internationalized UI: Set up custom multi-language translation dictionaries, making sure layout elements never break or overlap when text lengths change across languages.",
      ],
    },
    design: {
      title: "The Results",
      bullets: [
        "The software is now running live across real restaurants and cafes via octopos.uz.",
        "Cut down layout bundle sizes significantly, meaning pages load instantly even on cheap, low-end restaurant tablets.",
        "Waiters can finish a checkout in seconds, and kitchen staff get orders the exact millisecond they are punched in.",
      ],
    },
    images: [
      {
        src: "/images/projects/octopos_apps/dash_1.webp",
        alt: "Octopos management dashboard showing analytics",
        caption:
          "The main merchant dashboard where managers can view sales, modify menus, and check stock levels.",
      },
      {
        src: "/images/projects/octopos_apps/dash_2.webp",
        alt: "Octopos order list view",
        caption:
          "The order tracker interface built to monitor live tickets and customer bills.",
      },
      {
        src: "/images/projects/octopos_apps/dash_3.webp",
        alt: "Octopos inventory and purchase tool",
        caption:
          "The backend supply tracker where owners set up low-stock alerts and create purchase logs.",
      },
      {
        src: "/images/projects/octopos_apps/pos_1.webp",
        alt: "Octopos terminal catalog grid",
        caption:
          "The high-speed register layout. It's built for rapid taps and quick filtering during busy lunch rushes.",
      },
      {
        src: "/images/projects/octopos_apps/pos_2.webp",
        alt: "Octopos cash register payment screen",
        caption:
          "The checkout screen where cashiers handle split checks, cash calculations, and card processing.",
      },
      {
        src: "/images/projects/octopos_apps/pos_3.webp",
        alt: "Octopos interactive layout map",
        caption:
          "The visual layout builder where managers manage open tables, handle server locks, and see who is eating.",
      },
      {
        src: "/images/projects/octopos_apps/kitchen_1.webp",
        alt: "Octopos live kitchen display station screen",
        caption:
          "The bright, high-visibility screen hanging in kitchens that tracks ticket timers and food stages.",
      },
    ],
    cta: {label: "Visit Octopos Business Site", href: "https://octopos.uz"},
  },
  octoposLandingCaseStudy: {
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
        src: "/images/projects/octopos/octopos_before.webp",
        alt: "Original Octopos landing page before redesign",
        caption: "Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.",
      },
      {
        src: "/images/projects/octopos/octopos.webp",
        alt: "Screenshot of the Octopos landing page",
        caption: "High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.",
      },
    ],
    cta: {label: "Visit live site", href: "https://octopos.uz"},
  },
  skills: {
    title: "Things I Use Often",
    groups: [
      {
        title: "Frontend",
        items: [
          "React",
          "Astro",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Sass",
          "HTML/CSS",
        ],
      },
      {
        title: "Backend",
        items: ["Node.js", "Supabase", "PostgreSQL", "Python", "Go"],
      },
      {
        title: "Everything Else",
        items: [
          "Git & GitHub",
          "CI/CD Pipelines",
          "Writing Tests",
          "C / Assembly",
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
  },
};

export default en;
