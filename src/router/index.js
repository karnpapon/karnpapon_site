import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      path: "/about",
      component: () => import("@/views/ContentRender"),
    },
    {
      path: "/work/",
      component: () => import("@/views/ContentRender"),
    },
    {
      path: "/work/:slug",
      component: () => import("@/views/ContentRender"),
    },
    {
      path: "/journal/",
      component: () => import("@/views/ContentRender"),
    },
    {
      path: "/journal/:slug",
      component: () => import("@/views/ContentRender"),
    },
    {
      path: "*",
      component: () => import("@/views/PageNotFound"),
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})