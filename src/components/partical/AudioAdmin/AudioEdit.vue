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
      <FormItem label="音频名称" prop="title">
        <Input v-model="item.title"></Input>
      </FormItem>

      <FormItem label="所属分类" prop="type">
        <Select v-model="item.type" style="width:200px">
          <Option value="">-- 请选择 --</Option>
          <Option v-if="typeList && typeList.length" v-for="type in typeList" :value="type.typename" :key="type.id">{{ type.typename }}</Option>
        </Select>
      </FormItem>

      <FormItem label="音频介绍" prop="intro">
        <Input v-model="item.intro" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>

      <FormItem label="上传音频">
        <i-upload :config="audioUpload"></i-upload>
      </FormItem>

      <FormItem label="音频地址" v-if="item.addsrc">
        <Input readonly v-model="item.addsrc"></Input>
      </FormItem>

      <FormItem label="音频缩略图">
        <i-upload :config="imageUpload"></i-upload>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {resta} from '@/assets/rest'
  import IUpload from '../Upload/Upload'
  import IEditor from '../Editor'
  import IImage from '../../partical/Image/ImageResize'
  import ImageViewer from '@/components/partical/ImageViewer'
  import {getUploadConfig} from '../../../assets/js/upload-config'
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
        this.audioUpload.defaultFiles = []
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
            {required: true, message: '请填写音频名称', trigger: 'blur'},
            {type: 'string', max: 30, message: '音频名称最多能输入20个字', trigger: 'change'}
          ],
          type: [
            {required: true, message: '请选择音频类型', trigger: 'change'}
          ],
          intro: [
            {required: true, message: '请填写音频介绍', trigger: 'blur'},
            {type: 'string', max: 144, message: '音频介绍最多能输入144个字', trigger: 'change'}
          ]
        },
        audioUpload: getUploadConfig({
          method: 'uploadfile',
          methodName: 'upfile',
          accept: 'audio/*',
          maxSize: 5000,
          format: ['mp3', 'wmv']
        }, this.item, 'addsrc'),
        imageUpload: getUploadConfig({
          method: 'uploadimage',
          methodName: 'icon',
          accept: 'image/*',
          maxSize: 500,
          format: ['jpg', 'jpeg', 'png', 'gif']
        }, this.item, 'aicon')
      }
    },
    mounted () {
      resta.get('/getaudiotype.do').done(res => {
        this.typeList = res.typelist
      })
    }

  }
</script>
