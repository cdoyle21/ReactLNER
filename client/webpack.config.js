module.exports = {
    entry: __dirname + "/src/App.js",
    output: {
        path: __dirname + "/src/dist/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ["/node_modules/"],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                        },
                    },
                ],
            },
        ],
    },
};