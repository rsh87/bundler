const path = require("path");
const glob = require("glob");

module.exports = {
  entry: {
    vendor: "./src/index.js",
    modules: glob.sync("./src/**/*.module.js*"),
    app: glob.sync("./src/**/*(*.js*|*.ts*)", {
      ignore: "{./src/**/*.module.js*,./src/bootstrap.js,./src/index.js}"
    }),
    bootstrap: "./src/bootstrap.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      { test: /\.html$/, loader: "html-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "./src")
    }
  }
};
