import styles from './ProjectCard.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { GrLinkNext } from 'react-icons/gr';

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
            <a className={styles.headerTitle} href={link} target="_blank">
              <p>{title}</p>
              <GrLinkNext className={styles.icon} />
            </a>
            <a className={styles.footercta} href={githubUrl} target="_blank">
              <VscGithubInverted className={styles.github} />
            </a>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
