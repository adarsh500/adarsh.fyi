import React from 'react';
import styles from './Hero.module.scss';

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
          <div className={styles.center}>
            {/* <p className={styles.secondaryText}>Hi i'm</p> */}
            <p className={styles.rainbowText}>Adarsh Sulegai.</p>
            <p className={styles.tagline}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, nihil
            </p>

            <p className={styles.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              maiores quas deserunt error quaerat laboriosam? Et ab blanditiis
              omnis dignissimos ipsum aliquam autem doloribus adipisci libero
              possimus. Libero, obcaecati incidunt!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
