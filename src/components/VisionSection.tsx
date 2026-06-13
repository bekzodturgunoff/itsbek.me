"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([null, null, null]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        {opacity: 0, y: -8},
        {opacity: 1, y: 0, duration: 0.4, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      h2Refs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {y: "110%"},
          {y: "0%", duration: 0.7, ease: "expo.out", delay: i * 0.12, scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
        );
      });
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "var(--gap-2xl) 24px" : "var(--gap-2xl) var(--page-x)",
        width: isMobile ? "100%" : "80%",
        maxWidth: "900px",
      }}
    >
      <span
        ref={labelRef}
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-label)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "var(--gap-lg)",
          opacity: 0,
        }}
      >
        05 &mdash; VISION
      </span>

      <div className="clip-reveal" style={{marginBottom: "var(--gap-xs)"}}>
        <h2
          ref={(el) => { h2Refs.current[0] = el; }}
          className="clip-child"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "var(--text-title)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            margin: 0,
          }}
        >
          Not the best developer
        </h2>
      </div>
      <div className="clip-reveal" style={{marginBottom: "var(--gap-xs)"}}>
        <h2
          ref={(el) => { h2Refs.current[1] = el; }}
          className="clip-child"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "var(--text-title)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            margin: 0,
          }}
        >
          in the room.
        </h2>
      </div>
      <div className="clip-reveal" style={{marginBottom: "var(--gap-lg)"}}>
        <h2
          ref={(el) => { h2Refs.current[2] = el; }}
          className="clip-child"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(28px, 8vw, 44px)" : "var(--text-title)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            color: "var(--accent)",
            margin: 0,
          }}
        >
          The one who makes the room better.
        </h2>
      </div>

      <p
        style={{
          fontSize: "var(--text-small)",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          margin: "0 0 var(--gap-lg) 0",
          maxWidth: "460px",
        }}
      >
        Working toward distributed systems, security-first architecture,
        and products that matter in markets that most people
        haven&apos;t looked at yet.
      </p>

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--gap-xs)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-label)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
        OPEN TO REMOTE CONTRACTS + FULL-TIME ROLES
      </span>
    </section>
  );
}
