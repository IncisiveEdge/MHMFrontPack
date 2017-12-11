/**
 * Created by amarsoft on 2017/8/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {rest} from '../assets/rest'

Vue.use(Vuex)
export default new Vuex.Store({
  store: {
    user: null
  },
  mutations: {
    getSessionUser (store) {
      store.user = rest.get('/getSessionUser')
    }
  }
})
