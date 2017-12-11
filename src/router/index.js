import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
import User from '@/components/User'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/reg',
      name: 'Register',
      component: Register
    }, {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }, {
      path: '/u/:user',
      name: 'User',
      component: User
    }, {
      path: '*',
      name: 'Error',
      component: Error
    } 

  ]
})
