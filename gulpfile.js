var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require("gulp-sass");
var babel = require('gulp-babel');
gulp.task('server', function() {
    connect.server({
        livereload: true,
    });
});
gulp.task('sass', function() {
  gulp.src('assets/sass/*.scss')
      .pipe(sass({
          outputStyle: '',
          sourceMap: false,
          sourceMapContents: false,
          includePaths: ['node_modules/susy/sass', "node_modules/breakpoint-sass/stylesheets"]
      }).on('error', sass.logError))
      .pipe(gulp.dest('assets/css'))
      .pipe(connect.reload());
});
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});
gulp.task('build', function() {
    gulp.src('assets/js/*.js')
        //.pipe(babel())
        //.pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('watch',function(){
    gulp.watch('assets/sass/*.scss',['sass']);
    gulp.watch("assets/css/*.css", connect.reload);
    gulp.watch('assets/js/*.js',['build']);
    gulp.watch(["*.html", "data/*.html"], ["html"])
});

gulp.task('default',['watch',"server", "sass", "build"]);