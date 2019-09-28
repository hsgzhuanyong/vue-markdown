# 安装

### npm 安装
> 推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org">webpack </a>打包工具配合使用。

```shell
  yarn add style-ui  || npm i style-ui -S
```

### CDN
> 目前可以通过 unpkg.com/style-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
```html
 <!-- 引入样式 -->
 <link rel="stylesheet" href="https://unpkg.com/style-ui/lib/theme-chalk/index.css">
```

### 在vue-cli项目中使用
```javascript
  import Vue from 'vue';
  import App from './App.vue';
  import 'style-ui/lib/theme-chalk/index.css';
  
  
  new Vue({
    el: '#app',
    render: h => h(App)
  });
```
