import Vue from "vue";
import Router from "vue-router";
import menuData from "@@/config/menuData.js";

Vue.use(Router);

const route = {};

// 递归设置路由
let setRoute = (array) => {
  array.forEach(item => {
    if(item.children) {
      setRoute(item.children);
    } else {
      let component = item.filename ? () => import(`@@/pages/${item.filename}.md`) : null;
      if(item.path) {
        route[item.path] = {
          title: item.name,
          component
        }
      }
    }
  });
};
setRoute(menuData);



let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "/",
    //   component: () => import("@@/views/index.vue"),
    //   meta: {
    //     title: "style-ui"
    //   }
    // },
    {
      path: "/docs",
      name: "docs",
      component: () => import("@@/views/home.vue"),
      children: formatRoute(route)
    },
    {
      path: '/404',
      name: "404",
      component: () => import("@@/views/404.vue"),
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
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
