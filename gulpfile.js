var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    browserify = require('gulp-browserify');

//webserver
gulp.task('server', function () {
        connect.server({
          livereload: true,
        });
});

//browserify
gulp.task('scripts', function () {
      gulp.src('src/js/app.js')
        .pipe(browserify({
             insertGlobals : true,
             debug : !gulp.env.production
            }))
        .pipe(gulp.dest('./build/js'))
});

//less
gulp.task('less', function() {
    gulp.src('styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

//watch
gulp.task('watch', function() {
     livereload.listen();
     gulp.watch('styles/*.less');
});

//action
gulp.task('default', ['server', 'less', 'watch']);
