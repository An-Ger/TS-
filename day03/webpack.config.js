const path = require("path");

module.exports = {
  //入口文件
  entry: "./src/index.ts",
  //打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //webpack打包时用的模块
  module: {
    //loader 规则
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },
};
