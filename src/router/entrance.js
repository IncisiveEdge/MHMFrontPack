/**
 * Created by amarsoft on 2017/10/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import adminRouter from './admin-route'
// import $ from 'jquery'
Vue.use(Router)
const routes = [].concat(adminRouter)
export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})
