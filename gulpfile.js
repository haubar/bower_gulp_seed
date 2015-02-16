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


gulp.task('coffee', function() { 
        gulp.src('./app/coffeescripts/*.coffee') 
                          .pipe(coffee()) 
                          .pipe(gulp.dest('./app/assets/js')) 
});
