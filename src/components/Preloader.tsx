"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    }, 1200);

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
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        transition: "opacity 600ms ease",
        opacity: fading ? 0 : 1,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        Loading experience&hellip;
      </span>
      <div style={{width: "120px", height: "1px", background: "var(--border)"}}>
        <motion.div
          initial={{width: "0%"}}
          animate={{width: "100%"}}
          transition={{duration: 0.9, ease: "linear"}}
          style={{height: "100%", background: "var(--accent)"}}
        />
      </div>
    </div>
  );
}
