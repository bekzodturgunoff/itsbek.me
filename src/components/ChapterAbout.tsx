"use client";

import {useRef, useEffect, useState} from "react";
import {gsap} from "@/lib/gsap";
import Image from "next/image";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function ChapterAbout({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
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
        contentRef.current,
        {opacity: 0, y: 24},
        {opacity: 1, y: 0, duration: 0.6, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 75%", toggleActions: "play none none reverse"}},
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "var(--gap-2xl) var(--page-x)",
      }}
    >
      <div style={{maxWidth: "1400px", margin: "0 auto"}}>
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
          05 &mdash; {t.about.title.toUpperCase()}
        </span>

        <div
          ref={contentRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
            gap: isMobile ? "var(--gap-lg)" : "var(--gap-xl)",
            alignItems: "start",
          }}
        >
          {/* Portrait */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              background: "var(--white-07)",
            }}
          >
            {!imgError ? (
              <Image
                src="/images/portrait.jpg?v=2"
                alt="Bekzod Turgunov"
                fill
                sizes="280px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",

                }}
                onError={() => setImgError(true)}
              />
            ) : null}
            {imgError && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "var(--font-display)",
                  color: "var(--white-60)",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                <span>BT</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--white-30)",
                  }}
                >
                  No image loaded
                </span>
              </div>
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid var(--white-07)",
              }}
            />
          </div>

          {/* Bio */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-lg)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--white-60)",
                margin: "0 0 var(--gap-lg) 0",
                whiteSpace: "pre-line",
              }}
            >
              {t.about.body}
            </p>

            {/* Philosophy */}
            <div
              style={{
                borderTop: "1px solid var(--white-07)",
                paddingTop: "var(--gap-md)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "var(--gap-sm)",
                }}
              >
                Philosophy
              </span>
              {t.about.philosophy.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom: i < t.about.philosophy.length - 1
                      ? "1px solid var(--white-07)"
                      : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--white-15)",
                      lineHeight: 1.6,
                      width: "20px",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--size-md)",
                      lineHeight: 1.6,
                      color: "var(--white-60)",
                    }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
