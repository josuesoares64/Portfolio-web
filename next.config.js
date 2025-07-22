/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora erros de TypeScript
  },
  // Adicione se estiver usando imagens otimizadas
  images: {
    unoptimized: true, // Remove warnings de imagens
  }
}

module.exports = nextConfig