const webpack = require('webpack');
const path = require('path');
const moduleSettings = {
    loaders: [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
    ]
};
const buildDirectory = path.join(__dirname, 'public', 'build');

module.exports = [
    {
        entry: './app.js',
        output: {
            path: buildDirectory,
            filename: 'client-bundle.js',
        },
        module: moduleSettings,
        devtool: 'sourcemap'
    },
    {
        entry: './form.js',
        output: {
            path: buildDirectory,
            filename: 'server-bundle.js',
            libraryTarget: 'commonjs2'
        },
        target: 'node',
        module: moduleSettings,
        devtool: 'sourcemap'
    }
];
