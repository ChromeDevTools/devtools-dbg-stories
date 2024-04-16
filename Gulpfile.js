const { dest, parallel, series, src, watch } = require("gulp");
const connect = require("gulp-connect");
const del = require("delete");
const less = require("gulp-less");
const parseUrl = require("parseurl");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

const DISTDIR = "./dist";
const SRCDIR = "./src";

const buildAssets = () =>
  src(`${SRCDIR}/*.{css,dart,html,ico,js,map,mjs}`)
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());

const buildLESS = () => {
  return src(`${SRCDIR}/*.less`)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());
};

const buildSASS = () => {
  return src(`${SRCDIR}/*.{sass,scss}`)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());
};

const buildStyles = parallel(buildLESS, buildSASS);

const buildTypeScript = () => {
  return src(`${SRCDIR}/*.ts`)
    .pipe(sourcemaps.init())
    .pipe(ts({}))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());
};

const build = parallel(buildAssets, buildStyles, buildTypeScript);

const clean = cb => del([`${DISTDIR}`], cb);

function handleDictionaryRequest(req, res, next) {
  const parsedUrl = parseUrl(req);
  if (parsedUrl.pathname != "/dictionary") {
    next();
    return;
  }
  let use_as_dictionary = 'match="/test/*"';
  let cache_control = "public, max-age=100";
  switch (parsedUrl.query) {
    case "OK":
      break;
    case "InvalidStructuredHeader":
      use_as_dictionary = 'match="';
      break;
    case "MatchFieldIsNotAString":
      use_as_dictionary = "match=test";
      break;
    case "MatchDestFieldIsNotAList":
      use_as_dictionary = 'match="/test/*", match-dest=document';
      break;
    case "MatchDestFieldListItemIsNotAString":
      use_as_dictionary = 'match="/test/*", match-dest=(document)';
      break;
    case "TypeFieldIsNotAToken":
      use_as_dictionary = 'match="/test/*", type="raw"';
      break;
    case "IdFieldIsNotAString":
      use_as_dictionary = 'match="/test/*", id=dict_id';
      break;
    case "IdFieldTooLong":
      const long_id = "x".repeat(1025);
      use_as_dictionary = `match="/test/*", id="${long_id}"`;
      break;
    case "NoMatchField":
      use_as_dictionary = 'id="dict_id"';
      break;
    case "ExpiredResponse":
      cache_control = "no-store";
      break;
    case "UnsupportedType":
      use_as_dictionary = 'match="/test/*", type=unsupported';
      break;
    case "InvalidMatchField":
      use_as_dictionary = 'match="("';
      break;
  }
  res.setHeader("Use-As-Dictionary", use_as_dictionary);
  res.setHeader("Cache-Control", cache_control);
  res.end("Test dictionary");
}

exports.build = build;
exports.clean = clean;
exports.default = async () => {
  await watch(`${SRCDIR}`, { ignoreInitial: false }, build);
  await connect.server({
    root: `${DISTDIR}`,
    livereload: true,
    port: 8000,
    middleware: function(connect, opt) {
      return [handleDictionaryRequest];
    }
  });
};
