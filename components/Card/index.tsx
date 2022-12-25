import styles from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
};

const Card = (props: CardProps) => {
  const { title, description } = props;

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
