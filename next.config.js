/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
