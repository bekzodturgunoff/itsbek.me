"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

const STATS = [
  {number: "3+", label: "Years\nin production"},
  {number: "3 days", label: "Blank folder\nto deployed"},
  {number: "$0/mo", label: "Full AI infra\non edge"},
  {number: "10+", label: "Projects\nlive and used"},
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
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
      gsap.fromTo(
        tableRef.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proof"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "var(--gap-xl) var(--page-x)",
      }}
    >
      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
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
          04 &mdash; PROOF
        </span>

        <hr style={{border: "none", borderTop: "1px solid var(--white-07)", margin: 0}} />

        <div
          ref={tableRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? "var(--gap-md) var(--gap-sm)" : "36px 0 36px 28px",
                borderRight: !isMobile && i < STATS.length - 1
                  ? "1px solid var(--white-07)"
                  : isMobile && i % 2 === 0
                    ? "1px solid var(--white-07)"
                    : "none",
                borderBottom: "1px solid var(--white-07)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(32px, 4.5vw, 60px)",
                  fontWeight: 700,
                  letterSpacing: "var(--track-head)",
                  lineHeight: 1,
                  color: "var(--white)",
                  marginBottom: "10px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <hr style={{border: "none", borderTop: "1px solid var(--white-07)", margin: 0}} />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "28px",
            paddingTop: "20px",
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
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-label)",
                letterSpacing: "var(--track-label)",
                textTransform: "uppercase",
                color: "var(--white-60)",
                textDecoration: "none",
                transition: "color 150ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-60)")}
            >
              {link.label} &nearr;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
