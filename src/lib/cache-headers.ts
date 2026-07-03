type CacheHeader = {
  key: string;
  value: string;
};

export const STATIC_ASSET_CACHE_HEADERS: CacheHeader[] = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];
