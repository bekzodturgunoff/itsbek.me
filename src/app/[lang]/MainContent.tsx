"use client";

import {useEffect} from "react";
import {useLenis} from "@/lib/lenis";
import {ScrollTrigger} from "@/lib/gsap";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ChapterOrigin from "@/components/ChapterOrigin";
import ChapterCraft from "@/components/ChapterCraft";
import ProjectNavStrip from "@/components/ProjectNavStrip";
import ProjectBlock from "@/components/ProjectBlock";
import StatsSection from "@/components/StatsSection";
import VisionSection from "@/components/VisionSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {useLang} from "@/app/[lang]/LangProvider";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function MainContent({t}: Props) {
  useLenis();
  const lang = useLang();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Cursor />
      <Preloader />
      <Nav t={t} />

      <main>
        <Hero t={t} />

        <ChapterOrigin t={t} />
        <ChapterCraft />

        <section id="work" style={{borderTop: "1px solid var(--border)"}}>
          <div style={{paddingTop: "var(--space-lg)"}}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "var(--space-lg)",
                padding: "0 48px",
              }}
            >
              03 &mdash; THE WORK
            </span>
            <ProjectNavStrip />
          </div>

          <ProjectBlock
            index="001"
            title="Octopos Apps"
            hook="Three screens. One kitchen. Zero downtime."
            bgColor="#0D0A08"
            href="https://octopos.uz"
            linkLabel="View project"
            imageSrc="/images/projects/octopos_apps/dash_1.webp"
            details={[
              {label: "Role", value: "Frontend Engineer"},
              {label: "Stack", value: "React \u00b7 TanStack \u00b7 Go"},
            ]}
          />

          <ProjectBlock
            index="002"
            title="BronUz"
            hook="Uzbekistan had no venue booking platform. So I built one."
            bgColor="#080D0A"
            href={`https://bronuz.vercel.app`}
            linkLabel="View project"
            imageSrc="/images/projects/bronuz/bronuz_homepage_2.webp"
            accentBadge="BUILT IN 3 DAYS"
            details={[
              {label: "Role", value: "Full-Stack Engineer \u00b7 Designer"},
              {label: "Stack", value: "React \u00b7 Supabase \u00b7 Leaflet"},
            ]}
          />

          <ProjectBlock
            index="003"
            title="Personal Assistant"
            hook="An AI that answers as me. In three languages. At zero cost."
            bgColor="#060608"
            href={`/${lang}/case-study/telegram-bot`}
            linkLabel="Read case study"
            videoSrc="/images/projects/3d-device-with-ai-assistant.webm"
            details={[
              {label: "Role", value: "Software Engineer"},
              {label: "Stack", value: "Cloudflare Workers \u00b7 Gemini"},
            ]}
          />

          <ProjectBlock
            index="004"
            title="Octopos Landing"
            hook="A restaurant platform that needed a proper homepage."
            bgColor="#0D0A08"
            minHeight="70vh"
            href="https://octopos.uz"
            linkLabel="Visit live site"
            imageSrc="/images/projects/octopos/octopos.webp"
            details={[
              {label: "Role", value: "Frontend Engineer"},
              {label: "Stack", value: "Astro \u00b7 Tailwind \u00b7 Resend"},
            ]}
          />
        </section>

        <StatsSection />
        <VisionSection />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
