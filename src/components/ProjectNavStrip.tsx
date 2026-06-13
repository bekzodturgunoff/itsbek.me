"use client";

import {useEffect, useRef, useState} from "react";

const PROJECT_ITEMS = [
  {id: "project-001", label: "001 \u2014 OCTOPOS APPS"},
  {id: "project-002", label: "002 \u2014 BRONUZ"},
  {id: "project-003", label: "003 \u2014 ASSISTANT BOT"},
  {id: "project-004", label: "004 \u2014 OCTOPOS LANDING"},
];

export default function ProjectNavStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const ratios: Record<string, number> = {};
    for (const item of PROJECT_ITEMS) {
      ratios[item.id] = 0;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios[entry.target.id] = entry.intersectionRatio;
        }
        let bestId = PROJECT_ITEMS[0].id;
        let bestRatio = 0;
        for (const item of PROJECT_ITEMS) {
          if (ratios[item.id] > bestRatio) {
            bestRatio = ratios[item.id];
            bestId = item.id;
          }
        }
        const idx = PROJECT_ITEMS.findIndex((p) => p.id === bestId);
        if (idx !== -1) setActiveIndex(idx);
      },
      {threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]},
    );

    for (const item of PROJECT_ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  if (isMobile) return null;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 48px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid var(--border)",
          paddingBottom: 0,
          position: "relative",
        }}
      >
        {PROJECT_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({behavior: "smooth"});
            }}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              padding: "16px 0",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: i === activeIndex ? "var(--text)" : "var(--text-muted)",
              transition: "color 200ms var(--ease-out-expo)",
              textAlign: "center",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (i !== activeIndex) e.currentTarget.style.color = "var(--text-secondary)";
            }}
            onMouseLeave={(e) => {
              if (i !== activeIndex) e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            {item.label}
          </button>
        ))}

        {/* Sliding indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `${(activeIndex / PROJECT_ITEMS.length) * 100}%`,
            width: `${100 / PROJECT_ITEMS.length}%`,
            height: "1px",
            background: "var(--accent)",
            transition: "left 400ms var(--ease-out-expo)",
          }}
        />
      </div>
    </div>
  );
}
