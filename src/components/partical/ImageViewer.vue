<style>

</style>

<style scoped>
  .block{
    position: fixed;
    top:0; left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9000;
  }
</style>

<template>
  <div class="image-panel">
    <div class="block" v-show="loading">
      <Spin class="spin"></Spin>
    </div>
    <!--<img id="image" v-show="src" style="width: 160px" :src="src">-->
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../../../node_modules/imageviewer/dist/viewer'
  import '../../../node_modules/imageviewer/dist/viewer.css'
  export default {
    name: '',
    props: ['src'],
    data () {
      return {
        loading: false
      }
    },
    methods: {
      show (imgSrc) {
        let image = new Image()
        image.style.display = 'none'
        image.src = imgSrc
        this.loading = true
        image.onload = () => {
          this.loading = false
          $(image).viewer({
            hidden: () => {
              this.$emit('on-close')
            }
          }).click()
        }
      }
    }
  }
</script>
