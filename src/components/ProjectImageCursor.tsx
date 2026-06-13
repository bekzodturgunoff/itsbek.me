"use client";

import {useRef, useEffect, useCallback} from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  active: boolean;
}

export default function ProjectImageCursor({src, alt, active}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({x: 0, y: 0});
  const targetRef = useRef({x: 0, y: 0});

  const onMouse = useCallback((e: MouseEvent) => {
    targetRef.current = {x: e.clientX, y: e.clientY};
  }, []);

  useEffect(() => {
    if (!active) return;
    window.addEventListener("mousemove", onMouse, {passive: true});
    return () => window.removeEventListener("mousemove", onMouse);
  }, [active, onMouse]);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const pos = posRef.current;
      const target = targetRef.current;
      pos.x = lerp(pos.x, target.x, 0.1);
      pos.y = lerp(pos.y, target.y, 0.1);
      el.style.transform = `translate3d(${pos.x - 180}px, ${pos.y - 120}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  if (!src) return null;

  return (
    <div
      ref={outerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9997,
        width: "360px",
        height: "240px",
        pointerEvents: "none",
        opacity: active ? 1 : 0,
        transition: "opacity 200ms var(--ease-out)",
        clipPath: active ? "inset(0 0 0 0)" : "inset(0 50% 100% 50%)",
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="360px"
        style={{objectFit: "cover"}}
      />
    </div>
  );
}
