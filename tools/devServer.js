import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.js';

const app = express();
const PORT = process.env.PORT || 3000;

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, () => {
  console.log(`follow me down the rabbit hole on port ${PORT}`);
});
