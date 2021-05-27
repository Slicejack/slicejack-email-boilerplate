var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var styleLint = require( 'gulp-stylelint' );
var combineMq = require( 'gulp-group-css-media-queries' );
var del = require( 'del' );

// Require main configuration file
var config = require( '../config.js' );

// Lint SASS
exports.lint = function lint() {
	return gulp.src( config.paths.sass.lint.src )
		.pipe( styleLint( {
			configFile: config.paths.sass.lint.configFile,
			reporters: [
				{
					formatter: 'string',
					console: true,
				}
			],
			syntax: 'scss',
		} ) );
}

// Build SASS distribution files
exports.build = function build() {
	return gulp.src( config.paths.sass.build.src )
		.pipe( sass( {
			outputStyle: 'compressed',
		} )
			.on( 'error', sass.logError ) )
		.pipe( combineMq( {
			beautify: false,
		} ) )
		.pipe( gulp.dest( config.paths.sass.build.dest ) );
}

// Remove distribution files
exports.clean = function clean() {
	return del( config.paths.sass.clean.src );
}
