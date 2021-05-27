var gulp = require( 'gulp' );
var htmlmin = require( 'gulp-htmlmin' );
var connect = require( 'gulp-connect' );
var es = require( 'event-stream' );
var juiceFn = require( 'juice' ).juiceResources;

// Require main configuration file
var config = require( '../config.js' );

// Juice gulp wrapper
function juice( options ) {
	options = options || {};
	return es.map( function( file, fn ) {
		juiceFn( file.contents.toString(), options, function( err, html ) {
			if ( err ) {
				return fn( err );
			}

			file.contents = Buffer.from( html );
			fn( null, file );
		} );
	} );
}

// Inline CSS
exports.inline = function inline() {
	return gulp.src( config.paths.html.inline.src )
		.pipe( juice( {
			applyHeightAttributes: false,
			applyWidthAttributes: false,
			xmlMode: true,
			webResources: {
				relativeTo: './dist',
				images: false,
				svgs: false,
				scripts: false,
				links: false,
			},
		} ) )
		.pipe( gulp.dest( config.paths.html.inline.dest ) );
}

// Clean HTML
exports.clean = function clean() {
	return gulp.src( config.paths.html.clean.src )
		.pipe( htmlmin( config.paths.html.clean.options ) )
		.pipe( gulp.dest( config.paths.html.clean.dest ) )
		.pipe( connect.reload() );
}
