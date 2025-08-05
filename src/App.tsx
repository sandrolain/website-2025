import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  commonColors,
  Divider,
  HeroUIProvider,
  Link,
  type AccordionProps,
} from "@heroui/react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import photo from "./assets/avatar-tron.jpg";
import Bg from "./Bg";
import {
  awards,
  certifications,
  coursesProfiles,
  descriptionLangs,
  education,
  profileLangs,
  skills,
  softSkills,
  tiltProps,
  workHistory,
  type LangData,
  type Language,
} from "./data";
import SkillList from "./SkillsList";
import { Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollProgress } from "./ScrollProgress";

// Funzione per rilevare la lingua preferita del browser
const detectBrowserLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("it")) {
      return "it";
    }
  }
  return "en";
};

// Componente selettore lingua
const LanguageSelector = ({
  currentLang,
  onLanguageChange,
}: {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}) => (
  <div className="flex flex-col gap-2">
    <Button
      size="sm"
      variant={currentLang === "it" ? "ghost" : "light"}
      color="default"
      onPress={() => onLanguageChange("it")}
    >
      🇮🇹 IT
    </Button>
    <Button
      size="sm"
      variant={currentLang === "en" ? "ghost" : "light"}
      color="default"
      onPress={() => onLanguageChange("en")}
    >
      🇬🇧 EN
    </Button>
  </div>
);

const titles: LangData<Record<string, string>> = {
  it: {
    experience: "Esperienza lavorativa",
    knowledge: "Conoscenze e Certificazioni",
    education: "Istruzione",
    skills: "Competenze",
    softSkills: "Soft Skills",
    awards: "Premi e Riconoscimenti",
  },
  en: {
    experience: "Work Experience",
    knowledge: "Knowledge and Certifications",
    education: "Education",
    skills: "Skills",
    softSkills: "Soft Skills",
    awards: "Awards and Recognition",
  },
};

const accordionProps: Partial<AccordionProps> = {
  variant: "splitted",
  selectionMode: "multiple",
  selectionBehavior: "toggle",
};

