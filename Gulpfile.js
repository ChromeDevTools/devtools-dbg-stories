const { dest, parallel, series, src, watch } = require("gulp");
const connect = require("gulp-connect");
const del = require("delete");
const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

const DISTDIR = "./dist";
const SRCDIR = "./src";

const buildAssets = () =>
  src(`${SRCDIR}/*.{html,ico,js}`)
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());

const buildTypeScript = () => {
  return src(`${SRCDIR}/*.ts`)
    .pipe(sourcemaps.init())
    .pipe(ts({}))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${DISTDIR}`))
    .pipe(connect.reload());
};

const build = parallel(buildAssets, buildTypeScript);

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
