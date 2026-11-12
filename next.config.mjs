/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Compress responses with gzip/brotli
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    // Serve modern image formats — avif first, then webp fallback
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for at least 60 seconds at the CDN level
    minimumCacheTTL: 60,
    // Responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },

  experimental: {
    // Tree-shake lucide-react to only the icons actually used
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'soulfuli.org',
          },
        ],
        destination: 'https://www.soulfuli.org/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/logo.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
