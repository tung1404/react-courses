var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // example of polyfilling with webpack
    // alternatively, just include the babel runtime option below
    // and get Promises, Generators, Map, and much more!
    // You can even get forward looking proposed features
    // for ES7 and beyond with the
    // stage query parameter below
    // https://babeljs.io/docs/usage/experimental/
    // welcome to the future of JavaScript! :)
    //new webpack.ProvidePlugin({
    //  'arrayutils': 'imports?this=>global!exports?global.arrayutils!arrayutils'
    //})
  ],
  resolve: {
    // require files in app without specifying extensions
    extensions: ['.js', '.json', '.jsx', '.less'],
    alias: {
      // convenient anchor point for nested modules
      'appRoot': path.join(__dirname, 'js'),
      'vendor': 'appRoot/vendor'
    }
  },
  entry: [
    // WebpackDevServer host and port
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg)$/,
        // inline base64 URLs for <=8k images,
        // use direct URLs for the rest
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.jsx?$/,
        include: [
          // files to apply this loader to
          path.join(__dirname, 'js')
        ],
        // loaders process from right to left
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015',
          'reflux-wrap-loader'
        ]
      }
    ]
  } // end module
};

module.exports = config;