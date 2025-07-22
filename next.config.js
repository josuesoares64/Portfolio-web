/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  images: {
    disableStaticImages: false,
  },
  experimental: {
    forceSwcTransforms: true,
  }
}

module.exports = nextConfig