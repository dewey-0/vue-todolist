const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config ={
    target:'web',
    entry:path.join(__dirname, 'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map'    // 方便调试，显示源代码
    config.devServer = {
        port: '8000',
        host: 'localhost',
        overlay:{
            errors: true
        },
        // open:true
        // historyFallback: {},
        hot: true   // 不刷新页面更新修改内容
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports= config;





















