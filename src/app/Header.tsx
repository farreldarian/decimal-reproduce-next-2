"use client";

import NextLink from "next/link";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <div className="flex gap-6 justify-center">
      <Link href="/">Server Component</Link>
      <Link href="/client">Client Component</Link>
    </div>
  );
}

function Link({ children, href }: PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const current = pathname === href;

  return (
    <NextLink
      href={href}
      className={
        "hover:underline " + (current ? "text-blue-500" : "text-gray-500")
      }
    >
      {children}
    </NextLink>
  );
}
