import React from 'react';
import styles from './Experience.module.scss';

type ExperienceProps = {
  company: string;
  role: string;
  location: string;
  duration: string;
  shortDuration: string;
  logo: any;
  description: string[];
  url: string;
};

const Experience = (props: ExperienceProps) => {
  const {
    company,
    role,
    location,
    duration,
    shortDuration,
    description,
    logo,
    url,
  } = props;

  return (
    <div className={styles.experience}>
      <div className={styles.left}>
        <a href={url} target="_blank" className={styles.logo}>
          {logo()}
        </a>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <a href={url} target="_blank" className={styles.primary}>
              {company}
            </a>
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
