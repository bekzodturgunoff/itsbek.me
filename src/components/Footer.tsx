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
        padding: "40px 48px",
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
          gap: "16px",
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            {t.footer.bandName}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            &copy; 2026
          </span>
        </div>
        <div style={{display: "flex", gap: "24px", alignItems: "center"}}>
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
                fontSize: "11px",
                letterSpacing: "0.1em",
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
          margin: "24px auto 0",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-muted)",
          opacity: 0.3,
        }}
      >
        Built with Next.js, Framer Motion, GSAP, Lenis \u2014 no template, no boilerplate.
      </div>
    </footer>
  );
}
