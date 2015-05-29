var gulp = require('gulp'),
  //connect = require('gulp-connect'),
  less = require('gulp-less'),
  //livereload = require('gulp-livereload'),
  browserify = require('gulp-browserify');

//browserify
gulp.task('js', function() {
  gulp.src('src/js/app.js')
    pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest('./js'))
});

//less
gulp.task('css', function() {
  gulp.src('styles/*.less')
    pipe(less())
    pipe(gulp.dest('./css'));
});

//watch
gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['css']);
});

//action
gulp.task('default', ['js', 'css', 'watch']);
