import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Graphic-designer-portfolio",
  assetPrefix: "/Graphic-designer-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
