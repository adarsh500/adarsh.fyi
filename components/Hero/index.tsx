import React from 'react';
import styles from './Hero.module.scss';
import { HiOutlineLink } from 'react-icons/hi';
import { FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <main className={styles.main}>
      <div
      // className={clsx(
      //   'rounded-full bg-gradient-to-r',
      //   'dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60',
      //   'from-blue-300 via-cyan-300 to-green-300 opacity-70',
      //   '-z-50 aspect-square w-full max-w-screen-lg blur-3xl filter',
      //   'bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]'
      //   // 'absolute'
      // )}
      >
        <div className={styles.container}>
          <p className={styles.title}>Adarsh Sulegai.</p>
          <p className={styles.tagline}>
            Obsessed with crafting beautiful experiences for the web
          </p>
          <p className={styles.about}>
            {/* 20 y/o full-stack developer working as an SDE Intern
            <b>
              <a href="https://cloudsek.com/" target="_blank">
                {' '}
                @CloudSEK
              </a>
            </b>
            , previously i worked as a Frontend Developer Intern
            <b>
              <a href="https://mydukaan.io/" target="_blank">
                {' '}
                @Dukaan
              </a>
            </b> */}
            20 y/o full-stack developer working as an SDE Intern @CloudSEK,
            previously i worked as a Frontend Developer Intern @Dukaan.
          </p>
          <div className={styles.ctaWrapper}>
            <button className={styles.primary}>
              Get résume
              <HiOutlineLink className={styles.icon} />
            </button>
            <button className={styles.secondary}>
              Say hi! <FiTwitter className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
