import React, { useState } from 'react';
import styles from './Experience.module.scss';
import Dukaan2 from 'icons/Dukaan2';

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.experience}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Dukaan2 />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.primary}>Dukaan</p>
            <p className={styles.secondary}>Frontend Developer Intern</p>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.primary}>Apr 2022 - June 2022</p>
            <p className={styles.secondary}>Bangalore, India</p>
          </div>
        </div>
        <div className={styles.body}>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore aliquid earum deleniti, tenetur temporibus nihil quisquam
              praesentium,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore aliquid earum deleniti, tenetur temporibus nihil quisquam
              praesentium,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore aliquid earum deleniti, tenetur temporibus nihil quisquam
              praesentium,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore aliquid earum deleniti, tenetur temporibus nihil quisquam
              praesentium,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore aliquid earum deleniti, tenetur temporibus nihil quisquam
              praesentium,
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
