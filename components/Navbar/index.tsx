import Link from 'next/link';
import { MdExpandMore } from 'react-icons/md';
import { FiCommand } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <span className={styles.glow}></span>

        {/* <button className={styles.sidebar}>
          <GiHamburgerMenu className={styles.icon} />
        </button> */}
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
        <Link href="/projects">
          <a className={styles.item}>More</a>
        </Link>
        <li className={styles.cmd}>
          <FiCommand />
          {/* &nbsp;K */}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
