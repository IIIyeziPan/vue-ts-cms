const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { config } = require('process')

// element plus 按需导入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// 自动导入Icon图标
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')

function resolve(dir) {
  /**
   * __dirname：当前文件夹所在的绝对路径
   */
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  // 跨域访问
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },

  // 2.配置方式二：和webpack属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三：
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  },
  // element plus
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          IconsResolver({
            // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
            prefix: 'icon',
            // 指定collection，即指定为elementplus图标集ep
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ]
      }),
      // Icons图标自动下载
      Icons({
        autoInstall: true
      })
    ]
  }
})
