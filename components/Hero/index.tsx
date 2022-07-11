import React from 'react';
import Image from 'next/image';

// import styles from '../../styles/Home.module.scss';
import styles from './Hero.module.scss';

const index = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.kenobi}>
          <p>Hello there </p>
          <Image
            src="/../public/waving-hand.png"
            width={64}
            height={64}
          ></Image>
        </div>
        {/* <h1 className={styles.title}>
          I'm <a href="https://nextjs.org">Adarsh Sulegai</a>
        </h1> */}
        <div className={styles.center}>
          <h1>Adarsh Sulegai</h1>
        </div>
      </main>
    </div>
  );
};

export default index;
