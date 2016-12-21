var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var config = {
    bootstrapDir: './node_modules/bootstrap',
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

gulp.task('default', ['css', 'fonts']);
