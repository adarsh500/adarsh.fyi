import styles from './test.module.scss';
import { more } from '@components/Content/more';
import Card from '@components/Card';

const Home = (props: any) => (
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

export default Home;
