var webpack = require("webpack");

module.exports = {
    entry: "./webroot/react/main.js",
    output: {
        path: "./webroot/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [ // no css/image b/c I'm lazy and it's unneccessary (spelling?)
            { 
                test:/\.jsx$|\.js/, 
                exclude: /(node_modules)/,
                loader: "babel" 
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};
