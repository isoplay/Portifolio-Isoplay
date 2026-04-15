export type Language = "pt" | "en";

export type SectionId = "about" | "stack" | "projects" | "journey" | "contact";

export const sectionOrder: SectionId[] = ["about", "stack", "projects", "journey", "contact"];

export const portfolioLinks = {
  brandLabel: "igor.dev",
  email: "igorm9757@gmail.com",
  githubUrl: "https://github.com/isoplay",
} as const;

type AboutHighlightIcon = "code" | "performance" | "architecture";

interface AboutHighlight {
  icon: AboutHighlightIcon;
  title: string;
  description: string;
}

interface TechCategory {
  id: string;
  label: string;
  technologies: string[];
}

interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
}

interface JourneyMilestone {
  phase: string;
  title: string;
  description: string;
}

interface SiteCopy {
  nav: Record<SectionId, string>;
  hero: {
    badge: string;
    nameStart: string;
    nameEnd: string;
    role: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    headingStart: string;
    headingEnd: string;
    description: string;
    highlights: AboutHighlight[];
  };
  stack: {
    eyebrow: string;
    heading: string;
    categories: TechCategory[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    viewProject: string;
    items: ProjectEntry[];
  };
  journey: {
    eyebrow: string;
    heading: string;
    milestones: JourneyMilestone[];
  };
  contact: {
    eyebrow: string;
    headingStart: string;
    headingEnd: string;
    description: string;
    cta: string;
  };
  footer: {
    rights: string;
    built: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}

const ptContent: SiteCopy = {
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    journey: "Jornada",
    contact: "Contato",
  },
  hero: {
    badge: "Disponível para novos projetos",
    nameStart: "Igor de",
    nameEnd: "Souza",
    role: "Engenheiro de Software",
    description: "Focado em aplicações escaláveis e de alta performance.",
    primaryCta: "Ver projetos",
    secondaryCta: "Contato",
  },
  about: {
    eyebrow: "Sobre",
    headingStart: "Engenharia de soluções,",
    headingEnd: "não apenas código",
    description:
      "Atuo no desenvolvimento de sistemas completos, da arquitetura ao deploy em produção. Meu foco é resolver problemas reais com soluções robustas, projetando APIs eficientes, modelando bancos de dados escaláveis e construindo interfaces que entregam resultados mensuráveis.",
    highlights: [
      {
        icon: "code",
        title: "Desenvolvimento full-cycle",
        description: "Da arquitetura ao deploy, com entregas limpas, testáveis e preparadas para crescer.",
      },
      {
        icon: "performance",
        title: "Performance como prioridade",
        description: "Decisões técnicas orientadas por métricas, tempo de resposta e eficiência operacional.",
      },
      {
        icon: "architecture",
        title: "Sistemas escaláveis",
        description:
          "Arquitetura modular, separação clara de responsabilidades e bases sólidas para evolução contínua.",
      },
    ],
  },
  stack: {
    eyebrow: "Tech stack",
    heading: "Ferramentas que utilizo",
    categories: [
      {
        id: "languages",
        label: "Linguagens",
        technologies: ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "C#"],
      },
      {
        id: "frontend",
        label: "Frontend",
        technologies: ["React.js", "Next.js", "React Native"],
      },
      {
        id: "databases",
        label: "Bancos de dados",
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
      },
      {
        id: "tools",
        label: "Ferramentas",
        technologies: ["Docker", "Git", "GitHub"],
      }
    ],
  },
  projects: {
    eyebrow: "Projetos",
    heading: "Trabalhos selecionados",
    viewProject: "Ver projeto",
    items: [
      {
        title: "Sistema Financeiro",
        description:
          "Aplicação completa de gestão financeira com controle de transações, relatórios e dashboards analíticos construídos para uso real.",
        technologies: ["PHP", "MySQL", "JavaScript"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "Sistema de Agendamento",
        description:
          "Plataforma inteligente para horários, alocação de salas e resolução de conflitos em instituições de ensino.",
        technologies: ["Node.js", "PostgreSQL", "React"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "Catálogo de Produtos",
        description:
          "Catálogo de alta performance com filtros avançados, busca refinada e experiência responsiva para e-commerce.",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "Aplicação PWA",
        description:
          "Progressive Web App com arquitetura offline-first, notificações push e experiência mobile de alta fluidez.",
        technologies: ["React", "Service Workers", "IndexedDB"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
    ],
  },
  journey: {
    eyebrow: "Jornada",
    heading: "Como cheguei aqui",
    milestones: [
      {
        phase: "Fundação",
        title: "Desenvolvimento autodidata",
        description: "Comecei com HTML, CSS e JavaScript, construindo a base em projetos práticos e experimentação contínua.",
      },
      {
        phase: "Crescimento",
        title: "Expansão full-stack",
        description: "Avancei para backend com PHP, Node.js e Python, aprendendo bancos de dados e APIs em sistemas reais.",
      },
      {
        phase: "Especialização",
        title: "Frameworks modernos e mobile",
        description: "Adotei React, Next.js e mobile com foco em performance, arquitetura escalável e entrega em produção.",
      },
      {
        phase: "Atual",
        title: "Construindo e entregando",
        description: "Hoje entrego soluções end-to-end com ferramentas modernas, sempre refinando processo, produto e engenharia.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    headingStart: "Vamos construir algo",
    headingEnd: "juntos",
    description:
      "Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. Vamos conversar e criar algo relevante.",
    cta: "Entrar em contato",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    built: "Construído com precisão e propósito.",
  },
  notFound: {
    title: "Página não encontrada",
    description: "O endereço que você tentou acessar não existe neste portfólio.",
    cta: "Voltar para a página inicial",
  },
};
const enContent: SiteCopy = {
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    journey: "Journey",
    contact: "Contact",
  },
  hero: {
    badge: "Available for new projects",
    nameStart: "Igor de",
    nameEnd: "Souza",
    role: "Software Engineer",
    description: "Building scalable, high-performance applications.",
    primaryCta: "View projects",
    secondaryCta: "Contact",
  },
  about: {
    eyebrow: "About",
    headingStart: "Engineering solutions,",
    headingEnd: "not just code",
    description:
      "I build end-to-end systems from architecture to production deployment. My focus is solving real-world problems with robust solutions by designing efficient APIs, modeling scalable databases, and crafting interfaces that deliver measurable results.",
    highlights: [
      {
        icon: "code",
        title: "Full-cycle delivery",
        description: "From architecture to deployment, with clean, testable implementations ready to scale.",
      },
      {
        icon: "performance",
        title: "Performance first",
        description: "Technical decisions guided by metrics, response time, and operational efficiency.",
      },
      {
        icon: "architecture",
        title: "Scalable systems",
        description: "Modular architecture, clear responsibilities, and foundations that support long-term growth.",
      },
    ],
  },
  stack: {
    eyebrow: "Tech stack",
    heading: "Tools I work with",
    categories: [
      { id: "frontend", label: "Frontend", technologies: ["React", "Next.js"] },
      { id: "backend", label: "Backend", technologies: ["Node.js", "PHP", "Python"] },
      { id: "databases", label: "Databases", technologies: ["MySQL", "PostgreSQL", "MongoDB"] },
      { id: "tools", label: "Tools", technologies: ["Docker", "Git"] },
    ],
  },
  projects: {
    eyebrow: "Projects",
    heading: "Selected work",
    viewProject: "View project",
    items: [
      {
        title: "Financial System",
        description:
          "A complete financial management application with transaction tracking, reports, and analytics dashboards built for real-world use.",
        technologies: ["PHP", "MySQL", "JavaScript"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "Scheduling System",
        description:
          "An intelligent scheduling platform for timetables, room allocation, and conflict resolution in educational environments.",
        technologies: ["Node.js", "PostgreSQL", "React"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "Product Catalog",
        description:
          "A high-performance catalog with advanced filtering, refined search, and a responsive shopping experience.",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
      {
        title: "PWA Application",
        description:
          "A progressive web app with an offline-first architecture, push notifications, and smooth mobile performance.",
        technologies: ["React", "Service Workers", "IndexedDB"],
        repositoryUrl: portfolioLinks.githubUrl,
      },
    ],
  },
  journey: {
    eyebrow: "Journey",
    heading: "How I got here",
    milestones: [
      {
        phase: "Foundation",
        title: "Self-taught development",
        description: "I started with HTML, CSS, and JavaScript, building the fundamentals through hands-on projects.",
      },
      {
        phase: "Growth",
        title: "Full-stack expansion",
        description: "I moved into backend work with PHP, Node.js, and Python while learning database design and API architecture.",
      },
      {
        phase: "Specialization",
        title: "Modern frameworks and mobile",
        description: "I adopted React, Next.js, and mobile development with a strong focus on performance and scalable architecture.",
      },
      {
        phase: "Current",
        title: "Building and shipping",
        description:
          "Today I deliver end-to-end solutions with modern tooling while constantly refining process, product, and engineering quality.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    headingStart: "Let's build something",
    headingEnd: "together",
    description:
      "I'm always open to new opportunities, collaborations, and interesting projects. Let's connect and create something meaningful.",
    cta: "Get in touch",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with precision and purpose.",
  },
  notFound: {
    title: "Page not found",
    description: "The address you tried to access does not exist in this portfolio.",
    cta: "Back to the homepage",
  },
};

export const portfolioContent: Record<Language, SiteCopy> = {
  pt: ptContent,
  en: enContent,
};
