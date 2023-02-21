// postcss.config.js
module.exports = {
    plugins: {
        'autoprefixer':{
            browsers:['Android >= 4.0','iOS >= 9']
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
        },
    },
  };