function App() {
  // Stato per la lingua corrente
  const [lang, setLang] = useState<Language>(() => {
    // Inizializza con la lingua del browser o "en" come fallback
    return detectBrowserLanguage();
  });

  const profile = profileLangs[lang];
  const description = descriptionLangs[lang]();

  // Forzatura tema scuro
  return (
    <HeroUIProvider>
      <ScrollProgress />
      <Bg />
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
      </div>
      <div className="mx-auto max-w-5xl  p-4 ">
        <div className="min-h-[100vh]">
          <div className="sticky top-0 z-10 flex min-h-[100vh] items-center justify-center">
            <div className="sticky top-10 z-10">
              <Tilt {...{ ...tiltProps, glareColor: commonColors.blue[400] }}>
                <Card
                  className="glass"
                  style={
                    {
                      "--reflex-color": commonColors.blue[400],
                    } as React.CSSProperties
                  }
                >
                  <CardHeader className="px-8 py-4">
                    <Avatar
                      src={photo}
                      alt="Sandro Lain"
                      size="lg"
                      className="w-32 h-32 border-2 border-cyan-500"
                      radius="full"
                    />
                    <div className="flex flex-col  ml-4">
                      <h1 className="text-4xl font-thin m-0">{profile.name}</h1>
                      <div className="text-lg">{profile.title}</div>
                      <div>
                        <Link
                          href={profile.locationUrl}
                          color="foreground"
                          target="_blank"
                        >
                          {profile.location}
                        </Link>
                      </div>
                      <div className="text-md text-gray-400">
                        {profile.avocation}
                      </div>
                      <div className="flex flex-wrap mt-2 gap-4">
                        {profile.socials.map((s) => (
                          <Link
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            color={s.color}
                            size="md"
                          >
                            <FontAwesomeIcon icon={s.icon} className="mr-1" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody className="px-8 py-4">{profile.headline}</CardBody>
                  <Divider />
                  <CardBody className="px-8 py-4">{description}</CardBody>
                </Card>
              </Tilt>
            </div>
          </div>
        </div>

        {/* --- Work Experience Section --- */}

        <Section
          icon="bi bi-briefcase"
          title={titles[lang].experience}
          reflexColor={commonColors.cyan[500]}
          glareColor={commonColors.cyan[500]}
        >
          <Accordion {...accordionProps}>
            {workHistory[lang].map((job) => (
              <AccordionItem
                key={job.company}
                title={job.company}
                subtitle={
                  job.role + " - " + job.location + " (" + job.period + ")"
                }
                className="glass cursor-pointer"
              >
                <div className="description">{job.description?.()}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* --- Soft Skills Section --- */}

        <Section
          icon="bi bi-people"
          title={titles[lang].softSkills}
          reflexColor={commonColors.green[500]}
          glareColor={commonColors.green[500]}
        >
          <Accordion {...accordionProps}>
            {softSkills[lang].map((skill) => (
              <AccordionItem
                key={skill.name}
                title={skill.name}
                className="glass cursor-pointer"
              >
                {skill.description}
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* --- Skills Section --- */}
        <Section
          icon="bi bi-tools"
          title={titles[lang].skills}
          reflexColor={commonColors.yellow[500]}
          glareColor={commonColors.yellow[500]}
        >
          <Accordion {...accordionProps}>
            {skills.map((skill) => (
              <AccordionItem
                key={skill.name}
                title={skill.name}
                className="glass cursor-pointer"
              >
                <SkillList
                  skills={skill.items}
                  color={commonColors.yellow[500]}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* --- Awards Section --- */}

        <Section
          icon="bi bi-trophy"
          title={titles[lang].awards}
          reflexColor={commonColors.red[500]}
          glareColor={commonColors.red[500]}
        >
          <Accordion {...accordionProps}>
            {awards[lang].map((award) => (
              <AccordionItem
                key={award.name + " - " + award.year}
                title={award.name + " (" + award.year + ")"}
                subtitle={award.category + " - " + award.app}
                className="glass cursor-pointer"
              >
                <div className="description">
                  <p>
                    <strong>Categoria:</strong> {award.category}
                  </p>
                  <p>
                    <strong>Applicazione:</strong> {award.app}
                  </p>
                  <p>
                    <Link
                      href={award.url}
                      target="_blank"
                      color="primary"
                      className="text-sm"
                    >
                      {award.url}
                    </Link>
                  </p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* --- Certifications Section --- */}

        <Section
          icon="bi bi-award"
          title={titles[lang].knowledge}
          reflexColor={commonColors.pink[500]}
          glareColor={commonColors.pink[500]}
        >
          <div className="flex md:flex-row flex-col gap-6 justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Corsi</h3>
              {coursesProfiles[lang].map((cert) => (
                <div key={cert.name}>
                  <Link
                    href={cert.url}
                    target="_blank"
                    color="primary"
                    className="mt-2 inline-block"
                  >
                    {cert.name}
                  </Link>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Certificazioni</h3>
              {certifications[lang].map((cert) => (
                <div key={cert.name}>
                  <Link
                    href={cert.url}
                    target="_blank"
                    color="primary"
                    className="mt-2 inline-block"
                  >
                    {cert.name}
                  </Link>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Education Section --- */}

        <Section
          icon="bi bi-mortarboard"
          title={titles[lang].education}
          reflexColor={commonColors.purple[500]}
          glareColor={commonColors.purple[500]}
        >
          <div className="flex flex-col gap-4">
            <ul className="sm:columns-2 gap-8 text-sm">
              {education[lang].map((edu) => (
                <li key={edu.institution} className="break-inside-avoid">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-300">{edu.institution}</p>
                  <div className="text-xs text-gray-400">{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* --- Footer --- */}
      </div>
    </HeroUIProvider>
  );
}

export default App;
