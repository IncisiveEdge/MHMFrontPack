<template>
  <div style="padding: 20px">
    <ie-list :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
    <i-modal :modal="modal">
      <div slot="content">
        <news-edit ref="newsEdit" v-if="modalType === 'edit'" :item="item"></news-edit>
      </div>
    </i-modal>
    <image-viewer ref="viewer"></image-viewer>
  </div>
</template>
<script>
  import ie from '@/assets/ie/ie'
  import {IEListObject} from '@/assets/IEList'
  import ieList from '@/components/partical/DataGrid/DataGrid'
  import NewsEdit from '@/components/partical/NewsAdmin/NewsEdit'
  import IModal from '@/components/partical/Modal'
  import ImageViewer from '@/components/partical/ImageViewer'
  import {resta} from '@/assets/rest.js'
  console.log(resta)
  export default {
    name: 'News',
    components: {
      ieList,
      NewsEdit,
      IModal,
      ImageViewer
    },
    data () {
      return {
        ieList: new IEListObject('ieList', this),
        modal: {
          model: false
        },
        modalType: '',
        item: {}
      }
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
      this.ieList.addBtn(['查看', 'view', 'eye', 'info'])
      this.ieList.addBtn(['编辑', 'edit', 'edit', 'success'])
      this.ieList.addBtn(['删除', 'del', 'trash-a', 'error'])
      this.ieList.setPagination(false)
      this.ieList.render({api: '/getnewstbtitle.do'}, {api: '/getnewstitlelist.do'}).done(() => {
      })
    },
    methods: {
      new () {
        this.modal.model = true
        this.modalType = 'edit'
        this.modal.title = '新增新闻'
        this.modal.width = 800
        this.modal.textOk = '新增'
        this.modal.onOk = () => {
          if (this.item) {
            console.warn('aaaaaaa', this.item)
            resta.post('/insertnewsinfo.do', this.item, true).done(res => {
              console.warn(res)
            })
          }
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
      view () {
        let previewImage = '/upload/newstitleimg/2-0.jpg'
        this.$refs.viewer.show(ie.url(previewImage))
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
            resta.post('/updatenewsinfo.do', this.item, true).done(res => {
              console.warn(res)
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
        this.$Modal.confirm({
          title: '确认对话框标题',
          content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
                    <p>点击删除后，轮播图片列表将永久性删除数据</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          onOk: () => {
            console.log('aaa')
          }
        })
      }
    }
  }
</script>
