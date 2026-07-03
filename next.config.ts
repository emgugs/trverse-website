import type { NextConfig } from "next";
import { STATIC_ASSET_CACHE_HEADERS } from "./src/lib/cache-headers";
import { SECURITY_HEADERS } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/_next/static/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/assets/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/products/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/solutions/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/insights/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/partners-logo/:path*",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/:path*.webp",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/:path*.avif",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/:path*.svg",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
      {
        source: "/:path*.woff2",
        headers: STATIC_ASSET_CACHE_HEADERS,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/solutions/AI-based-bus-scheduling",
        destination: "/solutions/advanced-scheduling-system",
        permanent: true,
      },
      {
        source: "/solutions/Control-room-management",
        destination: "/solutions/fleet-management",
        permanent: true,
      },
      {
        source: "/solutions/Performance-monitoring",
        destination: "/solutions/ai-monitoring-and-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
