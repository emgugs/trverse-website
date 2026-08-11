type SecurityHeader = {
  key: string;
  value: string;
};

export function getSecurityHeaders(isDev = process.env.NODE_ENV === "development"): SecurityHeader[] {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    // Next.js / React dev tooling (Fast Refresh, error overlays) requires eval in development.
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://objectstorage.me-dubai-1.oraclecloud.com",
    "media-src 'self' blob: https://objectstorage.me-dubai-1.oraclecloud.com",
    "worker-src 'self' blob:",
    "frame-src 'self' https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  return [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    {
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
    },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
    { key: "Content-Security-Policy", value: csp },
  ];
}

/** Default production headers (kept for backwards compatibility). */
export const SECURITY_HEADERS = getSecurityHeaders(false);
