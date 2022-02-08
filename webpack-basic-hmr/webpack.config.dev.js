const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require("json5");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devServer: {
    static: "./dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.json5?$/i,
        type: "json",
        parser: {
          parse: json5.parse
        }
      }
    ]
  }
};
