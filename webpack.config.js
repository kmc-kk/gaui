// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// メインプロセスの設定
const main = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
};

// レンダラープロセスの設定
const renderer = {
  mode: 'development',
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src', 'renderer', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'scripts')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
};

module.exports = [main, renderer]
