<style>

</style>

<style scoped>
  .wrapper{
    width: 100%;
    height:100%;
    overflow: hidden;
    position:relative;
    background-color: #eee;
  }
  .radius{
    border-radius: 100%;
  }

  .spin,
  .alt{
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
  }

  .alt{
    display: inline-block;
    width: 100px;
    left: calc(50% - 50px);
    text-align: center;
  }

  .status-wrapper{
    width: 100% ;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
    <div class="wrapper" :class="radius?'radius':''">
      <Spin class="spin" v-if="loading"></Spin>
      <i class="alt">{{width}} x {{height}}</i>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    props: {
      radius: {
        type: Boolean,
        default: false
      },
      imgUrl: {
        type: String
      }
    },
    data () {
      return {
        loading: true,
        width: 0,
        height: 0
      }
    },
    watch: {
      imgUrl (value) {
        console.log(value)
      }
    },
    mounted () {
      const wrapper = $(this.$el)
      this.width = wrapper.outerWidth()
      this.height = wrapper.outerHeight()
      const img = new Image()
//      this.image = '/static/images/demo/demo' + (parseInt(Math.random() * 30) + 1) + '.jpg'
      this.image = this.imgUrl
      img.src = this.image
      img.onload = (event) => {
        this.loading = false
        const imgRate = img.width / img.height
        const elRate = this.$el.clientWidth / this.$el.clientHeight
        let cell = $('<img style="position: absolute; left: 0; top: 0; transition: all .3s linear; z-index: 1000" src="' + this.image + '">')
        wrapper.prepend(cell)
        if (imgRate >= elRate) {
          cell.css('height', '100%')
          const left = parseInt((img.width * wrapper.outerHeight() / img.height - wrapper.outerWidth()) / 2)
          cell.css('left', -left + 'px')
        } else {
          cell.css('width', '100%')
          const top = parseInt((img.height * wrapper.outerWidth() / img.width - wrapper.outerHeight()) / 2)
          cell.css('top', -top + 'px')
          this.$emit('onload', cell)
        }
      }
    }
  }
</script>
