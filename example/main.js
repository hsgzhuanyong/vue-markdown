import Vue from "vue"
import App from "./app.vue"
import router from "@@/router"

import Highlight from 'vue-markdown-highlight'
import Layout from "@@/components/Layout.vue"
import Header from "@@/components/Header.vue"
import Aside from "@@/components/Aside.vue"
import Main from "@@/components/Main.vue"
import "@@/assets/styles/index.scss"

Vue.config.productionTip = false
Vue.component(Layout.name, Layout)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.use(Highlight)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
