import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/samples/pilates",
  turbopack: { root: __dirname },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
