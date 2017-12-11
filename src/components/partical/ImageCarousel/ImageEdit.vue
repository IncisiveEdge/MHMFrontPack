<style>

</style>

<style scoped>

</style>

<template>
    <Form :model="formItem" :label-width="80">
      <FormItem label="编号">
        <Input v-model="formItem.id"></Input>
      </FormItem>

      <FormItem label="图片上传">
        <i-upload :config="upload"></i-upload>
      </FormItem>

      <FormItem label="图片名称">
        <Input v-model="formItem.file.name"></Input>
      </FormItem>

      <FormItem label="图片大小">
        <Input v-model="formItem.file.size"></Input>
      </FormItem>

      <FormItem label="描述">
        <Input v-model="formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </FormItem>

    </Form>
</template>

<script>
  import IUpload from '../Upload/Upload'
  export default {
    name: '',
    components: {
      IUpload
    },
    data () {
      return {
        formItem: {
          id: 12,
          file: {
            name: '哈哈',
            size: '12'
          },
          description: '测试测试一下'
        },
        upload: {}
      }
    }
  }
</script>
