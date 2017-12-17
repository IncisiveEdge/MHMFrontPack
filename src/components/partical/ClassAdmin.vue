<style>

</style>

<style scoped>
  .ivu-icon{
    display: none;
  }
  .ivu-form:hover > .ivu-icon{
    display: inline;
  }
</style>

<template>
    <div>
      <Form ref="newsEdit" :model="types"  :label-width="80">
        <FormItem style="width: 80%;position:relative;" v-for="item in types" :key="item.id" :label="'类别'+item.id" :prop="item.id+''">
          <Input v-model="item.typename"></Input>
          <span class="ivu-icon ivu-icon-ios-close-empty" style="position: absolute; right: -10px;top: 0;font-size: large" @click="remove(item)"></span>
        </FormItem>
      </Form>
    </div>
</template>

<script>
  export default {
    name: '',
    props: ['data', 'onRemove'],
    computed: {
      types () {
        const target = {}
        this.data.map((item, index) => {
          target[item.id + ''] = item
        })
        console.warn(target)
        return target
      }
    },
    methods: {
      remove (item) {
        this.onRemove && (this.onRemove(item))
      }
    },
    mounted () {
      console.log(this.data)
    }
  }
</script>
