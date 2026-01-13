import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  reactCompiler: true,
};

module.exports = nextConfig;
