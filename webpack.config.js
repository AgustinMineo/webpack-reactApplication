const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports ={
    entry:'./src/index.js', //Configuramos el entry del project, normalmente esta ne src/index.js
    output:{
        path: path.resolve(__dirname,'dist'), //Declaramos la carpeta raiz, en este caso dist
        filename: 'bundle.js',
        publicPath: "./",
    },
    resolve:{
        extensions : ['.js','.jsx'],//Declaramos las extensiones que vamos a utilizar
        alias: {
            '@components': path.resolve(__dirname,'src/components/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
        }
    },
    mode : 'production',
    module:{
        rules : [ //Reglas y extenciones que vamos a utilizar
            {
                test: /\.(js|jsx)$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
       new HtmlWebPackPlugin({
        template:'./public/index.html',
        filename:'./index.html'
       }),
       new MiniCssExtractPlugin({
        filename: '[name].css'
       }),
       new CleanWebpackPlugin(),
    ],
    optimization:{
        minimize:true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}