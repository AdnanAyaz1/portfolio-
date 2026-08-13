import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* hero.tsx renders poster images with quality 85 */
    qualities: [75, 85],
  },
};

export default nextConfig;
