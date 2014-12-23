var gulp = require('gulp'),
      coffee = require('gulp-coffee');

gulp.task('coffee', function() { //'coffee'是排程名稱，可自定
    gulp.src('./app/coffeescripts/*.coffee') //來源檔案
                                    .pipe(coffee()) //編譯
                                      .pipe(gulp.dest('./app/assets/js')) //輸出位置
                                      });
