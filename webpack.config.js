const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:'./src/index.js', //Configuramos el entry del project, normalmente esta ne src/index.js
    output:{
        path: path.resolve(__dirname,'dist'), //Declaramos la carpeta raiz, en este caso dist
        filename: 'bundle.js',
    },
    resolve:{
        extensions : ['.js','.jsx']//Declaramos las extensiones que vamos a utilizar
    },
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
            }
        ]
    },
    plugins: [
       new HtmlWebPackPlugin({
        template:'./public/index.html',
        filename:'./index.html',
       }), 
    ],
    devServer : { //Configuración del servidor de desarollo.
        static:{directory: path.join(__dirname, 'dist'),},
        compress: true,
        port : 3006
    }
}