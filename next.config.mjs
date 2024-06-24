/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://robjsnow.github.io/blog/:path*',
      },
    ];
  },
};

export default nextConfig;
