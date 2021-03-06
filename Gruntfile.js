module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {

		},

		handlebars: {
			source: {
				options: {
					namespace: false,
					commonjs: true
				},
				expand: true,
				cwd: 'src/',
				src: ['**/*.tpl'],
				dest: 'src/',
				ext: '.tpl.js'
			}
		},

		browserify: {
			base: {
				src: 'src/base/zepto.js',
				dest: 'src/base/zepto.dest.js'
			},
			demo: {
				options: {},
				expand: true,
				cwd: 'src/demo/',
				src: ['**/*.js', '!**/*.dest.js'],
				dest: 'src/demo/',
				ext: '.dest.js'
			}
		},

		less: {
			demo: {
				options: {},
				expand: true,
				cwd: 'src/demo/',
				src: ['**/*.less'],
				dest: 'src/demo/',
				ext: '.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					'Android >= 4',
					'Chrome >= 40',
					'last 6 Firefox versions',
					'iOS >= 6',
					'Safari >= 6'
				]
			},
			demo: {
				src: 'src/**/*.css'
			},
		},


		watch: {
			handlebars: {
				files: ['<%= handlebars.source.src %>'],
				tasks: ['handlebars']
			},
			browserify: {
				files: ['src/demo/**/*.js', '!/src/demo/**/*.dest.js'],
				tasks: ['browserify']
			},
			less: {
				files: ['src/demo/**/*.less'],
				tasks: ['less', 'autoprefixer']
			},
		}

	});

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 任务列表
	grunt.registerTask('default', ['handlebars', 'browserify', 'less', 'autoprefixer']);

};