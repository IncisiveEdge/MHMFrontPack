<style>
  .demo-carousel{
    /*width: 100%;*/
    /*height: 200px;*/
    background-color: #506b9e;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: larger;
    color: white;
  }
</style>
<template>
  <div style="padding: 20px">
    <img-carousel :images="images" :setting="setting"></img-carousel>
    <img-carousel-controller :setting="setting"></img-carousel-controller>

  </div>
</template>
<script>
  import $ from 'jquery'
  import ImgCarousel from '../partical/ImageCarousel/ImageCarousel'
  import ImgCarouselController from '../partical/ImageCarousel/ImageCarouselSettings'

  export default {
    components: {
      ImgCarousel,
      ImgCarouselController
    },
    data () {
      return {
        setting: {
          autoplay: true,
          autoplaySpeed: 2000,
          dots: 'inside',
          trigger: 'click',
          arrow: 'hover',
          imageRadio: 3
        },

        images: [{
          src: '',
          text: '测试1'
        }, {
          src: '',
          text: '测试2'
        }, {
          src: '',
          text: '测试3'
        }]
      }
    },
    created () {
      setTimeout(() => {
        const transferOptions = $('.transfer-options')
        transferOptions && transferOptions.length && $(transferOptions[1]).hide()
      })
    }
  }
</script>
