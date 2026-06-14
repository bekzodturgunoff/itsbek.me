"use client";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) {
    gsap.defaults({duration: 0.001});
  }
  reduced.addEventListener("change", (e) => {
    gsap.defaults({duration: e.matches ? 0.001 : undefined});
  });
}

export {gsap, ScrollTrigger};
