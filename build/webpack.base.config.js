const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js', 
        path: path.join(__dirname, "../dist")
    },
    resolve: {
        extensions: ['.js', '.ts', 'tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}