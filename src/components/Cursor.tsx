"use client";

import {useEffect, useRef, useState} from "react";
import {useCursorPosition} from "@/hooks/useCursorPosition";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const {x, y} = useCursorPosition();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
    dot.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
  }, [x, y]);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-6 w-6 rounded-full transition-[width,height] duration-300"
        style={{
          transform: "translate3d(0, 0, 0)",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)"}`,
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1 w-1 rounded-full"
        style={{
          transform: "translate3d(0, 0, 0)",
          background: "var(--accent)",
          mixBlendMode: "normal",
        }}
      />
    </>
  );
}
