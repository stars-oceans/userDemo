const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',//代理目标
        changeOrigin: true,
        ws: true
      },
    },
  
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
  },
})
