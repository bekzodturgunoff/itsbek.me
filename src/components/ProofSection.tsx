"use client";

import {useRef, useEffect} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function ProofSection({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
        gridRef.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const metrics = t.proof.metrics;

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

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0",
          }}
        >
          {metrics.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "36px 24px",
                borderRight: i < metrics.length - 1 ? "1px solid var(--white-07)" : "none",
                borderBottom: "1px solid var(--white-07)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4.5vw, 60px)",
                  fontWeight: 700,
                  letterSpacing: "var(--track-head)",
                  lineHeight: 1,
                  color: "var(--white)",
                  marginBottom: "10px",
                }}
              >
                {stat.value}
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
