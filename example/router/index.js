import Vue from "vue";
import Router from "vue-router";
import menuData from "@@/config/menuData.js";

Vue.use(Router);

const route = {};

menuData.forEach(item => {
  let component = item.filename ? () => import(`@@/pages/${item.filename}.md`) : null;
  if(item.path) {
    route[item.path] = {
      title: item.name,
      component
    }
  }
});

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: formatRoute(route)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { component } = route[path];

    return {
      name: path,
      component,
      path,
      meta: Object.assign({}, route[path])
    }
  })
}

export default router;
