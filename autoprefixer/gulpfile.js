var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', async function(){
  gulp.src('css/styles.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
});

//this automatically compiles vs having to run gulp watch everytime.
gulp.task('watch',function() {
  gulp.watch('css/styles.css', gulp.series('styles'));
});