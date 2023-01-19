import React, { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center gap-8">{children}</div>;
}
