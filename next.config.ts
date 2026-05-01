import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/project-website',
  assetPrefix: '/project-website/',
  trailingSlash: true,
};

export default nextConfig;
