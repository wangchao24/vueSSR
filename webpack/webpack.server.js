const path = require("path");
const projectRoot = path.resolve(__dirname, "../");
module.exports = {
    target: 'node',
    entry: [path.join(projectRoot, 'entry/entry-server.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(projectRoot, "dist"),
        filename: 'bundle.server.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }

        ]
    },
    devtool:'source-map',
    plugins: [],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }
}