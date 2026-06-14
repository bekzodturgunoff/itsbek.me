"use client";

import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function Footer({t}: Props) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "32px var(--page-x)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 700,
              color: "var(--white)",
            }}
          >
            BT
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--size-label)",
              color: "var(--white-60)",
            }}
          >
            &copy; 2026
          </span>
        </div>
        <div style={{display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap"}}>
          {[
            {label: t.footer.email, href: "mailto:bekzodturgunoff@gmail.com"},
            {label: t.footer.github, href: "https://github.com/bekzodturgunoff"},
            {label: t.footer.telegram, href: "https://t.me/bekzodturgunoff"},
            {label: t.footer.resume, href: "/bekzod-turgunov-resume.pdf"},
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-label)",
                color: "var(--white-60)",
                textDecoration: "none",
                transition: "color 150ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-60)")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "16px",
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          fontStyle: "italic",
          color: "var(--white-60)",
          opacity: 0.3,
        }}
      >
        {t.footer.builtWith}
      </div>
    </footer>
  );
}
