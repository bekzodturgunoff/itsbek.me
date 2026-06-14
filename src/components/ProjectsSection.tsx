"use client";

import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useLang} from "@/app/[lang]/LangProvider";
import ProjectImageCursor from "@/components/ProjectImageCursor";

const PROJECTS = [
  {
    id: "octopos-apps",
    index: "001",
    title: "Octopos Apps",
    hook: "Three screens. One kitchen. Zero downtime.",
    tags: ["React", "TanStack", "Go"],
    year: "2026",
    href: "https://octopos.uz",
    image: "/images/projects/octopos_apps/dash_1.webp",
  },
  {
    id: "bronuz",
    index: "002",
    title: "BronUz",
    hook: "Uzbekistan had no venue booking platform. I built one in 3 days.",
    tags: ["React", "Supabase", "Leaflet"],
    year: "3 days \u00B7 2026",
    href: "https://bronuz.vercel.app",
    image: "/images/projects/bronuz/bronuz_homepage_2.webp",
  },
  {
    id: "assistant-bot",
    index: "003",
    title: "Personal Assistant",
    hook: "An AI that answers as me. Three languages. Zero cost.",
    tags: ["TypeScript", "Workers", "Gemini"],
    year: "2026",
    href: "https://github.com/bekzodturgunoff/personal-assistant",
    image: "/images/projects/bronuz/bronuz_homepage_2.webp",
  },
  {
    id: "octopos-landing",
    index: "004",
    title: "Octopos Landing",
    hook: "A restaurant platform that needed a proper homepage.",
    tags: ["Astro", "Tailwind", "Resend"],
    year: "4 weeks \u00B7 2026",
    href: "https://octopos.uz",
    image: "/images/projects/octopos/octopos.webp",
  },
];

export default function ProjectsSection() {
  const router = useRouter();
  const lang = useLang();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({x: 0, y: 0});
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const activeImage = activeProject
    ? PROJECTS.find((p) => p.id === activeProject) ?? null
    : null;

  const handleMouseEnter = (id: string) => {
    if (!isMobile) setActiveProject(id);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveProject(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) setCursorPos({x: e.clientX, y: e.clientY});
  };

  const goToCaseStudy = (slug: string) => {
    router.push(`/${lang}/case-study/${slug}`);
  };

  return (
    <section
      id="work"
      style={{
        borderTop: "1px solid var(--white-07)",
        paddingTop: "var(--gap-xl)",
      }}
    >
      <ProjectImageCursor
        key={activeImage?.image ?? ""}
        src={activeImage?.image ?? ""}
        alt={activeImage?.title ?? ""}
        active={activeProject !== null}
        cursorPos={cursorPos}
      />

      <div style={{padding: "0 var(--page-x)", maxWidth: "1400px", margin: "0 auto"}}>
        <span
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
          03 &mdash; THE WORK
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--size-h2)",
            fontWeight: 700,
            letterSpacing: "var(--track-head)",
            lineHeight: 0.92,
            color: "var(--white)",
            margin: "0 0 var(--gap-lg) 0",
          }}
        >
          Selected Work
        </h2>

        {/* Desktop nav strip */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color: "var(--white-60)",
              marginBottom: "var(--gap-md)",
              flexWrap: "wrap",
            }}
          >
            {PROJECTS.map((p) => (
              <span
                key={p.id}
                style={{
                  color: activeProject === p.id ? "var(--white)" : "var(--white-60)",
                  transition: "color 200ms",
                  cursor: "default",
                }}
              >
                {`${p.index} ${p.title.toUpperCase()}`}
                {p.id !== PROJECTS[PROJECTS.length - 1].id && (
                  <span style={{color: "var(--white-15)", marginLeft: "8px"}}> &middot; </span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Project list */}
      <div
        onMouseMove={handleMouseMove}
        style={{borderTop: "1px solid var(--white-07)"}}
      >
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <div
              onMouseEnter={(e) => {
                handleMouseEnter(project.id);
                if (!isMobile) e.currentTarget.style.background = "var(--white-07)";
              }}
              onMouseLeave={(e) => {
                handleMouseLeave();
                if (!isMobile) e.currentTarget.style.background = "transparent";
              }}
              onClick={() => goToCaseStudy(project.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: isMobile ? "20px var(--page-x)" : "28px var(--page-x)",
                borderBottom: "1px solid var(--white-07)",
                cursor: "pointer",
                transition: "background 200ms",
                maxWidth: "1400px",
                margin: "0 auto",
              }}
            >
              {/* Left side */}
              <div style={{display: "flex", alignItems: "baseline", gap: "24px"}}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--size-label)",
                    letterSpacing: "var(--track-label)",
                    textTransform: "uppercase",
                    color: "var(--white-60)",
                    width: "40px",
                    flexShrink: 0,
                  }}
                >
                  {project.index}
                </span>
                <span
                  data-project-title
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: isMobile ? "clamp(20px, 6vw, 32px)" : "var(--size-project)",
                    fontWeight: 700,
                    letterSpacing: "var(--track-head)",
                    color: "var(--white)",
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) e.currentTarget.style.color = "var(--white)";
                  }}
                >
                  {project.title}
                </span>
              </div>

              {/* Right side */}
              <div style={{display: "flex", alignItems: "center", gap: isMobile ? "16px" : "32px"}}>
                {!isMobile && (
                  <div style={{display: "flex", gap: "8px"}}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "var(--size-label)",
                          letterSpacing: "var(--track-label)",
                          textTransform: "uppercase",
                          color: "var(--white-60)",
                          border: "1px solid var(--white-15)",
                          padding: "4px 10px",
                          borderRadius: "2px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--size-label)",
                    color: "var(--white-60)",
                  }}
                >
                  {project.year}
                </span>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--size-label)",
                    color: "var(--white-60)",
                    textDecoration: "none",
                    transition: "color 200ms, transform 200ms",
                    display: "inline-flex",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--white)";
                    e.currentTarget.style.transform = "translate(3px, -3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--white-60)";
                    e.currentTarget.style.transform = "translate(0, 0)";
                  }}
                >
                  &nearr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
