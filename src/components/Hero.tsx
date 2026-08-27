"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Video, Layout } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolioData";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "60px",
        position: "relative",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 10,
        }}
      >
        {/* Subtitle Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(217, 119, 6, 0.1)",
            border: "1px solid rgba(217, 119, 6, 0.2)",
            borderRadius: "30px",
            padding: "6px 16px",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.05em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              animation: "pulse 2s infinite",
            }}
          />
          PORTFOLIO & CREATIVE WORKS
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className="title-font"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "var(--text-primary)",
          }}
        >
          I'm <span className="text-gradient-gold">{personalInfo.name}</span>
          <br />
          <span style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: 700, color: "var(--text-secondary)" }}>
            {personalInfo.title}
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: "680px",
            lineHeight: 1.6,
          }}
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "12px",
          }}
        >
          <a
            href="#works"
            className="glow-border"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "var(--accent)",
              color: "#000000",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "var(--transition-smooth)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
            }}
          >
            View My Works
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="glow-border"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "var(--transition-smooth)",
            }}
          >
            Get In Touch
            <Mail size={18} style={{ color: "var(--accent)" }} />
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border-color)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "32px",
            maxWidth: "700px",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div
                className="title-font text-glow"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                {stat.value.replace("+", "")}
                <span style={{ color: "var(--accent)", fontSize: "2rem" }}>+</span>
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating service indicators */}
      <div
        className="hidden lg:flex"
        style={{
          position: "absolute",
          right: "24px",
          top: "40%",
          flexDirection: "column",
          gap: "24px",
          zIndex: 20,
        }}
      >
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 20px",
            maxWidth: "240px",
          }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(217, 119, 6, 0.15)",
              color: "var(--accent)",
            }}
          >
            <Video size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Video Production</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Cinematic pacing & color</div>
          </div>
        </div>

        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 20px",
            maxWidth: "240px",
          }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(217, 119, 6, 0.15)",
              color: "var(--accent)",
            }}
          >
            <Layout size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Graphic Design</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Branding & visual layouts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
