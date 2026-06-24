"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "./gsap";

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: isMobile,
      syncTouchLerp: 0.075,
    });

    lenisRef.current = lenis;

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
