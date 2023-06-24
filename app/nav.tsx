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
    <Link
      href={href}
      className={
        isActive
          ? styles.itemActive
          : "py-1.5 px-3 text-lg font-medium text-light-secondary z-2 border border-solid rounded-lg border-transparent dark:text-dark-secondary hover:text-light-primary transition-all hover:dark:text-dark-primary"
      }
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const position = usePosition();

  return (
    <nav
      className={clsx(
        "z-1 flex sticky justify-end top-20 px-4 py-5 rounded-lg border border-transparent transition-all text-lg animate-fadeIn text-light-primary dark:text-dark-secondary",
        {
          "border border-solid border-[#dedede] bg-bg-light backdrop-blur-m dark:border-border-dark dark:bg-bg-dark":
            position > 0,
        }
      )}
    >
      <div className={styles.rightNav}>
        {/* <div className={styles.glider}></div> */}
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/more" text="More" />
      </div>
    </nav>
  );
};

export default Navbar;
