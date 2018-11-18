const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};
