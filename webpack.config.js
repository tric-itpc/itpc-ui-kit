const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: "react",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "index.css" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
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
}
