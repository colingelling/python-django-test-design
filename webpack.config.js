const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './static/js/index.js',  // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'static'),  // Output directory for bundled files
    filename: './js/bundle.js',  // Output JavaScript filename
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/, // Add this rule for handling CSS files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',  // Output main CSS filename
    }),
  ],
};
