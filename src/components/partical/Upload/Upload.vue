<style>

</style>

<style scoped>

</style>

<template>
  <Upload
    :action="Upload.url"
    :data="Upload.params"
    :headers="Upload.headers"
    :multiple="Upload.multiple"
    :name="Upload.name"
    :with-credentials="Upload.cookie"
    :show-upload-list="Upload.showUploadList"
    :type="Upload.type"
    :accept="Upload.accept"
    :format="Upload.format"
    :max-size="Upload.maxSize"
    :before-upload="Upload.before"
    :on-progress="Upload.progress"
    :on-success="Upload.success"
    :on-error="Upload.error"
    :on-preview="Upload.preview"
    :on-remove="Upload.remove"
    :on-format-error="Upload.formatError"
    :on-exceeded-size="Upload.sizeError"
    :default-file-list="Upload.defaultFiles"
  >
    <slot v-if="Upload.slot === true" name="upload"></slot>
    <Button v-if="Upload.slot === false" type="ghost" icon="ios-cloud-upload-outline">{{Upload.name || '上传文件'}}</Button>
    <span>请上传 {{Upload.format.join(', ')}} 类型文件</span>
  </Upload>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    props: ['config'],
    computed: {
      Upload () {
        let m = {
          url: window.location.origin + '/api/ueditor/jsp/controller.jsp?action=' + this.config.method,
          before: (file) => {

          },
          progress: (event, file, fileList) => {

          },
          success: (response, file, fileList) => {

          },
          error: (e, file, fileList) => {
            this.$Message.error('文件上传错误！错误信息请查看控制台')
            console.error(JSON.stringify(e))
          },
          preview: (file) => {

          },
          remove: (file, fileList) => {

          },
          formatError: (file, fileList) => {
            this.$Message.warning('上传错误！' + file.name + ' 不符合上传文件类型要求(只支持' + this.config.format.toString() + ' 格式文件上传)')
          },
          sizeError: (file, fileList) => {
            this.$Message.warning('上传错误！' + file.name + ' 文件大小超过上传限制 ' + this.config.maxSize + 'KB')
          },
          slot: false,
          defaultFiles: []
        }
        $.extend(m, this.config)
        return m
      }
    }
  }
</script>
