const { dest, parallel, series, src, watch } = require("gulp");
const connect = require("gulp-connect");
const del = require("delete");
const less = require("gulp-less");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

const DISTDIR = "./dist";
const SRCDIR = "./src";

const buildAssets = () =>
  src(`${SRCDIR}/*.{html,ico,js,mjs}`)
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

exports.build = build;
exports.clean = clean;
exports.default = async () => {
  await watch(`${SRCDIR}`, { ignoreInitial: false }, build);
  await connect.server({
    root: `${DISTDIR}`,
    livereload: true,
    port: 8000
  });
};
