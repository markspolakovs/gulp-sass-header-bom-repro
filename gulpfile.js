const gulp = require('gulp');
const sass = require('gulp-sass');
const header = require('gulp-header');

gulp.task('default', () => {
    gulp.src('test.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        // .pipe(header(`/*No BOM here*/`))
        .pipe(gulp.dest('./test.css'));
});