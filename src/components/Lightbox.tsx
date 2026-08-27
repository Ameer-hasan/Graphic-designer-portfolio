"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, Calendar, Wrench, CheckCircle, Maximize, Minimize, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";

interface LightboxProps {
  item: Project | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const [videoError, setVideoError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize listener to check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).msFullscreenElement
        )
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  // Prevent body scrolling when open and reset error & loading states
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      setVideoError(false);
      setIframeLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  const handleClose = () => {
    if (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
    onClose();
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    const elem = containerRef.current;

    if (
      !document.fullscreenElement &&
      !(document as any).webkitFullscreenElement &&
      !(document as any).mozFullScreenElement &&
      !(document as any).msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).mozRequestFullScreen) {
        (elem as any).mozRequestFullScreen();
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

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
          backgroundColor: "rgba(9, 9, 11, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "0px" : "20px",
        }}
        onClick={handleClose}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: isMobile ? "16px" : "24px",
            right: isMobile ? "16px" : "24px",
            background: "rgba(24, 24, 27, 0.8)",
            border: "1px solid var(--border-color)",
            color: "#ffffff",
            cursor: "pointer",
            width: isMobile ? "40px" : "48px",
            height: isMobile ? "40px" : "48px",
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
          <X size={isMobile ? 20 : 24} />
        </button>

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            height: isMobile ? "100%" : "auto",
            maxHeight: isMobile ? "100vh" : "90vh",
            maxWidth: isMobile ? "100%" : "1000px",
            background: "var(--bg-secondary)",
            borderRadius: isMobile ? "0px" : "16px",
            border: isMobile ? "none" : "1px solid var(--border-color)",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
        >
          {/* Media Player / Viewer */}
          <div
            ref={containerRef}
            style={{
              position: "relative",
              width: "100%",
              height: isFullscreen
                ? "100vh"
                : isMobile
                ? "55vh"
                : "auto",
              aspectRatio: isFullscreen || isMobile ? undefined : "16/9",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.category === "video" ? (
              item.mediaUrl.includes("drive.google.com") ? (
                <>
                  {iframeLoading && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 5,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(9, 9, 11, 0.8)",
                          backdropFilter: "blur(6px)",
                          WebkitBackdropFilter: "blur(6px)",
                        }}
                      />
                      <div
                        style={{
                          position: "relative",
                          zIndex: 6,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                          style={{
                            width: "48px",
                            height: "48px",
                            border: "3px solid rgba(217, 119, 6, 0.2)",
                            borderTop: "3px solid var(--accent)",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ fontSize: "0.9rem", color: "#e4e4e7", fontWeight: 500, letterSpacing: "0.02em" }}>
                          Loading high-quality video...
                        </span>
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={item.mediaUrl}
                      title={item.title}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      onLoad={() => setIframeLoading(false)}
                      style={{
                        position: "absolute",
                        top: isMobile ? "-50px" : "0px",
                        left: 0,
                        width: "100%",
                        height: isMobile ? "calc(100% + 100px)" : "100%",
                        border: "none",
                        opacity: iframeLoading ? 0 : 1,
                        transition: "opacity 0.4s ease",
                      }}
                    />
                  </div>
                </>
              ) : videoError ? (
                <>
                  {iframeLoading && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 5,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(9, 9, 11, 0.8)",
                          backdropFilter: "blur(6px)",
                          WebkitBackdropFilter: "blur(6px)",
                        }}
                      />
                      <div
                        style={{
                          position: "relative",
                          zIndex: 6,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                          style={{
                            width: "48px",
                            height: "48px",
                            border: "3px solid rgba(217, 119, 6, 0.2)",
                            borderTop: "3px solid var(--accent)",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ fontSize: "0.9rem", color: "#e4e4e7", fontWeight: 500, letterSpacing: "0.02em" }}>
                          Loading video...
                        </span>
                      </div>
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`${item.fallbackUrl || item.mediaUrl}?autoplay=1&mute=0&rel=0`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={() => setIframeLoading(false)}
                      style={{
                        position: "absolute",
                        top: isMobile ? "-50px" : "0px",
                        left: 0,
                        width: "100%",
                        height: isMobile ? "calc(100% + 100px)" : "100%",
                        border: "none",
                        opacity: iframeLoading ? 0 : 1,
                        transition: "opacity 0.4s ease",
                      }}
                    />
                  </div>
                </>
              ) : (
                <video
                  src={item.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={!isMobile}
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              )
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

            {/* Video Control Buttons Overlay (Fullscreen Toggle) */}
            {item.category === "video" && !isMobile && (
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  display: "flex",
                  gap: "10px",
                  zIndex: 8,
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFullscreen();
                  }}
                  style={{
                    background: "rgba(24, 24, 27, 0.75)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "var(--transition-smooth)",
                  }}
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div
            style={{
              padding: isMobile ? "20px 24px" : "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            {/* Header info */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div style={{ flex: "1 1 auto", minWidth: "200px" }}>
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

              {/* Tools & Open in App action bar */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                {item.category === "video" && (
                  <a
                    href={item.mediaUrl.replace("/preview", "/view")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--accent)",
                      color: "#000000",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "var(--transition-smooth)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--accent)";
                    }}
                  >
                    <ExternalLink size={14} /> Open in App
                  </a>
                )}
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "0.75rem",
                      background: "rgba(217, 119, 6, 0.1)",
                      border: "1px solid rgba(217, 119, 6, 0.2)",
                      color: "var(--accent)",
                      padding: "5px 10px",
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
