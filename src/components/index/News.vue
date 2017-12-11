<style scoped>
  .wrapper{
    margin: 25px 15%;
  }
  .news-wrapper{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>

<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-9">
        <news class="news-wrapper" direction="right"></news>
        <news class="news-wrapper" direction="left"></news>
        <news class="news-wrapper" direction="right"></news>
        <news class="news-wrapper" direction="left"></news>
        <news class="news-wrapper" direction="right"></news>
        <news class="news-wrapper" direction="left"></news>
      </div>
      <div class="col-md-3">
        <news class="news-wrapper" direction="top" ></news>
        <news class="news-wrapper" direction="bottom"></news>
      </div>
    </div>
  </div>

</template>

<script>
  import News from '../partical/Article/ArticleClassic'
  export default {
    name: '',
    components: {
      News
    }
  }
</script>
