import styles from './Projects.module.scss';
import { projects } from '@components/Content/projects';
import ProjectCard from '@components/ProjectCard';

const Projects = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
