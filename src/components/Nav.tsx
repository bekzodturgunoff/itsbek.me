"use client";

import {useState, useEffect} from "react";
import {useLang} from "@/app/[lang]/LangProvider";
import {LANGUAGES} from "@/lib/constants";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
  currentSlug?: string;
}

const CHAPTER_LABELS: Record<string, string> = {
  hero:    '',
  origin:  '01 \u2014 ORIGIN',
  craft:   '02 \u2014 THE CRAFT',
  work:    '03 \u2014 THE WORK',
  proof:   '04 \u2014 PROOF',
  vision:  '05 \u2014 VISION',
  contact: '06 \u2014 CONTACT',
};

const SECTION_IDS = ["hero", "origin", "craft", "work", "proof", "vision", "contact"];

export default function Nav({t, currentSlug}: Props) {
  const lang = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentLabel, setCurrentLabel] = useState("");
  const [labelVisible, setLabelVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let current = currentLabel;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const label = CHAPTER_LABELS[id];
            if (label !== undefined && label !== current) {
              setLabelVisible(false);
              setTimeout(() => {
                current = label;
                setCurrentLabel(label);
                setLabelVisible(true);
              }, 150);
            }
            break;
          }
        }
      },
      {threshold: 0.4},
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [currentLabel]);

  const navLinks = [
    {href: `/${lang}#origin`, label: t.nav.links.about},
    {href: `/${lang}#craft`, label: t.nav.links.skills},
    {href: `/${lang}#work`, label: t.nav.links.work},
    {href: `/${lang}#contact`, label: t.nav.links.contact},
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "52px",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 300ms, backdrop-filter 300ms, border-color 300ms",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: isMobile ? "0 24px" : "0 var(--page-x)",
          }}
        >
          <a
            href={`/${lang}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            BT
          </a>

          {!isMobile && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                opacity: labelVisible ? 1 : 0,
                transition: "opacity 150ms ease",
              }}
            >
              {currentLabel || "\u00A0"}
            </div>
          )}

          <div style={{display: "flex", alignItems: "center", gap: isMobile ? "8px" : "16px"}}>
            {!isMobile && (
              <>
                <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                  {Object.entries(LANGUAGES).map(([code]) => (
                    <a
                      key={code}
                      href={currentSlug ? `/${code}/case-study/${currentSlug}` : `/${code}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: lang === code ? "var(--accent)" : "var(--text-muted)",
                        transition: "color 200ms",
                      }}
                      onMouseEnter={(e) => {
                        if (lang !== code) e.currentTarget.style.color = "var(--text)";
                      }}
                      onMouseLeave={(e) => {
                        if (lang !== code) e.currentTarget.style.color = "var(--text-muted)";
                      }}
                    >
                      {code.toUpperCase()}
                    </a>
                  ))}
                </div>

                <div style={{width: "1px", height: "14px", background: "var(--border)"}} />

                <a
                  href="/bekzod-turgunov-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    borderRadius: "9999px",
                    padding: "5px 14px",
                    transition: "color 200ms, border-color 200ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {t.nav.links.resume}
                </a>
              </>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: isMobile ? "flex" : "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1px",
                    background: "var(--text)",
                    transition: "transform 300ms",
                    transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1px",
                    background: "var(--text)",
                    transition: "opacity 300ms",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1px",
                    background: "var(--text)",
                    transition: "transform 300ms",
                    transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "52px",
            zIndex: 200,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "36px",
          }}
        >
          {navLinks.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--text)",
                textDecoration: "none",
                animation: `menu-item-in 400ms ${i * 60}ms var(--ease-out) both`,
              }}
            >
              {`0${i + 1} / ${item.label}`}
            </a>
          ))}

          <div style={{display: "flex", gap: "16px", marginTop: "20px"}}>
            {Object.entries(LANGUAGES).map(([code]) => (
              <a
                key={code}
                href={currentSlug ? `/${code}/case-study/${currentSlug}` : `/${code}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: lang === code ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                {code.toUpperCase()}
              </a>
            ))}
          </div>

          <a
            href="/bekzod-turgunov-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--text)",
              border: "1px solid var(--border)",
              borderRadius: "9999px",
              padding: "12px 32px",
              marginTop: "8px",
            }}
          >
            {t.nav.links.resume}
          </a>
        </div>
      )}
    </>
  );
}
