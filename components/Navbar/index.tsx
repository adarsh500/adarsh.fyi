import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

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
      </div>
      <div className={styles.rightNav}>
        {/* <div className={styles.glider}></div> */}
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/more" text="More" />
      </div>
    </nav>
  );
};

export default Navbar;
