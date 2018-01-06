const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      'import': false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: false,
      plugins: () => [require('autoprefixer')({grid: false})],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname,'./node_modules')],
    },
  },
];

const markdown = require('markdown-it')({
  html: true,
  breaks: false,
}).use(require('markdown-it-highlightjs'))  

const rules = [
  {
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [
      path.resolve(__dirname, 'components'),
      path.resolve(__dirname, 'demo'),
    ],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: { 
      loaders:  ['vue-style-loader'].concat(cssLoaders), 
    }
  }, 
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.resolve(__dirname, 'components'),
      path.resolve(__dirname, 'demo'),
      path.resolve(__dirname, 'node_modules/@material')
    ]
  }, 
  {
    test: /\.md$/,
    loader: 'vue-markdown-loader',
    options: {
      preventExtract: true,
      wrapper: 'article',
      markdown
    }
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
    }
  }, 
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
    }
  }
]

const plugins = [

  // create index.html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'demo/index.html',
    inject: 'body',
    minify: false,
    chunksSortMode: 'dependency'
  }),

  // add vue dependencies
  new WebpackCdnPlugin({
    modules: [
      {
        name: 'vue',
        var: 'Vue',
        path: isProduction ? 'dist/vue.runtime.min.js' : 'dist/vue.runtime.js'
      },
      {
        name: 'vue-router',
        var: 'VueRouter',
        path: isProduction ? 'dist/vue-router.min.js' : 'dist/vue-router.js'
      }
    ],
  }),

  // explicit entry chunks    
  new webpack.optimize.CommonsChunkPlugin({
    names: ['plugin','styles'],
    minChunks: Infinity,
    children: true,
    async:true
  }),
  
  // vendor chunk
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: function(module){
      return module.context && module.context.indexOf("node_modules") !== -1;
    }
  }),

  // merge manifest in vendor chunk    
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest",
    chunks: ['vendor']
  }),
  
]

const config = {
  entry: {
    'demo': path.resolve(__dirname,'demo/main.js'),
    'plugin': path.resolve(__dirname,'components/index.js'),
  },
  output: {
    filename:  isProduction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    path: path.resolve(__dirname, isProduction ? 'public' : 'dev'),
  },
  resolve: {
    alias: {
      'vue-mdc-adapter': path.resolve(__dirname,'components/index.js'),
      'demo': path.resolve(__dirname,'demo/')
    }
  },
  externals: {},
  devtool: isProduction ? 'source-map' : 'cheap-eval-source-map',
  module: { rules },
  plugins
}

// Optimize for prod
if (isProduction) {

  config.output.publicPath = '/vue-mdc-adapter/'

  // extract css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      use: cssLoaders,
      fallback: 'style-loader'
    })
  })

  config.plugins.push(
    // clean output path
    new CleanWebpackPlugin(config.output.path),
    
    // optimize module, rollup way
    new webpack.optimize.ModuleConcatenationPlugin(),
    
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // Must be greater than or equal to one
      minChunkSize: 1000
    }),
    
    // split css
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),

    // copy assets
    new CopyWebpackPlugin([ 
      {
        from: path.resolve(__dirname, 'static'),
        to: config.output.path,
        ignore: ['.*']
      }
    ]),

    // minimize JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    // minimize CSS
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  );
} 

// Enable dev server
if (isDevelopment) {

  // laod css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ['style-loader'].concat(cssLoaders)
  })

  config.plugins.push( 
    // HMR
    new webpack.HotModuleReplacementPlugin()
  )  

  config.devServer = {
    contentBase: path.resolve(__dirname, 'static'),
    disableHostCheck: true,
    hot: true
  }
  
  // cloud9 support
  process.env.IP && (config.devServer.host = process.env.IP)
  process.env.PORT && (config.devServer.port = process.env.PORT)

}

module.exports = config

