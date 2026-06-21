import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
