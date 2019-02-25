import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import MapView from './views/MapView'
import Device from './views/Device'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/application/:applicationId/device/:deviceId',
      name: 'device',
      component: Device
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
