import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/home"),
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import("@/views/brand"),
    },
    {
      path: '/star',
      name: 'star',
      component: () => import("@/views/star_product"),
    },
    {
      path: '/to_join',
      name: 'to_join',
      component: () => import("@/views/to_join"),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import("@/views/contact"),
    },
    {
      path: '/beauty',
      name: 'beauty',
      component: () => import("@/views/beauty"),
    }
  ]
})
export default router;