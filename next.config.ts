import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://yuito-it.jp/**")],
  },
};

export default nextConfig;
