import styles from './Work.module.scss';
import { work } from '@components/Content/work';
import Experience from '@components/Experience';

const Work = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.container}>
          {work.map((experience) => (
            <Experience {...experience} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
