interface CaseStudyMeta {
  label: string;
  value: string;
}

interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
}

interface CTA {
  label: string;
  href: string;
}

interface CaseStudySection {
  badge: string;
  title: string;
  subtitle: string;
  meta: CaseStudyMeta[];
  problem: {title: string; body: string};
  research: {title: string; bullets: string[]};
  design: {title: string; bullets: string[]};
  images: CaseStudyImage[];
  cta: CTA;
}

interface ProofMetric {
  value: string;
  label: string;
}

export interface I18n {
  nav: {
    links: {
      about: string;
      skills: string;
      caseStudy: string;
      work: string;
      contact: string;
      resume: string;
    };
  };
  hero: {
    name: string;
    headlineLine1: string;
    headlineLine2: string;
    subtextLine1: string;
    subtextLine2: string;
    availability: string;
  };
  origin: {
    grewUp: string;
    country: string;
    studied: string;
    building: string;
    body: string;
    info: string;
  };
  about: {
    title: string;
    body: string;
    philosophy: string[];
  };
  proof: {
    metrics: ProofMetric[];
  };
  ending: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    body: string;
    cta: string;
  };
  contact: {
    heading: string;
    intro: string;
    availability: string;
    ctas: {
      email: string;
      telegram: string;
      phone: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  projects: {
    selectedWork: string;
  };
  bronUzCaseStudy: CaseStudySection;
  telegramBotCaseStudy: CaseStudySection;
  octoposLandingCaseStudy: CaseStudySection;
  octoposAppsCaseStudy: CaseStudySection;
  skills: {
    title: string;
    groups: {title: string; items: string[]}[];
  };
  footer: {
    email: string;
    github: string;
    telegram: string;
    resume: string;
    builtWith: string;
  };
}
