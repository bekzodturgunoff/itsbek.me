"use client";

import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function Footer({t}: Props) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px var(--page-x)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            {t.footer.bandName}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-muted)",
            }}
          >
            &copy; 2026
          </span>
        </div>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
          {[
            {label: t.footer.email, href: "mailto:bekzodturgunoff@gmail.com"},
            {label: t.footer.github, href: "https://github.com/bekzodturgunoff"},
            {label: t.footer.telegram, href: "https://t.me/bekzodturgunoff"},
            {label: t.footer.resume, href: "/bekzod-turgunov-resume.pdf"},
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "16px auto 0",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          fontStyle: "italic",
          color: "var(--text-muted)",
          opacity: 0.35,
        }}
      >
        Built with Next.js, Framer Motion, GSAP, Lenis &mdash; no template, no boilerplate.
      </div>
    </footer>
  );
}
