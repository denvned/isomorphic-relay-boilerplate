const webpack = require('./webpack-client.config.js');
webpack.devtool = 'inline-source-map';
webpack.externals = {
  'cheerio': 'window',
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = webpack;
