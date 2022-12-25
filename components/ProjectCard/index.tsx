import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { VscGithubInverted } from 'react-icons/vsc';
import { SiNextdotjs, SiReact, SiMongodb, SiTypescript } from 'react-icons/si';
import { DiSass } from 'react-icons/di';

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
      <Image
        className={styles.image}
        src={og}
        width={250}
        height={150}
        placeholder="blur"
        blurDataURL="https://og-image.vercel.app/.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        layout="responsive"
        alt="Link og:image"
        objectFit="cover"
        loading="lazy"
      />
      <div className={styles.body}>
        <div className={styles.header}>
          <a className={styles.headerTitle} href={link} target="_blank">
            <p>{title}</p>
            <HiArrowTopRightOnSquare />
          </a>
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
