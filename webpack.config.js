module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: __dirname,
        filename: 'my_module.dist.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'stage-0',
                    'stage-2'
                ]
            }
        }
        ]
    }
};