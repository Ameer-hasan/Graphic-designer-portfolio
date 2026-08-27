import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Graphic-designer-portfolio" : undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.19"]
};

export default nextConfig;
