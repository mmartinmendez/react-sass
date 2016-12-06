const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const prefix = require('gulp-autoprefixer');

gulp.task('sass', () =>
    sass('./src/static/sass/*.{scss,sass}')
        .on('error', sass.logError)
        .pipe(prefix(['last 15 version', 'ie 8', 'ie 7','opera 12.1'], { cascade: true }))
        .pipe(gulp.dest('src/static/css/'))
);

gulp.task('watch', ['sass'], function () {
  gulp.watch(['./src/static/sass/*.{scss,sass}'], ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {

});
