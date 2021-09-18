const path = require('path')

module.exports = () => {
  return {
    webpack (config, { defaultLoaders }) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, '../litecss')],
        use: [defaultLoaders.babel]
      })
      // console.log(require.resolve('react/jsx-runtime'))
      // config.resolveLoader.alias['react/jsx-runtime'] = require.resolve('react/jsx-runtime')
      return config
    }
  }
}
