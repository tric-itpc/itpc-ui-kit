const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  externals: {
    react: "react",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  output: {
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
    filename: "index.js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin({ filename: "index.css" })],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
}
