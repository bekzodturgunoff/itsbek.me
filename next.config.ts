import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
