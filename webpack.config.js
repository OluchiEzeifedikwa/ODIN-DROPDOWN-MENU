
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new CopyPlugin({
          patterns: [
            { from: "src/dior.jpeg", to:  "/Users/OluchiEze/repos/ODIN-DROPDOWN-MENU/ODIN-DROPDOWN-MENU/dist"},
            { from: "src/lady.jpeg", to:  "/Users/OluchiEze/repos/ODIN-DROPDOWN-MENU/ODIN-DROPDOWN-MENU/dist"},
            { from: "src/perf.jpeg", to:  "/Users/OluchiEze/repos/ODIN-DROPDOWN-MENU/ODIN-DROPDOWN-MENU/dist"}
          ]
        })
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // inline images smaller than 8KB
              },
            },
          ]
        }, 
      ],
    },
   };

   