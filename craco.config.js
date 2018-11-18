const path = require("path");
const fs = require("fs");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};
