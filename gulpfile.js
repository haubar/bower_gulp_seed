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

//livereloal
gulp.task('server', function () {
        connect.server({
          livereload: true,
        });
});


gulp.task('coffee', function() { //'coffee'是排程名稱，可自定
        gulp.src('./app/coffeescripts/*.coffee') //來源檔案
                          .pipe(coffee()) //編譯
                          .pipe(gulp.dest('./app/assets/js')) //輸出位置
});
