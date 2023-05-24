const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/vue2-cms-template/', // TODO 自行替换为web文件部署目录
    devServer: {
        port: '9090',
        proxy: {
            '^/api/farm_cms/.*': {
                target: process.env.VUE_APP_FARM_CMS,
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    '^/api/': ''
                }
            },
            '^/api/farm_server/.*': {
                target: process.env.VUE_APP_FARM_SERVER,
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    '^/api/': ''
                }
            },
        }
    },
})
