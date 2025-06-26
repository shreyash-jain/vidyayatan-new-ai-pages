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
};

export default nextConfig;
