/**
 * Created by amarsoft on 2017/10/28.
 */
import $ from 'jquery'

class IEButtonObject {
  constructor (_vm) {
    this.buttonList = []
    this.vm = _vm
    // vm && (vm.buttonList = this.buttonList)
  }

  addBtn (btn) {
    if (btn instanceof Array) {
      let btnObject = {}
      if (!btn[0]) {
        console.error('button name is required !')
        return
      } else {
        btnObject.name = btn[0]
      }
      if (!btn[1]) {
        console.error('button onclick event is required')
        return
      } else {
        btnObject.onclick = btn[1]
      }
      btnObject.icon = btn[2] || ''
      btnObject.type = btn[3] || 'default'
      btnObject.size = btn[4] || 'default'
      btnObject.id = btn[5] || 'data-list-btn' + new Date().getTime() * Math.random()
      btnObject.disabled = btn[6] || false
      btnObject.visible = btn[7] || true
      // 查重处理
      this.cnki(btn)
      this.buttonList.push(btnObject)
    } else if (btn instanceof Object) {
      if (!btn.name) {
        console.error('button name is required !')
        return
      }
      if (!btn.onclick) {
        console.error('button onclick event is required')
        return
      }
      let btnObject = {
        name: '',
        onclick: '',
        icon: '',
        type: 'default',
        size: 'default',
        id: 'data-list-btn-' + new Date().getTime() * Math.random(),
        disabled: false,
        visible: true
      }
      $.extend(btnObject, btn)
      this.cnki(btn)
      this.buttonList.push(btnObject)
    }
  }

  cnki (btn) {
    if (this.buttonList && this.buttonList.length) {
      for (let i = 0; i < this.buttonList.length; i++) {
        if (this.buttonList[i].name === btn.name) {
          this.buttonList.splice(i, 1)
          return i
        }
      }
    }
    return -1
  }
}
export {
  IEButtonObject
}
