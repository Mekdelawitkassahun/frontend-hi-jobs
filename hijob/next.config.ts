/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_BASE_PATH === '/hijob';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath is set only during GitHub Pages build via env var
  basePath: isProd ? '/hijob' : '',
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
