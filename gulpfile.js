var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

//webserver
gulp.task('server', function () {
        connect.server({
          livereload: true,
        });
});

//less
gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
});

//watch
gulp.task('watch', function() {
     livereload.listen();
     gulp.watch('less/*.less');
     gulp.watch('coffeejs/*.coffee');
});

//action
gulp.task('default', ['server', 'less', 'watch']);
