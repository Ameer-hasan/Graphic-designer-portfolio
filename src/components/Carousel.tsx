"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";

interface CarouselProps {
  items: Project[];
  onItemClick: (item: Project) => void;
}

export default function Carousel({ items, onItemClick }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  if (items.length === 0) return null;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Slide transition configurations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const currentItem = items[currentIndex];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
        height: "480px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="glow-border"
        style={{
          position: "absolute",
          left: "-20px",
          zIndex: 10,
          background: "rgba(24, 24, 27, 0.8)",
          border: "1px solid var(--border-color)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-primary)",
          cursor: "pointer",
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
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="glow-border"
        style={{
          position: "absolute",
          right: "-20px",
          zIndex: 10,
          background: "rgba(24, 24, 27, 0.8)",
          border: "1px solid var(--border-color)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-primary)",
          cursor: "pointer",
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
        <ChevronRight size={24} />
      </button>

      {/* Main Slide Card */}
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "16px",
          position: "relative",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            onClick={() => onItemClick(currentItem)}
          >
            {/* Background Thumbnail Image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${currentItem.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease",
              }}
              className="hover:scale-105"
            />

            {/* Dark overlay with hover state */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(to top, rgba(9, 9, 11, 0.95) 0%, rgba(9, 9, 11, 0.4) 50%, rgba(9, 9, 11, 0.1) 100%)",
              }}
            />

            {/* Play/View Button overlay in the center */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 119, 6, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(217, 119, 6, 0.5)",
                color: "#000000",
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)";
                e.currentTarget.style.backgroundColor = "var(--accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
                e.currentTarget.style.backgroundColor = "rgba(217, 119, 6, 0.9)";
              }}
            >
              {currentItem.category === "video" ? (
                <Play size={32} fill="#000000" style={{ marginLeft: "4px" }} />
              ) : (
                <Eye size={32} />
              )}
            </div>

            {/* Info Section at the bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                pointerEvents: "none",
              }}
            >
              {/* Category tag */}
              <div
                style={{
                  alignSelf: "flex-start",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  background: "rgba(217, 119, 6, 0.15)",
                  border: "1px solid rgba(217, 119, 6, 0.3)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                {currentItem.subcategory}
              </div>

              {/* Title */}
              <h3
                className="title-font"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                {currentItem.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  maxWidth: "650px",
                  lineHeight: 1.5,
                }}
              >
                {currentItem.description}
              </p>

              {/* Tools tags */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "8px",
                }}
              >
                {currentItem.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.75rem",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "var(--text-secondary)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          display: "flex",
          gap: "8px",
        }}
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            style={{
              width: index === currentIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: index === currentIndex ? "var(--accent)" : "rgba(255, 255, 255, 0.2)",
              border: "none",
              cursor: "pointer",
              transition: "var(--transition-smooth)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
