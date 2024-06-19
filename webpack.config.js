const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Acedamic resources',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Sign Form',
      filename: 'sign.html',
      template: 'src/sign-template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Airbnb services',
      filename: 'airbnb.html',
      template: 'src/airbnb.html',
    }),
    new HtmlWebpackPlugin({
      title: ' Arch Token Payment',
      filename: 'payment.html',
      template: 'src/payment.html',
    }),
  ],
};
