"use client";

import React, { useEffect } from "react";
import { X, Calendar, Wrench, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";

interface LightboxProps {
  item: Project | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  // Prevent body scrolling when open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(9, 9, 11, 0.95)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "rgba(24, 24, 27, 0.8)",
            border: "1px solid var(--border-color)",
            color: "#ffffff",
            cursor: "pointer",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 110,
            transition: "var(--transition-smooth)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          <X size={24} />
        </button>

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            maxWidth: "1000px",
            background: "var(--bg-secondary)",
            borderRadius: "16px",
            border: "1px solid var(--border-color)",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
        >
          {/* Media Player / Viewer */}
          <div
            style={{
              position: "relative",
              width: "100%",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              aspectRatio: "16/9",
            }}
          >
            {item.category === "video" ? (
              <iframe
                src={`${item.mediaUrl}?autoplay=1&mute=0&rel=0`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            ) : (
              <img
                src={item.mediaUrl}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          {/* Details Section */}
          <div
            style={{
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Header info */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {item.subcategory}
                </span>
                <h3
                  className="title-font"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Tools list */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.75rem",
                      background: "rgba(217, 119, 6, 0.1)",
                      border: "1px solid rgba(217, 119, 6, 0.2)",
                      color: "var(--accent)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </p>

            {/* Sub Info Row */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-color)",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle size={14} style={{ color: "var(--accent)" }} /> Completed Successfully
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Wrench size={14} /> Custom Delivery
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
