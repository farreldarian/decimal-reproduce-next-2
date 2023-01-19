"use client";

import NextLink from "next/link";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

const NEXT_13_URL = process.env.NEXT_PUBLIC_NEXT_13_URL;

export default function Header() {
  return (
    <div className="flex gap-6 justify-center">
      <Link href="/client">Client Component</Link>
      {NEXT_13_URL && <Link href={NEXT_13_URL}>Next 13</Link>}
    </div>
  );
}

function Link({ children, href }: PropsWithChildren<{ href: string }>) {
  const { pathname } = useRouter();
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
