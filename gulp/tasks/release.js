var gulp = require( 'gulp' );
var inquirer = require( 'inquirer' );
var replace = require( 'gulp-replace' );

// Require main configuration file
var config = require( '../config.js' );

// Version variables
var currentVersion = require( '../../package.json' ).version;
var nextVersion;

// Security check, asking for new version number
exports.prompt = function prompt( callback ) {
	inquirer.prompt( [
		{
			type: 'confirm',
			name: 'confirmation',
			message: 'Are you sure everything is updated? README.md? CHANGELOG.md? package.json?'
		}
	] )
		.then( function( result ) {
			if ( result.confirmation === false ) {
				return false;
			}

			inquirer.prompt( [
				{
					type: 'input',
					name: 'version',
					message:
						'What version are we moving to? (Current version is ' +
						currentVersion +
						')',
					validate: function( value ) {
						if ( value === '' ) {
							return 'You have to enter valid version value (eg. 3.0.0).';
						}

						return true;
					}
				}
			 ] )
				.then( function( result ) {
					nextVersion = result.version;
					callback();
				} );
		} );
}

// Bumps the version number in any file that has one
exports.version = function version() {
	return gulp.src( config.paths.release.versionedFiles, { base: process.cwd() } )
		.pipe( replace( currentVersion, nextVersion ) )
		.pipe( gulp.dest( '.' ) );
}
