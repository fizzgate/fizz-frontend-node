const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
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
  publicPath: "",
  outputDir: "dist",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // 'vuex': 'Vuex',
      // 'axios': 'axios',
      // 'element-ui': 'ELEMENT',
    });

    // config.output.library = `${packageName}-[name]`;
    // config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${packageName}`;
    // config.output.globalObject = 'window';

    // const entry = config.entry('app');
    // entry.add('babel-polyfill').end();
    // entry.add('classlist-polyfill').end();
    // entry.end();
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(args => {
        args[0].ignoreOrder = true;
        return args;
      });
    }
  },
  configureWebpack: {
     output: {
          library: `${packageName}`,
          libraryTarget: 'umd'
     },
    plugins: [
      // new MonacoWebpackPlugin({
      //   features: [
      //     'coreCommands', 'clipboard', 'find', 'format', 'contextmenu',
      //     'wordHighlighter', 'wordOperations', 'wordPartOperations'
      //   ],
      //   filename: '[name].worker.[contenthash:6].js'
      // }),
      // new webpack.BannerPlugin(banner)
    ]
  },
  devServer: {
    port: 1890,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      '/api': {
        //本地服务接口地址
        // target: 'http://localhost',
        //远程演示服务地址,可用于直接启动项目
        target: 'http://demo.fizzgate.com/api',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};