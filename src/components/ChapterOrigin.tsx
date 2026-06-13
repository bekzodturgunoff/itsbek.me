"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function ChapterOrigin({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
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
          delay: 0.1,
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
          delay: 0.25,
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

  return (
    <section
      id="origin"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "var(--space-2xl) 24px" : "var(--space-2xl) 48px",
        overflow: "hidden",
      }}
    >
      {/* Decorative year */}
      {/* removed */}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
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
            marginBottom: "var(--space-lg)",
            opacity: 0,
          }}
        >
          01 &mdash; ORIGIN
        </span>

        <div
          style={{
            maxWidth: isMobile ? "100%" : "580px",
          }}
        >
          <div className="clip-reveal" style={{marginBottom: "var(--space-md)"}}>
            <h2
              ref={headlineRef}
              className="clip-child"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "clamp(32px, 9vw, 52px)" : "var(--text-chapter)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              {t.origin.grewUp}{" "}
              <span style={{color: "var(--accent)"}}>{t.origin.country}</span>
              <br />
              {t.origin.studied}
              <br />
              {t.origin.building}
            </h2>
          </div>

          <p
            ref={p1Ref}
            style={{
              fontSize: "var(--text-large)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 var(--space-md) 0",
              opacity: 0,
            }}
          >
            {t.about.intro.split("\n\n")[0]}
          </p>

          <p
            ref={p2Ref}
            style={{
              fontSize: "var(--text-large)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: 0,
              opacity: 0,
            }}
          >
            {t.about.intro.split("\n\n")[1]}
          </p>
        </div>

        {/* Smaller coordinate line at bottom */}
        {/* removed */}
      </div>
    </section>
  );
}
