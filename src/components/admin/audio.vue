<style>

</style>

<style scoped>

</style>

<template>
  <div>
    <ie-list :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
    <i-modal :modal="modal">
      <div slot="content">
        <audio-edit ref="newsEdit" v-if="modalType === 'edit'" :item="item"></audio-edit>
        <div style="width:100%; height:100%; display: flex; flex-wrap: wrap; justify-content: center; align-items: center">
          <h2 style="width: 100%; text-align: center; color: #2d8cf0; padding: 10px 0">
            {{audioName}}
            <h4 style='display:inline; color: #999'>{{audioIntro}}</h4>
          </h2>
          <img :src="audioImg" height=200 style="margin-bottom: 20px" />
          <audio :src="audioSrc" controls="controls" autoplay style="width: 100%" v-if="modalType === 'preview'">
            您的浏览器不支持 audio 标签。
          </audio>
        </div>
      </div>
    </i-modal>
    <image-viewer ref="viewer"></image-viewer>
  </div>
</template>

<script>
  import {IEListObject} from '@/assets/IEList'
  import ieList from '@/components/partical/DataGrid/DataGrid'
  import AudioEdit from '../../components/partical/AudioAdmin/AudioEdit'
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
        audioName: '',
        audioIntro: '',
        audioImg: '',
        audioSrc: '',
        item: {}
      }
    },
    components: {
      ieList,
      AudioEdit,
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
      this.ieList.addBtn(['音频预览', 'preview', 'ios-mic', 'info'])
      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
      this.ieList.setPagination(false)
      const tplList = {
//        id: '编号',
        title: '音频名称',
        typename: '所属分类',
//        addsrc: '音频地址',
        intro: '音频介绍',
        // aicon: '图标',
        agreenums: '点赞次数',
        pubtime: '上传时间'
      }

//      let mockList = [{
//        id: 1,
//        title: '测试',
//        type: '测试',
//        addsrc: 'test/1.mp3',
//        intro: '测试',
//        aicon: '测试',
//        agreenums: 2,
//        pubtime: ''
//      }]
      resta.get('/getaudiobypage.do').done(res => {
        this.ieList.renderSync(tplList, res.list)
      })
    },
    methods: {
      new () {
        this.modal.model = true
        this.modalType = 'edit'
        this.modal.title = '新增音频'
        this.modal.width = 800
        this.modal.textOk = '新增'
        this.modal.onOk = () => {
          if (this.item) {
            resta.post('/insertaudio.do', this.item, true).done(res => {
              this.ieList.refresh({api: '/getaudiobypage.do'})
            })
          }
          this.modal.model = false
          this.item = {}
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
            resta.post('/updateaudio.do', this.item, true).done(res => {
              this.ieList.refresh({api: '/getaudiobypage.do'})
            })
          }
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
                    <p>点击删除后，音频列表将永久性删除当前选中数据</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          onOk: () => {
            let promises = []
            rows.map(row => {
              promises.push(resta.post('/deleteaudio.do', {'id': row.id + ''}, true))
            })

            Promise.all(promises).then(() => {
              this.$Message.success('删除成功')
              this.ieList.refresh({api: '/getaudiobypage.do'})
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
//        console.log(row)
        this.audioName = row.title
        this.audioIntro = row.intro
        this.audioImg = `${prefix}${row.aicon}`
        this.audioSrc = `${prefix}${row.addsrc}`
        this.modal.model = true
        this.modalType = 'preview'
        this.modal.title = '音频预览'
        this.modal.width = 800
        this.modal.buttons = false
        this.modal.onCancel = () => {
          // console.warn(232443)
          this.audioName = ''
          this.audioIntro = ''
          this.audioSrc = ''
          this.audioImg = ''
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
