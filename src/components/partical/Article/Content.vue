<style>

</style>

<style scoped>

  .wrapper{
    display: flex;
  }

  p{
    text-indent: 45px;
    margin: 10px 0 20px 0;
    text-align: justify;
  }

  img{
    width: 100%;
  }

  .top{
    flex-wrap: wrap;
  }

  .top > .image-wrapper,
  .top > .content-wrapper{
    width: 100%;
  }


  .bottom{
    flex-wrap: wrap;
  }

  .bottom > .image-wrapper,
  .bottom > .content-wrapper{
    width: 100%;
  }

  .bottom > .image-wrapper{
    order: 2;
  }

  .left{
    flex-wrap: nowrap;
    align-items: center;
  }

  .left > .image-wrapper,
  .left > .content-wrapper{
    width: 50%;
  }

  .left > .content-wrapper{
    padding-left: 5%;
  }


  .right{
    flex-wrap: nowrap;
    align-items: center;
  }

  .right > .image-wrapper,
  .right > .content-wrapper{
    width: 50%;
  }

  .right > .image-wrapper{
    order: 2;
  }
  .right > .content-wrapper{
    padding-right: 5%;
  }
</style>

<template>
  <div class="wrapper" :class="direction">
    <div class="image-wrapper">
      <img v-if="image" :src="image"/>
    </div>
    <div class="content-wrapper">
      <p v-text="text"></p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: '',
    props: {
      content: String,
      direction: {
        type: String,
        default: 'top'
      }
    },
    data () {
      return {
        image: ''
      }
    },
    computed: {
      text () {
        let content = this.content
        const exp = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
        let temp = content.match(exp)
        temp && temp.length && (this.image = temp[1])
        content = content.replace(/<[^>]*>/gi, '')
        const index = Math.max(content.indexOf('。'), content.indexOf('.')) + 1
        if (this.image) {
          content = content.substring(0, index)
        } else {
          const temp = content.substring(index, content.length)
          content = content.substring(0, index + Math.max(temp.indexOf('。'), temp.indexOf('.')) + 1)
        }
        return content
      }
    }
  }
</script>
