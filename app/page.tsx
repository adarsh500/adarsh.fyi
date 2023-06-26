import { projects } from "@components/Content/projects";
import { skills } from "@components/Content/skills";
import { work } from "@components/Content/work";
import Hero from "@components/Hero";
import styles from "@styles/Home.module.scss";

import Experience from "@components/Experience";
import NowPlaying from "@components/NowPlaying";
import ProjectCard from "@components/ProjectCard";
import Section from "@components/Section";
import TechCard from "@components/TechCard";

const Home = (props: any) => (
  <>
    <Hero />
    <Section subtitle="Featured Projects">
      <div className={styles.projectWrapper}>
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Tech I work with">
      <div className={styles.carousel}>
        {skills.map((skill, index) => (
          <TechCard {...skill} key={index} />
        ))}
      </div>
    </Section>

    <Section subtitle="Work">
      <div className={styles.work}>
        {work.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </div>
    </Section>

    <div className={styles.spotify}>
      <NowPlaying />
    </div>
  </>
);

export default Home;
