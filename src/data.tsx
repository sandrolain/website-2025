import { commonColors, type LinkProps } from "@heroui/react";
import type { GlarePosition } from "react-parallax-tilt";
import {
  faLinkedin,
  faGithub,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import type { JSX } from "react";

export type Language = "it" | "en";

export type LangData<T> = Record<Language, T>;

export const tiltProps = {
  tiltEnable: true,
  tiltMaxAngleX: 5,
  tiltMaxAngleY: 5,
  glareEnable: true,
  glareMaxOpacity: 0.2,
  glareColor: commonColors.purple[500],
  glarePosition: "all" as GlarePosition,
  glareBorderRadius: "20px",
};

export interface Skill {
  name: string;
  level: number;
  url?: string; // Optional URL for skills that have a link
}

export interface Profile {
  name: string;
  title: string;
  avocation: string;
  location: string;
  locationUrl: string;
  website: string;
  headline: string;
  socials: {
    label: string;
    url: string;
    color: LinkProps["color"];
    icon: IconDefinition;
  }[];
}

const years = (new Date().getFullYear() - 2007).toString();

export const profileLangs: LangData<Profile> = {
  it: {
    name: "Sandro Lain",
    title: "Cloud Full Stack Architecture DevelOps Engineer",
    avocation: "Donatore di sangue 🩸",
    location: "Monselice, Padova, Italia",
    locationUrl: "https://maps.app.goo.gl/P9L26ghoJ3mLLTZF6",
    website: "https://www.sandrolain.com",
    headline: `Cloud-Native Engineer ☁️ | DevOps & Platform Integrator ♾️ | ${years}+ yrs Fullstack Development | Cybersecurity Advocate ⚔️`,
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sandrolain/",
        color: "primary",
        icon: faLinkedin,
      },
      {
        label: "GitHub",
        url: "https://github.com/sandrolain",
        color: "secondary",
        icon: faGithub,
      },
      {
        label: "FullstackDeveloper.it",
        url: "https://www.fullstackdeveloper.it",
        color: "success",
        icon: faGlobe,
      },
    ],
  },
  en: {
    name: "Sandro Lain",
    title: "Cloud Full Stack Architecture DevelOps Engineer",
    avocation: "Blood donor 🩸",
    location: "Monselice, Padua, Italy",
    locationUrl: "https://maps.app.goo.gl/P9L26ghoJ3mLLTZF6",
    website: "https://www.sandrolain.com",
    headline: `Cloud-Native Engineer ☁️ | DevOps & Platform Integrator ♾️ | 18+ yrs Fullstack Development | Cybersecurity Advocate ⚔️`,
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sandrolain/",
        color: "primary",
        icon: faLinkedin,
      },
      {
        label: "GitHub",
        url: "https://github.com/sandrolain",
        color: "secondary",
        icon: faGithub,
      },
      {
        label: "FullstackDeveloper.it",
        url: "https://www.fullstackdeveloper.it",
        color: "success",
        icon: faGlobe,
      },
    ],
  },
};

