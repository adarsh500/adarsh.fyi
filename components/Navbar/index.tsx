import React from 'react';
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
        <li className={styles.item}>Projects</li>
        <li className={styles.item}>Resume</li>
      </div>
    </nav>
  );
};

export default Navbar;
