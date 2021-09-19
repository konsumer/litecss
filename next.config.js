const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack (config) {
    config.resolve.alias.react = path.resolve('./node_modules/react')
    config.resolve.alias['react-dom'] = path.resolve('./node_modules/react-dom')
    return config
  }
})
