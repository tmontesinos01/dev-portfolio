import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
};

export default nextConfig;
