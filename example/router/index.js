import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router);


const route = {
  '/': {
    title: "13123",
    component: () => import("@@/pages/home.md"),
  },
}


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

    console.log(route[path]);

    return {
      name: path,
      component,
      path,
      meta: Object.assign({}, route[path])
    }
  })
}

export default router;
