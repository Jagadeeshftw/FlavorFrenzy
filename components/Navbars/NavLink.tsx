"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? "active" : undefined}>
      {children}
    </Link>
  );
};

export default NavLink;
