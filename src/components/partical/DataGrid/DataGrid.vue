<style scoped>

</style>
<template>
  <div style="overflow: auto">
    <div style="margin: 10px">
      <!--<Button type="primary" icon="plus-round">新增</Button>-->
      <!--<Button type="warning" icon="edit">修改</Button>-->
      <!--<Button type="success" icon="eye">查看</Button>-->
      <!--<Button type="error" icon="close-round">删除</Button>-->
      <!--显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>-->
      <!--显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>-->
      <!--显示索引 <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>-->
      <!--显示多选框 <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>-->
      <!--显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>-->
      <!--表格滚动 <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>-->
      <!--<br>-->
      <!--<br>-->
      <!--表格尺寸-->
      <!--<Radio-group v-model="tableSize" type="button">-->
      <!--<Radio label="large">大</Radio>-->
      <!--<Radio label="default">中</Radio>-->
      <!--<Radio label="small">小</Radio>-->
      <!--</Radio-group>-->
    </div>
    <ie-btn :model="config.ieBtn"></ie-btn>
    <Table height="200" ref="dataGrid" :highlight-row="config.selectedMode === 'single'" @on-current-change="onSelectedRow" @on-selection-change="onSelectedRow" :loading="config.loading" :border="true" :stripe="true" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="data" :columns="template"></Table>
    <div v-if="config.doPagination && config.pagination.total && config.pagination.total > config.perPage" style="margin-top: 20px;overflow: hidden">
      <div style="float: right">
        <Page show-total show-sizer show-elevator :total="config.pagination.total" :current="config.pagination.currentPage" :page-size="config.pagination.perPage" :page-size-opts="config.pagination.sizeOptions" @on-change="onChange" @on-page-size-change="onSizeChange"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import arrayUtil from '../../../assets/js/array'
  import ieBtn from '../Buttons/Buttons'
  import $ from 'jquery'
  export default {
    name: 'DataGrid',
    props: ['rows', 'columns', 'config'],
    components: {
      ieBtn
    },
    data () {
      return {
//        buttonsList: [{
//          id: 'test',
//          name: '测试',
//          icon: 'edit',
//          type: 'primary',
//          size: 'default',
//          onclick: event => {
//            let sm = this.config.selectedMode
//            if (sm === 'single') {
//              this.$refs.dataGrid.clearCurrentRow()
//              this.config.selectedMode = 'multiple'
//            } else if (sm === 'multiple') {
//              console.log(this, this.selectAll)
//              this.$refs.dataGrid.selectAll(false)
//              this.config.selectedMode = 'single'
//            }
//          }
//        }],
        showBorder: false,
        showStripe: false,
        showHeader: true,
        showIndex: true,
        showCheckbox: false,
        fixedHeader: false,
        tableSize: 'default'
      }
    },
    methods: {
      onChange (curPage) {
        this.config.pagination.currentPage = curPage
//        if (this.config.pagination.onChange) {
//          this.config.pagination.onChange(curPage)
//          return
//        }
      },
      onSizeChange (pageSize) {
        this.config.pagination.perPage = pageSize
//        if (this.config.pagination.onSizeChange) {
//          this.config.pagination.onSizeChange(pageSize)
//          return
//        }
      },
      onSelectedRow (row, oldRow) {
        if (row) {
          !(row instanceof Array) && (row = [row])
          this.config.selectedRows = row
        }
//        console.log(row, oldRow)
      }

    },
    computed: {
      data () {
        if (!this.rows) return []
        if (!this.config.doPagination) {
          return this.rows
        }
        if (this.config.doPagination && !this.config.pagination.async) {
          return this.rows.filter((item, index) => {
            const min = Math.max((this.config.pagination.currentPage - 1) * this.config.pagination.perPage + 1, 1)
            const max = Math.min(this.config.pagination.currentPage * this.config.pagination.perPage, this.rows.length)
            return index + 1 >= min && index + 1 <= max
          })
        }
      },
      template () {
        if (!this.columns) return
        let tpl = []
        tpl = tpl.concat(this.columns)

        if (this.config.customizeElements && this.config.customizeElements.length) {
          this.config.customizeElements.forEach((item, index) => {
            const ind = arrayUtil.duplicate(item, tpl, (a, b) => a.key === b.key)
            if (ind <= 0) {
              tpl.push(item)
            } else {
              $.extend(tpl[ind], item)
            }
          })
        }

        tpl.sort((a, b) => {
          return +a.sortNo - +b.sortNo
        })

        tpl.unshift({
          type: 'index',
          title: '#',
          align: 'center',
          width: 60
        })

        if (this.config.selectedMode === 'multiple') {
          tpl.unshift({
            type: 'selection',
            width: 60,
            align: 'center'
          })
        }

        return tpl
      }
    },
    created () {
    }
  }
</script>
