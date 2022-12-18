import Hero from '@components/Hero';
import styles from '@styles/Home.module.scss';
import ProjectCard from '@components/ProjectCard';
import Experience from '@components/Experience';

const Home = () => {
  return (
    <>
      <Hero />
      <div className={styles.section}>
        <h2 className={styles.subTitle}>01.&nbsp; Featured Projects 🛠</h2>
        <div className={styles.projectWrapper}>
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>02.&nbsp; Work Experience 👨🏻‍💻</h2>
        <div className={styles.work}>
          <Experience />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Home;
