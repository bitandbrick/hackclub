const nextConfig = {
  experimental: { trailingSlash: true },
  pageExtensions: ['js', 'jsx', 'mdx'],
  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  });
  
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/india',
        destination: '/apac',
        permanent: false
      },
      {
        source: '/list-of-hackathons-in-asia-pacific',
        destination: '/apac',
        permanent: false
      },
      {
        source: '/list-of-hackathons-in-india',
        destination: '/apac',
        permanent: false
      }
    ]
  }
}

const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

module.exports = withPlugins([withMDX], nextConfig)
