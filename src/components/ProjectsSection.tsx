"use client";

import {useState} from "react";
import {useLang} from "@/app/[lang]/LangProvider";
import ProjectImageCursor from "@/components/ProjectImageCursor";

const PROJECTS = [
  {
    index: "001",
    title: "Octopos Apps",
    hook: "Three screens. One kitchen. Zero downtime.",
    caseStudySlug: "octopos-apps",
    liveHref: "https://octopos.uz",
    image: "/images/projects/octopos_apps/dash_1.webp",
  },
  {
    index: "002",
    title: "BronUz",
    hook: "Uzbekistan had no venue booking platform. So I built one.",
    caseStudySlug: "bronuz",
    liveHref: "https://bronuz.vercel.app",
    image: "/images/projects/bronuz/bronuz_homepage_2.webp",
  },
  {
    index: "003",
    title: "Personal Assistant",
    hook: "An AI that answers as me. In three languages. At zero cost.",
    caseStudySlug: "telegram-bot",
    liveHref: "https://t.me/itsbek_bot",
    image: "/images/projects/bot/bot_chat.webp",
  },
  {
    index: "004",
    title: "Octopos Landing",
    hook: "A restaurant platform that needed a proper homepage.",
    caseStudySlug: "octopos-landing",
    liveHref: "https://octopos.uz",
    image: "/images/projects/octopos/octopos.webp",
  },
];

export default function ProjectsSection() {
  const lang = useLang();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const activeImage = hoverIndex !== null ? PROJECTS[hoverIndex] : null;

  return (
    <section
      id="work"
      style={{
        borderTop: "1px solid var(--border)",
        paddingBottom: "var(--gap-lg)",
      }}
    >
      <ProjectImageCursor
        src={activeImage?.image ?? ""}
        alt={activeImage?.title ?? ""}
        active={hoverIndex !== null}
      />

      <div
        style={{
          padding: "var(--gap-xl) var(--page-x) 0",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "var(--gap-lg)",
          }}
        >
          03 &mdash; THE WORK
        </span>
      </div>

      <div style={{maxWidth: "1200px", margin: "0 auto"}}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.index}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr auto",
              alignItems: "center",
              gap: "var(--gap-md)",
              padding: "20px var(--page-x)",
              borderTop: "1px solid var(--border)",
              cursor: "pointer",
              transition: "background 200ms var(--ease-out)",
            }}
          >
            <a
              href={`/${lang}/case-study/${project.caseStudySlug}`}
              style={{
                display: "contents",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label)",
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                }}
              >
                {project.index}
              </span>

              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 2.5vw, 28px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                    lineHeight: 1.2,
                    marginBottom: "2px",
                  }}
                >
                  {project.title}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--text-secondary)",
                    lineHeight: 1.4,
                  }}
                >
                  {project.hook}
                </span>
              </div>
            </a>

            <div style={{display: "flex", gap: "var(--gap-md)", alignItems: "center"}}>
              <a
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  transition: "color 200ms var(--ease-out)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                Live &nearr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
