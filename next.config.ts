import type { NextConfig } from "next";
import { STATIC_ASSET_CACHE_HEADERS } from "./src/lib/cache-headers";
import { getSecurityHeaders } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    return [
      {
        source: "/:path*",
        headers: getSecurityHeaders(isDev),
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
        source: "/video/:path*",
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
  async rewrites() {
    return [
      {
        source: "/video-stream/:path*",
        destination:
          "https://objectstorage.me-dubai-1.oraclecloud.com/n/axkcoovttfwl/b/bucket-dockploy/o/trverse/:path*",
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
