/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  experimental: {
    forceSwcTransforms: true
  },
  eslint: {
    ignoreDuringBuilds: true, // IGNORA ERROS DE LINT NO BUILD (opcional)
  }
}

module.exports = nextConfig;