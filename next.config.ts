import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Video-Editor-Portfolio" : undefined,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.31"]
};

export default nextConfig;
