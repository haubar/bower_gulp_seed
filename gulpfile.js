var gulp = require('gulp'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

//js
gulp.task('js', function () {
      gulp.src('js/app.js')
        .pipe(concat('output.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

//css
gulp.task('css', function() {
    // gulp.src('styles/*.less')
    //     .pipe(less())
    gulp.src('css/*.css')
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build'));
});


//html
gulp.task('html', function() {
  /*
  gulp.src('source/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
    */
});

//watch
gulp.task('watch', function() {
     gulp.watch('styles/*.less', ['css']);
     gulp.watch('jade/*.jade', ['html']);
});

//action
gulp.task('default', ['js', 'css', 'html', 'watch']);
