var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


console.log("LOCAL ENVIRONMENT");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: 'src'
}).listen(4100, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:4100/');
});
