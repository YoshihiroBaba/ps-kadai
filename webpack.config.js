const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  mode: "development", //デフォルト
  // devtool: 'source-map',
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name]-[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "> 30%, not dead" }]], //セットになっている、targetsでブラウザーを指定できる。
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              url: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[contenthash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              // limit: 8192
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    // new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: "./[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename:"index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
