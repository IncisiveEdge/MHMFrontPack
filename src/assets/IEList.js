/**
 * Created by amarsoft on 2017/10/18.
 */
// import DataGrid from './DataGrid'
// import ie from './ie/ie'
import {resta} from './rest'
import {IEButtonObject} from './IEButton'
import $ from 'jquery'

class IEListObject {
  constructor (_objectId, _vm) {
    if (!_objectId) {
      console.warn('DataGrid objectId is not defined')
      return
    }
    if (!_vm) {
      console.warn('DataGrid scope is not defined')
      return
    }
    this.tplData = []
    this.listData = []
    this.globalConfig = {
      loading: true,
      selectedMode: 'multiple',
      height: undefined,
      customizeElements: [],
      ieBtn: new IEButtonObject(_vm),
      doPagination: true,
      pagination: {
        total: 0,
        currentPage: 1,
        perPage: 10,
        sizeOptions: [10, 15, 20, 30, 50, 100],
        async: false,
        onChange (curPage) {
          console.warn(curPage)
        },
        onSizeChange (pageSize) {
          console.warn(pageSize)
        }
      }
    }

    this.listOptions = {

    }

    this.api_src = ''
  }

  queryData (api, query = {}) {
    if (!api) {
      console.error('query args exception !')
      return
    }
    this.api_src = api
    const defer = $.Deferred()
    resta.get(api, query).done((res) => {
      defer.resolve(res)
      console.log('get data success from ' + api)
    }).fail((res) => {
      defer.reject(res)
      console.error('get data error !', JSON.stringify(res))
    })
    return defer.promise()
  }

  queryListTplData (api) {
    return this.queryData(api)
  }

  queryListData (api, query) {
    if (api) {
      this.api_src = api
    }
    return this.queryData(api, query)
  }

  queryFilterData (query) {
    return this.queryData(this.api_src, query)
  }

  renderOnly (listData, tplData) {
    this.fillTemplate(tplData)
    this.globalConfig.pagination.total = listData.length || 0
    this.fillData(listData)
    this.globalConfig.loading = false
    this.created = true
  }

  render (queryListTplConfig, queryListConfig) {
    if (!queryListTplConfig || !queryListConfig) {
      return
    }
    const listTplPromise = this.queryListTplData(queryListTplConfig.api, queryListTplConfig.query).done(res => {
      res = this.tplRender(res)
      this.fillTemplate(res)
    })
    const listPromise = this.queryListData(queryListConfig.api, queryListConfig.query).done(res => {
      if (res) {
        this.globalConfig.pagination.total = res.length || 0
        this.fillData(res)
      }
    })

    return $.when(listTplPromise, listPromise).then(() => {
      this.globalConfig.loading = false
      this.created = true
    })
  }

  fillTemplate (data) {
    this.tplData = []
    data.forEach((item, index) => {
      let temp = {}
      temp.key = item.field
      temp.title = item.name
      delete item.field
      delete item.name
      $.extend(temp, item)
      this.tplData.push(temp)
    })
  }

  fillData (data) {
    this.listData = []
    data.forEach((item, index) => {
      this.listData.unshift(item)
    })
  }

  search (query) {
    return this.queryFilterData(query)
  }

  setElement (element) {
    this.globalConfig.customizeElements.push(element)
  }

  setWrapperMode (bool) {
    this.globalConfig.height = bool ? undefined : 300
  }

  setSelectedMode (selectedType) {
    this.globalConfig.selectedMode = selectedType || 'single'
  }

  getSelectedMode () {
    return this.globalConfig.selectedMode
  }

  setPagination (bool) {
    this.globalConfig.doPagination = bool !== false
  }

  setItemsPerPage (counts) {
    this.globalConfig.pagination.perPage = counts
    if (this.globalConfig.pagination.sizeOptions.indexOf(counts) === -1) {
      this.globalConfig.pagination.sizeOptions.push(counts)
      this.globalConfig.pagination.sizeOptions.sort((a, b) => {
        return a - b
      })
    }
  }

  tplRender (tplData) {
    let list = []
    if (tplData instanceof Object && !(tplData instanceof Array)) {
      for (let item in tplData) {
        list.push({
          field: item,
          name: tplData[item]
        })
      }
    }
    return list
  }

  getSelectedRows () {
    return this.globalConfig.selectedRows
  }

  getSelectedRow () {
    var rows = this.globalConfig.selectedRows
    if (rows && rows.length) {
      return rows[0]
    }
    return null
  }

  addBtn (btn) {
    this.globalConfig.ieBtn.addBtn(btn)
  }
}

export {
  IEListObject
}

