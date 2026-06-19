"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

const LINKS = [
  {labelKey: "email" as const, value: "bekzodturgunoff@gmail.com", href: "mailto:bekzodturgunoff@gmail.com"},
  {labelKey: "telegram" as const, value: "@bekzodturgunoff", href: "https://t.me/bekzodturgunoff"},
  {labelKey: "phone" as const, value: "+998 50 188 66 69", href: "tel:+998501886669"},
];

export default function Contact({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        {y: "110%"},
        {y: "0%", duration: 0.7, ease: "expo.out", scrollTrigger: {trigger: section, start: "top 80%", toggleActions: "play none none reverse"}},
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--white-07)",
        padding: "var(--gap-2xl) var(--page-x) var(--gap-xl)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{maxWidth: "720px", width: "100%"}}>
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
          06 &mdash; CONTACT
        </span>

        <div className="clip-reveal">
          <h2
            ref={headlineRef}
            className="clip-child"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--size-h2)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "var(--track-head)",
              color: "var(--white)",
              margin: "0 0 var(--gap-sm) 0",
            }}
          >
            {t.contact.heading}
          </h2>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--size-lg)",
            fontWeight: 300,
            color: "var(--white-60)",
            margin: "0 0 var(--gap-lg) 0",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          {t.contact.intro}
        </p>

        <div style={{borderTop: "1px solid var(--white-07)", marginBottom: "var(--gap-xl)"}}>
          {LINKS.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 0",
                borderBottom: "1px solid var(--white-07)",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-60)")}
              >
                {t.contact.ctas[item.labelKey]}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-md)",
                  color: "var(--white)",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--white)";
                }}
              >
                {item.value}
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{display: "grid", gap: "var(--gap-lg)"}}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "var(--gap-md)",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
                  marginBottom: "10px",
                }}
              >
                {t.contact.form.name}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.namePlaceholder}
                className="form-input"
                required
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--size-label)",
                  letterSpacing: "var(--track-label)",
                  textTransform: "uppercase",
                  color: "var(--white-60)",
                  marginBottom: "10px",
                }}
              >
                {t.contact.form.email}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.emailPlaceholder}
                className="form-input"
                required
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-label)",
                letterSpacing: "var(--track-label)",
                textTransform: "uppercase",
                color: "var(--white-60)",
                marginBottom: "10px",
              }}
            >
              {t.contact.form.message}
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder={t.contact.form.messagePlaceholder}
              className="form-input"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "44px",
                padding: "0 32px",
                background: "transparent",
                border: "1px solid var(--white-15)",
                borderRadius: 0,
                color: "var(--white)",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-label)",
                letterSpacing: "var(--track-label)",
                textTransform: "uppercase",
                cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer",
                transition: "background 200ms, border-color 200ms, color 200ms",
                opacity: status === "sending" || status === "sent" ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = "var(--white)";
                  e.currentTarget.style.borderColor = "var(--white)";
                  e.currentTarget.style.color = "var(--black)";
                }
              }}
              onMouseLeave={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--white-15)";
                  e.currentTarget.style.color = "var(--white)";
                }
              }}
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent \u2713"}
              {status === "error" && "Error \u2014 try again"}
              {status === "idle" && t.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
