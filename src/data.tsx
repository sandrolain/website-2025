import { commonColors, type LinkProps } from "@heroui/react";
import type { GlarePosition } from "react-parallax-tilt";
import {
  faLinkedin,
  faGithub,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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

export const profile: Profile = {
  name: "Sandro Lain",
  title: "Cloud Full Stack Architecture DevelOps Engineer",
  location: "Monselice, Padova, Italia",
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
};

// --- SKILLS DATA ---
export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "React", level: 3 },
    { name: "Angular 2+", level: 4 },
    { name: "LitElement", level: 4 },
    { name: "Flutter", level: 3 },
    { name: "VueJS", level: 1 },
    { name: "SvelteJS", level: 1 },
    { name: "JavaScript", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "DOM", level: 4 },
    { name: "CSS", level: 4 },
    { name: "HTML", level: 4 },
    { name: "Bootstrap", level: 2 },
    { name: "Angular js", level: 3 },
    { name: "Jquery", level: 2 },
    { name: "MDX", level: 3 },
    { name: "Markdown", level: 3 },
  ],
  backend: [
    { name: "NodeJS", level: 3 },
    { name: "NestJS", level: 3 },
    { name: "GoLang", level: 4 },
    { name: "Java", level: 1 },
    { name: "Rust", level: 1 },
    { name: "PHP 5+", level: 3 },
    { name: "MySQL", level: 3 },
    { name: "MongoDB", level: 3 },
    { name: "Redis", level: 2 },
    { name: "Memcached", level: 3 },
    { name: "SQL", level: 3 },
    { name: "Kafka", level: 1 },
    { name: "MQTT", level: 3 },
    { name: "TCP Modbus", level: 3 },
    { name: "OpenTherm", level: 3 },
    { name: "JSON", level: 4 },
    { name: "YAML", level: 3 },
    { name: "JSON Schema", level: 3 },
    { name: "OpenAPI", level: 3 },
    { name: "TOTP", level: 3 },
    { name: "JWT", level: 3 },
  ],
  devops: [
    { name: "AWS", level: 3 },
    { name: "Docker", level: 3 },
    { name: "Kubernetes", level: 4 },
    { name: "HELM", level: 2 },
    { name: "Terraform", level: 3 },
    { name: "Jenkins", level: 3 },
    { name: "Jenkinsfile", level: 3 },
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
  altro: [
    { name: "Flutter", level: 3 },
    { name: "TOTP", level: 3 },
    { name: "JWT", level: 3 },
  ],
};

export const description = {
  it: () => (
    <div class="description">
      <p>
        👋 Sono un Cloud Engineer e sviluppatore fullstack con oltre 18 anni di
        esperienza nello sviluppo di applicazioni web, architetture cloud e
        soluzioni dati scalabili e sicure.
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
    <div class="description">
      👋 I am a Cloud Engineer and fullstack developer with over 18 years of
      experience in developing web applications, cloud architectures, and
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
