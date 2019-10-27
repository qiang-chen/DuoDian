const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/public/dist',
    configureWebpack: {
        externals: {
            BMap: 'BMap'
        },
        resolve: {
            alias: {
                assets: '@/assets',
                components: '@/components',
                views: '@/views',
                router: '@/router',
                store: '@/store',
                utils: '@/utils',
                api: '@/api'
            }
        },
        plugins: [
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/skeleton/entry-skeleton.js') //这里为上面的entry-skeleton.js
                    }
                },
                minimize: true,
                quiet: true,
                router: {
                    mode: 'history',
                    routes: [{
                        path: '/list/home', //和router.js中的路径一样就行
                        skeletonId: 'Skeleton1' //之前的id
                    }, {
                        path: '/list/my', //和router.js中的路径一样就行
                        skeletonId: 'Skeleton2' //之前的id
                    }]
                }
            })
        ]
    },
    //此插件需要css分离
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7002', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};