import styles from './BlogCard.module.scss';
import Link from 'next/link';
import { TbBook } from 'react-icons/tb';

type Blog = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags: string[];
  slug: string;
  readingTime: string;
};

const BlogCard = (props: Blog) => {
  const { title, date, description, thumbnail, tags, slug, readingTime } =
    props;

  return (
    <Link href={slug}>
      <a className={styles.blog}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.readingTime}>
              <TbBook className={styles.icon} />
              <p>{readingTime}</p>
            </div>
          </div>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <p className={styles.tag}>#{tag}</p>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
