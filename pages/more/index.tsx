import Card from '@components/Card';
import { more } from '@components/Content/more';
import React from 'react';
import styles from './More.module.scss';

const More = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>More</p>

        <div className={styles.more}>
          {more.map((item) => (
            <Card {...item} key={item.title}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default More;
