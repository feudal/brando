const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const fileinclude = require('gulp-file-include');


function includetohtml() {
  return src('app/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('app/'))
    .pipe(browserSync.stream());
}


function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
}

function images() {
  return src('app/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('docs/img'))
}

function cleanDist() {
  return del('docs');
}

// 'node_modules/jquery/dist/jquery.js',
// 'node_modules/slick-carousel/slick/slick.js',
// 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
// 'node_modules/mixitup/dist/mixitup.js',
// 'app/js/main.js'

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(concat('style.min.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function styles2() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(concat('style.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function build() {
  return src([
      'app/css/*.css',
      'app/fonts/**/*',
      'app/js/*.js',
      'app/*.html'
    ], { base: 'app' })
    .pipe(dest('docs'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/html/**/*.html']).on('change', browserSync.reload);
  watch(['app/html/**/*.html'], includetohtml);
}

exports.images = images;
exports.styles = styles;
exports.styles2 = styles2;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.includetohtml = includetohtml;
exports.build = build;

exports.my_build = series(cleanDist, images, build);
exports.default = parallel(includetohtml, styles, scripts, browsersync, watching);