// --- SKILLS DATA ---
// --- SKILLS DATA ---
export const skills: { name: string; items: Skill[] }[] = [
  {
    name: "Languages & Fundamentals",
    items: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "ES6", level: 3 },
      { name: "Dart", level: 2 },
      { name: "GoLang", level: 3 },
      { name: "Rust", level: 1 },
      { name: "Java", level: 1 },
      { name: "PHP 6+", level: 3 },
      { name: "PHP 5+", level: 3 },
      { name: "SQL", level: 3 },
      { name: "YAML", level: 3 },
      { name: "JSON", level: 4 },
      { name: "Markdown", level: 3 },
      { name: "MDX", level: 3 },
      { name: "Regular expressions", level: 3 },
    ],
  },
  {
    name: "Frontend & UI",
    items: [
      { name: "HTML5+", level: 3 },
      { name: "CSS", level: 3 },
      { name: "SASS", level: 3 },
      { name: "LESS", level: 3 },
      { name: "Bootstrap", level: 2 },
      { name: "DOM", level: 4 },
      { name: "UI/UX design", level: 3 },
      { name: "Responsive design", level: 3 },
      { name: "LitElement", level: 3 },
      { name: "Web Components", level: 3 },
      { name: "Angular", level: 3 },
      { name: "Angular js", level: 3 },
      { name: "React", level: 3 },
      { name: "VueJS", level: 1 },
      { name: "SvelteJS", level: 1 },
      { name: "Jquery", level: 2 },
    ],
  },
  {
    name: "Backend, API & Integration",
    items: [
      { name: "NodeJS", level: 3 },
      { name: "NestJS", level: 3 },
      { name: "Data extraction", level: 3 },
      { name: "HTTP", level: 3 },
      { name: "gRPC", level: 3 },
      { name: "MQTT", level: 3 },
      { name: "WebSocket (WS)", level: 3 },
      { name: "TCP", level: 3 },
      { name: "UDP", level: 3 },
      { name: "TCP Modbus", level: 3 },
      { name: "OpenTherm", level: 3 },
      { name: "OpenAPI", level: 2 },
      { name: "Swagger", level: 2 },
      { name: "JSON Schema", level: 2 },
      { name: "Kafka", level: 2 },
      { name: "NATS", level: 2 },
      { name: "TOTP", level: 3 },
      { name: "JWT", level: 3 },
    ],
  },
  {
    name: "Databases & Storage",
    items: [
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "Memcached", level: 3 },
      { name: "Redis", level: 2 },
    ],
  },
  {
    name: "Mobile & Desktop",
    items: [
      { name: "Flutter", level: 3 },
      { name: "React Native", level: 1 },
      { name: "NativeScript", level: 1 },
      { name: "Wails", level: 2 },
    ],
  },
  {
    name: "DevOps, Cloud & Automation",
    items: [
      { name: "Kubernetes", level: 4 },
      { name: "Docker", level: 3 },
      { name: "AWS", level: 3 },
      { name: "GCP", level: 2 },
      { name: "Terraform", level: 1 },
      { name: "CloudFormation", level: 1 },
      { name: "ArgoCD", level: 3 },
      { name: "GitOps", level: 3 },
      { name: "Jenkins", level: 3 },
      { name: "Jenkinsfile", level: 3 },
      { name: "CI/CD (Jenkins, GitLab, GitHub, Netlify)", level: 3 },
      { name: "HELM", level: 2 },
      { name: "Apache", level: 3 },
      { name: "Nginx", level: 3 },
      { name: ".env", level: 3 },
      { name: "Editorconfig", level: 3 },
      { name: "Eslint", level: 3 },
      { name: "Shell script", level: 2 },
      { name: "SemVer", level: 3 },
      { name: "QRcode", level: 3 },
      { name: "Mermaid", level: 3, url: "https://mermaid.js.org/" },
    ],
  },
  {
    name: "Security",
    items: [
      { name: "Secure Coding", level: 3 },
      { name: "DevSecOps", level: 3 },
      { name: "Security Operations", level: 2 },
      { name: "mTLS", level: 2 },
      { name: "OAuth2/OIDC", level: 2 },
      { name: "Cifratura", level: 2 },
    ],
  },
  {
    name: "Testing & Quality",
    items: [
      { name: "Mocha", level: 3 },
      { name: "Jest", level: 3 },
      { name: "Cypress", level: 3 },
      { name: "Playwright", level: 3 },
      { name: "Webdriver", level: 3 },
    ],
  },
  {
    name: "Tools & Workflow",
    items: [
      { name: "GIT", level: 3 },
      { name: "Bitbucket", level: 3 },
      { name: "Jira", level: 3 },
      { name: "Github", level: 3 },
      { name: "GitLab", level: 3 },
      { name: "Prompt Engineering", level: 2 },
    ],
  },
];

// --- SOFT SKILLS DATA ---
export const softSkills: LangData<Skill[]> = {
  it: [
    { name: "Risoluzione proattiva dei problemi", level: 1 },
    { name: "Ottimizzazione dei processi di sviluppo", level: 1 },
    { name: "Lavoro in team e collaborazione con stakeholder", level: 1 },
    { name: "Analisi dei requisiti di progetto", level: 1 },
    { name: "Supporto al cliente", level: 1 },
    { name: "Redazione documentale (Docs, ADR, RFC, …)", level: 1 },
    { name: "Redazione liste test e report", level: 1 },
  ],
  en: [
    { name: "Proactive troubleshooting & problem solving", level: 1 },
    { name: "Optimization of development processes", level: 1 },
    { name: "Team work & stakeholder collaboration", level: 1 },
    { name: "Analysis of project requirements", level: 1 },
    { name: "Customer Support", level: 1 },
    { name: "Document redaction (Docs, ADR, RFC, …)", level: 1 },
    { name: "Tests lists & reports redaction", level: 1 },
  ],
};

