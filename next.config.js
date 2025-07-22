/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  eslint: {
    ignoreDuringBuilds: true
  }
}
module.exports = nextConfig;