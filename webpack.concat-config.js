const MergeIntoSingleFilePlugin = require("webpack-merge-and-include-globally");

module.exports = {
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        "bundle.js": [
          "./dist/vendor.bundle.js",
          "./dist/modules.bundle.js",
          "./dist/app.bundle.js",
          "./dist/bootstrap.bundle.js"
        ]
      }
    })
  ]
};
