"use client";

import {useRef, useState, useEffect} from "react";
import {motion} from "framer-motion";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function Hero({t}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const lineRef = useRef<SVGLineElement>(null);
  const seoulLabelRef = useRef<HTMLDivElement>(null);
  const tashkentLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const line = lineRef.current;
    if (!line) return;

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    setTimeout(() => {
      if (!lineRef.current) return;
      lineRef.current.style.transition = "stroke-dashoffset 1.8s var(--ease-out-expo)";
      lineRef.current.style.strokeDashoffset = "0";
    }, 1200);

    const lineDrawDuration = 1800;
    const lineStartDelay = 1200;

    setTimeout(() => {
      if (seoulLabelRef.current) {
        seoulLabelRef.current.style.transition = "opacity 0.4s var(--ease-out-expo)";
        seoulLabelRef.current.style.opacity = "1";
      }
    }, lineStartDelay + lineDrawDuration * 0.15);

    setTimeout(() => {
      if (tashkentLabelRef.current) {
        tashkentLabelRef.current.style.transition = "opacity 0.4s var(--ease-out-expo)";
        tashkentLabelRef.current.style.opacity = "1";
      }
    }, lineStartDelay + lineDrawDuration * 0.85);
  }, [isMobile]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {!isMobile && (
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          preserveAspectRatio="none"
        >
          <line
            ref={lineRef}
            x1="5%"
            y1="12%"
            x2="85%"
            y2="88%"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity={0.15}
          />
        </svg>
      )}

      {!isMobile && (
        <>
          <div
            ref={seoulLabelRef}
            style={{
              position: "absolute",
              top: "88px",
              left: "48px",
              zIndex: 2,
              textAlign: "left",
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.05em",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              opacity: 0,
            }}
          >
            <div>SEOUL &middot; 37.5665&deg; N, 126.9780&deg; E</div>
            <div>STUDIED HERE</div>
          </div>

          <div
            ref={tashkentLabelRef}
            style={{
              position: "absolute",
              bottom: "12%",
              right: "48px",
              zIndex: 2,
              textAlign: "right",
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.05em",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              opacity: 0,
            }}
          >
            <div>TASHKENT &middot; 41.2995&deg; N, 69.2401&deg; E</div>
            <div>BUILDING HERE</div>
          </div>
        </>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "600px",
          padding: isMobile ? "80px 24px 0 24px" : "140px 48px 0 48px",
        }}
      >
        <motion.span
          initial={{opacity: 0, y: -8}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "var(--space-md)",
          }}
        >
          {t.hero.titleTop}
        </motion.span>

        <div className="clip-reveal">
          <motion.h1
            className="clip-child"
            initial={{y: "110%"}}
            animate={{y: "0%"}}
            transition={{duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1]}}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            {t.hero.headlineLine1}
          </motion.h1>
        </div>

        <div className="clip-reveal">
          <motion.h1
            className="clip-child"
            initial={{y: "110%"}}
            animate={{y: "0%"}}
            transition={{duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1]}}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              margin: 0,
              marginBottom: "var(--space-lg)",
            }}
          >
            {t.hero.headlineLine2}
          </motion.h1>
        </div>

        <motion.h1
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1]}}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(56px, 20vw, 96px)" : "clamp(72px, 16vw, 200px)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--accent)",
            margin: 0,
          }}
        >
          {t.hero.headlineLine3}
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1]}}
          style={{
            fontSize: "var(--text-large)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginTop: "var(--space-md)",
            maxWidth: "380px",
          }}
        >
          {t.hero.description}
        </motion.p>
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 2.5}}
        style={{
          position: "absolute",
          bottom: "var(--space-md)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-xs)",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-label)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll to begin
        </span>
        <motion.div
          animate={{opacity: [0.3, 1, 0.3]}}
          transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
          style={{width: "1px", height: "40px", background: "var(--text-muted)"}}
        />
      </motion.div>
    </section>
  );
}
