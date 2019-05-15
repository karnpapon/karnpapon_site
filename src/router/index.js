import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router)

import BlogEntries from '../data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('@/components/WorkDetailsRender'),
    children
  }
})

const UserProfilePreview = {
	template: `
<div>
	<h3>Preview of your profile</h3>
</div>
  `
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      children: [
        {
          path: "/work/:year/:slug",
          component:  { 
            default: () => import("@/views/ContentRender"),
            helper: UserProfilePreview
          } ,
        }, 
      ]
    },
    // {
    //   path: "/work/:year/:slug",
    //   component:  () => import("@/views/ContentRender")
    // },
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
    },
    // ...blogRoutes
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})