import React from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.image}>
        <Image src="/../../assets/mark3.png" height={100} width={100} />
      </div>
      <div className={styles.title}>Mark3</div>
      <div className={styles.description}>
        a super useful bookmark management web app with sleek UI and dark mode
      </div>
      <div className={styles.footer}>
        <div className={styles.techStack}></div>
        <div className={styles.expand}>Expand</div>
      </div>
    </div>
  );
};

export default ProjectCard;
