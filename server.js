const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpack_config = require('./webpack.config');
const {port, dev_path} = require('./config');

const app = express();
var compiler = webpack(webpack_config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpack_config.output.publicPath,
  hot: true,
  inline: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at ${dev_path}:${port}/`);
})
