"use client";

import {useEffect, useRef, useSyncExternalStore} from "react";
import {gsap} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function Hero({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    if (!mounted) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const line1 = line1Ref.current?.querySelector(".clip-child");
      const line2 = line2Ref.current?.querySelector(".clip-child");
      const subLines = subRef.current?.querySelectorAll(".hero-sub-line");

      if (line1) {
        gsap.fromTo(line1, {y: "110%"}, {y: "0%", duration: 0.8, delay: 0.5, ease: "expo.out"});
      }
      if (line2) {
        gsap.fromTo(line2, {y: "110%"}, {y: "0%", duration: 0.7, delay: 0.8, ease: "expo.out"});
      }
      if (subLines && subLines.length > 0) {
        gsap.fromTo(
          subLines,
          {opacity: 0, y: 20},
          {opacity: 1, y: 0, duration: 0.6, delay: 1.1, ease: "expo.out", stagger: 0.1}
        );
      }
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          {opacity: 0},
          {opacity: 1, duration: 0.4, delay: 1.4, ease: "expo.out"}
        );
      }
    }, section);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 var(--page-x) var(--gap-xl) var(--page-x)",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "var(--page-x)",
          right: "var(--page-x)",
          transform: "translateY(-50%)",
          maxWidth: "1400px",
          margin: "0 auto",
          pointerEvents: "none",
        }}
      >
        <div className="clip-reveal" ref={line1Ref}>
          <h1
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-hero)",
              fontWeight: 700,
              letterSpacing: "var(--track-head)",
              lineHeight: 0.88,
              color: "var(--white)",
              margin: 0,
            }}
          >
            {t.hero.headlineLine1}
          </h1>
        </div>

        <div className="clip-reveal" ref={line2Ref}>
          <h1
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-hero)",
              fontWeight: 700,
              letterSpacing: "var(--track-head)",
              lineHeight: 0.88,
              color: "var(--accent)",
              margin: 0,
            }}
          >
            {t.hero.headlineLine2}
          </h1>
        </div>

        <div ref={subRef}>
          <p
            className="hero-sub-line"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-lg)",
              fontWeight: 300,
              color: "var(--white-60)",
              margin: "40px 0 0 0",
              maxWidth: "540px",
              lineHeight: 1.6,
            }}
          >
            {t.hero.subtextLine1}
          </p>
          <p
            className="hero-sub-line"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-md)",
              fontWeight: 300,
              color: "var(--white-60)",
              margin: "4px 0 0 0",
              maxWidth: "540px",
              lineHeight: 1.6,
              opacity: 0.6,
            }}
          >
            {t.hero.subtextLine2}
          </p>
        </div>
      </div>

      <div
        ref={bottomRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingTop: "var(--gap-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--gap-sm)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "var(--white-07)",
          }}
        />

        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-label)",
            letterSpacing: "var(--track-label)",
            textTransform: "uppercase",
            color: "var(--white-60)",
          }}
        >
          {t.hero.name}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {t.hero.availability}
          </span>
        </div>
      </div>
    </section>
  );
}
