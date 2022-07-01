const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // bable rule
      {
        test: /\.js$/, // all files ending with .js in the same dir
        exclude: /node_modules/, // all files ending with .js in the same dir
        include: [path.resolve(__dirname, 'src')],
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