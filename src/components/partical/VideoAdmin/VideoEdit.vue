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
      <FormItem label="视频名称" prop="title">
        <Input v-model="item.title"></Input>
      </FormItem>

      <FormItem label="所属分类" prop="type">
        <Select v-model="item.type" style="width:200px">
          <Option value="">-- 请选择 --</Option>
          <Option v-if="typeList && typeList.length" v-for="type in typeList" :value="type.typename" :key="type.id">{{ type.typename }}</Option>
        </Select>
      </FormItem>

      <FormItem label="视频介绍" prop="intro">
        <Input v-model="item.intro" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>

      <FormItem label="上传视频">
        <i-upload :config="videoUpload"></i-upload>
      </FormItem>

      <FormItem label="视频地址" v-if="item.addsrc">
        <Input readonly v-model="item.addsrc"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import ie from '@/assets/ie/ie'
  import {resta} from '@/assets/rest'
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
        typeList: [],
        rules: {
          title: [
            { required: true, message: '请填写视频名称', trigger: 'blur' },
            { type: 'string', max: 30, message: '视频名称最多能输入20个字', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请选择视频类型', trigger: 'change' }
          ],
          intro: [
            { required: true, message: '请填写视频介绍', trigger: 'blur' },
            { type: 'string', max: 144, message: '视频介绍最多能输入144个字', trigger: 'change' }
          ]
        },
        videoUpload: {
          name: '上传',
          method: 'uploadvideo',
          accept: 'video/*',
          maxSize: 500,
          format: ['rm', 'rmvb', 'wmv', 'avi', 'mp4'],
          defaultFiles: (() => {
            if (this.item.addsrc) {
              console.log(this.item.addsrc)
              let videoName = this.item.addsrc.split('/')
              videoName = videoName[videoName.length - 1]
              return [{
                name: videoName,
                url: this.item.addsrc
              }]
            }
          })(),
          before: () => {
            if (this.item.addsrc) {
              this.$Message.warning('上传文件已存在，如需重新上传请先移除')
            }
            return !this.item.addsrc
          },
          success: (res, file, fileList) => {
            if (res) {
              this.item.addsrc = res.url
              this.$Message.success(res.original + ' 上传成功')
            }
          },
          remove: (file, fileList) => {
            this.item.addsrc = ''
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
    },
    mounted () {
      resta.get('/getvideotype.do').done(res => {
        this.typeList = res.typelist
      })
    }

  }
</script>
