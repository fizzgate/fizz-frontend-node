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