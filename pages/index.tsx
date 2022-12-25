import Hero from '@components/Hero';
import styles from '@styles/Home.module.scss';
import ProjectCard from '@components/ProjectCard';
import Experience from '@components/Experience';
import NowPlaying from '@components/NowPlaying';

import { work } from '@components/Content/work';
import { projects } from '@components/Content/projects';

const Home = () => (
  <>
    <Hero />
    <div className={styles.section}>
      <h2 className={styles.subTitle}>Featured Projects</h2>
      <div className={styles.projectWrapper}>
        {projects.slice(0, 2).map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.subTitle}>Work Experience</h2>
      <div className={styles.work}>
        {work.slice(0, 2).map((experience) => (
          <Experience {...experience} />
        ))}
      </div>
    </div>

    <div className={styles.spotify}>
      <NowPlaying />
    </div>
  </>
);

export default Home;
