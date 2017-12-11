<style>

</style>

<style scoped>
  .login-wrapper{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }

  .login-header{
    position: relative;
    height: 50%;

  }

  .login-header > .background{
    width: 100%;
    height: 100%;
    /*background: url("../../assets/images/demo/login-bg.jpg") no-repeat 50% 50%;*/
    /*background-size: cover;*/
    /*-webkit-filter: blur(5px); !* Chrome, Opera *!*/
    /*-moz-filter: blur(5px);*/
    /*-ms-filter: blur(5px);*/
    /*filter: blur(5px);*/
    /*filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); !* IE6~IE9 *!*/
  }

  .login-logo{
    position: absolute;
    z-index: 1000;
    top: 50px;
    left: 50px;
    font-size: x-large;
    background-color: white;
  }

  .login-body{
    position: relative;
    height: 50%;
  }

  .login-panel{
    position: absolute;
    top: calc(50% - 350px);
    left: calc(50% - 200px);
    width: 400px;
    height: 400px;
    background-color: white;
    padding: 70px 20px;
    border-radius: 5px;
  }

  .login-footer{

  }

  .ivu-form-item{
    width: 100%;
    /*margin-bottom: 40px;*/
  }

  .ivu-input-group .ivu-input{
    height: 50px
  }

  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>

<template>
    <div class="login-wrapper">
      <div class="login-header">
        <div class="background"></div>
        <!--<div class="login-logo">Ice 后台管理系统</div>-->
      </div>
      <div class="login-body">
        <div class="login-panel">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="person" size="20" color="#2d8cf0" slot="prepend" style="margin: 10px"></Icon>
              </Input>
            </FormItem>
            <br/>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
              <Icon type="locked" size="20" color="#2d8cf0" slot="prepend" style="margin: 10px"></Icon>
              </Input>
            </FormItem>
            <br/>
            <FormItem>
              <Checkbox v-model="remember">记住我</Checkbox>
            </FormItem>
            <FormItem>
              <Button :loading="loading" type="success" size="large" long @click="handleSubmit('formInline')">
                <!--<Icon v-if="loading" type="load-c" size=18 class="demo-spin-icon-load"></Icon>-->
                <span v-text="loginText"></span>
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="login-footer"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import {resta} from '../../assets/rest'
  import Cookie from '../../assets/js/cookie'
  export default {
    name: 'Login',
    data () {
      return {
        formInline: {
//          user: 'tuhanjiang',
//          password: '200810'
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        },
        remember: false,
        loading: false,
        loginText: '登录'
      }
    },

    methods: {
      handleSubmit (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.loading = true
            this.loginText = '正在登录'
            resta.post('/login', {username: this.formInline.user, password: this.formInline.password}, true).done(res => {
              if (res.body) {
                this.$Message.success('登录成功！即将跳转 ...')
                setTimeout(() => {
                  if (!this.remember) {
                    Cookie.delete('sessionUser')
                  } else {
                    const sessionUser = this.formInline
                    sessionUser.remember = this.remember
                    Cookie.set('sessionUser', JSON.stringify(sessionUser), 7)
                  }
                  this.$router.push({path: '/admin/'})
//                  console.log(this.$route, window.location)
//                  const adminPageUrl = window.location.host + '/admin/login'
//                  console.log(adminPageUrl)
//                  window.location.href = adminPageUrl
//                  window.open()
                  window.location.reload()
                }, 2000)
              } else {
                this.loading = false
                this.loginText = '登录'
                this.$Message.error(res.header.message)
              }
            }).fail((res) => {
              this.loading = false
              this.loginText = '登录'
              this.$Message.error(res.header.message)
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    },
    created () {
      const userCookie = JSON.parse(Cookie.get('sessionUser'))
      if (userCookie) {
        this.formInline.user = userCookie.user
        this.formInline.password = userCookie.password
        this.remember = userCookie.remember
      }
      setTimeout(() => {
        $('.ivu-input').css({'height': '50px', 'font-size': 'larger'})
      })
    }
  }
</script>
