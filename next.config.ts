import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true';
const basePath = isStaticExport ? "/bytebase-login" : undefined;

const nextConfig: NextConfig = {
  // Conditionally set output, basePath, and assetPrefix for static exports
  output: isStaticExport ? "export" : undefined,
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || '',
  },

  images: {
    unoptimized: isStaticExport ? true : false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
