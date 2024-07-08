const { defineConfig } = require('@vue/cli-service')
const ai_service = 'https://api.openai-hk.com/v1/chat/completions'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 代理，原来通配'**'改为''
    proxy: {
        '/ai': {
            target: ai_service,
            changeOrigin: true,
            pathRewrite: {
                '^/ai': ''
            }
        },

    }
    // before: require('./mock/mock-server.js')
},
})
