<template>
  <div ref="editor"></div>
</template>
<script>
/* eslint-disable */

  export default {
    data() {
      return {
        id: new Date().getTime() * Math.random() + ''
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      config: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    watch: {
      value: function value(val, oldVal) {
        this.editor = UE.getEditor(this.id, this.config)
        val = val || ''
//        if (val !== null) {
        this.editor.setContent(val)
//        }
      },
    },
    mounted() {
      this.$nextTick(function f1() {
        // 保证 this.$el 已经插入文档
        this.$refs.editor.id = this.id
        this.editor = UE.getEditor(this.id, this.config)

        this.editor.ready(function f2() {
          this.editor.setContent(this.value || '')

          this.editor.addListener("contentChange", function () {
            const wordCount = this.editor.getContentLength(true)
            const content = this.editor.getContent()
            const plainTxt = this.editor.getPlainTxt()
//            this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt })
            this.$emit('input', content)
          }.bind(this))

          this.$emit('ready', this.editor)
        }.bind(this))
      })
    }
  }
</script>
