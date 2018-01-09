'use strict';

let defaultModule = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options:{
                presets:["env", "react"]
            }
        },
    ]
};

module.exports = [
    {
        entry: "./app/index.jsx",
        output: {
            path: __dirname + '/dist/',
            filename: "bundle.js",
            library: "blog"
        },
        module: defaultModule
    },
];
