/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com"
      },
      {
        protocol: "https",
        hostname: "www.pngall.com"
      }
    ],
  },
}

module.exports = nextConfig
