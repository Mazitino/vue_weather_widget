const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue_weather_widget/',
  css: {
    extract: false
  },
})
