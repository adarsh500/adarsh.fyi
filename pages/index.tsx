import Hero from '@components/Hero';
import styles from '@styles/Home.module.scss';
import ProjectCard from '@components/ProjectCard';
import Experience from '@components/Experience';
import NowPlaying from '@components/NowPlaying';
import Dukaan from 'icons/Dukaan';
import CloudSEK from '@icons/CloudSEK';

const projects = [
  {
    title: 'Mark3',
    link: 'https://mark3.vercel.app',
    imageUrl:
      'https://og-image.vercel.app/**mark3**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg',
    description: `a bookmark management web app with sleek UI and dark mode
          which helps you seamlessly manage your bookmarks across browsers and devices`,
    githubUrl: 'https://github.com/adarsh500/mark',
  },

  {
    title: 'Cal.ndr',
    link: 'https://cal-nu.vercel.app',
    imageUrl:
      'https://og-image.vercel.app/**cal.ndr**.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg',

    description: `an open source events scheduling tool that makes booking and managing events a breeze`,
    githubUrl: 'https://github.com/adarsh500/cal.ndr',
  },
];

const work = [
  {
    company: 'CloudSEK',
    role: 'SDE Intern',
    location: 'Bangalore',
    duration: 'Nov 2022 - Present',
    shortDuration: `Nov - Present`,
    logo: CloudSEK,
    description: [
      'Working as an SDE Intern on the core platform team to build new features and improve the product.',
      'Check back later for more details',
      '* INSERT CRICKET NOISES *',
    ],
  },
  {
    company: 'Dukaan',
    role: 'Frontend Developer Intern',
    location: 'Bangalore',
    duration: 'Apr 2022 - June 2022',
    shortDuration: `Apr - June '22`,
    logo: Dukaan,
    description: [
      'Worked as a Front-End developer on the core product to develop new features and polish the user experience.',
      'Rolled out new features for review plugins like filtering, sorting reviews, and pagination.',
      'Incorporated theming-engine which improved performance and reduced app size',
      'Revamped one of the most popular themes on the app - Matrix',
      'Tech Stack used: ReactJS, NextJS, Javascript, Nunjucks, and SASS',
    ],
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
        {work.map((experience) => (
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
