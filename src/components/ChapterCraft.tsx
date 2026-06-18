"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

const SKILL_GROUPS = [
  {
    title: "Frontend & Product",
    items: ["React", "Next.js", "TypeScript", "Tailwind v4", "Framer Motion", "TanStack", "Astro"],
  },
  {
    title: "Backend & Infrastructure",
    items: ["Node.js", "Go", "Python", "PostgreSQL", "Supabase", "Cloudflare Workers", "Edge"],
  },
  {
    title: "AI & Systems",
    items: ["Gemini", "LLM Integration", "CI/CD", "System Design", "Security", "Performance"],
  },
];

const TECH_STRIP = [
  "React", "Next.js", "TypeScript", "TanStack", "Supabase", "Tailwind v4",
  "GSAP", "Framer Motion", "Go", "Cloudflare Workers", "Python",
  "PostgreSQL", "Node.js", "Edge Computing", "System Design",
  "React", "Next.js", "TypeScript", "TanStack", "Supabase", "Tailwind v4",
  "GSAP", "Framer Motion", "Go", "Cloudflare Workers", "Python",
  "PostgreSQL", "Node.js", "Edge Computing", "System Design",
];

export default function ChapterCraft() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const [isMobile, setIsMobile] = useState(
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
        headlineRef.current,
        {y: "110%"},
        {y: "0%", duration: 0.7, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );
      gsap.fromTo(
        p1Ref.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );
      gsap.fromTo(
        p2Ref.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: 0.1, scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const colStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--size-md)",
    fontWeight: 400,
    lineHeight: 1.85,
    color: "var(--white-60)",
    margin: 0,
  };

  return (
    <section
      id="craft"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "var(--gap-2xl) var(--page-x)",
      }}
    >
      <div style={{maxWidth: "1000px", margin: "0 auto"}}>
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
          02 &mdash; THE CRAFT
        </span>

        <div style={{maxWidth: "840px", marginBottom: "var(--gap-lg)"}}>
          <div className="clip-reveal">
            <h2
              ref={headlineRef}
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
              Technology is the material.{" "}
              <span style={{color: "var(--accent)"}}>The product</span> is the point.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "var(--gap-md)" : "var(--gap-xl)",
            marginBottom: "var(--gap-xl)",
          }}
        >
          <p ref={p1Ref} style={colStyle}>
            I think in systems. A component isn&apos;t just a UI element &mdash;
            it&apos;s a contract between the product and the person using it.
            React is how I write that contract. TypeScript is the discipline
            that makes night deployments boring. Boring is good in production.
          </p>
          <p
            ref={p2Ref}
            style={{
              ...colStyle,
              marginTop: isMobile ? 0 : "48px",
            }}
          >
            The stack changes with the problem. Sometimes it&apos;s Go and
            Cloudflare Workers for an edge API. Sometimes it&apos;s a full
            Supabase backend with RLS. The constant is shipping fast without
            cutting corners. Security isn&apos;t added at the end &mdash; it&apos;s
            in the architecture from day one.
          </p>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "var(--gap-md)" : "var(--gap-lg)",
            marginBottom: "var(--gap-xl)",
            padding: "var(--gap-lg) 0",
            borderTop: "1px solid var(--white-07)",
            borderBottom: "1px solid var(--white-07)",
          }}
        >
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "var(--gap-sm)",
                }}
              >
                {group.title}
              </span>
              <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--size-label)",
                      letterSpacing: "var(--track-label)",
                      textTransform: "uppercase",
                      color: "var(--white-60)",
                      border: "1px solid var(--white-15)",
                      padding: "4px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech strip */}
        <div className="tech-strip-wrapper">
          <div
            className="tech-strip"
            style={{
              borderTop: "1px solid var(--white-07)",
              borderBottom: "1px solid var(--white-07)",
              padding: "18px 0",
            }}
          >
            {TECH_STRIP.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
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
