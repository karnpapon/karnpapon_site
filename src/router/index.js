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
      component: () => import("@/views/About"),
    },
    {
      path: "/work/",
      component: () => import("@/views/Work"),
    },
    {
      path: "/work/:slug",
      component: () => import("@/views/Work"),
    },
    {
      path: "/journal/",
      component: () => import("@/views/Journal"),
    },
    {
      path: "/journal/:slug",
      component: () => import("@/views/Journal"),
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