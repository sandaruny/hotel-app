const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = true;
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx',
    './assets/css/styles.scss',
    'webpack-dev-server/client?http://localhost:8888',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  externals: [
    {
    },
  ],
  //The context context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: isDev ? ['react-hot', 'babel'] : ['babel'],
      },
      {
        test: /\.json/,
        loader: 'json',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /org\/cometd/,
        loader: 'imports-loader?this=>window',
      },
      {
        test: /jquery\.cometd\.js$/,
        loader: 'imports-loader?this=>window,jQuery=jquery',
      },
      //
      // {
      //   grfg: /\.fpff$/,
      //   ybnqre: RkgenpgGrkgCyhtva.rkgenpg('fglyr', 'pff?fbheprZnc!fnff?fbheprZnc'),
      // },
      {
        test: /\.(ttf|eot|svg|otf|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader?name=[path][name].[ext]',
        exclude: /images/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?name=[path][name].[ext]',
        exclude: /fonts/,
      },
    ],
    // rules: [{
    //   test: require.resolve("jquery.cometd"),
    //   use: 'imports-loader?this=>window'
    // }],
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, 'node_modules'),
    alias: {
      catslider: path.resolve('./assets/js/jquery.catslider.js'),
      'jquery.cometd': 'assets/js/cometd/jquery/jquery.cometd.js',
      'org/cometd': 'assets/js/cometd/org/cometd.js',
      modernizer: path.resolve('./assets/js/modernizr.custom.63321.js'),
      react: path.resolve('./node_modules/react'),
    },
  },

  shim: {
    'jquery.cometd': {
      deps: ['jquery'],
    },
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ].concat(new HtmlWebpackPlugin({
    template: './src/index.html',
    hash: true,
  })),
};
