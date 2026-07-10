"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Filter } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface PortfolioGridProps {
  projects: Project[];
  onItemClick: (item: Project) => void;
}

export default function PortfolioGrid({ projects, onItemClick }: PortfolioGridProps) {
  const [filter, setFilter] = useState<"all" | "video" | "design">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const categories = [
    { label: "All Works", value: "all" as const },
    { label: "Video Editing", value: "video" as const },
    { label: "Graphic Design", value: "design" as const },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "100%",
      }}
    >
      {/* Category Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <Filter size={16} style={{ color: "var(--accent)", marginRight: "4px" }} />
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            style={{
              padding: "10px 20px",
              borderRadius: "30px",
              border: "1px solid",
              borderColor: filter === cat.value ? "var(--accent)" : "var(--border-color)",
              backgroundColor: filter === cat.value ? "var(--accent)" : "rgba(24, 24, 27, 0.5)",
              color: filter === cat.value ? "#000000" : "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "var(--transition-smooth)",
            }}
            onMouseEnter={(e) => {
              if (filter !== cat.value) {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--text-primary)";
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat.value) {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid container with animation */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
          width: "100%",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="glass-card"
              onClick={() => onItemClick(project)}
              style={{
                cursor: "pointer",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Card Image Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%", // 16:9 Aspect Ratio
                  overflow: "hidden",
                  backgroundColor: "#18181b",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.5s ease",
                  }}
                  className="hover:scale-110"
                />

                {/* Hover Mask */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(9, 9, 11, 0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      color: "#000000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 15px rgba(217, 119, 6, 0.4)",
                    }}
                  >
                    {project.category === "video" ? (
                      <Play size={20} fill="#000000" style={{ marginLeft: "2px" }} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Description */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "10px",
                }}
              >
                {/* Subcategory */}
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.subcategory}
                </div>

                {/* Title */}
                <h4
                  className="title-font"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h4>

                {/* Short description */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    flexGrow: 1,
                  }}
                >
                  {project.description.length > 95
                    ? `${project.description.slice(0, 95)}...`
                    : project.description}
                </p>

                {/* Tools */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "8px",
                  }}
                >
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: "0.7rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "var(--text-secondary)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
