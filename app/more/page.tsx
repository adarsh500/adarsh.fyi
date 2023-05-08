import styles from './more.module.scss';
import { more } from '@components/Content/more';
import Card from '@components/Card';

const More = () => (
  <main className={styles.main}>
    <div className={styles.container}>
      <p className={styles.title}>More</p>

      <div className={styles.more}>
        {more.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  </main>
);

export default More;
