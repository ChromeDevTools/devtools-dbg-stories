const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = require("./webpack.express.dev.js");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.listen(8080, () => {
  console.log("Example app listening on port 8080!\n");
});
