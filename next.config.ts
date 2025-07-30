import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Desativa otimização de imagens
  },
};

export default nextConfig;
