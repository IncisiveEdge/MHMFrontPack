<style>

</style>

<style scoped>

  nav{
    margin-bottom: 0;
  }
  .navbar{
    background-color: white;
    border-bottom: none;
    -webkit-box-shadow: 2px 2px 6px #aaa;
    -moz-box-shadow: 2px 2px 6px #aaa;
    box-shadow: 2px 2px 6px #aaa;
  }
  .nav>li>a{
    font-size: 16px;
    color: #333;
  }


  @media (min-width: 768px){
    .container {
      padding: 23px 0;
    }
  }
  .navbar-default .navbar-nav>.active>a,
  .navbar-default .navbar-nav>.active>a:focus,
  .navbar-default .navbar-nav>.active>a:hover {
    color: #ed3f14;
    background-color: transparent;
  }

  .navbar-default .navbar-nav>li>a:focus,
  .navbar-default .navbar-nav>li>a:hover {
    color: #ed3f14;
    background-color: transparent;
  }

  .navbar-default .navbar-toggle,
  .navbar-default .navbar-toggle {
    background-color: #333;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #ed3f14;
    transition: all .3s linear;
  }
  .navbar-default .navbar-toggle {
    border-color: transparent;
  }

  .navbar-right li {
    float: left;
    list-style: none;
  }

  .navbar-right li >a{
    /*text-decoration: none;*/
    color: #333;
    display: inline-block;
    padding: 0 8px;
    position: relative;
  }

  .navbar-right li:nth-last-child(1) >a:after{
    display: none;
  }

  .navbar-right li >a:after{
    content: '';
    width:0;
    height:50%;
    border-right: 1px solid #333;
    position: absolute;
    top: 25%;
    right: 0;

  }
  .navbar-right{
    margin-top: 14px;
    margin-bottom: 0;
  }
  .navbar-right li >a:hover,
  .navbar-right li >a:focus{

  }


</style>

<template>
  <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<a href="/" class="navbar-brand">Ice创客基地(前台)</a>-->
        </div>
        <div class="navbar-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li class="active"><a href="/">Ice创客基地(前台)</a></li>
            <li><a href="/news">新闻资讯</a></li>
            <li><a href="#">课程体系</a></li>
            <li><a href="#">营地赛事</a></li>
            <li><a href="/products">产品教具</a></li>
            <li><a href="#">关于ICE</a></li>
          </ul>
          <ul class="navbar-right">
            <li><a href="#">预约</a></li>
            <li><a href="#">报名</a></li>
            <li><a href="#">加盟咨询</a></li>
            <li><a href="#">公众号</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>
