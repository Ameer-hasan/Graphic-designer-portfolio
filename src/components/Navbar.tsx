"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple scrollspy logic
      const sections = ["home", "about", "skills", "works", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Portfolio", href: "#works", id: "works" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "var(--transition-smooth)",
        backgroundColor: isScrolled ? "rgba(9, 9, 11, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="title-font"
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
          }}
        >
          AMEER<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
          }}
          className="md:flex items-center gap-8"
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2rem",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: activeSection === link.id ? "var(--accent)" : "var(--text-secondary)",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    transition: "var(--transition-smooth)",
                  }}
                  className="hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="glow-border"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
          >
            Let's Talk
            <ArrowUpRight size={14} style={{ color: "var(--accent)" }} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "block",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(9, 9, 11, 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-color)",
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="md:hidden"
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              gap: "16px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: activeSection === link.id ? "var(--accent)" : "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "var(--accent)",
              color: "var(--text-primary)",
              padding: "12px 0",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
