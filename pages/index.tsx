import Head from 'next/head';
import Image from 'next/image';
import TopTracks from '../components/TopTracks';
import NowPlaying from '../components/NowPlaying';
import Hero from '../components/Hero';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adarsh Sulegai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bk}>
        <Hero />
        <TopTracks />
      </div>
      <footer className={styles.footer}>
        <NowPlaying />
        <br />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}
