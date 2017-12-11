// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/entrance'
import store from './store'
import 'iview/dist/styles/iview.css'
import 'bootstrap/css/bootstrap.min.css'
import './assets/css/main-content.css'
import 'bootstrap/js/bootstrap.min.js'
import iView from 'iview'
import 'jquery'

Vue.use(iView)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store: store,
  mounted () {
    // 全局消息提示配置3秒延时，默认1.5秒
    this.$Message.config({
      duration: 3
    })
  }
})
