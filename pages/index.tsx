import Head from 'next/head';
import NowPlaying from '../components/NowPlaying';
import Hero from '../components/Hero';

import styles from '../styles/Home.module.scss';
import Navbar from '@components/Navbar';
import ProjectCard from '@components/ProjectCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adarsh Sulegai</title>
        <meta name="description" content="Adarsh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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
        <div className={styles.work}></div>
      </div>

      <div className={styles.work}></div>

      <div className={styles.nowPlaying}>
        <NowPlaying />
      </div>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
