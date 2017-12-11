<style>

</style>

<style scoped>
  .bg{
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #aaa;
    color: #aaa;
  }

  .bg .wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-attachment: fixed;
    /*display: none;*/
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*align-items: center;*/
    padding: 0 20px;
    z-index: 3000;
  }

  .bg .wrapper> h2,
  .bg .wrapper> p{
    display: block;
    /*height: 50%;*/
    visibility: hidden;
  }

  .bg .wrapper> p{
    text-align: justify;
    font-size: larger;
    padding-left: 40px;
    overflow: hidden;
  }

  .bg .block{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
  .bg:hover .block{
    background-color: rgba(0, 0, 0, 0.3);
  }
  .bg:hover .wrapper{
    transform: scale(.85);
    background-color: rgba(0, 0, 0, 0.6);
  }

  .bg:hover .wrapper h2,
  .bg:hover .wrapper p{
    /*display: block;*/
    color: white;
    visibility: visible;
  }

  /*.bg:hover img{*/
    /*display: none;*/
    /*transform: scale(1.1)*/
  /*}*/

</style>

<template>
    <div style="width: 100%; height: 100%">
      <div class="bg">
        <i-image :img-url="imgUrl" radius='true'></i-image>
        <div class="wrapper">
          <h2 v-text="title"></h2>
          <p v-text="content"></p>
        </div>
        <div class="block"></div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import IImage from '../../partical/Image/ImageResize'
  export default {
    name: '',
    components: {
      IImage
    },
    data () {
      return {
        imgUrl: '/static/images/demo/demo' + (parseInt(Math.random() * 30) + 1) + '.jpg',
        loading: true,
        title: '3D打印机',
        content: '我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。我们的3D打印机，我们的3D打印机。'
      }
    },
    methods: {
      onload (cell) {
        const wrapper = $('.img-wrapper')
        wrapper.hover(function () {
          cell.css('transform', 'scale(1.2)')
        }, function () {
          cell.css('transform', 'scale(1)')
        })
      }
    }
  }
</script>
