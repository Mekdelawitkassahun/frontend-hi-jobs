/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hijob',  // ← Set this directly
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
