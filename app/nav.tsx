"use client";
import Link from "next/link";
import styles from "./Nav.module.scss";
import { usePathname } from "next/navigation";
import usePosition from "hooks/usePosition";
import clsx from "clsx";

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? styles.itemActive : styles.item}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  const position = usePosition();

  return (
    <nav
      className={clsx(styles.navbar, {
        [styles.navbarVisible]: position > 0,
      })}
    >
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
