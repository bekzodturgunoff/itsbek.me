"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";

export default function JourneyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const city1Ref = useRef<SVGGElement>(null);
  const city2Ref = useRef<SVGGElement>(null);
  const label1Ref = useRef<SVGGElement>(null);
  const label2Ref = useRef<SVGGElement>(null);
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const pathLength = path.getTotalLength();

    const ctx = gsap.context(() => {
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 35%",
          scrub: 1.5,
        },
      });

      gsap.fromTo(
        city1Ref.current,
        {opacity: 0, scale: 0},
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        label1Ref.current,
        {opacity: 0, y: 12},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        city2Ref.current,
        {opacity: 0, scale: 0},
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: container,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        label2Ref.current,
        {opacity: 0, y: 12},
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: container,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, container);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "var(--gap-xl) auto 0",
        padding: "0 var(--page-x)",
        aspectRatio: "800 / 380",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 800 380"
        fill="none"
        style={{width: "100%", height: "100%", display: "block"}}
        aria-label="Geographic journey from Tashkent to Seoul"
        role="img"
      >
        {/* Subtle grid */}
        <line x1="0" y1="190" x2="800" y2="190" stroke="var(--white-07)" strokeWidth="1" />
        <line x1="0" y1="95" x2="800" y2="95" stroke="var(--white-07)" strokeWidth="0.5" />
        <line x1="0" y1="285" x2="800" y2="285" stroke="var(--white-07)" strokeWidth="0.5" />

        {/* Continents hint — simplified Central Asia shape */}
        <path
          d="M 60 200 Q 150 170 240 190 Q 300 200 350 185 Q 400 175 450 180 Q 520 190 580 175 Q 640 160 700 170 Q 740 178 760 190"
          stroke="var(--white-07)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 100 210 Q 200 230 300 220 Q 380 215 420 225 Q 480 240 550 230 Q 620 220 680 235 Q 720 245 750 240"
          stroke="var(--white-07)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />

        {/* Journey arc */}
        <path
          ref={pathRef}
          d="M 255 225 Q 400 50 560 155"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={reduced ? {strokeDasharray: "none"} : undefined}
        />

        {/* Dashed arrowhead at end */}
        <line
          x1="555" y1="148" x2="568" y2="160"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* City 1: Tashkent */}
        <g ref={city1Ref} style={reduced ? {opacity: 1} : undefined}>
          <circle cx="255" cy="225" r="8" fill="var(--accent)" />
          <circle cx="255" cy="225" r="16" fill="var(--accent)" opacity="0.15" />
          <circle cx="255" cy="225" r="26" fill="var(--accent)" opacity="0.06" />
        </g>

        {/* City 2: Seoul */}
        <g ref={city2Ref} style={reduced ? {opacity: 1} : undefined}>
          <circle cx="560" cy="155" r="8" fill="var(--accent)" />
          <circle cx="560" cy="155" r="16" fill="var(--accent)" opacity="0.15" />
          <circle cx="560" cy="155" r="26" fill="var(--accent)" opacity="0.06" />
        </g>

        {/* Label 1 */}
        <g ref={label1Ref} style={reduced ? {opacity: 1} : undefined}>
          <text
            x="255" y="260"
            fill="var(--white)"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="600"
            textAnchor="middle"
          >
            Tashkent
          </text>
          <text
            x="255" y="278"
            fill="var(--white-60)"
            fontFamily="var(--font-sans)"
            fontSize="11"
            textAnchor="middle"
          >
            Born \u00B7 Learned to code
          </text>
        </g>

        {/* Label 2 */}
        <g ref={label2Ref} style={reduced ? {opacity: 1} : undefined}>
          <text
            x="560" y="135"
            fill="var(--white)"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="600"
            textAnchor="middle"
          >
            Seoul
          </text>
          <text
            x="560" y="210"
            fill="var(--white-60)"
            fontFamily="var(--font-sans)"
            fontSize="11"
            textAnchor="middle"
          >
            Studied security \u00B7 2023
          </text>
        </g>

        {/* Compass rose (minimal) */}
        <g opacity="0.2" transform="translate(720, 50)">
          <text
            x="0" y="0"
            fill="var(--white-60)"
            fontFamily="var(--font-sans)"
            fontSize="9"
            textAnchor="middle"
          >
            N
          </text>
          <line x1="0" y1="4" x2="0" y2="20" stroke="var(--white-60)" strokeWidth="0.5" />
          <line x1="-8" y1="14" x2="0" y2="20" stroke="var(--white-60)" strokeWidth="0.5" />
          <line x1="8" y1="14" x2="0" y2="20" stroke="var(--white-60)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
