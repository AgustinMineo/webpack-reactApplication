const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports ={
    entry:'./src/index.js', //Configuramos el entry del project, normalmente esta ne src/index.js
    output:{
        path: path.resolve(__dirname,'dist'), //Declaramos la carpeta raiz, en este caso dist
        filename: 'bundle.js',
    },
    resolve:{
        extensions : ['.js','.jsx'],//Declaramos las extensiones que vamos a utilizar
        alias:{
            '@components': path.resolve(__dirname,'src/components/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
        },
    },
    mode : 'development',
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
        filename:'./index.html',
       }),
       new MiniCssExtractPlugin({
        filename: '[name].css'
       }),
    ],
    devServer : { //Configuración del servidor de desarollo.
        static:{directory: path.join(__dirname, 'dist')},
        compress: true,
        port : 3006
    }
}