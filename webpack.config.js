const path = require('path')

module.exports = {
  entry: './src/App.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  watch: true,
  devtool: 'source-map',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, './dev/')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './dev'),
    port: 3000
  }
}
