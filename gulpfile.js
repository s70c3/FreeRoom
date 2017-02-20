'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso'); // Минификация CSS
var uglify = require('gulp-uglify'); // Минификация JS

gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso()) // минимизируем css
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});