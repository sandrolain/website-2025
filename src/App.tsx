import {
  Accordion,
  AccordionItem,
  Avatar,
  Card,
  CardBody,
  CardHeader,
  commonColors,
  Divider,
  HeroUIProvider,
  Link,
} from "@heroui/react";
import Tilt from "react-parallax-tilt";
import photo from "./assets/photo.jpg";
import Bg from "./Bg";
import {
  certifications,
  coursesProfiles,
  descriptionLangs,
  profileLangs,
  skills,
  tiltProps,
  workHistory,
  type LangData,
  type Language,
} from "./data";
import SkillList from "./SkillsList";
import { Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const lang: Language = "it";

const titles: LangData<Record<string, string>> = {
  it: {
    experience: "Esperienza lavorativa",
    knowledge: "Conoscenze e Certificazioni",
    education: "Istruzione",
    skills: "Competenze",
  },
  en: {
    experience: "Work Experience",
    knowledge: "Knowledge and Certifications",
    education: "Education",
    skills: "Skills",
  },
};

function App() {
  const profile = profileLangs[lang];
  const description = descriptionLangs[lang]();
  // Forzatura tema scuro
  return (
    <HeroUIProvider>
      <Bg />
      <div className="container mx-auto max-w-5xl flex flex-col gap-4 p-4 position-relative z-10">
        <Tilt {...tiltProps}>
          <Card className="glass">
            <CardHeader className="px-8 py-4">
              <Avatar
                src={photo}
                alt="Sandro Lain"
                size="lg"
                className="w-32 h-32"
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
                <div className="text-md text-gray-400">{profile.avocation}</div>
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

        <Section
          title={titles[lang].experience}
          reflexColor={commonColors.yellow[500]}
          glareColor={commonColors.yellow[300]}
        >
          <Accordion variant="splitted">
            {workHistory[lang].map((job) => (
              <AccordionItem
                key={job.company}
                title={job.company}
                className="glass cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-gray-300">{job.location}</p>
                  <div className="text-xs text-gray-400">{job.period}</div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* --- Skills Section --- */}
        <Section
          title={titles[lang].skills}
          reflexColor={commonColors.purple[500]}
          glareColor={commonColors.purple[300]}
        >
          <Accordion variant="splitted">
            {skills.map((skill) => (
              <AccordionItem
                key={skill.name}
                title={skill.name}
                className="glass cursor-pointer"
              >
                <SkillList
                  skills={skill.items}
                  color={commonColors.pink[500]}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        <Section
          title={titles[lang].knowledge}
          reflexColor={commonColors.green[500]}
          glareColor={commonColors.green[300]}
        >
          <div className="flex justify-between">
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
      </div>
    </HeroUIProvider>
  );
}

export default App;
