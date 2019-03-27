const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    entry:{
        main:'./entry-server.js'
    },
    output:{
        filename:'build.js',
        libraryTarget: 'commonjs2'
    },
    target:'node',
    devtool:'source-map',
    externals:nodeExternals({
        whitelist: /\.css$/
    }),
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new VueSSRServerPlugin()
    ]
}