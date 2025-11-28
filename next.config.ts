import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [new URL("https://yuito-it.jp/**")],
  },
};

export default nextConfig;
