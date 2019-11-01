"use strict";

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");
const isDev = process.env.NODE_ENV === "development";

const webpackConfig = {
  entry: {
    polyfill: "@babel/polyfill",
    main: helpers.root("src", "main")
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: isDev ? "vue/dist/vue.runtime.js" : "vue/dist/vue.runtime.min.js",
      "@": helpers.root("src")
    }
  },
  module: {
    rules: [{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [helpers.root("src")]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [helpers.root("src")]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "vue-style-loader" : MiniCSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "index.html",
      chunksSortMode: "dependency"
    })
  ]
};

module.exports = webpackConfig;