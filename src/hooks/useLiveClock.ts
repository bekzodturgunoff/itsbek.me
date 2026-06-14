"use client";

import {useState, useEffect} from "react";

function getTimeInZone(timezone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function useLiveClock(timezone: string): string {
  const [time, setTime] = useState(() => getTimeInZone(timezone));

  useEffect(() => {
    const now = Date.now();
    const msUntilNextSecond = 1000 - (now % 1000);

    const timeout = setTimeout(() => {
      setTime(getTimeInZone(timezone));
      const interval = setInterval(() => {
        setTime(getTimeInZone(timezone));
      }, 1000);
      return () => clearInterval(interval);
    }, msUntilNextSecond);

    return () => clearTimeout(timeout);
  }, [timezone]);

  return time;
}
