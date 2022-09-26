/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:3000/api/:path*`,
      },
      {
        source: '/users/sign_in',
        destination: `http://localhost:3000/users/sign_in`,
      },
      {
        source: '/api-docs/:path*',
        destination: `http://localhost:3000/api-docs/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
