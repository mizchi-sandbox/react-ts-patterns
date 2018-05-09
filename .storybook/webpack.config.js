module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'development:client'
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            // forceEnv: 'development:client'
            useBabel: true,
            babelOptions: {
              babelrc: false,
              presets: ['env', 'react', 'power-assert'],
              plugins: ['transform-object-rest-spread']
            },
            babelCore: 'babel-core'
          }
        }
      }
    ]
  }
}
