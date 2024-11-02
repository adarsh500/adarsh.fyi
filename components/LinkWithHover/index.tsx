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
        "font-medium underline decoration-zinc-700 underline-offset-6 hover:decoration-zinc-300 hover:underline-offset-4 transition-all duration-300 ease-in-out",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
};

export default LinkWithHover;
