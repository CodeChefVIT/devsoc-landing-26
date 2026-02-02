import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: 'export',
  async headers() {
    return [
      {
        source: '/rive/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
