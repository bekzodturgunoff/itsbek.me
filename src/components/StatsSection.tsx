"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
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
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        rowRef.current,
        {clipPath: "inset(100% 0 0 0)"},
        {
          clipPath: "inset(0 0 0 0)",
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const stats = [
    {number: "3+", label: "Years in\nproduction"},
    {number: "3 days", label: "Blank folder to\ndeployed platform"},
    {number: "$0/mo", label: "Full AI infra on\nCloudflare + Gemini"},
    {number: "10+", label: "Projects live\nand used"},
  ];

  return (
    <section
      id="proof"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "var(--space-xl) 24px" : "var(--space-xl) 48px",
      }}
    >
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        <span
          ref={labelRef}
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "var(--space-lg)",
            opacity: 0,
          }}
        >
          04 &mdash; PROOF
        </span>

        <hr style={{border: "none", borderTop: "1px solid var(--border)", margin: 0}} />

        <div
          ref={rowRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? "var(--space-md) var(--space-sm)" : "var(--space-lg) var(--space-md)",
                borderRight: (() => {
                  const cols = isMobile ? 2 : 4;
                  return (i + 1) % cols !== 0 ? "1px solid var(--border)" : "none";
                })(),
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "var(--text-chapter)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "var(--accent)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(10px, 1.2vw, 13px)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <hr style={{border: "none", borderTop: "1px solid var(--border)", margin: 0}} />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--space-md)",
            paddingTop: "var(--space-md)",
          }}
        >
          {[
            {label: "GitHub", href: "https://github.com/bekzodturgunoff"},
            {label: "Resume", href: "/bekzod-turgunov-resume.pdf"},
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 200ms var(--ease-out-expo)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
