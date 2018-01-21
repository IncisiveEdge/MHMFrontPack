<style>
  html,body{
    font-family: "Microsoft Yahei";
    overflow-x: hidden;
    height: 100%;
  }

  #app{
    height: 100%;
  }
  .navbar{
    border-radius: 0;
  }
  a{
    color: #00B7FF;
  }
</style>
<template>
  <div id="app">
    <admin-index v-if="pageType === 'index'"></admin-index>
    <login v-if="pageType === 'login'"></login>

  </div>
</template>

<script>
import adminIndex from './components/admin/index'
import login from './components/admin/login'
import {resta} from './assets/rest'
export default {
  name: 'app',
  data () {
    return {
      pageType: 'index'
    }
  },
  components: {
    adminIndex,
    login
  },
  created () {
    resta.get('/getsession.do').done((res) => {
      if (res && res.code === 0) {
        this.pageType = 'login'
      }
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
