import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  transpilePackages: ["../../app"],
};

export default nextConfig;
