"use client";

import {useRef, useEffect} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function ChapterOrigin({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        {opacity: 0, y: -8},
        {opacity: 1, y: 0, duration: 0.4, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );
      headingRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el.querySelector(".clip-child"),
          {y: "110%"},
          {y: "0%", duration: 0.7, ease: "expo.out", delay: i * 0.08, scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
        );
      });
      gsap.fromTo(
        bodyRef.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay: 0.2, scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );
      gsap.fromTo(
        infoRef.current,
        {opacity: 0, y: 12},
        {opacity: 1, y: 0, duration: 0.4, ease: "expo.out", delay: 0.3, scrollTrigger: {trigger: section, start: "top 72%", toggleActions: "play none none reverse"}},
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const headingLines = [
    `${t.origin.grewUp} ${t.origin.country}`,
    t.origin.studied,
    t.origin.building,
  ];

  return (
    <section
      id="origin"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "var(--gap-2xl) var(--page-x)",
      }}
    >
      <div style={{maxWidth: "900px", margin: "0 auto"}}>
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
          01 &mdash; ORIGIN
        </span>

        {headingLines.map((line, i) => (
          <div
            key={i}
            className="clip-reveal"
            ref={(el) => { headingRefs.current[i] = el; }}
            style={{marginBottom: i < headingLines.length - 1 ? 0 : "var(--gap-lg)"}}
          >
            <h2
              className="clip-child"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--size-h2)",
                fontWeight: 700,
                letterSpacing: "var(--track-head)",
                lineHeight: 0.92,
                color: "var(--white)",
                margin: 0,
              }}
            >
              {line}
            </h2>
          </div>
        ))}

        <p
          ref={bodyRef}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-lg)",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--white-60)",
            maxWidth: "640px",
            margin: "0 0 var(--gap-md) 0",
            whiteSpace: "pre-line",
          }}
        >
          {t.origin.body}
        </p>

        <div
          ref={infoRef}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-label)",
            letterSpacing: "var(--track-label)",
            textTransform: "uppercase",
            color: "var(--white-60)",
            display: "inline-flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {t.origin.info}
        </div>
      </div>
    </section>
  );
}
