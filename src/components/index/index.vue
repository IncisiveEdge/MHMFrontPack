<style>
  html,body{
    overflow: auto;
  }
</style>

<style scoped>
  /******** footer **********/
  footer {
    background: #333;
    color: #eee;
    font-size: 11px;
    padding: 20px;
  }

  footer ul{
    padding-left:0;
  }

  footer ul>li {
    list-style: none;
    padding: 0;
  }

  footer ul>li>a{
    font-size: 15px;
    line-height:27px;
    color: #aaa;
  }

  footer p{
    color: #aaa;
  }

  footer ul>li>a:hover{
    color: white;
  }

  footer ul>li>a>span{
    font-size: 14px!important;
    display: inline-block;
    margin-right: 5px;
  }

  footer h4{
    border-bottom: 1px dashed #666;
    padding-bottom:8px;
    position: relative;
  }

  footer h4:after{
    content: '';
    position: absolute;
    bottom:-1px;
    left:0;
    height: 1px;
    width: 80px;
    background-color: #0c79bc;

  }

</style>

<template>
  <div style="height: 100%">
    <i-nav></i-nav>

    <div id="container">
      <router-view></router-view>
      <hr>
      <footer>
        <div class="container">
          <div class="row">
           <div class="col-sm-4">
            <h4>关于我们</h4>
            <p>ICE创客基地全称...是一个及...与...为一体的...平台，旨在建立一个...环境</p>
            <p>本网站由&nbsp;<span class="glyphicon glyphicon-heart"></span>&nbsp;Insicive Edge 团队制作</p>
          </div>

          <div class="col-sm-4">
            <h4>导航</h4>
            <ul class="unstyled">
              <li><a href=""><span class="fa fa-tachometer"></span>主页</a></li>
              <li><a href=""><span class="fa fa-server"></span>服务</a></li>
              <li><a href=""><span class="fa fa-link"></span>链接</a></li>
              <li><a href=""><span class="fa fa-send"></span>联系我们</a></li>
            </ul>
          </div>

          <div class="col-sm-4">
            <h4>关注我们</h4>
            <ul class="unstyled">
              <li><a href=""><span class="fa fa-weibo"></span>微博</a></li>
              <li><a href=""><span class="fa fa-wechat"></span>微信</a></li>
              <li><a href=""><span class="fa fa-qq"></span>QQ</a></li>
            </ul>
          </div>

          <div class="col-sm-12">
          <h5 id="copyright">Copyright &copy; Insicive Edge</h5>
          </div>
        </div>
      </div>

    </footer><!--页脚结束-->
  </div>
</div>
</template>

<script>
  import INav from '../partical/Navigator/NavClassic'
  export default {
    name: 'Index',
    components: {
      INav
    },
    computed: {
      user () {
        this.$store.commit('getSessionUser')
        return this.$store.state.user
      }
    }
  }
</script>
