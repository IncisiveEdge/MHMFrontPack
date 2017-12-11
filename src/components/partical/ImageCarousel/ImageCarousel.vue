<style>

</style>

<style scoped>

</style>

<template>
  <Carousel
    v-model="model"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :trigger="setting.trigger"
    :arrow="setting.arrow" ref="carousel">
    <CarouselItem  v-for="(image, index) in images" :key="index" style="display:flex;flex-wrap:wrap;align-items:center;">
      <div class="demo-carousel" v-text="image.text" :style="'width: 100%;height:'+height+'px'"></div>
    </CarouselItem>
  </Carousel>
</template>

<script>
//  import $ from 'jquery'
  export default {
    name: 'ImgCarousel',
    props: ['setting', 'images'],
    data () {
      return {
        model: 0
      }
    },
    computed: {
      height () {
        return this.setting.imageRadio * 100
//        return parseInt(this.$refs.carousel.listWidth / this.setting.imageRadio)
      }
    }
  }
</script>
