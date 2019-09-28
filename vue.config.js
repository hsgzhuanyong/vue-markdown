const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  pages: {
    index: {
      entry: "./example/main.js"
    }
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@@', resolve('example'));
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@@/assets/styles/theme.scss";
        `
      }
    }
  }
}
