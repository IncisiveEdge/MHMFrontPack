<style>

</style>

<style scoped>

</style>

<template>
  <div class="row">
    <emitter :user="user" :model="content" :submit="submit" @modelChanged="modelChanged"></emitter>
    <div class="col-md-4" v-for="post in posts">
      <h2>
        <a href="" v-text="post.user"></a>
        <span>&nbsp;说</span>
      </h2>
      <p>
        <small v-text="post.time">

        </small>
      </p>
      <p v-text="post.post"></p>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  const emitter = require('../partical/Emitter')
  const {resta} = require('../../assets/rest')
  export default {
    name: 'User',
    components: {
      emitter
    },
    data () {
      return {
        content: '123',
        posts: [],
        submit: event => {
          const vm = this
          resta.post('/post', {'post': vm.content}, true).done(res => {
            vm.refresh().done(function () {
              vm.content = ''
            })
          })
        }
      }
    },
    computed: {
      user () {
        return {
          name: this.$route.params.user
        }
      }
    },
    methods: {
      modelChanged (value) {
        this.content = value
      },
      refresh () {
        const vm = this
        const defer = $.Deferred()
        resta.get('/getPost').done(function (res) {
          vm.posts = res
          defer.resolve()
        })
        return defer
      }
    },
    created () {
      this.refresh()
    }
  }
</script>
