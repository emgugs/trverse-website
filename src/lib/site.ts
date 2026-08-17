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
export const ORGANIZATION_LEGAL_NAME = "TRVERSE";
export const ORGANIZATION_SLOGAN = "The Science of Mobility";
export const ORGANIZATION_LOGO_PATH = "/assets/Trverse-Logo.png";
export const ORGANIZATION_LOGO_WIDTH = 224;
export const ORGANIZATION_LOGO_HEIGHT = 224;
export const ORGANIZATION_EMAIL = "office@lmkr.com";
export const ORGANIZATION_PHONE = "+1.281.495.5657";
export const ORGANIZATION_SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/trverse-official",
  "https://www.facebook.com/TrverseOfficial",
  "https://www.instagram.com/TrverseOfficial/",
] as const;
export const SITE_TAGLINE =
  "Mass transit AFC, ITS, fleet management, and AI monitoring for transport networks worldwide.";
