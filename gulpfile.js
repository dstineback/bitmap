const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', ['test','lint'], () => {
  console.log('SECOND TASK');
});

gulp.task('test', () => {
  gulp.src(__dirname + '/test/test.js')
  .pipe(mocha())
})

gulp.task('lint', () => {
  gulp.src(__dirname + '/**.js')
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.watch(__dirname + '/**/**.js',['test','lint'])
