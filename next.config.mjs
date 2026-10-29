/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress responses with gzip/brotli
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Serve modern image formats — avif first, then webp fallback
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for at least 60 seconds at the CDN level
    minimumCacheTTL: 60,
    // Responsive breakpoints for srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    // Tree-shake lucide-react to only the icons actually used
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
