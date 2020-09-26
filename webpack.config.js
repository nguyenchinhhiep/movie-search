const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pug = {
    test: /\.pug$/,
    use: ['pug-loader']
};

const scss = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ],
};

const images = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'assets/images/'
            }
        }

    ],
};

const fonts = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: 'assets/fonts/'
            }
        }

    ],
};

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}



module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    watch: true,
    module: {
        rules: [js, pug, scss, images, fonts],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/view/pages/index.pug'
        }),
    ],
    devServer: {
        inline: false,
        contentBase: './dist'
    },
}