import React, { useState } from 'react';
import styles from './Experience.module.scss';

type ExperienceProps = {
  company: string;
  role: string;
  location: string;
  duration: string;
  shortDuration: string;
  logo: any;
  description: string[];
};

const Experience = (props: ExperienceProps) => {
  const [expanded, setExpanded] = useState(false);
  const {
    company,
    role,
    location,
    duration,
    shortDuration,
    description,
    logo,
  } = props;

  const expandSection = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <div className={expanded ? styles.experienceExpanded : styles.experience}>
        <div className={styles.left}>
          <div className={styles.logo}>{logo()}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <p className={styles.primary}>{company}</p>
              <p className={styles.primaryMobile}>{company}</p>
              <p className={styles.secondary}>{role}</p>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.primary}>{duration}</p>
              <p className={styles.primaryMobile}>{shortDuration}</p>
              <p className={styles.secondary}>{location}</p>
            </div>
          </div>
          <div className={styles.body}>
            <ul>
              {description?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
