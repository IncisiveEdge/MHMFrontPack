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
    <admin-index v-if="pageType === 'index'" user="user"></admin-index>
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
      pageType: 'index',
      user: {}
    }
  },
  components: {
    adminIndex,
    login
  },
  created () {
    // console.warn(this.$route.path)
    // if (!this.$route.path.indexOf('/admin/')) {
    //   this.pageType = 'admin'
    // } else if (!this.$route.path.indexOf('/login')) {
    //   this.pageType = 'login'
    // } else {
    //   this.pageType = 'index'
    // }
    resta.get('/getsession.do').done((res) => {
      console.warn(res)
      if (res && res.code === 0) {
//        this.pageType = 'login'
      }
      this.user.name = res.username || ''
    })
//    console.log(this.$route)
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
