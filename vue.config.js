const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vue_weather_widget/',
  css: {
    extract: false
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap(options => {
  //       options['compilerOptions'] = {
  //         ...options.compilerOptions || {},
  //         isCustomElement: tag => tag === 'myButton'
  //       };
  //       return options;
  //     })
  // }
})
