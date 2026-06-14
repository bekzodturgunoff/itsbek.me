"use client";

import {useRef, useEffect, useState} from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  active: boolean;
  cursorPos: {x: number; y: number};
}

export default function ProjectImageCursor({src, alt, active, cursorPos}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({x: 0, y: 0});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const pos = posRef.current;
      pos.x = lerp(pos.x, cursorPos.x, 0.1);
      pos.y = lerp(pos.y, cursorPos.y, 0.1);
      el.style.transform = `translate3d(${pos.x - 180}px, ${pos.y - 120}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cursorPos]);

  if (!src) return null;

  return (
    <div
      ref={outerRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9997,
        width: "360px",
        height: "240px",
        pointerEvents: "none",
        opacity: active && loaded ? 1 : 0,
        transition: "opacity 200ms var(--ease-out)",
        clipPath: active && loaded ? "inset(0 0 0 0)" : "inset(0 50% 100% 50%)",
        transitionTimingFunction: "var(--ease-out)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="360px"
        style={{objectFit: "cover"}}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
