import type { I18n } from './types';

const en: I18n = {
  nav: {
    links: { about: 'About', skills: 'Skills', caseStudy: 'Case Study', work: 'Work', contact: 'Contact', resume: 'Resume' },
  },
  hero: {
  name: 'itsbek.me',
  titleTop: 'Software Engineer',
  titleBottom: 'focused on User Experience',
    description: `Software engineer with 4+ years building responsive, accessible products in React and Astro. I ship fast, reliable interfaces, collaborate across design and backend, and work comfortably in JavaScript/TypeScript, Python, and C-level problem solving.`,
    location: 'South Korea, Seoul',
    availability: 'Open for new projects',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: 'Contact Me',
      viewWork: 'View Work',
      viewCaseStudy: 'View Case Study'
    }
  },
  about: {
    intro: `I’m a software engineer who blends product thinking with frontend craft. I focus on performance, accessibility, and clear communication so every release is smooth, measurable, and genuinely helpful for users. I’m currently studying Computer Information Security at Sejong University, bringing a security-minded lens to everything I ship.`,
    basedIn: 'Based in South Korea, Seoul',
    languagesLine: 'Languages: English (primary), Russian, Korean.'
  },
  contact: {
    heading: `Let's Connect`,
    intro: `Want to build something cool, fix a tricky bug, or just talk ideas? Message me anytime — I’m around.`,
    availability: 'Replies within 24h (Seoul).',
    ctas: { call: 'Call Me', email: 'Send an Email', telegram: 'Message on Telegram' },
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: "What's on your mind?",
      submit: 'Send Message'
    }
  },
  projects: {
    selectedWork: 'Selected Work'
  },
  caseStudy: {
    badge: 'Case Study',
    title: 'Octopos Landing Page',
    subtitle: 'Turning a complex knowledge platform into a high-converting launch in four weeks.',
    meta: [
      { label: 'Client', value: 'Octopos' },
      { label: 'Role', value: 'Product Designer · Software Engineer' },
      { label: 'Timeline', value: '4 weeks · 2025' },
      { label: 'Stack', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: 'The challenge',
      body: 'Octopos needed a modern landing page that clearly explained its product and encouraged users to try it. The previous version looked outdated, didn’t show product value well, and wasn’t friendly on mobile.'
    },
    research: {
      title: 'What I did',
      bullets: [
        'Rebuilt the entire website from zero — architecture, design, content, and implementation.',
        'Designed clear, visual product mockups to demonstrate how the tools work across devices.',
        'Implemented a simple onboarding flow to collect user info and grant instant trial access to the three main apps.'
      ]
    },
    design: {
      title: 'Results',
      bullets: [
        'The new site feels clean, fast, and professional, helping people grasp Octopos in seconds and motivating more visitors to try it.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: 'Original Octopos landing page before redesign', caption: 'Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.' },
      { src: '/images/projects/octopos.png', alt: 'Screenshot of the Octopos landing page', caption: 'High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.' }
    ],
    cta: { label: 'Visit live site', href: 'https://octopos.uz' }
  },
  skills: {
    title: 'What I Work With',
    groups: [
      { title: 'Core', items: ['React','Astro','TypeScript','JavaScript','Node.js','Tailwind','Sass','HTML/CSS'] },
      { title: 'Systems', items: ['C','Assembly','Python'] },
      { title: 'Tooling', items: ['Git','GitHub Actions','Testing (Jest/Vitest)','CI/CD','Accessibility & Performance Audits'] },
    ]
  },
  footer: {
    reserved: 'All rights reserved.',
    email: 'Email',
    github: 'GitHub',
    telegram: 'Telegram',
    resume: 'Resume',
  bandName: 'itsbek.me',
    maintenance: 'Built with love, caffeine, and a few mysterious errors. If it breaks, I probably learned something new. (Fix incoming… soonish.)',
  }
};

export default en;
