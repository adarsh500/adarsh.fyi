import Link from 'next/link';
import { MdExpandMore } from 'react-icons/md';
import { FiCommand } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import cn from 'classnames';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a className={isActive ? styles.itemActive : styles.item}>{text}</a>
    </Link>
  );
};

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
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/work" text="Work" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/more" text="More" />

        <li className={styles.cmd}>
          <FiCommand />
          {/* &nbsp;K */}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
