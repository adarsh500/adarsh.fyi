import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

const Card = (props: CardProps) => {
  const { title, description, href } = props;

  return (
    <Link href={href || '/more'} className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </Link>
  );
};

export default Card;
