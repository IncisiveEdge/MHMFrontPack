<style>

</style>

<style scoped>
  .modal-index{
    z-index: 2000
  }

  .image-panel{
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
  }

  .image-panel-alt, .image-panel-body{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border: 1px solid #ddd;
    background-color: #fafafa;
    color: #ccc;
    cursor: pointer;
  }

  .spin{
    /*position: absolute;*/
    /*left: calc(50% - 10px);*/
    /*top: calc(50%);*/
  }
</style>

<template>
    <div>
      <Button type="primary" icon="plus-round" @click="newImage">新增</Button>
      <data-grid :rows="model.listData" :columns="model.tplData" :config="model.globalConfig"></data-grid>
      <!--<img-viewer src="imageUrl"></img-viewer>-->
      <i-modal ref="modal" :modal="modal">
        <div slot="header" style="color:#f60;">
          <div v-show="modalType === 3">
            <span>删除确认</span>
          </div>
        </div>

        <div slot="content">
          <div v-show="modalType === 2">
            <image-edit></image-edit>
          </div>
          <div v-show="modalType === 3">
            <div style="text-align:center">
              <Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
              <p>点击删除后，轮播图片列表将永久性删除数据</p>
              <p>是否继续删除？</p>
            </div>
          </div>
        </div>

        <div slot="footer">
          <div v-show="modalType === 3">
            <Button size="large" @click="modal.model = false">取消</Button>
            <Button type="error" size="large" @click="del" icon="alert-circled">删除</Button>
          </div>
        </div>
      </i-modal>
    </div>
</template>

<script>
  import DataGrid from '../DataGrid/DataGrid'
  import ImageEdit from './ImageEdit'
  import IModal from '../Modal'
//  import ImgViewer from '../ImageViewer'
  export default {
    name: '',
    props: ['model'],
    components: {
      DataGrid,
      IModal,
      ImageEdit
//      ImgViewer
    },
    data () {
      return {
        modal: {
          model: false
        },
        modalType: 0,
        imageUrl: ''
      }
    },
    methods: {
      newImage () {
        this.modal.model = true
        this.modalType = 2
        this.modal.title = '新增轮播图片'
        this.modal.textOk = '新增'
        this.modal.onOk = () => {
          console.log('new')
          this.modal.model = false
        }
        this.modal.onCancel = () => {
          console.log('cancel')
          this.modal.model = false
        }
      },
      popView () {
        console.log(1)
//        this.imageUrl = ''
//        this.modal.model = true
//        this.modal.title = '图片预览'
//        this.modalType = 1
      },
      popEdit () {
        console.log(2)
        this.modal.model = true
        this.modal.title = '轮播图片编辑'
        this.modalType = 2
        this.modal.textOk = '保存'
        this.modal.onOk = () => {
          this.modal.model = false
          console.log('aa')
        }

        this.modal.onCancel = () => {
          this.modal.model = false
          console.log('bb')
        }
      },
      popDel () {
        console.log(3)
        this.modal.model = true
        this.modalType = 3
      },
      del () {
        console.log(111)
        this.modal.model = false
      }
    },
    created () {

    }
  }
</script>
