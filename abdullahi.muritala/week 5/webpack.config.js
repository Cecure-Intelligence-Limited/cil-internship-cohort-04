const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new MiniCssExtractPlugin()];

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist'),
    },
  },
  plugins: plugins,
};
