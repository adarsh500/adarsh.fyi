import React from 'react';
import styles from './Layout.module.scss';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NowPlaying from '@components/NowPlaying';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adarsh Sulegai</title>
        <meta name="description" content="Adarsh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props?.children}
      <Footer />
      <div className={styles.nowPlaying}>
        <NowPlaying />
      </div>
    </div>
  );
};

export default Layout;
