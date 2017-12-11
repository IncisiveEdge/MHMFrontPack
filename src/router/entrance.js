/**
 * Created by amarsoft on 2017/10/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from './index-route'
import adminRouter from './admin-route'
// import $ from 'jquery'
Vue.use(Router)
const routes = [].concat(indexRouter).concat(adminRouter)
export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})
