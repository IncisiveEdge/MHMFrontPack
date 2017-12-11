<style>

</style>

<style scoped>

</style>

<template>
  <div class="form-horizontal" style="width:40%">
    <div class="form-group">
      <label for="username" class="col-md-2 control-label">
        用户名
      </label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="username" name="username" v-model="username">
        <p class="help-block">你的账户名称，用于登录和显示</p>
      </div>
    </div>
    <div class="form-group">
      <label for="password" class="col-md-2 control-label">
        密码
      </label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="password" name="password" v-model="password">
      </div>
    </div>
    <div class="form-group form-actions">
      <div class="col-md-offset-2 col-md-10">
        <button class="btn btn-primary" @click="loginSubmit()">登录</button>
      </div>

    </div>
  </div>
</template>

<script>
  const {resta} = require('../assets/rest')
  export default {
    name: '',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      loginSubmit: function () {
        console.log(resta)
        resta.post('/login', {username: this.username, password: this.password}, true)
      }
    }
  }
</script>
