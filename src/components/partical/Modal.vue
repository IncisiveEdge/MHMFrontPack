<style>

</style>

<style scoped>

</style>

<template>
  <Modal ref="imodal"
    v-model="modalAttrs.model"
    :width="modalAttrs.width"
    :title="modalAttrs.title"
    @on-ok="modalAttrs.onOk"
    @on-cancel="modalAttrs.onCancel"
    :ok-text="modalAttrs.textOk"
    :ok-cancel="modalAttrs.textCancel"
    :styles="modalAttrs.style"
    :class-name="modalAttrs.class"
    :transfer="modalAttrs.transfer"
    :scrollable="modalAttrs.scrollable"
    :closable="modalAttrs.closable"
    :mask-closable="modalAttrs.maskClosable"
  >
    <div v-if="!modal.title" slot="header"><slot name="header"></slot></div>
    <slot name="content"></slot>
    <div v-if="!modal.onOk && !modal.onCancel" slot="footer"><slot name="footer"></slot></div>

  </Modal>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: '',
    props: ['modal'],
    computed: {
      modalAttrs () {
        let m = {
          model: false,
          onOk: () => {
            this.modal.model = false
          },
          onCancel: () => {
            this.modal.model = false
          },
          transfer: false
        }
        $.extend(m, this.modal)
        return m
      }
    }
  }
</script>
