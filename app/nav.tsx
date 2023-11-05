"use client";
import Link from "next/link";
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
          ? "bg-bg-dark dark:border-border-dark px-3.5 py-1.5 rounded-md font-medium text-light-primary z-2 border border-solid border-transparent dark:text-dark-primary hover:text-light-primary hover:transition-all hover:duration-300 hover:ease-in-out dark:hover:text-dark-primary text-base"
          : "px-3.5 py-1.5 font-medium text-light-secondary z-2 border border-solid rounded-lg border-transparent dark:text-dark-secondary hover:text-light-primary transition-all hover:dark:text-dark-primary text-base"
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
        "z-10 flex items-center sticky justify-start px-2 py-4 border-b bg-light dark:bg-dark border-transparent transition-all text-lg animate-fadeInDown text-light-primary dark:text-dark-secondary mobile:top-0 mobile:px-4 mobile:py-3 mobile:border-b-[1px] rounded-none mobile:text-lg mobile:z-[2] desktop:pl-0",
        {
          "top-0 border-border-light dark:border-border-dark bg-white dark:bg-black backdrop-blur-md":
            position > 0,
        }
      )}
    >
      <div className="flex desktop:w-[760px] desktop:mx-auto">
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
