import { MdExpandMore } from 'react-icons/md';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <span className={styles.glow}></span>
      </div>
      <div className={styles.rightNav}>
        <li className={styles.itemActive}>About</li>
        <li className={styles.item}>Work</li>
        <a className={styles.item} href="#projects">
          Projects
        </a>
        <li className={styles.item}>
          More
          <MdExpandMore className={styles.icon} />
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
