const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(otf|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "static/fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "static/images/[name].[ext]",
          },
        },
      }
    )

    config.plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "static/[name].css",
        chunkFilename: "static/[id].css",
      })
    )

    return config
  },
}
