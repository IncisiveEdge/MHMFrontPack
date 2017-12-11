<style>

</style>

<style scoped>

</style>

<template>
  <div>
    <div>用户页面</div>
    <i-video :sources="video.sources" :options="video.options"></i-video>
  </div>
</template>

<script>
  import IVideo from 'vue-video'
  export default {
    name: 'User',
    components: {
      IVideo
    },
    data () {
      return {
        video: {
          sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: true,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
        }
      }
    }
  }
</script>
