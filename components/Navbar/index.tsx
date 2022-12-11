import Link from 'next/link';
import { MdExpandMore } from 'react-icons/md';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <span className={styles.glow}></span>
      </div>
      <div className={styles.rightNav}>
        <Link href="/about">
          <a className={styles.item}>About</a>
        </Link>
        <Link href="/work">
          <a className={styles.item}>Work</a>
        </Link>
        <Link href="/projects">
          <a className={styles.item}>Projects</a>
        </Link>
        <li className={styles.item}>
          More
          <MdExpandMore className={styles.icon} />
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
