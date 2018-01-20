<style>

</style>

<style scoped>

</style>

<template>
  <div style="margin: 10px;">
    <Form :label-width="80" style="width: 500px">
      <FormItem label="选择评论">
        <Cascader :data="sourceTypes" :load-data="loadAction" trigger="hover" @on-change="selectChange" style="width:200px"></Cascader>
      </FormItem>
    </Form>
    <div style="display: flex; justify-content: center">
      <ie-list style="width: 100%" v-if="ieList.listData && ieList.listData.length" :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
      <div v-else style="width: 100%;text-align:center; color: #999">暂无数据</div>
    </div>
    <i-modal :modal="modal">
      <div slot="content">
        <ie-list style="width: 100%" :rows="ieList2.listData" :columns="ieList2.tplData" :config="ieList2.globalConfig"></ie-list>
      </div>
    </i-modal>
  </div>
</template>

<script>
  import {IEListObject} from '@/assets/IEList'
  import ieList from '@/components/partical/DataGrid/DataGrid'
  import {resta} from '../../assets/rest'
  import IModal from '@/components/partical/Modal'
//  import CommentExtend from '@/components/partical/Comment/CommentExtend'

//  console.log(CommentExtend)
  const tplList = {
    type: '类型',
    title: '名称',
    username: '用户',
    content: '评论内容',
    commenttime: '评论时间'
  }

  const typeMap = {
    'video': '视频',
    'audio': '音频',
    'musicmap': '曲谱'
  }
  export default {
    name: 'Comment',
    data () {
      return {
        modal: {
          model: false
        },
        rowData: {},
        ieList: new IEListObject('ieList', this),
        ieList2: new IEListObject('ieList2', this),
        sourceTypes: [{
          value: 'audio',
          label: '音频',
          children: [],
          loading: false,
          type: 'type'
        }, {
          value: 'video',
          label: '视频',
          children: [],
          loading: false,
          type: 'type'
        }, {
          value: 'musicmap',
          label: '曲谱',
          children: [],
          loading: false,
          type: 'type'
        }]
      }
    },
    components: {
      ieList,
      IModal
//      CommentExtend
    },
    methods: {
      selectChange (value, selectedData) {
        resta.get('/getcommentnums.do', {
          sourceid: +value[1],
          sourcetype: value[0]
        }, true).then((countRes) => {
          if (countRes && countRes.nums) {
            resta.get('/getcomment.do', {
              sourceid: +value[1],
              sourcetype: value[0],
              page: 1,
              pagesize: countRes.nums
            }, true).then((res) => {
              if (res && res.comment && res.comment.list && res.comment.list.length) {
                res.comment.list.forEach((row) => {
                  row.type = typeMap[value[0]]
                  row.title = selectedData[1].label
                })
                this.ieList.renderSync(tplList, res.comment.list)
                console.log(res.comment.list)
              }
            })
          } else {
            this.ieList.renderSync(tplList, [])
          }
        })
      },
      loadAction (item, callback) {
        item.loading = true
        if (item.type === 'type') {
          resta.get(`/get${item.value}bypage.do`).then((res) => {
            if (res && res.list && res.list.length) {
              res.list.forEach((row) => {
                item.children.push({
                  value: row.id,
                  label: row.title,
                  prev: item.value,
                  type: 'file'
                })
              })
            }
            item.loading = false
            callback()
          })
        }
      },
      replyEdit () {
        const rows = this.ieList.getSelectedRows()
        if (!rows || !rows.length) {
          this.$Message.warning('请选择一条数据')
          return
        }
        const replyList = rows[0].replylist
        replyList.forEach((row) => {
          row.title = rows[0].title
          row.type = rows[0].type
        })

        const replyTplList = Object.assign({'disabled': '是否禁用'}, tplList)
        this.ieList2.renderSync(replyTplList, rows[0].replylist)
        this.modal.model = true
        this.modal.title = '跟帖管理'
        this.modal.width = 800
      }
    },
    created () {
      this.ieList.addBtn(['跟帖管理', 'replyEdit', 'plus', 'primary'])
//      this.ieList.addBtn(['新增', 'new', 'plus', 'primary'])
//      this.ieList.addBtn(['编辑', 'edit', 'edit', 'success'])
//      this.ieList.addBtn(['音频预览', 'preview', 'ios-mic', 'info'])
//      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
    }
  }
</script>
