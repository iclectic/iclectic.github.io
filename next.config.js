/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_OUTPUT === 'export'

const nextConfig = {
  reactStrictMode: true,
  ...(isExport
    ? {
        output: 'export',
        trailingSlash: true,
      }
    : {}),
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: isExport,
  },
  ...(!isExport
    ? {
        async headers() {
          return [
            {
              source: '/images/:path*',
              headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
              ],
            },
          ]
        },
      }
    : {}),
}

module.exports = nextConfig
