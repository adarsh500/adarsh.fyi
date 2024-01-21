"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  text: string;
  shallow?: boolean;
};

const NavItem = ({ href, text, shallow }: NavItemProps) => {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? "bg-bg-dark dark:border-border-dark px-3.5 py-1.5 mobile:px-2 mobile:py-1 rounded-sm font-medium text-light-primary z-2 border border-solid border-transparent dark:text-dark-primary hover:text-light-primary hover:transition-all hover:duration-300 hover:ease-in-out dark:hover:text-dark-primary text-base mobile:text-sm"
          : "px-3.5 py-1.5 mobile:px-2 mobile:py-1 font-medium text-light-secondary z-2 border border-solid rounded-sm border-transparent dark:text-dark-secondary hover:text-light-primary transition-all hover:dark:text-dark-primary text-base mobile:text-sm"
      }
      shallow={shallow}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="ease-in-out z-10 flex items-center sticky justify-between px-2 py-4 border-b bg-light dark:bg-dark border-transparent transition-all text-lg text-light-primary dark:text-dark-secondary mobile:top-0 mobile:p-4 mobile:border-b-[1px] rounded-none mobile:text-lg mobile:z-[2] desktop:pl-0 top-0 border-border-light dark:border-border-dark bg-white dark:bg-black backdrop-blur-md">
      <div className="flex justify-between mobile:p-0 desktop:w-[760px] mx-auto w-full items-center">
        <Link
          className="border border-solid border-transparent font-semibold hover:bg-bg-dark rounded-md transition-all"
          href="/"
          shallow
        >
          adarsh.fyi
        </Link>
        <div className="flex">
          <NavItem href="/" text="Home" shallow />
          <NavItem href="/about" text="About" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/more" text="More" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
