module.exports ={
    mode: "development", // "production" | "development" | "none"
    entry: __dirname + '/src/script1.js',
    output: {
        path: __dirname + '/dist/js', // string
        filename: 'index.js'

    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    }
}