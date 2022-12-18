import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { VscGithubInverted } from 'react-icons/vsc';
import { SiNextdotjs, SiReact, SiMongodb, SiTypescript } from 'react-icons/si';
import { DiSass } from 'react-icons/di';

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <Image
        className={styles.image}
        src="https://og-image.vercel.app/mark3.vercel.app.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg"
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
          <a
            className={styles.headerTitle}
            href="https://mark3.vercel.app"
            target="_blank"
          >
            <p>Mark3</p>
            <HiArrowTopRightOnSquare />
          </a>
          <a
            href="https://github.com/adarsh500/mark"
            target="_blank"
            className={styles.headerLink}
          >
            <VscGithubInverted className="icon" />
          </a>
        </div>
        <div className={styles.description}>
          a super useful bookmark management web app with sleek UI and dark mode
          a super useful bookmark management web app with sleek UI and dark mode
        </div>

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
