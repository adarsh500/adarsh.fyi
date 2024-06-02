const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co", "og-image.vercel.app"],
  },
  optimizeFonts: true,
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
