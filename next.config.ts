import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true';
const repoName = '/bytebase-login';

const nextConfig: NextConfig = {
  // Conditionally set output, basePath, and assetPrefix for static exports
  output: isStaticExport ? "export" : undefined,
  basePath: isStaticExport ? repoName : undefined,
  assetPrefix: isStaticExport ? repoName : undefined,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
