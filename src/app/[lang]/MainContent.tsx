"use client";

import {useEffect} from "react";
import {useLenis} from "@/lib/lenis";
import {ScrollTrigger} from "@/lib/gsap";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChapterOrigin from "@/components/ChapterOrigin";
import ChapterCraft from "@/components/ChapterCraft";
import ProjectsSection from "@/components/ProjectsSection";
import ProofSection from "@/components/ProofSection";
import ChapterAbout from "@/components/ChapterAbout";
import EndingSection from "@/components/EndingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function MainContent({t}: Props) {
  useLenis();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Preloader />
      <Nav t={t} />

      <main>
        <Hero t={t} />
        <ChapterOrigin t={t} />
        <ChapterCraft />
        <ProjectsSection />
        <ProofSection t={t} />
        <ChapterAbout t={t} />
        <EndingSection t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
