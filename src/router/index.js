import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
