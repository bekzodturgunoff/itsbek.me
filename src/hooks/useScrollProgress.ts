"use client";

import {useState, useEffect} from "react";
import {CHAPTER_SCENES} from "@/lib/constants";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      let current = 0;
      for (const scene of CHAPTER_SCENES) {
        const el = document.getElementById(scene.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = scene.index - 1;
          }
        }
      }
      setActiveChapter(current);
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {progress, activeChapter};
}
