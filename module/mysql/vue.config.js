const webpack = require('webpack');
const version = process.env.VERSION || require('./package.json').version;
const banner =
  'Fizz-Admin v' + version +
  '\n' +
  '(c) 2020-' + new Date().getFullYear() + ' Joker-Lee' +
  '\n' +
  'AGPL v3 Licensed.';
const packageName = require('./package.json').name;

module.exports = {
  //路径前缀
  publicPath: "/module/mysql",
  outputDir: "mysql",
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
     output: {
          library: `${packageName}`,
          libraryTarget: 'umd'
     }
  },
  devServer: {
    port: 1890,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};