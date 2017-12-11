<style>

</style>

<style scoped>

</style>

<template>
  <form action="" class="form-horizontal" role="form" method="post" style="width:40%">
    <div class="form-group">
      <label for="username" class="col-md-2 control-label">
        用户名
      </label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="username" name="username">
        <p class="help-block">你的账户名称，用于登录和显示</p>
      </div>
    </div>
    <div class="form-group">
      <label for="password" class="col-md-2 control-label">
        密码
      </label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="password" name="password">
      </div>
    </div>
    <div class="form-group">
      <label for="password-repeat" class="col-md-2 control-label">
        密码
      </label>
      <div class="col-md-10">
        <input type="text" class="form-control" id="password-repeat" name="password-repeat">
      </div>
    </div>
    <div class="form-group form-actions">
      <div class="col-md-offset-2 col-md-10">
        <button class="btn btn-primary" type="submit">注册</button>
      </div>

    </div>
  </form>
</template>

<script>
  export default {
    name: ''
  }
</script>
