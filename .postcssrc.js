// postcss.config.js
module.exports = {
    // 配置要使用的PostCSS插件
    plugins: {
        // 配置使用autoprefixer 插件
        // 作用：生成浏览器CSS样式规则前缀
        'autoprefixer':{
            // 配置要兼容的环境信息
            browsers:['Android >= 4.0','iOS >= 9']
        },
         // 配置使用 postcss-pxtorem 插件
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
        },
    },
  };