const MenuData = require('./MenuData')
function treenavIterator (data, attr, value) {
  function ti (data, index) {
    let node = data
    let children = node.children
    if (!(children && children.length)) {
      return
    }

    while (index < children.length) {
      if (typeof attr === 'function') {
        attr(children[index])
      } else {
        children[index][attr] = value
      }
      ti(children[index], 0)
      index++
    }
  }
  ti(data, 0)
}

const RouterData = (function (data) {
  let routerData = []
  const menuData = {children: data.default.body}
  treenavIterator(menuData, item => {
    routerData.push(item.url)
  })

  return routerData
})(MenuData)

export default RouterData
