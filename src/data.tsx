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
  description?: string; // Optional description for skills
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
    {
      name: "Risoluzione proattiva dei problemi",
      level: 1,
      description:
        "Capacità di identificare e risolvere problematiche tecniche prima che diventino critiche, utilizzando approccio analitico e metodologie structured troubleshooting",
    },
    {
      name: "Ottimizzazione dei processi di sviluppo",
      level: 1,
      description:
        "Miglioramento continuo di workflow, automazione di task ripetitivi e implementazione di best practices per incrementare l'efficienza del team",
    },
    {
      name: "Lavoro in team e collaborazione con stakeholder",
      level: 1,
      description:
        "Comunicazione efficace con team multidisciplinari, gestione delle aspettative e facilitazione della collaborazione tra ruoli tecnici e business",
    },
    {
      name: "Analisi dei requisiti di progetto",
      level: 1,
      description:
        "Capacità di interpretare le esigenze business, tradurle in specifiche tecniche dettagliate e identificare potenziali rischi e opportunità",
    },
    {
      name: "Supporto al cliente",
      level: 1,
      description:
        "Assistenza tecnica qualificata, gestione di escalation complesse e capacità di spiegare concetti tecnici in modo accessibile",
    },
    {
      name: "Redazione documentale (Docs, ADR, RFC, …)",
      level: 1,
      description:
        "Creazione di documentazione tecnica chiara e strutturata, inclusi Architecture Decision Records e Request for Comments per facilitare decision-making",
    },
    {
      name: "Redazione liste test e report",
      level: 1,
      description:
        "Sviluppo di piani di test completi, definizione di test cases e creazione di report dettagliati per garantire qualità e tracciabilità",
    },
  ],
  en: [
    {
      name: "Proactive troubleshooting & problem solving",
      level: 1,
      description:
        "Ability to identify and resolve technical issues before they become critical, using analytical approach and structured troubleshooting methodologies",
    },
    {
      name: "Optimization of development processes",
      level: 1,
      description:
        "Continuous improvement of workflows, automation of repetitive tasks and implementation of best practices to increase team efficiency",
    },
    {
      name: "Team work & stakeholder collaboration",
      level: 1,
      description:
        "Effective communication with multidisciplinary teams, expectation management and facilitation of collaboration between technical and business roles",
    },
    {
      name: "Analysis of project requirements",
      level: 1,
      description:
        "Ability to interpret business needs, translate them into detailed technical specifications and identify potential risks and opportunities",
    },
    {
      name: "Customer Support",
      level: 1,
      description:
        "Qualified technical assistance, management of complex escalations and ability to explain technical concepts in an accessible way",
    },
    {
      name: "Document redaction (Docs, ADR, RFC, …)",
      level: 1,
      description:
        "Creation of clear and structured technical documentation, including Architecture Decision Records and Request for Comments to facilitate decision-making",
    },
    {
      name: "Tests lists & reports redaction",
      level: 1,
      description:
        "Development of comprehensive test plans, definition of test cases and creation of detailed reports to ensure quality and traceability",
    },
  ],
};

