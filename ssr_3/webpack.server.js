const path = require('path');
const nodeExternal = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    entry:{
        main:'./entry-server.js'
    },
    output:{
        // path:path.resolve(__dirname, './dist'),
        filename:'build.js',
        libraryTarget: 'commonjs2'
    },
    target:'node',
    devtool:'#source-map',
    externals:nodeExternal({
        whitelist: /\.css$/
    }),
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
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