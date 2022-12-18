import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.container}>
          <p className={styles.title}>Adarsh Sulegai.</p>
          <p className={styles.tagline}>
            Crafting beautiful experiences for the web
          </p>
          <p className={styles.taglineMobile}>
            Crafting rich experiences for the web
          </p>
          <p className={styles.about}>
            I'm a 20 y/o full-stack developer working as an SDE Intern @
            <a
              href="https://cloudsek.com/"
              target="_blank"
              className={styles.link}
            >
              CloudSEK
            </a>
            , previously I worked as a Frontend Developer Intern @
            <a
              href="https://mydukaan.io/"
              target="_blank"
              className={styles.link}
            >
              Dukaan
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
