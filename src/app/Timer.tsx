"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(elapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [elapsed]);

  return <p>Seconds Elapsed {elapsed}</p>;
}
