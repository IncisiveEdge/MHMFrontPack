<style>

</style>

<style scoped>

</style>

<template>
  <div style="margin: 10px;">
    <Tabs @on-click="tabOnClick">
      <TabPane v-for="(item, index) in items" :key="index" :label="item.name" :icon="item.icon">
        <comment-admin :type="item.field"></comment-admin>
      </TabPane>
      <!--<TabPane label="视频" icon="ios-videocam">标签一的内容</TabPane>-->
      <!--<TabPane label="音频" icon="mic-a">标签二的内容</TabPane>-->
      <!--<TabPane label="曲谱" icon="ios-musical-notes">标签三的内容</TabPane>-->
    </Tabs>
  </div>
</template>

<script>
//  import {resta} from '@/assets/rest'
  import CommentAdmin from '@/components/partical/Comment/CommentAdmin'
  export default {
    name: 'Comment',
    components: {
      CommentAdmin
    },
    data () {
      return {
        items: [{
          name: '视频',
          icon: 'ios-videocam',
          field: 'video',
          data: []
        }, {
          name: '音频',
          icon: 'mic-a',
          field: 'audio',
          data: []
        }, {
          name: '曲谱',
          icon: 'ios-musical-notes',
          field: 'musicmap',
          data: []
        }]
      }
    },
    methods: {
      tabOnClick (tabIndex) {
      }
    },
    mounted () {

    }
  }
</script>
