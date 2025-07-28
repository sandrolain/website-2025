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
  tiltMaxAngleX: 10,
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
export const skills: { name: string; items: Skill[] }[] = [
  {
    name: "Frontend",
    items: [
      { name: "HTML5+", level: 3 },
      { name: "CSS", level: 3 },
      { name: "SASS", level: 3 },
      { name: "LESS", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "ES6", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "DOM", level: 4 },
      { name: "UI/UX design", level: 3 },
      { name: "Responsive design", level: 3 },
      { name: "Bootstrap", level: 2 },
      { name: "LitElement", level: 3 },
      { name: "Web Components", level: 3 },
      { name: "Angular", level: 3 },
      { name: "Angular js", level: 3 },
      { name: "React", level: 3 },
      { name: "VueJS", level: 1 },
      { name: "SvelteJS", level: 1 },
      { name: "Jquery", level: 2 },
      { name: "MDX", level: 3 },
      { name: "Markdown", level: 3 },
    ],
  },
  {
    name: "Backend & API",
    items: [
      { name: "NodeJS", level: 3 },
      { name: "GoLang", level: 3 },
      { name: "PHP 6+", level: 3 },
      { name: "PHP 5+", level: 3 },
      { name: "NestJS", level: 3 },
      { name: "Java", level: 1 },
      { name: "Rust", level: 1 },
      { name: "Regular expressions", level: 3 },
      { name: "Data extraction", level: 3 },
      { name: "HTTP", level: 3 },
      { name: "gRPC", level: 3 },
      { name: "MQTT", level: 3 },
      { name: "WebSocket (WS)", level: 3 },
      { name: "TCP", level: 3 },
      { name: "UDP", level: 3 },
      { name: "TCP Modbus", level: 3 },
      { name: "OpenTherm", level: 3 },
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "Memcached", level: 3 },
      { name: "SQL", level: 3 },
      { name: "YAML", level: 3 },
      { name: "JSON", level: 4 },
      { name: "OpenAPI", level: 2 },
      { name: "Swagger", level: 2 },
      { name: "JSON Schema", level: 2 },
      { name: "Kafka", level: 2 },
      { name: "Kafka", level: 1 },
      { name: "NATS", level: 2 },
      { name: "Redis", level: 2 },
      { name: "Redis", level: 2 },
      { name: "TOTP", level: 3 },
      { name: "JWT", level: 3 },
    ],
  },
  {
    name: "Mobile & Desktop",
    items: [
      { name: "Flutter", level: 3 },
      { name: "Flutter", level: 2 },
      { name: "Dart", level: 2 },
      { name: "React Native", level: 1 },
      { name: "NativeScript", level: 1 },
      { name: "Wails", level: 2 },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "Kubernetes", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "Docker", level: 3 },
      { name: "AWS", level: 3 },
      { name: "AWS", level: 2 },
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
      { name: "TOTP", level: 3 },
      { name: "JWT", level: 3 },
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
export const softSkills: Skill[] = [
  { name: "Proactive troubleshooting & problem solving", level: 1 },
  { name: "Optimization of development processes", level: 1 },
  { name: "Team work & stakeholder collaboration", level: 1 },
  { name: "Analysis of project requirements", level: 1 },
  { name: "Customer Support", level: 1 },
  { name: "Document redaction (Docs, ADR, RFC, …)", level: 1 },
  { name: "Tests lists & reports redaction", level: 1 },
];

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

//    <a href="/coursera/Coursera-WMUAQLKE6FVE.pdf" target="_blank">
//       Programming with Google Go
//     </a>
//   </li>
//   <li>
//     <a href="/coursera/Coursera-BSLSZH7YV2LN.pdf" target="_blank">
//       Identifying Security Vulnerabilities
//     </a>
//   </li>
//   <li>
//     <a href="/coursera/Coursera-LMZM9SGKWEM8.pdf" target="_blank">
//       JavaScript Security
//     </a>
//   </li>
//   <li>
//     <a href="/coursera/Coursera-WNUAWE6DFRSU.pdf" target="_blank">
//       Principles of Secure Coding
//     </a>
//   </li>
// </ul>
// <a
//   href="https://app.pluralsight.com/profile/sandro-lain"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Pluralsight Profile
// </a>

export const certifications = [
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
];

export const coursesProfiles = [
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
];

// --- WORK HISTORY DATA ---
export const workHistory = [
  {
    company: "M31",
    period: "2023 – now",
    location: "Padua",
    role: "Senior Cloud Engineer (SPAs, µSVCs, K8S)",
  },
  {
    company: "XTN Cognitive Security",
    period: "2019 – 2023",
    location: "Padua",
    role: "Senior Web Devel. (SPAs, webSDKs, µSVCs)",
  },
  {
    company: "Jiki",
    period: "2013 – 2019",
    location: "Rovigo",
    role: "Associate - CTO",
  },
  {
    company: "Self-employed",
    period: "2008 – 2013",
    location: "Home",
    role: "Websites and CMS developer",
  },
];
