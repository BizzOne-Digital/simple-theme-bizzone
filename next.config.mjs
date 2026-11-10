/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Portfolio screenshots rarely change; keep optimized copies cached for 31 days.
    minimumCacheTTL: 2678400,
  },

  // NOTE on the canonical host: https://bizzonedigital.com -> https://www.bizzonedigital.com
  // is already handled at the Vercel domain level (checked: one permanent redirect that
  // preserves the path). An app-level host redirect is deliberately NOT added here, to
  // avoid a conflicting rule or redirect loop if the Vercel domain settings change.
  // Raw portfolio screenshots: let browsers and the CDN keep them for 30 days.
  async headers() {
    return [
      {
        source: "/portfolio/:file*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      // Reel videos and posters: same 30-day cache so repeat visits play from the browser.
      {
        source: "/reels/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },

  async redirects() {
    return [
      // App Development has a dedicated page; the old duplicate service URL points to it.
      { source: "/service/app-development", destination: "/app-development", statusCode: 301 },
    ];
  },
};

export default nextConfig;
