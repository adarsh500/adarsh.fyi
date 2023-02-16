import React from 'react';
import styles from './Layout.module.scss';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NowPlaying from '@components/NowPlaying';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const hide =
    router.pathname === '/blog/[slug]' || router.pathname === '/blog'
      ? true
      : false;

  return (
    <div className={styles.container}>
      <Head>
        <title>Adarsh Sulegai</title>
        <meta name="description" content="Adarsh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props?.children}
      {!hide && (
        <div className={styles.nowPlaying}>
          <NowPlaying />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
