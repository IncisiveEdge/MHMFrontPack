<style>

</style>

<style scoped>
.img-preview-container{
  width: 120px;
  height: 120px;
}
</style>
<template>
  <div>
    <Form ref="newsEdit" :rules="rules" :model="item" :label-width="80">
      <FormItem label="标题" prop="title">
        <Input v-model="item.title"></Input>
      </FormItem>

      <FormItem label="摘要" prop="newsabstract">
        <Input v-model="item.newsabstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>

      <FormItem label="标题图片">
        <i-upload :config="upload"></i-upload>
      </FormItem>

      <!--<FormItem label="预览" v-if="item.newspic">-->
      <!--<div class="img-preview-container">-->
      <!--<i-image :img-url="imgUrl"></i-image>-->
      <!--</div>-->
      <!--</FormItem>-->


      <FormItem label="内容编辑">
        <i-editor :value="item.content" @input="contentChanged"></i-editor>
      </FormItem>

    </Form>
    <image-viewer ref="viewer"></image-viewer>
  </div>
</template>

<script>
  import ie from '@/assets/ie/ie'
  import IUpload from '../Upload/Upload'
  import IEditor from '../Editor'
  import IImage from '../../partical/Image/ImageResize'
  import ImageViewer from '@/components/partical/ImageViewer'
  export default {
    name: '',
    props: {
      item: {
        type: Object,
        default () {
          return {
            content: ''
          }
        }
      }
    },
    components: {
      IUpload,
      IEditor,
      IImage,
      ImageViewer
    },
    methods: {
      contentChanged (content) {
        this.item.content = content
      },
      clear () {
        this.upload.defaultFiles = []
      }
    },
    computed: {
      imgUrl () {
        console.log(this.item, this.item.newspic)
        return window.location.origin + '/api/' + this.item.newspic
      }
    },
    data () {
      return {
        rules: {
          title: [
            { required: true, message: '请填写新闻标题', trigger: 'blur' },
            { type: 'string', max: 30, message: '标题最多能输入20个字', trigger: 'change' }
          ],
          newsabstract: [
            { required: true, message: '请填写新闻摘要', trigger: 'blur' },
            { type: 'string', max: 144, message: '摘要最多能输入144个字', trigger: 'change' }
          ]
        },
        upload: {
          name: '上传图片',
          method: 'uploadimage',
          accept: 'image/*',
          maxSize: 500,
          format: ['png', 'jpeg', 'gif', 'jpg'],
          defaultFiles: (() => {
            if (this.item.newspic) {
              console.log(this.item.newspic)
              let picName = this.item.newspic.split('/')
              picName = picName[picName.length - 1]
              return [{
                name: picName,
                url: this.item.newspic
              }]
            }
          })(),
          before: () => {
            if (this.item.newspic) {
              this.$Message.warning('上传文件已存在，如需重新上传请先移除')
            }
            return !this.item.newspic
          },
          success: (res, file, fileList) => {
            if (res) {
              this.item.newspic = res.url
              this.$Message.success(res.original + ' 上传成功')
            }
          },
          remove: (file, fileList) => {
            this.item.newspic = ''
            this.$Message.success(file.name + ' 已移除')
          },
          preview: (file) => {
            const url = file.url || (file.response && file.response.url)
            if (!url) {
              this.$Message.warning('文件地址错误，请查询')
              return
            }
            url && this.$refs.viewer.show(ie.url(url))
          }
        }
      }
    }
  }
</script>
