import { withContentlayer } from 'next-contentlayer';

export default withContentlayer({
  images: {
    domains: ['i.scdn.co', 'og-image.vercel.app'],
  },
  plugins: [],
  reactStrictMode: true,
  swcMinify: true,
});
