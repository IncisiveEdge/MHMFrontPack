import Home from '../components/index/Home'
import Login from '../components/index/Login'
import Register from '../components/index/Register'
import Logout from '../components/index/Logout'
import User from '../components/index/User'
import News from '../components/index/News'
import Products from '../components/index/Products'
import debug from '../Debug'
import Blank from '../blank'
import NotFound from '../404'

export default [
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
    path: '/news',
    name: 'News',
    component: News
  }, {
    path: '/products',
    name: 'Products',
    component: Products
  }, {
    path: '/blank',
    name: 'blank',
    component: Blank
  }, {
    path: '/debug',
    name: 'debug',
    component: debug
  }, {
    path: '*',
    name: 'pageNotFound',
    component: NotFound
  }
]
