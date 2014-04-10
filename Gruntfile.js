/*jshint node:true*/
var path = require('path');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlrefs: {
			dist: {
				files: [{
					expand: true,
					cwd: './',
					src: ['*.html'],
					dest: 'dist/'
				}],
				options: {
					includes: {
						analytics: './ga.inc',
					},
					buildNumber: 349
				}
            },
            test : {
				files: [{
					expand: true,
					cwd: './',
					src: ['*.html'],
					dest: 'dist/'
				}],
				options: {
					includes: {
						analytics: './ga.inc',
                    },
                    templates: {
                        css : function(block){
                            var indent = (block.raw[0].match(/^\s*/) || [])[0];
                            console.log(block);
                            var stylesheetTemplate = "<%= cdn_stylesheet_link_tag '" + path.basename(block.raw[0]) + "' %>"
                            return indent + stylesheetTemplate;
                        }
                    },
					buildNumber: 349
				}
            },
		}
	});


	grunt.loadTasks('tasks');
};
