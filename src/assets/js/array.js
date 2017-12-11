/**
 * Created by amarsoft on 2017/10/21.
 * 封装的几个数组通用方法
 */

// duplicate 查重
function duplicate (item, array, compare) {
  if (item === undefined || array === undefined || !(array instanceof Array) || !array.length) {
    return -1
  }
  if (compare && compare instanceof Function) {
    for (let i = 0; i < array.length; i++) {
      if (compare(item, array[i])) {
        return i
      }
    }
    return -1
  } else {
    return array.indexOf(item)
  }
}

export default {
  duplicate
}
