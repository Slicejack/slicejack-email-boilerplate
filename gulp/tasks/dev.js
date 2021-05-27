var connect = require( 'gulp-connect' );

// Start server w/ live reload
exports.server = function server( done ) {
	connect.server( {
		port: 8000,
		root: 'dist/',
		livereload: true,
	} );

	done();
}
