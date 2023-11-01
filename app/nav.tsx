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
          ? "px-3 py-[1.25] rounded-lg text-xl font-medium text-light-primary z-2 border border-solid border-transparent dark:text-dark-primary hover:text-light-primary hover:transition-all hover:duration-300 hover:ease-in-out dark:hover:text-dark-primary mobile:px-2 mobile:py-1 mobile:text-base"
          : "px-3 py-[1.25] text-xl font-medium text-light-secondary z-2 border border-solid rounded-lg border-transparent dark:text-dark-secondary hover:text-light-primary transition-all hover:dark:text-dark-primary mobile:px-2 mobile:py-1 mobile:text-base"
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
        "z-10 flex sticky justify-end top-20 px-4 py-5 rounded-lg border border-transparent transition-all text-lg animate-fadeInDown text-light-primary dark:text-dark-secondary mobile:top-0 mobile:px-3 mobile:py-5 mobile:border-b-[1px] mobile:border-transparent mobile:rounded-none mobile:text-lg mobile:z-[2]",
        {
          "border border-solid border-border-light bg-bg-light backdrop-blur-md dark:border-border-dark dark:bg-bg-dark mobile:border-b-border-light mobile:dark:border-b-border-dark":
            position > 0,
        },
      )}
    >
      <div className="flex align-middle relative">
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
