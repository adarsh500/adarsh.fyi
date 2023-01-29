import styles from './BlogCard.module.scss';
import Image from 'next/image';
import firstpost from '../../assets/thumbnails/firstpost.png';

type Blog = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

const BlogCard = (props: Blog) => {
  const { title, date, description, thumbnail, tags } = props;

  return (
    <div className={styles.blog}>
      <div className={styles.image}>
        <Image src={firstpost} height={200} width={380} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
