/**
 * Created by amarsoft on 2017/10/15.
 */
import Login from '../components/admin/login'
// import Desktop from '../components/admin/desktop'
import Images from '../components/admin/images'
import News from '../components/admin/news'
import Matchs from '../components/admin/matchs'
import Products from '../components/admin/products'
import Reports from '../components/admin/reports'
import User from '../components/admin/user'

export default [
  {
    path: '/admin/',
    name: 'adminDesktop'
    // component: Desktop
  }, {
    path: '/admin/login',
    name: 'adminLogin',
    component: Login
  }, {
    path: '/admin/user',
    name: 'adminUser',
    component: User
  }, {
    path: '/admin/images',
    name: 'adminImages',
    component: Images
  }, {
    path: '/admin/news',
    name: 'adminNews',
    component: News
  }, {
    path: '/admin/matchs',
    name: 'adminMatchs',
    component: Matchs
  }, {
    path: '/admin/products',
    name: 'adminProducts',
    component: Products
  }, {
    path: '/admin/reports',
    name: 'adminReports',
    component: Reports
  }
]
