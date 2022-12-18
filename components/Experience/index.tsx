import React, { useState } from 'react';
import styles from './Experience.module.scss';
import Dukaan2 from 'icons/Dukaan2';

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const expandSection = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <div className={expanded ? styles.experienceExpanded : styles.experience}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Dukaan2 />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <p className={styles.primary}>Dukaan</p>
              <p className={styles.primaryMobile}>Dukaan</p>
              <p className={styles.secondary}>Frontend Developer Intern</p>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.primary}>Apr 2022 - June 2022</p>
              <p className={styles.primaryMobile}>Apr '22 - June '22</p>
              <p className={styles.secondary}>Bangalore, India</p>
            </div>
          </div>
          <div className={styles.body}>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dolore aliquid earum deleniti, tenetur temporibus
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
      <div>
        <button className={styles.expand} onClick={expandSection}>
          {!expanded ? 'expand' : 'collapse'}
        </button>
      </div>
    </div>
  );
};

export default Experience;
