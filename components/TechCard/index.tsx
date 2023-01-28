import styles from './TechCard.module.scss';

const TechCard = (props: { name: string; icon: any }) => {
  const { name, icon } = props;
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default TechCard;
