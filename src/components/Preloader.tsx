"use client";

import {useEffect, useState} from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 800;

    const raf = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setFill(progress);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 400);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "var(--page-x)",
        transition: "opacity 400ms ease",
        opacity: fading ? 0 : 1,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "32px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        BT
      </span>

      <div
        style={{
          width: "80px",
          height: "1px",
          background: "var(--border)",
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
