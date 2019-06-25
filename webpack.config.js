const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: "MameHiExtractor.js",
        path: path.resolve(__dirname, 'dist'),
        library: 'MameHiExtractor',
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    devtool: "source-map"
};
