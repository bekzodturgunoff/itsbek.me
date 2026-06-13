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
    titleTop: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    availability: string;
  };
  about: {
    intro: string;
    basedIn: string;
    languagesLine: string;
  };
  origin: {
    grewUp: string;
    country: string;
    studied: string;
    building: string;
  };
  contact: {
    heading: string;
    intro: string;
    availability: string;
    ctas: {
      call: string;
      email: string;
      telegram: string;
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
  // caseStudy: CaseStudySection;
  octoposAppsCaseStudy: CaseStudySection;
  skills: {
    title: string;
    groups: {title: string; items: string[]}[];
  };
  footer: {
    reserved: string;
    email: string;
    github: string;
    telegram: string;
    resume: string;
    bandName: string;
  };
}
