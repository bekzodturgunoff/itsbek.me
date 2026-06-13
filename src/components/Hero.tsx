"use client";

import {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {useLiveClock} from "@/hooks/useLiveClock";
import type {I18n} from "@/i18n/types";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

interface Props {
  t: I18n;
}

export default function Hero({t}: Props) {
  const seoulTime = useLiveClock("Asia/Seoul");
  const tashkentTime = useLiveClock("Asia/Tashkent");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [clocksActive, setClocksActive] = useState(false);
  const [mouse, setMouse] = useState({x: 0, y: 0});
  const [flashSeoul, setFlashSeoul] = useState(false);
  const [flashTash, setFlashTash] = useState(false);

  const {scrollY} = useScroll();

  useEffect(() => {
    if (prefersReducedMotion) {
      setClocksActive(true);
      return;
    }
    const timer = setTimeout(() => {
      setClocksActive(true);
      setFlashSeoul(true);
      setFlashTash(true);
      setTimeout(() => {
        setFlashSeoul(false);
        setFlashTash(false);
      }, 900);
    }, 2200);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({x, y});
    };
    window.addEventListener("mousemove", handleMouse, {passive: true});
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isMobile, prefersReducedMotion]);

  const leftPanelX = useTransform(scrollY, [0, 600], ["0%", isMobile ? "0%" : "-8%"]);
  const rightPanelX = useTransform(scrollY, [0, 600], ["0%", isMobile ? "0%" : "8%"]);
  const clocksOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const clocksY = useTransform(scrollY, [0, 300], ["0px", "-40px"]);
  const headlineY = useTransform(scrollY, [0, 400], ["0%", isMobile ? "0%" : "-15%"]);

  const panelLeftBg = isDark
    ? "linear-gradient(180deg, #0A0A10 0%, #0C0C14 100%)"
    : "linear-gradient(180deg, #ECEEF5 0%, #E8EAF2 100%)";
  const panelRightBg = isDark
    ? "linear-gradient(180deg, #100A08 0%, #120E0A 100%)"
    : "linear-gradient(180deg, #F5F0E8 0%, #F2ECE2 100%)";
  const clockColor = isDark
    ? "rgba(242, 239, 233, 0.85)"
    : "rgba(10, 10, 15, 0.65)";
  const clockLabel = isDark
    ? "rgba(242, 239, 233, 0.5)"
    : "rgba(10, 10, 15, 0.35)";
  const clockMuted = isDark
    ? "rgba(242, 239, 233, 0.35)"
    : "rgba(10, 10, 15, 0.2)";
  const headlineColor = isDark ? "#F2EFE9" : "#0A0A0F";

  const entrance = !prefersReducedMotion;

  const panelParallax = (xFactor: number): React.CSSProperties =>
    entrance && !isMobile
      ? {
          transform: `translate(${mouse.x * xFactor}px, ${mouse.y * 6}px)`,
          transition: "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        }
      : {};

  const ClockBlock = ({
    label,
    time,
    coords,
    subtitle,
    align,
    flash,
  }: {
    label: string;
    time: string;
    coords: [string, string];
    subtitle: string;
    align: "left" | "right";
    flash: boolean;
  }) => (
    <div
      style={{
        position: "absolute",
        ...(align === "left"
          ? {left: "clamp(24px, 5vw, 80px)"}
          : {right: "clamp(24px, 5vw, 80px)"}),
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 4,
        textAlign: align,
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: clockLabel,
          marginBottom: "6px",
        }}
      >
        {label}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: flash ? "var(--accent)" : clockColor,
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          marginBottom: "16px",
          transition: flash ? "color 0ms" : "color 600ms ease",
        }}
        aria-live="off"
        role="timer"
        aria-label={`Current time in ${label}`}
      >
        {clocksActive ? time : "--:--:--"}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.1em",
          color: clockMuted,
          lineHeight: 1.8,
          whiteSpace: "pre-line",
        }}
      >
        {coords[0]}{"\n"}{coords[1]}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: clockLabel,
          marginTop: "16px",
          opacity: 0.7,
        }}
      >
        {subtitle}
      </span>
    </div>
  );

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        background: isDark ? "#0C0C10" : "#F5F3EF",
      }}
    >
      {/* Panels and seam for desktop */}
      {!isMobile && (
        <>
          {/* LEFT PANEL */}
          <motion.div
            style={{x: leftPanelX, position: "absolute", top: 0, left: 0, width: "50%", height: "100%", zIndex: 1, background: panelLeftBg, overflow: "hidden"}}
            initial={entrance ? {opacity: 0} : undefined}
            animate={entrance ? {opacity: 1} : undefined}
            transition={entrance ? {duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1]} : undefined}
          >
            <div style={{width: "100%", height: "100%", ...panelParallax(-12)}} />
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            style={{x: rightPanelX, position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 1, background: panelRightBg, overflow: "hidden"}}
            initial={entrance ? {opacity: 0} : undefined}
            animate={entrance ? {opacity: 1} : undefined}
            transition={entrance ? {duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1]} : undefined}
          >
            <div style={{width: "100%", height: "100%", ...panelParallax(12)}} />
          </motion.div>

          {/* SEOUL CLOCK */}
          <motion.div style={{opacity: clocksOpacity, y: clocksY}}>
            <motion.div
              initial={entrance ? {opacity: 0, x: -20} : undefined}
              animate={entrance ? {opacity: 1, x: 0} : undefined}
              transition={entrance ? {duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1]} : undefined}
            >
              <ClockBlock label="Seoul · KST" time={seoulTime} coords={["37°33'N", "126°58'E"]} subtitle="Studied here" align="left" flash={flashSeoul} />
            </motion.div>
          </motion.div>

          {/* TASHKENT CLOCK */}
          <motion.div style={{opacity: clocksOpacity, y: clocksY}}>
            <motion.div
              initial={entrance ? {opacity: 0, x: 20} : undefined}
              animate={entrance ? {opacity: 1, x: 0} : undefined}
              transition={entrance ? {duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1]} : undefined}
            >
              <ClockBlock label="Tashkent · UZT" time={tashkentTime} coords={["41°17'N", "69°14'E"]} subtitle="Building here" align="right" flash={flashTash} />
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Mobile layout */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100dvh",
          }}
        >
          {/* Seoul panel top */}
          <div
            style={{
              flex: "0 0 35dvh",
              background: panelLeftBg,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <ClockBlock label="Seoul · KST" time={seoulTime} coords={["37°33'N", "126°58'E"]} subtitle="Studied here" align="left" flash={flashSeoul} />
          </div>

          {/* Tashkent panel bottom */}
          <div
            style={{
              flex: "0 0 35dvh",
              background: panelRightBg,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <ClockBlock label="Tashkent · UZT" time={tashkentTime} coords={["41°17'N", "69°14'E"]} subtitle="Building here" align="left" flash={flashTash} />
          </div>

          {/* Headline below panels */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 24px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: clockLabel,
                marginBottom: "12px",
              }}
            >
              {t.hero.name} &mdash; {t.hero.titleTop}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 12vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.88,
                color: headlineColor,
                margin: 0,
              }}
            >
              {t.hero.headlineLine1}
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 12vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.88,
                color: headlineColor,
                margin: "0 0 16px 0",
              }}
            >
              {t.hero.headlineLine2}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.65,
                color: clockColor,
                maxWidth: "360px",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {t.hero.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
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
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {t.hero.availability}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop headline & availability */}
      {!isMobile && (
        <>
          {/* HEADLINE */}
          <motion.div
            style={{y: headlineY, position: "absolute", bottom: "clamp(60px, 10vh, 120px)", left: 0, right: 0, padding: "0 clamp(24px, 5vw, 80px)", zIndex: 5}}
          >
            <motion.span
              initial={entrance ? {opacity: 0, y: 8} : undefined}
              animate={entrance ? {opacity: 1, y: 0} : undefined}
              transition={entrance ? {duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1]} : undefined}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: clockLabel,
                margin: "-8px 0 28px 0",
              }}
            >
              {t.hero.name} &mdash; {t.hero.titleTop}
            </motion.span>

            <div style={{overflow: "clip", lineHeight: 0.88}}>
              <motion.h1
                initial={entrance ? {y: "110%"} : undefined}
                animate={entrance ? {y: "0%"} : undefined}
                transition={entrance ? {duration: 0.8, delay: 1.35, ease: [0.16, 1, 0.3, 1]} : undefined}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(52px, 9.5vw, 136px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.88,
                  color: headlineColor,
                  margin: 0,
                }}
              >
                {t.hero.headlineLine1}
              </motion.h1>
            </div>

            <div style={{overflow: "clip", lineHeight: 0.88}}>
              <motion.h1
                initial={entrance ? {y: "110%"} : undefined}
                animate={entrance ? {y: "0%"} : undefined}
                transition={entrance ? {duration: 0.8, delay: 1.48, ease: [0.16, 1, 0.3, 1]} : undefined}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(52px, 9.5vw, 136px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.88,
                  color: headlineColor,
                  margin: "0 0 28px 0",
                }}
              >
                {t.hero.headlineLine2.replace(".", "")}
                <span style={{color: "var(--accent)"}}>.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={entrance ? {opacity: 0} : undefined}
              animate={entrance ? {opacity: 1} : undefined}
              transition={entrance ? {duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1]} : undefined}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(14px, 1.4vw, 18px)",
                fontWeight: 300,
                lineHeight: 1.65,
                color: clockColor,
                maxWidth: "440px",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {t.hero.description}
            </motion.p>
          </motion.div>

          {/* AVAILABILITY BADGE */}
          <motion.div
            initial={entrance ? {opacity: 0, y: 12} : undefined}
            animate={entrance ? {opacity: 1, y: 0} : undefined}
            transition={entrance ? {duration: 0.5, delay: 2.0, ease: [0.16, 1, 0.3, 1]} : undefined}
            style={{
              position: "absolute",
              bottom: "clamp(24px, 4vh, 48px)",
              right: "clamp(24px, 5vw, 80px)",
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <motion.span
              animate={{opacity: [1, 0.2, 1]}}
              transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {t.hero.availability}
            </span>
          </motion.div>
        </>
      )}
    </section>
  );
}
