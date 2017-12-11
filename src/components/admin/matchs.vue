<template>
  <div>
    <ie-list :rows="ieList.listData" :columns="ieList.tplData" :config="ieList.globalConfig"></ie-list>
  </div>
</template>
<script>
  import {IEListObject} from '../../assets/IEList'
  import ieList from '../partical/DataGrid/DataGrid'
  export default {
    name: 'ExamplePersonSimpleInfo',
    components: {
      ieList
    },
    data () {
      return {
        ieList: new IEListObject('ieList', this)
      }
    },
    mounted () {
      this.ieList.render({api: '/getcampgametbname.do'}, {api: '/getcampgamelist.do'}).done(() => {

      })
    }
  }
</script>

