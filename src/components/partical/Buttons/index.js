/**
 * Created by amarsoft on 2017/10/23.
 */
import Buttons from '../Buttons'
import $ from 'jquery'

const buttonsBuilder = function () {
  let buttonsList = []
  function addBtn (btn) {
    console.warn(this)
    if (btn instanceof Array) {
      let btnObject = {}
      if (!btn[0]) {
        console.error('button name is required !')
        return
      } else {
        btnObject.name = btn[0]
      }
      console.log(this)
      if (!btn[1] || !(scope[btn[1]] instanceof Function)) {
        console.error('button onclick event is required, need Function type anyway !')
        return
      } else {
        btnObject.onclick = btn[1]
      }
      btnObject.id = btn[2] || 'data-list-btn' + Math.uuid()
      btnObject.type = btn[3] || 'default'
      btnObject.icon = btn[4] || ''
      btnObject.size = btn[5] || ''
      btnObject.disabed = btn[6] || false
      // 未做查重处理
      buttonsList.push(btnObject)
    } else if (btn instanceof Object) {
      if (!btn.name) {
        console.error('button name is required !')
        return
      }
      if (!btn.onclick) {
        console.error('button onclick event is required, need Function type anyway !')
        return
      }
      let btnObject = {
        name: '',
        onclick: null,
        id: 'data-list-btn-' + Math.uuid(),
        type: '',
        icon: '',
        size: ''
      }
      $.extend(btnObject, btn)
      buttonsList.push(btnObject)
    }
  }
  return {
    vm: buttonsList,
    addBtn
  }
}

export default {
  builder: buttonsBuilder,
  component: Buttons
}
