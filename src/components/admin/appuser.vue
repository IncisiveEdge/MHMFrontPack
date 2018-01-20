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
//  import $ from 'jquery'

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
//      this.ieList.addBtn(['新增', 'new', 'plus', 'primary'])
//      this.ieList.addBtn(['编辑', 'edit', 'edit', 'success'])
//      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
      this.ieList.setPagination(false)
      const tplList = {
        username: '用户名',
        cellphone: '手机号',
        registertime: '注册时间'
      }

      resta.get('/getappuserbypage.do').done(res => {
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
      }
    }
  }
</script>
