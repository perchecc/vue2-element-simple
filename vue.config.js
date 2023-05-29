const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./", 
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  devServer: {
    port: "9090",
    proxy: {
      "^/api/.*": {
        target: process.env.VUE_APP_API_HOST,
        changeOrigin: true,
        secure: false,
        ws: true,
        pathRewrite: {
          "^/api/": "",
        },
      },
    },
  },
});
