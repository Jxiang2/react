const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // bable rule
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react',]
          },
        },
      },
    ],
  },

  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html' // inject bundle.js into index.html in src dir
    }),
  ],
}