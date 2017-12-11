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
      /*
       name: '',
       onclick: '',
       icon: '',
       type: 'default',
       size: 'default',
       id: 'data-list-btn-' + new Date().getTime() * Math.random(),
       disabled: false,
       visible: true
       */

      this.ieList.render({api: '/getteachprotbname.do'}, {api: '/getteachprolist.do'}).done(() => {
        console.log(this)
      })
    },
    methods: {
      test () {
        console.warn(this, 222222222)
      }
    }
  }
</script>

