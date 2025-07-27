import {
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
  description,
  profile,
  skills,
  tiltProps,
} from "./data";
import SkillList from "./SkillsList";
import { Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // Forzatura tema scuro
  return (
    <HeroUIProvider>
      <Bg />
      <div className="container mx-auto max-w-4xl flex flex-col gap-4 p-4 position-relative z-10">
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
            <CardBody className="px-8 py-4">{description.it()}</CardBody>
          </Card>
        </Tilt>

        <Section
          title="Esperienza"
          reflexColor={commonColors.yellow[500]}
          glareColor={commonColors.blue[300]}
        >
          <div>
            <div>Senior Developer @ Azienda XYZ</div>
            <div>2021 - presente</div>
            <div>
              Sviluppo di applicazioni web moderne, design di architetture
              scalabili, mentoring team.
            </div>
          </div>
          <div>
            <div>Frontend Engineer @ Startup ABC</div>
            <div>2018 - 2021</div>
            <div>
              Progettazione UI/UX, sviluppo componenti React, collaborazione con
              designer e backend.
            </div>
          </div>
        </Section>

        <Section
          title="Knowledge and Certifications"
          reflexColor={commonColors.green[500]}
          glareColor={commonColors.pink[300]}
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Corsi</h3>
              {coursesProfiles.map((cert) => (
                <div key={cert.name}>
                  <Link
                    href={cert.url}
                    target="_blank"
                    color="primary"
                    className="mt-2 inline-block"
                  >
                    {cert.name}
                  </Link>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Certificazioni</h3>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <Link
                    href={cert.url}
                    target="_blank"
                    color="primary"
                    className="mt-2 inline-block"
                  >
                    {cert.name}
                  </Link>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* --- Skills Section --- */}
        <Section
          title="Skills and Expertise"
          reflexColor={commonColors.purple[500]}
          glareColor={commonColors.purple[300]}
        >
          <div className="flex flex-col gap-4">
            <SkillList
              title="Frontend"
              skills={skills.frontend}
              color={commonColors.blue[500]}
            />
            <SkillList
              title="Backend"
              skills={skills.backend}
              color={commonColors.green[500]}
            />
            <SkillList
              title="DevOps"
              skills={skills.devops}
              color={commonColors.yellow[500]}
            />
            <SkillList
              title="Altro"
              skills={skills.altro}
              color={commonColors.red[500]}
            />
          </div>
        </Section>
      </div>
    </HeroUIProvider>
  );
}

export default App;
