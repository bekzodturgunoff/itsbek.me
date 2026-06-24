"use client";

import {useRef, useEffect, useState} from "react";
import {gsap} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function EndingSection({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([null, null, null]);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
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

      h2Refs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {y: "110%"},
          {y: "0%", duration: 0.7, ease: "expo.out", delay: i * 0.1, scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
        );
      });

      gsap.fromTo(
        bodyRef.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: 0.3, scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );

      gsap.fromTo(
        ctaRef.current,
        {opacity: 0, y: 12},
        {opacity: 1, y: 0, duration: 0.5, ease: "expo.out", delay: 0.5, scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: isMobile ? "var(--gap-2xl) 24px" : "var(--gap-2xl) var(--page-x)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{maxWidth: "1400px", margin: "0 auto", width: "100%"}}>
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
          06 &mdash; VISION
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
            {t.ending.headlineLine1}
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
            {t.ending.headlineLine2}
          </h2>
        </div>
        <div className="clip-reveal" style={{marginBottom: "var(--gap-lg)"}}>
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
            {t.ending.headlineLine3}
          </h2>
        </div>

        <p
          ref={bodyRef}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-lg)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--white-60)",
            margin: "0 0 var(--gap-lg) 0",
            maxWidth: "560px",
          }}
        >
          {t.ending.body}
        </p>

        <div
          ref={ctaRef}
          style={{
            borderTop: "1px solid var(--white-07)",
            paddingTop: "var(--gap-md)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "20px" : "24px",
              fontWeight: 600,
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "color 200ms var(--ease-out)",
              borderBottom: "2px solid var(--accent)",
              paddingBottom: "4px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            {t.ending.cta}
            <span style={{fontSize: "28px", lineHeight: 1, display: "inline-block", transition: "transform 200ms"}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(4px, -2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0, 0)"; }}
            >
              &rarr;
            </span>
          </a>

          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color: "var(--white-60)",
              opacity: 0.6,
            }}
          >
            Scroll down to get in touch
          </span>
        </div>
      </div>
    </section>
  );
}
