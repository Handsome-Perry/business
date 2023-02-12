const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        'components': path.resolve('./src/components'),
        'assets': path.resolve('./src/assets'),
        'network': path.resolve('./src/network'),
        'font': path.resolve('./src/font'),
        'imgs': path.resolve('./src/imgs'),
      }
    },
  }
})
