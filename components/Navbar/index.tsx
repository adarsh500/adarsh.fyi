import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <li>About</li>
      <li>Work</li>
      <li>Uses</li>
      <li>More</li>
    </nav>
  );
};

export default Navbar;