export const descriptionLangs: LangData<() => JSX.Element> = {
  it: () => (
    <div className="description">
      <p>
        👋 Sono un Cloud Engineer e sviluppatore fullstack con oltre {years}{" "}
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
      <p>
        👋 I am a Cloud Engineer and fullstack developer with over {years} years
        of experience in developing web applications, cloud architectures, and
        scalable, secure data solutions.
      </p>
      <p>
        I work on cloud-native systems, DevOps automation, and end-to-end
        development, with a strong focus on user experience, code quality, and
        security.
      </p>
      <p>
        I have designed and developed platforms on Google Cloud Platform and
        Kubernetes, built CI/CD pipelines, and created applications for IoT,
        mobile, and web systems.
      </p>
      <p>
        I combine backend skills (Go, Node.js, event-driven APIs) with frontend
        expertise (Angular, WebComponents, micro-frontends) to deliver complete
        and modern solutions.
      </p>
      <p>
        I regularly write about cloud, DevOps, AI, and development on
        fullstackdeveloper.it and share open source projects on GitHub.
      </p>
      <p>🔧 Main skills:</p>
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
      <p>
        🎯 Mission: to create modern and secure architectures, from design to
        production.
      </p>
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
  description?: () => React.ReactNode; // Optional description for work history
}

// --- WORK HISTORY DATA ---
export const workHistory: LangData<WorkHistory[]> = {
  it: [
    {
      company: "M31",
      period: "2023 - oggi",
      location: "Padova, Italia",
      role: "Senior Cloud Engineer (SPAs, µSVCs, K8S)",
      description: () => (
        <>
          <p>
            Nel corso della mia esperienza in <strong>M31</strong>, ho
            contribuito attivamente allo sviluppo di soluzioni software
            complesse, ricoprendo un ruolo trasversale tra sviluppo applicativo,
            architettura cloud e operations.
          </p>
          <p>
            Mi sono occupato dello{" "}
            <strong>
              sviluppo e della manutenzione di servizi backend e frontend
            </strong>
            , garantendo qualità, manutenibilità e performance delle soluzioni
            rilasciate. Ho curato la{" "}
            <strong>
              gestione di pipeline di trasformazione e storage dei dati
            </strong>
            , implementando flussi affidabili e scalabili per l'elaborazione e
            la conservazione dei dati aziendali.
          </p>
          <p>
            Ho seguito la{" "}
            <strong>progettazione e la manutenzione di pipeline CI/CD</strong>,
            contribuendo all’automatizzazione e all’efficienza del ciclo di
            sviluppo e rilascio del software. Parallelamente, ho partecipato
            alla{" "}
            <strong>
              progettazione e implementazione di architetture cloud
            </strong>
            , adottando best practice per ambienti distribuiti e scalabili.
          </p>
          <p>
            In ambito industriale, ho collaborato alla{" "}
            <strong>
              progettazione e allo sviluppo di interfacce macchina
            </strong>
            , con particolare attenzione all'integrazione tra sistemi hardware e
            software, anche in contesti IoT.
          </p>
          <p>
            Inoltre, ho svolto attività di{" "}
            <strong>
              tutoring aziendale per studenti dell’Università di Padova
            </strong>{" "}
            in tirocinio curricolare, supportandoli nel loro percorso formativo
            e nello sviluppo di progetti legati alla loro tesi di laurea.
          </p>
        </>
      ),
    },
    {
      company: "XTN Cognitive Security",
      period: "2019 - 2023",
      location: "Padova, Italia",
      role: "Senior Frontend Developer (SPAs, webSDKs, µSVCs)",
      description: () => (
        <>
          <p>
            Nel corso della mia esperienza in <strong>XTN</strong>, mi sono
            concentrato sullo sviluppo di soluzioni web orientate alla sicurezza
            informatica, con particolare focus sull’integrazione delle
            tecnologie antifrode.
          </p>
          <p>
            Ho curato lo{" "}
            <strong>
              sviluppo e la manutenzione di SDK JavaScript frontend
            </strong>
            , progettati per integrare in modo efficiente le soluzioni antifrode
            dell’azienda all’interno di applicazioni web di terze parti. Questa
            attività ha richiesto un{" "}
            <strong>approfondimento avanzato delle Web API del browser</strong>{" "}
            e delle tecniche di integrazione sicura lato client.
          </p>
          <p>
            Parallelamente, ho partecipato allo{" "}
            <strong>sviluppo di dashboard di prodotto</strong> per la gestione
            della piattaforma antifrode, realizzando interfacce moderne e
            funzionali per l’analisi e il controllo degli eventi rilevati.
          </p>
          <p>
            Ho inoltre contribuito allo <strong>sviluppo di API backend</strong>
            , progettate per supportare la comunicazione tra gli SDK frontend e
            i sistemi di analisi del backend, garantendo coerenza, sicurezza e
            performance nello scambio di dati sensibili.
          </p>
        </>
      ),
    },
    {
      company: "Jiki",
      period: "2013 - 2019",
      location: "Rovigo, Italia",
      role: "Associate / CTO / Fullstack Developer",
      description: () => (
        <>
          <p>
            In qualità di{" "}
            <strong>associate, CTO e full stack developer presso Jiki</strong>,
            ho guidato lo sviluppo di{" "}
            <strong>soluzioni software su misura</strong> per una varietà di
            clienti e settori, con un forte orientamento all’innovazione e alla
            qualità dell’esperienza utente.
          </p>
          <p>
            Mi sono occupato della{" "}
            <strong>
              progettazione e realizzazione di siti web ad alto impatto grafico
            </strong>{" "}
            e della definizione dell’
            <strong>esperienza utente (UX) e dell’interfaccia (UI)</strong>,
            lavorando in stretta collaborazione con designer e clienti. Ho
            inoltre seguito lo sviluppo di <strong>servizi SaaS</strong> e{" "}
            <strong>web app per la gestione documentale da tablet</strong>, con
            particolare attenzione all’usabilità e all’integrazione nei flussi
            aziendali.
          </p>
          <p>
            Sul versante tecnico, ho progettato e sviluppato sia{" "}
            <strong>API backend</strong> sia componenti per la{" "}
            <strong>comunicazione real-time</strong>, gestendo architetture
            scalabili e affidabili. In ambito <strong>IoT e domotica</strong>,
            ho contribuito alla realizzazione di{" "}
            <strong>
              app web e native per il controllo remoto di dispositivi
            </strong>
            , integrando tecnologie come{" "}
            <strong>geolocalizzazione e iBeacon</strong> per funzionalità
            avanzate di interazione contestuale.
          </p>
          <p>
            Questa esperienza mi ha permesso di combinare competenze
            strategiche, tecniche e di product design in progetti concreti,
            contribuendo alla crescita della realtà aziendale e alla
            soddisfazione dei clienti.
          </p>
        </>
      ),
    },
    {
      company: "Libero professionista",
      period: "2008 - 2013",
      location: "Padova, Italia",
      role: "Sviluppatore siti web e CMS",
      description: () => (
        <>
          {" "}
          <p>
            Come <strong>libero professionista</strong>, ho lavorato alla{" "}
            <strong>realizzazione di siti web a finalità promozionale</strong>,
            supportando piccole imprese, professionisti e associazioni nella
            creazione della propria identità digitale.
          </p>
          <p>
            Oltre allo sviluppo dell’interfaccia pubblica, mi sono occupato
            anche dell’implementazione di{" "}
            <strong>sistemi CMS personalizzati</strong> per la gestione autonoma
            dei contenuti, offrendo soluzioni su misura in base alle esigenze
            del cliente.
          </p>
          <p>
            Questa esperienza mi ha permesso di affinare le mie competenze full
            stack e di seguire l’intero ciclo di vita del progetto, dal brief
            iniziale alla messa online, fino all’assistenza post-lancio.
          </p>
        </>
      ),
    },
  ],
  en: [
    {
      company: "M31",
      period: "2023 - now",
      location: "Padua, Italy",
      role: "Senior Cloud Engineer (SPAs, µSVCs, K8S)",
      description: () => (
        <>
          <p>
            During my experience at <strong>M31</strong>, I actively contributed
            to the development of complex software solutions, playing a
            cross-functional role between application development, cloud
            architecture, and operations.
          </p>
          <p>
            I was responsible for the{" "}
            <strong>
              development and maintenance of backend and frontend services
            </strong>
            , ensuring quality, maintainability, and performance of the released
            solutions. I managed the{" "}
            <strong>data transformation and storage pipelines</strong>,
            implementing reliable and scalable flows for processing and storing
            business data.
          </p>
          <p>
            I oversaw the{" "}
            <strong>design and maintenance of CI/CD pipelines</strong>,
            contributing to the automation and efficiency of the software
            development and release cycle. Simultaneously, I participated in the{" "}
            <strong>design and implementation of cloud architectures</strong>,
            adopting best practices for distributed and scalable environments.
          </p>
          <p>
            In the industrial sector, I collaborated on the{" "}
            <strong>design and development of machine interfaces</strong>,
            focusing on integrating hardware and software systems, including IoT
            contexts.
          </p>
          <p>
            Additionally, I provided{" "}
            <strong>mentoring for students from the University of Padua</strong>{" "}
            during their curricular internships, supporting them in their
            training path and project development related to their thesis work.
          </p>
        </>
      ),
    },
    {
      company: "XTN Cognitive Security",
      period: "2019 - 2023",
      location: "Padua, Italy",
      role: "Senior Frontend Developer (SPAs, webSDKs, µSVCs)",
      description: () => (
        <>
          <p>
            During my experience at <strong>XTN</strong>, I focused on
            developing web solutions oriented towards cybersecurity, with a
            particular emphasis on integrating anti-fraud technologies.
          </p>
          <p>
            I was responsible for the{" "}
            <strong>
              development and maintenance of frontend JavaScript SDKs
            </strong>
            , designed to efficiently integrate the company's anti-fraud
            solutions into third-party web applications. This required an{" "}
            <strong>advanced understanding of browser Web APIs</strong> and
            secure client-side integration techniques.
          </p>
          <p>
            Concurrently, I participated in the{" "}
            <strong>development of product dashboards</strong> for managing the
            anti-fraud platform, creating modern and functional interfaces for
            analyzing and controlling detected events.
          </p>
          <p>
            I also contributed to the{" "}
            <strong>development of backend APIs</strong>, designed to support
            communication between frontend SDKs and backend analysis systems,
            ensuring consistency, security, and performance in the exchange of
            sensitive data.
          </p>
        </>
      ),
    },
    {
      company: "Jiki",
      period: "2013 - 2019",
      location: "Rovigo, Italy",
      role: "Associate - CTO",
      description: () => (
        <>
          <p>
            As an{" "}
            <strong>associate, CTO, and full stack developer at Jiki</strong>, I
            led the development of <strong>custom software solutions</strong>{" "}
            for a variety of clients and sectors, with a strong focus on
            innovation and user experience quality.
          </p>
          <p>
            I was responsible for the{" "}
            <strong>
              design and implementation of high-impact graphic websites
            </strong>{" "}
            and defining the{" "}
            <strong>user experience (UX) and interface (UI)</strong>, working
            closely with designers and clients. I also oversaw the development
            of <strong>SaaS solutions</strong> and{" "}
            <strong>web apps for document management on tablets</strong>, with a
            focus on usability and integration into business workflows.
          </p>
          <p>
            On the technical side, I designed and developed both{" "}
            <strong>backend APIs</strong> and components for{" "}
            <strong>real-time communication</strong>, managing scalable and
            reliable architectures. In the field of{" "}
            <strong>IoT and home automation</strong>, I contributed to the
            creation of{" "}
            <strong>web and native apps for remote device control</strong>,
            integrating technologies such as{" "}
            <strong>geolocation and iBeacon</strong> for advanced contextual
            interaction features.
          </p>
          <p>
            This experience allowed me to combine strategic, technical, and
            product design skills in concrete projects, contributing to the
            growth of the company and client satisfaction.
          </p>
        </>
      ),
    },
    {
      company: "Self-employed",
      period: "2008 - 2013",
      location: "Padua, Italy",
      role: "Websites and CMS developer",
      description: () => (
        <>
          <p>
            As a <strong>self-employed developer</strong>, I worked on{" "}
            <strong>creating promotional websites</strong>, supporting small
            businesses, professionals, and associations in establishing their
            digital identity.
          </p>
          <p>
            In addition to developing the public interface, I also implemented{" "}
            <strong>custom CMS systems</strong> for autonomous content
            management, offering tailored solutions based on client needs.
          </p>
          <p>
            This experience allowed me to refine my full stack skills and manage
            the entire project lifecycle, from initial brief to online launch,
            including post-launch support.
          </p>
        </>
      ),
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

export interface Education {
  degree: string;
  period: string;
  institution: string;
}

export const education: LangData<Education[]> = {
  it: [
    {
      degree: "Primo anno di Ingegneria Informatica",
      period: "2003 - 2004",
      institution: "Università di Padova",
    },
    {
      degree: "Perito tecnico chimico-biologico",
      period: "1998 - 2003",
      institution: "IIS Cattaneo, Monselice (Italia)",
    },
  ],
  en: [
    {
      degree: "First year of IT engineering",
      period: "2003 - 2004",
      institution: "University of Padua",
    },
    {
      degree: "Biochemist technician",
      period: "1998 - 2003",
      institution: "IIS Cattaneo, Monselice (Italy)",
    },
  ],
};
