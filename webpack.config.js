// Webpack uses this to work with directories
const path = require("path");
const glob = require("glob");
const CopyPlugin = require("copy-webpack-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: {
    vendor: "./src/index.js",
    modules: glob.sync("./src/**/*.module.js*"),
    app: glob.sync("./src/**/*(*.js*|*.ts*)", {
      ignore: "{./src/**/*.module.js*,./src/bootstrap.js,./src/index.js}"
    }),
    bootstrap: "./src/bootstrap.js"
  },
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: "development",

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
  },
  plugins: [new CopyPlugin([{ from: "./src/index.html" }])]
};
