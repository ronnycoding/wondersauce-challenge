const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'wondersauce.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NEWS MEDIA | Wondersauce',
      template: path.resolve(__dirname, 'src/templates/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}
