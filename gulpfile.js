const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', ['test','lint'], () => {
  console.log('SECOND TASK');
});

gulp.task('test', () => {
  gulp.src('./test/test.js')
  .pipe(mocha())
})

gulp.task('lint', () => {
  gulp.src('./greet.js')
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.watch('./**/**.js',['test','lint'])
