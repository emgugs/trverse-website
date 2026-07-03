const DEFAULT_SITE_URL = "https://trverse.com";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

function resolveSiteUrl(): string {
  const raw = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return normalizeSiteUrl(raw);
}

export const SITE_URL = resolveSiteUrl();
export const SITE_HOST = new URL(SITE_URL).hostname;
export const SITE_NAME = "TRVERSE";
export const ORGANIZATION_NAME = "TRVERSE";
export const ORGANIZATION_LOGO_PATH = "/favicon.webp";
export const ORGANIZATION_SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/trverse-official",
] as const;
export const SITE_TAGLINE =
  "Mass transit AFC, ITS, fleet management, and AI monitoring for transport networks worldwide.";
