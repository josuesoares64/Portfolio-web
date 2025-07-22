/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // Adicione apenas se estiver usando Framer Motion
  transpilePackages: ['framer-motion']
};

module.exports = nextConfig;