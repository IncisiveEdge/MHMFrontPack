<style>

</style>

<style scoped>
</style>

<template>
  <div>
    <ie-list :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
    <i-modal :modal="modal">
      <div slot="content">
        <video-edit ref="newsEdit" v-if="modalType === 'edit'" :item="item"></video-edit>
        <div style="width:calc(100% - 20px); height:calc(100% - 20px); display: flex; flex-wrap: wrap; margin: 0 10px; padding: 10px 0; align-items: center">


          <video :src="videoSrc" controls="controls" autoplay style="width: 100%" v-if="modalType === 'preview'">
          您的浏览器不支持 video 标签。
          </video>
          <div style="display:flex; margin-top: 10px; align-items:center">
            <img :src="videoImg" height=100/>
            <h2 style="color: #2d8cf0; display: flex; padding-left: 10px; flex-wrap:wrap">
              {{videoName}}
              <h4 style='width: 100%; color: #999'>{{videoIntro}}</h4>
            </h2>
          </div>
        </div>

      </div>
    </i-modal>
    <image-viewer ref="viewer"></image-viewer>
  </div>
</template>

<script>
  import {IEListObject} from '@/assets/IEList'
  import ieList from '@/components/partical/DataGrid/DataGrid'
  import VideoEdit from '@/components/partical/VideoAdmin/VideoEdit'
  import IModal from '@/components/partical/Modal'
  import ImageViewer from '@/components/partical/ImageViewer'
  import {resta} from '../../assets/rest.js'
  import $ from 'jquery'
  export default {
    name: '',
    data () {
      return {
        ieList: new IEListObject('ieList', this),
        modal: {
          model: false
        },
        modalType: '',
        item: {},
        videoName: '',
        videoIntro: '',
        videoImg: '',
        videoSrc: ''
      }
    },
    components: {
      ieList,
      VideoEdit,
      IModal,
      ImageViewer
    },
    created: function () {
      /*
       name: '',
       onclick: '',
       icon: '',
       type: 'default',
       size: 'default',
       id: 'data-list-btn-' + new Date().getTime() * Math.random(),
       disabled: false,
       visible: true
       */
      this.ieList.addBtn(['新增', 'new', 'plus', 'primary'])
      this.ieList.addBtn(['编辑', 'edit', 'edit', 'success'])
      this.ieList.addBtn(['视频预览', 'preview', 'videocamera', 'info'])
      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
      this.ieList.setPagination(false)
      resta.get('/getvideobypage.do').done(res => {
        const tplList = {
//          id: '编号',
          title: '视频名称',
//          addsrc: '视频地址',
          typename: '所属分类',
          intro: '视频介绍',
          agreenums: '点赞次数',
          pubtime: '上传时间'
        }
        this.ieList.renderSync(tplList, res.list)
      })
    },
    methods: {
      new () {
        this.modal.model = true
        this.modalType = 'edit'
        this.modal.title = '新增视频'
        this.modal.width = 800
        this.modal.textOk = '新增'
        this.modal.onOk = () => {
          if (this.item) {
            resta.post('/insertvideo.do', this.item, true).done(res => {
              this.ieList.refresh({api: '/getvideobypage.do'})
            })
          }
          this.item = {}
          this.modal.model = false
        }
        this.modal.onCancel = () => {
          this.item = {}
//          this.$refs.newsEdit.clear()
          this.modal.model = false
          // 组件重新加载hack
          this.modalType = 'close'
        }
      },
      edit () {
        const rows = this.ieList.getSelectedRows()
        if (!rows || !rows.length) {
          this.$Message.warning('请选择一条数据')
          return
        }
        if (rows.length !== 1) {
          this.$Message.warning('只能选择一条数据进行编辑')
          return
        }
        this.item = rows[0]
        this.modal.model = true
        this.modalType = 'edit'
        this.modal.title = '编辑新闻'
        this.modal.width = 800
        this.modal.textOk = '保存'
        this.modal.onOk = () => {
          if (this.item) {
            resta.post('/updatevideo.do', this.item, true).done(res => {
              this.ieList.refresh({api: '/getvideobypage.do'})
            })
          }
          this.item = {}
          this.modal.model = false
        }
        this.modal.onCancel = () => {
          this.item = {}
          this.modal.model = false
          // 组件重新加载hack
          this.modalType = 'close'
        }
      },
      del () {
        const rows = this.ieList.getSelectedRows()
        if (!rows || !rows.length) {
          this.$Message.warning('请选择一条数据')
          return
        }
        this.$Modal.confirm({
          title: '确认删除',
          content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
                    <p>点击删除后，视频列表将永久性删除当前数据</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          onOk: () => {
            let promises = []
            rows.map(row => {
              promises.push(resta.post('/deletevideo.do', {'id': row.id + ''}, true))
            })

            Promise.all(promises).then(() => {
              this.$Message.success('删除成功')
              this.ieList.refresh({api: '/getvideobypage.do'})
            })
          }
        })
      },
      preview () {
        const rows = this.ieList.getSelectedRows()
        if (!rows || !rows.length) {
          this.$Message.warning('请选择一条数据')
          return
        }
        setTimeout(() => {
          $('.ivu-modal-body').css({padding: '0', backgroundColor: 'rgb(38, 38, 43)'})
        })
        const row = rows[rows.length - 1]
        const prefix = window.$$prefix
        console.warn(row)
        this.videoName = row.title
        this.videoIntro = row.intro
        this.videoImg = `${prefix}${row.vicon}`
        this.videoSrc = `${prefix}${row.addsrc}`
        this.modal.model = true
        this.modalType = 'preview'
        this.modal.title = '视频预览'
        this.modal.width = 800
        this.modal.buttons = false
        this.modal.onCancel = () => {
          this.videoName = ''
          this.videoIntro = ''
          this.videoSrc = ''
          this.videoImg = ''
          this.modal.model = false
          // 组件重新加载hack
          this.modalType = 'close'
          setTimeout(() => {
            $('.ivu-modal-body').css({padding: '16px', backgroundColor: 'white'})
          })
        }
      }
    }
  }
</script>
