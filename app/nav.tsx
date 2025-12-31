"use client";
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
      className={`
        px-4 py-2 mobile:px-3 mobile:py-1.5 
        last:pr-0
        font-medium text-base mobile:text-sm
        transition-all duration-300 ease-in-out
        underline decoration-white/20 underline-offset-6 [text-underline-position:from-font]
        ${
          isActive
            ? "text-dark-primary decoration-white/40 underline-offset-4"
            : "text-dark-secondary hover:text-dark-primary hover:decoration-white/40 hover:underline-offset-4"
        }
      `}
      shallow={shallow}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      {/* Blur effect beneath navbar */}
      <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-md pointer-events-none" />

      {/* Glow effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative flex items-center justify-between py-4 mobile:px-4 mobile:py-3 desktop:w-[760px] mx-auto w-full">
        <Link
          className="border border-solid border-transparent font-semibold hover:bg-bg-dark rounded-md transition-all"
          href="/"
          shallow
        >
          adarsh.fyi
        </Link>

        <div className="flex items-center gap-2 mobile:gap-1">
          <NavItem href="/" text="home" shallow />
          <NavItem href="/about" text="about" />
          <NavItem href="/blog" text="blog" />
          <NavItem href="/more" text="more" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
