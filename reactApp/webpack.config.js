const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      remotes: {
        vueapp: "vueapp@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        vue: {
          singleton: true,
        },
        "vue-loader": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
