/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // basePath for GitHub Pages: set NEXT_PUBLIC_BASE_PATH=/aansh-collection in CI
  // Leave empty for Vercel / Netlify / custom domain
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

  images: {
    unoptimized: true,
  },
  compress: true,
}

module.exports = nextConfig
