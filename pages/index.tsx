import Hero from '@components/Hero';
import styles from '@styles/Home.module.scss';
import ProjectCard from '@components/ProjectCard';
import Experience from '@components/Experience';
import NowPlaying from '@components/NowPlaying';

const projects = [
  
  {
    title: 'Mark3',
    link: 'https://mark3.vercel.app',
    description: `a super useful bookmark management web app with sleek UI and dark mode
          a super useful bookmark management web app with sleek UI and dark mode`,
    githubUrl: 'https://github.com/adarsh500/mark',
  },
  
  {
    title: 'Cal.ndr',
    link: 'https://cal-nu.vercel.app',
    description: `a super useful bookmark management web app with sleek UI and dark mode
          a super useful bookmark management web app with sleek UI and dark mode`,
    githubUrl: 'https://github.com/adarsh500/cal.ndr',
  },
];

const Home = () => (
  <>
    <Hero />
    <div className={styles.section}>
      <h2 className={styles.subTitle}>Featured Projects</h2>
      <div className={styles.projectWrapper}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>

    <div className={styles.section}>
      <h2 className={styles.subTitle}>Work Experience</h2>
      <div className={styles.work}>
        <Experience />
        <Experience />
      </div>
    </div>

    <div className={styles.spotify}>
      <NowPlaying />
    </div>
  </>
);

export default Home;
