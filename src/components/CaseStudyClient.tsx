"use client";

import {useRef, useEffect} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type {I18n} from "@/i18n/types";

interface CaseStudyData {
  badge: string;
  title: string;
  subtitle: string;
  meta: {label: string; value: string}[];
  problem: {title: string; body: string};
  research: {title: string; bullets: string[]};
  design: {title: string; bullets: string[]};
  images: {src: string; alt: string; caption: string}[];
  cta: {label: string; href: string};
}

interface Props {
  t: I18n;
  lang: string;
  data: CaseStudyData;
}

export default function CaseStudyClient({t, lang, data}: Props) {
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLElement>(null);
  const researchRef = useRef<HTMLElement>(null);
  const designRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveals
      gsap.fromTo(
        heroRef.current!.querySelectorAll(".reveal-up"),
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.12, scrollTrigger: {trigger: heroRef.current, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      gsap.fromTo(
        heroRef.current!.querySelectorAll(".clip-child"),
        {y: "110%"},
        {y: "0%", duration: 0.7, ease: "expo.out", stagger: 0.15, scrollTrigger: {trigger: heroRef.current, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      // Problem section
      gsap.fromTo(
        problemRef.current!.querySelectorAll(".reveal-up"),
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.1, scrollTrigger: {trigger: problemRef.current, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      // Research section
      gsap.fromTo(
        researchRef.current!.querySelectorAll(".reveal-up"),
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.08, scrollTrigger: {trigger: researchRef.current, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      // Design / Results section
      gsap.fromTo(
        designRef.current!.querySelectorAll(".reveal-up"),
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.08, scrollTrigger: {trigger: designRef.current, start: "top 80%", toggleActions: "play none none reverse"}},
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav t={t} />
      <main ref={mainRef} style={{paddingTop: "56px"}}>
        {/* Header */}
        <div style={{display: "flex", justifyContent: "center", padding: "var(--space-md) var(--space-lg) 0"}}>
          <a
            href={`/${lang}`}
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
            &larr; Back
          </a>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          style={{
            padding: "var(--space-2xl) var(--space-lg)",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <span
            className="reveal-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "var(--space-sm)",
              display: "block",
            }}
          >
            {data.badge}
          </span>

          <div className="clip-reveal" style={{marginBottom: "var(--space-md)"}}>
            <h1
              className="clip-child"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-chapter)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              {data.title}
            </h1>
          </div>

          <p
            className="reveal-up"
            style={{
              fontSize: "var(--text-large)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 var(--space-lg) 0",
            }}
          >
            {data.subtitle}
          </p>

          <div
            className="reveal-up"
            style={{
              display: "flex",
              gap: "var(--space-xl)",
              flexWrap: "wrap",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "var(--space-md) 0",
            }}
          >
            {data.meta.map((m) => (
              <div key={m.label}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-label)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-mono)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section
          ref={problemRef}
          style={{
            padding: "var(--space-2xl) var(--space-lg)",
            maxWidth: "800px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            className="reveal-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "var(--space-md)",
              display: "block",
            }}
          >
            {data.problem.title}
          </span>
          <p
            className="reveal-up"
            style={{
              fontSize: "var(--text-large)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            {data.problem.body}
          </p>
        </section>

        {/* Research */}
        <section
          ref={researchRef}
          style={{
            padding: "var(--space-2xl) var(--space-lg)",
            maxWidth: "800px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            className="reveal-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "var(--space-md)",
              display: "block",
            }}
          >
            {data.research.title}
          </span>
          <ul style={{listStyle: "none", padding: 0, margin: 0}}>
            {data.research.bullets.map((bullet, i) => (
              <li
                key={i}
                className="reveal-up"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-sm)",
                  paddingLeft: "var(--space-md)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.65em",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    opacity: 0.5,
                  }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section
          ref={designRef}
          style={{
            padding: "var(--space-2xl) var(--space-lg)",
            maxWidth: "800px",
            margin: "0 auto",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            className="reveal-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "var(--space-md)",
              display: "block",
            }}
          >
            {data.design.title}
          </span>
          <ul style={{listStyle: "none", padding: 0, margin: 0}}>
            {data.design.bullets.map((bullet, i) => (
              <li
                key={i}
                className="reveal-up"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-sm)",
                  paddingLeft: "var(--space-md)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.65em",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    opacity: 0.5,
                  }}
                />
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        {/* Images */}
        {data.images.length > 0 && (
          <section
            style={{
              padding: "var(--space-2xl) var(--space-lg)",
              maxWidth: "1000px",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{display: "grid", gap: "var(--space-xl)"}}>
              {data.images.map((img, i) => (
                <div key={i} className="reveal-up">
                  {img.src.endsWith(".webm") ? (
                    <video
                      src={img.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        display: "block",
                      }}
                    />
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      marginTop: "var(--space-xs)",
                      display: "block",
                      lineHeight: 1.6,
                    }}
                  >
                    {img.caption}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div
          style={{
            padding: "var(--space-xl) var(--space-lg) var(--space-2xl)",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <a
            href={data.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-xs)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "4px",
              transition: "color 200ms var(--ease-out-expo), border-color 200ms var(--ease-out-expo)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {data.cta.label}
          </a>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
