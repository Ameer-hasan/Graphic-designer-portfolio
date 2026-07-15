"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    // Mock form submission
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "48px",
        width: "100%",
      }}
    >
      {/* Contact Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div>
          <h3 className="title-font" style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "12px" }}>
            Let's build something awesome
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out and let's make magic happen!
          </p>
        </div>

        {/* Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Linkdin */}
          <div
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(217, 119, 6, 0.1)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(24, 24, 27, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  transition: "var(--transition-smooth)",
                }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.borderColor = "var(--accent)";
              //   e.currentTarget.style.color = "var(--accent)";
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.borderColor = "var(--border-color)";
              //   e.currentTarget.style.color = "var(--text-primary)";
              // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                <p>Connect On Linkdin</p>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "var(--text-primary)", textTransform: "uppercase", fontWeight: 600 }}>
                  {personalInfo.linkedin}</a>
              </div>

            </div>
          </div>
          <div
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(217, 119, 6, 0.1)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                Email Me
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "var(--transition-smooth)",
                }}
                className="hover:text-[var(--accent)]"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(217, 119, 6, 0.1)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                Call Me
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "var(--transition-smooth)",
                }}
                className="hover:text-[var(--accent)]"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(217, 119, 6, 0.15)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                Based In
              </div>
              <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>
                {personalInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Social Link */}
        {/* <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(24, 24, 27, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              transition: "var(--transition-smooth)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div> */}
      </div>

    </div>
  );
}
