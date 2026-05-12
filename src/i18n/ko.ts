import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '사례 연구', work: '포트폴리오', contact: '연락처', resume: '이력서' },
  },
  hero: {
  name: 'itsbek.me',
    titleTop: '소프트웨어 엔지니어',
    titleBottom: '사용자 경험과 신뢰성에 집중',
    description: `2년+ 경험의 소프트웨어 엔지니어로, React와 Astro로 빠르고 접근성 높은 제품을 만듭니다. 디자인·백엔드와 긴밀히 협업하며 JavaScript/TypeScript, Python, C 레벨 문제 해결에 익숙합니다.`,
    location: '대한민국, 서울',
    availability: '새로운 프로젝트 문의 가능',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: '연락하기',
      viewWork: '작업 보기',
      viewCaseStudy: '케이스 스터디 보기'
    }
  },
  about: {
    intro: `제품 사고와 프론트엔드 역량을 함께 갖춘 소프트웨어 엔지니어입니다. 성능, 접근성, 보안을 중시하며 매 릴리스가 매끄럽고 검증 가능하도록 만듭니다. 세종대학교 컴퓨터정보보안 전공 중이며, 보안 관점도 함께 고려합니다.`,
    basedIn: '대한민국 서울 거주',
    languagesLine: '사용 언어: 영어 (주), 러시아어, 한국어'
  },
  contact: {
    heading: `함께 일해요`,
    intro: `새로운 프로젝트, 까다로운 버그 수정, 또는 아이디어에 대해 이야기하고 싶으신가요? 언제든지 편하게 연락주세요.`,
    availability: '24시간 이내 회신 (서울 기준).',
    ctas: { call: '전화하기', email: '이메일 보내기', telegram: '텔레그램 메시지' },
    form: {
      name: '이름',
      namePlaceholder: '성함',
      email: '이메일',
      emailPlaceholder: 'your@email.com',
      message: '메시지',
      messagePlaceholder: "어떤 내용이든 편하게 남겨주세요.",
      submit: '메시지 보내기'
    }
  },
  projects: {
    selectedWork: '주요 프로젝트'
  },
  caseStudy: {
    badge: '사례 연구',
    title: 'Octopos 랜딩 페이지',
    subtitle: '4주 만에 복잡한 제품을 명확한 전환형 랜딩 페이지로 구현했습니다.',
    meta: [
      { label: '클라이언트', value: 'Octopos' },
      { label: '역할', value: '제품 디자이너 · 소프트웨어 엔지니어' },
      { label: '기간', value: '4주 · 2025년' },
      { label: '기술 스택', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: '도전 과제',
      body: 'Octopos는 제품 가치를 명확히 설명하고 사용해 보도록 유도하는 현대적인 랜딩 페이지가 필요했습니다. 이전 버전은 구식이었고 가치 전달이 약했으며 모바일 친화적이지 않았습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        '더 빠르고, 시각적이며, 이해하기 쉽도록 전체 웹사이트를 처음부터 다시 디자인하고 재구축했습니다.',
        '방문자가 도구가 실제로 어떻게 작동하는지 볼 수 있도록 iMac, iPad, iPhone 프레임 안에 Octopos 앱의 맞춤형 목업을 만들었습니다.',
        '사용자 정보를 수집하고 Octopos의 세 가지 주요 앱 무료 평가판에 즉시 액세스할 수 있는 간단한 마법사 양식을 구축했습니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '새로운 사이트는 깔끔하고, 빠르며, 전문적인 느낌을 주어 사용자들이 Octopos를 몇 초 만에 파악하고 더 많은 방문자가 사용해 보도록 동기를 부여하는 데 도움이 되었습니다.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: '재디자인 전 Octopos 랜딩 페이지 원본', caption: '재디자인 전 원본 MVP 화면 — 빽빽한 문구, 낮은 대비, 명확한 행동 유도 버튼 부재.' },
      { src: '/images/projects/octopos.png', alt: 'Octopos 랜딩 페이지 스크린샷', caption: '재작업된 히어로 섹션, 사용 사례, 소셜 프루프를 강조하는 고해상도 데스크톱 화면.' }
    ],
    cta: { label: '라이브 사이트 방문', href: 'https://octopos.uz' }
  },
  skills: {
    title: '사용 기술',
    groups: [
      { title: '핵심', items: ['React','Astro','TypeScript','JavaScript','Node.js','Tailwind','Sass','HTML/CSS'] },
      { title: '시스템', items: ['C','Assembly','Python'] },
      { title: '도구', items: ['Git','GitHub Actions','테스팅 (Jest/Vitest)','CI/CD','접근성·성능 점검'] },
    ]
  },
  footer: {
    reserved: '모든 권리 보유.',
    email: '이메일',
    github: 'GitHub',
    telegram: '텔레그램',
    resume: '이력서',
  bandName: 'itsbek.me',
    maintenance: '사랑과 카페인, 그리고 약간의 미스터리한 오류로 만들어졌습니다. 뭔가 고장 났다면, 제가 또 하나 배운 거예요. (곧 수정할게요… 아마도요.)',
  }
};

export default ko;
