import React from 'react';
import styles from './Hero.module.scss';
import { HiOutlineLink } from 'react-icons/hi';
import { FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <div>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          I'm <a href="https://nextjs.org">Adarsh Sulegai</a>
        </h1> */}
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
            {/* <p className={styles.secondaryText}>Hi i'm</p> */}
            <p className={styles.primaryText}>Adarsh Sulegai.</p>
            <p className={styles.tagline}>
              Obsessed with crafting beautiful experiences for the web 🛠
            </p>
            <p className={styles.about}>
              20 y/o full-stack developer currently working as a SDE-Intern
              @CloudSEK, previously i worked as a Frontend Developer Intern
              @Dukaan. I study Computer Science at DSCE, Bangalore. When i'm not
              writing code, you can find me talking about bikes 🏍, mechanical
              keyboards 🎮 and star wars ✨
            </p>
            <div className={styles.ctaWrapper}>
              <button className={styles.invertedCta}>
                Get résume
                <HiOutlineLink className={styles.icon} />
              </button>
              <button className={styles.cta}>
                Say hi! <FiTwitter className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
