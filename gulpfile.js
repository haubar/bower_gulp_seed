var gulp = require('gulp');
var coffee = require('gulp-coffee');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('coffee', function() { //'coffee'是排程名稱，可自定
                                  gulp.src('./app/coffeescripts/*.coffee') //來源檔案
                                  .pipe(coffee()) //編譯
                                  .pipe(gulp.dest('./app/assets/js')) //輸出位置
                                });
