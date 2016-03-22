const webpackConfig = require('./webpack-test.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: ['./test/**/*.js'],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    preprocessors: {
      ['./test/**/*.js']: ['webpack', 'sourcemap']
    },
    reporters: ['spec'],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
