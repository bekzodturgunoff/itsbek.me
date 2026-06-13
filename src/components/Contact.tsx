"use client";

import {useRef, useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "@/lib/gsap";
import type {I18n} from "@/i18n/types";

interface Props {
  t: I18n;
}

export default function Contact({t}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        {y: "110%"},
        {
          y: "0%",
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
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
        borderTop: "1px solid var(--border)",
        padding: "var(--space-2xl) 48px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{maxWidth: "640px", width: "100%"}}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-label)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "var(--space-lg)",
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
              fontSize: "var(--text-chapter)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              margin: "0 0 var(--space-md) 0",
            }}
          >
            Let&apos;s grab a coffee.<br />
            <span style={{color: "var(--accent)"}}>Or a Zoom call.</span>
          </h2>
        </div>

        <p
          style={{
            fontSize: "var(--text-large)",
            fontWeight: 300,
            color: "var(--text-secondary)",
            margin: "0 0 var(--space-lg) 0",
            lineHeight: 1.6,
          }}
        >
          {t.contact.intro}
        </p>

        <div style={{borderTop: "1px solid var(--border)", marginBottom: "var(--space-lg)"}}>
          {[
            {label: t.contact.ctas.email, value: "bekzodturgunoff@gmail.com", href: "mailto:bekzodturgunoff@gmail.com"},
            {label: t.contact.ctas.telegram, value: "@bekzodturgunoff", href: "https://t.me/bekzodturgunoff"},
            {label: t.contact.ctas.call, value: "+998 50 188 66 69", href: "tel:+998501886669"},
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-row"
              style={{textDecoration: "none"}}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  transition: "color 200ms var(--ease-out-expo)",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 2vw, 24px)",
                  fontWeight: 500,
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-xs)",
                  transition: "color 200ms var(--ease-out-expo)",
                }}
              >
                {item.value}

              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{display: "grid", gap: "var(--space-lg)"}}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-md)",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
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
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
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
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "12px",
              }}
            >
                {t.contact.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
              className="form-input"
              style={{resize: "none"}}
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
                height: "48px",
                padding: "0 40px",
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-label)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer",
                transition: "background 200ms var(--ease-out-expo), border-color 200ms var(--ease-out-expo), color 200ms var(--ease-out-expo)",
                opacity: status === "sending" || status === "sent" ? 0.5 : 1,
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "#000";
                }
              }}
              onMouseLeave={(e) => {
                if (status === "idle") {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text)";
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
