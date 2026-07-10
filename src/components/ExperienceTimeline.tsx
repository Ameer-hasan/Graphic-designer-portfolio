"use client";

import React from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { experiences, educationList } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "48px",
        width: "100%",
        marginTop: "24px",
      }}
    >
      {/* Experience Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(217, 119, 6, 0.15)",
              color: "var(--accent)",
            }}
          >
            <Briefcase size={20} />
          </div>
          <h3 className="title-font" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
            Work Experience
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Meta details */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {exp.role}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul
                  style={{
                    paddingLeft: "16px",
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education & Certs Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <div
            style={{
              padding: "10px",
              borderRadius: "8px",
              background: "rgba(217, 119, 6, 0.15)",
              color: "var(--accent)",
            }}
          >
            <GraduationCap size={20} />
          </div>
          <h3 className="title-font" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
            Education & Certifications
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="timeline-item"
            >
              <div className="timeline-dot" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      {edu.institution}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro Tip Callout Card */}
        <motion.div
          variants={cardVariants}
          className="glass-card"
          style={{
            padding: "24px",
            marginTop: "16px",
            borderLeft: "4px solid var(--accent)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4 style={{ fontWeight: 700, fontSize: "1rem" }}>Always Learning</h4>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
            Keeps updated with new software releases, motion trends, and storytelling structures. Actively researching design aesthetics on Pinterest, Behance, and YouTube.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
