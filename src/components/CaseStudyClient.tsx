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
  slug: string;
  data: CaseStudyData;
}

export default function CaseStudyClient({t, lang, slug, data}: Props) {
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
      <Nav t={t} currentSlug={slug} />

      {/* Fixed back button — always visible, out of content flow */}
      <a
        href={`/${lang}`}
        style={{
          position: "fixed",
          top: "calc(52px + var(--gap-sm))",
          left: "var(--page-x)",
          zIndex: 90,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-body)",
          color: "var(--text)",
          textDecoration: "none",
          padding: "10px 18px",
          borderRadius: "9999px",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid var(--border)",
          transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out)",
          lineHeight: 1,
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
        <span style={{fontSize: "20px", lineHeight: 1}}>&larr;</span>
        Back
      </a>

      <main ref={mainRef} style={{paddingTop: "56px"}}>

        {/* Hero */}
        <section
          ref={heroRef}
          style={{
            padding: "var(--gap-2xl) var(--gap-lg)",
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
              marginBottom: "var(--gap-sm)",
              display: "block",
            }}
          >
            {data.badge}
          </span>

          <div className="clip-reveal" style={{marginBottom: "var(--gap-md)"}}>
            <h1
              className="clip-child"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
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
              fontSize: "var(--text-title)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 var(--gap-lg) 0",
            }}
          >
            {data.subtitle}
          </p>

          <div
            className="reveal-up"
            style={{
              display: "flex",
              gap: "var(--gap-xl)",
              flexWrap: "wrap",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "var(--gap-md) 0",
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
            padding: "var(--gap-2xl) var(--gap-lg)",
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
              marginBottom: "var(--gap-md)",
              display: "block",
            }}
          >
            {data.problem.title}
          </span>
          <p
            className="reveal-up"
            style={{
              fontSize: "var(--text-title)",
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
            padding: "var(--gap-2xl) var(--gap-lg)",
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
              marginBottom: "var(--gap-md)",
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
                  marginBottom: "var(--gap-sm)",
                  paddingLeft: "var(--gap-md)",
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
            padding: "var(--gap-2xl) var(--gap-lg)",
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
              marginBottom: "var(--gap-md)",
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
                  marginBottom: "var(--gap-sm)",
                  paddingLeft: "var(--gap-md)",
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
              padding: "var(--gap-2xl) var(--gap-lg)",
              maxWidth: "1000px",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{display: "grid", gap: "var(--gap-xl)"}}>
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
                      marginTop: "var(--gap-xs)",
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
            padding: "var(--gap-xl) var(--gap-lg) var(--gap-2xl)",
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
              gap: "var(--gap-xs)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text)",
              textDecoration: "none",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "4px",
              transition: "color 200ms var(--ease-out), border-color 200ms var(--ease-out)",
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
