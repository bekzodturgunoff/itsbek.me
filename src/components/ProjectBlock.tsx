"use client";

import {useRef, useEffect} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

interface DetailItem {
  label: string;
  value: string;
}

interface ProjectBlockProps {
  index: string;
  title: string;
  hook: string;
  href: string;
  linkLabel: string;
  imageSrc?: string;
  videoSrc?: string;
  accentBadge?: string;
  bgColor: string;
  minHeight?: string;
  details?: [DetailItem, DetailItem];
}

export default function ProjectBlock({
  index,
  title,
  hook,
  href,
  linkLabel,
  imageSrc,
  videoSrc,
  accentBadge,
  bgColor,
  minHeight = "100vh",
  details = [
    {label: "Role", value: "Software Engineer"},
    {label: "Stack", value: "React · TypeScript"},
  ],
}: ProjectBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hookRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        imageWrapRef.current,
        {clipPath: "inset(0 0 100% 0)"},
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Index label
      gsap.fromTo(
        indexRef.current,
        {opacity: 0, y: 12},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Title clip-mask reveal
      gsap.fromTo(
        titleRef.current,
        {y: "110%"},
        {
          y: "0%",
          duration: 0.7,
          ease: "expo.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Hook
      gsap.fromTo(
        hookRef.current,
        {opacity: 0, y: 16},
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "expo.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Details row
      gsap.fromTo(
        detailsRef.current,
        {opacity: 0, y: 16},
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "expo.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        {opacity: 0, y: 8},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          delay: 1.0,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
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
      id={`project-${index.padStart(3, "0")}`}
      ref={sectionRef}
      className="project-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        background: bgColor,
      }}
    >
      {/* Layer 1: Full-bleed image */}
      <div
        ref={imageWrapRef}
        className="project-image-env"
        data-video={videoSrc ? true : undefined}
        style={{
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        {videoSrc ? (
          <video src={videoSrc} autoPlay muted loop playsInline />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
        ) : null}
      </div>

      {/* Layer 2: Gradient overlay */}
      <div className="project-gradient" />

      {/* Accent badge */}
      {accentBadge && (
        <div
          style={{
            position: "absolute",
            bottom: "var(--space-lg)",
            right: "var(--space-lg)",
            zIndex: 3,
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "var(--accent)",
            color: "#000",
            padding: "6px 12px",
            fontWeight: 600,
          }}
        >
          {accentBadge}
        </div>
      )}

      {/* Layer 3: Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 var(--space-lg) var(--space-xl) var(--space-lg)",
          maxWidth: "900px",
        }}
      >
        <span
          ref={indexRef}
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "var(--space-sm)",
          }}
        >
          {index}
        </span>

        <div className="clip-reveal" style={{marginBottom: "var(--space-sm)"}}>
          <h3
            ref={titleRef}
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-project)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "var(--text)",
              margin: 0,
              transition: "color 200ms var(--ease-out-expo)",
            }}
          >
            {title}
          </h3>
        </div>

        <p
          ref={hookRef}
          style={{
            fontSize: "var(--text-large)",
            fontWeight: 300,
            color: "var(--text-secondary)",
            margin: "0 0 var(--space-md) 0",
            maxWidth: "560px",
          }}
        >
          {hook}
        </p>

        <div
          ref={detailsRef}
          style={{
            display: "flex",
            gap: "var(--space-xl)",
            marginBottom: "var(--space-md)",
            flexWrap: "wrap",
          }}
        >
          {details.map((d) => (
            <div key={d.label}>
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
                {d.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono)",
                  color: "var(--text-secondary)",
                }}
              >
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <a
          ref={ctaRef}
          href={href}
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
          {linkLabel}
        </a>
      </div>
    </section>
  );
}
