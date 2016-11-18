var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier');
var cleanCSS = require('gulp-clean-css');
var imageop = require('gulp-image-optimization');


gulp.task('minify-html', function() {
  gulp.src('public_html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});

gulp.task('minify-css', function() {
  return gulp.src('public_html/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('images', function(cb) {
    gulp.src(['public_html/images/**/*.png','public_html/images/**/*.jpg','public_html/images/**/*.gif','public_html/images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./dist/images')).on('end', cb).on('error', cb);
});

gulp.task('build', ['minify-html', 'minify-css', 'images']);
