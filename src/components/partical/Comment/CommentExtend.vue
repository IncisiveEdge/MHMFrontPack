<style>

</style>

<style scoped>

</style>

<template>
  <ie-list style="width: 100%" v-if="ieList.listData && ieList.listData.length" :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
</template>

<script>
  import {IEListObject} from '@/assets/IEList'
  import ieList from '@/components/partical/DataGrid/DataGrid'
//  import {resta} from '../../assets/rest'

  const tplList = {
    type: '类型',
    title: '名称',
    username: '用户',
    content: '评论内容',
    commenttime: '评论时间'
  }
  export default {
    name: 'CommentExtend',
    props: ['rowData'],
    components: {
      ieList
    },
    data () {
      return {
        ieList: new IEListObject('ieList', this)
      }
    },
    computed: {
      data () {
        let rows = []
        if (this.rowData && this.rowData.replyList) {
          this.rowData.replyList.forEach((row) => {
            rows.push(Object.assign({type: this.rowData.type, title: this.rowData.title}, row))
          })
        }
        console.log(rows)
        return rows
      }
    },
    created () {
      console.warn(this.data)
      this.ieList.renderSync(tplList, this.data)
    }
  }
</script>
