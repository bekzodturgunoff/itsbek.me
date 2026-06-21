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
    challenge: "Legacy restaurant software was slow, lost orders, and frustrated staff.",
    impact: "Live in real restaurants. Instant sync. Runs on low-end tablets.",
    tags: ["React", "TanStack", "Go"],
    year: "2026",
    href: "https://octopos.uz",
    image: "/images/projects/octopos_apps/dash_1.webp",
  },
  {
    id: "bronuz",
    index: "002",
    title: "BronUz",
    challenge: "Uzbekistan had no centralized venue booking platform.",
    impact: "Multi-vendor marketplace built in 3 days. Real users, real bookings.",
    tags: ["React", "Supabase", "Leaflet"],
    year: "2026",
    href: "https://bronuz.vercel.app",
    image: "/images/projects/bronuz/bronuz_homepage_2.webp",
  },
  {
    id: "telegram-bot",
    index: "003",
    title: "Personal Assistant",
    challenge: "Managing multi-language business messages across time zones was overwhelming.",
    impact: "AI handles 3 languages daily. Zero hosting cost. Saves hours every day.",
    tags: ["TypeScript", "Workers", "Gemini"],
    year: "2026",
    href: "https://github.com/bekzodturgunoff/personal-assistant",
    image: "/images/projects/bronuz/bronuz_homepage_2.webp",
  },
  {
    id: "octopos-landing",
    index: "004",
    title: "Octopos Landing",
    challenge: "Powerful product ecosystem had no clear, conversion-focused homepage.",
    impact: "Fast SaaS landing page with trial onboarding. Shipped in 4 weeks.",
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
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "auto 1fr auto",
                alignItems: "center",
                padding: isMobile ? "20px var(--page-x)" : "24px var(--page-x)",
                borderBottom: "1px solid var(--white-07)",
                cursor: "pointer",
                transition: "background 200ms",
                maxWidth: "1400px",
                margin: "0 auto",
                gap: isMobile ? "8px" : "24px",
              }}
            >
              {/* Index */}
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
                  width: isMobile ? "auto" : "40px",
                  flexShrink: 0,
                }}
              >
                {project.index}
              </span>

              {/* Center content */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: isMobile ? "clamp(20px, 6vw, 28px)" : "var(--size-project)",
                    fontWeight: 700,
                    letterSpacing: "var(--track-head)",
                    color: "var(--white)",
                    transition: "color 200ms",
                    display: "block",
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

                {/* Challenge + Impact — visible on desktop, collapsible on mobile */}
                {!isMobile && (
                  <div
                    style={{
                      marginTop: "6px",
                      display: "flex",
                      gap: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        lineHeight: 1.5,
                        color: "var(--white-60)",
                        maxWidth: "340px",
                      }}
                    >
                      <span style={{color: "var(--white-15)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "10px"}}>Challenge </span>
                      {project.challenge}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        lineHeight: 1.5,
                        color: "var(--accent)",
                        maxWidth: "300px",
                      }}
                    >
                      <span style={{color: "var(--white-15)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "10px"}}>Impact </span>
                      {project.impact}
                    </span>
                  </div>
                )}
              </div>

              {/* Right side */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "12px" : "24px",
                  flexShrink: 0,
                }}
              >
                {!isMobile && (
                  <div style={{display: "flex", gap: "6px"}}>
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
                          padding: "3px 8px",
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.year}
                </span>


              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
