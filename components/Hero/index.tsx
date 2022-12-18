import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.container}>
          <p className={styles.title}>Adarsh Sulegai.</p>
          <p className={styles.tagline}>
            Obsessed with crafting beautiful experiences for the web
          </p>
          <p className={styles.about}>
            20 y/o full-stack developer working as an SDE Intern @
            <b>
              <a
                href="https://cloudsek.com/"
                target="_blank"
                className={styles.link}
              >
                CloudSEK
              </a>
            </b>
            , previously i worked as a Frontend Developer Intern @
            <b>
              <a
                href="https://mydukaan.io/"
                target="_blank"
                className={styles.link}
              >
                Dukaan
              </a>
            </b>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
