var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./Components/react-router/app-boot.jsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'src')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};