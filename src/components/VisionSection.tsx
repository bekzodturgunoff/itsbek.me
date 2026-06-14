"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([null, null, null]);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
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
          {y: "0%", duration: 0.7, ease: "expo.out", delay: i * 0.1, scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
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
        borderTop: "1px solid var(--white-07)",
        padding: isMobile ? "var(--gap-2xl) 24px" : "var(--gap-2xl) var(--page-x)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{maxWidth: "900px", margin: "0 auto", width: "100%"}}>
        <span
          ref={labelRef}
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-label)",
            letterSpacing: "var(--track-label)",
            textTransform: "uppercase",
            color: "var(--white-60)",
            marginBottom: "var(--gap-lg)",
          }}
        >
          05 &mdash; VISION
        </span>

        <div className="clip-reveal" style={{marginBottom: 0}}>
          <h2
            ref={(el) => { h2Refs.current[0] = el; }}
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-h2)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "var(--track-head)",
              color: "var(--white)",
              margin: 0,
            }}
          >
            Not the best developer
          </h2>
        </div>
        <div className="clip-reveal" style={{marginBottom: 0}}>
          <h2
            ref={(el) => { h2Refs.current[1] = el; }}
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-h2)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "var(--track-head)",
              color: "var(--white)",
              margin: 0,
            }}
          >
            in the room.
          </h2>
        </div>
        <div className="clip-reveal" style={{marginBottom: "var(--gap-md)"}}>
          <h2
            ref={(el) => { h2Refs.current[2] = el; }}
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-h2)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "var(--track-head)",
              color: "var(--accent)",
              margin: 0,
            }}
          >
            The one who makes the room better.
          </h2>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-lg)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--white-60)",
            margin: "0 0 var(--gap-md) 0",
            maxWidth: "560px",
          }}
        >
          Building toward distributed systems, security-first architecture,
          and products that matter in markets most people haven&apos;t looked at yet.
        </p>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-label)",
            letterSpacing: "var(--track-label)",
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
          OPEN TO REMOTE CONTRACTS + FULL-TIME
        </span>
      </div>
    </section>
  );
}
