/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  swcMinify: true,
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
