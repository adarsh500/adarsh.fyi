import styles from './BlogCard.module.scss';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

type Blog = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags: string[];
  slug: string;
  readingTime: {
    text: string;
  };
};

const BlogCard = (props: Blog) => {
  const { title, date, description, thumbnail, tags, slug, readingTime } =
    props;

  return (
    <Link href={slug} className={styles.blog}>
      <div className={styles.content}>
        <div className={styles.head}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.date}>
          {format(parseISO(date), 'LLLL d, yyyy')}
          &nbsp;&#8901; &nbsp;
          {readingTime.text}
        </p>

        <p className={styles.description}>{description}</p>
        <div className={styles.footer}></div>
      </div>
    </Link>
  );
};

export default BlogCard;
