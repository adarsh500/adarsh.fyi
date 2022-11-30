/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.scdn.co', 'og-image.vercel.app'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
