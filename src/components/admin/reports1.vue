<template>
  <div id="test-info-wrapper">
    <ie-info :template="dfInfo.template" :data="dfInfo.data"></ie-info>
  </div>
</template>
<script>
//  import $ from 'jquery'
  import {IEInfoObject} from '../../assets/IEInfo'
  import ieInfo from '../partical/DataForm/index'
  import {infoTplData, infoData} from '../../assets/simulate/demo-PersonInfo'

  //  console.log(DFInfo)
  export default {
    name: 'ExamplePersonSimpleInfo',
    data () {
      return {
        dfInfo: new IEInfoObject('dfInfo', this)
      }
    },
    components: {
      ieInfo
    },
    mounted () {
      this.dfInfo.render(infoTplData, infoData).then(() => {
        console.log(this)
      })
    }
  }
</script>

