import Hero from '@components/Hero';
import styles from '@styles/Home.module.scss';
import { projects } from '@components/Content/projects';
import { skills } from '@components/Content/skills';
import { work } from '@components/Content/work';

import ProjectCard from '@components/ProjectCard';
import TechCard from '@components/TechCard';
import Experience from '@components/Experience';
import NowPlaying from '@components/NowPlaying';

const Home = (props: any) => (
  <>
    <Hero />
    <div className={styles.section}>
      <h2 className={styles.subTitle}>Featured Projects</h2>
      <div className={styles.projectWrapper}>
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.subTitle}>Tech I work with</h2>
      <div className={styles.carousel}>
        {skills.map((skill, index) => (
          <TechCard {...skill} key={index} />
        ))}
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.subTitle}>Work </h2>
      <div className={styles.work}>
        {work.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </div>
    </div>

    <div className={styles.spotify}>
      <NowPlaying />
    </div>
  </>
);

export default Home;