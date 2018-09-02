import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashBoard from '@/components/dashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dashBoard',
      name: 'dashBoard',
      component: dashBoard
    }
  ]
})
