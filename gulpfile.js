var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var less = require('gulp-less');
var concat = require('gulp-concat');


gulp.task('js', function() {
    return gulp.src([
            'src/js/domlastic.js',
        ])
        .pipe(concat('domlastic.js'))
        .pipe(uglify().on('error', function(e) {
            console.log(e);
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);
