const OCI_BASE =
  "https://objectstorage.me-dubai-1.oraclecloud.com/n/axkcoovttfwl/b/bucket-dockploy/o/trverse";

/** Same-origin proxy path — avoids OCI CORS (bucket allows trverse.com only). */
const STREAM_BASE = "/video-stream";

export const homeHeroVideo = {
  src: `${STREAM_BASE}/trverse-web-banner%20landing%20page/trverse-web-banner%20landing%20page.m3u8`,
  poster: `${OCI_BASE}/thumbs/trverse-web-banner%20landing%20page.webp`,
} as const;

export const solutionsHeroVideo = {
  src: `${STREAM_BASE}/trverse-solution-page-web-banner/trverse-solution-page-web-banner.m3u8`,
  poster: `${OCI_BASE}/thumbs/trverse-solution-page-web-banner.webp`,
} as const;
