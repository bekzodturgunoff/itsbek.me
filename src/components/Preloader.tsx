"use client";

import {useEffect, useState} from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const raf = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / 700, 1);
      setFill(progress);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--black)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        transition: "transform 300ms var(--ease-in), opacity 300ms var(--ease-in)",
        transform: fading ? "scale(0.8)" : "scale(1)",
        opacity: fading ? 0 : 1,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "80px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--white)",
          lineHeight: 1,
        }}
      >
        BT
      </span>

      <div
        style={{
          width: "80px",
          height: "1px",
          background: "var(--white-15)",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "var(--accent)",
            width: `${fill * 100}%`,
            transition: "none",
          }}
        />
      </div>
    </div>
  );
}
