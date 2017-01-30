var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var config = {
    bootstrapDir: './node_modules/bootstrap',
    jqueryDir: './node_modules/jquery',
    publicDir: './dist',
};

gulp.task('css', function() {
    return gulp.src('./less/weirdx.less')
    .pipe(less({
        paths: [config.bootstrapDir + '/less'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function() {
    return gulp.src(config.bootstrapDir + '/dist/js/bootstrap.*')
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('bootstrap', 'weirdx');
    }))
    .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('jquery', function() {
    return gulp.src(config.jqueryDir + '/dist/jquery.min.js')
    .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('default', ['css', 'fonts', 'js', 'jquery']);
