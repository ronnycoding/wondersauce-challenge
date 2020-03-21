const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wondersauce.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NEWS MEDIA | Wondersauce',
      template: path.resolve(__dirname, 'src/templates/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