export const descriptionLangs: LangData<() => JSX.Element> = {
  it: () => (
    <div className="description">
      <p>
        👋 Sono un Cloud Engineer e sviluppatore fullstack con oltre {years}
        anni di esperienza nello sviluppo di applicazioni web, architetture
        cloud e soluzioni dati scalabili e sicure.
      </p>
      <p>
        Lavoro su sistemi cloud-native, automazione DevOps e sviluppo
        end-to-end, con particolare attenzione all’esperienza utente, alla
        qualità del codice e alla sicurezza.
      </p>
      <p>
        Ho progettato e sviluppato piattaforme su Google Cloud Platform e
        Kubernetes, costruito pipeline CI/CD, e realizzato applicazioni per
        sistemi IoT, mobile e web.
      </p>
      <p>
        Coniugo le competenze backend (Go, Node.js, API event-driven) con quelle
        frontend (Angular, WebComponents, micro-frontends) per offrire soluzioni
        complete e moderne.
      </p>
      <p>
        Scrivo regolarmente di cloud, DevOps, AI e sviluppo su
        fullstackdeveloper.it e condivido progetti open source su GitHub.
      </p>
      <p>🔧 Competenze principali:</p>
      <ul>
        <li>
          Cloud & DevOps: GCP, Kubernetes, GitOps, Terraform, CI/CD,
          osservabilità
        </li>
        <li>Backend: Go, Node.js, REST/GraphQL, eventi, webhook</li>
        <li>
          Frontend: TypeScript, Angular, Lit, architetture a micro-frontend
        </li>
        <li>
          Mobile & IoT: App ibride JS/TS, connettività con beacon e device
        </li>
        <li>Sicurezza: mTLS, OAuth2/OIDC, cifratura, DevSecOps</li>
        <li>Testing: Cypress, WebDriver, Jest, test end-to-end</li>
      </ul>
      <p>
        🎯 Missione: creare architetture moderne e sicure, dal design alla
        produzione.
      </p>
    </div>
  ),
  en: () => (
    <div className="description">
      👋 I am a Cloud Engineer and fullstack developer with over {years} years
      of experience in developing web applications, cloud architectures, and
      scalable, secure data solutions.
      <br />
      I work on cloud-native systems, DevOps automation, and end-to-end
      development, with a strong focus on user experience, code quality, and
      security.
      <br />
      I have designed and developed platforms on Google Cloud Platform and
      Kubernetes, built CI/CD pipelines, and created applications for IoT,
      mobile, and web systems.
      <br />
      I combine backend skills (Go, Node.js, event-driven APIs) with frontend
      expertise (Angular, WebComponents, micro-frontends) to deliver complete
      and modern solutions.
      <br />
      I regularly write about cloud, DevOps, AI, and development on
      fullstackdeveloper.it and share open source projects on GitHub.
      <br />
      🔧 Main skills:
      <ul>
        <li>
          Cloud & DevOps: GCP, Kubernetes, GitOps, Terraform, CI/CD,
          observability
        </li>
        <li>Backend: Go, Node.js, REST/GraphQL, events, webhooks</li>
        <li>
          Frontend: TypeScript, Angular, Lit, micro-frontend architectures
        </li>
        <li>
          Mobile & IoT: Hybrid JS/TS apps, connectivity with beacons and devices
        </li>
        <li>Security: mTLS, OAuth2/OIDC, encryption, DevSecOps</li>
        <li>Testing: Cypress, WebDriver, Jest, end-to-end testing</li>
      </ul>
      🎯 Mission: to create modern and secure architectures, from design to
      production.`,
    </div>
  ),
};

export const certifications: LangData<
  { name: string; url: string; description: string }[]
> = {
  it: [
    {
      name: "Programming with Google Go",
      url: "/coursera/Coursera-WMUAQLKE6FVE.pdf",
      description: "Corso Coursera completato sul linguaggio Go",
    },
    {
      name: "Identifying Security Vulnerabilities",
      url: "/coursera/Coursera-BSLSZH7YV2LN.pdf",
      description:
        "Corso Coursera completato sull'identificazione delle vulnerabilità di sicurezza",
    },
    {
      name: "JavaScript Security",
      url: "/coursera/Coursera-LMZM9SGKWEM8.pdf",
      description: "Corso Coursera completato sulla sicurezza JavaScript",
    },
    {
      name: "Principles of Secure Coding",
      url: "/coursera/Coursera-WNUAWE6DFRSU.pdf",
      description:
        "Corso Coursera completato sui principi della programmazione sicura",
    },
  ],
  en: [
    {
      name: "Programming with Google Go",
      url: "/coursera/Coursera-WMUAQLKE6FVE.pdf",
      description: "Coursera course completion on Go programming language",
    },
    {
      name: "Identifying Security Vulnerabilities",
      url: "/coursera/Coursera-BSLSZH7YV2LN.pdf",
      description:
        "Coursera course completion on identifying security vulnerabilities",
    },
    {
      name: "JavaScript Security",
      url: "/coursera/Coursera-LMZM9SGKWEM8.pdf",
      description: "Coursera course completion on JavaScript security",
    },
    {
      name: "Principles of Secure Coding",
      url: "/coursera/Coursera-WNUAWE6DFRSU.pdf",
      description: "Coursera course completion on principles of secure coding",
    },
  ],
};

export const coursesProfiles: LangData<
  { name: string; url: string; description: string }[]
> = {
  it: [
    {
      name: "Profilo Pluralsight",
      url: "https://app.pluralsight.com/profile/sandro-lain",
      description: "Profilo Pluralsight con corsi e competenze archiviate",
    },
    {
      name: "Profilo Credly",
      url: "https://www.credly.com/users/sandro-lain/badges#credly",
      description: "Profilo Credly con corsi e competenze archiviate",
    },
  ],
  en: [
    {
      name: "Pluralsight Profile",
      url: "https://app.pluralsight.com/profile/sandro-lain",
      description: "My Pluralsight profile with archived courses and skills",
    },
    {
      name: "Creedly Profile",
      url: "https://www.credly.com/users/sandro-lain/badges#credly",
      description: "My Creedly profile with archived courses and skills",
    },
  ],
};

export interface WorkHistory {
  company: string;
  period: string;
  location: string;
  role: string;
}

// --- WORK HISTORY DATA ---
export const workHistory: LangData<WorkHistory[]> = {
  it: [
    {
      company: "M31",
      period: "2023 - oggi",
      location: "Padova",
      role: "Senior Cloud Engineer (SPAs, µSVCs, K8S)",
    },
    {
      company: "XTN Cognitive Security",
      period: "2019 - 2023",
      location: "Padova",
      role: "Senior Web Devel. (SPAs, webSDKs, µSVCs)",
    },
    {
      company: "Jiki",
      period: "2013 - 2019",
      location: "Rovigo",
      role: "Associate - CTO",
    },
    {
      company: "Libero professionista",
      period: "2008 - 2013",
      location: "Casa",
      role: "Sviluppatore siti web e CMS",
    },
  ],
  en: [
    {
      company: "M31",
      period: "2023 - now",
      location: "Padua",
      role: "Senior Cloud Engineer (SPAs, µSVCs, K8S)",
    },
    {
      company: "XTN Cognitive Security",
      period: "2019 - 2023",
      location: "Padua",
      role: "Senior Web Devel. (SPAs, webSDKs, µSVCs)",
    },
    {
      company: "Jiki",
      period: "2013 - 2019",
      location: "Rovigo",
      role: "Associate - CTO",
    },
    {
      company: "Self-employed",
      period: "2008 - 2013",
      location: "Home",
      role: "Websites and CMS developer",
    },
  ],
};

export interface Award {
  year: number;
  name: string;
  category: string;
  app: string;
  url: string;
}

// --- AWARDS DATA ---
export const awards: LangData<Award[]> = {
  it: [
    {
      year: 2014,
      name: "SMAU Mob App Awards",
      category: "Internet of Things e Utility",
      app: "Bertelli Remote Controller",
      url: "https://www.smau.it/news/smau-premia-migliori-app-per-smartphone-e-tablet",
    },
    {
      year: 2012,
      name: "SMAU Mob App Awards",
      category: "Community and Social",
      app: "Ce l’ho te lo presto",
      url: "https://www.smau.it/news/smau-premia-le-migliori-app-per-smartphone-e-tablet",
    },
  ],
  en: [
    {
      year: 2014,
      name: "SMAU Mob App Awards",
      category: "Internet of Things and Utility",
      app: "Bertelli Remote Controller",
      url: "https://www.smau.it/news/smau-premia-migliori-app-per-smartphone-e-tablet",
    },
    {
      year: 2012,
      name: "SMAU Mob App Awards",
      category: "Community and Social",
      app: "Ce l’ho te lo presto",
      url: "https://www.smau.it/news/smau-premia-le-migliori-app-per-smartphone-e-tablet",
    },
  ],
};

export interface SideProject {
  name: string;
  description: string;
}

// --- SIDE PROJECTS DATA ---
export const sideProjects: LangData<SideProject[]> = {
  it: [
    {
      name: "Smart Developer Tools",
      description:
        "Strumento multi-utility CLI / WebAssembly per l'uso quotidiano degli sviluppatori scritto in GoLang. Riduce l'uso di siti terzi che possono portare a furto di dati.",
    },
    {
      name: "Event Runner",
      description:
        "Servizio scritto in GoLang che consente di processare eventi in ingresso (es. NATS, HTTP, gRPC) tramite una macchina virtuale javascript e inoltrarli ad altri servizi.",
    },
    {
      name: "Identity",
      description:
        "Microservizio di autenticazione e identità come progetto di studio GoLang e sicurezza",
    },
    {
      name: "Irrigate",
      description:
        "Esercizio/demo di architettura a microservizi, simulando un controller di irrigazione da remoto stile IoT.",
    },
    {
      name: "Test Boss",
      description:
        "Servizio che gestisce progetti, liste test e report test (Rust + Angular)",
    },
  ],
  en: [
    {
      name: "Smart Developer Tools",
      description:
        "Multi-utility CLI / WebAssembly tool for developer daily usage written in GoLang. Reduces the use of third party sites that can lead to data theft.",
    },
    {
      name: "Event Runner",
      description:
        "Service written in GoLang that allows to process incoming events (ex. NATS, HTTP, gRPC) via a javascript virtual machine and forward them to other services.",
    },
    {
      name: "Identity",
      description:
        "Authentication and identity microservice as GoLang and security study project",
    },
    {
      name: "Irrigate",
      description:
        "Microservices architecture exercise/demo, simulating an IoT-like remote garden irrigation controller.",
    },
    {
      name: "Test Boss",
      description:
        "Service that manages projects, test lists and test reports (Rust + Angular)",
    },
  ],
};

// --- CAREER DESCRIPTION & MAIN PROJECTS ---
export const careerDescription: LangData<string> = {
  it: "Durante la mia carriera ho lavorato su una varietà di progetti che spaziano da soluzioni IoT ad applicazioni di controllo remoto. Ho sviluppato architetture a microservizi, applicazioni mobile e piattaforme cloud utilizzando tecnologie come NodeJS, GoLang, Postgres, Angular, React, REST, gRPC e MQTT su cluster Kubernetes. Questi progetti hanno migliorato l'esperienza utente e ottimizzato la gestione del ciclo di vita dei dispositivi remoti.",
  en: "Throughout my career, I have worked on a variety of projects ranging from IoT solutions to remote control applications. I have developed microservices architectures, mobile applications, and cloud platforms using technologies such as NodeJS, GoLang, Postgres, Angular, React, REST, gRPC, and MQTT on Kubernetes clusters. These projects have enhanced the user experience and optimized the lifecycle management of remote devices.",
};

export interface MainProject {
  name: string;
  description: string;
}

export const mainProjects: LangData<MainProject[]> = {
  it: [
    {
      name: "B&P ApiFire",
      description:
        "Soluzione IoT Cloud per la gestione del ciclo di vita di stufe e dispositivi remoti.",
    },
    {
      name: "Vimar By-Gate",
      description:
        "Applicazioni per la configurazione di cancelli motorizzati e controllo remoto.",
    },
    {
      name: "Tour in Tasca",
      description:
        "Applicazioni per musei e fiere con tecnologia iBeacon e QR code.",
    },
    {
      name: "Immergas Dominus",
      description:
        "Applicazioni per il controllo remoto e la programmazione di caldaie.",
    },
  ],
  en: [
    {
      name: "B&P ApiFire",
      description:
        "IoT Cloud solution for managing the lifecycle of remote stoves.",
    },
    {
      name: "Vimar By-Gate",
      description:
        "Applications for configuring motorized gates and remote control.",
    },
    {
      name: "Tour in Tasca",
      description:
        "Applications for museums and fairs using iBeacon and QR code technology.",
    },
    {
      name: "Immergas Dominus",
      description:
        "Applications for remote control and programming of boilers.",
    },
  ],
};
