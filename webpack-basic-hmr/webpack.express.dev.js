const path = require("path");
const webpack = require("webpack");

const config = require("./webpack.config.dev");

module.exports = {
  ...config,
  entry: ["webpack-hot-middleware/client", "./src/index.js"],
  output: {
    ...config.output,
    clean: false
  },
  plugins: [...config.plugins, new webpack.HotModuleReplacementPlugin()]
};
