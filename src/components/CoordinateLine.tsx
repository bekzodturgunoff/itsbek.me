"use client";

import {useRef, useEffect, useState} from "react";

export function CoordinateLine() {
  const pathRef = useRef<SVGLineElement>(null);
  const leftLabelRef = useRef<HTMLSpanElement>(null);
  const rightLabelRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 380px)");
    setIsNarrow(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;
    const parent = pathRef.current.parentElement?.parentElement;
    const width = parent?.clientWidth ?? window.innerWidth;
    pathRef.current.style.strokeDasharray = `${width}`;
    pathRef.current.style.strokeDashoffset = `${width}`;

    setTimeout(() => {
      if (!pathRef.current) return;
      pathRef.current.style.transition = "stroke-dashoffset 1.8s var(--ease-out-expo)";
      pathRef.current.style.strokeDashoffset = "0";
    }, 1200);

    const lineDrawDuration = 1800;
    const lineStartDelay = 1200;

    setTimeout(() => {
      if (leftLabelRef.current) {
        leftLabelRef.current.style.transition = "opacity 0.4s var(--ease-out-expo)";
        leftLabelRef.current.style.opacity = "1";
      }
    }, lineStartDelay + lineDrawDuration * 0.15);

    setTimeout(() => {
      if (rightLabelRef.current) {
        rightLabelRef.current.style.transition = "opacity 0.4s var(--ease-out-expo)";
        rightLabelRef.current.style.opacity = "1";
      }
    }, lineStartDelay + lineDrawDuration * 0.85);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    left: 0,
    right: 0,
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: isNarrow ? "flex" : "flex",
          flexDirection: isNarrow ? "column" : "row",
          justifyContent: isNarrow ? "flex-start" : "space-between",
          alignItems: isNarrow ? "flex-start" : "center",
          gap: isNarrow ? "4px" : undefined,
          marginBottom: "var(--space-xs)",
        }}
      >
        <span
          ref={leftLabelRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
            opacity: 0,
          }}
        >
          SEOUL &middot; 37.5665&deg; N, 126.9780&deg; E &middot; STUDIED HERE
        </span>
        <span
          ref={rightLabelRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
            opacity: 0,
          }}
        >
          TASHKENT &middot; 41.2995&deg; N, 69.2401&deg; E &middot; BUILDING HERE
        </span>
      </div>

      <svg
        width="100%"
        height="2"
        style={{display: "block"}}
        preserveAspectRatio="none"
      >
        <line
          ref={pathRef}
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
