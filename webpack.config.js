const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
};
