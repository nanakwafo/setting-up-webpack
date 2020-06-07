module.exports ={
    mode: "development", // "production" | "development" | "none"
    entry: __dirname + '/src/js/script1.js',
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
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]
    }
}