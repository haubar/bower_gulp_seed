var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
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

//coffee
gulp.task('coffee', function() {          //'coffee'是排程名稱，可自定
    gulp.src('coffeejs/*.coffee')         //來源檔案
        .pipe(coffee())                   //編譯
        .pipe(gulp.dest('./js'))          //輸出位置
});

//watch
gulp.task('watch', function() {
     livereload.listen();
     gulp.watch('less/*.less');
     gulp.watch('coffeejs/*.coffee');
});

//action
gulp.task('default', ['server', 'less', 'coffee', 'watch']);