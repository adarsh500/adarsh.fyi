import Link from "next/link";
import React from "react";
import type { ReactNode } from "react";
import type { Route } from "next";
import type { LinkProps } from "next/link";
import clsx from "clsx";

interface Props<R extends string> extends LinkProps {
  href: Route<R>;
  className?: string;
  children: ReactNode;
}

const LinkWithHover = <R extends string>(props: Props<R>) => {
  return (
    <Link
      {...props}
      target="_blank"
      className={clsx(
        "font-medium underline decoration-white/20 underline-offset-6 [text-underline-position:from-font] hover:decoration-white/40 hover:underline-offset-4 transition-all duration-300 ease-in-out",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
};

export default LinkWithHover;
