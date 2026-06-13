"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

export default function ChapterCraft() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
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
        headlineRef.current,
        {y: "110%"},
        {
          y: "0%",
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        p1Ref.current,
        {opacity: 0, y: 24},
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        p2Ref.current,
        {opacity: 0, y: 24},
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "expo.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const techItems = [
    "React", "Next.js", "TypeScript", "TanStack", "Supabase", "Tailwind v4",
    "GSAP", "Framer Motion", "Go", "Cloudflare Workers", "Python", "C",
    "React", "Next.js", "TypeScript", "TanStack", "Supabase", "Tailwind v4",
    "GSAP", "Framer Motion", "Go", "Cloudflare Workers", "Python", "C",
  ];

  return (
    <section
      id="craft"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "var(--space-2xl) 24px" : "var(--space-2xl) 48px",
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
          02 &mdash; THE CRAFT
        </span>

        <div style={{maxWidth: "840px", marginBottom: "var(--space-xl)"}}>
          <div className="clip-reveal">
            <h2
              ref={headlineRef}
              className="clip-child"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "clamp(32px, 9vw, 52px)" : "var(--text-chapter)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              Technology is the material.{" "}
              <span style={{color: "var(--accent)"}}>The product</span> is the point.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "40% 40%",
            gap: isMobile ? "var(--space-md)" : "var(--space-xl)",
            marginBottom: "var(--space-xl)",
          }}
        >
          <p
            ref={p1Ref}
            style={{
              fontSize: "var(--text-body)",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              margin: 0,
              opacity: 0,
            }}
          >
            I think in systems. A component isn&apos;t just a UI element &mdash;
            it&apos;s a contract between the product and the person using it.
            React is how I write that contract. TypeScript is the discipline
            that makes night deployments boring. Boring is good in production.
          </p>
          <p
            ref={p2Ref}
            style={{
              fontSize: "var(--text-body)",
              fontWeight: 400,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              margin: 0,
              opacity: 0,
            }}
          >
            Next.js because performance isn&apos;t a feature &mdash; it&apos;s the baseline.
            If it&apos;s slow, nothing else matters. Security isn&apos;t a layer I add
            at the end. Studying at Sejong University made sure of that.
            I think about what can go wrong before I write the happy path.
          </p>
        </div>

        <div className="tech-strip-wrapper">
          <div
            className="tech-strip"
            style={{
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "20px 0",
            }}
          >
            {techItems.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
