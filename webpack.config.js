var webpack = require("webpack");

var envVar = new webpack.DefinePlugin({
    __PROJECTID__: process.env.CAL_KEY
})

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
    },
    plugins: [envVar]
};
