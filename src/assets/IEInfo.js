/**
 * Created by amarsoft on 2017/10/28.
 */

import ie from './ie/ie'
import $ from 'jquery'
import {resta} from './rest'
// import {infoTplData, infoData} from './simulate/demo-PersonInfo'

// let thisContainer, thisDono, thisOwArgs, thisHasCodeParam, domObject
class IEInfoObject {
  constructor (_objectId, _vm) {
    this.objectId = _objectId
    this.template = {}
    this.data = {}
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

  queryInfoTplData (api) {
    return this.queryData(api)
  }

  queryInfoData (api, query) {
    if (api) {
      this.api_src = api
    }
    return this.queryData(api, query)
  }

  queryFilterData (query) {
    return this.queryData(this.api_src, query)
  }

  fillTemplate (tplData) {
    tplData = tplData.data || tplData
    const elements = tplData.elements
    const formUIHint = tplData.formUIHint
    formUIHint.columnNumber = formUIHint.columnNumber || 2
    this.template = {}
    elements.forEach((item, index) => {
      item.elementUIHint.colspan = item.elementUIHint.colspan || 1
      item.elementUIHint.layoutCols = (item.elementUIHint.colspan / formUIHint.columnNumber) * 12
      if (item.group) {
        const info = item.group.split(':')
        const sortNo = info[0].trim()
        const name = info[1].trim()
        this.template[sortNo] = this.template[sortNo] || {}
        const group = this.template[sortNo]
        group.sortNo = sortNo
        group.name = name
        group.items = group.items || []
        group.items.push(item)
      } else {
        const group = this.template['default'] = this.template['default'] || {}
        group.items = group.items || []
        group.items.push(item)
      }
    })
  }

  fillData (data) {
    this.data = data
  }

  render (tplData, infoData, container = $('.content-router-view')) {
    if (!tplData || !infoData) {
      console.error('ieForm tplData or infoData is not undefined')
      return
    }
    //
    // const infoTplPromise = $.when(this.fillTemplate(tplData))
    // const infoPromise = $.when(this.fillData(infoData))
    ie.block('正在加载', container)
    return $.when(this.fillTemplate(tplData), this.fillData(infoData)).then(() => {
      // this.globalConfig.loading = false
      // this.created = true
      ie.unblock(container)
    })
  }

  // render (queryInfoTplConfig, queryInfoConfig, mode) {
  //   if (!queryInfoTplConfig || !queryInfoConfig) {
  //     return
  //   }
  //
  //   const infoTplPromise = this.queryInfoTplData(queryInfoTplConfig.api, queryInfoTplConfig.query).done(res => {
  //     res = this.tplRender(res)
  //     this.fillTemplate(res)
  //   })
  //
  //   const infoPromise = this.queryInfoData(queryInfoConfig.api, queryInfoConfig.query).done(res => {
  //     if (res) {
  //       this.globalConfig.pagination.total = res.length || 0
  //       this.fillData(res)
  //     }
  //   })
  //
  //   return $.when(InfoTplPromise, InfoPromise).then(() => {
  //     this.globalConfig.loading = false
  //     this.created = true
  //   })
  //
  // }

  // run (container = $('.content-router-view'), dono, owArgs, hasCodeMap, _hasCodeParam) {
  //   ie.block('正在加载', container)
  //
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       resolve(infoTplData)
  //     }, 2000)
  //   })
  //   return promise.then(tplData => {
  //     tplData = tplData.data || tplData
  //     const elements = tplData.elements
  //     const formUIHint = tplData.formUIHint
  //     formUIHint.columnNumber = formUIHint.columnNumber || 2
  //     this.template = {}
  //     elements.forEach((item, index) => {
  //       item.elementUIHint.colspan = item.elementUIHint.colspan || 1
  //       item.elementUIHint.layoutCols = (item.elementUIHint.colspan / formUIHint.columnNumber) * 12
  //       if (item.group) {
  //         const info = item.group.split(':')
  //         const sortNo = info[0].trim()
  //         const name = info[1].trim()
  //         this.template[sortNo] = this.template[sortNo] || {}
  //         const group = this.template[sortNo]
  //         group.sortNo = sortNo
  //         group.name = name
  //         group.items = group.items || []
  //         group.items.push(item)
  //       } else {
  //         const group = this.template['default'] = this.template['default'] || {}
  //         group.items = group.items || []
  //         group.items.push(item)
  //       }
  //     })
  //     this.data = infoData
  //     ie.unblock(container)
  //   })
  // }
}

export {
  IEInfoObject
}
