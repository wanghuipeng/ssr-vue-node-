const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
    entry:{
        main:'./entry-client.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
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
        new VueSSRClientPlugin()
    ]
}