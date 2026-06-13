"use client";

import {useEffect, useRef, useState} from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({x: -100, y: -100});
  const targetRef = useRef({x: -100, y: -100});
  const rafRef = useRef<number>(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      targetRef.current = {x: e.clientX, y: e.clientY};
    };
    window.addEventListener("mousemove", onMouse, {passive: true});
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const pos = posRef.current;
      const target = targetRef.current;

      pos.x = lerp(pos.x, target.x, 0.12);
      pos.y = lerp(pos.y, target.y, 0.12);

      ring.style.transform = `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)`;
      dot.style.transform = `translate3d(${pos.x - 2}px, ${pos.y - 2}px, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9998] h-6 w-6 rounded-full"
        style={{
          border: `1px solid ${isDark ? "rgba(242,239,233,0.4)" : "rgba(14,14,14,0.3)"}`,
        }}
      />
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9998] h-[3px] w-[3px] rounded-full"
        style={{background: "var(--accent)"}}
      />
    </>
  );
}
