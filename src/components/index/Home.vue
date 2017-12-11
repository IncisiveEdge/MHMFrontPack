<style>

</style>

<style scoped>

</style>

<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li class="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active"><img src="../../assets/images/demo/demo1.jpg" alt="...">
          <div class="carousel-caption">
            <h3>测试1</h3>
            <p>sub1</p>
          </div>
        </div>
        <div class="item"><img src="../../assets/images/demo/demo2.jpg" alt="...">
          <div class="carousel-caption">
            <h3>测试2</h3>
            <p>sub2</p>
          </div>
        </div>
        <div class="item"><img src="../../assets/images/demo/demo3.jpg" alt="...">
          <div class="carousel-caption">
            <h3>测试3</h3>
            <p>sub3</p>
          </div>
        </div>
        <div class="item"><img src="../../assets/images/demo/demo4.jpg" alt="...">
          <div class="carousel-caption">
            <h3>测试4</h3>
            <p>sub4</p>
          </div>
        </div>
        <div class="item"><img src="../../assets/images/demo/demo5.jpg" alt="...">
          <div class="carousel-caption">
            <h3>测试5</h3>
            <p>sub5</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a href="#carousel-example-generic" class="left carousel-control" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a href="#carousel-example-generic" class="right carousel-control" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="row">
      <div v-if="posts && posts.length" class="col-md-4" v-for="post in posts">
        <h2 v-text="post.user"></h2>
        <p><i v-text="post.time"></i></p>
        <p><strong v-text="post.post"></strong></p>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  const {resta} = require('../../assets/rest')
  const emitter = require('../partical/Emitter')
  export default {
    components: {
      emitter
    },
    data () {
      return {
        posts: [],
        content: '',
        submit: event => {
          const vm = this
          resta.post('/post', {post: vm.content}, true).done(res => {
            vm.refresh().done(function () {
              vm.content = ''
            })
          })
        }
      }
    },
    computed: {
      user () {
        this.$store.commit('getSessionUser')
        return this.$store.state.user
      }
    },
    methods: {
      modelChanged (value) {
        this.content = value
      },
      refresh () {
        const vm = this
        const defer = $.Deferred()
        resta.get('/getPostAll').done(res => {
          vm.posts = res.body
          console.log(res)
          defer.resolve()
        })
        return defer.promise
      }
    },
    created () {
      this.refresh()
    }
  }
</script>
