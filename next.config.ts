import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization temporarily to troubleshoot static file serving
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Simple configuration for better compatibility
  trailingSlash: false,
  // Compiler options for SEO optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
