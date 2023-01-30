import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { VscGithubInverted } from 'react-icons/vsc';
import { SiNextdotjs, SiReact, SiMongodb, SiTypescript } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { GrLinkNext } from 'react-icons/gr';
import Mark from '@icons/Mark';

type ProjectProps = {
  title: string;
  link: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  og: string;
};

const ProjectCard = (props: ProjectProps) => {
  const { title, link, description, githubUrl, imageUrl, og } = props;

  return (
    <div className={styles.projectCard}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.main}>
            <Mark className={styles.mainIcon} />
            <a className={styles.headerTitle} href={link} target="_blank">
              <p>{title}</p>
              <GrLinkNext className={styles.icon} />
            </a>
          </div>
          <a href={githubUrl} target="_blank" className={styles.headerLink}>
            <VscGithubInverted className="icon" />
          </a>
        </div>
        <div className={styles.description}>{description}</div>

        <div className={styles.footer}>
          <div className={styles.stack}>
            <SiNextdotjs className={styles.stackItem} />
            <SiReact className={styles.stackItem} />
            <DiSass className={styles.stackItem} />
            <SiMongodb className={styles.stackItem} />
            <SiTypescript className={styles.stackItem} />
          </div>
          {/* <button className={styles.expand}>
            <p>Expand</p>
            <MdExpandMore className={styles.icon} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
