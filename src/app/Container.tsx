import React, { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <main className="grid place-content-center h-screen gap-16">
      {children}
    </main>
  );
}
