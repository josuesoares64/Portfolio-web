/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mantenha true para desenvolvimento
  swcMinify: true, // Ative para produção
  transpilePackages: ['framer-motion'],
  output: 'standalone',
  generateEtags: true, // Mantenha para cache controlado
  poweredByHeader: false, // Segurança: remova o cabeçalho X-Powered-By
  experimental: {
    forceSwcTransforms: true,
    // Adicione apenas experimentais necessários
  },
  // Otimizações para imagens/animações
  images: {
    disableStaticImages: false,
  },
}

module.exports = nextConfig