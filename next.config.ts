import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.RESOURCE_HOST || 'localhost',
        pathname: '/**'
      }
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7
  }
};

export default nextConfig;
