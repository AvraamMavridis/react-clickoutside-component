/**
 * Webpack config
 *
 * @author  Avraam Mavridis
 *
 */

var webpack = require( 'webpack' );
const OpenBrowserPlugin = require( 'open-browser-webpack-plugin' );

var devFlagPlugin = new webpack.DefinePlugin( {
    __DEV__: JSON.stringify( JSON.parse( process.env.DEBUG || 'false' ) )
} );

console.log(  )

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: __dirname + '/static/',
        publicPath: __dirname ,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin( { url: 'http://localhost:8080' } )
    ],
    module: {
        loaders: [
            {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['react', 'es2015']
              }
            },
            {
                test: /\.scss$/,
                loaders: [ "style", "css", "sass" ]
            },
        ]
    },
    resolve: {
        extensions: [ '', '.js', '.json' ]
    },
    node: {
        fs: "empty"
    }
};
