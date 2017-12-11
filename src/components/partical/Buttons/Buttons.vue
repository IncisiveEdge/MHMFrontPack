<style>

</style>

<style scoped>

</style>

<template>
  <div v-if="model.buttonList && model.buttonList.length" style="display: flex; flex-wrap: wrap; border: 1px solid #ddd; padding: 5px 0 0 5px;margin-bottom: 5px">
    <Button style="margin: 0 5px 5px 0" v-for="(btn, index) in model.buttonList" :key="index" :id="btn.id" :type="btn.type" :size="btn.size" :icon="btn.icon" @click="click(btn.onclick, $event)">{{btn.name}}</Button>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['model'],
    methods: {
      click (name, event) {
        this.model.vm[name](event)
      }
    },
    created () {
    }
  }
</script>
