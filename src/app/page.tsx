"use client";

import React, { useState } from "react";
import { Download, Mail, Phone, MapPin, CheckCircle, Flame, Star, Award, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, projects, skillGroups, services, testimonials, Project } from "@/data/portfolioData";

// Import custom components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import PortfolioGrid from "@/components/PortfolioGrid";
import Lightbox from "@/components/Lightbox";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter featured projects for the top carousel
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div style={{ padding: "0 24px" }}>
        <Hero />
      </div>

      {/* About Section */}
      <section id="about">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            About <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* About Image / Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: "36px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              border: "1px solid var(--border-color)",
            }}
          >
            <div
              className="glow-border"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--accent)",
                boxShadow: "0 0 25px rgba(217, 119, 6, 0.25)",
              }}
            >
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <h3 className="title-font" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>
                {personalInfo.name}
              </h3>
              <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginTop: "4px" }}>
                {personalInfo.title}
              </p>
            </div>

            {/* Quick Details List */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                padding: "16px 0",
                borderTop: "1px solid var(--border-color)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={16} style={{ color: "var(--accent)" }} />
                <span>{personalInfo.email}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={16} style={{ color: "var(--accent)" }} />
                <span>{personalInfo.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MapPin size={16} style={{ color: "var(--accent)" }} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              className="glow-border"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                width: "100%",
                justifyContent: "center",
                transition: "var(--transition-smooth)",
              }}
              onClick={(e) => {
                // If it's #, prevent default and notify it's a placeholder
                if (personalInfo.resumeUrl === "#") {
                  e.preventDefault();
                  alert("Resume PDF download is currently a placeholder. Replace resumeUrl in portfolioData.ts with the actual PDF link.");
                }
              }}
            >
              <Download size={16} style={{ color: "var(--accent)" }} />
              Download Resume
            </a>
          </motion.div>

          {/* About Bio / Details Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3 className="title-font" style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff" }}>
              Visual Storyteller & Creative Designer
            </h3>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              {personalInfo.summary}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              <h4 style={{ fontWeight: 700, fontSize: "1.1rem" }}>My Creative Core:</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem" }}>Cinematic Quality</strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Paced storytelling and color-grades.</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem" }}>Modern Layouts</strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Clean templates, typography, and grids.</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem" }}>Motion Integration</strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Dynamic transitions & graphics.</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem" }}>Fast Turnaround</strong>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Structured workflow & communication.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            My <span style={{ color: "var(--accent)" }}>Services</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            width: "100%",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: "32px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "rgba(217, 119, 6, 0.15)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {service.icon === "Video" && <Flame size={24} />}
                {service.icon === "Activity" && <Star size={24} />}
                {service.icon === "Layout" && <Layers size={24} />}
                {service.icon === "Zap" && <Award size={24} />}
              </div>
              
              <h3 className="title-font" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
                {service.title}
              </h3>
              
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Technical <span style={{ color: "var(--accent)" }}>Skills</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: "32px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h3
                className="title-font"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "12px",
                }}
              >
                {group.category}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {group.skills.map((skill, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent)",
                      }}
                    />
                    <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Works Carousel Section */}
      <section id="featured-works" style={{ overflow: "visible" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Featured <span style={{ color: "var(--accent)" }}>Projects</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Custom Slide Carousel */}
        <Carousel items={featuredProjects} onItemClick={setSelectedProject} />
      </section>

      {/* Portfolio Grid Section */}
      <section id="works" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            All <span style={{ color: "var(--accent)" }}>Works</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Filterable Works Grid */}
        <PortfolioGrid projects={projects} onItemClick={setSelectedProject} />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        style={{
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Client <span style={{ color: "var(--accent)" }}>Feedback</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: "36px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                "{test.comment}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={test.avatar}
                  alt={test.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    {test.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500 }}>
                    {test.role}, {test.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            My <span style={{ color: "var(--accent)" }}>Journey</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Timeline */}
        <ExperienceTimeline />
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ borderTop: "1px solid var(--border-color)", paddingBottom: "100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          <h2
            className="title-font"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Contact <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "var(--accent)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Contact info and Form */}
        <ContactForm />
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-color)",
          backgroundColor: "rgba(9, 9, 11, 0.95)",
          padding: "40px 24px",
          color: "var(--text-secondary)",
          fontSize: "0.85rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
          className="md:flex-row"
        >
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="#home"
              style={{ color: "inherit", textDecoration: "none", transition: "var(--transition-smooth)" }}
              className="hover:text-[var(--accent)]"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal overlay */}
      <Lightbox item={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
