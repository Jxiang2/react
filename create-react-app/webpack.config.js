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
          // transpile src code into browser compatible js code following presets
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
      template: './src/public/index.html' // inject bundle.js into index.html in src dir
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true, // Hot module replacement
    open: true, // Open browser
    compress: true, // Enable gzip compression for everything served
    port: 3000,
  },
}