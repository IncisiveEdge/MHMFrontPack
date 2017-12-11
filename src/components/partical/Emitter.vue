<style>

</style>

<style scoped>

</style>

<template>
  <div class="well form-inline center" style="text-align:center; display:flex">
        <textarea class="form-control" :placeholder="'用户'+(user.name || '')+':' " style="width: 100%;height:70px;" :value="content" @input="valueChanged">
        </textarea>
    &nbsp;
    <button class="btn btn-success" @click="submit">发言</button>
  </div>
</template>

<script>
  export default {
    name: 'Emitter',
    props: ['user', 'submit', 'model'],
    data () {
      return {
        content: this.model,
        count: 0
      }
    },
    created () {

    },
    methods: {
      valueChanged (event) {
        this.count ++
        console.log('abc', event.target.value)
        // this.content = event.target.value
        this.$emit('modelChanged', event.target.value)
      }
    }
  }
</script>
