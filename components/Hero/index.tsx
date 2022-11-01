import React from 'react';
import Image from 'next/image';
import Background from '../background';

import styles from './Hero.module.scss';

const index = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.kenobi}>
          {/* <p>Hello there</p>
          <Image
            src="/../public/waving-hand.png"
            width={56}
            height={56}
          ></Image> */}
        </div>
        {/* <h1 className={styles.title}>
          I'm <a href="https://nextjs.org">Adarsh Sulegai</a>
        </h1> */}
        <div className={styles.center}>
          <p className={styles.rainbowText}>Adarsh Sulegai</p>
          <p className={styles.tagLine}>a full stack developer</p>
        </div>
      </main>
    </div>
  );
};

export default index;
